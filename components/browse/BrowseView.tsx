'use client'
import { useState, useEffect } from 'react'
import {
  sectionColors as physicsColors,
  sectionEmojis as physicsEmojis,
} from '@/data/experiments'
import type { EquipmentCategory } from '@/data/experiments'
import type { Experiment } from '@/data/loader'
import { getExperiments } from '@/data/loader'
import FilterBar from './FilterBar'
import BrowseSection from './BrowseSection'
import EquipmentFilter from './EquipmentFilter'
import { useI18n } from '@/lib/i18n'
import { getProgressSummary } from '@/lib/storage'

interface BrowseViewProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
  onExpClick: (num: number) => void
  onSearch: () => void
  onAskGali?: (section?: string) => void
  // Optional overrides for Chemistry (defaults to Physics data)
  expData?: Experiment[]
  sectionColorMap?: Record<string, string>
  sectionEmojiMap?: Record<string, string>
  heroTitle?: string
  heroSubtitle?: string
  heroNote?: string
  showArduinoFilter?: boolean
}

export default function BrowseView({
  activeFilter,
  onFilterChange,
  onExpClick,
  onSearch,
  onAskGali,
  expData,
  sectionColorMap,
  sectionEmojiMap,
  heroTitle,
  heroSubtitle,
  heroNote,
  showArduinoFilter = false,
}: BrowseViewProps) {
  const { t, locale } = useI18n()
  const allExperiments = expData ?? getExperiments(locale)
  const sectionColors = sectionColorMap ?? physicsColors
  const sectionEmojis = sectionEmojiMap ?? physicsEmojis

  const [equipmentFilter, setEquipmentFilter] = useState<EquipmentCategory | 'all'>('all')

  const [progress, setProgress] = useState({ completed: 0, total: 0 })
  useEffect(() => {
    const nums = allExperiments.map(e => e.num)
    setProgress(getProgressSummary(nums))
  }, [allExperiments])

  // Derive ordered section list from the data (preserves insertion order)
  const sections = [...new Set(allExperiments.map(e => e.section))]

  // Apply both section and equipment filters
  const filteredExps = allExperiments.filter(e => {
    if (activeFilter !== 'all' && e.section !== activeFilter) return false
    if (equipmentFilter !== 'all' && e.equipmentNeeded !== equipmentFilter) return false
    return true
  })

  const sectionGroups = sections
    .map(sec => ({
      name: sec,
      color: sectionColors[sec] || '#14B8A6',
      emoji: sectionEmojis[sec] || '🔬',
      exps: filteredExps.filter(e => e.section === sec),
    }))
    .filter(g => g.exps.length > 0)

  const title = heroTitle ?? t('browse.physics_title')
  const subtitle = heroSubtitle ?? t('browse.physics_subtitle', { count: allExperiments.length })
  const note = heroNote ?? t('browse.physics_note')

  return (
    <div className="main-area">
      <div id="view-browse">
        {/* Hero */}
        <div className="browse-hero">
          <div className="browse-hero-row">
            <div className="browse-hero-content">
              <h1 className="browse-hero-title">{title}</h1>
              <p className="browse-hero-subtitle">{subtitle}</p>
              {note && <p dir="auto" className="browse-hero-note" dangerouslySetInnerHTML={{ __html: note }} />}
              {progress.total > 0 && (
                <div className="browse-progress-wrap">
                  <div className="browse-progress-bar">
                    <div
                      className="browse-progress-fill"
                      style={{ width: `${(progress.completed / progress.total) * 100}%` }}
                    />
                  </div>
                  <span className="browse-progress-label">
                    {t('browse.experiments_completed', {
                      completed: progress.completed,
                      total: progress.total,
                    })}
                  </span>
                </div>
              )}
            </div>
            {onAskGali && (
              <button className="ask-gali-hero" onClick={() => onAskGali()} data-tour="ask-gali">
                ✦ {t('experiment.ask_gali')}
              </button>
            )}
          </div>
        </div>

        {/* Filter bar */}
        <FilterBar
          activeFilter={activeFilter}
          onFilterChange={onFilterChange}
          onSearch={onSearch}
          sections={sections}
          sectionColors={sectionColors}
          sectionEmojis={sectionEmojis}
          expData={allExperiments}
        />

        {/* Equipment filter */}
        <div style={{ padding: '0 2rem' }}>
          <EquipmentFilter
            value={equipmentFilter}
            onChange={setEquipmentFilter}
            showArduino={showArduinoFilter}
          />
        </div>

        {/* Sections grid */}
        <div className="browse-content" id="browseContent">
          {sectionGroups.length > 0 ? (
            sectionGroups.map(g => (
              <BrowseSection
                key={g.name}
                name={g.name}
                color={g.color}
                emoji={g.emoji}
                experiments={g.exps}
                onExpClick={onExpClick}
                onFilterChange={onFilterChange}
              />
            ))
          ) : (
            <div className="equipment-empty-state">
              <h3>{t('equipment.noMatchTitle')}</h3>
              <p>{t('equipment.noMatchDesc')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

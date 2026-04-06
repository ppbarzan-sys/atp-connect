'use client'
import { useState, useEffect } from 'react'
import {
  sectionColors as physicsColors,
  sectionEmojis as physicsEmojis,
} from '@/data/experiments'
import type { Experiment } from '@/data/loader'
import { getExperiments } from '@/data/loader'
import FilterBar from './FilterBar'
import BrowseSection from './BrowseSection'
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
}: BrowseViewProps) {
  const { t, locale } = useI18n()
  const allExperiments = expData ?? getExperiments(locale)
  const sectionColors = sectionColorMap ?? physicsColors
  const sectionEmojis = sectionEmojiMap ?? physicsEmojis

  const [progress, setProgress] = useState({ completed: 0, total: 0 })
  useEffect(() => {
    const nums = allExperiments.map(e => e.num)
    setProgress(getProgressSummary(nums))
  }, [allExperiments])

  // Derive ordered section list from the data (preserves insertion order)
  const sections = [...new Set(allExperiments.map(e => e.section))]

  const filteredExps =
    activeFilter === 'all'
      ? allExperiments
      : allExperiments.filter(e => e.section === activeFilter)

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
              {note && <p className="browse-hero-note">{note}</p>}
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
              <button className="ask-gali-hero" onClick={() => onAskGali()}>
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

        {/* Sections grid */}
        <div className="browse-content" id="browseContent">
          {sectionGroups.map(g => (
            <BrowseSection
              key={g.name}
              name={g.name}
              color={g.color}
              emoji={g.emoji}
              experiments={g.exps}
              onExpClick={onExpClick}
              onFilterChange={onFilterChange}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

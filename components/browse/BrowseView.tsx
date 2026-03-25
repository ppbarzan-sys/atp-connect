'use client'
import {
  experiments as physicsExps,
  sectionColors as physicsColors,
  sectionEmojis as physicsEmojis,
} from '@/data/experiments'
import type { Experiment } from '@/data/experiments'
import FilterBar from './FilterBar'
import BrowseSection from './BrowseSection'
import { useI18n } from '@/lib/i18n'

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
}: BrowseViewProps) {
  const { t } = useI18n()
  const allExperiments = expData ?? physicsExps
  const sectionColors = sectionColorMap ?? physicsColors
  const sectionEmojis = sectionEmojiMap ?? physicsEmojis

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

  return (
    <div className="main-area">
      <div id="view-browse">
        {/* Hero */}
        <div className="browse-hero">
          <div className="browse-hero-row">
            <div>
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>
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

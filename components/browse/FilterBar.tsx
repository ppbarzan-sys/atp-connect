'use client'
import type { Experiment } from '@/data/experiments'
import { useI18n } from '@/lib/i18n'

interface FilterBarProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
  onSearch?: () => void
  sections: string[]
  sectionColors: Record<string, string>
  sectionEmojis: Record<string, string>
  expData: Experiment[]
}

export default function FilterBar({
  activeFilter,
  onFilterChange,
  onSearch,
  sections,
  sectionColors,
  sectionEmojis,
  expData,
}: FilterBarProps) {
  const { t } = useI18n()
  const total = expData.length

  return (
    <div className="filter-bar">
      <button
        className={`filter-btn${activeFilter === 'all' ? ' active' : ''}`}
        onClick={() => onFilterChange('all')}
      >
        {t('browse.all_filter')} <span className="filter-count">{total}</span>
      </button>

      {sections.map(sec => {
        const count = expData.filter(e => e.section === sec).length
        const isActive = activeFilter === sec
        return (
          <button
            key={sec}
            className={`filter-btn${isActive ? ' active' : ''}`}
            onClick={() => onFilterChange(sec)}
            style={
              isActive
                ? {
                    borderColor: sectionColors[sec],
                    color: sectionColors[sec],
                    background: sectionColors[sec] + '15',
                  }
                : {}
            }
          >
            {sectionEmojis[sec]} {sec}{' '}
            <span className="filter-count">{count}</span>
          </button>
        )
      })}

      <div className="filter-divider" />

      {onSearch && (
        <button className="more-filters-btn" onClick={onSearch}>
          🔍 {t('browse.search_btn')}
        </button>
      )}
    </div>
  )
}

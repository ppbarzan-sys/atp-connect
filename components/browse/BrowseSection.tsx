'use client'
import { Experiment } from '@/data/loader'
import ExperimentCard from './ExperimentCard'
import { useI18n } from '@/lib/i18n'

interface BrowseSectionProps {
  name: string
  color: string
  emoji: string
  experiments: Experiment[]
  onExpClick: (num: number) => void
  onFilterChange: (filter: string) => void
}

export default function BrowseSection({ name, color, emoji, experiments, onExpClick, onFilterChange }: BrowseSectionProps) {
  const { t, tSection } = useI18n()
  return (
    <div className="browse-section" data-section={name}>
      <div className="browse-section-header">
        <h2>{emoji} {tSection(name)}</h2>
        <div className="browse-section-nav">
          <button className="browse-all-btn" onClick={() => onFilterChange(name)}>{t('browse.browse_all')}</button>
        </div>
      </div>
      <div className="cards-row" id={`cards-${name}`}>
        {experiments.map(exp => (
          <ExperimentCard
            key={exp.num}
            exp={exp}
            color={color}
            sectionEmoji={emoji}
            onClick={() => onExpClick(exp.num)}
          />
        ))}
      </div>
    </div>
  )
}

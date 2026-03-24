'use client'
import { Experiment } from '@/data/experiments'
import ExperimentCard from './ExperimentCard'

interface BrowseSectionProps {
  name: string
  color: string
  emoji: string
  experiments: Experiment[]
  onExpClick: (num: number) => void
  onFilterChange: (filter: string) => void
}

export default function BrowseSection({ name, color, emoji, experiments, onExpClick, onFilterChange }: BrowseSectionProps) {
  return (
    <div className="browse-section" data-section={name}>
      <div className="browse-section-header">
        <h2>{emoji} {name}</h2>
        <div className="browse-section-nav">
          <button className="browse-all-btn" onClick={() => onFilterChange(name)}>Browse all</button>
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

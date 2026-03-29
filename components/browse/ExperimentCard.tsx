'use client'
import { Experiment } from '@/data/loader'
import { useI18n } from '@/lib/i18n'

interface ExperimentCardProps {
  exp: Experiment
  color: string
  onClick: () => void
  sectionEmoji?: string
}

export default function ExperimentCard({ exp, color, onClick, sectionEmoji }: ExperimentCardProps) {
  const { tSection } = useI18n()

  // Use the experiment's own unique emoji; fall back to section emoji
  const fallbackMap: Record<string, string> = {
    Mechanics: '⚙️', Heat: '🔥', Acoustics: '🎵', Optics: '🔭',
    Magnetism: '🧲', Electricity: '⚡', 'Matter & Solutions': '🧪',
    'Acids & Bases': '⚗️', 'Gas Chemistry': '💨',
    Electrochemistry: '⚡', 'Plant Physiology': '🌱',
  }
  const emoji = exp.cardEmoji ?? sectionEmoji ?? fallbackMap[exp.section] ?? '🔬'
  const equipmentCount = exp.experiment?.equipment?.length ?? 0

  return (
    <div className="exp-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      {/* Header */}
      <div className="card-header-area">
        <div className="card-icon-wrap" style={{ background: color + '18' }}>
          <div className="card-icon">{emoji}</div>
        </div>
        <span className="card-exp-number" style={{ background: color + '20', color }}>
          #{exp.num}
        </span>
      </div>

      {/* Body */}
      <div className="card-body">
        <span className="card-section-badge" style={{ backgroundColor: color }}>
          {tSection(exp.section)}
        </span>
        <div className="card-title">{exp.title}</div>
        <div className="card-desc">{exp.desc}</div>
      </div>

      {/* Footer */}
      <div className="card-footer">
        {exp.setupTime && (
          <span className="card-meta-badge">⏱ {exp.setupTime}</span>
        )}
        {exp.duration && (
          <span className="card-meta-badge">⏳ {exp.duration}</span>
        )}
        {equipmentCount > 0 && (
          <span className="card-meta-badge">🧪 {equipmentCount} items</span>
        )}
      </div>
    </div>
  )
}

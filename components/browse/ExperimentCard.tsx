'use client'
import { Experiment } from '@/data/experiments'
import { useI18n } from '@/lib/i18n'

interface ExperimentCardProps {
  exp: Experiment
  color: string
  onClick: () => void
  sectionEmoji?: string // passed from BrowseSection; covers both Physics and Chemistry
}

export default function ExperimentCard({ exp, color, onClick, sectionEmoji }: ExperimentCardProps) {
  const { tSection } = useI18n()
  // Fallback map covers all known sections; sectionEmoji prop takes priority
  const fallbackMap: Record<string, string> = {
    Mechanics: '⚙️',
    Heat: '🔥',
    Acoustics: '🎵',
    Optics: '🔭',
    Magnetism: '🧲',
    Electricity: '⚡',
    'Matter & Solutions': '🧪',
    'Acids & Bases': '⚗️',
    'Gas Chemistry': '💨',
    Electrochemistry: '⚡',
    'Plant Physiology': '🌱',
  }
  const emoji = sectionEmoji ?? fallbackMap[exp.section] ?? '🔬'
  const iconBg = color + '18'

  return (
    <div className="exp-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="card-icon-wrap" style={{ background: iconBg }}>
        <div className="card-icon">{emoji}</div>
      </div>
      <div className="card-body">
        <div className="card-section" style={{ color }}>{tSection(exp.section)}</div>
        <div className="card-title">{exp.title}</div>
        <div className="card-desc">{exp.desc}</div>
      </div>
    </div>
  )
}

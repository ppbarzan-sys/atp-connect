'use client'
import { useI18n } from '@/lib/i18n'

interface ScoreDistributionProps {
  scores: number[]  // array of student averages
}

export default function ScoreDistribution({ scores }: ScoreDistributionProps) {
  const { t } = useI18n()

  const bands = [
    { label: '90-100%', min: 90, max: 100 },
    { label: '80-89%', min: 80, max: 89 },
    { label: '70-79%', min: 70, max: 79 },
    { label: '60-69%', min: 60, max: 69 },
    { label: '<60%', min: 0, max: 59 },
  ]

  const counts = bands.map(b => ({
    ...b,
    count: scores.filter(s => s >= b.min && s <= b.max).length,
  }))

  const maxCount = Math.max(...counts.map(c => c.count), 1)

  return (
    <div>
      <h3 style={{ marginBottom: 16 }}>{t('class_dashboard.score_distribution')}</h3>
      {counts.map(c => (
        <div className="dist-row" key={c.label}>
          <span className="dist-label">{c.label}</span>
          <div style={{ flex: 1 }}>
            <div
              className="dist-bar"
              style={{ width: `${(c.count / maxCount) * 100}%` }}
            />
          </div>
          <span className="dist-count">{c.count} {t('class_dashboard.students').toLowerCase()}</span>
        </div>
      ))}
    </div>
  )
}

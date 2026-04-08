'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useI18n } from '@/lib/i18n'
import { getAllGrades } from '@/lib/storage'

interface DataPoint {
  num: number
  score: number
  date: string
}

export function PerformanceTrend() {
  const { t } = useI18n()
  const router = useRouter()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const allGrades = getAllGrades()
  const dataPoints: DataPoint[] = [...allGrades.entries()]
    .filter(([, grades]) => grades.bestScore.total > 0)
    .map(([num, grades]) => ({
      num,
      score: Math.round((grades.bestScore.correct / grades.bestScore.total) * 100),
      date: grades.lastAttempt,
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  if (dataPoints.length === 0) {
    return (
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1e293b', marginBottom: '1rem' }}>
          {t('grades.performance_trend')}
        </h2>
        <div className="trend-chart-card" style={{ textAlign: 'center', padding: '40px 20px', color: '#64748b' }}>
          <p>{t('grades.no_data')}</p>
        </div>
      </div>
    )
  }

  const padding = { top: 20, right: 30, bottom: 40, left: 45 }
  const width = 600
  const height = 200
  const chartW = width - padding.left - padding.right
  const chartH = height - padding.top - padding.bottom

  const getX = (i: number) => {
    if (dataPoints.length === 1) return padding.left + chartW / 2
    return padding.left + (i / (dataPoints.length - 1)) * chartW
  }
  const getY = (score: number) => padding.top + chartH - (score / 100) * chartH

  const dotColor = (score: number) => {
    if (score >= 80) return '#22c55e'
    if (score >= 60) return '#eab308'
    return '#ef4444'
  }

  return (
    <div className="performance-trend" style={{ marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1e293b', marginBottom: '1rem' }}>
        {t('grades.performance_trend')}
      </h2>
      <div className="trend-chart-card">
        <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: 'auto' }}>
          {/* Gridlines */}
          {[20, 40, 60, 80, 100].map(v => (
            <g key={v}>
              <line
                x1={padding.left} y1={getY(v)}
                x2={width - padding.right} y2={getY(v)}
                stroke="#e2e8f0" strokeWidth={1} strokeDasharray="4,4"
              />
              <text x={padding.left - 8} y={getY(v) + 4} textAnchor="end" fontSize={11} fill="#94a3b8">{v}</text>
            </g>
          ))}

          {/* X-axis line */}
          <line
            x1={padding.left} y1={getY(0)}
            x2={width - padding.right} y2={getY(0)}
            stroke="#e2e8f0" strokeWidth={1}
          />

          {/* Connecting line */}
          {dataPoints.length > 1 && (
            <polyline
              points={dataPoints.map((d, i) => `${getX(i)},${getY(d.score)}`).join(' ')}
              fill="none"
              stroke="#14b8a6"
              strokeWidth={2}
              opacity={0.35}
            />
          )}

          {/* Dots + labels */}
          {dataPoints.map((d, i) => (
            <g
              key={d.num}
              style={{ cursor: 'pointer' }}
              onClick={() => router.push(`/experiments/${d.num}`)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <circle
                cx={getX(i)} cy={getY(d.score)}
                r={hoveredIndex === i ? 9 : 6}
                fill={dotColor(d.score)}
                stroke="#fff"
                strokeWidth={2}
              />
              {/* X-axis label */}
              <text
                x={getX(i)} y={height - 10}
                textAnchor="middle" fontSize={10} fill="#64748b"
              >
                #{d.num}
              </text>

              {/* Tooltip on hover */}
              {hoveredIndex === i && (
                <g>
                  <rect
                    x={getX(i) - 60} y={getY(d.score) - 35}
                    width={120} height={24} rx={4}
                    fill="#1e293b" opacity={0.9}
                  />
                  <text
                    x={getX(i)} y={getY(d.score) - 19}
                    textAnchor="middle" fontSize={11} fill="white"
                  >
                    #{d.num}: {d.score}%
                  </text>
                </g>
              )}
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}

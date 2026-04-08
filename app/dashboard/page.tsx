'use client'
import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import SearchOverlay from '@/components/SearchOverlay'
import { useI18n } from '@/lib/i18n'
import { getExperiments, getChemistryExperiments, type Experiment } from '@/data/loader'
import { getDashboardData, type DashboardData } from '@/lib/dashboard'
import { deleteAllProgress, loadProgress, getAllGrades, type ExperimentProgress } from '@/lib/storage'
import ConceptMasteryMap, { computeConceptMastery } from '@/components/dashboard/ConceptMasteryMap'
import { achievements, getEarnedAchievements } from '@/lib/achievements'

export default function DashboardPage() {
  const router = useRouter()
  const { t, tSection, locale } = useI18n()
  const [searchOpen, setSearchOpen] = useState(false)
  const [data, setData] = useState<DashboardData | null>(null)
  const [allExperiments, setAllExperiments] = useState<Experiment[]>([])
  const [progressMap, setProgressMap] = useState<Map<number, ExperimentProgress>>(new Map())

  useEffect(() => {
    const physics = getExperiments(locale)
    const chemistry = getChemistryExperiments(locale)
    const all = [...physics, ...chemistry]
    setAllExperiments(all)
    setData(getDashboardData(physics, chemistry))

    const pMap = new Map<number, ExperimentProgress>()
    for (const exp of all) {
      const prog = loadProgress(exp.num)
      if (prog) pMap.set(exp.num, prog)
    }
    setProgressMap(pMap)
  }, [locale])

  const grades = useMemo(() => getAllGrades(), [data])
  const earned = useMemo(() => getEarnedAchievements(grades), [grades])

  // Weak areas: 3 lowest-scoring concepts
  const weakAreas = useMemo(() => {
    const concepts = computeConceptMastery(allExperiments, progressMap)
    return concepts
      .filter(c => c.totalWeight > 0)
      .sort((a, b) => {
        const aM = a.totalWeight > 0 ? a.weightedScore / a.totalWeight : 0
        const bM = b.totalWeight > 0 ? b.weightedScore / b.totalWeight : 0
        return aM - bM
      })
      .slice(0, 3)
  }, [allExperiments, progressMap])

  // Performance trend: all completed, sorted by time
  const trendData = useMemo(() => {
    if (!data) return []
    return [...progressMap.entries()]
      .map(([num, prog]) => {
        const exp = allExperiments.find(e => e.num === num)
        return {
          num,
          title: exp?.title || `#${num}`,
          pct: prog.total > 0 ? Math.round((prog.correct / prog.total) * 100) : 0,
          completedAt: prog.completedAt,
        }
      })
      .sort((a, b) => new Date(a.completedAt).getTime() - new Date(b.completedAt).getTime())
  }, [progressMap, allExperiments, data])

  if (!data) return null

  const hasProgress = data.totalCompleted > 0

  return (
    <div className="page-shell">
      <Sidebar
        activeView="browse"
        onHome={() => router.push('/app')}
        onSearch={() => setSearchOpen(true)}
      />
      <main style={{ flex: 1, overflow: 'auto', background: '#f8fafc', padding: '0' }}>
        {/* Hero header */}
        <div style={{
          background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
          color: '#fff',
          padding: '2rem 2rem 1.5rem',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>
              {t('dashboard.title')}
            </h1>
            {hasProgress && (
              <button
                className="reset-all-btn"
                onClick={() => {
                  if (window.confirm(t('confirmResetAll'))) {
                    deleteAllProgress()
                    window.location.reload()
                  }
                }}
              >
                {t('resetAllProgress')}
              </button>
            )}
          </div>
        </div>

        <div style={{ padding: '1.5rem 2rem', maxWidth: 900, margin: '0 auto' }}>
          {!hasProgress ? (
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              color: '#64748b',
              fontSize: '1.1rem',
            }}>
              {t('dashboard.no_progress')}
            </div>
          ) : (
            <>
              {/* Overall Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem',
              }}>
                <StatCard label={t('dashboard.completed')} value={`${data.totalCompleted}/${data.totalExperiments}`} />
                <StatCard label={t('dashboard.average_score')} value={`${data.overallAvgScore}%`} />
                <StatCard
                  label={t('dashboard.last_activity')}
                  value={data.recentActivity[0]
                    ? new Date(data.recentActivity[0].completedAt).toLocaleDateString()
                    : '—'}
                />
              </div>

              {/* Subject Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <SubjectCard
                  title={t('dashboard.physics')}
                  icon="🔭"
                  stats={data.physics}
                  t={t}
                  onContinue={() => router.push('/app')}
                />
                <SubjectCard
                  title={t('dashboard.chemistry')}
                  icon="⚗️"
                  stats={data.chemistry}
                  t={t}
                  onContinue={() => router.push('/chemistry')}
                />
              </div>

              {/* Performance Trend Chart */}
              {trendData.length > 1 && (
                <PerformanceTrend data={trendData} t={t} onDotClick={(num) => router.push(`/experiments/${num}`)} />
              )}

              {/* Achievement Badges */}
              <AchievementBadges earned={earned} t={t} />

              {/* Section Breakdown */}
              <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1e293b', marginBottom: '1rem' }}>
                {t('dashboard.section_breakdown')}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
                {[...data.physics.sections, ...data.chemistry.sections].map(sec => (
                  <SectionRow key={sec.section} section={sec} tSection={tSection} />
                ))}
              </div>

              {/* Concept Mastery Map */}
              <ConceptMasteryMap experiments={allExperiments} progressMap={progressMap} />

              {/* Weak Areas */}
              {weakAreas.length > 0 && (
                <WeakAreas
                  areas={weakAreas}
                  allExperiments={allExperiments}
                  t={t}
                  onExpClick={(num) => router.push(`/experiments/${num}`)}
                />
              )}

              {/* Recent Activity */}
              {data.recentActivity.length > 0 && (
                <>
                  <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1e293b', marginBottom: '1rem' }}>
                    {t('dashboard.recent')}
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {data.recentActivity.map(act => (
                      <div
                        key={act.num}
                        onClick={() => router.push(`/experiments/${act.num}`)}
                        style={{
                          background: '#fff',
                          borderRadius: 12,
                          padding: '0.75rem 1rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                          cursor: 'pointer',
                        }}
                      >
                        <div>
                          <span style={{ fontWeight: 600, color: '#1e293b' }}>{act.title}</span>
                          <span style={{ color: '#94a3b8', fontSize: '0.8rem', marginLeft: '0.5rem' }}>
                            {new Date(act.completedAt).toLocaleDateString()}
                          </span>
                        </div>
                        <span style={{
                          fontWeight: 600,
                          color: act.total > 0 && (act.correct / act.total) >= 0.8 ? '#16a34a'
                            : act.total > 0 && (act.correct / act.total) >= 0.5 ? '#ca8a04'
                            : '#dc2626',
                        }}>
                          {t('dashboard.score')}: {act.correct}/{act.total}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </main>

      {searchOpen && (
        <SearchOverlay
          onClose={() => setSearchOpen(false)}
          onExpClick={(num) => { setSearchOpen(false); router.push(`/experiments/${num}`) }}
        />
      )}
    </div>
  )
}

/* ── Performance Trend Chart (SVG) ─────────────────────────────────────────── */

function PerformanceTrend({
  data,
  t,
  onDotClick,
}: {
  data: { num: number; title: string; pct: number; completedAt: string }[]
  t: (key: string, vars?: Record<string, string | number>) => string
  onDotClick: (num: number) => void
}) {
  const W = 700
  const H = 200
  const PAD = { top: 20, right: 20, bottom: 40, left: 45 }
  const chartW = W - PAD.left - PAD.right
  const chartH = H - PAD.top - PAD.bottom

  const dots = data.map((d, i) => {
    const x = PAD.left + (data.length > 1 ? (i / (data.length - 1)) * chartW : chartW / 2)
    const y = PAD.top + chartH - (d.pct / 100) * chartH
    const color = d.pct >= 80 ? '#16a34a' : d.pct >= 60 ? '#ca8a04' : '#dc2626'
    return { ...d, x, y, color }
  })

  const linePath = dots.map((d, i) => `${i === 0 ? 'M' : 'L'} ${d.x} ${d.y}`).join(' ')

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1e293b', marginBottom: '1rem' }}>
        {t('grades.performance_trend')}
      </h2>
      <div className="trend-chart-card">
        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto' }}>
          {/* Grid lines */}
          {[0, 20, 40, 60, 80, 100].map(v => {
            const y = PAD.top + chartH - (v / 100) * chartH
            return (
              <g key={v}>
                <line x1={PAD.left} y1={y} x2={W - PAD.right} y2={y} stroke="#e2e8f0" strokeWidth={1} />
                <text x={PAD.left - 8} y={y + 4} textAnchor="end" fontSize={10} fill="#94a3b8">{v}</text>
              </g>
            )
          })}
          {/* Line */}
          <path d={linePath} fill="none" stroke="#14b8a6" strokeWidth={2} />
          {/* Dots */}
          {dots.map((d, i) => (
            <g key={i} style={{ cursor: 'pointer' }} onClick={() => onDotClick(d.num)}>
              <circle cx={d.x} cy={d.y} r={6} fill={d.color} stroke="#fff" strokeWidth={2} />
              <title>{d.title}: {d.pct}%</title>
              <text
                x={d.x}
                y={H - PAD.bottom + 16}
                textAnchor="middle"
                fontSize={9}
                fill="#64748b"
              >
                #{d.num}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}

/* ── Achievement Badges ─────────────────────────────────────────────────────── */

function AchievementBadges({
  earned,
  t,
}: {
  earned: { id: string; titleKey: string; icon: string }[]
  t: (key: string) => string
}) {
  const earnedIds = new Set(earned.map(a => a.id))

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1e293b', marginBottom: '1rem' }}>
        {t('achievements.title')}
      </h2>
      <div className="achievements-grid">
        {achievements.map(a => {
          const isEarned = earnedIds.has(a.id)
          return (
            <div
              key={a.id}
              className={`achievement-badge${isEarned ? '' : ' locked'}`}
              title={isEarned ? t(a.titleKey) : t('achievements.locked')}
            >
              <span className="achievement-icon">{a.icon}</span>
              <span className="achievement-label">{t(a.titleKey)}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ── Weak Areas ──────────────────────────────────────────────────────────────── */

function WeakAreas({
  areas,
  allExperiments,
  t,
  onExpClick,
}: {
  areas: { label: string; weightedScore: number; totalWeight: number; experimentNums: number[] }[]
  allExperiments: Experiment[]
  t: (key: string, vars?: Record<string, string | number>) => string
  onExpClick: (num: number) => void
}) {
  return (
    <div style={{ marginBottom: '2rem', marginTop: '1.5rem' }}>
      <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1e293b', marginBottom: '1rem' }}>
        {t('grades.weak_areas')}
      </h2>
      <div className="weak-areas-card">
        {areas.map(a => {
          const mastery = a.totalWeight > 0 ? Math.round((a.weightedScore / a.totalWeight) * 100) : 0
          const relatedExps = a.experimentNums.slice(0, 3)
          return (
            <div className="weak-area-row" key={a.label}>
              <div className="weak-area-info">
                <span className="weak-area-label">{a.label}</span>
                <span className="weak-area-pct" style={{ color: mastery < 40 ? '#dc2626' : '#ea580c' }}>
                  {mastery}%
                </span>
              </div>
              <div className="weak-area-links">
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  {t('grades.review_experiments')}:{' '}
                  {relatedExps.map((num, i) => (
                    <span key={num}>
                      <button className="weak-area-exp-link" onClick={() => onExpClick(num)}>
                        #{num}
                      </button>
                      {i < relatedExps.length - 1 && ', '}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ── Existing helper components ──────────────────────────────────────────────── */

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 12,
      padding: '1.25rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f766e' }}>{value}</div>
      <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: 4 }}>{label}</div>
    </div>
  )
}

function SubjectCard({
  title, icon, stats, t, onContinue,
}: {
  title: string
  icon: string
  stats: { completed: number; total: number; avgScore: number }
  t: (key: string, vars?: Record<string, string | number>) => string
  onContinue: () => void
}) {
  const pct = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0

  return (
    <div style={{
      background: '#fff',
      borderRadius: 12,
      padding: '1.25rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <span style={{ fontSize: '1.5rem' }}>{icon}</span>
        <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#1e293b' }}>{title}</span>
      </div>
      <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.5rem' }}>
        {t('dashboard.experiments_done', { count: stats.completed, total: stats.total })}
      </div>
      {/* Progress bar */}
      <div style={{ background: '#e2e8f0', borderRadius: 6, height: 8, marginBottom: '0.5rem' }}>
        <div style={{ background: '#14b8a6', borderRadius: 6, height: 8, width: `${pct}%`, transition: 'width 0.3s' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
          {t('dashboard.average_score')}: {stats.avgScore}%
        </span>
        <button
          onClick={onContinue}
          style={{
            background: '#0f766e',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '0.4rem 1rem',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          {t('dashboard.continue')}
        </button>
      </div>
    </div>
  )
}

function SectionRow({
  section,
  tSection,
}: {
  section: { section: string; completed: number; total: number; avgScore: number }
  tSection: (name: string) => string
}) {
  const pct = section.total > 0 ? Math.round((section.completed / section.total) * 100) : 0
  const scoreColor = section.avgScore > 80 ? '#16a34a' : section.avgScore >= 50 ? '#ca8a04' : '#dc2626'

  return (
    <div style={{
      background: '#fff',
      borderRadius: 10,
      padding: '0.75rem 1rem',
      boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#1e293b' }}>{tSection(section.section)}</span>
        {section.completed > 0 && (
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: scoreColor }}>
            {section.avgScore}%
          </span>
        )}
      </div>
      <div style={{ background: '#e2e8f0', borderRadius: 4, height: 6 }}>
        <div style={{ background: '#14b8a6', borderRadius: 4, height: 6, width: `${pct}%` }} />
      </div>
      <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: 4 }}>
        {section.completed}/{section.total}
      </div>
    </div>
  )
}

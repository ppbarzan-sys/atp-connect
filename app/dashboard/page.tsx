'use client'
import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import SearchOverlay from '@/components/SearchOverlay'
import { useI18n } from '@/lib/i18n'
import { getExperiments, getChemistryExperiments, getRoboticsExperiments, type Experiment } from '@/data/loader'
import { getDashboardData, type DashboardData } from '@/lib/dashboard'
import { deleteAllProgress, loadProgress, getAllGrades, computeOverallAverage, getCompletedExperiments, loadTeacherMode, type ExperimentProgress } from '@/lib/storage'
import GaliModal, { GaliContext } from '@/components/GaliModal'
import { roboticsQuizzes } from '@/data/robotics-quizzes'
import { aiQuizzes } from '@/data/ai-quizzes'
import ConceptMasteryMap, { computeConceptMastery } from '@/components/dashboard/ConceptMasteryMap'
import { PerformanceTrend } from '@/components/dashboard/PerformanceTrend'
import { achievements, getEarnedAchievements } from '@/lib/achievements'
import XPBar from '@/components/XPBar'

export default function DashboardPage() {
  const router = useRouter()
  const { t, tSection, locale } = useI18n()
  const [searchOpen, setSearchOpen] = useState(false)
  const [galiOpen, setGaliOpen] = useState(false)
  const [galiCtx, setGaliCtx] = useState<GaliContext>({})
  const [data, setData] = useState<DashboardData | null>(null)
  const [allExperiments, setAllExperiments] = useState<Experiment[]>([])
  const [progressMap, setProgressMap] = useState<Map<number, ExperimentProgress>>(new Map())

  useEffect(() => {
    const physics = getExperiments(locale)
    const chemistry = getChemistryExperiments(locale)
    const robotics = getRoboticsExperiments(locale)
    const all = [...physics, ...chemistry, ...robotics]
    setAllExperiments(all)

    const courseQuizNums = {
      robotics: roboticsQuizzes.map(q => ({ num: q.num, title: q.title })),
      ai: aiQuizzes.map(q => ({ num: q.num, title: q.title })),
    }
    setData(getDashboardData(physics, chemistry, courseQuizNums, robotics))

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

  function openGali() {
    const wa = weakAreas.map(a => ({
      concept: a.label,
      mastery: a.totalWeight > 0 ? Math.round((a.weightedScore / a.totalWeight) * 100) : 0,
    }))
    setGaliCtx({
      completedExperimentCount: data?.totalCompleted ?? getCompletedExperiments().length,
      overallAvgScore: data?.overallAvgScore ?? computeOverallAverage(),
      weakAreas: wa,
      isTeacherMode: loadTeacherMode(),
    })
    setGaliOpen(true)
  }

  if (!data) return null

  const hasProgress = data.totalCompleted > 0

  return (
    <div className="page-shell">
      <Sidebar
        activeView="browse"
        onHome={() => router.push('/app')}
        onSearch={() => setSearchOpen(true)}
        onAskGali={openGali}
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
          {/* XP & Level Bar */}
          <XPBar />

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
                <SubjectCard
                  title={t('dashboard.robotics')}
                  icon="⚙️"
                  stats={data.robotics}
                  t={t}
                  onContinue={() => router.push('/robotics')}
                />
                <SubjectCard
                  title={t('dashboard.ai_courses')}
                  icon="🤖"
                  stats={data.ai}
                  t={t}
                  onContinue={() => router.push('/ai')}
                />
              </div>

              {/* Achievement Badges */}
              <AchievementBadges earned={earned} t={t} />

              {/* Performance Trend Chart */}
              <PerformanceTrend />

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
                          <span dir="auto" style={{ fontWeight: 600, color: '#1e293b' }}>{act.title}</span>
                          <span style={{ color: '#94a3b8', fontSize: '0.8rem', marginInlineStart: '0.5rem' }}>
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
      {galiOpen && (
        <GaliModal context={galiCtx} onClose={() => setGaliOpen(false)} />
      )}
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

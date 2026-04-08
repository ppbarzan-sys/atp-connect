'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import SearchOverlay from '@/components/SearchOverlay'
import { useI18n } from '@/lib/i18n'
import { getExperiments, getChemistryExperiments } from '@/data/loader'
import { getDashboardData, type DashboardData } from '@/lib/dashboard'
import { deleteAllProgress } from '@/lib/storage'

export default function DashboardPage() {
  const router = useRouter()
  const { t, tSection, locale } = useI18n()
  const [searchOpen, setSearchOpen] = useState(false)
  const [data, setData] = useState<DashboardData | null>(null)

  useEffect(() => {
    const physics = getExperiments(locale)
    const chemistry = getChemistryExperiments(locale)
    setData(getDashboardData(physics, chemistry))
  }, [locale])

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

              {/* Section Breakdown */}
              <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1e293b', marginBottom: '1rem' }}>
                {t('dashboard.section_breakdown')}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
                {[...data.physics.sections, ...data.chemistry.sections].map(sec => (
                  <SectionRow key={sec.section} section={sec} tSection={tSection} />
                ))}
              </div>

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

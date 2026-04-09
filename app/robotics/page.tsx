'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useI18n } from '@/lib/i18n'
import Sidebar from '@/components/Sidebar'
import SearchOverlay from '@/components/SearchOverlay'
import GaliModal, { GaliContext } from '@/components/GaliModal'
import CourseCard from '@/components/browse/CourseCard'
import CourseQuizPanel from '@/components/CourseQuizPanel'
import ExperimentCard from '@/components/browse/ExperimentCard'
import { getRoboticsCourses } from '@/data/robotics-courses'
import { roboticsQuizzes } from '@/data/robotics-quizzes'
import { roboticsExperiments, roboticsSectionColors, roboticsSectionEmojis } from '@/data/robotics-experiments'
import { loadProgress } from '@/lib/storage'

export default function RoboticsPage() {
  const router = useRouter()
  const { t, locale } = useI18n()
  const [searchOpen, setSearchOpen] = useState(false)
  const [galiOpen, setGaliOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState<'all' | 'arduino' | 'raspberry-pi' | 'cs50'>('all')
  const [expFilter, setExpFilter] = useState<'all' | 'Fundamentals' | 'Sensors' | 'Actuators' | 'Projects'>('all')
  const [openQuizId, setOpenQuizId] = useState<string | null>(null)

  const filteredExps = expFilter === 'all' ? roboticsExperiments : roboticsExperiments.filter(e => e.section === expFilter)
  const expSections = ['all', 'Fundamentals', 'Sensors', 'Actuators', 'Projects'] as const

  const courses = getRoboticsCourses(locale)
  const filtered = activeFilter === 'all' ? courses : courses.filter(c => c.category === activeFilter)

  const galiCtx: GaliContext = { subject: 'robotics' }

  const getCategoryLabel = (cat: string) => {
    if (cat === 'arduino') return t('robotics.category_arduino')
    if (cat === 'raspberry-pi') return t('robotics.category_raspberry_pi')
    return t('robotics.category_cs50')
  }

  const getCategoryColor = (cat: string) => {
    if (cat === 'arduino') return '#0D9488'
    if (cat === 'raspberry-pi') return '#E11D48'
    return '#A51C30'
  }

  function getQuizProgress(courseId: string) {
    const quiz = roboticsQuizzes.find(q => q.courseId === courseId)
    if (!quiz) return null
    const prog = loadProgress(quiz.num)
    if (!prog) return null
    return { correct: prog.correct, total: prog.total }
  }

  return (
    <div className="page-shell">
      <Sidebar
        activeView="browse"
        onHome={() => router.push('/app')}
        onSearch={() => setSearchOpen(true)}
        onAskGali={() => setGaliOpen(true)}
      />
      <div className="app-main">
        {/* Hero header */}
        <div className="browse-header robotics-header">
          <div className="browse-header-row">
            <div className="browse-header-content">
              <h1 className="browse-title">{'\u2699\uFE0F'} {t('robotics.title')}</h1>
              <p className="browse-subtitle">{t('robotics.subtitle')}</p>
              <p className="courses-note">{t('robotics.note')}</p>
            </div>
            <button className="ask-gali-hero" onClick={() => setGaliOpen(true)}>
              {'\u2726'} {t('experiment.ask_gali')}
            </button>
          </div>
        </div>

        {/* ── Hands-On Experiments Section ── */}
        <div style={{ padding: '1.5rem 2rem 0' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', margin: '0 0 4px' }}>
            🔬 {t('robotics.hands_on_experiments')}
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', margin: '0 0 1rem' }}>
            {t('robotics.experiments_subtitle')}
          </p>

          {/* Section filter buttons */}
          <div className="filter-group" style={{ marginBottom: '1rem' }}>
            {expSections.map(s => {
              const label = s === 'all'
                ? `${t('robotics.filter_all')} (${roboticsExperiments.length})`
                : `${roboticsSectionEmojis[s] || ''} ${t(`robotics.section_${s.toLowerCase()}`)} (${roboticsExperiments.filter(e => e.section === s).length})`
              return (
                <button
                  key={s}
                  className={`filter-btn${expFilter === s ? ' active' : ''}`}
                  onClick={() => setExpFilter(s)}
                >
                  {label}
                </button>
              )
            })}
          </div>

          {/* Experiment cards grid */}
          <div className="experiment-grid" style={{ marginBottom: '1.5rem' }}>
            {filteredExps.map(exp => (
              <ExperimentCard
                key={exp.num}
                exp={exp}
                color={roboticsSectionColors[exp.section] ?? '#14B8A6'}
                sectionEmoji={roboticsSectionEmojis[exp.section]}
                onClick={() => router.push(`/robotics/experiments/${exp.num}`)}
              />
            ))}
          </div>
        </div>

        {/* ── Online Courses Section ── */}
        <div style={{ padding: '0 2rem' }}>
          <div className="robotics-section-divider" />
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', margin: '0 0 4px' }}>
            🎓 {t('robotics.online_courses')}
          </h2>
        </div>

        {/* Filter bar */}
        <div className="filter-bar">
          <div className="filter-group">
            {[
              { key: 'all', label: `${t('robotics.filter_all')} (${courses.length})` },
              { key: 'arduino', label: `🔧 ${t('robotics.filter_arduino')} (${courses.filter(c => c.category === 'arduino').length})` },
              { key: 'raspberry-pi', label: `🍓 ${t('robotics.filter_raspberry_pi')} (${courses.filter(c => c.category === 'raspberry-pi').length})` },
              { key: 'cs50', label: `🎓 ${t('robotics.filter_cs50')} (${courses.filter(c => c.category === 'cs50').length})` },
            ].map(f => (
              <button
                key={f.key}
                className={`filter-btn${activeFilter === f.key ? ' active' : ''}`}
                onClick={() => setActiveFilter(f.key as typeof activeFilter)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Course grid */}
        <div className="courses-grid">
          {filtered.map(course => {
            const quiz = roboticsQuizzes.find(q => q.courseId === course.id)
            const progress = getQuizProgress(course.id)
            const isQuizOpen = openQuizId === course.id

            return (
              <div key={course.id}>
                <CourseCard
                  {...course}
                  categoryLabel={getCategoryLabel(course.category)}
                  categoryColor={getCategoryColor(course.category)}
                />
                {quiz && (
                  <div style={{ marginTop: -8, marginBottom: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 16px' }}>
                      <button
                        onClick={() => setOpenQuizId(isQuizOpen ? null : course.id)}
                        style={{
                          background: isQuizOpen ? '#0f766e' : 'var(--teal)',
                          color: '#fff',
                          border: 'none',
                          padding: '8px 16px',
                          borderRadius: 8,
                          fontWeight: 600,
                          fontSize: 13,
                          cursor: 'pointer',
                        }}
                      >
                        {isQuizOpen ? '\u2715 Close' : `\u{1F4DD} ${t('quiz.take_quiz')}`}
                      </button>
                      {progress ? (
                        <span className="quiz-progress completed">
                          {'\u2705'} {progress.correct}/{progress.total} ({Math.round((progress.correct / progress.total) * 100)}%)
                        </span>
                      ) : (
                        <span className="quiz-progress">{t('quiz.not_attempted')}</span>
                      )}
                    </div>
                    {isQuizOpen && (
                      <CourseQuizPanel quiz={quiz} onClose={() => setOpenQuizId(null)} />
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="courses-footer-note">
          <span>🎯 {t('robotics.powered_by')}</span>
        </div>
      </div>

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

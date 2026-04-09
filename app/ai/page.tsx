'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useI18n } from '@/lib/i18n'
import Sidebar from '@/components/Sidebar'
import SearchOverlay from '@/components/SearchOverlay'
import GaliModal, { GaliContext } from '@/components/GaliModal'
import CourseCard from '@/components/browse/CourseCard'
import CourseQuizPanel from '@/components/CourseQuizPanel'
import { getAICourses } from '@/data/ai-courses'
import { aiQuizzes } from '@/data/ai-quizzes'
import { loadProgress } from '@/lib/storage'

export default function AIPage() {
  const router = useRouter()
  const { t, locale } = useI18n()
  const [searchOpen, setSearchOpen] = useState(false)
  const [galiOpen, setGaliOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState<'all' | 'students' | 'educators' | 'advanced'>('all')
  const [openQuizId, setOpenQuizId] = useState<string | null>(null)

  const courses = getAICourses(locale)
  const filtered = activeFilter === 'all' ? courses : courses.filter(c => c.category === activeFilter)

  const galiCtx: GaliContext = { subject: 'ai' }

  const getCategoryLabel = (cat: string) => {
    if (cat === 'students') return t('ai.category_students')
    if (cat === 'educators') return t('ai.category_educators')
    return t('ai.category_advanced')
  }

  const getCategoryColor = (cat: string) => {
    if (cat === 'students') return '#0D9488'
    if (cat === 'educators') return '#F59E0B'
    return '#7C3AED'
  }

  function getQuizProgress(courseId: string) {
    const quiz = aiQuizzes.find(q => q.courseId === courseId)
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
        <div className="browse-header ai-header">
          <div className="browse-header-row">
            <div className="browse-header-content">
              <h1 className="browse-title">{'\u{1F916}'} {t('ai.title')}</h1>
              <p className="browse-subtitle">{t('ai.subtitle')}</p>
              <p className="courses-note">{t('ai.note')}</p>
            </div>
            <button className="ask-gali-hero" onClick={() => setGaliOpen(true)}>
              {'\u2726'} {t('experiment.ask_gali')}
            </button>
          </div>
        </div>

        {/* Filter bar */}
        <div className="filter-bar">
          <div className="filter-group">
            {[
              { key: 'all', label: `${t('ai.filter_all')} (${courses.length})` },
              { key: 'students', label: `👨‍🎓 ${t('ai.filter_students')} (${courses.filter(c => c.category === 'students').length})` },
              { key: 'educators', label: `👩‍🏫 ${t('ai.filter_educators')} (${courses.filter(c => c.category === 'educators').length})` },
              { key: 'advanced', label: `🔧 ${t('ai.filter_advanced')} (${courses.filter(c => c.category === 'advanced').length})` },
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
            const quiz = aiQuizzes.find(q => q.courseId === course.id)
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
          <span>{'\u2728'} {t('ai.powered_by')}</span>
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

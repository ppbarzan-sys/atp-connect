'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useI18n } from '@/lib/i18n'
import Sidebar from '@/components/Sidebar'
import SearchOverlay from '@/components/SearchOverlay'
import GaliModal, { GaliContext } from '@/components/GaliModal'
import CourseCard from '@/components/browse/CourseCard'
import { getAICourses } from '@/data/ai-courses'

export default function AIPage() {
  const router = useRouter()
  const { t, locale } = useI18n()
  const [searchOpen, setSearchOpen] = useState(false)
  const [galiOpen, setGaliOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState<'all' | 'students' | 'educators' | 'advanced'>('all')

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
          <div className="browse-header-content">
            <h1 className="browse-title">🤖 {t('ai.title')}</h1>
            <p className="browse-subtitle">{t('ai.subtitle')}</p>
            <p className="courses-note">{t('ai.note')}</p>
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
          {filtered.map(course => (
            <CourseCard
              key={course.id}
              {...course}
              categoryLabel={getCategoryLabel(course.category)}
              categoryColor={getCategoryColor(course.category)}
            />
          ))}
        </div>

        <div className="courses-footer-note">
          <span>✨ {t('ai.powered_by')}</span>
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

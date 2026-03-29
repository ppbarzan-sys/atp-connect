'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useI18n } from '@/lib/i18n'
import Sidebar from '@/components/Sidebar'
import SearchOverlay from '@/components/SearchOverlay'
import GaliModal, { GaliContext } from '@/components/GaliModal'
import CourseCard from '@/components/browse/CourseCard'
import { getRoboticsCourses } from '@/data/robotics-courses'

export default function RoboticsPage() {
  const router = useRouter()
  const { t, locale } = useI18n()
  const [searchOpen, setSearchOpen] = useState(false)
  const [galiOpen, setGaliOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState<'all' | 'arduino' | 'raspberry-pi' | 'cs50'>('all')

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
              <h1 className="browse-title">⚙️ {t('robotics.title')}</h1>
              <p className="browse-subtitle">{t('robotics.subtitle')}</p>
              <p className="courses-note">{t('robotics.note')}</p>
            </div>
            <button className="ask-gali-hero" onClick={() => setGaliOpen(true)}>
              ✦ {t('experiment.ask_gali')}
            </button>
          </div>
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

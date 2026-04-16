'use client'
import { useI18n } from '@/lib/i18n'

interface CourseCardProps {
  id: string
  title: string
  description: string
  duration: string
  difficulty: string
  icon: string
  url: string
  provider: string
  categoryLabel: string
  categoryColor: string
}

export default function CourseCard({ id: _id, title, description, duration, difficulty, icon, url, provider, categoryLabel, categoryColor }: CourseCardProps) {
  const { t } = useI18n()

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="course-card"
      aria-label={`${title} — ${t('ai.open_in_new_tab')}`}
    >
      <div className="course-card-header">
        <div className="course-icon-circle">
          <span className="course-icon">{icon}</span>
        </div>
        <div className="course-provider-badge">{provider}</div>
      </div>

      <div className="course-card-body">
        <span className="course-category-badge" style={{ backgroundColor: categoryColor }}>
          {categoryLabel}
        </span>
        <h3 dir="auto" className="course-title">{title}</h3>
        <p dir="auto" className="course-description">{description}</p>
      </div>

      <div className="course-card-footer">
        <span className="course-meta-badge">⏱ {duration}</span>
        <span className="course-meta-badge">{difficulty}</span>
        <span className="course-free-badge">🎓 Free</span>
      </div>
    </a>
  )
}

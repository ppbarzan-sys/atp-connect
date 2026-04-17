'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { saveTeacherMode } from '@/lib/storage'
import { useI18n } from '@/lib/i18n'
import { appEvents } from '@/lib/events'
import { hasCompletedPassionOnboarding } from '@/lib/passions'

const ROLE_KEY = 'userRole'
const DEMO_USER = 'Atpconnect'

export function getUserRole(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(ROLE_KEY)
}

export function setUserRole(role: 'student' | 'teacher') {
  if (typeof window === 'undefined') return
  localStorage.setItem(ROLE_KEY, role)
}

export function clearUserRole() {
  if (typeof window === 'undefined') return
  localStorage.removeItem(ROLE_KEY)
}

export function requestRoleSelection() {
  if (typeof window === 'undefined') return
  sessionStorage.setItem('needsRoleSelection', 'true')
}

export function shouldShowRoleSelector(): boolean {
  if (typeof window === 'undefined') return false
  // Only show when explicitly requested (after login or via Role button)
  return sessionStorage.getItem('needsRoleSelection') === 'true'
}

interface RoleSelectorProps {
  username: string
  onComplete: () => void
}

export default function RoleSelector({ username, onComplete }: RoleSelectorProps) {
  const router = useRouter()
  const { t } = useI18n()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Fade-in on mount
    requestAnimationFrame(() => setVisible(true))
  }, [])

  function selectRole(role: 'student' | 'teacher') {
    setUserRole(role)
    sessionStorage.removeItem('needsRoleSelection')

    if (role === 'teacher') {
      // Activate teacher mode
      saveTeacherMode(true)
      document.body.classList.add('teacher-mode')
      // Reset teacher onboarding so the tour triggers
      localStorage.removeItem('teacher_onboarding_completed')
      appEvents.emit('role-changed')
      router.replace('/classroom')
      return
    }

    // Ensure teacher mode is off
    saveTeacherMode(false)
    document.body.classList.remove('teacher-mode')
    // Reset student onboarding so the tour triggers
    localStorage.removeItem('student_onboarding_completed')
    const completed = hasCompletedPassionOnboarding()
    appEvents.emit('role-changed')
    router.replace(completed ? '/app' : '/onboarding/passions')
    // Only hide the overlay if we're staying on /app — otherwise keep it
    // visible until the route transition unmounts us, to avoid flashing
    // the underlying /app content.
    if (completed) onComplete()
  }

  return (
    <div className={`role-selector-overlay${visible ? ' role-visible' : ''}`}>
      <div className="role-selector-container">
        <div className="role-selector-header">
          <img
            src="/logo-atp-full.png"
            alt="ATP Connect"
            className="role-selector-logo"
          />
          <h1 className="role-selector-welcome">
            {t('role.welcome', { name: username })}
          </h1>
          <p className="role-selector-subtitle">{t('role.choose')}</p>
        </div>

        <div className="role-selector-cards">
          {/* Student Card */}
          <button
            className="role-card role-card-student"
            onClick={() => selectRole('student')}
          >
            <span className="role-card-icon">🎓</span>
            <h2 className="role-card-title">{t('role.student_title')}</h2>
            <p className="role-card-desc">{t('role.student_desc')}</p>
          </button>

          {/* Teacher Card */}
          <button
            className="role-card role-card-teacher"
            onClick={() => selectRole('teacher')}
          >
            <span className="role-card-icon">👩‍🏫</span>
            <h2 className="role-card-title">{t('role.teacher_title')}</h2>
            <p className="role-card-desc">{t('role.teacher_desc')}</p>
          </button>
        </div>
      </div>
    </div>
  )
}

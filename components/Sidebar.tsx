'use client'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { ATP_LOGO } from '@/data/experiments'
import { useI18n } from '@/lib/i18n'
import { loadTeacherMode, saveTeacherMode } from '@/lib/storage'
import { clearUserRole, requestRoleSelection } from '@/components/RoleSelector'
import LanguageSwitcher, { LanguageGlobe } from '@/components/LanguageSwitcher'

async function signOut(router: ReturnType<typeof useRouter>) {
  await fetch('/api/auth/signout', { method: 'POST' })
  router.push('/')
  router.refresh()
}

interface SidebarProps {
  activeView: 'browse' | 'experiment'
  onHome: () => void
  onSearch: () => void
  onAskGali?: () => void
}

export default function Sidebar({ activeView, onHome, onSearch, onAskGali }: SidebarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { t } = useI18n()
  const [teacherMode, setTeacherMode] = useState(false)
  const isChemistry = pathname?.startsWith('/chemistry') ?? false
  const isAI = pathname?.startsWith('/ai') ?? false
  const isRobotics = pathname?.startsWith('/robotics') ?? false
  const isDashboard = pathname?.startsWith('/dashboard') ?? false
  const isClassroom = pathname?.startsWith('/classroom') ?? false
  const isPhysicsActive = !isChemistry && !isAI && !isRobotics && !isDashboard && !isClassroom

  useEffect(() => {
    setTeacherMode(loadTeacherMode())
    const interval = setInterval(() => setTeacherMode(loadTeacherMode()), 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <aside className="sidebar">
      <div className="sidebar-logo" onClick={() => router.push('/app')} style={{ cursor: 'pointer' }}>
        <img src={ATP_LOGO} alt="ATP Logo" />
      </div>

      <div data-tour="sidebar-nav">
      {/* Physics */}
      <button
        className={`nav-icon${isPhysicsActive ? ' active' : ''}`}
        onClick={() => router.push('/app')}
        title={t('nav.physics_title')}
      >
        <span>🔭</span>
        <span className="label">{t('nav.physics')}</span>
      </button>

      {/* Chemistry */}
      <button
        className={`nav-icon${isChemistry ? ' active' : ''}`}
        onClick={() => router.push('/chemistry')}
        title={t('nav.chemistry_title')}
      >
        <span>⚗️</span>
        <span className="label">{t('nav.chemistry')}</span>
      </button>

      {/* AI */}
      <button
        className={`nav-icon${isAI ? ' active' : ''}`}
        onClick={() => router.push('/ai')}
        title={t('nav.ai_title')}
      >
        <span>🤖</span>
        <span className="label">{t('nav.ai')}</span>
      </button>

      {/* Robotics */}
      <button
        className={`nav-icon${isRobotics ? ' active' : ''}`}
        onClick={() => router.push('/robotics')}
        title={t('nav.robotics_title')}
      >
        <span>⚙️</span>
        <span className="label">{t('nav.robotics')}</span>
      </button>
      </div>

      {/* Dashboard */}
      <button
        className={`nav-icon${isDashboard ? ' active' : ''}`}
        onClick={() => router.push('/dashboard')}
        title={t('nav.dashboard_title')}
        data-tour="progress-nav"
      >
        <span>📊</span>
        <span className="label">{t('nav.dashboard')}</span>
      </button>

      {/* Classroom — teacher mode only */}
      {teacherMode && (
        <button
          className={`nav-icon${isClassroom ? ' active' : ''}`}
          onClick={() => router.push('/classroom')}
          title={t('nav.classroom_title')}
          data-tour="classroom-nav"
        >
          <span>🏫</span>
          <span className="label">{t('nav.classroom')}</span>
        </button>
      )}

      {/* Search — hidden on mobile bottom nav */}
      <button
        className="nav-icon mobile-nav-hide"
        onClick={onSearch}
        title={t('nav.search')}
      >
        <span>🔍</span>
        <span className="label">{t('nav.search')}</span>
      </button>

      {onAskGali && (
        <button
          className="nav-icon gali-nav mobile-nav-hide"
          onClick={onAskGali}
          title={t('nav.gali_title')}
        >
          <span>✦</span>
          <span className="label">{t('nav.gali')}</span>
        </button>
      )}

      <div className="sidebar-bottom">
        {/* Switch Role button */}
        <button
          className="switch-role-btn"
          onClick={() => {
            clearUserRole()
            saveTeacherMode(false)
            document.body.classList.remove('teacher-mode')
            requestRoleSelection()
            router.push('/app')
            router.refresh()
          }}
          title={t('nav.switch_role')}
        >
          <span>🔄</span>
          <span className="label">{t('nav.role')}</span>
        </button>

        {/* Desktop: full language switcher + sign-out button */}
        <div className="desktop-only-nav">
          <LanguageSwitcher />
          <button
            className="signout-btn"
            onClick={() => signOut(router)}
            title={t('nav.sign_out')}
            aria-label={t('nav.sign_out')}
          >
            ↩
          </button>
        </div>

        {/* Mobile: compact globe with dropdown (includes sign-out) */}
        <div className="mobile-only-nav">
          <LanguageGlobe onSignOut={() => signOut(router)} />
        </div>
      </div>
    </aside>
  )
}

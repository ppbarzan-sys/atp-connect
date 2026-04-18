'use client'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { ATP_LOGO } from '@/data/experiments'
import { useI18n } from '@/lib/i18n'
import { loadTeacherMode, saveTeacherMode } from '@/lib/storage'
import { clearUserRole, requestRoleSelection } from '@/components/RoleSelector'
import LanguageSwitcher, { LanguageGlobe } from '@/components/LanguageSwitcher'
import { appEvents } from '@/lib/events'

interface SidebarProps {
  activeView: 'browse' | 'experiment'
  onHome: () => void
  onSearch: () => void
  onAskGali?: () => void
}

type NavKey = 'physics' | 'chemistry' | 'ai' | 'robotics' | 'dashboard' | 'classroom'

function activeNavKey(pathname: string | null): NavKey {
  if (!pathname) return 'physics'
  if (pathname.startsWith('/chemistry')) return 'chemistry'
  if (pathname.startsWith('/ai')) return 'ai'
  if (pathname.startsWith('/robotics')) return 'robotics'
  if (pathname.startsWith('/dashboard')) return 'dashboard'
  if (pathname.startsWith('/classroom')) return 'classroom'
  return 'physics'
}

export default function Sidebar({ activeView, onHome, onSearch, onAskGali }: SidebarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { t } = useI18n()
  const [teacherMode, setTeacherMode] = useState(false)
  const [signingOut, setSigningOut] = useState(false)
  const [signOutError, setSignOutError] = useState(false)

  async function handleSignOut() {
    if (signingOut) return
    setSigningOut(true)
    setSignOutError(false)
    try {
      await fetch('/api/auth/signout', { method: 'POST' })
      clearUserRole()
      router.push('/')
      router.refresh()
    } catch {
      setSignOutError(true)
      setTimeout(() => setSignOutError(false), 3000)
    } finally {
      setSigningOut(false)
    }
  }
  const active = activeNavKey(pathname)

  useEffect(() => {
    setTeacherMode(loadTeacherMode())
    const handleUpdate = () => setTeacherMode(loadTeacherMode())
    appEvents.on('progress-updated', handleUpdate)
    appEvents.on('role-changed', handleUpdate)
    return () => {
      appEvents.off('progress-updated', handleUpdate)
      appEvents.off('role-changed', handleUpdate)
    }
  }, [])

  return (
    <aside className="sidebar">
      <div className="sidebar-logo" onClick={() => router.push('/app')} style={{ cursor: 'pointer' }}>
        <img src={ATP_LOGO} alt="ATP Logo" />
      </div>

      <div data-tour="sidebar-nav">
      {/* Physics */}
      <button
        className={`nav-icon${active === 'physics' ? ' active' : ''}`}
        onClick={() => router.push('/app')}
        title={t('nav.physics_title')}
        aria-label={t('nav.physics_title')}
      >
        <span>🔭</span>
        <span className="label">{t('nav.physics')}</span>
      </button>

      {/* Chemistry */}
      <button
        className={`nav-icon${active === 'chemistry' ? ' active' : ''}`}
        onClick={() => router.push('/chemistry')}
        title={t('nav.chemistry_title')}
        aria-label={t('nav.chemistry_title')}
      >
        <span>⚗️</span>
        <span className="label">{t('nav.chemistry')}</span>
      </button>

      {/* AI */}
      <button
        className={`nav-icon${active === 'ai' ? ' active' : ''}`}
        onClick={() => router.push('/ai')}
        title={t('nav.ai_title')}
        aria-label={t('nav.ai_title')}
      >
        <span>🤖</span>
        <span className="label">{t('nav.ai')}</span>
      </button>

      {/* Robotics */}
      <button
        className={`nav-icon${active === 'robotics' ? ' active' : ''}`}
        onClick={() => router.push('/robotics')}
        title={t('nav.robotics_title')}
        aria-label={t('nav.robotics_title')}
      >
        <span>⚙️</span>
        <span className="label">{t('nav.robotics')}</span>
      </button>
      </div>

      {/* Dashboard */}
      <button
        className={`nav-icon${active === 'dashboard' ? ' active' : ''}`}
        onClick={() => router.push('/dashboard')}
        title={t('nav.dashboard_title')}
        aria-label={t('nav.dashboard_title')}
        data-tour="progress-nav"
      >
        <span>📊</span>
        <span className="label">{t('nav.dashboard')}</span>
      </button>

      {/* Classroom — teacher mode only */}
      {teacherMode && (
        <button
          className={`nav-icon${active === 'classroom' ? ' active' : ''}`}
          onClick={() => router.push('/classroom')}
          title={t('nav.classroom_title')}
          aria-label={t('nav.classroom_title')}
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
        aria-label={t('nav.search')}
      >
        <span>🔍</span>
        <span className="label">{t('nav.search')}</span>
      </button>

      {onAskGali && (
        <button
          className="nav-icon gali-nav mobile-nav-hide"
          onClick={onAskGali}
          title={t('nav.gali_title')}
          aria-label={t('nav.gali_title')}
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
            appEvents.emit('role-changed')
            requestRoleSelection()
            router.push('/app')
            router.refresh()
          }}
          title={t('nav.switch_role')}
          aria-label={t('nav.switch_role')}
        >
          <span>🔄</span>
          <span className="label">{t('nav.role')}</span>
        </button>

        {/* Desktop: full language switcher + sign-out button */}
        <div className="desktop-only-nav">
          <LanguageSwitcher />
          <button
            className="signout-btn"
            onClick={handleSignOut}
            disabled={signingOut}
            title={t('nav.sign_out')}
            aria-label={t('nav.sign_out')}
          >
            {signingOut ? '...' : '↩'}
          </button>
          {signOutError && (
            <span className="signout-error" style={{ color: '#EF4444', fontSize: '0.7rem', display: 'block', textAlign: 'center', marginTop: '2px' }}>
              {t('nav.sign_out_error') || 'Sign out failed'}
            </span>
          )}
        </div>

        {/* Mobile: compact globe with dropdown (includes sign-out) */}
        <div className="mobile-only-nav">
          <LanguageGlobe onSignOut={handleSignOut} />
        </div>
      </div>
    </aside>
  )
}

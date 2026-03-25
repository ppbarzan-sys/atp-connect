'use client'
import { useRouter, usePathname } from 'next/navigation'
import { ATP_LOGO } from '@/data/experiments'
import { useI18n } from '@/lib/i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher'

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
  const isChemistry = pathname?.startsWith('/chemistry') ?? false
  const isPhysicsActive = !isChemistry

  return (
    <aside className="sidebar">
      <div className="sidebar-logo" onClick={() => router.push('/app')} style={{ cursor: 'pointer' }}>
        <img src={ATP_LOGO} alt="ATP Logo" />
      </div>

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

      {/* Search */}
      <button
        className="nav-icon"
        onClick={onSearch}
        title={t('nav.search')}
      >
        <span>🔍</span>
        <span className="label">{t('nav.search')}</span>
      </button>

      {onAskGali && (
        <button
          className="nav-icon gali-nav"
          onClick={onAskGali}
          title={t('nav.gali_title')}
        >
          <span>✦</span>
          <span className="label">{t('nav.gali')}</span>
        </button>
      )}

      <div className="sidebar-bottom">
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
    </aside>
  )
}

'use client'
import { useRouter, usePathname } from 'next/navigation'
import { ATP_LOGO } from '@/data/experiments'

async function signOut(router: ReturnType<typeof useRouter>) {
  await fetch('/api/auth/signout', { method: 'POST' })
  router.push('/')
  router.refresh()
}

interface SidebarProps {
  activeView: 'browse' | 'experiment'
  onHome: () => void
  onSearch: () => void
}

export default function Sidebar({ activeView, onHome, onSearch }: SidebarProps) {
  const router = useRouter()
  const pathname = usePathname()
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
        title="Physics Experiments"
      >
        <span>🔭</span>
        <span className="label">Physics</span>
      </button>

      {/* Chemistry */}
      <button
        className={`nav-icon${isChemistry ? ' active' : ''}`}
        onClick={() => router.push('/chemistry')}
        title="Chemistry Experiments"
      >
        <span>⚗️</span>
        <span className="label">Chem</span>
      </button>

      {/* Search */}
      <button
        className="nav-icon"
        onClick={onSearch}
        title="Search"
      >
        <span>🔍</span>
        <span className="label">Search</span>
      </button>

      <div className="sidebar-bottom">
        <button
          className="signout-btn"
          onClick={() => signOut(router)}
          title="Sign Out"
          aria-label="Sign Out"
        >
          ↩
        </button>
      </div>
    </aside>
  )
}

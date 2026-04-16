'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import BrowseView from '@/components/browse/BrowseView'
import SearchOverlay from '@/components/SearchOverlay'
import GaliModal from '@/components/GaliModal'
import { useI18n } from '@/lib/i18n'
import { getExperiments } from '@/data/loader'
import OnboardingTour, { RestartTourButton } from '@/components/OnboardingTour'
import RoleSelector, { shouldShowRoleSelector } from '@/components/RoleSelector'

export default function AppHome() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchOpen, setSearchOpen] = useState(false)
  const [galiOpen, setGaliOpen] = useState(false)
  const [showRoleSelector, setShowRoleSelector] = useState(false)
  const [username, setUsername] = useState('')
  const router = useRouter()
  const { t, locale } = useI18n()
  const experiments = getExperiments(locale)

  useEffect(() => {
    const storedUser = localStorage.getItem('atp_username') || ''
    setUsername(storedUser)
    if (shouldShowRoleSelector()) {
      setShowRoleSelector(true)
    }
    // Re-check periodically so the Role sidebar button works
    // (the component doesn't remount on client-side navigation)
    const interval = setInterval(() => {
      if (shouldShowRoleSelector()) {
        setUsername(localStorage.getItem('atp_username') || '')
        setShowRoleSelector(true)
      }
    }, 300)
    return () => clearInterval(interval)
  }, [])

  function handleExpClick(num: number) {
    router.push(`/experiments/${num}`)
  }

  if (showRoleSelector) {
    return (
      <RoleSelector
        username={username}
        onComplete={() => setShowRoleSelector(false)}
      />
    )
  }

  return (
    <div className="page-shell">
      <Sidebar
        activeView="browse"
        onHome={() => {}}
        onSearch={() => setSearchOpen(true)}
        onAskGali={() => setGaliOpen(true)}
      />
      <BrowseView
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        onExpClick={handleExpClick}
        onSearch={() => setSearchOpen(true)}
        onAskGali={() => setGaliOpen(true)}
        heroTitle={t('browse.physics_title')}
        heroSubtitle={t('browse.physics_subtitle', { count: experiments.length })}
        heroNote={t('browse.physics_note')}
      />
      {searchOpen && (
        <SearchOverlay
          onClose={() => setSearchOpen(false)}
          onExpClick={(num) => { setSearchOpen(false); handleExpClick(num) }}
        />
      )}
      {galiOpen && (
        <GaliModal context={{ subject: 'physics' }} onClose={() => setGaliOpen(false)} />
      )}
      <OnboardingTour />
      <RestartTourButton />
    </div>
  )
}

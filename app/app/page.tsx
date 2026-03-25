'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import BrowseView from '@/components/browse/BrowseView'
import SearchOverlay from '@/components/SearchOverlay'
import { useI18n } from '@/lib/i18n'
import { experiments } from '@/data/experiments'

export default function AppHome() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchOpen, setSearchOpen] = useState(false)
  const router = useRouter()
  const { t } = useI18n()

  function handleExpClick(num: number) {
    router.push(`/experiments/${num}`)
  }

  return (
    <div className="page-shell">
      <Sidebar
        activeView="browse"
        onHome={() => {}}
        onSearch={() => setSearchOpen(true)}
      />
      <BrowseView
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        onExpClick={handleExpClick}
        onSearch={() => setSearchOpen(true)}
        heroTitle={t('browse.physics_title')}
        heroSubtitle={t('browse.physics_subtitle', { count: experiments.length })}
      />
      {searchOpen && (
        <SearchOverlay
          onClose={() => setSearchOpen(false)}
          onExpClick={(num) => { setSearchOpen(false); handleExpClick(num) }}
        />
      )}
    </div>
  )
}

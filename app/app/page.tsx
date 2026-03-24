'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import BrowseView from '@/components/browse/BrowseView'
import SearchOverlay from '@/components/SearchOverlay'
import GaliModal, { GaliContext } from '@/components/GaliModal'

export default function AppHome() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchOpen, setSearchOpen] = useState(false)
  const [galiContext, setGaliContext] = useState<GaliContext | null>(null)
  const router = useRouter()

  function handleExpClick(num: number) {
    router.push(`/experiments/${num}`)
  }

  function openGali(section?: string) {
    setGaliContext({ section: section ?? 'all' })
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
        onAskGali={openGali}
      />
      {searchOpen && (
        <SearchOverlay
          onClose={() => setSearchOpen(false)}
          onExpClick={(num) => { setSearchOpen(false); handleExpClick(num) }}
        />
      )}
      {galiContext !== null && (
        <GaliModal
          context={galiContext}
          onClose={() => setGaliContext(null)}
        />
      )}
    </div>
  )
}

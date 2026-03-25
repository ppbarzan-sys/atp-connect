'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import BrowseView from '@/components/browse/BrowseView'
import SearchOverlay from '@/components/SearchOverlay'

export default function AppHome() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchOpen, setSearchOpen] = useState(false)
  const router = useRouter()

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

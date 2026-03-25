'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import BrowseView from '@/components/browse/BrowseView'
import SearchOverlay from '@/components/SearchOverlay'
import {
  chemistryExperiments,
  chemistrySectionColors,
  chemistrySectionEmojis,
} from '@/data/chemistry'

export default function ChemistryPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchOpen, setSearchOpen] = useState(false)
  const router = useRouter()

  function handleExpClick(num: number) {
    router.push(`/chemistry/${num}`)
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
        expData={chemistryExperiments}
        sectionColorMap={chemistrySectionColors}
        sectionEmojiMap={chemistrySectionEmojis}
        heroTitle="Browse Chemistry Experiments"
        heroSubtitle={`${chemistryExperiments.length} chemistry & plant physiology experiments for the ATP Mobile Lab 4900.00`}
      />

      {searchOpen && (
        <SearchOverlay
          onClose={() => setSearchOpen(false)}
          onExpClick={num => {
            setSearchOpen(false)
            handleExpClick(num)
          }}
          expData={chemistryExperiments}
          sectionColorMap={chemistrySectionColors}
          sectionEmojiMap={chemistrySectionEmojis}
        />
      )}
    </div>
  )
}

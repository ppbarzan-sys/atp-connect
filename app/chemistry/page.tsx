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
import { useI18n } from '@/lib/i18n'

export default function ChemistryPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchOpen, setSearchOpen] = useState(false)
  const router = useRouter()
  const { t } = useI18n()

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
        heroTitle={t('browse.chemistry_title')}
        heroSubtitle={t('browse.chemistry_subtitle', { count: chemistryExperiments.length })}
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

'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import BrowseView from '@/components/browse/BrowseView'
import SearchOverlay from '@/components/SearchOverlay'
import GaliModal from '@/components/GaliModal'
import {
  chemistrySectionColors,
  chemistrySectionEmojis,
} from '@/data/chemistry'
import { getChemistryExperiments } from '@/data/loader'
import { useI18n } from '@/lib/i18n'

export default function ChemistryPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchOpen, setSearchOpen] = useState(false)
  const [galiOpen, setGaliOpen] = useState(false)
  const router = useRouter()
  const { t, locale } = useI18n()
  const chemistryExperiments = getChemistryExperiments(locale)

  function handleExpClick(num: number) {
    router.push(`/chemistry/${num}`)
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
        expData={chemistryExperiments}
        sectionColorMap={chemistrySectionColors}
        sectionEmojiMap={chemistrySectionEmojis}
        heroTitle={t('browse.chemistry_title')}
        heroSubtitle={t('browse.chemistry_subtitle', { count: chemistryExperiments.length })}
        heroNote={t('browse.chemistry_note')}
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
      {galiOpen && (
        <GaliModal context={{ subject: 'chemistry' }} onClose={() => setGaliOpen(false)} />
      )}
    </div>
  )
}

'use client'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { chemistryExperiments, chemistrySectionColors, chemistrySectionEmojis } from '@/data/chemistry'
import ExperimentView from '@/components/experiment/ExperimentView'
import Sidebar from '@/components/Sidebar'
import SearchOverlay from '@/components/SearchOverlay'
import GaliModal, { GaliContext } from '@/components/GaliModal'

export default function ChemistryExperimentPage() {
  const { id } = useParams()
  const router = useRouter()
  const [searchOpen, setSearchOpen] = useState(false)
  const [galiOpen, setGaliOpen] = useState(false)

  const exp = chemistryExperiments.find(e => e.num === Number(id))

  const galiCtx: GaliContext = exp
    ? { section: exp.section, experimentTitle: exp.title, experimentNum: exp.num }
    : { section: 'all' }

  if (!exp) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          fontFamily: 'sans-serif',
        }}
      >
        <div>
          <h2>Experiment not found</h2>
          <button
            onClick={() => router.push('/chemistry')}
            style={{ marginTop: 16, padding: '8px 16px', cursor: 'pointer' }}
          >
            Back to Chemistry
          </button>
        </div>
      </div>
    )
  }

  // Use chemistry section colour for the experiment header
  const sectionColor = chemistrySectionColors[exp.section] ?? '#14B8A6'
  const sectionColorDark =
    {
      '#6366F1': '#4F46E5',
      '#EF4444': '#DC2626',
      '#06B6D4': '#0891B2',
      '#F59E0B': '#D97706',
      '#22C55E': '#16A34A',
    }[sectionColor] ?? '#0D9488'

  return (
    <div className="page-shell">
      <Sidebar
        activeView="experiment"
        onHome={() => router.push('/chemistry')}
        onSearch={() => setSearchOpen(true)}
        onAskGali={() => setGaliOpen(true)}
      />

      <ExperimentView
        exp={exp}
        onBack={() => router.push('/chemistry')}
        headerColor={sectionColor}
        headerColorDark={sectionColorDark}
        onAskGali={() => setGaliOpen(true)}
      />

      {searchOpen && (
        <SearchOverlay
          onClose={() => setSearchOpen(false)}
          onExpClick={num => {
            setSearchOpen(false)
            router.push(`/chemistry/${num}`)
          }}
          expData={chemistryExperiments}
          sectionColorMap={chemistrySectionColors}
          sectionEmojiMap={chemistrySectionEmojis}
        />
      )}

      {galiOpen && (
        <GaliModal context={galiCtx} onClose={() => setGaliOpen(false)} />
      )}
    </div>
  )
}

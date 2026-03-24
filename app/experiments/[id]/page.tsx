'use client'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { experiments } from '@/data/experiments'
import ExperimentView from '@/components/experiment/ExperimentView'
import Sidebar from '@/components/Sidebar'
import SearchOverlay from '@/components/SearchOverlay'

export default function ExperimentPage() {
  const { id } = useParams()
  const router = useRouter()
  const [searchOpen, setSearchOpen] = useState(false)
  const exp = experiments.find(e => e.num === Number(id))

  if (!exp) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
        <div>
          <h2>Experiment not found</h2>
          <button onClick={() => router.push('/app')} style={{ marginTop: 16, padding: '8px 16px', cursor: 'pointer' }}>
            Back to Browse
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
      <Sidebar
        activeView="experiment"
        onHome={() => router.push('/app')}
        onSearch={() => setSearchOpen(true)}
      />
      <ExperimentView exp={exp} onBack={() => router.push('/app')} />
      {searchOpen && (
        <SearchOverlay
          onClose={() => setSearchOpen(false)}
          onExpClick={(num) => { setSearchOpen(false); router.push(`/experiments/${num}`) }}
        />
      )}
    </div>
  )
}

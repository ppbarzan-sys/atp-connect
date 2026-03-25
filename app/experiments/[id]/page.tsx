'use client'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { experiments } from '@/data/experiments'
import ExperimentView from '@/components/experiment/ExperimentView'
import Sidebar from '@/components/Sidebar'
import SearchOverlay from '@/components/SearchOverlay'
import GaliModal, { GaliContext } from '@/components/GaliModal'
import { useI18n } from '@/lib/i18n'

export default function ExperimentPage() {
  const { id } = useParams()
  const router = useRouter()
  const { t } = useI18n()
  const [searchOpen, setSearchOpen] = useState(false)
  const [galiOpen, setGaliOpen] = useState(false)
  const exp = experiments.find(e => e.num === Number(id))

  const galiCtx: GaliContext = exp
    ? { section: exp.section, experimentTitle: exp.title, experimentNum: exp.num }
    : { section: 'all' }

  if (!exp) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
        <div>
          <h2>{t('experiment.not_found')}</h2>
          <button onClick={() => router.push('/app')} style={{ marginTop: 16, padding: '8px 16px', cursor: 'pointer' }}>
            {t('experiment.back_to_browse')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="page-shell">
      <Sidebar
        activeView="experiment"
        onHome={() => router.push('/app')}
        onSearch={() => setSearchOpen(true)}
        onAskGali={() => setGaliOpen(true)}
      />
      <ExperimentView
        exp={exp}
        onBack={() => router.push('/app')}
        onAskGali={() => setGaliOpen(true)}
      />
      {searchOpen && (
        <SearchOverlay
          onClose={() => setSearchOpen(false)}
          onExpClick={(num) => { setSearchOpen(false); router.push(`/experiments/${num}`) }}
        />
      )}
      {galiOpen && (
        <GaliModal context={galiCtx} onClose={() => setGaliOpen(false)} />
      )}
    </div>
  )
}

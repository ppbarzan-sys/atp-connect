'use client'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { roboticsSectionColors, roboticsSectionEmojis } from '@/data/robotics-experiments'
import { getRoboticsExperiments } from '@/data/loader'
import ExperimentView from '@/components/experiment/ExperimentView'
import Sidebar from '@/components/Sidebar'
import SearchOverlay from '@/components/SearchOverlay'
import GaliModal, { GaliContext } from '@/components/GaliModal'
import { useI18n } from '@/lib/i18n'

export default function RoboticsExperimentPage() {
  const { id } = useParams()
  const router = useRouter()
  const { t, locale } = useI18n()
  const roboticsExperiments = getRoboticsExperiments(locale)
  const [searchOpen, setSearchOpen] = useState(false)
  const [galiOpen, setGaliOpen] = useState(false)
  const [galiCtx, setGaliCtx] = useState<GaliContext>({ section: 'all' })

  const exp = roboticsExperiments.find(e => e.num === Number(id))

  function openGali() {
    if (!exp) return
    setGaliCtx({ section: exp.section, experimentTitle: exp.title, experimentNum: exp.num })
    setGaliOpen(true)
  }

  function openGaliForQuestion(questionText: string, correctAnswer: string, userAnswer: string) {
    if (!exp) return
    setGaliCtx({
      section: exp.section,
      experimentTitle: exp.title,
      experimentNum: exp.num,
      focusQuestion: { text: questionText, userAnswer, correctAnswer },
    })
    setGaliOpen(true)
  }

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
          <h2>{t('experiment.not_found')}</h2>
          <button
            onClick={() => router.push('/robotics')}
            style={{ marginTop: 16, padding: '8px 16px', cursor: 'pointer' }}
          >
            {t('experiment.back_to_robotics')}
          </button>
        </div>
      </div>
    )
  }

  const sectionColor = roboticsSectionColors[exp.section] ?? '#14B8A6'
  const sectionColorDark =
    {
      '#3B82F6': '#2563EB',
      '#8B5CF6': '#7C3AED',
      '#F97316': '#EA580C',
      '#14B8A6': '#0D9488',
    }[sectionColor] ?? '#0D9488'

  return (
    <div className="page-shell">
      <Sidebar
        activeView="experiment"
        onHome={() => router.push('/robotics')}
        onSearch={() => setSearchOpen(true)}
        onAskGali={openGali}
      />

      <ExperimentView
        exp={exp}
        onBack={() => router.push('/robotics')}
        headerColor={sectionColor}
        headerColorDark={sectionColorDark}
        onAskGali={openGali}
        onAskGaliForQuestion={openGaliForQuestion}
      />

      {searchOpen && (
        <SearchOverlay
          onClose={() => setSearchOpen(false)}
          onExpClick={num => {
            setSearchOpen(false)
            router.push(`/robotics/experiments/${num}`)
          }}
          expData={roboticsExperiments}
          sectionColorMap={roboticsSectionColors}
          sectionEmojiMap={roboticsSectionEmojis}
        />
      )}

      {galiOpen && (
        <GaliModal context={galiCtx} onClose={() => setGaliOpen(false)} />
      )}
    </div>
  )
}

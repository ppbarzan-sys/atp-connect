'use client'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { chemistrySectionColors, chemistrySectionEmojis } from '@/data/chemistry'
import { getChemistryExperiments } from '@/data/loader'
import ExperimentView from '@/components/experiment/ExperimentView'
import Sidebar from '@/components/Sidebar'
import SearchOverlay from '@/components/SearchOverlay'
import GaliModal, { GaliContext } from '@/components/GaliModal'
import { useI18n } from '@/lib/i18n'
import { loadResults, loadTeacherMode, getCompletedExperiments, computeOverallAverage } from '@/lib/storage'

export default function ChemistryExperimentPage() {
  const { id } = useParams()
  const router = useRouter()
  const { t, locale } = useI18n()
  const chemistryExperiments = getChemistryExperiments(locale)
  const [searchOpen, setSearchOpen] = useState(false)
  const [galiOpen, setGaliOpen] = useState(false)
  const [galiCtx, setGaliCtx] = useState<GaliContext>({ section: 'all' })

  const exp = chemistryExperiments.find(e => e.num === Number(id))

  function buildRichContext(): GaliContext {
    if (!exp) return { section: 'all' }
    const ctx: GaliContext = {
      section: exp.section,
      experimentTitle: exp.title,
      experimentNum: exp.num,
      subject: 'chemistry',
      experimentSummary: exp.summary.whatTheyLearn,
      expectedOutcome: exp.summary.expectedOutcome,
      equipment: exp.experiment.equipment.map(e => e.name),
      theoryPoints: exp.experiment.theoryPoints,
      formula: exp.experiment.formula,
      realWorldConnections: exp.experiment.realWorldConnections,
      misconceptions: exp.overview.misconceptions,
      conceptBreakdown: exp.overview.conceptBreakdown,
      dataTableHeaders: exp.dataTable.headers,
      expectedDataRanges: exp.ai.expected,
      completedExperimentCount: getCompletedExperiments().length,
      overallAvgScore: computeOverallAverage(),
      isTeacherMode: loadTeacherMode(),
    }
    const mcqs = exp.questions?.mcq ?? []
    if (mcqs.length > 0) {
      const savedAnswers = loadResults(exp.num)
      const answeredKeys = mcqs.filter((_, i) => savedAnswers[`mcq-${i}`] !== undefined)
      if (answeredKeys.length > 0) {
        const correct = mcqs.filter((q, i) => {
          const ua = savedAnswers[`mcq-${i}`]
          return ua !== undefined && parseInt(ua) === q.correctIndex
        }).length
        const wrongTopics = mcqs
          .filter((q, i) => {
            const ua = savedAnswers[`mcq-${i}`]
            return ua !== undefined && parseInt(ua) !== q.correctIndex
          })
          .map(q => q.text)
        ctx.quizScore = { correct, total: mcqs.length, wrongTopics }
      }
    }
    return ctx
  }

  function openGali() {
    if (!exp) return
    setGaliCtx(buildRichContext())
    setGaliOpen(true)
  }

  function openGaliForQuestion(questionText: string, correctAnswer: string, userAnswer: string) {
    if (!exp) return
    setGaliCtx({
      ...buildRichContext(),
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
            onClick={() => router.push('/chemistry')}
            style={{ marginTop: 16, padding: '8px 16px', cursor: 'pointer' }}
          >
            {t('experiment.back_to_chemistry')}
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
        onAskGali={openGali}
      />

      <ExperimentView
        exp={exp}
        onBack={() => router.push('/chemistry')}
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

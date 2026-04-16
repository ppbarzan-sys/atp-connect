'use client'
import { useState, useMemo, useEffect } from 'react'
import { sectionColors } from '@/data/experiments'
import type { Experiment } from '@/data/loader'
import SummaryTab from './tabs/SummaryTab'
import ExperimentTab from './tabs/ExperimentTab'
import QuestionsTab from './tabs/QuestionsTab'
import NotesTab from './tabs/NotesTab'
import RightPanel from './rightpanel/RightPanel'
import { useI18n } from '@/lib/i18n'
import { loadTeacherMode, loadResults, getCompletedExperiments, computeOverallAverage } from '@/lib/storage'
import type { GaliContext } from '@/components/GaliModal'
import PrintButton from '@/components/PrintButton'

interface ExperimentViewProps {
  exp: Experiment
  onBack: () => void
  headerColor?: string
  headerColorDark?: string
  onAskGali?: () => void
  onAskGaliForQuestion?: (questionText: string, correctAnswer: string, userAnswer: string) => void
}

type TabId = 'summary' | 'experiment' | 'questions' | 'notes'

export default function ExperimentView({ exp, onBack, headerColor, headerColorDark, onAskGali, onAskGaliForQuestion }: ExperimentViewProps) {
  const { t, tSection } = useI18n()
  const [activeTab, setActiveTab] = useState<TabId>('summary')
  const [rpTab, setRpTab] = useState<'overview' | 'chat'>('overview')
  const [mobilePanelOpen, setMobilePanelOpen] = useState(false)
  const [dataEntries, setDataEntries] = useState<Record<string, string>>({})
  const color = headerColor ?? sectionColors[exp.section] ?? '#14B8A6'
  const colorDark = headerColorDark ?? '#0D9488'

  const sectionEmoji =
    exp.section === 'Mechanics' ? '⚙️' :
    exp.section === 'Heat' ? '🔥' :
    exp.section === 'Acoustics' ? '🎵' :
    exp.section === 'Optics' ? '🔭' :
    exp.section === 'Magnetism' ? '🧲' : '⚡'

  // Build rich Gali context for the right-panel ChatPane
  const galiContext = useMemo<GaliContext>(() => {
    const isTeacher = typeof window !== 'undefined' ? loadTeacherMode() : false
    const completedCount = typeof window !== 'undefined' ? getCompletedExperiments().length : 0
    const avgScore = typeof window !== 'undefined' ? computeOverallAverage() : 0

    // Compute quiz score from localStorage
    let quizScore: GaliContext['quizScore'] = undefined
    const mcqs = exp.questions?.mcq ?? []
    if (mcqs.length > 0 && typeof window !== 'undefined') {
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
        quizScore = { correct, total: mcqs.length, wrongTopics }
      }
    }

    return {
      section: exp.section,
      experimentTitle: exp.title,
      experimentNum: exp.num,
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
      currentTab: activeTab,
      dataEntries: Object.keys(dataEntries).length > 0 ? dataEntries : undefined,
      quizScore,
      completedExperimentCount: completedCount,
      overallAvgScore: avgScore,
      isTeacherMode: isTeacher,
    }
  }, [exp, activeTab, dataEntries])

  // Sync data entries from localStorage when switching to experiment tab
  useEffect(() => {
    if (activeTab === 'experiment' && typeof window !== 'undefined') {
      const saved = loadResults(exp.num)
      const entries: Record<string, string> = {}
      for (const [key, val] of Object.entries(saved)) {
        if (key.startsWith('cell-') && val) entries[key] = val
      }
      setDataEntries(entries)
    }
  }, [activeTab, exp.num])

  return (
    <div className="exp-view" id={`expview-${exp.num}`}>
      <div className="exp-teal-header" style={{ background: `linear-gradient(135deg, ${color} 0%, ${colorDark} 100%)` }}>
        <div className="exp-header-top">
          <button className="back-btn" onClick={onBack}>{t('experiment.back')}</button>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <PrintButton tooltip={t('experiment.print') || 'Print'} />
            <button className="ask-gali-btn" onClick={() => onAskGali?.()}>{t('experiment.ask_gali')}</button>
          </div>
        </div>
        <h1 dir="auto" className="exp-h1">{exp.title}</h1>
        <p dir="auto" className="exp-subtitle">{exp.desc}</p>
        <div className="exp-badges">
          <span className="exp-badge">{sectionEmoji} {tSection(exp.section)}</span>
          <span className="exp-badge">{t('experiment.badge_setup', { time: exp.setupTime })}</span>
          <span className="exp-badge">{t('experiment.badge_duration', { time: exp.duration })}</span>
        </div>
        <div className="main-tabs">
          <button className={`main-tab${activeTab === 'summary' ? ' active' : ''}`} onClick={() => setActiveTab('summary')}>{t('experiment.tab_summary')}</button>
          <button className={`main-tab${activeTab === 'experiment' ? ' active' : ''}`} onClick={() => setActiveTab('experiment')}>{t('experiment.tab_experiment')}</button>
          <button className={`main-tab${activeTab === 'questions' ? ' active' : ''}`} onClick={() => setActiveTab('questions')}>{t('experiment.tab_questions')}</button>
          <button className={`main-tab${activeTab === 'notes' ? ' active' : ''}`} onClick={() => setActiveTab('notes')}>{t('experiment.tab_notes')}</button>
        </div>
      </div>

      <div className="exp-body">
        <div className="exp-main-col">
          {activeTab === 'summary' && <SummaryTab exp={exp} />}
          {activeTab === 'experiment' && <ExperimentTab exp={exp} />}
          {activeTab === 'questions' && <QuestionsTab exp={exp} onAskGali={onAskGaliForQuestion} />}
          {activeTab === 'notes' && <NotesTab exp={exp} />}
        </div>
        <RightPanel
          exp={exp}
          activeTab={rpTab}
          onTabChange={setRpTab}
          extraClass={mobilePanelOpen ? 'mobile-open' : ''}
          galiContext={galiContext}
        />
      </div>

      <button
        className="mobile-panel-btn"
        onClick={() => setMobilePanelOpen(o => !o)}
        aria-label={t('rightpanel.tab_overview')}
      >
        {mobilePanelOpen ? t('experiment.overview_close') : t('experiment.overview_toggle')}
      </button>
    </div>
  )
}

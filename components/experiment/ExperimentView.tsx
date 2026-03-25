'use client'
import { useState } from 'react'
import { Experiment, sectionColors } from '@/data/experiments'
import SummaryTab from './tabs/SummaryTab'
import ExperimentTab from './tabs/ExperimentTab'
import QuestionsTab from './tabs/QuestionsTab'
import NotesTab from './tabs/NotesTab'
import RightPanel from './rightpanel/RightPanel'
import { useI18n } from '@/lib/i18n'

interface ExperimentViewProps {
  exp: Experiment
  onBack: () => void
  headerColor?: string
  headerColorDark?: string
  onAskGali?: () => void
}

type TabId = 'summary' | 'experiment' | 'questions' | 'notes'

export default function ExperimentView({ exp, onBack, headerColor, headerColorDark, onAskGali }: ExperimentViewProps) {
  const { t } = useI18n()
  const [activeTab, setActiveTab] = useState<TabId>('summary')
  const [rpTab, setRpTab] = useState<'overview' | 'chat'>('overview')
  const [mobilePanelOpen, setMobilePanelOpen] = useState(false)
  const color = headerColor ?? sectionColors[exp.section] ?? '#14B8A6'
  const colorDark = headerColorDark ?? '#0D9488'

  const sectionEmoji =
    exp.section === 'Mechanics' ? '⚙️' :
    exp.section === 'Heat' ? '🔥' :
    exp.section === 'Acoustics' ? '🎵' :
    exp.section === 'Optics' ? '🔭' :
    exp.section === 'Magnetism' ? '🧲' : '⚡'

  return (
    <div className="exp-view" id={`expview-${exp.num}`}>
      <div className="exp-teal-header" style={{ background: `linear-gradient(135deg, ${color} 0%, ${colorDark} 100%)` }}>
        <div className="exp-header-top">
          <button className="back-btn" onClick={onBack}>{t('experiment.back')}</button>
          <button className="ask-gali-btn" onClick={() => onAskGali?.()}>{t('experiment.ask_gali')}</button>
        </div>
        <h1 className="exp-h1">{exp.title}</h1>
        <p className="exp-subtitle">{exp.desc}</p>
        <div className="exp-badges">
          <span className="exp-badge">{sectionEmoji} {exp.section}</span>
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
          {activeTab === 'questions' && <QuestionsTab exp={exp} />}
          {activeTab === 'notes' && <NotesTab exp={exp} />}
        </div>
        <RightPanel
          exp={exp}
          activeTab={rpTab}
          onTabChange={setRpTab}
          extraClass={mobilePanelOpen ? 'mobile-open' : ''}
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

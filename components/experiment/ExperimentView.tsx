'use client'
import { useState } from 'react'
import { Experiment, sectionColors } from '@/data/experiments'
import SummaryTab from './tabs/SummaryTab'
import ExperimentTab from './tabs/ExperimentTab'
import QuestionsTab from './tabs/QuestionsTab'
import NotesTab from './tabs/NotesTab'
import RightPanel from './rightpanel/RightPanel'

interface ExperimentViewProps {
  exp: Experiment
  onBack: () => void
  headerColor?: string
  headerColorDark?: string
  onAskGali?: () => void
}

type TabId = 'summary' | 'experiment' | 'questions' | 'notes'

export default function ExperimentView({ exp, onBack, headerColor, headerColorDark, onAskGali }: ExperimentViewProps) {
  const [activeTab, setActiveTab] = useState<TabId>('summary')
  const [rpTab, setRpTab] = useState<'overview' | 'chat'>('overview')
  const [mobilePanelOpen, setMobilePanelOpen] = useState(false)
  const color = headerColor ?? sectionColors[exp.section] ?? '#14B8A6'
  const colorDark = headerColorDark ?? '#0D9488'

  return (
    <div className="exp-view" id={`expview-${exp.num}`}>
      {/* Header gradient — uses section colour */}
      <div className="exp-teal-header" style={{ background: `linear-gradient(135deg, ${color} 0%, ${colorDark} 100%)` }}>
        <div className="exp-header-top">
          <button className="back-btn" onClick={onBack}>← Back</button>
          <button className="ask-gali-btn" onClick={() => onAskGali?.()}>✦ Ask Gali</button>
        </div>
        <h1 className="exp-h1">{exp.title}</h1>
        <p className="exp-subtitle">{exp.desc}</p>
        <div className="exp-badges">
          <span className="exp-badge">{exp.section === 'Mechanics' ? '⚙️' : exp.section === 'Heat' ? '🔥' : exp.section === 'Acoustics' ? '🎵' : exp.section === 'Optics' ? '🔭' : exp.section === 'Magnetism' ? '🧲' : '⚡'} {exp.section}</span>
          <span className="exp-badge">△ Setup: {exp.setupTime}</span>
          <span className="exp-badge">🕐 Duration: {exp.duration}</span>
        </div>
        <div className="main-tabs">
          <button className={`main-tab${activeTab === 'summary' ? ' active' : ''}`} onClick={() => setActiveTab('summary')}>📚 Summary</button>
          <button className={`main-tab${activeTab === 'experiment' ? ' active' : ''}`} onClick={() => setActiveTab('experiment')}>🔬 Experiment</button>
          <button className={`main-tab${activeTab === 'questions' ? ' active' : ''}`} onClick={() => setActiveTab('questions')}>❓ Questions</button>
          <button className={`main-tab${activeTab === 'notes' ? ' active' : ''}`} onClick={() => setActiveTab('notes')}>📋 My Notes</button>
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

      {/* Mobile-only: floating toggle for the right panel */}
      <button
        className="mobile-panel-btn"
        onClick={() => setMobilePanelOpen(o => !o)}
        aria-label="Toggle overview panel"
      >
        {mobilePanelOpen ? '✕ Close' : '📊 Overview'}
      </button>

    </div>
  )
}

'use client'
import { Experiment } from '@/data/experiments'
import OverviewPane from './OverviewPane'
import ChatPane from './ChatPane'

interface RightPanelProps {
  exp: Experiment
  activeTab: 'overview' | 'chat'
  onTabChange: (tab: 'overview' | 'chat') => void
  extraClass?: string
}

export default function RightPanel({ exp, activeTab, onTabChange, extraClass = '' }: RightPanelProps) {
  return (
    <div className={`right-panel${extraClass ? ' ' + extraClass : ''}`} id={`rp-${exp.num}`}>
      <div className="rp-tabs">
        <button
          className={`rp-tab${activeTab === 'overview' ? ' active' : ''}`}
          onClick={() => onTabChange('overview')}
        >
          Overview
        </button>
        <button
          className={`rp-tab${activeTab === 'chat' ? ' active' : ''}`}
          onClick={() => onTabChange('chat')}
        >
          Chat with AI
        </button>
      </div>

      {/* Overview pane */}
      <div
        className={`rp-pane${activeTab === 'overview' ? ' active' : ''}`}
        id={`rpp-${exp.num}-overview`}
      >
        <OverviewPane exp={exp} />
      </div>

      {/* Chat pane — needs flex layout so we override display */}
      <div
        id={`rpp-${exp.num}-chat`}
        style={{
          display: activeTab === 'chat' ? 'flex' : 'none',
          flexDirection: 'column',
          flex: 1,
          overflow: 'hidden',
          minHeight: 0,
        }}
      >
        <ChatPane exp={exp} />
      </div>
    </div>
  )
}

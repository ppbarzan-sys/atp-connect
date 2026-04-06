'use client'
import { Experiment } from '@/data/loader'
import OverviewPane from './OverviewPane'
import ChatPane from './ChatPane'
import { useI18n } from '@/lib/i18n'

interface RightPanelProps {
  exp: Experiment
  activeTab: 'overview' | 'chat'
  onTabChange: (tab: 'overview' | 'chat') => void
  extraClass?: string
}

export default function RightPanel({ exp, activeTab, onTabChange, extraClass = '' }: RightPanelProps) {
  const { t } = useI18n()
  return (
    <div className={`right-panel${extraClass ? ' ' + extraClass : ''}`} id={`rp-${exp.num}`}>
      <div className="rp-tabs">
        <button
          className={`rp-tab${activeTab === 'overview' ? ' active' : ''}`}
          onClick={() => onTabChange('overview')}
        >
          {t('rightpanel.tab_overview')}
        </button>
        <button
          className={`rp-tab${activeTab === 'chat' ? ' active' : ''}`}
          onClick={() => onTabChange('chat')}
        >
          {t('rightpanel.tab_chat')}
        </button>
      </div>

      <div
        className={`rp-pane${activeTab === 'overview' ? ' active' : ''}`}
        id={`rpp-${exp.num}-overview`}
      >
        <OverviewPane exp={exp} />
      </div>

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

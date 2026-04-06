'use client'
import { useState } from 'react'
import { sectionColors } from '@/data/experiments'
import type { Experiment } from '@/data/loader'
import { useI18n } from '@/lib/i18n'
import { SMART_TRAYS, lookupEquipment } from '@/data/atpCodes'

interface OverviewPaneProps {
  exp: Experiment
}

export default function OverviewPane({ exp }: OverviewPaneProps) {
  const { t } = useI18n()
  const color = sectionColors[exp.section] || '#14B8A6'

  // Track which equipment items have their sensor alternative expanded
  const [expandedSensors, setExpandedSensors] = useState<Set<number>>(new Set())

  const toggleSensor = (idx: number) => {
    setExpandedSensors((prev) => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      return next
    })
  }

  const smartTrays = SMART_TRAYS[exp.num] ?? []

  return (
    <div style={{ overflowY: 'auto', height: '100%', padding: '0 0 16px 0' }}>

      {/* Equipment Grid */}
      <div className="rp-section">
        <h4>{t('overview.equipment')}</h4>

        {/* ── Smart Tray Banner ─────────────────────────────────── */}
        {smartTrays.length > 0 && (
          <div className="smart-tray-banner">
            <div className="smart-tray-icon">📦</div>
            <div className="smart-tray-body">
              <div className="smart-tray-title">
                {t('overview.smart_trays_needed')}:{' '}
                {smartTrays.map((tray, i) => (
                  <span key={tray} className="smart-tray-pill">
                    {tray}{i < smartTrays.length - 1 ? '' : ''}
                  </span>
                ))}
              </div>
              <div className="smart-tray-subtitle">
                {t('overview.smart_trays_subtitle')}
              </div>
            </div>
          </div>
        )}

        {/* ── Equipment Cards ──────────────────────────────────── */}
        <div className="eq-grid">
          {exp.experiment.equipment.map((eq, i) => {
            const { code, sensor } = lookupEquipment(eq.name)
            const sensorOpen = expandedSensors.has(i)

            return (
              <div className="eq-item" key={i}>
                <div className="eq-emoji">{eq.emoji}</div>
                <div className="eq-name">{eq.name}</div>

                {code && (
                  <div className="eq-atp-code">
                    <span className="eq-atp-label">{t('overview.atp_code')}</span>
                    {' '}{code}
                  </div>
                )}

                {sensor && (
                  <button
                    className={`eq-sensor-btn${sensorOpen ? ' open' : ''}`}
                    onClick={() => toggleSensor(i)}
                    aria-expanded={sensorOpen}
                    title={sensor.name}
                  >
                    📡 {t('overview.sensor_option')}
                  </button>
                )}

                {sensor && sensorOpen && (
                  <div className="eq-sensor-panel">
                    <div className="eq-sensor-name">
                      <strong>{t('overview.alternative')}</strong> {sensor.name}
                    </div>
                    <div className="eq-sensor-desc">{sensor.description}</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Concept Breakdown */}
      {exp.overview.conceptBreakdown.length > 0 && (
        <div className="rp-section">
          <h4>{t('overview.concept_breakdown')}</h4>
          <p className="hint-text">{t('overview.concept_hint')}</p>
          <div className="cb-list">
            {exp.overview.conceptBreakdown.map((cb, i) => (
              <div className="cb-row" key={i}>
                <div className="cb-label">{cb.label}</div>
                <div className="cb-bar-wrap">
                  <div className="cb-bar" style={{ width: `${cb.pct}%`, background: color }} />
                </div>
                <div className="cb-pct">{cb.pct}%</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Common Misconceptions */}
      {exp.overview.misconceptions.length > 0 && (
        <div className="rp-section">
          <h4>{t('overview.misconceptions')}</h4>
          <div className="misc-list">
            {exp.overview.misconceptions.map((m, i) => (
              <div className="misconception wrong" key={i}>
                <span className="mc-icon">✗</span>
                <span>{m}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hook */}
      {exp.overview.hook && (
        <div className="rp-section">
          <h4>{t('overview.hook')}</h4>
          <div className="hook-box">💡 {exp.overview.hook}</div>
        </div>
      )}

      {/* Khan Academy Links */}
      {exp.overview.khanLinks.length > 0 && (
        <div className="rp-section">
          <h4>{t('overview.khan')}</h4>
          <div className="khan-links">
            {exp.overview.khanLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="khan-link"
              >
                <span className="khan-icon">▶</span>
                <span className="khan-title">{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

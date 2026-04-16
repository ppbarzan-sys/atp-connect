'use client'
import { useState, useEffect } from 'react'
import { Experiment } from '@/data/loader'
import { saveResults, loadResults } from '@/lib/storage'
import { useI18n } from '@/lib/i18n'

interface ExperimentTabProps {
  exp: Experiment
}

export default function ExperimentTab({ exp }: ExperimentTabProps) {
  const { t } = useI18n()
  const headers = exp.dataTable.headers
  const rows = exp.dataTable.rows || 5
  const colCount = Math.max((headers.length - 1), 2)

  const [cells, setCells] = useState<Record<string, string>>({})
  const [observations, setObservations] = useState<string[]>(exp.observations.map(() => ''))
  const [conclusion, setConclusion] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)

  useEffect(() => {
    const saved = loadResults(exp.num)
    if (saved) {
      const newCells: Record<string, string> = {}
      const newObs: string[] = exp.observations.map(() => '')
      for (const key of Object.keys(saved)) {
        if (key.startsWith('cell-')) {
          newCells[key] = saved[key]
        } else if (key.startsWith('obs-')) {
          const idx = parseInt(key.replace('obs-', ''))
          if (!isNaN(idx) && idx < newObs.length) newObs[idx] = saved[key]
        } else if (key === 'conclusion') {
          setConclusion(saved[key])
        }
      }
      setCells(newCells)
      setObservations(newObs)
    }
  }, [exp.num])

  function saveAll(newCells: Record<string, string>, newObs: string[], newConc: string) {
    const data: Record<string, string> = { ...newCells, conclusion: newConc }
    newObs.forEach((o, i) => { data[`obs-${i}`] = o })
    saveResults(exp.num, data)
  }

  function handleCellChange(rowIdx: number, colIdx: number, value: string) {
    const key = `cell-${rowIdx}-${colIdx}`
    const newCells = { ...cells, [key]: value }
    setCells(newCells)
    saveAll(newCells, observations, conclusion)
  }

  function handleObsChange(idx: number, value: string) {
    const newObs = [...observations]
    newObs[idx] = value
    setObservations(newObs)
    saveAll(cells, newObs, conclusion)
  }

  function handleConclusionChange(value: string) {
    setConclusion(value)
    saveAll(cells, observations, value)
  }

  function clearTable() {
    setCells({})
    saveAll({}, observations, conclusion)
  }

  function isValidNumber(v: string) {
    return v !== '' && !isNaN(Number(v))
  }

  return (
    <div className="tab-pane active">
      {/* Equipment Setup */}
      <div className="content-card">
        <h3>{t('exp_tab.equipment')}</h3>
        <ul className="clean-eq-list">
          {exp.experiment.equipment.map((eq, i) => (
            <li key={i}>{eq.emoji} {eq.name}</li>
          ))}
        </ul>

        {exp.experiment.observationsToRecord.length > 0 && (
          <>
            <h4 style={{ marginTop: 16 }}>{t('exp_tab.observations_record')}</h4>
            <ol>
              {exp.experiment.observationsToRecord.map((obs, i) => (
                <li key={i}>{obs}</li>
              ))}
            </ol>
          </>
        )}

        <h3>{t('exp_tab.background')}</h3>
        <ul className="concept-list">
          {exp.experiment.theoryPoints.map((tp, i) => (
            <li key={i}>{tp}</li>
          ))}
        </ul>

        {exp.experiment.realWorldConnections.length > 0 && (
          <>
            <h4 style={{ marginTop: 14 }}>{t('exp_tab.realworld')}</h4>
            <ul>
              {exp.experiment.realWorldConnections.map((rw, i) => (
                <li key={i}>{rw}</li>
              ))}
            </ul>
          </>
        )}

        {exp.experiment.formula && (
          <div className="formula-box">
            <span className="fl">{t('exp_tab.formula')}</span>
            <code dir="ltr">{exp.experiment.formula}</code>
          </div>
        )}
      </div>

      {/* Student Results Workspace */}
      <div className="content-card">
        <h3>{t('exp_tab.workspace')}</h3>

        <div className="results-form">
          {/* Data Table */}
          <div className="results-table-wrap">
            <h4>{t('exp_tab.data_table')}</h4>
            <div className="table-scroll">
              <table className="data-entry-table">
                <thead>
                  <tr>
                    {headers.map((h, i) => <th key={i}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: rows }).map((_, rowIdx) => (
                    <tr key={rowIdx}>
                      <td className="row-num">{rowIdx + 1}</td>
                      {Array.from({ length: headers.length - 1 }).map((_, colIdx) => {
                        const key = `cell-${rowIdx}-${colIdx}`
                        const val = cells[key] || ''
                        return (
                          <td key={colIdx}>
                            <input
                              type="text"
                              className={`data-cell${isValidNumber(val) ? ' valid' : ''}`}
                              value={val}
                              placeholder="—"
                              onChange={e => handleCellChange(rowIdx, colIdx, e.target.value)}
                            />
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-actions">
              <button className="btn-secondary" onClick={clearTable}>{t('exp_tab.clear_table')}</button>
              <button className="btn-secondary" onClick={() => saveAll(cells, observations, conclusion)}>{t('exp_tab.save')}</button>
            </div>
          </div>

          {/* Observations */}
          {exp.observations.length > 0 && (
            <div className="obs-section">
              <h4>{t('exp_tab.observations')}</h4>
              {exp.observations.map((label, i) => (
                <div className="obs-field" key={i}>
                  <label>{label}</label>
                  <textarea
                    value={observations[i] || ''}
                    placeholder={t('questions.answer_placeholder')}
                    rows={3}
                    onChange={e => handleObsChange(i, e.target.value)}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Conclusion */}
          {exp.conclusion && (
            <div className="conclusion-section">
              <h4>{t('exp_tab.conclusion')}</h4>
              <label>{exp.conclusion}</label>
              <textarea
                value={conclusion}
                placeholder={t('questions.answer_placeholder')}
                rows={4}
                onChange={e => handleConclusionChange(e.target.value)}
              />
            </div>
          )}

          {/* AI Feedback */}
          <div className="ai-feedback-section">
            <button
              className="btn-check-results"
              onClick={() => setShowFeedback(true)}
            >
              {t('exp_tab.check_ai')}
            </button>
            {showFeedback && (
              <div className="ai-results-feedback">
                <div className="rf-header">{t('exp_tab.gali_feedback')}</div>
                <div dir="auto" className="rf-body" dangerouslySetInnerHTML={{ __html: exp.ai.keywords.result || t('exp_tab.ai_feedback_fallback') }} />
                {exp.ai.hint && (
                  <div className="rf-hint"><strong>{t('exp_tab.hint')}</strong> {exp.ai.hint}</div>
                )}
                {exp.ai.expected && (
                  <div className="rf-expected"><strong>{t('exp_tab.expected')}</strong> {exp.ai.expected}</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

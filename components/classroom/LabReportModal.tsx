'use client'
import { useState, useEffect } from 'react'
import { LabReportGrade, saveLabReport, loadLabReport } from '@/lib/storage'
import { useI18n } from '@/lib/i18n'

interface LabReportModalProps {
  studentId: string
  studentName: string
  experimentNum: number
  experimentTitle: string
  onClose: () => void
  onSaved: () => void
}

export default function LabReportModal({ studentId, studentName, experimentNum, experimentTitle, onClose, onSaved }: LabReportModalProps) {
  const { t } = useI18n()
  const [hypothesis, setHypothesis] = useState(0)
  const [procedure, setProcedure] = useState(0)
  const [data, setData] = useState(0)
  const [analysis, setAnalysis] = useState(0)
  const [conclusion, setConclusion] = useState(0)
  const [notes, setNotes] = useState('')

  useEffect(() => {
    const existing = loadLabReport(studentId, experimentNum)
    if (existing) {
      setHypothesis(existing.criteria.hypothesis)
      setProcedure(existing.criteria.procedure)
      setData(existing.criteria.data)
      setAnalysis(existing.criteria.analysis)
      setConclusion(existing.criteria.conclusion)
      setNotes(existing.notes)
    }
  }, [studentId, experimentNum])

  const total = hypothesis + procedure + data + analysis + conclusion
  const percent = Math.round((total / 50) * 100)

  function handleSave() {
    const grade: LabReportGrade = {
      experimentNum,
      studentId,
      score: percent,
      criteria: { hypothesis, procedure, data, analysis, conclusion },
      notes,
      gradedAt: new Date().toISOString(),
    }
    saveLabReport(grade)
    onSaved()
    onClose()
  }

  const criteria = [
    { label: t('lab_report.hypothesis'), value: hypothesis, set: setHypothesis },
    { label: t('lab_report.procedure'), value: procedure, set: setProcedure },
    { label: t('lab_report.data_collection'), value: data, set: setData },
    { label: t('lab_report.analysis'), value: analysis, set: setAnalysis },
    { label: t('lab_report.conclusion'), value: conclusion, set: setConclusion },
  ]

  return (
    <div className="grade-modal-overlay" onClick={onClose}>
      <div className="grade-modal" onClick={e => e.stopPropagation()}>
        <h3>📝 {t('lab_report.title')} — #{experimentNum}</h3>
        <p style={{ color: 'var(--muted)', marginBottom: 20, fontSize: 14 }}>{studentName} — {experimentTitle}</p>

        {criteria.map(c => (
          <div className="criteria-row" key={c.label}>
            <span className="criteria-label">{c.label}</span>
            <input
              type="range"
              className="criteria-slider"
              min={0} max={10} step={1}
              value={c.value}
              onChange={e => c.set(Number(e.target.value))}
            />
            <span className="criteria-value">{c.value}</span>
          </div>
        ))}

        <div style={{ margin: '20px 0', padding: '12px 16px', background: 'var(--teal-bg)', borderRadius: 8, fontWeight: 600, textAlign: 'center' }}>
          {t('lab_report.total')}: {total}/50 ({percent}%)
        </div>

        <label style={{ fontSize: 14, fontWeight: 500, display: 'block', marginBottom: 6 }}>{t('lab_report.notes')}</label>
        <textarea
          rows={3}
          value={notes}
          onChange={e => setNotes(e.target.value)}
          style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)', fontSize: 14, resize: 'vertical' }}
        />

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 20 }}>
          <button className="btn-secondary" onClick={onClose}>{t('lab_report.cancel')}</button>
          <button
            onClick={handleSave}
            style={{ background: 'var(--teal)', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}
          >
            {t('lab_report.save')}
          </button>
        </div>
      </div>
    </div>
  )
}

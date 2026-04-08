'use client'
import { useState, useEffect } from 'react'
import { PracticalSkillGrade, savePracticalSkill, loadPracticalSkill } from '@/lib/storage'
import { useI18n } from '@/lib/i18n'

interface PracticalSkillModalProps {
  studentId: string
  studentName: string
  experimentNum: number
  experimentTitle: string
  onClose: () => void
  onSaved: () => void
}

export default function PracticalSkillModal({ studentId, studentName, experimentNum, experimentTitle, onClose, onSaved }: PracticalSkillModalProps) {
  const { t } = useI18n()
  const [safety, setSafety] = useState(0)
  const [technique, setTechnique] = useState(0)
  const [accuracy, setAccuracy] = useState(0)
  const [teamwork, setTeamwork] = useState(0)
  const [notes, setNotes] = useState('')

  useEffect(() => {
    const existing = loadPracticalSkill(studentId, experimentNum)
    if (existing) {
      setSafety(existing.criteria.safety)
      setTechnique(existing.criteria.technique)
      setAccuracy(existing.criteria.accuracy)
      setTeamwork(existing.criteria.teamwork)
      setNotes(existing.notes)
    }
  }, [studentId, experimentNum])

  const total = safety + technique + accuracy + teamwork
  const percent = Math.round((total / 40) * 100)

  function handleSave() {
    const grade: PracticalSkillGrade = {
      experimentNum,
      studentId,
      score: percent,
      criteria: { safety, technique, accuracy, teamwork },
      notes,
      gradedAt: new Date().toISOString(),
    }
    savePracticalSkill(grade)
    onSaved()
    onClose()
  }

  const criteria = [
    { label: t('practical.safety'), value: safety, set: setSafety },
    { label: t('practical.technique'), value: technique, set: setTechnique },
    { label: t('practical.accuracy'), value: accuracy, set: setAccuracy },
    { label: t('practical.teamwork'), value: teamwork, set: setTeamwork },
  ]

  return (
    <div className="grade-modal-overlay" onClick={onClose}>
      <div className="grade-modal" onClick={e => e.stopPropagation()}>
        <h3>🔬 {t('practical.title')} — #{experimentNum}</h3>
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
          {t('practical.total')}: {total}/40 ({percent}%)
        </div>

        <label style={{ fontSize: 14, fontWeight: 500, display: 'block', marginBottom: 6 }}>{t('practical.notes')}</label>
        <textarea
          rows={3}
          value={notes}
          onChange={e => setNotes(e.target.value)}
          style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)', fontSize: 14, resize: 'vertical' }}
        />

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 20 }}>
          <button className="btn-secondary" onClick={onClose}>{t('practical.cancel')}</button>
          <button
            onClick={handleSave}
            style={{ background: 'var(--teal)', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}
          >
            {t('practical.save')}
          </button>
        </div>
      </div>
    </div>
  )
}

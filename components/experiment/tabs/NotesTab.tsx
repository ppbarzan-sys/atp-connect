'use client'
import { useState, useEffect } from 'react'
import { Experiment } from '@/data/experiments'
import { saveNote, loadNote, saveTeacherNote, loadTeacherNote, loadTeacherMode } from '@/lib/storage'
import { useI18n } from '@/lib/i18n'

interface NotesTabProps {
  exp: Experiment
}

export default function NotesTab({ exp }: NotesTabProps) {
  const { t } = useI18n()
  const [notes, setNotes] = useState('')
  const [teacherNotes, setTeacherNotes] = useState('')
  const [isTeacher, setIsTeacher] = useState(false)

  useEffect(() => {
    setNotes(loadNote(exp.num))
    setTeacherNotes(loadTeacherNote(exp.num))
    setIsTeacher(loadTeacherMode())
  }, [exp.num])

  function handleNotesChange(value: string) {
    setNotes(value)
    saveNote(exp.num, value)
  }

  function handleTeacherNotesChange(value: string) {
    setTeacherNotes(value)
    saveTeacherNote(exp.num, value)
  }

  function downloadNotes() {
    const blob = new Blob([
      `${t('notes.download_header', { title: exp.title })}\n`,
      `${t('notes.download_exp', { num: String(exp.num) })}\n\n`,
      `${t('notes.download_my_notes')}\n${notes}\n\n`,
      isTeacher ? `${t('notes.download_teacher_notes')}\n${teacherNotes}` : ''
    ], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `atp-exp-${exp.num}-notes.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="tab-pane active">
      <div className="content-card">
        <h3>{t('notes.my_notes')}</h3>
        <p className="hint-text">{t('notes.student_hint')}</p>
        <textarea
          className="personal-notes"
          placeholder={t('notes.student_placeholder')}
          rows={8}
          value={notes}
          onChange={e => handleNotesChange(e.target.value)}
        />
        <button className="btn-secondary" onClick={downloadNotes}>{t('notes.download')}</button>
      </div>

      {isTeacher && (
        <div className="content-card" style={{ marginTop: 16, border: '2px solid #F59E0B' }}>
          <h3>{t('notes.teacher_notes')}</h3>
          <p className="hint-text" style={{ color: '#92400E' }}>{t('notes.teacher_hint')}</p>
          <textarea
            className="personal-notes"
            placeholder={t('notes.teacher_placeholder')}
            rows={6}
            value={teacherNotes}
            onChange={e => handleTeacherNotesChange(e.target.value)}
            style={{ borderColor: '#F59E0B' }}
          />
        </div>
      )}
    </div>
  )
}

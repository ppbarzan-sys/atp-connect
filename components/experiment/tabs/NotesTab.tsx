'use client'
import { useState, useEffect } from 'react'
import { Experiment } from '@/data/experiments'
import { saveNote, loadNote, saveTeacherNote, loadTeacherNote, loadTeacherMode } from '@/lib/storage'

interface NotesTabProps {
  exp: Experiment
}

export default function NotesTab({ exp }: NotesTabProps) {
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
      `ATP Physics Lab — ${exp.title}\n`,
      `Experiment #${exp.num}\n\n`,
      `My Notes:\n${notes}\n\n`,
      isTeacher ? `Teacher Notes:\n${teacherNotes}` : ''
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
        <h3>📝 My Personal Notes</h3>
        <p className="hint-text">Your notes are saved automatically and privately in your browser.</p>
        <textarea
          className="personal-notes"
          placeholder="Add your own notes, observations, reminders…"
          rows={8}
          value={notes}
          onChange={e => handleNotesChange(e.target.value)}
        />
        <button className="btn-secondary" onClick={downloadNotes}>⬇ Download My Notes</button>
      </div>

      {isTeacher && (
        <div className="content-card" style={{ marginTop: 16, border: '2px solid #F59E0B' }}>
          <h3>👩‍🏫 Teacher Notes</h3>
          <p className="hint-text" style={{ color: '#92400E' }}>Private teacher notes — not visible to students.</p>
          <textarea
            className="personal-notes"
            placeholder="Add teacher notes, tips, classroom observations…"
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

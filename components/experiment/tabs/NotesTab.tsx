'use client'
import { useState, useEffect } from 'react'
import { Experiment } from '@/data/loader'
import { saveNote, loadNote, saveTeacherNote, loadTeacherNote, loadTeacherMode, loadClassroom, Student } from '@/lib/storage'
import { useI18n } from '@/lib/i18n'
import LabReportModal from '@/components/classroom/LabReportModal'
import PracticalSkillModal from '@/components/classroom/PracticalSkillModal'

interface NotesTabProps {
  exp: Experiment
}

export default function NotesTab({ exp }: NotesTabProps) {
  const { t } = useI18n()
  const [notes, setNotes] = useState('')
  const [teacherNotes, setTeacherNotes] = useState('')
  const [isTeacher, setIsTeacher] = useState(false)
  const [students, setStudents] = useState<Student[]>([])
  const [selectedStudentId, setSelectedStudentId] = useState('')
  const [labModal, setLabModal] = useState(false)
  const [practicalModal, setPracticalModal] = useState(false)

  useEffect(() => {
    setNotes(loadNote(exp.num))
    setTeacherNotes(loadTeacherNote(exp.num))
    setIsTeacher(loadTeacherMode())
    const classroom = loadClassroom()
    if (classroom && classroom.students.length > 0) {
      setStudents(classroom.students)
      setSelectedStudentId(classroom.students[0].id)
    }
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

      {isTeacher && students.length > 0 && (
        <div className="content-card" style={{ marginTop: 16, border: '2px solid var(--teal)' }}>
          <h3>👨‍🏫 {t('classroom.teacher_grading')}</h3>
          <div style={{ marginTop: 12, marginBottom: 16 }}>
            <label style={{ fontSize: 14, fontWeight: 500, display: 'block', marginBottom: 6 }}>{t('classroom.select_student')}</label>
            <select
              value={selectedStudentId}
              onChange={e => setSelectedStudentId(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)', fontSize: 14 }}
            >
              {students.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={() => setLabModal(true)}
              style={{ flex: 1, padding: '10px 16px', borderRadius: 8, border: '1px solid var(--border)', background: '#fff', cursor: 'pointer', fontWeight: 600, fontSize: 14 }}
            >
              📝 {t('classroom.grade_lab')}
            </button>
            <button
              onClick={() => setPracticalModal(true)}
              style={{ flex: 1, padding: '10px 16px', borderRadius: 8, border: '1px solid var(--border)', background: '#fff', cursor: 'pointer', fontWeight: 600, fontSize: 14 }}
            >
              🔬 {t('classroom.grade_practical')}
            </button>
          </div>
        </div>
      )}

      {labModal && selectedStudentId && (
        <LabReportModal
          studentId={selectedStudentId}
          studentName={students.find(s => s.id === selectedStudentId)?.name || ''}
          experimentNum={exp.num}
          experimentTitle={exp.title}
          onClose={() => setLabModal(false)}
          onSaved={() => {}}
        />
      )}
      {practicalModal && selectedStudentId && (
        <PracticalSkillModal
          studentId={selectedStudentId}
          studentName={students.find(s => s.id === selectedStudentId)?.name || ''}
          experimentNum={exp.num}
          experimentTitle={exp.title}
          onClose={() => setPracticalModal(false)}
          onSaved={() => {}}
        />
      )}
    </div>
  )
}

'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import SearchOverlay from '@/components/SearchOverlay'
import {
  loadTeacherMode, loadClassroom, saveClassroom, addStudent,
  removeStudent, updateStudentName, getStudentOverallAverage,
  getStudentCompletedCount, Classroom,
} from '@/lib/storage'
import { getExperiments, getChemistryExperiments } from '@/data/loader'
import { useI18n } from '@/lib/i18n'
import StudentTable from '@/components/classroom/StudentTable'
import PrintButton from '@/components/PrintButton'

export default function ClassroomPage() {
  const router = useRouter()
  const { t, locale } = useI18n()
  const [classroom, setClassroom] = useState<Classroom | null>(null)
  const [isTeacher, setIsTeacher] = useState(false)
  const [newName, setNewName] = useState('')
  const [showAdd, setShowAdd] = useState(false)
  const [editingClassName, setEditingClassName] = useState(false)
  const [className, setClassName] = useState('')
  const [, setTick] = useState(0)
  const [searchOpen, setSearchOpen] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const totalExperiments = getExperiments(locale).length + getChemistryExperiments(locale).length

  useEffect(() => {
    if (!loadTeacherMode()) {
      router.replace('/dashboard')
      return
    }
    setIsTeacher(true)
    const c = loadClassroom()
    setClassroom(c)
    if (c) setClassName(c.name)
  }, [router])

  function refresh() {
    const c = loadClassroom()
    setClassroom(c)
    setTick(t => t + 1)
  }

  function handleAddStudent() {
    if (!newName.trim()) return
    if (classroom && classroom.students.length >= 28) {
      alert(t('classroom.max_students'))
      return
    }
    addStudent(newName.trim())
    setNewName('')
    setShowAdd(false)
    refresh()
  }

  function handleClassNameSave() {
    if (!className.trim()) return
    const c = loadClassroom()
    if (c) {
      c.name = className.trim()
      saveClassroom(c)
      refresh()
    }
    setEditingClassName(false)
  }

  function handleCSVImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const text = ev.target?.result as string
      const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean)
      const current = loadClassroom()
      const currentCount = current?.students.length || 0
      const available = 28 - currentCount
      const toAdd = lines.slice(0, available)
      toAdd.forEach(name => addStudent(name))
      if (lines.length > available) {
        alert(t('classroom.max_students'))
      }
      refresh()
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  if (!isTeacher) return null

  return (
    <div className="page-shell">
      <Sidebar activeView="browse" onHome={() => router.push('/app')} onSearch={() => setSearchOpen(true)} />
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} onExpClick={() => setSearchOpen(false)} />}
      <div style={{ flex: 1, overflowY: 'auto', padding: '32px 40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700 }}>🏫 {t('classroom.title')}</h1>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <PrintButton tooltip={t('classroom.print') || 'Print'} />
          <button
            onClick={() => router.push('/classroom/dashboard')}
            style={{ background: 'var(--teal)', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}
          >
            📊 {t('class_dashboard.title')}
          </button>
          <button
            onClick={() => setShowAdd(true)}
            style={{ background: 'var(--teal)', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}
          >
            + {t('classroom.add_student')}
          </button>
        </div>
      </div>

      <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
        {editingClassName ? (
          <>
            <input
              value={className}
              onChange={e => setClassName(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleClassNameSave()}
              onBlur={handleClassNameSave}
              autoFocus
              style={{ fontSize: 16, padding: '6px 12px', borderRadius: 8, border: '1px solid var(--border)' }}
            />
          </>
        ) : (
          <>
            <span style={{ fontSize: 16, color: 'var(--muted)' }}>
              {classroom?.name || t('classroom.class_name')}
            </span>
            <button
              onClick={() => setEditingClassName(true)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 14 }}
            >
              ✏️
            </button>
          </>
        )}
      </div>

      {showAdd && (
        <div style={{ marginBottom: 20, padding: 20, background: '#fff', borderRadius: 12, border: '1px solid var(--border)' }}>
          <h3 style={{ marginBottom: 12 }}>{t('classroom.add_student')}</h3>
          <div style={{ display: 'flex', gap: 10 }}>
            <input
              value={newName}
              onChange={e => setNewName(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleAddStudent()}
              placeholder={t('classroom.student_name')}
              autoFocus
              style={{ flex: 1, padding: '10px 14px', borderRadius: 8, border: '1px solid var(--border)', fontSize: 14 }}
            />
            <button
              onClick={handleAddStudent}
              style={{ background: 'var(--teal)', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}
            >
              {t('classroom.add_student')}
            </button>
            <button className="btn-secondary" onClick={() => setShowAdd(false)}>✕</button>
          </div>
        </div>
      )}

      {(!classroom || classroom.students.length === 0) ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--muted)' }}>
          <p style={{ fontSize: 48, marginBottom: 16 }}>🏫</p>
          <p style={{ fontSize: 16 }}>{t('classroom.empty')}</p>
        </div>
      ) : (
        <div style={{ background: '#fff', borderRadius: 12, border: '1px solid var(--border)', overflow: 'hidden' }}>
          <StudentTable
            students={classroom.students}
            getAvgScore={getStudentOverallAverage}
            getCompletedCount={getStudentCompletedCount}
            totalExperiments={totalExperiments}
            onClickStudent={id => router.push(`/classroom/student/${id}`)}
            onEditName={(id, name) => { updateStudentName(id, name); refresh() }}
            onRemove={(id) => { removeStudent(id); refresh() }}
          />
        </div>
      )}

      <div style={{ marginTop: 16 }}>
        <input ref={fileRef} type="file" accept=".csv,.txt" onChange={handleCSVImport} style={{ display: 'none' }} />
        <button
          className="btn-secondary"
          onClick={() => fileRef.current?.click()}
        >
          📄 {t('classroom.import_csv')}
        </button>
      </div>
      </div>
    </div>
  )
}

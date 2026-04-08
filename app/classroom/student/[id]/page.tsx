'use client'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import SearchOverlay from '@/components/SearchOverlay'
import {
  loadTeacherMode, loadClassroom, loadStudentGrades,
  loadLabReport, loadPracticalSkill, getStudentOverallAverage,
  getStudentCompletedCount, Student,
} from '@/lib/storage'
import { getExperiments, getChemistryExperiments, Experiment } from '@/data/loader'
import { useI18n } from '@/lib/i18n'
import LabReportModal from '@/components/classroom/LabReportModal'
import PracticalSkillModal from '@/components/classroom/PracticalSkillModal'

export default function StudentDetailPage() {
  const router = useRouter()
  const params = useParams()
  const studentId = params.id as string
  const { t, locale } = useI18n()
  const [student, setStudent] = useState<Student | null>(null)
  const [filter, setFilter] = useState<'all' | 'physics' | 'chemistry'>('all')
  const [, setTick] = useState(0)
  const [searchOpen, setSearchOpen] = useState(false)
  const [labModal, setLabModal] = useState<{ exp: Experiment } | null>(null)
  const [practicalModal, setPracticalModal] = useState<{ exp: Experiment } | null>(null)

  const physics = getExperiments(locale)
  const chemistry = getChemistryExperiments(locale)
  const allExperiments = filter === 'physics' ? physics : filter === 'chemistry' ? chemistry : [...physics, ...chemistry]
  const totalExperiments = physics.length + chemistry.length

  useEffect(() => {
    if (!loadTeacherMode()) { router.replace('/dashboard'); return }
    const classroom = loadClassroom()
    const s = classroom?.students.find(s => s.id === studentId)
    if (!s) { router.replace('/classroom'); return }
    setStudent(s)
  }, [studentId, router])

  if (!student) return null

  const avg = getStudentOverallAverage(studentId)
  const completed = getStudentCompletedCount(studentId)

  function exportCSV() {
    const rows = [['Experiment', 'Quiz %', 'Lab Report %', 'Practical %']]
    allExperiments.forEach(exp => {
      const quiz = loadStudentGrades(studentId, exp.num)
      const lab = loadLabReport(studentId, exp.num)
      const prac = loadPracticalSkill(studentId, exp.num)
      rows.push([
        `#${exp.num} ${exp.title}`,
        quiz && quiz.bestScore.total > 0 ? String(Math.round((quiz.bestScore.correct / quiz.bestScore.total) * 100)) : '',
        lab ? String(lab.score) : '',
        prac ? String(prac.score) : '',
      ])
    })
    const csv = rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${(student?.name || 'student').replace(/\s+/g, '_')}_report.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="page-shell">
      <Sidebar activeView="browse" onHome={() => router.push('/app')} onSearch={() => setSearchOpen(true)} />
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} onExpClick={() => setSearchOpen(false)} />}
      <div style={{ flex: 1, overflowY: 'auto', padding: '32px 40px' }}>
      <button
        onClick={() => router.push('/classroom')}
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--teal)', fontWeight: 600, marginBottom: 16, fontSize: 14 }}
      >
        ← {t('classroom.title')}
      </button>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 700 }}>📊 {student.name} — {t('classroom.student_report')}</h1>
          <p style={{ color: 'var(--muted)', marginTop: 4 }}>
            {t('classroom.overall_avg')}: <strong style={{ color: 'var(--teal)' }}>{avg}%</strong>
            {' | '}
            {t('classroom.completed')}: <strong>{completed}/{totalExperiments}</strong>
          </p>
        </div>
        <button
          onClick={exportCSV}
          style={{ background: 'var(--teal)', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}
        >
          ⬇ {t('classroom.export_report')}
        </button>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {(['all', 'physics', 'chemistry'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: '8px 16px', borderRadius: 8, border: '1px solid var(--border)',
              background: filter === f ? 'var(--teal)' : '#fff',
              color: filter === f ? '#fff' : 'var(--text)',
              fontWeight: 600, cursor: 'pointer', fontSize: 13,
            }}
          >
            {f === 'all' ? 'All' : f === 'physics' ? t('nav.physics') : t('nav.chemistry')}
          </button>
        ))}
      </div>

      <div style={{ background: '#fff', borderRadius: 12, border: '1px solid var(--border)', overflow: 'hidden' }}>
        <table className="classroom-table">
          <thead>
            <tr>
              <th>{t('experiment.tab_experiment')}</th>
              <th>{t('classroom.quiz')}</th>
              <th>{t('classroom.lab_report')}</th>
              <th>{t('classroom.practical')}</th>
            </tr>
          </thead>
          <tbody>
            {allExperiments.map(exp => {
              const quiz = loadStudentGrades(studentId, exp.num)
              const lab = loadLabReport(studentId, exp.num)
              const prac = loadPracticalSkill(studentId, exp.num)
              const quizPct = quiz && quiz.bestScore.total > 0
                ? Math.round((quiz.bestScore.correct / quiz.bestScore.total) * 100)
                : null

              return (
                <tr key={exp.num}>
                  <td style={{ fontWeight: 500 }}>#{exp.num} {exp.title}</td>
                  <td>
                    {quizPct !== null ? (
                      <span style={{ color: quizPct >= 70 ? 'var(--teal)' : quizPct >= 50 ? '#F59E0B' : '#EF4444', fontWeight: 600 }}>
                        {quizPct}%
                      </span>
                    ) : (
                      <span style={{ color: 'var(--muted)' }}>--</span>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => setLabModal({ exp })}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, color: lab ? 'var(--teal)' : 'var(--muted)' }}
                    >
                      {lab ? `${lab.score}%` : '--'}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => setPracticalModal({ exp })}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, color: prac ? 'var(--teal)' : 'var(--muted)' }}
                    >
                      {prac ? `${prac.score}%` : '--'}
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {labModal && (
        <LabReportModal
          studentId={studentId}
          studentName={student.name}
          experimentNum={labModal.exp.num}
          experimentTitle={labModal.exp.title}
          onClose={() => setLabModal(null)}
          onSaved={() => setTick(t => t + 1)}
        />
      )}
      {practicalModal && (
        <PracticalSkillModal
          studentId={studentId}
          studentName={student.name}
          experimentNum={practicalModal.exp.num}
          experimentTitle={practicalModal.exp.title}
          onClose={() => setPracticalModal(null)}
          onSaved={() => setTick(t => t + 1)}
        />
      )}
      </div>
    </div>
  )
}

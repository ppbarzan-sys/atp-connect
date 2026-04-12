'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import SearchOverlay from '@/components/SearchOverlay'
import {
  loadTeacherMode, loadClassroom, getStudentOverallAverage,
  getStudentCompletedCount, loadStudentGrades, loadLabReport,
  loadPracticalSkill, Classroom,
} from '@/lib/storage'
import { getExperiments, getChemistryExperiments, Experiment } from '@/data/loader'
import { useI18n } from '@/lib/i18n'
import ScoreDistribution from '@/components/classroom/ScoreDistribution'
import PrintButton from '@/components/PrintButton'

export default function ClassDashboardPage() {
  const router = useRouter()
  const { t, locale } = useI18n()
  const [classroom, setClassroom] = useState<Classroom | null>(null)
  const [isTeacher, setIsTeacher] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const physics = getExperiments(locale)
  const chemistry = getChemistryExperiments(locale)
  const allExperiments: Experiment[] = [...physics, ...chemistry]
  const totalExperiments = allExperiments.length

  useEffect(() => {
    if (!loadTeacherMode()) { router.replace('/dashboard'); return }
    setIsTeacher(true)
    setClassroom(loadClassroom())
  }, [router])

  if (!isTeacher || !classroom) return null

  const students = classroom.students
  const studentScores = students.map(s => getStudentOverallAverage(s.id))
  const studentCompleted = students.map(s => getStudentCompletedCount(s.id))
  const classAvg = studentScores.length > 0
    ? Math.round(studentScores.reduce((a, b) => a + b, 0) / studentScores.length)
    : 0
  const totalCompleted = studentCompleted.reduce((a, b) => a + b, 0)
  const totalPossible = students.length * totalExperiments

  // Top and bottom performers
  const ranked = students
    .map((s, i) => ({ student: s, avg: studentScores[i], completed: studentCompleted[i] }))
    .sort((a, b) => b.avg - a.avg)
  const topPerformers = ranked.filter(r => r.avg > 0).slice(0, 3)
  const needsAttention = [...ranked].reverse().filter(r => r.avg < 60 || r.completed === 0).slice(0, 3)

  // By experiment averages
  const experimentAverages = allExperiments.map(exp => {
    const scores: number[] = []
    students.forEach(s => {
      const quiz = loadStudentGrades(s.id, exp.num)
      if (quiz && quiz.bestScore.total > 0) {
        scores.push(Math.round((quiz.bestScore.correct / quiz.bestScore.total) * 100))
      }
      const lab = loadLabReport(s.id, exp.num)
      if (lab) scores.push(lab.score)
      const prac = loadPracticalSkill(s.id, exp.num)
      if (prac) scores.push(prac.score)
    })
    const avg = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : -1
    return { exp, avg }
  }).filter(e => e.avg >= 0).sort((a, b) => a.avg - b.avg)

  function exportCSV() {
    const header = ['Student', ...allExperiments.map(e => `#${e.num} Quiz`), ...allExperiments.map(e => `#${e.num} Lab`), ...allExperiments.map(e => `#${e.num} Practical`)]
    const rows = students.map(s => {
      const quizCols = allExperiments.map(e => {
        const g = loadStudentGrades(s.id, e.num)
        return g && g.bestScore.total > 0 ? String(Math.round((g.bestScore.correct / g.bestScore.total) * 100)) : ''
      })
      const labCols = allExperiments.map(e => {
        const l = loadLabReport(s.id, e.num)
        return l ? String(l.score) : ''
      })
      const pracCols = allExperiments.map(e => {
        const p = loadPracticalSkill(s.id, e.num)
        return p ? String(p.score) : ''
      })
      return [s.name, ...quizCols, ...labCols, ...pracCols]
    })
    const csv = [header, ...rows].map(r => r.map(c => `"${c}"`).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${(classroom?.name || 'class').replace(/\s+/g, '_')}_grades.csv`
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

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700 }}>📊 {t('class_dashboard.title')} — {classroom.name}</h1>
        <PrintButton tooltip={t('class_dashboard.print') || 'Print'} />
      </div>

      {/* Summary Cards */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
        <SummaryCard label={t('class_dashboard.students')} value={String(students.length)} />
        <SummaryCard label={t('class_dashboard.class_avg')} value={`${classAvg}%`} color="var(--teal)" />
        <SummaryCard label={t('class_dashboard.total_completed')} value={`${totalCompleted}/${totalPossible}`} />
      </div>

      {students.length === 0 ? (
        <p style={{ color: 'var(--muted)', textAlign: 'center', padding: 40 }}>{t('class_dashboard.no_data')}</p>
      ) : (
        <>
          {/* Score Distribution */}
          <div style={{ background: '#fff', borderRadius: 12, border: '1px solid var(--border)', padding: 24, marginBottom: 24 }}>
            <ScoreDistribution scores={studentScores.filter(s => s > 0)} />
          </div>

          {/* Top Performers & Needs Attention */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
            <div style={{ background: '#fff', borderRadius: 12, border: '1px solid var(--border)', padding: 24 }}>
              <h3 style={{ marginBottom: 16, color: 'var(--teal)' }}>🏆 {t('class_dashboard.top_performers')}</h3>
              {topPerformers.length === 0 ? (
                <p style={{ color: 'var(--muted)', fontSize: 14 }}>{t('class_dashboard.no_data')}</p>
              ) : topPerformers.map((r, i) => (
                <div key={r.student.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: i < topPerformers.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ fontWeight: 500 }}>{i + 1}. {r.student.name}</span>
                  <span style={{ fontWeight: 700, color: 'var(--teal)' }}>{r.avg}%</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#fff', borderRadius: 12, border: '1px solid var(--border)', padding: 24 }}>
              <h3 style={{ marginBottom: 16, color: '#EF4444' }}>⚠️ {t('class_dashboard.needs_attention')}</h3>
              {needsAttention.length === 0 ? (
                <p style={{ color: 'var(--muted)', fontSize: 14 }}>{t('class_dashboard.no_data')}</p>
              ) : needsAttention.map((r, i) => (
                <div key={r.student.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: i < needsAttention.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ fontWeight: 500 }}>{i + 1}. {r.student.name}</span>
                  <span style={{ fontWeight: 700, color: r.avg < 60 ? '#EF4444' : '#F59E0B' }}>{r.avg > 0 ? `${r.avg}%` : '--'}</span>
                </div>
              ))}
            </div>
          </div>

          {/* By Experiment */}
          {experimentAverages.length > 0 && (
            <div style={{ background: '#fff', borderRadius: 12, border: '1px solid var(--border)', padding: 24, marginBottom: 24 }}>
              <h3 style={{ marginBottom: 16 }}>{t('class_dashboard.by_experiment')}</h3>
              {experimentAverages.slice(0, 15).map(({ exp, avg }) => (
                <div key={exp.num} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <span style={{ width: 220, fontSize: 13, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    #{exp.num} {exp.title}
                  </span>
                  <div style={{ flex: 1, height: 20, background: '#f1f5f9', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${avg}%`, background: avg >= 70 ? 'var(--teal)' : avg >= 50 ? '#F59E0B' : '#EF4444', borderRadius: 4, transition: 'width 0.5s ease' }} />
                  </div>
                  <span style={{ fontWeight: 600, fontSize: 13, minWidth: 40 }}>{avg}%</span>
                </div>
              ))}
            </div>
          )}

          {/* Export */}
          <button
            onClick={exportCSV}
            style={{ background: 'var(--teal)', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}
          >
            ⬇ {t('class_dashboard.export_grades')}
          </button>
        </>
      )}
      </div>
    </div>
  )
}

function SummaryCard({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div style={{ flex: 1, background: '#fff', borderRadius: 12, border: '1px solid var(--border)', padding: '20px 24px', textAlign: 'center' }}>
      <div style={{ fontSize: 28, fontWeight: 700, color: color || 'var(--text)' }}>{value}</div>
      <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>{label}</div>
    </div>
  )
}

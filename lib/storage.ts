import { awardXP, updateStreak, incrementDailyGoal, resetGamification } from './gamification'
import { appEvents } from './events'

export function saveResults(num: number, data: Record<string, string>) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`atp-results-${num}`, JSON.stringify(data));
}

export function loadResults(num: number): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const saved = localStorage.getItem(`atp-results-${num}`);
  if (!saved) return {};
  try { return JSON.parse(saved); } catch { return {}; }
}

export function saveNote(num: number, value: string) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`atp-note-${num}`, value);
}

export function loadNote(num: number): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(`atp-note-${num}`) || '';
}

export function saveTeacherMode(on: boolean) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('atp-teacher-mode', on ? '1' : '0');
}

export function loadTeacherMode(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('atp-teacher-mode') === '1';
}

export function saveTeacherNote(num: number, value: string) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`atp-teacher-note-${num}`, value);
}

export function loadTeacherNote(num: number): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(`atp-teacher-note-${num}`) || '';
}

// ── Experiment progress ──────────────────────────────────────────────────────

export interface ExperimentProgress {
  num: number
  correct: number
  total: number
  completedAt: string
}

export function saveProgress(num: number, correct: number, total: number) {
  if (typeof window === 'undefined') return;

  const isFirstEver = getCompletedExperiments().length === 0
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0

  const progress: ExperimentProgress = {
    num,
    correct,
    total,
    completedAt: new Date().toISOString(),
  };
  localStorage.setItem(`atp-progress-${num}`, JSON.stringify(progress));

  // ── Gamification hooks ──
  updateStreak()
  incrementDailyGoal()

  if (isFirstEver) {
    awardXP('FIRST_EXPERIMENT')
  }

  awardXP('EXPERIMENT_COMPLETE')

  if (pct === 100) {
    awardXP('QUIZ_PERFECT')
  } else if (pct >= 70) {
    awardXP('QUIZ_GOOD')
  } else {
    awardXP('QUIZ_ATTEMPT')
  }

  // First experiment of the day bonus
  const today = new Date().toISOString().split('T')[0]
  const allCompleted = getCompletedExperiments()
  const todayCount = allCompleted.filter(n => {
    const p = loadProgress(n)
    return p && p.completedAt.startsWith(today)
  }).length
  if (todayCount === 1) {
    awardXP('DAILY_FIRST_EXPERIMENT')
  }

  appEvents.emit('progress-updated', { num, correct, total })
}

export function loadProgress(num: number): ExperimentProgress | null {
  if (typeof window === 'undefined') return null;
  const saved = localStorage.getItem(`atp-progress-${num}`);
  if (!saved) return null;
  try { return JSON.parse(saved); } catch { return null; }
}

export function getCompletedExperiments(): number[] {
  if (typeof window === 'undefined') return [];
  const completed: number[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith('atp-progress-')) {
      const num = parseInt(key.replace('atp-progress-', ''));
      if (!isNaN(num)) completed.push(num);
    }
  }
  return completed;
}

export function getProgressSummary(experimentNums: number[]): { completed: number; total: number } {
  if (typeof window === 'undefined') return { completed: 0, total: experimentNums.length };
  const completed = experimentNums.filter(
    num => localStorage.getItem(`atp-progress-${num}`) !== null
  ).length;
  return { completed, total: experimentNums.length };
}

/** Delete progress for a single experiment */
export function deleteProgress(num: number): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(`atp-progress-${num}`)
  localStorage.removeItem(`atp-results-${num}`)
  localStorage.removeItem(`atp-note-${num}`)
}

/** Delete ALL experiment progress, results, notes, and gamification state */
export function deleteAllProgress(): void {
  if (typeof window === 'undefined') return
  const keysToRemove: string[] = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key && (key.startsWith('atp-progress-') || key.startsWith('atp-results-') || key.startsWith('atp-note-') || key.startsWith('atp-grades-'))) {
      keysToRemove.push(key)
    }
  }
  keysToRemove.forEach(key => localStorage.removeItem(key))
  // Reset gamification state
  resetGamification()
}

// ── Detailed grade tracking ─────────────────────────────────────────────────

export interface QuizAttempt {
  num: number
  correct: number
  total: number
  completedAt: string
  answers: Record<number, number>
  timeSpent?: number
}

export interface StudentGrades {
  attempts: QuizAttempt[]
  bestScore: { correct: number; total: number }
  lastAttempt: string
}

export function saveGrade(num: number, attempt: QuizAttempt): void {
  if (typeof window === 'undefined') return
  const existing = loadGrades(num)
  const attempts = existing ? [...existing.attempts, attempt] : [attempt]
  const bestScore = attempts.reduce(
    (best, a) => {
      const bestPct = best.total > 0 ? best.correct / best.total : 0
      const aPct = a.total > 0 ? a.correct / a.total : 0
      return aPct > bestPct ? { correct: a.correct, total: a.total } : best
    },
    { correct: 0, total: 0 }
  )
  const grades: StudentGrades = {
    attempts,
    bestScore,
    lastAttempt: attempt.completedAt,
  }
  localStorage.setItem(`atp-grades-${num}`, JSON.stringify(grades))
}

export function loadGrades(num: number): StudentGrades | null {
  if (typeof window === 'undefined') return null
  const saved = localStorage.getItem(`atp-grades-${num}`)
  if (!saved) return null
  try { return JSON.parse(saved) } catch { return null }
}

export function getAllGrades(): Map<number, StudentGrades> {
  if (typeof window === 'undefined') return new Map()
  const map = new Map<number, StudentGrades>()
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key?.startsWith('atp-grades-')) {
      const num = parseInt(key.replace('atp-grades-', ''))
      if (!isNaN(num)) {
        const grades = loadGrades(num)
        if (grades) map.set(num, grades)
      }
    }
  }
  return map
}

// ── Classroom / Multi-Student Management ────────────────────────────────────

export interface Student {
  id: string
  name: string
  createdAt: string
}

export interface Classroom {
  id: string
  name: string
  students: Student[]
  createdAt: string
}

export function saveClassroom(classroom: Classroom): void {
  if (typeof window === 'undefined') return
  localStorage.setItem('atp-classroom', JSON.stringify(classroom))
}

export function loadClassroom(): Classroom | null {
  if (typeof window === 'undefined') return null
  const saved = localStorage.getItem('atp-classroom')
  if (!saved) return null
  try { return JSON.parse(saved) } catch { return null }
}

export function addStudent(name: string): Student {
  const classroom = loadClassroom() || {
    id: Date.now().toString(),
    name: 'My Classroom',
    students: [],
    createdAt: new Date().toISOString(),
  }
  const student: Student = {
    id: Date.now().toString() + Math.random().toString(36).slice(2, 6),
    name,
    createdAt: new Date().toISOString(),
  }
  classroom.students.push(student)
  saveClassroom(classroom)
  return student
}

export function removeStudent(studentId: string): void {
  const classroom = loadClassroom()
  if (!classroom) return
  classroom.students = classroom.students.filter(s => s.id !== studentId)
  saveClassroom(classroom)
  // Clean up student grades
  if (typeof window === 'undefined') return
  const keysToRemove: string[] = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key && (
      key.startsWith(`atp-student-grades-${studentId}-`) ||
      key.startsWith(`atp-lab-report-${studentId}-`) ||
      key.startsWith(`atp-practical-${studentId}-`)
    )) {
      keysToRemove.push(key)
    }
  }
  keysToRemove.forEach(key => localStorage.removeItem(key))
}

export function updateStudentName(studentId: string, name: string): void {
  const classroom = loadClassroom()
  if (!classroom) return
  const student = classroom.students.find(s => s.id === studentId)
  if (student) {
    student.name = name
    saveClassroom(classroom)
  }
}

// ── Per-student grade storage ───────────────────────────────────────────────

export function saveStudentGrade(studentId: string, num: number, attempt: QuizAttempt): void {
  if (typeof window === 'undefined') return
  const existing = loadStudentGrades(studentId, num)
  const attempts = existing ? [...existing.attempts, attempt] : [attempt]
  const bestScore = attempts.reduce(
    (best, a) => {
      const bestPct = best.total > 0 ? best.correct / best.total : 0
      const aPct = a.total > 0 ? a.correct / a.total : 0
      return aPct > bestPct ? { correct: a.correct, total: a.total } : best
    },
    { correct: 0, total: 0 }
  )
  const grades: StudentGrades = { attempts, bestScore, lastAttempt: attempt.completedAt }
  localStorage.setItem(`atp-student-grades-${studentId}-${num}`, JSON.stringify(grades))
}

export function loadStudentGrades(studentId: string, num: number): StudentGrades | null {
  if (typeof window === 'undefined') return null
  const saved = localStorage.getItem(`atp-student-grades-${studentId}-${num}`)
  if (!saved) return null
  try { return JSON.parse(saved) } catch { return null }
}

export function getAllStudentGrades(studentId: string): Map<number, StudentGrades> {
  if (typeof window === 'undefined') return new Map()
  const map = new Map<number, StudentGrades>()
  const prefix = `atp-student-grades-${studentId}-`
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key?.startsWith(prefix)) {
      const num = parseInt(key.replace(prefix, ''))
      if (!isNaN(num)) {
        const grades = loadStudentGrades(studentId, num)
        if (grades) map.set(num, grades)
      }
    }
  }
  return map
}

// ── Lab Report & Practical Skills Grades ────────────────────────────────────

export interface LabReportGrade {
  experimentNum: number
  studentId: string
  score: number
  criteria: {
    hypothesis: number
    procedure: number
    data: number
    analysis: number
    conclusion: number
  }
  notes: string
  gradedAt: string
}

export interface PracticalSkillGrade {
  experimentNum: number
  studentId: string
  score: number
  criteria: {
    safety: number
    technique: number
    accuracy: number
    teamwork: number
  }
  notes: string
  gradedAt: string
}

export function saveLabReport(grade: LabReportGrade): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(`atp-lab-report-${grade.studentId}-${grade.experimentNum}`, JSON.stringify(grade))
}

export function loadLabReport(studentId: string, num: number): LabReportGrade | null {
  if (typeof window === 'undefined') return null
  const saved = localStorage.getItem(`atp-lab-report-${studentId}-${num}`)
  if (!saved) return null
  try { return JSON.parse(saved) } catch { return null }
}

export function savePracticalSkill(grade: PracticalSkillGrade): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(`atp-practical-${grade.studentId}-${grade.experimentNum}`, JSON.stringify(grade))
}

export function loadPracticalSkill(studentId: string, num: number): PracticalSkillGrade | null {
  if (typeof window === 'undefined') return null
  const saved = localStorage.getItem(`atp-practical-${studentId}-${num}`)
  if (!saved) return null
  try { return JSON.parse(saved) } catch { return null }
}

// ── Aggregation helpers ─────────────────────────────────────────────────────

export function getStudentOverallAverage(studentId: string): number {
  const quizGrades = getAllStudentGrades(studentId)
  const scores: number[] = []
  quizGrades.forEach(g => {
    if (g.bestScore.total > 0) {
      scores.push((g.bestScore.correct / g.bestScore.total) * 100)
    }
  })
  // Check lab reports and practical skills
  if (typeof window !== 'undefined') {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key?.startsWith(`atp-lab-report-${studentId}-`)) {
        const data = localStorage.getItem(key)
        if (data) {
          try {
            const grade: LabReportGrade = JSON.parse(data)
            scores.push(grade.score)
          } catch {}
        }
      }
      if (key?.startsWith(`atp-practical-${studentId}-`)) {
        const data = localStorage.getItem(key)
        if (data) {
          try {
            const grade: PracticalSkillGrade = JSON.parse(data)
            scores.push(grade.score)
          } catch {}
        }
      }
    }
  }
  if (scores.length === 0) return 0
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
}

export function getClassAverages(experimentNum: number): { quiz: number; labReport: number; practical: number } {
  const classroom = loadClassroom()
  if (!classroom) return { quiz: 0, labReport: 0, practical: 0 }
  const quizScores: number[] = []
  const labScores: number[] = []
  const practicalScores: number[] = []
  for (const student of classroom.students) {
    const grades = loadStudentGrades(student.id, experimentNum)
    if (grades && grades.bestScore.total > 0) {
      quizScores.push((grades.bestScore.correct / grades.bestScore.total) * 100)
    }
    const lab = loadLabReport(student.id, experimentNum)
    if (lab) labScores.push(lab.score)
    const prac = loadPracticalSkill(student.id, experimentNum)
    if (prac) practicalScores.push(prac.score)
  }
  const avg = (arr: number[]) => arr.length ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length) : 0
  return { quiz: avg(quizScores), labReport: avg(labScores), practical: avg(practicalScores) }
}

export function getStudentCompletedCount(studentId: string): number {
  const grades = getAllStudentGrades(studentId)
  return grades.size
}

// ── Gali context helpers ──────────────────────────────────────────────────────

/** Compute overall average score (0-100) across all personal quiz grades */
export function computeOverallAverage(): number {
  const grades = getAllGrades()
  const scores: number[] = []
  grades.forEach(g => {
    if (g.bestScore.total > 0) {
      scores.push((g.bestScore.correct / g.bestScore.total) * 100)
    }
  })
  if (scores.length === 0) return 0
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
}

/** Return the last N completed experiments with their scores (needs experiment list for titles) */
export function getRecentExperiments(
  experiments: Array<{ num: number; title: string }>,
  n: number = 5
): Array<{ title: string; score: number }> {
  if (typeof window === 'undefined') return []
  const completed: Array<{ title: string; score: number; completedAt: string }> = []
  for (const exp of experiments) {
    const progress = loadProgress(exp.num)
    if (progress) {
      const pct = progress.total > 0
        ? Math.round((progress.correct / progress.total) * 100)
        : 0
      completed.push({ title: exp.title, score: pct, completedAt: progress.completedAt })
    }
  }
  completed.sort((a, b) => b.completedAt.localeCompare(a.completedAt))
  return completed.slice(0, n).map(({ title, score }) => ({ title, score }))
}

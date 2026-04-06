import { loadProgress, type ExperimentProgress } from './storage'
import type { Experiment } from '@/data/loader'

export interface SectionStats {
  section: string
  completed: number
  total: number
  avgScore: number
}

export interface SubjectStats {
  completed: number
  total: number
  avgScore: number
  sections: SectionStats[]
}

export interface DashboardData {
  physics: SubjectStats
  chemistry: SubjectStats
  totalCompleted: number
  totalExperiments: number
  overallAvgScore: number
  recentActivity: (ExperimentProgress & { title: string })[]
}

function computeSubjectStats(
  experiments: Experiment[],
  progressMap: Map<number, ExperimentProgress>
): SubjectStats {
  const sectionMap = new Map<string, { completed: number; total: number; scores: number[] }>()

  for (const exp of experiments) {
    const sec = exp.section
    if (!sectionMap.has(sec)) {
      sectionMap.set(sec, { completed: 0, total: 0, scores: [] })
    }
    const s = sectionMap.get(sec)!
    s.total++
    const prog = progressMap.get(exp.num)
    if (prog) {
      s.completed++
      s.scores.push(prog.total > 0 ? (prog.correct / prog.total) * 100 : 0)
    }
  }

  const sections: SectionStats[] = []
  let totalCompleted = 0
  let totalExp = 0
  const allScores: number[] = []

  for (const [section, data] of sectionMap) {
    const avg = data.scores.length > 0
      ? data.scores.reduce((a, b) => a + b, 0) / data.scores.length
      : 0
    sections.push({ section, completed: data.completed, total: data.total, avgScore: Math.round(avg) })
    totalCompleted += data.completed
    totalExp += data.total
    allScores.push(...data.scores)
  }

  const avgScore = allScores.length > 0
    ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length)
    : 0

  return { completed: totalCompleted, total: totalExp, avgScore, sections }
}

export function getDashboardData(
  physicsExperiments: Experiment[],
  chemistryExperiments: Experiment[]
): DashboardData {
  const allExperiments = [...physicsExperiments, ...chemistryExperiments]
  const progressMap = new Map<number, ExperimentProgress>()
  const titleMap = new Map<number, string>()

  for (const exp of allExperiments) {
    titleMap.set(exp.num, exp.title)
    const prog = loadProgress(exp.num)
    if (prog) progressMap.set(exp.num, prog)
  }

  const physics = computeSubjectStats(physicsExperiments, progressMap)
  const chemistry = computeSubjectStats(chemistryExperiments, progressMap)

  const totalCompleted = physics.completed + chemistry.completed
  const totalExperiments = physics.total + chemistry.total

  const allScores = [...progressMap.values()]
    .map(p => p.total > 0 ? (p.correct / p.total) * 100 : 0)
  const overallAvgScore = allScores.length > 0
    ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length)
    : 0

  const recentActivity = [...progressMap.values()]
    .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
    .slice(0, 5)
    .map(p => ({ ...p, title: titleMap.get(p.num) || `Experiment #${p.num}` }))

  return {
    physics,
    chemistry,
    totalCompleted,
    totalExperiments,
    overallAvgScore,
    recentActivity,
  }
}

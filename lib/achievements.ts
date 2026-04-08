import type { StudentGrades } from './storage'

export interface Achievement {
  id: string
  titleKey: string
  descriptionKey: string
  icon: string
  condition: (grades: Map<number, StudentGrades>) => boolean
}

export const achievements: Achievement[] = [
  {
    id: 'first_experiment',
    titleKey: 'achievements.first_experiment',
    descriptionKey: 'achievements.first_experiment_desc',
    icon: '\uD83C\uDFAF',
    condition: (g) => g.size >= 1,
  },
  {
    id: 'five_experiments',
    titleKey: 'achievements.five_experiments',
    descriptionKey: 'achievements.five_experiments_desc',
    icon: '\u2B50',
    condition: (g) => g.size >= 5,
  },
  {
    id: 'perfect_score',
    titleKey: 'achievements.perfect_score',
    descriptionKey: 'achievements.perfect_score_desc',
    icon: '\uD83D\uDCAF',
    condition: (g) => [...g.values()].some(s => s.bestScore.correct === s.bestScore.total && s.bestScore.total > 0),
  },
  {
    id: 'mechanics_master',
    titleKey: 'achievements.mechanics_master',
    descriptionKey: 'achievements.mechanics_master_desc',
    icon: '\u2699\uFE0F',
    condition: (g) => {
      // Experiments 1-18 are mechanics
      let count = 0
      let totalPct = 0
      for (let n = 1; n <= 18; n++) {
        const grades = g.get(n)
        if (grades && grades.bestScore.total > 0) {
          count++
          totalPct += (grades.bestScore.correct / grades.bestScore.total) * 100
        }
      }
      return count === 18 && (totalPct / 18) >= 70
    },
  },
  {
    id: 'chemistry_explorer',
    titleKey: 'achievements.chemistry_explorer',
    descriptionKey: 'achievements.chemistry_explorer_desc',
    icon: '\uD83E\uDDEA',
    condition: (g) => {
      // Chemistry experiments start at 101
      let count = 0
      for (const [num] of g) {
        if (num >= 101) count++
      }
      return count >= 10
    },
  },
  {
    id: 'ten_experiments',
    titleKey: 'achievements.ten_experiments',
    descriptionKey: 'achievements.ten_experiments_desc',
    icon: '\uD83C\uDF1F',
    condition: (g) => g.size >= 10,
  },
  {
    id: 'speed_demon',
    titleKey: 'achievements.speed_demon',
    descriptionKey: 'achievements.speed_demon_desc',
    icon: '\u26A1',
    condition: (g) => {
      for (const grades of g.values()) {
        for (const attempt of grades.attempts) {
          if (attempt.timeSpent && attempt.timeSpent <= 60 && attempt.total > 0 && attempt.correct === attempt.total) {
            return true
          }
        }
      }
      return false
    },
  },
  {
    id: 'improver',
    titleKey: 'achievements.improver',
    descriptionKey: 'achievements.improver_desc',
    icon: '\uD83D\uDCC8',
    condition: (g) => {
      for (const grades of g.values()) {
        if (grades.attempts.length >= 2) {
          const first = grades.attempts[0]
          const last = grades.attempts[grades.attempts.length - 1]
          if (first.total > 0 && last.total > 0) {
            const firstPct = first.correct / first.total
            const lastPct = last.correct / last.total
            if (lastPct > firstPct) return true
          }
        }
      }
      return false
    },
  },
]

export function getEarnedAchievements(grades: Map<number, StudentGrades>): Achievement[] {
  return achievements.filter(a => a.condition(grades))
}

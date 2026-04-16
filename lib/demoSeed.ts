/**
 * Seeds localStorage with sample progress data for the demo account.
 * Only runs if no existing progress data is found.
 */

const DEMO_SEED_KEY = 'atp-demo-seeded'

export function seedDemoProgress(): void {
  if (typeof window === 'undefined') return

  // Don't re-seed if already seeded or if user has real progress
  if (localStorage.getItem(DEMO_SEED_KEY)) return
  const hasProgress = Array.from({ length: localStorage.length }, (_, i) => localStorage.key(i))
    .some(k => k?.startsWith('atp-progress-'))
  if (hasProgress) return

  const now = new Date()
  const day = (daysAgo: number) => new Date(now.getTime() - daysAgo * 86400000).toISOString()
  const today = now.toISOString().split('T')[0]
  const yesterday = new Date(now.getTime() - 86400000).toISOString().split('T')[0]

  // ── Completed experiments: physics #1–#11 with realistic scores ──
  // Note: physics data skips #7 (nums go 1–6, 8–42), so we use #11 instead
  const completedExperiments: Array<{
    num: number; correct: number; total: number; daysAgo: number; timeSpent: number
  }> = [
    { num: 1,  correct: 3, total: 3, daysAgo: 6, timeSpent: 95  },
    { num: 2,  correct: 3, total: 3, daysAgo: 6, timeSpent: 110 },
    { num: 3,  correct: 2, total: 3, daysAgo: 5, timeSpent: 130 },
    { num: 4,  correct: 3, total: 3, daysAgo: 5, timeSpent: 88  },
    { num: 5,  correct: 2, total: 3, daysAgo: 4, timeSpent: 145 },
    { num: 6,  correct: 3, total: 3, daysAgo: 3, timeSpent: 102 },
    { num: 8,  correct: 2, total: 3, daysAgo: 2, timeSpent: 120 },
    { num: 9,  correct: 3, total: 3, daysAgo: 1, timeSpent: 78  },
    { num: 10, correct: 3, total: 3, daysAgo: 1, timeSpent: 92  },
    { num: 11, correct: 2, total: 3, daysAgo: 0, timeSpent: 135 },
  ]

  for (const exp of completedExperiments) {
    const completedAt = day(exp.daysAgo)

    // atp-progress-{num}
    localStorage.setItem(`atp-progress-${exp.num}`, JSON.stringify({
      num: exp.num,
      correct: exp.correct,
      total: exp.total,
      completedAt,
    }))

    // atp-grades-{num}
    const attempt = {
      num: exp.num,
      correct: exp.correct,
      total: exp.total,
      completedAt,
      answers: Object.fromEntries(
        Array.from({ length: exp.total }, (_, i) => [i, i < exp.correct ? 0 : 1])
      ),
      timeSpent: exp.timeSpent,
    }
    localStorage.setItem(`atp-grades-${exp.num}`, JSON.stringify({
      attempts: [attempt],
      bestScore: { correct: exp.correct, total: exp.total },
      lastAttempt: completedAt,
    }))
  }

  // ── Gamification state: ~1850 XP → Level 4 "Researcher", 85% to next level ──
  // Level 4 range: 1000–2000. 1850 XP = 850/1000 = 85% progress bar.
  const xpHistory = completedExperiments.map(exp => ({
    amount: 50,
    reason: 'EXPERIMENT_COMPLETE',
    timestamp: day(exp.daysAgo),
  }))
  // Add bonus XP entries for perfect scores
  completedExperiments
    .filter(e => e.correct === e.total)
    .forEach(exp => {
      xpHistory.push({ amount: 100, reason: 'QUIZ_PERFECT', timestamp: day(exp.daysAgo) })
    })
  // Add first experiment bonus
  xpHistory.unshift({ amount: 150, reason: 'FIRST_EXPERIMENT', timestamp: day(6) })
  // Add streak bonuses
  xpHistory.push({ amount: 75, reason: 'STREAK_3_DAY', timestamp: day(3) })

  localStorage.setItem('atp-gamification', JSON.stringify({
    totalXP: 1850,
    level: 4,
    xpHistory,
    streak: {
      currentStreak: 5,
      longestStreak: 5,
      lastActiveDate: yesterday,
      graceDaysUsed: 0,
    },
    dailyGoal: {
      target: 3,
      completed: 2,
      date: today,
    },
    celebrationQueue: [],
  }))

  // Mark as seeded so we don't overwrite
  localStorage.setItem(DEMO_SEED_KEY, '1')
}

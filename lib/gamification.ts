// ═══ XP REWARDS ═══
export const XP_REWARDS = {
  EXPERIMENT_COMPLETE: 50,
  QUIZ_PERFECT: 100,
  QUIZ_GOOD: 60,
  QUIZ_ATTEMPT: 20,
  FIRST_EXPERIMENT: 150,
  SECTION_COMPLETE: 200,
  SUBJECT_COMPLETE: 500,
  STREAK_3_DAY: 75,
  STREAK_7_DAY: 200,
  STREAK_14_DAY: 500,
  STREAK_30_DAY: 1000,
  DAILY_FIRST_EXPERIMENT: 25,
}

// ═══ SCIENTIST LEVELS ═══
export interface ScientistLevel {
  level: number
  title: string
  titleKey: string
  xpRequired: number
  icon: string
  color: string
}

export const SCIENTIST_LEVELS: ScientistLevel[] = [
  { level: 1,  title: 'Lab Assistant',        titleKey: 'gamification.levels.labAssistant',        xpRequired: 0,     icon: '🧪', color: '#94A3B8' },
  { level: 2,  title: 'Lab Technician',       titleKey: 'gamification.levels.labTechnician',       xpRequired: 200,   icon: '🔬', color: '#14B8A6' },
  { level: 3,  title: 'Junior Researcher',    titleKey: 'gamification.levels.juniorResearcher',    xpRequired: 500,   icon: '📋', color: '#10B981' },
  { level: 4,  title: 'Researcher',           titleKey: 'gamification.levels.researcher',          xpRequired: 1000,  icon: '🧬', color: '#3B82F6' },
  { level: 5,  title: 'Senior Researcher',    titleKey: 'gamification.levels.seniorResearcher',    xpRequired: 2000,  icon: '⚗️', color: '#8B5CF6' },
  { level: 6,  title: 'Lead Scientist',       titleKey: 'gamification.levels.leadScientist',       xpRequired: 3500,  icon: '🔭', color: '#A855F7' },
  { level: 7,  title: 'Principal Scientist',  titleKey: 'gamification.levels.principalScientist',  xpRequired: 5500,  icon: '🌟', color: '#EC4899' },
  { level: 8,  title: 'Science Director',     titleKey: 'gamification.levels.scienceDirector',     xpRequired: 8000,  icon: '🏆', color: '#F59E0B' },
  { level: 9,  title: 'Distinguished Fellow', titleKey: 'gamification.levels.distinguishedFellow', xpRequired: 12000, icon: '💎', color: '#EF4444' },
  { level: 10, title: 'Chief Scientist',      titleKey: 'gamification.levels.chiefScientist',      xpRequired: 18000, icon: '👑', color: '#F97316' },
]

// ═══ GAMIFICATION STATE ═══
export interface GamificationState {
  totalXP: number
  level: number
  xpHistory: Array<{ amount: number; reason: string; timestamp: string }>
  streak: StreakData
  dailyGoal: { target: number; completed: number; date: string }
  celebrationQueue: CelebrationEvent[]
}

export interface StreakData {
  currentStreak: number
  longestStreak: number
  lastActiveDate: string  // YYYY-MM-DD
  graceDaysUsed: number
}

export interface CelebrationEvent {
  type: 'level_up' | 'streak_milestone' | 'achievement' | 'xp_earned' | 'section_complete' | 'perfect_score'
  data: Record<string, any>
  shown: boolean
}

// ═══ LOCALSTORAGE ═══
const STORAGE_KEY = 'atp-gamification'

export function loadGamification(): GamificationState {
  if (typeof window === 'undefined') {
    return defaultState()
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return defaultState()
}

function defaultState(): GamificationState {
  return {
    totalXP: 0,
    level: 1,
    xpHistory: [],
    streak: { currentStreak: 0, longestStreak: 0, lastActiveDate: '', graceDaysUsed: 0 },
    dailyGoal: { target: 3, completed: 0, date: '' },
    celebrationQueue: [],
  }
}

export function saveGamification(state: GamificationState): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function resetGamification(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEY)
}

// ═══ CORE FUNCTIONS ═══

export function getCurrentLevel(totalXP: number): ScientistLevel {
  let current = SCIENTIST_LEVELS[0]
  for (const lvl of SCIENTIST_LEVELS) {
    if (totalXP >= lvl.xpRequired) current = lvl
    else break
  }
  return current
}

export function getNextLevel(totalXP: number): ScientistLevel | null {
  for (const lvl of SCIENTIST_LEVELS) {
    if (totalXP < lvl.xpRequired) return lvl
  }
  return null
}

export function getXPProgress(totalXP: number): { current: number; needed: number; percentage: number } {
  const currentLvl = getCurrentLevel(totalXP)
  const nextLvl = getNextLevel(totalXP)
  if (!nextLvl) return { current: 0, needed: 0, percentage: 100 }
  const xpIntoLevel = totalXP - currentLvl.xpRequired
  const xpNeeded = nextLvl.xpRequired - currentLvl.xpRequired
  return {
    current: xpIntoLevel,
    needed: xpNeeded,
    percentage: Math.round((xpIntoLevel / xpNeeded) * 100),
  }
}

export function awardXP(reason: keyof typeof XP_REWARDS, customAmount?: number): CelebrationEvent[] {
  const state = loadGamification()
  const amount = customAmount ?? XP_REWARDS[reason]
  const oldLevel = getCurrentLevel(state.totalXP)

  state.totalXP += amount
  state.xpHistory.push({
    amount,
    reason,
    timestamp: new Date().toISOString(),
  })

  // Keep only last 100 entries
  if (state.xpHistory.length > 100) {
    state.xpHistory = state.xpHistory.slice(-100)
  }

  const newLevel = getCurrentLevel(state.totalXP)
  const events: CelebrationEvent[] = []

  // XP toast
  events.push({
    type: 'xp_earned',
    data: { amount, reason },
    shown: false,
  })

  // Level up check
  if (newLevel.level > oldLevel.level) {
    state.level = newLevel.level
    events.push({
      type: 'level_up',
      data: { newLevel: newLevel.level, title: newLevel.title, titleKey: newLevel.titleKey, icon: newLevel.icon },
      shown: false,
    })
  }

  state.celebrationQueue.push(...events)
  saveGamification(state)
  return events
}

// ═══ STREAK MANAGEMENT ═══

export function updateStreak(): CelebrationEvent[] {
  const state = loadGamification()
  const today = new Date().toISOString().split('T')[0]
  const events: CelebrationEvent[] = []

  if (state.streak.lastActiveDate === today) {
    saveGamification(state)
    return events
  }

  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
  const twoDaysAgo = new Date(Date.now() - 172800000).toISOString().split('T')[0]

  if (state.streak.lastActiveDate === yesterday) {
    state.streak.currentStreak += 1
    state.streak.graceDaysUsed = 0
  } else if (state.streak.lastActiveDate === twoDaysAgo && state.streak.graceDaysUsed === 0) {
    state.streak.currentStreak += 1
    state.streak.graceDaysUsed = 1
  } else if (state.streak.lastActiveDate !== '') {
    state.streak.currentStreak = 1
    state.streak.graceDaysUsed = 0
  } else {
    state.streak.currentStreak = 1
  }

  state.streak.lastActiveDate = today

  if (state.streak.currentStreak > state.streak.longestStreak) {
    state.streak.longestStreak = state.streak.currentStreak
  }

  // Streak milestones
  const milestones = [
    { days: 3, xp: 'STREAK_3_DAY' as keyof typeof XP_REWARDS },
    { days: 7, xp: 'STREAK_7_DAY' as keyof typeof XP_REWARDS },
    { days: 14, xp: 'STREAK_14_DAY' as keyof typeof XP_REWARDS },
    { days: 30, xp: 'STREAK_30_DAY' as keyof typeof XP_REWARDS },
  ]

  for (const m of milestones) {
    if (state.streak.currentStreak === m.days) {
      const xpAmount = XP_REWARDS[m.xp]
      events.push({
        type: 'streak_milestone',
        data: { days: m.days, xp: xpAmount },
        shown: false,
      })
      state.totalXP += xpAmount
    }
  }

  // Daily goal reset
  if (state.dailyGoal.date !== today) {
    state.dailyGoal = { target: 3, completed: 0, date: today }
  }

  state.celebrationQueue.push(...events)
  saveGamification(state)
  return events
}

export function incrementDailyGoal(): void {
  const state = loadGamification()
  const today = new Date().toISOString().split('T')[0]
  if (state.dailyGoal.date !== today) {
    state.dailyGoal = { target: 3, completed: 1, date: today }
  } else {
    state.dailyGoal.completed += 1
  }
  saveGamification(state)
}

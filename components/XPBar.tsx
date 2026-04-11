'use client'
import { useState, useEffect } from 'react'
import { loadGamification, getCurrentLevel, getNextLevel, getXPProgress } from '@/lib/gamification'
import { useI18n } from '@/lib/i18n'
import { loadTeacherMode } from '@/lib/storage'

export default function XPBar() {
  const { t } = useI18n()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null

  // Hide in teacher mode
  if (loadTeacherMode()) return null

  const state = loadGamification()
  const currentLvl = getCurrentLevel(state.totalXP)
  const nextLvl = getNextLevel(state.totalXP)
  const progress = getXPProgress(state.totalXP)

  const today = new Date().toISOString().split('T')[0]
  const dailyGoal = state.dailyGoal.date === today
    ? state.dailyGoal
    : { target: 3, completed: 0, date: today }

  return (
    <div className="xp-bar-container">
      <div className="xp-bar-header">
        <div className="xp-level-badge" style={{ borderColor: currentLvl.color }}>
          <span className="xp-level-icon">{currentLvl.icon}</span>
          <span className="xp-level-num">{currentLvl.level}</span>
        </div>
        <div className="xp-level-info">
          <div className="xp-level-title">{t(currentLvl.titleKey)}</div>
          <div className="xp-level-xp">{state.totalXP.toLocaleString()} XP</div>
        </div>
        {state.streak.currentStreak > 0 && (
          <div className="xp-streak-badge">
            🔥 {state.streak.currentStreak}
          </div>
        )}
      </div>
      {nextLvl && (
        <div className="xp-progress-bar">
          <div
            className="xp-progress-fill"
            style={{ width: `${progress.percentage}%`, background: currentLvl.color }}
          />
        </div>
      )}
      {nextLvl && (
        <div className="xp-progress-label">
          {progress.current} / {progress.needed} XP {t('gamification.toNextLevel')}
        </div>
      )}

      {/* Daily Goal */}
      <div className="daily-goal">
        <span className="daily-goal-label">📅 {t('gamification.dailyGoal')}</span>
        <div className="daily-goal-dots">
          {Array.from({ length: dailyGoal.target }).map((_, i) => (
            <div key={i} className={`daily-goal-dot ${i < dailyGoal.completed ? 'completed' : ''}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

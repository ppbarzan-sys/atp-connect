'use client'
import { useState, useEffect } from 'react'
import { loadGamification, saveGamification, type CelebrationEvent } from '@/lib/gamification'
import { useI18n } from '@/lib/i18n'

export default function Celebrations() {
  const [event, setEvent] = useState<CelebrationEvent | null>(null)
  const [visible, setVisible] = useState(false)
  const { t } = useI18n()

  useEffect(() => {
    const interval = setInterval(() => {
      const state = loadGamification()
      const pending = state.celebrationQueue.find(e => !e.shown)
      if (pending) {
        pending.shown = true
        saveGamification(state)
        setEvent(pending)
        setVisible(true)

        const hideDelay = pending.type === 'level_up' ? 4000
          : pending.type === 'streak_milestone' ? 3500
          : pending.type === 'perfect_score' ? 3000
          : 2500

        setTimeout(() => setVisible(false), hideDelay)
        setTimeout(() => setEvent(null), hideDelay + 500)
      }
    }, 500)

    return () => clearInterval(interval)
  }, [])

  if (!event) return null

  return (
    <>
      {/* XP Toast */}
      {event.type === 'xp_earned' && (
        <div className={`xp-toast ${visible ? 'xp-toast-enter' : 'xp-toast-exit'}`}>
          <span className="xp-toast-icon">⚡</span>
          <span className="xp-toast-amount">+{event.data.amount} XP</span>
        </div>
      )}

      {/* Level Up — full screen celebration */}
      {event.type === 'level_up' && (
        <div className={`celebration-overlay ${visible ? 'celebration-enter' : 'celebration-exit'}`}>
          <div className="confetti-container">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="confetti-piece"
                style={{
                  '--x': `${Math.random() * 100}vw`,
                  '--delay': `${Math.random() * 2}s`,
                  '--rotation': `${Math.random() * 360}deg`,
                  '--color': ['#14B8A6', '#F59E0B', '#EF4444', '#8B5CF6', '#3B82F6', '#EC4899'][i % 6],
                } as React.CSSProperties}
              />
            ))}
          </div>
          <div className="level-up-card">
            <div className="level-up-icon">{event.data.icon}</div>
            <div className="level-up-label">{t('gamification.levelUp')}</div>
            <div className="level-up-title">{t(event.data.titleKey)}</div>
            <div className="level-up-subtitle">{t('gamification.level')} {event.data.newLevel}</div>
          </div>
        </div>
      )}

      {/* Streak Milestone */}
      {event.type === 'streak_milestone' && (
        <div className={`celebration-overlay ${visible ? 'celebration-enter' : 'celebration-exit'}`}>
          <div className="streak-card">
            <div className="streak-flame">🔥</div>
            <div className="streak-days">{event.data.days} {t('gamification.dayStreak')}</div>
            <div className="streak-bonus">+{event.data.xp} XP</div>
          </div>
        </div>
      )}

      {/* Perfect Score */}
      {event.type === 'perfect_score' && (
        <div className={`xp-toast xp-toast-perfect ${visible ? 'xp-toast-enter' : 'xp-toast-exit'}`}>
          <span className="xp-toast-icon">⭐</span>
          <span className="xp-toast-amount">{t('gamification.perfectScore')}</span>
        </div>
      )}
    </>
  )
}

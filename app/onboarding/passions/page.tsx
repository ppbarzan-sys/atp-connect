'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useI18n } from '@/lib/i18n'
import {
  PASSION_OPTIONS,
  MAX_PASSIONS,
  MAX_CUSTOM_LENGTH,
  savePassions,
  loadPassions,
  hasCompletedPassionOnboarding,
  type PassionLocale,
} from '@/lib/passions'

export default function PassionsOnboardingPage() {
  const router = useRouter()
  const { t, locale } = useI18n()
  const [selected, setSelected] = useState<string[]>([])
  const [custom, setCustom] = useState('')

  useEffect(() => {
    // If already completed, hydrate UI so re-entry isn't destructive
    if (hasCompletedPassionOnboarding()) {
      const existing = loadPassions()
      const chipIds = new Set(PASSION_OPTIONS.map((p) => p.id))
      setSelected(existing.filter((p) => chipIds.has(p)))
      const custom = existing.find((p) => !chipIds.has(p))
      if (custom) setCustom(custom)
    }
  }, [])

  function toggle(id: string) {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((p) => p !== id)
      if (prev.length >= MAX_PASSIONS) return prev
      return [...prev, id]
    })
  }

  function handleSkip() {
    savePassions([])
    router.replace('/app')
  }

  function handleContinue() {
    const extras = custom.trim() ? [custom.trim().slice(0, MAX_CUSTOM_LENGTH)] : []
    savePassions([...selected, ...extras])
    router.replace('/app')
  }

  const lang = locale as PassionLocale

  return (
    <div className="passions-onboarding">
      <div className="passions-card">
        <h1 className="passions-title">{t('passions.title')}</h1>
        <p className="passions-subtitle">{t('passions.subtitle')}</p>

        <div className="passions-grid" role="group" aria-label={t('passions.title')}>
          {PASSION_OPTIONS.map((option) => {
            const active = selected.includes(option.id)
            const disabled = !active && selected.length >= MAX_PASSIONS
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => toggle(option.id)}
                disabled={disabled}
                aria-pressed={active}
                className={`passion-chip${active ? ' passion-chip-active' : ''}${disabled ? ' passion-chip-disabled' : ''}`}
              >
                {option.labels[lang] ?? option.labels.en}
              </button>
            )
          })}
        </div>

        <label className="passions-custom-label" htmlFor="passions-custom">
          {t('passions.something_else')}
        </label>
        <input
          id="passions-custom"
          type="text"
          className="passions-custom-input"
          value={custom}
          maxLength={MAX_CUSTOM_LENGTH}
          onChange={(e) => setCustom(e.target.value)}
          dir="auto"
        />

        <div className="passions-actions">
          <button type="button" onClick={handleSkip} className="passions-skip-btn">
            {t('passions.skip')}
          </button>
          <button type="button" onClick={handleContinue} className="passions-continue-btn">
            {t('passions.continue')}
          </button>
        </div>
      </div>
    </div>
  )
}

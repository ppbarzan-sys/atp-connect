'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useI18n } from '@/lib/i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { seedDemoProgress } from '@/lib/demoSeed'

export default function LandingPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { t } = useI18n()

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      if (res.ok) {
        seedDemoProgress()
        // Store username for role selector greeting
        localStorage.setItem('atp_username', username)
        // Demo mode: reset passion onboarding so every session starts fresh
        localStorage.removeItem('atp.learner.passions.v1')
        localStorage.removeItem('atp.learner.passions.completed.v1')
        // Signal that the role selector should appear on /app
        sessionStorage.setItem('needsRoleSelection', 'true')
        router.push('/app')
        router.refresh()
      } else {
        const data = await res.json().catch(() => ({}))
        setError(data.error === 'Invalid username or password.'
          ? t('landing.error_invalid')
          : t('landing.error_generic'))
        setLoading(false)
      }
    } catch {
      setError(t('landing.error_generic'))
      setLoading(false)
    }
  }

  return (
    <div className="landing-root">
      <div className="landing-bg-orb" aria-hidden />

      <div className="landing-lang">
        <LanguageSwitcher />
      </div>

      <main className="landing-card">
        <div className="landing-logo-wrap">
          <img
            src="/logo-atp-full.png"
            alt="ATP Technologies"
            className="landing-logo"
          />
        </div>

        <div className="landing-brand">
          <h1 className="landing-title" dir="ltr">ATP Connect</h1>
          <p className="landing-tagline">{t('landing.tagline')}</p>
        </div>

        <form className="landing-form" onSubmit={handleSignIn} noValidate>
          <div className="landing-field">
            <label className="landing-label" htmlFor="username">
              {t('landing.username')}
            </label>
            <input
              id="username"
              type="text"
              className="landing-input"
              placeholder={t('landing.username_placeholder')}
              value={username}
              onChange={e => setUsername(e.target.value)}
              autoComplete="username"
              autoCapitalize="none"
              required
            />
          </div>

          <div className="landing-field">
            <label className="landing-label" htmlFor="password">
              {t('landing.password')}
            </label>
            <input
              id="password"
              type="password"
              className="landing-input"
              placeholder={t('landing.password_placeholder')}
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          {error && <p className="landing-error">{error}</p>}

          <button
            type="submit"
            className="landing-signin-btn"
            disabled={loading}
          >
            {loading
              ? <span className="landing-spinner" aria-label={t('landing.signing_in')} />
              : t('landing.sign_in')}
          </button>
        </form>

        {/* Below-fold pitch block */}
        <div className="landing-pitch">
          <p className="landing-pitch-desc">
            {t('landing.pitch_desc')}
          </p>
          <div className="landing-subjects">
            <span>{t('landing.pitch_subjects_physics')}</span>
            <span className="landing-dot">·</span>
            <span>{t('landing.pitch_subjects_chemistry')}</span>
            <span className="landing-dot">·</span>
            <span>{t('landing.pitch_subjects_robotics')}</span>
            <span className="landing-dot">·</span>
            <span>{t('landing.pitch_subjects_ai')}</span>
          </div>
          <p className="landing-pitch-value">
            {t('landing.pitch_value')}
          </p>
          <p className="landing-pitch-cta">
            {t('landing.pitch_cta')}
          </p>
          <div className="landing-credits-box">
            <p className="landing-credits-built">{t('landing.pitch_built_by')}</p>
            <p className="landing-credits-label">{t('landing.pitch_powered_by')}</p>
            <div className="landing-credits-badges">
              <span className="landing-credits-badge">Anthropic</span>
              <span className="landing-credits-badge">Arduino Education</span>
              <span className="landing-credits-badge">Harvard University</span>
              <span className="landing-credits-badge">Raspberry Pi Foundation</span>
              <span className="landing-credits-badge">Khan Academy</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="landing-footer">
        {t('landing.copyright', { year: String(new Date().getFullYear()) })}
      </footer>
    </div>
  )
}

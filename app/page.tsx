'use client'

// ─── DEV NOTE ────────────────────────────────────────────────────────────────
// Sign-in is bypassed during development: clicking the button sets the session
// cookie immediately, no credentials required.
//
// To add real authentication later:
//   1. Replace `handleSignIn` below with a call to your auth provider
//      (NextAuth, Supabase, Clerk, etc.).
//   2. The /api/auth/signin route already has a clearly marked placeholder.
//   3. Add email/password inputs — the CSS classes (landing-form, landing-field,
//      landing-label, landing-input, landing-error) are ready in globals.css.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useI18n } from '@/lib/i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function LandingPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { t } = useI18n()

  async function handleSignIn() {
    setLoading(true)
    await fetch('/api/auth/signin', { method: 'POST' })
    router.push('/app')
    router.refresh()
  }

  return (
    <div className="landing-root">
      <div className="landing-bg-orb" aria-hidden />

      {/* Language switcher — top right on landing page */}
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
          <h1 className="landing-title">ATP Connect</h1>
          <p className="landing-tagline">{t('landing.tagline')}</p>
        </div>

        <button
          className="landing-signin-btn"
          onClick={handleSignIn}
          disabled={loading}
        >
          {loading
            ? <span className="landing-spinner" aria-label={t('landing.signing_in')} />
            : t('landing.sign_in')}
        </button>

        <p className="landing-dev-note">{t('landing.dev_note')}</p>
      </main>

      <footer className="landing-footer">
        {t('landing.copyright', { year: String(new Date().getFullYear()) })}
      </footer>
    </div>
  )
}

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

export default function LandingPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  // DEV: sets session cookie without credentials, then enters the platform.
  // Replace with real auth when ready — only this function needs to change.
  async function handleSignIn() {
    setLoading(true)
    await fetch('/api/auth/signin', { method: 'POST' })
    router.push('/app')
    router.refresh()
  }

  return (
    <div className="landing-root">
      <div className="landing-bg-orb" aria-hidden />

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
          <p className="landing-tagline">
            Empowering curiosity.&nbsp; Inspiring innovation.
          </p>
        </div>

        <button
          className="landing-signin-btn"
          onClick={handleSignIn}
          disabled={loading}
        >
          {loading
            ? <span className="landing-spinner" aria-label="Entering…" />
            : 'Sign In'}
        </button>

        <p className="landing-dev-note">
          Development mode — authentication not enforced
        </p>
      </main>

      <footer className="landing-footer">
        © {new Date().getFullYear()} ATP Technologies
      </footer>
    </div>
  )
}

import { NextResponse } from 'next/server'

/**
 * POST /api/auth/signin
 *
 * ── DEVELOPMENT MODE ──────────────────────────────────────────────────────────
 * No credentials are validated. Any POST to this endpoint sets the session
 * cookie and grants access to the platform immediately.
 *
 * ── PRODUCTION: plug in real auth here ───────────────────────────────────────
 * When you're ready to add authentication:
 *   1. Parse credentials from the request body:
 *        const { email, password } = await request.json()
 *   2. Validate them against your auth provider:
 *        const user = await yourAuthProvider.verify(email, password)
 *        if (!user) return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 })
 *   3. Optionally store a real token/user-id in the cookie value instead of 'true'.
 *   4. Update middleware.ts to decode and verify the token rather than checking === 'true'.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export async function POST() {
  const res = NextResponse.json({ ok: true })

  res.cookies.set('atp_session', 'true', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })

  return res
}

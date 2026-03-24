import { NextResponse } from 'next/server'

/**
 * POST /api/auth/signout
 * Clears the session cookie and redirects to /landing.
 */
export async function POST() {
  const res = NextResponse.json({ ok: true })
  res.cookies.set('atp_session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
  })
  return res
}

import { NextRequest, NextResponse } from 'next/server'
import { rateLimit } from '@/lib/rateLimit'

/**
 * POST /api/auth/signin
 *
 * Validates username + password against the DEMO_USERS environment variable.
 *
 * Set DEMO_USERS as a comma-separated list of user:password pairs, e.g.:
 *   DEMO_USERS=student:pass123,teacher:teach456
 *
 * Returns 200 + sets session cookie on success.
 * Returns 401 on invalid credentials.
 */
export async function POST(req: NextRequest) {
  // Rate limiting: 5 requests per 60 seconds per IP
  const ip = req.headers.get('x-forwarded-for') || 'unknown'
  const rl = rateLimit(ip, 5, 60_000)
  if (!rl.success) {
    return NextResponse.json({ error: 'Too many attempts, try again later' }, { status: 429 })
  }

  const { username, password } = await req.json().catch(() => ({}))

  if (!username || !password) {
    return NextResponse.json({ error: 'Missing credentials.' }, { status: 400 })
  }

  // Parse DEMO_USERS env var: "user1:pass1,user2:pass2"
  const raw = process.env.DEMO_USERS ?? ''
  const validUsers: Record<string, string> = {}
  for (const pair of raw.split(',')) {
    const [u, ...rest] = pair.trim().split(':')
    if (u && rest.length) validUsers[u.toLowerCase()] = rest.join(':')
  }

  const expected = validUsers[username.trim().toLowerCase()]
  if (!expected || expected !== password) {
    return NextResponse.json({ error: 'Invalid username or password.' }, { status: 401 })
  }

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

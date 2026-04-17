import { NextRequest, NextResponse } from 'next/server'

// Routes that require a valid session
const PROTECTED = ['/app', '/experiments', '/chemistry', '/ai', '/robotics', '/dashboard', '/classroom', '/onboarding']

// Routes always accessible without a session
const PUBLIC = ['/', '/landing', '/api/auth']

function isProtected(pathname: string) {
  return PROTECTED.some(p => pathname === p || pathname.startsWith(p + '/'))
}

function isPublic(pathname: string) {
  return PUBLIC.some(p => pathname === p || pathname.startsWith(p + '/'))
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const session = request.cookies.get('atp_session')?.value === 'true'

  // Protected route, no session → back to landing
  if (isProtected(pathname) && !session) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  // Run on all routes except Next.js internals and static files
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.svg$|.*\\.ico$).*)'],
}

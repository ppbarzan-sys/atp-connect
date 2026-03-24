'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Applies the `app-shell` class to <html> and <body> on actual app pages
 * (locked-viewport layout). The landing page is excluded so it can scroll freely.
 */
export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLanding = pathname === '/' || pathname === '/landing'

  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    if (isLanding) {
      html.classList.remove('app-shell')
      body.classList.remove('app-shell')
    } else {
      html.classList.add('app-shell')
      body.classList.add('app-shell')
    }
  }, [isLanding])

  return <>{children}</>
}

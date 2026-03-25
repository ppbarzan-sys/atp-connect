import './globals.css'
import TeacherToggle from '@/components/TeacherToggle'
import AppShell from '@/components/AppShell'
import { LangProvider } from '@/lib/i18n'

export const metadata = {
  title: 'ATP Connect',
  description: 'Empowering curiosity. Inspiring innovation.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LangProvider>
          <AppShell>
            {children}
          </AppShell>
          <TeacherToggle />
        </LangProvider>
      </body>
    </html>
  )
}

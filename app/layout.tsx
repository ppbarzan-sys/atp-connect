import './globals.css'
import TeacherToggle from '@/components/TeacherToggle'
import AppShell from '@/components/AppShell'

export const metadata = {
  title: 'ATP Connect',
  description: 'Empowering curiosity. Inspiring innovation.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>
          {children}
        </AppShell>
        <TeacherToggle />
      </body>
    </html>
  )
}

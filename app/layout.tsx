import './globals.css'
import TeacherToggle from '@/components/TeacherToggle'
import AppShell from '@/components/AppShell'
import InstallPrompt from '@/components/InstallPrompt'
import Celebrations from '@/components/Celebrations'
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

// Runs synchronously in the document head before React hydrates.
// Reads the persisted locale from localStorage and sets <html dir> / <html lang>
// so Arabic users don't see a flash of LTR layout on the first paint.
const HTML_DIR_BOOTSTRAP = `(function(){try{var l=localStorage.getItem('atp_lang');if(!l)return;var e=document.documentElement;e.lang=l;e.dir=(l==='ar')?'rtl':'ltr';}catch(e){}})();`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: HTML_DIR_BOOTSTRAP }} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f766e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body>
        <LangProvider>
          <AppShell>
            <Celebrations />
            {children}
          </AppShell>
          <TeacherToggle />
          <InstallPrompt />
        </LangProvider>
      </body>
    </html>
  )
}

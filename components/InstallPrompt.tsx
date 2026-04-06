'use client'
import { useState, useEffect } from 'react'
import { useI18n } from '@/lib/i18n'

const DISMISS_KEY = 'atp-install-dismissed'

export default function InstallPrompt() {
  const { t } = useI18n()
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(DISMISS_KEY)) return

    function handler(e: Event) {
      e.preventDefault()
      setDeferredPrompt(e)
      setVisible(true)
    }

    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  if (!visible) return null

  function handleInstall() {
    if (deferredPrompt && 'prompt' in deferredPrompt) {
      (deferredPrompt as any).prompt()
    }
    setVisible(false)
  }

  function handleDismiss() {
    localStorage.setItem(DISMISS_KEY, '1')
    setVisible(false)
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#0f766e',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      padding: '0.75rem 1rem',
      zIndex: 9999,
      fontSize: '0.9rem',
    }}>
      <span>{t('install.prompt')}</span>
      <button
        onClick={handleInstall}
        style={{
          background: '#fff',
          color: '#0f766e',
          border: 'none',
          borderRadius: 8,
          padding: '0.4rem 1rem',
          fontWeight: 600,
          cursor: 'pointer',
          fontSize: '0.85rem',
        }}
      >
        {t('install.install')}
      </button>
      <button
        onClick={handleDismiss}
        style={{
          background: 'transparent',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.4)',
          borderRadius: 8,
          padding: '0.4rem 1rem',
          cursor: 'pointer',
          fontSize: '0.85rem',
        }}
      >
        {t('install.dismiss')}
      </button>
    </div>
  )
}

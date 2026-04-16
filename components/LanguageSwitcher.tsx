'use client'
import { useState, useRef, useEffect } from 'react'
import { useI18n, AVAILABLE_LOCALES, type Locale } from '@/lib/i18n'

const META: Record<Locale, { flag: string; label: string }> = {
  en: { flag: '🇬🇧', label: 'EN' },
  it: { flag: '🇮🇹', label: 'IT' },
  fr: { flag: '🇫🇷', label: 'FR' },
  es: { flag: '🇪🇸', label: 'ES' },
  ar: { flag: '🇸🇦', label: 'عر' },
}

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n()

  return (
    <div className="lang-switcher" title={t('lang.label')}>
      {AVAILABLE_LOCALES.map(l => (
        <button
          key={l}
          className={`lang-btn${locale === l ? ' active' : ''}`}
          onClick={() => setLocale(l)}
          aria-label={t(`lang.${l}`)}
          aria-pressed={locale === l}
        >
          <span className="lang-flag">{META[l].flag}</span>
          <span className="lang-label">{META[l].label}</span>
        </button>
      ))}
    </div>
  )
}

/** Compact globe icon with dropdown — used in mobile bottom nav */
export function LanguageGlobe({ onSignOut }: { onSignOut?: () => void }) {
  const { locale, setLocale, t } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function close(e: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    document.addEventListener('touchstart', close)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('touchstart', close)
    }
  }, [open])

  return (
    <div className="lang-globe-wrap" ref={ref}>
      <button
        className="nav-icon lang-globe-btn"
        onClick={() => setOpen(v => !v)}
        aria-label={t('lang.label')}
        aria-expanded={open}
      >
        <span>🌐</span>
        <span className="label">{META[locale].label}</span>
      </button>

      {open && (
        <div className="lang-globe-dropdown">
          {AVAILABLE_LOCALES.map(l => (
            <button
              key={l}
              className={`lang-globe-item${locale === l ? ' active' : ''}`}
              onClick={() => { setLocale(l); setOpen(false) }}
            >
              <span className="lang-flag">{META[l].flag}</span>
              <span className="lang-label">{META[l].label}</span>
            </button>
          ))}
          {onSignOut && (
            <>
              <div className="lang-globe-divider" />
              <button className="lang-globe-item signout" onClick={onSignOut}>
                <span>↩</span>
                <span className="lang-label">{t('nav.sign_out')}</span>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}

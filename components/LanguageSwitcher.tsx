'use client'
import { useI18n, AVAILABLE_LOCALES, type Locale } from '@/lib/i18n'

const META: Record<Locale, { flag: string; label: string }> = {
  en: { flag: '🇬🇧', label: 'EN' },
  it: { flag: '🇮🇹', label: 'IT' },
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

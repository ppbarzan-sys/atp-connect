'use client'
/**
 * ATP Connect — lightweight i18n
 *
 * Usage:
 *   const { t, locale, setLocale } = useI18n()
 *   t('nav.physics')                        → "Physics" / "Fisica"
 *   t('browse.physics_subtitle', { count: 41 }) → "41 physics experiments…"
 *
 * To add a new language:
 *   1. Add a JSON file under /locales/<code>.json
 *   2. Import it here and add to LOCALES
 *   3. Add the code to the Locale union type
 */

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import en from '@/locales/en.json'
import it from '@/locales/it.json'

export type Locale = 'en' | 'it'

// ── Type everything from the English master file ────────────────────────────
type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] }
export type Translations = typeof en

const LOCALES: Record<Locale, DeepPartial<Translations>> = { en, it }
export const AVAILABLE_LOCALES: Locale[] = ['en', 'it']
const STORAGE_KEY = 'atp_lang'
const DEFAULT_LOCALE: Locale = 'en'

// ── Dot-path resolver ────────────────────────────────────────────────────────
function resolve(obj: Record<string, unknown>, path: string): string | null {
  const parts = path.split('.')
  let cur: unknown = obj
  for (const p of parts) {
    if (cur == null || typeof cur !== 'object') return null
    cur = (cur as Record<string, unknown>)[p]
  }
  return typeof cur === 'string' ? cur : null
}

// ── Context ──────────────────────────────────────────────────────────────────
interface I18nContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (path: string, vars?: Record<string, string | number>) => string
  tSection: (name: string) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

// ── Provider ─────────────────────────────────────────────────────────────────
export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)

  // Restore persisted language on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
      if (saved && saved in LOCALES) setLocaleState(saved)
    } catch {
      // localStorage unavailable (SSR / private mode) — keep default
    }
  }, [])

  function setLocale(l: Locale) {
    setLocaleState(l)
    try { localStorage.setItem(STORAGE_KEY, l) } catch { /* ignore */ }
  }

  function t(path: string, vars?: Record<string, string | number>): string {
    // Try current locale first, fall back to English
    const str =
      resolve(LOCALES[locale] as Record<string, unknown>, path) ??
      resolve(LOCALES[DEFAULT_LOCALE] as Record<string, unknown>, path) ??
      path // last resort: return the key itself

    if (!vars) return str
    return str.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`))
  }

  // Normalises a data section name ("Matter & Solutions") → looks up sections.matter_solutions
  function tSection(name: string): string {
    const key = name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')
    return t(`sections.${key}`)
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, tSection }}>
      {children}
    </I18nContext.Provider>
  )
}

// ── Hook ─────────────────────────────────────────────────────────────────────
export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n() must be called inside <LangProvider>')
  return ctx
}

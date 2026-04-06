'use client'
import { useState, useEffect, useRef } from 'react'
import { sectionColors as physicsColors, sectionEmojis as physicsEmojis } from '@/data/experiments'
import type { Experiment } from '@/data/loader'
import { getExperiments } from '@/data/loader'
import { useI18n } from '@/lib/i18n'

interface SearchOverlayProps {
  onClose: () => void
  onExpClick: (num: number) => void
  expData?: Experiment[]
  sectionColorMap?: Record<string, string>
  sectionEmojiMap?: Record<string, string>
}

export default function SearchOverlay({
  onClose,
  onExpClick,
  expData,
  sectionColorMap,
  sectionEmojiMap,
}: SearchOverlayProps) {
  const { t, tSection, locale } = useI18n()
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const allExperiments = expData ?? getExperiments(locale)
  const sectionColors = sectionColorMap ?? physicsColors
  const sectionEmojis = sectionEmojiMap ?? physicsEmojis

  useEffect(() => {
    inputRef.current?.focus()
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const results =
    query.trim().length < 2
      ? []
      : allExperiments
          .filter(exp => {
            const q = query.toLowerCase()
            return (
              exp.title.toLowerCase().includes(q) ||
              exp.section.toLowerCase().includes(q) ||
              exp.desc.toLowerCase().includes(q)
            )
          })
          .slice(0, 12)

  return (
    <div className="search-overlay open" onClick={onClose}>
      <div className="search-box" onClick={e => e.stopPropagation()}>
        <div className="search-input-wrap">
          <span>🔍</span>
          <input
            ref={inputRef}
            type="text"
            className="search-main-input"
            placeholder={t('search.placeholder')}
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className="search-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="search-results">
          {results.map(exp => {
            const color = sectionColors[exp.section] || '#14B8A6'
            const emoji = sectionEmojis[exp.section] || '🔬'
            return (
              <div
                key={exp.num}
                className="search-item"
                onClick={() => onExpClick(exp.num)}
              >
                <div className="search-item-emoji">{emoji}</div>
                <div>
                  <div className="search-item-section" style={{ color }}>{tSection(exp.section)}</div>
                  <div className="search-item-title">{exp.title}</div>
                  <div className="search-item-desc">{exp.desc}</div>
                </div>
              </div>
            )
          })}

          {query.trim().length >= 2 && results.length === 0 && (
            <div style={{ padding: '24px 20px', color: 'var(--muted)', textAlign: 'center' }}>
              {t('search.no_results', { query })}
            </div>
          )}

          {query.trim().length < 2 && (
            <div style={{ padding: '24px 20px', color: 'var(--muted)', textAlign: 'center', fontSize: 14 }}>
              {t('search.empty')}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

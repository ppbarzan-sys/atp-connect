'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useI18n } from '@/lib/i18n'

export interface GaliContext {
  section?: string
  experimentTitle?: string
  experimentNum?: number
}

interface Message {
  role: 'user' | 'gali'
  content: string
  streaming?: boolean
}

interface GaliModalProps {
  context?: GaliContext
  onClose: () => void
}

const CHEMISTRY_SECTIONS = new Set([
  'Matter & Solutions',
  'Acids & Bases',
  'Gas Chemistry',
  'Electrochemistry',
  'Plant Physiology',
])

function isChemistry(context?: GaliContext): boolean {
  if (!context) return false
  if (context.experimentNum && context.experimentNum >= 101) return true
  if (context.section && CHEMISTRY_SECTIONS.has(context.section)) return true
  return false
}

export default function GaliModal({ context, onClose }: GaliModalProps) {
  const { t } = useI18n()

  // ── Build welcome message ────────────────────────────────────────────────
  function buildWelcome(): string {
    if (context?.experimentTitle) {
      const key = isChemistry(context)
        ? 'gali.welcome_exp_chemistry'
        : 'gali.welcome_exp_physics'
      return t(key, { title: context.experimentTitle })
    }
    if (context?.section && context.section !== 'all') {
      if (CHEMISTRY_SECTIONS.has(context.section)) {
        return t('gali.welcome_chem_section', { section: context.section })
      }
      return t('gali.welcome_physics_section', { section: context.section })
    }
    return t('gali.welcome_general')
  }

  // ── Quick prompts ────────────────────────────────────────────────────────
  function getQuickPrompts(): string[] {
    if (context?.experimentTitle) {
      return isChemistry(context)
        ? [t('gali.quick_chem_reaction'), t('gali.quick_chem_safety'), t('gali.quick_chem_read')]
        : [t('gali.quick_physics_setup'), t('gali.quick_physics_formula'), t('gali.quick_physics_results')]
    }
    if (context?.section && context.section !== 'all') {
      return CHEMISTRY_SECTIONS.has(context.section)
        ? [t('gali.quick_browse_chem_1'), t('gali.quick_browse_chem_2'), t('gali.quick_browse_chem_3')]
        : [t('gali.quick_browse_physics_1'), t('gali.quick_browse_physics_2'), t('gali.quick_browse_physics_3')]
    }
    return [t('gali.quick_all_1'), t('gali.quick_all_2'), t('gali.quick_all_3')]
  }

  function getPlaceholder(): string {
    if (context?.experimentTitle) return t('gali.placeholder_exp', { title: context.experimentTitle })
    if (context?.section && context.section !== 'all') return t('gali.placeholder_section', { section: context.section })
    return t('gali.placeholder_general')
  }

  const [messages, setMessages] = useState<Message[]>([
    { role: 'gali', content: buildWelcome() },
  ])
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [apiAvailable, setApiAvailable] = useState<boolean | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 150)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const appendGaliChunk = useCallback((chunk: string) => {
    setMessages(prev => {
      const last = prev[prev.length - 1]
      if (last?.role === 'gali' && last.streaming) {
        return [...prev.slice(0, -1), { ...last, content: last.content + chunk }]
      }
      return [...prev, { role: 'gali', content: chunk, streaming: true }]
    })
  }, [])

  const finalizeGaliMessage = useCallback(() => {
    setMessages(prev => {
      const last = prev[prev.length - 1]
      if (last?.role === 'gali' && last.streaming) {
        return [...prev.slice(0, -1), { ...last, streaming: false }]
      }
      return prev
    })
  }, [])

  async function sendMessage(text?: string) {
    const userText = (text ?? input).trim()
    if (!userText || isStreaming) return
    setInput('')

    const userMsg: Message = { role: 'user', content: userText }
    const historyForAPI = [...messages, userMsg].map(m => ({
      role: m.role,
      content: m.content,
    }))

    setMessages(prev => [...prev, userMsg])
    setIsStreaming(true)
    abortRef.current = new AbortController()

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: abortRef.current.signal,
        body: JSON.stringify({ messages: historyForAPI, context }),
      })

      if (res.status === 503) {
        setApiAvailable(false)
        const topic = context?.experimentTitle || context?.section || 'science'
        setMessages(prev => [...prev, { role: 'gali', content: getFallback(userText, topic, t) }])
        return
      }

      if (!res.ok || !res.body) throw new Error(`HTTP ${res.status}`)
      setApiAvailable(true)

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        if (chunk) appendGaliChunk(chunk)
      }
      finalizeGaliMessage()
    } catch (err: unknown) {
      if ((err as Error)?.name === 'AbortError') return
      setMessages(prev => [
        ...prev,
        { role: 'gali', content: t('gali.error_connecting') },
      ])
    } finally {
      setIsStreaming(false)
    }
  }

  const contextLabel = context?.experimentTitle
    ? t('gali.context_exp', { num: String(context.experimentNum ?? ''), title: context.experimentTitle })
    : context?.section && context.section !== 'all'
    ? context.section
    : t('gali.context_all')

  const quickPrompts = getQuickPrompts()
  const placeholder = getPlaceholder()

  return (
    <div className="gali-modal-overlay" onClick={onClose}>
      <div className="gali-modal" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="gali-modal-header">
          <div className="gali-modal-avatar">✦</div>
          <div className="gali-modal-header-title">{t('gali.modal_title')}</div>
          <span className="gali-modal-context-badge">{contextLabel}</span>
          <button className="gali-modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* No-API-key notice */}
        {apiAvailable === false && (
          <div className="gali-modal-notice">
            {t('gali.no_api_key')}
          </div>
        )}

        {/* Messages */}
        <div className="gali-modal-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-msg${msg.role === 'user' ? ' user' : ''}`}>
              {msg.role === 'gali' && <div className="gali-avatar">✦</div>}
              <div className={`chat-bubble ${msg.role === 'gali' ? 'gali-bubble' : 'user-bubble'}`}>
                <MarkdownText text={msg.content} />
                {msg.streaming && <span className="gali-cursor" />}
              </div>
            </div>
          ))}

          {isStreaming && messages[messages.length - 1]?.role !== 'gali' && (
            <div className="chat-msg">
              <div className="gali-avatar">✦</div>
              <div className="chat-bubble gali-bubble">
                <div className="chat-thinking">
                  <div className="dot" style={{ animationDelay: '0ms' }} />
                  <div className="dot" style={{ animationDelay: '160ms' }} />
                  <div className="dot" style={{ animationDelay: '320ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick prompts */}
        <div className="chat-quick-btns">
          {quickPrompts.map(q => (
            <button
              key={q}
              className="quick-btn"
              onClick={() => sendMessage(q)}
              disabled={isStreaming}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="chat-input-row">
          <input
            ref={inputRef}
            type="text"
            className="chat-input"
            placeholder={placeholder}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) sendMessage() }}
            disabled={isStreaming}
          />
          <button
            className="chat-submit"
            onClick={() => sendMessage()}
            disabled={isStreaming || !input.trim()}
            aria-label="Send"
          >
            {isStreaming ? t('gali.sending') : t('gali.send')}
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Inline markdown renderer ─────────────────────────────────────────────────
function InlineText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*\n]+\*|`[^`\n]+`)/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**') && part.length > 4)
          return <strong key={i}>{part.slice(2, -2)}</strong>
        if (part.startsWith('*') && part.endsWith('*') && part.length > 2)
          return <em key={i}>{part.slice(1, -1)}</em>
        if (part.startsWith('`') && part.endsWith('`') && part.length > 2)
          return <code key={i} className="gali-inline-code">{part.slice(1, -1)}</code>
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

function MarkdownText({ text }: { text: string }) {
  const lines = text.split('\n')
  const nodes: React.ReactNode[] = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, ''))
        i++
      }
      nodes.push(
        <ul key={key++} className="gali-list">
          {items.map((item, j) => <li key={j}><InlineText text={item} /></li>)}
        </ul>
      )
      continue
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ''))
        i++
      }
      nodes.push(
        <ol key={key++} className="gali-list">
          {items.map((item, j) => <li key={j}><InlineText text={item} /></li>)}
        </ol>
      )
      continue
    }

    if (line.trim() === '') { i++; continue }

    nodes.push(<p key={key++} className="gali-para"><InlineText text={line} /></p>)
    i++
  }

  return <>{nodes}</>
}

// ─── Keyword fallback when no API key ────────────────────────────────────────
type TFn = (path: string, vars?: Record<string, string | number>) => string

function getFallback(text: string, topic: string, t: TFn): string {
  const lower = text.toLowerCase()
  if (lower.includes('setup') || lower.includes('set up') || lower.includes('equipment') || lower.includes('preparaz') || lower.includes('strument'))
    return t('gali.fallback_setup')
  if (lower.includes('formula') || lower.includes('equation') || lower.includes('law'))
    return t('gali.fallback_formula', { topic })
  if (lower.includes('result') || lower.includes('expect') || lower.includes('outcome') || lower.includes('risultat'))
    return t('gali.fallback_results')
  if (lower.includes('error') || lower.includes('mistake') || lower.includes('wrong') || lower.includes('errore'))
    return t('gali.fallback_errors')
  if (lower.includes('safe') || lower.includes('hazard') || lower.includes('danger') || lower.includes('sicurez'))
    return t('gali.fallback_safety')
  if (lower.includes('real') || lower.includes('application') || lower.includes('life') || lower.includes('applicaz') || lower.includes('reale'))
    return t('gali.fallback_realworld', { topic })
  return t('gali.fallback_general', { topic })
}

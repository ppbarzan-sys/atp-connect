'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useI18n } from '@/lib/i18n'
import { cleanForSpeech, getSpeechRecognition, SPEECH_LOCALE_MAP, type ISpeechRecognition, type ISpeechRecognitionEvent } from '@/lib/chat-utils'

export interface GaliContext {
  section?: string
  experimentTitle?: string
  experimentNum?: number
  subject?: 'physics' | 'chemistry' | 'ai' | 'robotics'
  courseTitle?: string
  courseProvider?: string
  quizScore?: { correct: number; total: number; wrongTopics?: string[] }
  focusQuestion?: {
    text: string
    userAnswer: string
    correctAnswer: string
  }

  // Full experiment awareness
  experimentSummary?: string
  expectedOutcome?: string
  equipment?: string[]
  theoryPoints?: string[]
  formula?: string
  realWorldConnections?: string[]
  misconceptions?: string[]
  conceptBreakdown?: Array<{ label: string; pct: number }>
  dataTableHeaders?: string[]
  expectedDataRanges?: string

  // Student activity awareness
  currentTab?: 'summary' | 'experiment' | 'questions' | 'notes'
  dataEntries?: Record<string, string>
  timeOnExperiment?: number

  // Student history
  completedExperimentCount?: number
  overallAvgScore?: number
  recentExperiments?: Array<{ title: string; score: number }>

  // Teacher mode
  isTeacherMode?: boolean

  // Dashboard context
  weakAreas?: Array<{ concept: string; mastery: number }>
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

const ROBOTICS_SECTIONS = new Set([
  'Fundamentals',
  'Sensors',
  'Actuators',
  'Projects',
])

function isRobotics(context?: GaliContext): boolean {
  if (!context) return false
  if (context.experimentNum && context.experimentNum >= 501) return true
  if (context.section && ROBOTICS_SECTIONS.has(context.section)) return true
  return false
}

function isChemistry(context?: GaliContext): boolean {
  if (!context) return false
  if (context.experimentNum && context.experimentNum >= 101 && context.experimentNum < 500) return true
  if (context.section && CHEMISTRY_SECTIONS.has(context.section)) return true
  return false
}

// Speech types and helpers imported from @/lib/chat-utils

// ─── Component ────────────────────────────────────────────────────────────────

export default function GaliModal({ context, onClose }: GaliModalProps) {
  const { t, locale } = useI18n()

  // ── Speech locale ────────────────────────────────────────────────────────
  const speechLocale = SPEECH_LOCALE_MAP[locale] || 'en-US'

  // ── Voice state ──────────────────────────────────────────────────────────
  const [micSupported, setMicSupported] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(false)
  const recognitionRef = useRef<ISpeechRecognition | null>(null)

  // Live refs so callbacks always see current values without stale closures
  const voiceEnabledRef = useRef(false)
  const speechLocaleRef = useRef(speechLocale)
  const messagesRef = useRef<Message[]>([])

  useEffect(() => { voiceEnabledRef.current = voiceEnabled }, [voiceEnabled])
  useEffect(() => { speechLocaleRef.current = speechLocale }, [speechLocale])

  // Detect browser support on mount
  useEffect(() => {
    setMicSupported(!!getSpeechRecognition())
  }, [])

  // Cleanup recognition + synthesis when modal unmounts
  useEffect(() => {
    return () => {
      recognitionRef.current?.abort()
      window.speechSynthesis?.cancel()
    }
  }, [])

  // ── Build welcome message ────────────────────────────────────────────────
  function buildWelcome(): string {
    if (context?.focusQuestion) {
      return t('gali.focus_question_intro', {
        text: context.focusQuestion.text,
        userAnswer: context.focusQuestion.userAnswer,
        correctAnswer: context.focusQuestion.correctAnswer,
      })
    }
    if (context?.subject === 'ai') {
      if (context?.courseTitle) return t('gali.welcome_ai_course', { title: context.courseTitle })
      return t('gali.welcome_ai')
    }
    if (context?.subject === 'robotics') {
      if (context?.courseTitle) return t('gali.welcome_robotics_course', { title: context.courseTitle, provider: context.courseProvider || '' })
      return t('gali.welcome_robotics')
    }
    if (context?.experimentTitle) {
      // If quiz results are available, tailor the welcome to the student's score
      if (context.quizScore && context.quizScore.total > 0) {
        const { correct, total } = context.quizScore
        if (correct === total) {
          return t('gali.welcome_exp_quiz_perfect', { title: context.experimentTitle, correct, total })
        }
        if (correct >= Math.ceil(total * 0.7)) {
          return t('gali.welcome_exp_quiz_good', { title: context.experimentTitle, correct, total })
        }
        return t('gali.welcome_exp_quiz_poor', { title: context.experimentTitle, correct, total })
      }
      const key = isRobotics(context)
        ? 'gali.welcome_exp_robotics'
        : isChemistry(context)
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
    // Teacher mode quick prompts
    if (context?.isTeacherMode && context?.experimentTitle) {
      return [
        t('gali.quick_teacher_briefing'),
        t('gali.quick_teacher_mistakes'),
        t('gali.quick_teacher_opening'),
        t('gali.quick_teacher_explain'),
        t('gali.quick_teacher_safety'),
      ]
    }

    // Dashboard quick prompts
    if (context?.weakAreas !== undefined) {
      return [t('gali.quick_study_next'), t('gali.quick_struggling'), t('gali.quick_how_doing')]
    }

    if (context?.subject === 'ai') return [t('gali.quick_ai_1'), t('gali.quick_ai_2'), t('gali.quick_ai_3')]
    if (context?.subject === 'robotics') return [t('gali.quick_robotics_1'), t('gali.quick_robotics_2'), t('gali.quick_robotics_3')]
    if (context?.experimentTitle) {
      if (isRobotics(context)) return [t('gali.quick_robotics_circuit'), t('gali.quick_robotics_code'), t('gali.quick_robotics_debug')]
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
    if (context?.subject === 'ai') return t('gali.placeholder_ai')
    if (context?.subject === 'robotics') return t('gali.placeholder_robotics')
    if (context?.experimentTitle) return t('gali.placeholder_exp', { title: context.experimentTitle })
    if (context?.section && context.section !== 'all') return t('gali.placeholder_section', { section: context.section })
    return t('gali.placeholder_general')
  }

  // ── Chat state ───────────────────────────────────────────────────────────
  const [messages, setMessages] = useState<Message[]>([
    { role: 'gali', content: buildWelcome() },
  ])
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [apiAvailable, setApiAvailable] = useState<boolean | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  // Keep messagesRef current so voice effects can read latest messages
  useEffect(() => { messagesRef.current = messages }, [messages])

  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 150)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // ── Text-to-Speech ────────────────────────────────────────────────────────
  function speakText(text: string) {
    if (!voiceEnabledRef.current) return
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    window.speechSynthesis.cancel()
    const clean = cleanForSpeech(text)
    if (!clean) return
    const utterance = new SpeechSynthesisUtterance(clean)
    utterance.lang = speechLocaleRef.current
    utterance.rate = 0.95
    utterance.pitch = 1.0
    // Try to find a matching voice for the locale (important for Arabic)
    const langPrefix = speechLocaleRef.current.split('-')[0]
    const voices = window.speechSynthesis.getVoices()
    const match = voices.find(v => v.lang === speechLocaleRef.current)
      || voices.find(v => v.lang.startsWith(langPrefix))
    if (match) utterance.voice = match
    window.speechSynthesis.speak(utterance)
  }

  // Fire TTS when a streaming response finishes
  const prevStreamingRef = useRef(false)
  useEffect(() => {
    if (prevStreamingRef.current && !isStreaming) {
      const last = messagesRef.current[messagesRef.current.length - 1]
      if (last?.role === 'gali' && !last.streaming) {
        speakText(last.content)
      }
    }
    prevStreamingRef.current = isStreaming
  }, [isStreaming]) // intentional: speakText reads only refs

  // ── Speech-to-Text ────────────────────────────────────────────────────────
  function startListening() {
    const SR = getSpeechRecognition()
    if (!SR || isStreaming) return

    // Silence any ongoing TTS before listening
    window.speechSynthesis?.cancel()

    const recognition = new SR()
    recognition.lang = speechLocaleRef.current
    recognition.continuous = true
    recognition.interimResults = true
    recognition.maxAlternatives = 1
    recognitionRef.current = recognition

    recognition.onresult = (event: ISpeechRecognitionEvent) => {
      const results = event.results
      let finalTranscript = ''
      let interimTranscript = ''
      for (let i = 0; i < (results as unknown as { length: number }).length; i++) {
        const r = results[i]
        if ((r as unknown as { isFinal: boolean }).isFinal) {
          finalTranscript += r[0].transcript
        } else {
          interimTranscript += r[0].transcript
        }
      }
      if (finalTranscript.trim()) {
        recognition.abort()
        setIsListening(false)
        setInput('')
        sendMessage(finalTranscript.trim())
      } else if (interimTranscript) {
        setInput(interimTranscript)
      }
    }

    recognition.onerror = () => setIsListening(false)
    recognition.onend = () => setIsListening(false)

    setIsListening(true)
    try { recognition.start() } catch { setIsListening(false) }
  }

  function stopListening() {
    recognitionRef.current?.abort()
    setIsListening(false)
  }

  function toggleVoice() {
    if (voiceEnabled) window.speechSynthesis?.cancel()
    setVoiceEnabled(v => !v)
  }

  // ── Streaming helpers ─────────────────────────────────────────────────────
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

  // ── Send message ──────────────────────────────────────────────────────────
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
        body: JSON.stringify({ messages: historyForAPI, context, locale }),
      })

      if (res.status === 503) {
        setApiAvailable(false)
        const topic = context?.experimentTitle || context?.section || 'science'
        const fallbackText = getFallback(userText, topic, t, context?.subject)
        setMessages(prev => [...prev, { role: 'gali', content: fallbackText }])
        speakText(fallbackText)
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

  // ── Close handler — abort streaming & clear chat history ─────────────────
  const handleClose = useCallback(() => {
    // Abort any active streaming response
    abortRef.current?.abort()
    abortRef.current = null
    // Stop speech
    recognitionRef.current?.abort()
    window.speechSynthesis?.cancel()
    // Reset chat state
    setMessages([{ role: 'gali', content: buildWelcome() }])
    setInput('')
    setIsStreaming(false)
    setIsListening(false)
    onClose()
  }, [onClose])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [handleClose])

  // ── Derived UI values ─────────────────────────────────────────────────────
  const contextLabel = context?.experimentTitle
    ? t('gali.context_exp', { num: String(context.experimentNum ?? ''), title: context.experimentTitle })
    : context?.section && context.section !== 'all'
    ? context.section
    : t('gali.context_all')

  const quickPrompts = getQuickPrompts()
  const placeholder = isListening ? t('gali.voice_listening') : getPlaceholder()

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="gali-modal-overlay" onClick={handleClose}>
      <div className="gali-modal" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="gali-modal-header">
          <div className="gali-modal-avatar">✦</div>
          <div className="gali-modal-header-title">{t('gali.modal_title')}</div>
          <span className="gali-modal-context-badge">{contextLabel}</span>

          {/* Voice output toggle */}
          <button
            className={`gali-voice-toggle${voiceEnabled ? ' active' : ''}`}
            onClick={toggleVoice}
            aria-label={voiceEnabled ? t('gali.voice_output_on') : t('gali.voice_output_off')}
            title={voiceEnabled ? t('gali.voice_output_on') : t('gali.voice_output_off')}
          >
            {voiceEnabled ? '🔊' : '🔇'}
          </button>

          <button className="gali-modal-close" onClick={handleClose} aria-label="Close">✕</button>
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
              <div dir="auto" className={`chat-bubble ${msg.role === 'gali' ? 'gali-bubble' : 'user-bubble'}`}>
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

        {/* Input row */}
        <div className="chat-input-row">
          <input
            ref={inputRef}
            type="text"
            className={`chat-input${isListening ? ' listening-pulse' : ''}`}
            placeholder={placeholder}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) sendMessage() }}
            disabled={isStreaming}
            readOnly={isListening}
          />

          {/* Microphone button — only shown if browser supports Web Speech API */}
          {micSupported && (
            <button
              className={`gali-mic-btn${isListening ? ' listening' : ''}`}
              onClick={isListening ? stopListening : startListening}
              disabled={isStreaming}
              aria-label={
                isListening ? t('gali.voice_stop') : t('gali.voice_input')
              }
              title={isListening ? t('gali.voice_stop') : t('gali.voice_input')}
            >
              {isListening ? '◼' : '🎤'}
            </button>
          )}

          <button
            className="chat-submit"
            onClick={() => sendMessage()}
            disabled={isStreaming || isListening || !input.trim()}
            aria-label="Send"
          >
            {isStreaming ? t('gali.sending') : t('gali.send')}
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Inline markdown renderer ──────────────────────────────────────────────────
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
          return <code key={i} dir="ltr" className="gali-inline-code">{part.slice(1, -1)}</code>
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

// ─── Keyword fallback when no API key ─────────────────────────────────────────
type TFn = (path: string, vars?: Record<string, string | number>) => string

function getFallback(text: string, topic: string, t: TFn, subject?: 'physics' | 'chemistry' | 'ai' | 'robotics'): string {
  const lower = text.toLowerCase()
  // AI-specific fallbacks
  if (subject === 'ai') {
    if (lower.includes('prompt') || lower.includes('write') || lower.includes('instruction'))
      return t('gali.fallback_ai_prompting')
    if (lower.includes('ethic') || lower.includes('bias') || lower.includes('safe') || lower.includes('responsible'))
      return t('gali.fallback_ai_ethics')
    if (lower.includes('how') || lower.includes('work') || lower.includes('what is'))
      return t('gali.fallback_ai_howworks')
    return t('gali.fallback_ai_general')
  }
  // Robotics-specific fallbacks
  if (subject === 'robotics') {
    if (lower.includes('arduino') || lower.includes('circuit') || lower.includes('led') || lower.includes('sensor'))
      return t('gali.fallback_robotics_arduino')
    if (lower.includes('raspberry') || lower.includes('python') || lower.includes('gpio'))
      return t('gali.fallback_robotics_rpi')
    if (lower.includes('algorithm') || lower.includes('code') || lower.includes('program') || lower.includes('cs50'))
      return t('gali.fallback_robotics_cs')
    return t('gali.fallback_robotics_general')
  }
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

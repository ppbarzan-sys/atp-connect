'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { Experiment } from '@/data/loader'
import { useI18n } from '@/lib/i18n'
import {
  cleanForSpeech,
  getSpeechRecognition,
  SPEECH_LOCALE_MAP,
  streamChat,
  type ISpeechRecognition,
  type ISpeechRecognitionEvent,
} from '@/lib/chat-utils'
import type { GaliContext } from '@/components/GaliModal'

interface Message {
  role: 'user' | 'gali'
  content: string
  streaming?: boolean
}

interface ChatPaneProps {
  exp: Experiment
  galiContext?: GaliContext
}

// ─── Inline markdown renderer (shared with GaliModal) ───────────────────────
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

// ─── Keyword fallback (used when API unavailable) ─────────────────────────────
type TFn = (path: string, vars?: Record<string, string | number>) => string

function getFallback(text: string, exp: Experiment, t: TFn): string {
  const kw = exp.ai.keywords
  const lower = text.toLowerCase()

  if (lower.includes('setup') || lower.includes('set up') || lower.includes('prepare') || lower.includes('equipment') || lower.includes('preparaz') || lower.includes('strument'))
    return kw.setup || t('chat.fallback_setup')
  if (lower.includes('formula') || lower.includes('equation') || lower.includes('calculat'))
    return kw.formula || (exp.experiment.formula ? `**${t('chat.formula_prefix')}** ${exp.experiment.formula}` : t('chat.fallback_formula'))
  if (lower.includes('error') || lower.includes('mistake') || lower.includes('wrong') || lower.includes('common') || lower.includes('errore') || lower.includes('comuni'))
    return kw.error || t('chat.fallback_error')
  if (lower.includes('real') || lower.includes('application') || lower.includes('everyday') || lower.includes('life') || lower.includes('applicaz') || lower.includes('reale'))
    return kw.real || (exp.experiment.realWorldConnections.length > 0 ? `${t('chat.realworld_prefix')}\n${exp.experiment.realWorldConnections.map(r => `- ${r}`).join('\n')}` : t('chat.fallback_real'))
  if (lower.includes('result') || lower.includes('expect') || lower.includes('outcome') || lower.includes('data') || lower.includes('risultat') || lower.includes('atteso'))
    return kw.result || (exp.ai.expected ? `${t('chat.expected_prefix')} ${exp.ai.expected}` : t('chat.fallback_result'))
  if (lower.includes('extend') || lower.includes('further') || lower.includes('more') || lower.includes('beyond'))
    return kw.extend || t('chat.fallback_extend')
  if (lower.includes('explain') || lower.includes('how does') || lower.includes('why') || lower.includes('concept') || lower.includes('spiega') || lower.includes('concetto'))
    return kw.explain || `${t('chat.concept_prefix')} ${exp.experiment.theoryPoints[0] || t('chat.fallback_concept')}`
  if (lower.includes('hook') || lower.includes('interest') || lower.includes('motivat'))
    return kw.hook || (exp.overview.hook ? `> ${exp.overview.hook}` : t('chat.fallback_hook'))
  if (lower.includes('misconception') || lower.includes('misunderstand') || lower.includes('confuse') || lower.includes('errore comune'))
    return kw.misconception || (exp.overview.misconceptions.length > 0 ? `${t('chat.misconceptions_prefix')}\n${exp.overview.misconceptions.map(m => `- ${m}`).join('\n')}` : t('chat.fallback_misconception'))
  if (lower.includes('question') || lower.includes('discuss') || lower.includes('domanda'))
    return kw.question || (exp.questions.discussion.length > 0 ? `${t('chat.discussion_prefix')}\n${exp.questions.discussion.slice(0, 3).map(q => `- ${q}`).join('\n')}` : t('chat.fallback_discussion'))

  return t('chat.fallback_general', { title: exp.title })
}

// ─── Tab-aware quick prompts ──────────────────────────────────────────────────
function getTabQuickPrompts(
  currentTab: string | undefined,
  isTeacher: boolean,
  t: TFn
): string[] {
  if (isTeacher) {
    return [
      t('gali.quick_teacher_briefing'),
      t('gali.quick_teacher_mistakes'),
      t('gali.quick_teacher_safety'),
    ]
  }

  if (currentTab === 'summary') {
    return [t('gali.qp_what_learn'), t('gali.qp_equipment'), t('gali.qp_safety')]
  }
  if (currentTab === 'experiment') {
    return [t('gali.qp_readings_different'), t('gali.qp_dont_understand_formula'), t('gali.qp_what_observe')]
  }
  if (currentTab === 'questions') {
    return [t('gali.qp_explain_differently'), t('gali.qp_stuck'), t('gali.qp_key_idea')]
  }
  if (currentTab === 'notes') {
    return [t('gali.qp_summarize'), t('gali.qp_key_takeaways'), t('gali.qp_real_life')]
  }
  return [t('chat.setup_help'), t('chat.formula'), t('chat.errors')]
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function ChatPane({ exp, galiContext }: ChatPaneProps) {
  const { t, locale } = useI18n()
  const speechLocale = SPEECH_LOCALE_MAP[locale] || 'en-US'

  // ── State ──────────────────────────────────────────────────────────────
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [apiAvailable, setApiAvailable] = useState<boolean | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  // ── Voice state ────────────────────────────────────────────────────────
  const [micSupported, setMicSupported] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(false)
  const recognitionRef = useRef<ISpeechRecognition | null>(null)
  const voiceEnabledRef = useRef(false)
  const speechLocaleRef = useRef(speechLocale)
  const messagesRef = useRef<Message[]>([])

  useEffect(() => { voiceEnabledRef.current = voiceEnabled }, [voiceEnabled])
  useEffect(() => { speechLocaleRef.current = speechLocale }, [speechLocale])
  useEffect(() => { messagesRef.current = messages }, [messages])
  useEffect(() => { setMicSupported(!!getSpeechRecognition()) }, [])
  useEffect(() => {
    return () => {
      recognitionRef.current?.abort()
      window.speechSynthesis?.cancel()
    }
  }, [])

  // ── Opening message (only on first mount or experiment change) ─────────
  useEffect(() => {
    if (exp.ai.opening) {
      setMessages([{ role: 'gali', content: exp.ai.opening }])
    }
  }, [exp.num, exp.ai.opening])

  // ── Auto-scroll ────────────────────────────────────────────────────────
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isStreaming])

  // ── TTS ────────────────────────────────────────────────────────────────
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
    const langPrefix = speechLocaleRef.current.split('-')[0]
    const voices = window.speechSynthesis.getVoices()
    const match = voices.find(v => v.lang === speechLocaleRef.current)
      || voices.find(v => v.lang.startsWith(langPrefix))
    if (match) utterance.voice = match
    window.speechSynthesis.speak(utterance)
  }

  const prevStreamingRef = useRef(false)
  useEffect(() => {
    if (prevStreamingRef.current && !isStreaming) {
      const last = messagesRef.current[messagesRef.current.length - 1]
      if (last?.role === 'gali' && !last.streaming) speakText(last.content)
    }
    prevStreamingRef.current = isStreaming
  }, [isStreaming])

  // ── STT ────────────────────────────────────────────────────────────────
  function startListening() {
    const SR = getSpeechRecognition()
    if (!SR || isStreaming) return
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

  // ── Streaming helpers ──────────────────────────────────────────────────
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

  // ── Send message ───────────────────────────────────────────────────────
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

    const status = await streamChat({
      messages: historyForAPI,
      context: (galiContext || {}) as Record<string, unknown>,
      locale,
      signal: abortRef.current.signal,
      onChunk: appendGaliChunk,
      onDone: finalizeGaliMessage,
      onError: (s) => {
        if (s === 503) {
          setApiAvailable(false)
          const fallbackText = getFallback(userText, exp, t)
          setMessages(prev => [...prev, { role: 'gali', content: fallbackText }])
          speakText(fallbackText)
        } else if (s !== 0) {
          setMessages(prev => [...prev, { role: 'gali', content: t('gali.error_connecting') }])
        }
      },
    })

    if (status !== 503 && status !== 0) {
      setApiAvailable(true)
    }
    setIsStreaming(false)
  }

  // ── Quick prompts ──────────────────────────────────────────────────────
  const quickPrompts = getTabQuickPrompts(
    galiContext?.currentTab,
    galiContext?.isTeacherMode || false,
    t
  )

  const placeholder = isListening
    ? t('gali.voice_listening')
    : t('chat.placeholder')

  // ── Render ─────────────────────────────────────────────────────────────
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      {/* No-API notice */}
      {apiAvailable === false && (
        <div className="gali-modal-notice" style={{ margin: '8px 12px', fontSize: 12 }}>
          {t('gali.no_api_key')}
        </div>
      )}

      {/* Messages */}
      <div className="chat-messages" style={{ flex: 1, overflowY: 'auto', padding: '12px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {messages.map((msg, i) => (
          <div key={i} className={`chat-msg${msg.role === 'user' ? ' user' : ''}`}>
            {msg.role === 'gali' && <div className="gali-avatar">G</div>}
            <div className={`chat-bubble ${msg.role === 'gali' ? 'gali-bubble' : 'user-bubble'}`}>
              <MarkdownText text={msg.content} />
              {msg.streaming && <span className="gali-cursor" />}
            </div>
          </div>
        ))}

        {isStreaming && messages[messages.length - 1]?.role !== 'gali' && (
          <div className="chat-msg">
            <div className="gali-avatar">G</div>
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

        {micSupported && (
          <button
            className={`gali-mic-btn${isListening ? ' listening' : ''}`}
            onClick={isListening ? stopListening : startListening}
            disabled={isStreaming}
            aria-label={isListening ? t('gali.voice_stop') : t('gali.voice_input')}
            title={isListening ? t('gali.voice_stop') : t('gali.voice_input')}
          >
            {isListening ? '◼' : '🎤'}
          </button>
        )}

        {/* Voice output toggle */}
        <button
          className={`gali-voice-toggle${voiceEnabled ? ' active' : ''}`}
          onClick={toggleVoice}
          aria-label={voiceEnabled ? t('gali.voice_output_on') : t('gali.voice_output_off')}
          title={voiceEnabled ? t('gali.voice_output_on') : t('gali.voice_output_off')}
          style={{ padding: '4px 6px', fontSize: 14 }}
        >
          {voiceEnabled ? '🔊' : '🔇'}
        </button>

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
  )
}

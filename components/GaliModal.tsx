'use client'
import { useState, useEffect, useRef, useCallback } from 'react'

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

function buildWelcome(context?: GaliContext): string {
  if (context?.experimentTitle) {
    return `Hi! I'm Gali ✦ I'm here to help with **${context.experimentTitle}**. Ask me about setup, formulas, expected results, or anything else!`
  }
  if (context?.section && context.section !== 'all') {
    return `Hi! I'm Gali ✦ You're browsing the **${context.section}** experiments. What would you like to know?`
  }
  return `Hi! I'm Gali ✦ Your AI physics assistant. Ask me anything about the ATP experiments — setup, formulas, concepts, or real-world applications!`
}

const QUICK_PROMPTS: Record<string, string[]> = {
  experiment: ['How do I set this up?', 'What is the key formula?', 'What results should I expect?'],
  browse: ['What experiments cover force?', 'Which section is hardest?', 'How do levers work?'],
}

export default function GaliModal({ context, onClose }: GaliModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'gali', content: buildWelcome(context) },
  ])
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [apiAvailable, setApiAvailable] = useState<boolean | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Focus input on open
  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 100)
  }, [])

  // Scroll to bottom on new messages
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
        // No API key — fall back to static response
        setApiAvailable(false)
        const fallback = getFallback(userText, context)
        setMessages(prev => [...prev, { role: 'gali', content: fallback }])
        return
      }

      if (!res.ok || !res.body) throw new Error(`HTTP ${res.status}`)

      setApiAvailable(true)

      // Stream the response text
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
        { role: 'gali', content: 'Sorry, I had trouble connecting. Please try again.' },
      ])
    } finally {
      setIsStreaming(false)
    }
  }

  const contextLabel = context?.experimentTitle
    ? `Exp #${context.experimentNum}: ${context.experimentTitle}`
    : context?.section && context.section !== 'all'
    ? `${context.section} section`
    : 'All experiments'

  const quickPrompts = context?.experimentTitle
    ? QUICK_PROMPTS.experiment
    : QUICK_PROMPTS.browse

  return (
    <div className="gali-modal-overlay" onClick={onClose}>
      <div className="gali-modal" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="gali-modal-header">
          <div className="gali-modal-avatar">G</div>
          <div className="gali-modal-header-title">Ask Gali</div>
          <span className="gali-modal-context-badge">{contextLabel}</span>
          <button
            className="gali-modal-close"
            onClick={onClose}
            aria-label="Close"
          >✕</button>
        </div>

        {/* No-API-key notice */}
        {apiAvailable === false && (
          <div className="gali-modal-notice">
            ⚠ No API key set — using built-in responses.
            Add <code>ANTHROPIC_API_KEY</code> to <code>.env.local</code> for full AI.
          </div>
        )}

        {/* Messages */}
        <div className="gali-modal-messages">
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
                  <div className="dot" /><div className="dot" /><div className="dot" />
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
            placeholder="Ask a physics question…"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') sendMessage() }}
            disabled={isStreaming}
          />
          <button
            className="chat-submit"
            onClick={() => sendMessage()}
            disabled={isStreaming || !input.trim()}
          >
            {isStreaming ? '…' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  )
}

// Minimal inline markdown renderer: **bold** and newlines
function MarkdownText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  const nodes = parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    // Render newlines as <br>
    return part.split('\n').map((line, j, arr) => (
      <span key={`${i}-${j}`}>
        {line}
        {j < arr.length - 1 && <br />}
      </span>
    ))
  })
  return <>{nodes}</>
}

// Keyword-based fallback when no API key is present
function getFallback(text: string, context?: GaliContext): string {
  const lower = text.toLowerCase()
  const section = context?.section || ''
  const exp = context?.experimentTitle || ''
  const topic = exp || section || 'physics'

  if (lower.includes('setup') || lower.includes('set up') || lower.includes('equipment')) {
    return `To set up this experiment, gather all listed equipment and follow the procedure in the Experiment tab. Make sure instruments are calibrated before taking measurements.`
  }
  if (lower.includes('formula') || lower.includes('equation')) {
    return `Check the **formula box** in the Experiment tab for the key equation used in **${topic}**. Apply it step-by-step, keeping track of units throughout.`
  }
  if (lower.includes('result') || lower.includes('expect') || lower.includes('outcome')) {
    return `Compare your results with the **Expected Outcome** in the Summary tab. Small deviations (5–10%) are normal due to measurement uncertainty.`
  }
  if (lower.includes('error') || lower.includes('mistake')) {
    return `Common errors include misreading scales, not zeroing instruments, and parallax errors. Always take 3–5 repeated measurements and calculate an average.`
  }
  if (lower.includes('real') || lower.includes('application') || lower.includes('life')) {
    return `**${topic}** has many real-world applications — check the Real-World Connections section in the Experiment tab for specific examples related to this topic.`
  }
  return `Great question about **${topic}**! I can help with setup, formulas, expected results, or real-world applications. What would you like to explore?`
}

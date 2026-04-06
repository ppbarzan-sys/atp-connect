'use client'
import { useState, useEffect, useRef } from 'react'
import { Experiment } from '@/data/loader'
import { useI18n } from '@/lib/i18n'

interface Message {
  role: 'user' | 'gali'
  text: string
  html?: string
}

interface ChatPaneProps {
  exp: Experiment
}

export default function ChatPane({ exp }: ChatPaneProps) {
  const { t } = useI18n()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [thinking, setThinking] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (exp.ai.opening) {
      setMessages([{ role: 'gali', text: '', html: exp.ai.opening }])
    }
  }, [exp.num, exp.ai.opening])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, thinking])

  function getAIResponse(userText: string): string {
    const kw = exp.ai.keywords
    const lower = userText.toLowerCase()

    if (lower.includes('setup') || lower.includes('set up') || lower.includes('prepare') || lower.includes('equipment') || lower.includes('preparaz') || lower.includes('strument')) {
      return kw.setup || t('chat.fallback_setup')
    }
    if (lower.includes('formula') || lower.includes('equation') || lower.includes('calculat')) {
      return kw.formula || (exp.experiment.formula ? `${t('chat.formula_prefix')} <code>${exp.experiment.formula}</code>` : t('chat.fallback_formula'))
    }
    if (lower.includes('error') || lower.includes('mistake') || lower.includes('wrong') || lower.includes('common') || lower.includes('errore') || lower.includes('comuni')) {
      return kw.error || t('chat.fallback_error')
    }
    if (lower.includes('real') || lower.includes('application') || lower.includes('everyday') || lower.includes('life') || lower.includes('applicaz') || lower.includes('reale')) {
      return kw.real || (exp.experiment.realWorldConnections.length > 0 ? `${t('chat.realworld_prefix')} <ul>${exp.experiment.realWorldConnections.map(r => `<li>${r}</li>`).join('')}</ul>` : t('chat.fallback_real'))
    }
    if (lower.includes('result') || lower.includes('expect') || lower.includes('outcome') || lower.includes('data') || lower.includes('risultat') || lower.includes('atteso')) {
      return kw.result || (exp.ai.expected ? `${t('chat.expected_prefix')} ${exp.ai.expected}` : t('chat.fallback_result'))
    }
    if (lower.includes('extend') || lower.includes('further') || lower.includes('more') || lower.includes('beyond')) {
      return kw.extend || t('chat.fallback_extend')
    }
    if (lower.includes('explain') || lower.includes('how does') || lower.includes('why') || lower.includes('concept') || lower.includes('spiega') || lower.includes('concetto')) {
      return kw.explain || `${t('chat.concept_prefix')} ${exp.experiment.theoryPoints[0] || t('chat.fallback_concept')}`
    }
    if (lower.includes('hook') || lower.includes('interest') || lower.includes('motivat')) {
      return kw.hook || (exp.overview.hook ? `<blockquote>${exp.overview.hook}</blockquote>` : t('chat.fallback_hook'))
    }
    if (lower.includes('misconception') || lower.includes('misunderstand') || lower.includes('confuse') || lower.includes('errore comune')) {
      return kw.misconception || (exp.overview.misconceptions.length > 0 ? `${t('chat.misconceptions_prefix')} <ul>${exp.overview.misconceptions.map(m => `<li>${m}</li>`).join('')}</ul>` : t('chat.fallback_misconception'))
    }
    if (lower.includes('question') || lower.includes('discuss') || lower.includes('domanda')) {
      return kw.question || (exp.questions.discussion.length > 0 ? `${t('chat.discussion_prefix')} <ul>${exp.questions.discussion.slice(0, 3).map(q => `<li>${q}</li>`).join('')}</ul>` : t('chat.fallback_discussion'))
    }

    const intro = t('chat.fallback_general', { title: exp.title }).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    return `${intro} <ul><li>${t('chat.fallback_setup_item')}</li><li>${t('chat.fallback_formulas_item')}</li><li>${t('chat.fallback_errors_item')}</li><li>${t('chat.fallback_realworld_item')}</li><li>${t('chat.fallback_results_item')}</li></ul>`
  }

  function sendMessage(text?: string) {
    const messageText = text || input.trim()
    if (!messageText) return

    setMessages(prev => [...prev, { role: 'user', text: messageText }])
    setInput('')
    setThinking(true)

    setTimeout(() => {
      const response = getAIResponse(messageText)
      setMessages(prev => [...prev, { role: 'gali', text: '', html: response }])
      setThinking(false)
    }, 800 + Math.random() * 600)
  }

  function quickChat(type: string) {
    const labels: Record<string, string> = {
      setup: t('chat.setup_help').replace(/^⚙\s*/, '⚙ '),
      formula: t('chat.formula').replace(/^ƒ\s*/, 'ƒ '),
      error: t('chat.errors').replace(/^⚠\s*/, '⚠ '),
    }
    sendMessage(labels[type] || type)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      <div className="chat-messages" style={{ flex: 1, overflowY: 'auto', padding: '12px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {messages.map((msg, i) => (
          <div key={i} className={`chat-msg${msg.role === 'user' ? ' user' : ''}`}>
            {msg.role === 'gali' && <div className="gali-avatar">G</div>}
            <div className={`chat-bubble ${msg.role === 'gali' ? 'gali-bubble' : 'user-bubble'}`}>
              {msg.html ? (
                <span dangerouslySetInnerHTML={{ __html: msg.html }} />
              ) : (
                msg.text
              )}
            </div>
          </div>
        ))}
        {thinking && (
          <div className="chat-msg">
            <div className="gali-avatar">G</div>
            <div className="chat-bubble gali-bubble">
              <div className="chat-thinking">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-quick-btns">
        <button className="quick-btn" onClick={() => quickChat('setup')}>{t('chat.setup_help')}</button>
        <button className="quick-btn" onClick={() => quickChat('formula')}>{t('chat.formula')}</button>
        <button className="quick-btn" onClick={() => quickChat('error')}>{t('chat.errors')}</button>
      </div>

      <div className="chat-input-row">
        <input
          type="text"
          className="chat-input"
          placeholder={t('chat.placeholder')}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') sendMessage() }}
        />
        <button className="chat-submit" onClick={() => sendMessage()}>{t('gali.send')}</button>
      </div>
    </div>
  )
}

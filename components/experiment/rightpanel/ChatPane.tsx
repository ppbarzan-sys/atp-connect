'use client'
import { useState, useEffect, useRef } from 'react'
import { Experiment } from '@/data/experiments'
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
      return kw.setup || `To set up experiment: gather ${exp.experiment.equipment.map(e => e.name).join(', ')}.`
    }
    if (lower.includes('formula') || lower.includes('equation') || lower.includes('calculat')) {
      return kw.formula || (exp.experiment.formula ? `The key formula is: <code>${exp.experiment.formula}</code>` : 'Please refer to your textbook for the formula.')
    }
    if (lower.includes('error') || lower.includes('mistake') || lower.includes('wrong') || lower.includes('common') || lower.includes('errore') || lower.includes('comuni')) {
      return kw.error || 'Common errors include incorrect measurements, forgetting to calibrate equipment, and reading scales at an angle.'
    }
    if (lower.includes('real') || lower.includes('application') || lower.includes('everyday') || lower.includes('life') || lower.includes('applicaz') || lower.includes('reale')) {
      return kw.real || (exp.experiment.realWorldConnections.length > 0 ? `Real-world connections: <ul>${exp.experiment.realWorldConnections.map(r => `<li>${r}</li>`).join('')}</ul>` : 'Physics is all around us!')
    }
    if (lower.includes('result') || lower.includes('expect') || lower.includes('outcome') || lower.includes('data') || lower.includes('risultat') || lower.includes('atteso')) {
      return kw.result || (exp.ai.expected ? `Expected: ${exp.ai.expected}` : 'Check your results against the expected values in the experiment tab.')
    }
    if (lower.includes('extend') || lower.includes('further') || lower.includes('more') || lower.includes('beyond')) {
      return kw.extend || 'Try extending this experiment by changing variables and observing how results change.'
    }
    if (lower.includes('explain') || lower.includes('how does') || lower.includes('why') || lower.includes('concept') || lower.includes('spiega') || lower.includes('concetto')) {
      return kw.explain || `Key concept: ${exp.experiment.theoryPoints[0] || 'Refer to the Background Theory section.'}`
    }
    if (lower.includes('hook') || lower.includes('interest') || lower.includes('motivat')) {
      return kw.hook || (exp.overview.hook ? `<blockquote>${exp.overview.hook}</blockquote>` : 'Physics is fascinating!')
    }
    if (lower.includes('misconception') || lower.includes('misunderstand') || lower.includes('confuse') || lower.includes('errore comune')) {
      return kw.misconception || (exp.overview.misconceptions.length > 0 ? `Common misconceptions: <ul>${exp.overview.misconceptions.map(m => `<li>${m}</li>`).join('')}</ul>` : 'Watch out for common measurement errors.')
    }
    if (lower.includes('question') || lower.includes('discuss') || lower.includes('domanda')) {
      return kw.question || (exp.questions.discussion.length > 0 ? `Discussion questions: <ul>${exp.questions.discussion.slice(0, 3).map(q => `<li>${q}</li>`).join('')}</ul>` : 'Think about how this experiment connects to real life.')
    }

    return `I can help with <strong>${exp.title}</strong>! Ask me about: <ul><li>Setup help</li><li>Formulas</li><li>Common errors</li><li>Real-world applications</li><li>Expected results</li></ul>`
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

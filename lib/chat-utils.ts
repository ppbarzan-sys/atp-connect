// ── Shared chat utilities for GaliModal and GaliChatPane ──────────────────────

/** Strip markdown so TTS reads clean prose */
export function cleanForSpeech(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/^[-*•]\s/gm, '')
    .replace(/^\d+\.\s/gm, '')
    .replace(/#{1,6}\s/gm, '')
    .replace(/\n{2,}/g, '. ')
    .replace(/\n/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

// ── Speech API types (cross-browser) ────────────────────────────────────────

export interface ISpeechRecognitionEvent {
  readonly results: { [index: number]: { [index: number]: { transcript: string } } }
}

export interface ISpeechRecognition {
  lang: string
  continuous: boolean
  interimResults: boolean
  maxAlternatives: number
  onresult: ((ev: ISpeechRecognitionEvent) => void) | null
  onerror: (() => void) | null
  onend: (() => void) | null
  start(): void
  abort(): void
}

export type SpeechRecognitionCtor = new () => ISpeechRecognition

/** Resolve the Web Speech SpeechRecognition constructor (cross-browser) */
export function getSpeechRecognition(): SpeechRecognitionCtor | null {
  if (typeof window === 'undefined') return null
  type W = Window & {
    SpeechRecognition?: SpeechRecognitionCtor
    webkitSpeechRecognition?: SpeechRecognitionCtor
  }
  const w = window as W
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null
}

/** Speech locale mapping */
export const SPEECH_LOCALE_MAP: Record<string, string> = {
  en: 'en-US',
  it: 'it-IT',
  fr: 'fr-FR',
  es: 'es-ES',
  ar: 'ar-SA',
}

// ── Streaming chat fetch ────────────────────────────────────────────────────

export interface StreamChatOptions {
  messages: Array<{ role: 'user' | 'gali'; content: string }>
  context: Record<string, unknown>
  locale: string
  signal?: AbortSignal
  onChunk: (chunk: string) => void
  onDone: () => void
  onError: (status: number) => void
}

/**
 * Send a streaming chat request to /api/chat.
 * Returns the HTTP status code (or 0 for network errors).
 */
export async function streamChat(opts: StreamChatOptions): Promise<number> {
  const { messages, context, locale, signal, onChunk, onDone, onError } = opts

  let res: Response
  try {
    res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal,
      body: JSON.stringify({ messages, context, locale }),
    })
  } catch (err: unknown) {
    if ((err as Error)?.name === 'AbortError') return 0
    onError(0)
    return 0
  }

  if (res.status === 503) {
    onError(503)
    return 503
  }

  if (!res.ok || !res.body) {
    onError(res.status)
    return res.status
  }

  const reader = res.body.getReader()
  const decoder = new TextDecoder()
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    const chunk = decoder.decode(value, { stream: true })
    if (chunk) onChunk(chunk)
  }
  onDone()
  return res.status
}

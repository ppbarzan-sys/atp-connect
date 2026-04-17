import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { rateLimit } from '@/lib/rateLimit'
import { GALI_SYSTEM_PROMPT } from '@/lib/gali-prompt'

export const runtime = 'nodejs'

interface ChatMessage {
  role: 'user' | 'gali'
  content: string
}

interface ChatContext {
  section?: string
  experimentTitle?: string
  experimentNum?: number
  subject?: 'physics' | 'chemistry' | 'ai' | 'robotics'
  courseTitle?: string
  courseProvider?: string
  quizScore?: { correct: number; total: number; wrongTopics?: string[] }
  focusQuestion?: { text: string; userAnswer: string; correctAnswer: string }

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

  // Learner profile
  learnerProfile?: {
    name?: string
    grade?: number
    passions?: string[]
    knownConcepts?: string[]
    shakyConcepts?: string[]
  }
}

const CHEMISTRY_SECTIONS = new Set([
  'Matter & Solutions', 'Acids & Bases', 'Gas Chemistry',
  'Electrochemistry', 'Plant Physiology'
])

function inferSubject(context?: ChatContext): string {
  if (context?.subject) return context.subject
  if (context?.section && CHEMISTRY_SECTIONS.has(context.section)) return 'chemistry'
  return 'physics'
}

const LOCALE_LANGUAGES: Record<string, string> = {
  en: 'English',
  it: 'Italian',
  fr: 'French',
  es: 'Spanish',
  ar: 'Arabic',
}

function buildSessionContext(context: ChatContext | undefined, locale: string | undefined): string {
  const lang = LOCALE_LANGUAGES[locale || 'en'] || 'English'
  const subject = inferSubject(context)
  const mode = context?.isTeacherMode ? 'TEACHER' : 'LAB'
  const lp = context?.learnerProfile

  const lines: string[] = ['<session_context>']

  // ── learner_profile ──
  lines.push('learner_profile:')
  if (lp?.name) lines.push(`  name: ${lp.name}`)
  lines.push(`  language: ${locale || 'en'} (${lang})`)
  if (lp?.grade !== undefined) lines.push(`  grade: ${lp.grade}`)
  lines.push(`  known_concepts: ${JSON.stringify(lp?.knownConcepts ?? [])}`)
  lines.push(`  shaky_concepts: ${JSON.stringify(lp?.shakyConcepts ?? [])}`)
  lines.push(`  passions: ${JSON.stringify(lp?.passions ?? [])}`)
  if (context?.completedExperimentCount !== undefined) {
    lines.push(`  completed_experiments: ${context.completedExperimentCount}`)
  }
  if (context?.overallAvgScore !== undefined) {
    lines.push(`  overall_avg_score: ${context.overallAvgScore}`)
  }
  if (context?.recentExperiments?.length) {
    lines.push(`  recent_experiments: ${JSON.stringify(context.recentExperiments)}`)
  }

  // ── current_experiment ──
  if (context?.experimentTitle) {
    lines.push('current_experiment:')
    lines.push(`  id: ${context.experimentNum ?? ''}`)
    lines.push(`  title: ${context.experimentTitle}`)
    lines.push(`  subject: ${subject}`)
    if (context.section) lines.push(`  section: ${context.section}`)
    if (context.experimentSummary) lines.push(`  summary: ${context.experimentSummary}`)
    if (context.expectedOutcome) lines.push(`  expected_outcome: ${context.expectedOutcome}`)
    if (context.formula) lines.push(`  formula: ${context.formula}`)
    if (context.theoryPoints?.length) {
      lines.push(`  theory_points: ${JSON.stringify(context.theoryPoints)}`)
    }
    if (context.misconceptions?.length) {
      lines.push(`  pitfalls: ${JSON.stringify(context.misconceptions)}`)
    }
    if (context.equipment?.length) {
      lines.push(`  equipment: ${JSON.stringify(context.equipment)}`)
    }
    if (context.realWorldConnections?.length) {
      lines.push(`  real_world: ${JSON.stringify(context.realWorldConnections)}`)
    }
    if (context.expectedDataRanges) lines.push(`  expected_data_ranges: ${context.expectedDataRanges}`)
    if (context.currentTab) lines.push(`  current_tab: ${context.currentTab}`)
    if (context.dataEntries && Object.keys(context.dataEntries).length > 0) {
      lines.push(`  data_entries: ${JSON.stringify(context.dataEntries)}`)
    }
  } else if (context?.courseTitle) {
    lines.push('current_course:')
    lines.push(`  title: ${context.courseTitle}`)
    if (context.courseProvider) lines.push(`  provider: ${context.courseProvider}`)
    lines.push(`  subject: ${subject}`)
  } else if (context?.section) {
    lines.push(`browsing_section: ${context.section}`)
    lines.push(`subject: ${subject}`)
  } else {
    lines.push(`subject: ${subject}`)
  }

  // ── quiz / focus question ──
  if (context?.quizScore && context.quizScore.total > 0) {
    lines.push('quiz_score:')
    lines.push(`  correct: ${context.quizScore.correct}`)
    lines.push(`  total: ${context.quizScore.total}`)
    if (context.quizScore.wrongTopics?.length) {
      lines.push(`  wrong_topics: ${JSON.stringify(context.quizScore.wrongTopics)}`)
    }
  }
  if (context?.focusQuestion) {
    lines.push('focus_question:')
    lines.push(`  question: ${JSON.stringify(context.focusQuestion.text)}`)
    lines.push(`  user_answer: ${JSON.stringify(context.focusQuestion.userAnswer)}`)
    lines.push(`  correct_answer: ${JSON.stringify(context.focusQuestion.correctAnswer)}`)
  }

  // ── weak areas from dashboard ──
  if (context?.weakAreas?.length) {
    lines.push(`weak_areas: ${JSON.stringify(context.weakAreas)}`)
  }

  lines.push(`mode: ${mode}`)
  lines.push('</session_context>')
  return lines.join('\n')
}

export async function POST(req: NextRequest) {
  // Session validation
  const cookieStore = await cookies()
  const session = cookieStore.get('atp_session')?.value
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Rate limiting: 20 requests per 60 seconds per IP
  const ip = req.headers.get('x-forwarded-for') || 'unknown'
  const rl = rateLimit(ip, 20, 60_000)
  if (!rl.success) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
  }

  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'ANTHROPIC_API_KEY is not configured' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    )
  }

  let messages: ChatMessage[], context: ChatContext | undefined, locale: string | undefined
  try {
    const body = await req.json()
    messages = body.messages ?? []
    context = body.context
    locale = body.locale
  } catch {
    return new Response('Invalid JSON', { status: 400 })
  }

  // Map gali → assistant; drop leading assistant messages so the array starts with 'user'
  const clientMessages = messages
    .map((m) => ({
      role: m.role === 'gali' ? ('assistant' as const) : ('user' as const),
      content: m.content,
    }))
    .filter((_, i, arr) => {
      const firstUserIdx = arr.findIndex((m) => m.role === 'user')
      return i >= firstUserIdx
    })

  if (clientMessages.length === 0) {
    return new Response('No user messages', { status: 400 })
  }

  // Prepend the <session_context> block to the very first user message so the
  // conversation still looks natural to the model ("<session_context>…\n\n<the
  // user's real question>") without breaking the user/assistant/user/assistant
  // alternation.
  const sessionContext = buildSessionContext(context, locale)
  const [firstUser, ...rest] = clientMessages
  const apiMessages = [
    { role: 'user' as const, content: `${sessionContext}\n\n${firstUser.content}` },
    ...rest,
  ]

  const model = 'claude-haiku-4-5-20251001'

  let upstream: Response
  try {
    upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-beta': 'prompt-caching-2024-07-31',
      },
      body: JSON.stringify({
        model,
        max_tokens: 600,
        system: [
          {
            type: 'text',
            text: GALI_SYSTEM_PROMPT,
            cache_control: { type: 'ephemeral' },
          },
        ],
        stream: true,
        messages: apiMessages,
      }),
    })
  } catch (networkErr) {
    console.error('Anthropic API network error:', networkErr)
    return new Response(
      JSON.stringify({ error: 'Could not reach Anthropic API' }),
      { status: 502, headers: { 'Content-Type': 'application/json' } }
    )
  }

  if (!upstream.ok || !upstream.body) {
    const errText = await upstream.text().catch(() => 'Upstream error')
    console.error('Anthropic API error:', upstream.status, errText)
    return new Response(errText, { status: upstream.status })
  }

  // Transform Anthropic SSE stream → plain text delta stream,
  // while accumulating usage counters from message_start / message_delta events.
  const decoder = new TextDecoder()
  const encoder = new TextEncoder()
  let buffer = ''
  const usage = {
    input_tokens: 0,
    cache_creation_input_tokens: 0,
    cache_read_input_tokens: 0,
    output_tokens: 0,
  }

  function ingestEvent(event: {
    type?: string
    message?: { usage?: Record<string, number> }
    usage?: Record<string, number>
    delta?: { type?: string; text?: string }
  }, controller: TransformStreamDefaultController<Uint8Array>) {
    if (event.type === 'message_start' && event.message?.usage) {
      const u = event.message.usage
      usage.input_tokens = u.input_tokens ?? 0
      usage.cache_creation_input_tokens = u.cache_creation_input_tokens ?? 0
      usage.cache_read_input_tokens = u.cache_read_input_tokens ?? 0
      usage.output_tokens = u.output_tokens ?? 0
    } else if (event.type === 'message_delta' && event.usage) {
      const u = event.usage
      if (typeof u.output_tokens === 'number') usage.output_tokens = u.output_tokens
    } else if (
      event.type === 'content_block_delta' &&
      event.delta?.type === 'text_delta' &&
      typeof event.delta.text === 'string'
    ) {
      controller.enqueue(encoder.encode(event.delta.text))
    }
  }

  function logUsage() {
    console.log('[gali] usage:', {
      model,
      input: usage.input_tokens,
      cache_create: usage.cache_creation_input_tokens,
      cache_read: usage.cache_read_input_tokens,
      output: usage.output_tokens,
    })
  }

  const transform = new TransformStream<Uint8Array, Uint8Array>({
    transform(chunk, controller) {
      buffer += decoder.decode(chunk, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop() ?? ''

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue
        const data = line.slice(6).trim()
        if (data === '[DONE]') { logUsage(); controller.terminate(); return }
        try {
          ingestEvent(JSON.parse(data), controller)
        } catch {
          // skip malformed SSE events
        }
      }
    },
    flush(controller) {
      if (buffer) {
        for (const line of buffer.split('\n')) {
          if (!line.startsWith('data: ')) continue
          try {
            ingestEvent(JSON.parse(line.slice(6).trim()), controller)
          } catch {}
        }
      }
      logUsage()
    },
  })

  return new Response(upstream.body.pipeThrough(transform), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}

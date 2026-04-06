import { NextRequest } from 'next/server'

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
}

const CHEMISTRY_SECTIONS = new Set([
  'Matter & Solutions', 'Acids & Bases', 'Gas Chemistry',
  'Electrochemistry', 'Plant Physiology'
])

function isChemistryContext(context?: ChatContext): boolean {
  if (context?.subject === 'chemistry') return true
  if (context?.subject === 'physics') return false
  if (context?.section) return CHEMISTRY_SECTIONS.has(context.section)
  return false
}

const LOCALE_LANGUAGES: Record<string, string> = {
  en: 'English',
  it: 'Italian',
  fr: 'French',
  es: 'Spanish',
  ar: 'Arabic (Modern Standard Arabic / فصحى)',
}

function buildSystemPrompt(context?: ChatContext, locale?: string): string {
  const subject = context?.subject || (isChemistryContext(context) ? 'chemistry' : 'physics')

  let contextLine: string
  if (subject === 'ai') {
    if (context?.courseTitle) {
      contextLine = `The student is looking at the AI course: "${context.courseTitle}" by ${context.courseProvider || 'Anthropic'}.`
    } else {
      contextLine = 'The student is browsing the AI courses section, which features free Anthropic courses on artificial intelligence.'
    }
  } else if (subject === 'robotics') {
    if (context?.courseTitle) {
      contextLine = `The student is looking at the Robotics & CS course: "${context.courseTitle}" by ${context.courseProvider || 'the course provider'}.`
    } else {
      contextLine = 'The student is browsing the Robotics & CS section, which features courses from Arduino, Raspberry Pi Foundation, and Harvard CS50.'
    }
  } else if (context?.experimentTitle) {
    const subjectName = subject === 'chemistry' ? 'chemistry' : 'physics'
    contextLine = `The student is currently working on ${subjectName} experiment #${context.experimentNum}: "${context.experimentTitle}" in the ${context.section} section.`
    if (context.quizScore && context.quizScore.total > 0) {
      const { correct, total, wrongTopics } = context.quizScore
      contextLine += ` They scored ${correct}/${total} on the quiz.`
      if (wrongTopics && wrongTopics.length > 0) {
        contextLine += ` Topics they struggled with: ${wrongTopics.slice(0, 3).join('; ')}.`
      }
    }
  } else if (context?.section && context.section !== 'all') {
    const subjectName = CHEMISTRY_SECTIONS.has(context.section) ? 'chemistry' : 'physics'
    contextLine = `The student is browsing the "${context.section}" section of the ${subjectName} lab.`
  } else {
    contextLine = 'The student is browsing the ATP Connect platform.'
  }

  let subjectScope: string
  if (subject === 'ai') {
    subjectScope = `artificial intelligence concepts including:
- What AI is and how it works (machine learning, neural networks, LLMs)
- How to use AI tools like Claude responsibly and effectively
- Prompt engineering — how to write clear instructions for AI
- AI ethics, bias, safety, and responsible use
- How AI is transforming education, science, and everyday life
- The difference between narrow AI and general AI
- How students can build projects with AI APIs
- Career paths in AI and machine learning`
  } else if (subject === 'robotics') {
    subjectScope = `robotics, electronics, and computer science concepts including:
- Arduino programming (C/C++), circuits, sensors, actuators, and IoT
- Raspberry Pi, Python programming, GPIO, and physical computing
- Computer science fundamentals: algorithms, data structures, problem-solving
- Electronics basics: voltage, current, resistance, LEDs, motors, breadboards
- How to build real projects: robots, smart devices, sensor networks
- The connection between hardware and software
- How to debug circuits and code
- Career paths in robotics, embedded systems, and software engineering`
  } else if (subject === 'chemistry') {
    subjectScope = `chemistry concepts (acid/base reactions, gas laws, electrochemistry, plant physiology, stoichiometry, pH, titration, electrolysis, etc.)`
  } else {
    subjectScope = `physics concepts (mechanics, forces, thermodynamics, acoustics, optics, magnetism, electricity, etc.)`
  }

  return `You are Gali ✦, an enthusiastic and knowledgeable AI STEM assistant for ATP Connect — an interactive learning platform for schools in Africa with:
- 41 physics experiments across Mechanics, Heat, Acoustics, Optics, Magnetism, and Electricity
- 50 chemistry experiments across Matter & Solutions, Acids & Bases, Gas Chemistry, Electrochemistry, and Plant Physiology
- 12 free AI courses from Anthropic (for students, educators, and advanced learners)
- 9 free Robotics & CS courses from Arduino Education, Raspberry Pi Foundation, and Harvard CS50

${contextLine}

Your role is to:
- Help students understand ${subjectScope}
- Explain concepts clearly with real-world examples
- Guide students step-by-step through problems and projects
- Encourage curiosity, critical thinking, and hands-on experimentation
- Suggest relevant courses or experiments from the platform when helpful
- Be supportive and patient — many students are encountering these topics for the first time

Response formatting guidelines:
- Keep responses concise: 2–4 short paragraphs or a bullet list
- Use **bold** for key terms, formulas, and important values
- For numbered steps use "1. step", "2. step" format
- For lists use "- item" format
- Use friendly, encouraging language appropriate for high school or early university students
- If asked something completely off-topic, gently redirect back to STEM subjects${locale && locale !== 'en' ? `

IMPORTANT: The student is using the app in ${LOCALE_LANGUAGES[locale] || 'English'}. You MUST respond in ${LOCALE_LANGUAGES[locale] || 'English'}. All your explanations, encouragements, hints, and answers must be in ${LOCALE_LANGUAGES[locale] || 'English'}. Scientific terms and formulas can remain in their standard form, but all surrounding text must be in ${LOCALE_LANGUAGES[locale] || 'English'}.` : ''}`
}

export async function POST(req: NextRequest) {
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

  // Map gali → assistant; drop the synthetic client-side welcome message
  // (it's the first message in the array and has role 'gali' — the API
  //  requires conversations to start with role 'user')
  const apiMessages = messages
    .map((m) => ({
      role: m.role === 'gali' ? ('assistant' as const) : ('user' as const),
      content: m.content,
    }))
    .filter((_, i, arr) => {
      // Drop leading assistant messages so the array always starts with 'user'
      const firstUserIdx = arr.findIndex((m) => m.role === 'user')
      return i >= firstUserIdx
    })

  if (apiMessages.length === 0) {
    return new Response('No user messages', { status: 400 })
  }

  let upstream: Response
  try {
    upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 600,
        system: buildSystemPrompt(context, locale),
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

  // Transform Anthropic SSE stream → plain text delta stream
  const decoder = new TextDecoder()
  const encoder = new TextEncoder()
  let buffer = ''

  const transform = new TransformStream<Uint8Array, Uint8Array>({
    transform(chunk, controller) {
      buffer += decoder.decode(chunk, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop() ?? ''

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue
        const data = line.slice(6).trim()
        if (data === '[DONE]') { controller.terminate(); return }
        try {
          const event = JSON.parse(data)
          if (
            event.type === 'content_block_delta' &&
            event.delta?.type === 'text_delta' &&
            typeof event.delta.text === 'string'
          ) {
            controller.enqueue(encoder.encode(event.delta.text))
          }
        } catch {
          // skip malformed SSE events
        }
      }
    },
    flush(controller) {
      if (!buffer) return
      for (const line of buffer.split('\n')) {
        if (!line.startsWith('data: ')) continue
        try {
          const event = JSON.parse(line.slice(6).trim())
          if (
            event.type === 'content_block_delta' &&
            event.delta?.type === 'text_delta'
          ) {
            controller.enqueue(encoder.encode(event.delta.text))
          }
        } catch {}
      }
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

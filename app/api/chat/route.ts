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
}

const CHEMISTRY_SECTIONS = new Set([
  'Matter & Solutions',
  'Acids & Bases',
  'Gas Chemistry',
  'Electrochemistry',
  'Plant Physiology',
])

function isChemistryContext(context?: ChatContext): boolean {
  if (!context) return false
  if (context.experimentNum && context.experimentNum >= 101) return true
  if (context.section && CHEMISTRY_SECTIONS.has(context.section)) return true
  return false
}

function buildSystemPrompt(context?: ChatContext): string {
  const isChemistry = isChemistryContext(context)

  let contextLine: string
  if (context?.experimentTitle) {
    const subject = isChemistry ? 'chemistry' : 'physics'
    contextLine = `The student is currently working on ${subject} experiment #${context.experimentNum}: "${context.experimentTitle}" in the ${context.section} section.`
  } else if (context?.section && context.section !== 'all') {
    const subject = CHEMISTRY_SECTIONS.has(context.section) ? 'chemistry' : 'physics'
    contextLine = `The student is browsing the "${context.section}" section of the ${subject} lab.`
  } else {
    contextLine = 'The student is browsing the full ATP Lab catalogue (physics + chemistry experiments).'
  }

  const subjectScope = isChemistry
    ? `chemistry concepts (acid/base reactions, gas laws, electrochemistry, plant physiology, stoichiometry, pH, titration, electrolysis, etc.)`
    : `physics concepts (mechanics, forces, thermodynamics, acoustics, optics, magnetism, electricity, etc.)`

  return `You are Gali ✦, an enthusiastic and knowledgeable AI science lab assistant for ATP Mobile Lab — an interactive science manual with:
- 41 physics experiments across Mechanics, Heat, Acoustics, Optics, Magnetism, and Electricity
- 50 chemistry experiments across Matter & Solutions, Acids & Bases, Gas Chemistry, Electrochemistry, and Plant Physiology

${contextLine}

Your role is to:
- Help students understand ${subjectScope}
- Explain formulas and show how to apply them step-by-step
- Guide students on what to observe and record during experiments
- Describe expected results and how to interpret collected data
- Connect science to real-world applications and everyday examples
- Address common mistakes and misconceptions clearly
- Encourage curiosity, scientific thinking, and deeper exploration

Response formatting guidelines:
- Keep responses concise: 2–4 short paragraphs or a bullet list
- Use **bold** for key terms, formulas, and important values
- For numbered steps use "1. step", "2. step" format
- For lists use "- item" format
- For inline formulas write them inline with **bold**, e.g. **F = ma** or **pH = -log[H⁺]**
- Use friendly, encouraging language appropriate for high school or early university students
- Never invent specific numerical experiment results — refer students to their own data
- If asked something completely off-topic, gently redirect back to STEM and the experiment context`
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'ANTHROPIC_API_KEY is not configured' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    )
  }

  let messages: ChatMessage[], context: ChatContext | undefined
  try {
    const body = await req.json()
    messages = body.messages ?? []
    context = body.context
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
        model: 'claude-3-5-haiku-20241022',
        max_tokens: 600,
        system: buildSystemPrompt(context),
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

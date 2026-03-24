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

function buildSystemPrompt(context?: ChatContext): string {
  const ctx = context?.experimentTitle
    ? `The student is currently working on experiment #${context.experimentNum}: "${context.experimentTitle}" in the ${context.section} section.`
    : context?.section && context.section !== 'all'
    ? `The student is browsing the ${context.section} section of the physics lab.`
    : 'The student is browsing the full ATP Physics Lab experiment catalogue.'

  return `You are Gali, an enthusiastic and knowledgeable AI physics lab assistant for ATP Mobile Lab 4900.00 — an interactive physics manual with 41 experiments across Mechanics, Heat, Acoustics, Optics, Magnetism, and Electricity.

${ctx}

Your role is to:
- Help students understand physics concepts and experiment procedures
- Explain formulas and show how to apply them step-by-step
- Guide students on what to observe and record during experiments
- Describe expected results and how to interpret collected data
- Connect physics to real-world applications and everyday examples
- Address common mistakes and misconceptions clearly
- Encourage curiosity, scientific thinking, and deeper exploration

Guidelines:
- Keep responses concise: 2–4 sentences or a short bullet list
- Use friendly, encouraging language appropriate for high school or early university students
- Use **bold** for key physics terms and formulas when helpful
- When a formula is relevant, present it clearly (e.g. F = ma)
- Never invent specific numerical values — refer students to their experiment data
- If asked something outside physics/science, gently redirect to the experiment context`
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
    messages = body.messages
    context = body.context
  } catch {
    return new Response('Invalid JSON', { status: 400 })
  }

  // Map gali role → assistant for the Anthropic API
  const apiMessages = messages.map((m) => ({
    role: m.role === 'gali' ? 'assistant' : 'user',
    content: m.content,
  }))

  const upstream = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 512,
      system: buildSystemPrompt(context),
      stream: true,
      messages: apiMessages,
    }),
  })

  if (!upstream.ok || !upstream.body) {
    const errText = await upstream.text().catch(() => 'Upstream error')
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
          // skip malformed events
        }
      }
    },
    flush(controller) {
      // flush any remaining buffer
      if (buffer) {
        const lines = buffer.split('\n')
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const data = line.slice(6).trim()
          try {
            const event = JSON.parse(data)
            if (
              event.type === 'content_block_delta' &&
              event.delta?.type === 'text_delta'
            ) {
              controller.enqueue(encoder.encode(event.delta.text))
            }
          } catch {}
        }
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

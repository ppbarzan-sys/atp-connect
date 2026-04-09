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
  const lang = LOCALE_LANGUAGES[locale || 'en'] || 'English'
  const subject = context?.subject || (isChemistryContext(context) ? 'chemistry' : 'physics')

  // ── Teacher mode: completely different persona ──────────────────────────
  if (context?.isTeacherMode) {
    let prompt = `You are Gali, an AI teaching assistant for the ATP STEM Hub platform.
You are helping a TEACHER prepare for and facilitate a hands-on science lab session.
Respond in ${lang}. Be professional but approachable.

When the teacher asks for help:
- Provide clear, concise explanations they can relay to students
- Highlight common student mistakes and how to address them
- Suggest guiding questions the teacher can ask students
- Include safety reminders relevant to the experiment
- Offer tips for managing group work during the experiment`

    if (context.experimentTitle) {
      prompt += `\n\n## Current Experiment
The teacher is preparing: "${context.experimentTitle}" (Experiment #${context.experimentNum})
Section: ${context.section}
Subject: ${subject}`
    }

    if (context.experimentSummary) {
      prompt += `\nLearning objectives: ${context.experimentSummary}`
    }
    if (context.expectedOutcome) {
      prompt += `\nExpected outcome: ${context.expectedOutcome}`
    }
    if (context.formula) {
      prompt += `\nKey formula: ${context.formula}`
    }
    if (context.theoryPoints?.length) {
      prompt += `\n\nKey theory points:\n${context.theoryPoints.map(p => `- ${p}`).join('\n')}`
    }
    if (context.misconceptions?.length) {
      prompt += `\n\nCommon student misconceptions:\n${context.misconceptions.map(m => `- ${m}`).join('\n')}`
    }
    if (context.equipment?.length) {
      prompt += `\n\nEquipment needed: ${context.equipment.join(', ')}`
    }

    prompt += `\n\nIf the teacher asks for a briefing or overview, provide:
1. Key concept in simple terms (2 sentences)
2. Three most common student mistakes
3. One great opening question to engage the class
4. Safety checklist for this experiment
5. Estimated time breakdown (setup / experiment / quiz / discussion)`

    prompt += `\n\nResponse formatting guidelines:
- Keep responses concise and well-structured
- Use **bold** for key terms
- Use numbered lists for steps and bullet lists for items
- Use friendly, professional language`

    if (locale && locale !== 'en') {
      prompt += `\n\nIMPORTANT: Respond in ${lang}. All text must be in ${lang}. Scientific terms and formulas can remain in standard form.`
    }

    return prompt
  }

  // ── Student mode (default) ─────────────────────────────────────────────
  let prompt = `You are Gali, a friendly and knowledgeable AI science tutor for the ATP STEM Hub platform.
You are helping a student with hands-on science experiments.
Respond in ${lang}. Keep responses concise (2-4 sentences for simple questions, up to a paragraph for explanations).
Use encouraging, warm language appropriate for secondary school students.
When explaining concepts, use analogies and real-world examples the student can relate to.
NEVER give quiz answers directly — guide the student to figure it out themselves using Socratic questioning.`

  // ── Platform overview ──────────────────────────────────────────────────
  prompt += `\n\nATP Connect is an interactive learning platform for schools in Africa with:
- 41 physics experiments across Mechanics, Heat, Acoustics, Optics, Magnetism, and Electricity
- 50 chemistry experiments across Matter & Solutions, Acids & Bases, Gas Chemistry, Electrochemistry, and Plant Physiology
- 12 free AI courses from Anthropic (for students, educators, and advanced learners)
- 9 free Robotics & CS courses from Arduino Education, Raspberry Pi Foundation, and Harvard CS50`

  // ── Current experiment context ─────────────────────────────────────────
  if (context?.experimentTitle) {
    const subjectName = subject === 'chemistry' ? 'chemistry' : subject === 'robotics' ? 'robotics' : 'physics'
    prompt += `\n\n## Current Experiment
The student is working on: "${context.experimentTitle}" (Experiment #${context.experimentNum})
Section: ${context.section}
Subject: ${subjectName}`
  } else if (subject === 'ai') {
    if (context?.courseTitle) {
      prompt += `\n\nThe student is looking at the AI course: "${context.courseTitle}" by ${context.courseProvider || 'Anthropic'}.`
    } else {
      prompt += '\n\nThe student is browsing the AI courses section, which features free Anthropic courses on artificial intelligence.'
    }
  } else if (subject === 'robotics') {
    if (context?.courseTitle) {
      prompt += `\n\nThe student is looking at the Robotics & CS course: "${context.courseTitle}" by ${context.courseProvider || 'the course provider'}.`
    } else {
      prompt += '\n\nThe student is browsing the Robotics & CS section, which features courses from Arduino, Raspberry Pi Foundation, and Harvard CS50.'
    }
  } else if (context?.section && context.section !== 'all') {
    const subjectName = CHEMISTRY_SECTIONS.has(context.section) ? 'chemistry' : 'physics'
    prompt += `\n\nThe student is browsing the "${context.section}" section of the ${subjectName} lab.`
  } else {
    prompt += '\n\nThe student is browsing the ATP Connect platform.'
  }

  // ── Deep experiment awareness ──────────────────────────────────────────
  if (context?.experimentSummary) {
    prompt += `\n\nWhat they're learning: ${context.experimentSummary}`
  }
  if (context?.expectedOutcome) {
    prompt += `\nExpected outcome: ${context.expectedOutcome}`
  }
  if (context?.formula) {
    prompt += `\nKey formula: ${context.formula}`
  }
  if (context?.theoryPoints?.length) {
    prompt += `\n\nKey theory points:\n${context.theoryPoints.map(p => `- ${p}`).join('\n')}`
  }
  if (context?.misconceptions?.length) {
    prompt += `\n\nCommon misconceptions to watch for:\n${context.misconceptions.map(m => `- ${m}`).join('\n')}`
  }
  if (context?.expectedDataRanges) {
    prompt += `\n\nExpected data ranges: ${context.expectedDataRanges}`
  }
  if (context?.equipment?.length) {
    prompt += `\n\nEquipment being used: ${context.equipment.join(', ')}`
  }
  if (context?.realWorldConnections?.length) {
    prompt += `\n\nReal-world connections to mention when relevant:\n${context.realWorldConnections.map(c => `- ${c}`).join('\n')}`
  }

  // ── Student activity context ───────────────────────────────────────────
  if (context?.currentTab) {
    const tabDescriptions: Record<string, string> = {
      summary: 'reading the experiment summary and instructions',
      experiment: 'conducting the experiment and recording data',
      questions: 'answering quiz questions',
      notes: 'writing notes about the experiment'
    }
    prompt += `\n\nThe student is currently ${tabDescriptions[context.currentTab] || context.currentTab}.`
  }

  if (context?.dataEntries && Object.keys(context.dataEntries).length > 0) {
    prompt += `\n\nData the student has entered so far:\n${JSON.stringify(context.dataEntries, null, 2)}`
    prompt += `\nIf their data looks unusual compared to expected ranges, gently point this out and suggest what might have gone wrong.`
  }

  // ── Quiz performance ───────────────────────────────────────────────────
  if (context?.quizScore && context.quizScore.total > 0) {
    const pct = Math.round((context.quizScore.correct / context.quizScore.total) * 100)
    prompt += `\n\nQuiz performance: ${context.quizScore.correct}/${context.quizScore.total} (${pct}%)`
    if (context.quizScore.wrongTopics?.length) {
      prompt += `\nTopics they got wrong: ${context.quizScore.wrongTopics.join(', ')}`
      prompt += `\nFocus your help on these weak areas without directly revealing answers.`
    }
  }

  if (context?.focusQuestion) {
    prompt += `\n\nThe student is asking about a specific question they got wrong:
Question: "${context.focusQuestion.text}"
Their answer: "${context.focusQuestion.userAnswer}"
Correct answer: "${context.focusQuestion.correctAnswer}"
Help them understand WHY the correct answer is right without just stating it. Use Socratic questioning.`
  }

  // ── Student history for personalization ─────────────────────────────────
  if (context?.completedExperimentCount !== undefined) {
    if (context.completedExperimentCount === 0) {
      prompt += `\n\nThis appears to be the student's first experiment. Be extra welcoming and encouraging. Explain things simply.`
    } else if (context.completedExperimentCount > 20) {
      prompt += `\n\nThis student has completed ${context.completedExperimentCount} experiments — they're experienced. You can use more advanced terminology and go deeper into theory.`
    }
  }

  if (context?.overallAvgScore !== undefined) {
    if (context.overallAvgScore < 50) {
      prompt += `\nTheir overall average is below 50%. Use simpler language, more analogies, and be extra encouraging.`
    } else if (context.overallAvgScore > 85) {
      prompt += `\nTheir overall average is above 85%. They're a strong student — feel free to introduce advanced concepts and challenge them.`
    }
  }

  // ── Dashboard weak areas ───────────────────────────────────────────────
  if (context?.weakAreas?.length) {
    prompt += `\n\nThe student's weakest areas are:\n${context.weakAreas.map(a => `- ${a.concept}: ${a.mastery}% mastery`).join('\n')}`
    prompt += `\nSuggest specific experiments or topics they should review.`
  }

  // ── Subject scope ──────────────────────────────────────────────────────
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

  prompt += `\n\nYour role is to help students understand ${subjectScope}

Response formatting guidelines:
- Keep responses concise: 2–4 short paragraphs or a bullet list
- Use **bold** for key terms, formulas, and important values
- For numbered steps use "1. step", "2. step" format
- For lists use "- item" format
- Use friendly, encouraging language appropriate for high school or early university students
- If asked something completely off-topic, gently redirect back to STEM subjects`

  if (locale && locale !== 'en') {
    prompt += `\n\nIMPORTANT: The student is using the app in ${lang}. You MUST respond in ${lang}. All your explanations, encouragements, hints, and answers must be in ${lang}. Scientific terms and formulas can remain in their standard form, but all surrounding text must be in ${lang}.`
  }

  return prompt
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

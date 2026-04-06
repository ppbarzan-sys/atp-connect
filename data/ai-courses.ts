export interface AICourse {
  id: string
  title: string
  description: string
  category: 'students' | 'educators' | 'advanced'
  duration: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  icon: string
  url: string
  provider: string
}

export const aiCourses: AICourse[] = [
  {
    id: 'ai-fluency-students',
    title: 'AI Fluency for Students',
    description: 'Learn the fundamentals of artificial intelligence — how it works, what it can do, and how to use it responsibly for learning and research.',
    category: 'students',
    duration: '1-2 hours',
    difficulty: 'Beginner',
    icon: '🧠',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'claude-101',
    title: 'Claude 101',
    description: 'Master the basics of using Claude for learning, writing, problem-solving, and scientific research. Perfect first step into AI tools.',
    category: 'students',
    duration: '1-2 hours',
    difficulty: 'Beginner',
    icon: '💬',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'ai-fluency-foundations',
    title: 'AI Fluency: Framework & Foundations',
    description: 'Build a deep understanding of AI capabilities, limitations, and responsible use. Great for students who want to go beyond the basics.',
    category: 'students',
    duration: '2-3 hours',
    difficulty: 'Beginner',
    icon: '🏗️',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'ai-fluency-educators',
    title: 'AI Fluency for Educators',
    description: 'Discover how to effectively integrate AI tools into your teaching practice, from lesson planning to student assessment and personalized learning.',
    category: 'educators',
    duration: '2-3 hours',
    difficulty: 'Beginner',
    icon: '📚',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'teaching-ai-fluency',
    title: 'Teaching AI Fluency',
    description: 'Ready-to-use frameworks and lesson plans for teaching AI literacy to your students. Includes classroom activities and discussion guides.',
    category: 'educators',
    duration: '2-3 hours',
    difficulty: 'Intermediate',
    icon: '🎯',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'ai-fluency-nonprofits',
    title: 'AI Fluency for Nonprofits',
    description: 'Learn how nonprofit organizations and schools can leverage AI to amplify their mission, improve operations, and serve communities better.',
    category: 'educators',
    duration: '1-2 hours',
    difficulty: 'Beginner',
    icon: '🤝',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'building-claude-api',
    title: 'Building With the Claude API',
    description: 'Learn to build real applications powered by Claude. Covers API authentication, prompt engineering, streaming responses, and tool use.',
    category: 'advanced',
    duration: '3-4 hours',
    difficulty: 'Advanced',
    icon: '⚡',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'claude-code-action',
    title: 'Claude Code in Action',
    description: 'Use Claude Code for agentic coding tasks directly from the terminal. Build, debug, and ship code faster with AI assistance.',
    category: 'advanced',
    duration: '2-3 hours',
    difficulty: 'Intermediate',
    icon: '💻',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'intro-mcp',
    title: 'Introduction to Model Context Protocol',
    description: 'Understand how MCP connects AI models to external tools, databases, and APIs. Build your own integrations and extend AI capabilities.',
    category: 'advanced',
    duration: '2-3 hours',
    difficulty: 'Advanced',
    icon: '🔌',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'mcp-advanced',
    title: 'MCP: Advanced Topics',
    description: 'Deep dive into advanced Model Context Protocol patterns — custom transports, authentication, multi-server architectures, and production deployment.',
    category: 'advanced',
    duration: '3-4 hours',
    difficulty: 'Advanced',
    icon: '🔬',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'agent-skills',
    title: 'Introduction to Agent Skills',
    description: 'Learn to create reusable skill packages for AI agents. Design prompts, tools, and workflows that make agents more capable and reliable.',
    category: 'advanced',
    duration: '2-3 hours',
    difficulty: 'Intermediate',
    icon: '🛠️',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'claude-bedrock',
    title: 'Claude with Amazon Bedrock',
    description: 'Deploy and scale Claude through AWS Bedrock. Covers setup, fine-tuning options, enterprise security, and production best practices.',
    category: 'advanced',
    duration: '2-3 hours',
    difficulty: 'Advanced',
    icon: '☁️',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  }
]

const aiCoursesIt: AICourse[] = [
  {
    id: 'ai-fluency-students',
    title: 'Competenze IA per Studenti',
    description: "Impara i fondamenti dell'intelligenza artificiale — come funziona, cosa può fare e come usarla in modo responsabile per lo studio e la ricerca.",
    category: 'students',
    duration: '1-2 ore',
    difficulty: 'Beginner',
    icon: '🧠',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'claude-101',
    title: 'Claude 101 — Introduzione',
    description: "Impara le basi dell'utilizzo di Claude per lo studio, la scrittura, la risoluzione di problemi e la ricerca scientifica. Il primo passo ideale nel mondo degli strumenti IA.",
    category: 'students',
    duration: '1-2 ore',
    difficulty: 'Beginner',
    icon: '💬',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'ai-fluency-foundations',
    title: 'Competenze IA: Fondamenti',
    description: "Costruisci una comprensione approfondita delle capacità, dei limiti e dell'uso responsabile dell'IA. Ideale per studenti che vogliono andare oltre le basi.",
    category: 'students',
    duration: '2-3 ore',
    difficulty: 'Beginner',
    icon: '🏗️',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'ai-fluency-educators',
    title: 'Competenze IA per Docenti',
    description: "Scopri come integrare efficacemente gli strumenti IA nella tua pratica didattica, dalla pianificazione delle lezioni alla valutazione degli studenti e all'apprendimento personalizzato.",
    category: 'educators',
    duration: '2-3 ore',
    difficulty: 'Beginner',
    icon: '📚',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'teaching-ai-fluency',
    title: 'Insegnare le Competenze IA',
    description: "Framework pronti all'uso e piani di lezione per insegnare l'alfabetizzazione IA ai tuoi studenti. Include attività in classe e guide per la discussione.",
    category: 'educators',
    duration: '2-3 ore',
    difficulty: 'Intermediate',
    icon: '🎯',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'ai-fluency-nonprofits',
    title: 'Competenze IA per il Non-Profit',
    description: "Scopri come le organizzazioni non-profit e le scuole possono sfruttare l'IA per amplificare la propria missione, migliorare le operazioni e servire meglio le comunità.",
    category: 'educators',
    duration: '1-2 ore',
    difficulty: 'Beginner',
    icon: '🤝',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'building-claude-api',
    title: 'Sviluppare con le API di Claude',
    description: "Impara a costruire applicazioni reali con Claude. Copre autenticazione API, prompt engineering, risposte in streaming e uso degli strumenti.",
    category: 'advanced',
    duration: '3-4 ore',
    difficulty: 'Advanced',
    icon: '⚡',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'claude-code-action',
    title: 'Claude Code in Azione',
    description: "Usa Claude Code per attività di programmazione agentiva direttamente dal terminale. Costruisci, correggi e distribuisci codice più velocemente con l'assistenza IA.",
    category: 'advanced',
    duration: '2-3 ore',
    difficulty: 'Intermediate',
    icon: '💻',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'intro-mcp',
    title: 'Introduzione al Model Context Protocol',
    description: "Comprendi come MCP collega i modelli IA a strumenti esterni, database e API. Costruisci le tue integrazioni ed estendi le capacità dell'IA.",
    category: 'advanced',
    duration: '2-3 ore',
    difficulty: 'Advanced',
    icon: '🔌',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'mcp-advanced',
    title: 'MCP: Argomenti Avanzati',
    description: "Approfondimento sui pattern avanzati del Model Context Protocol — trasporti personalizzati, autenticazione, architetture multi-server e deployment in produzione.",
    category: 'advanced',
    duration: '3-4 ore',
    difficulty: 'Advanced',
    icon: '🔬',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'agent-skills',
    title: "Introduzione alle Skill degli Agenti",
    description: "Impara a creare pacchetti di skill riutilizzabili per agenti IA. Progetta prompt, strumenti e workflow che rendono gli agenti più capaci e affidabili.",
    category: 'advanced',
    duration: '2-3 ore',
    difficulty: 'Intermediate',
    icon: '🛠️',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'claude-bedrock',
    title: 'Claude con Amazon Bedrock',
    description: "Distribuisci e scala Claude tramite AWS Bedrock. Copre setup, opzioni di personalizzazione, sicurezza enterprise e best practice per la produzione.",
    category: 'advanced',
    duration: '2-3 ore',
    difficulty: 'Advanced',
    icon: '☁️',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  }
]

const aiCoursesFr: AICourse[] = [
  {
    id: 'ai-fluency-students',
    title: "Compétences IA pour les Élèves",
    description: "Apprenez les fondamentaux de l'intelligence artificielle — comment elle fonctionne, ce qu'elle peut faire, et comment l'utiliser de manière responsable pour l'apprentissage et la recherche.",
    category: 'students',
    duration: '1-2 heures',
    difficulty: 'Beginner',
    icon: '🧠',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'claude-101',
    title: 'Claude 101',
    description: "Maîtrisez les bases de l'utilisation de Claude pour apprendre, écrire, résoudre des problèmes et faire de la recherche scientifique. Le premier pas idéal dans les outils IA.",
    category: 'students',
    duration: '1-2 heures',
    difficulty: 'Beginner',
    icon: '💬',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'ai-fluency-foundations',
    title: "Maîtrise de l'IA : Cadre & Fondements",
    description: "Développez une compréhension approfondie des capacités, des limites et de l'utilisation responsable de l'IA. Idéal pour les élèves qui veulent aller au-delà des bases.",
    category: 'students',
    duration: '2-3 heures',
    difficulty: 'Beginner',
    icon: '🏗️',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'ai-fluency-educators',
    title: "Compétences IA pour les Enseignants",
    description: "Découvrez comment intégrer efficacement les outils IA dans votre pratique pédagogique, de la planification des cours à l'évaluation des élèves et à l'apprentissage personnalisé.",
    category: 'educators',
    duration: '2-3 heures',
    difficulty: 'Beginner',
    icon: '📚',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'teaching-ai-fluency',
    title: "Enseigner les Compétences IA",
    description: "Frameworks prêts à l'emploi et plans de cours pour enseigner la littératie IA à vos élèves. Comprend des activités en classe et des guides de discussion.",
    category: 'educators',
    duration: '2-3 heures',
    difficulty: 'Intermediate',
    icon: '🎯',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'ai-fluency-nonprofits',
    title: "Compétences IA pour les Associations",
    description: "Découvrez comment les organisations à but non lucratif et les établissements scolaires peuvent tirer parti de l'IA pour amplifier leur mission, améliorer leurs opérations et mieux servir les communautés.",
    category: 'educators',
    duration: '1-2 heures',
    difficulty: 'Beginner',
    icon: '🤝',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'building-claude-api',
    title: "Développer avec l'API Claude",
    description: "Apprenez à créer de vraies applications propulsées par Claude. Couvre l'authentification API, l'ingénierie des prompts, les réponses en streaming et l'utilisation des outils.",
    category: 'advanced',
    duration: '3-4 heures',
    difficulty: 'Advanced',
    icon: '⚡',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'claude-code-action',
    title: 'Claude Code en Action',
    description: "Utilisez Claude Code pour des tâches de programmation agentique directement depuis le terminal. Construisez, déboguez et livrez du code plus rapidement avec l'assistance IA.",
    category: 'advanced',
    duration: '2-3 heures',
    difficulty: 'Intermediate',
    icon: '💻',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'intro-mcp',
    title: 'Introduction au Model Context Protocol',
    description: "Comprenez comment MCP connecte les modèles IA aux outils externes, bases de données et APIs. Créez vos propres intégrations et étendez les capacités de l'IA.",
    category: 'advanced',
    duration: '2-3 heures',
    difficulty: 'Advanced',
    icon: '🔌',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'mcp-advanced',
    title: 'MCP : Sujets Avancés',
    description: "Plongez dans les patterns avancés du Model Context Protocol — transports personnalisés, authentification, architectures multi-serveurs et déploiement en production.",
    category: 'advanced',
    duration: '3-4 heures',
    difficulty: 'Advanced',
    icon: '🔬',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'agent-skills',
    title: 'Introduction aux Skills des Agents',
    description: "Apprenez à créer des packages de skills réutilisables pour les agents IA. Concevez des prompts, outils et workflows qui rendent les agents plus capables et fiables.",
    category: 'advanced',
    duration: '2-3 heures',
    difficulty: 'Intermediate',
    icon: '🛠️',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  },
  {
    id: 'claude-bedrock',
    title: 'Claude avec Amazon Bedrock',
    description: "Déployez et mettez à l'échelle Claude via AWS Bedrock. Couvre la configuration, les options de personnalisation, la sécurité enterprise et les bonnes pratiques de production.",
    category: 'advanced',
    duration: '2-3 heures',
    difficulty: 'Advanced',
    icon: '☁️',
    url: 'https://anthropic.skilljar.com/',
    provider: 'Anthropic'
  }
]

export function getAICourses(locale: string): AICourse[] {
  if (locale === 'it') return aiCoursesIt
  if (locale === 'fr') return aiCoursesFr
  return aiCourses
}

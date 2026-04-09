import { CourseQuiz } from './robotics-quizzes'

export const aiQuizzes: CourseQuiz[] = [
  // ─── #301: AI Fluency for Students ───
  {
    courseId: 'ai-fluency-students',
    num: 301,
    title: 'AI Fluency for Students',
    section: 'Students',
    questions: [
      {
        type: 'mcq',
        difficulty: 'easy',
        text: 'What is the best description of how AI models like Claude generate text?',
        options: [
          'They copy text from a database of pre-written answers',
          'They predict the most likely next words based on patterns learned from training data',
          'They search the internet in real-time for every answer',
          'A human types the responses behind the scenes'
        ],
        correctIndex: 1,
        explanation: 'Large language models (LLMs) like Claude generate text by predicting the most probable next tokens based on patterns learned during training on large text datasets.'
      },
      {
        type: 'true-false',
        difficulty: 'easy',
        text: 'AI systems can make mistakes and produce inaccurate information, sometimes called "hallucinations."',
        options: ['True', 'False'],
        correctIndex: 0,
        explanation: 'True. AI models can generate confident-sounding but incorrect information (hallucinations). This is why it is important to verify AI outputs, especially for factual claims.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'What is the most responsible way to use AI for a school research project?',
        options: [
          'Copy the AI output directly as your essay',
          'Use AI to help understand concepts, then write your own work and verify facts',
          'Ask AI to write the essay and change a few words',
          'Never use AI for anything school-related'
        ],
        correctIndex: 1,
        explanation: 'The responsible approach is to use AI as a learning tool — to explain concepts, brainstorm ideas, and check your understanding — then write your own original work and verify any facts.'
      },
      {
        type: 'mcq',
        difficulty: 'hard',
        text: 'What is "prompt engineering"?',
        options: [
          'Building physical AI hardware',
          'The skill of writing effective instructions to get better results from AI',
          'Programming AI in Python',
          'Designing the user interface of AI apps'
        ],
        correctIndex: 1,
        explanation: 'Prompt engineering is the practice of crafting clear, specific, and well-structured instructions (prompts) to get more accurate and useful outputs from AI models.'
      },
      {
        type: 'short-answer',
        difficulty: 'medium',
        text: 'What is the term for the inherent unfairness that can exist in AI systems when training data does not represent all groups equally?',
        acceptableAnswers: ['bias', 'AI bias', 'algorithmic bias', 'data bias', 'training bias'],
        explanation: 'AI bias occurs when training data or model design causes the system to produce unfair or prejudiced outputs.'
      }
    ]
  },

  // ─── #302: Claude 101 ───
  {
    courseId: 'claude-101',
    num: 302,
    title: 'Claude 101',
    section: 'Students',
    questions: [
      {
        type: 'mcq',
        difficulty: 'easy',
        text: 'Who developed Claude?',
        options: ['Google', 'OpenAI', 'Anthropic', 'Microsoft'],
        correctIndex: 2,
        explanation: 'Claude was developed by Anthropic, an AI safety company focused on building reliable and beneficial AI systems.'
      },
      {
        type: 'true-false',
        difficulty: 'easy',
        text: 'Claude can help you understand difficult science concepts by explaining them in simpler terms.',
        options: ['True', 'False'],
        correctIndex: 0,
        explanation: 'True. Claude excels at breaking down complex topics into simpler explanations, providing analogies, and adapting its language to your level of understanding.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'Which is the BEST way to ask Claude for help with a math problem?',
        options: [
          '"Solve this"',
          '"Explain step by step how to solve: 2x + 5 = 15, and explain why each step works"',
          '"Math help"',
          '"Give me the answer to my homework"'
        ],
        correctIndex: 1,
        explanation: 'Specific, detailed prompts get better results. Asking for step-by-step explanation with reasoning helps you learn, not just get an answer.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'What should you always do after Claude provides factual information for a research paper?',
        options: [
          'Trust it completely — AI is always accurate',
          'Verify the information using reliable sources',
          'Ignore it and start over',
          'Share it on social media immediately'
        ],
        correctIndex: 1,
        explanation: 'Always verify AI-generated factual claims with reliable sources (textbooks, academic papers, official websites). AI can hallucinate.'
      },
      {
        type: 'short-answer',
        difficulty: 'hard',
        text: 'What term describes the amount of text an AI model can process in a single conversation (including both your input and its output)?',
        acceptableAnswers: ['context window', 'context length', 'token limit', 'context size', 'context'],
        explanation: 'The context window is the maximum amount of text (measured in tokens) that an AI model can process at once.'
      }
    ]
  },

  // ─── #303: AI Fluency: Framework & Foundations ───
  {
    courseId: 'ai-fluency-foundations',
    num: 303,
    title: 'AI Fluency: Framework & Foundations',
    section: 'Students',
    questions: [
      {
        type: 'mcq',
        difficulty: 'easy',
        text: 'Which of these is NOT a current capability of most AI language models?',
        options: [
          'Summarizing long documents',
          'Having genuine emotions and consciousness',
          'Translating between languages',
          'Helping write and debug code'
        ],
        correctIndex: 1,
        explanation: 'Current AI models can summarize, translate, code, and more — but they do not have genuine emotions, consciousness, or subjective experiences.'
      },
      {
        type: 'true-false',
        difficulty: 'medium',
        text: 'AI models learn by being trained on large datasets of text, which means they can reflect biases present in that data.',
        options: ['True', 'False'],
        correctIndex: 0,
        explanation: 'True. AI models learn patterns from their training data. If the data contains biases, the model may reproduce or amplify those biases in its outputs.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'What does "responsible AI use" include?',
        options: [
          'Using AI to do all your work without thinking',
          'Verifying outputs, being transparent about AI use, and considering ethical implications',
          'Keeping AI use secret from teachers',
          'Only using AI for entertainment'
        ],
        correctIndex: 1,
        explanation: 'Responsible AI use means verifying accuracy, being transparent when using AI tools, understanding their limitations, and considering privacy and fairness.'
      },
      {
        type: 'mcq',
        difficulty: 'hard',
        text: 'What is the key difference between narrow AI and artificial general intelligence (AGI)?',
        options: [
          'Narrow AI is cheaper than AGI',
          'Narrow AI excels at specific tasks; AGI would match human-level intelligence across all domains',
          'AGI already exists but is kept secret',
          'Narrow AI only works offline'
        ],
        correctIndex: 1,
        explanation: 'Narrow AI (what exists today) is designed for specific tasks. AGI would hypothetically match or exceed human intelligence across all cognitive domains — it does not yet exist.'
      },
      {
        type: 'short-answer',
        difficulty: 'hard',
        text: 'What term describes the process of training an AI model on a large dataset of text to learn language patterns before fine-tuning it for specific tasks?',
        acceptableAnswers: ['pre-training', 'pretraining', 'pre training', 'unsupervised pre-training', 'foundation model training'],
        explanation: 'Pre-training is the initial phase where a large language model learns language patterns, facts, and reasoning from a massive text dataset.'
      }
    ]
  },

  // ─── #304: AI Fluency for Educators ───
  {
    courseId: 'ai-fluency-educators',
    num: 304,
    title: 'AI Fluency for Educators',
    section: 'Educators',
    questions: [
      {
        type: 'mcq',
        difficulty: 'easy',
        text: 'How can teachers use AI to improve lesson planning?',
        options: [
          'Let AI replace the teacher entirely',
          'Generate lesson outlines, activity ideas, and differentiated materials',
          'AI cannot help with lesson planning',
          'Copy lesson plans from the internet'
        ],
        correctIndex: 1,
        explanation: 'AI can assist teachers by generating lesson plan drafts, suggesting activities for different learning levels, creating assessment questions, and adapting materials for diverse learners.'
      },
      {
        type: 'true-false',
        difficulty: 'medium',
        text: 'AI tools can help teachers create personalized learning experiences by adapting content to individual student needs.',
        options: ['True', 'False'],
        correctIndex: 0,
        explanation: 'True. AI can help create differentiated content — simpler explanations for struggling students, more challenging problems for advanced learners.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'What is the biggest concern about students using AI for assignments?',
        options: [
          'AI is too slow to be useful',
          'Students may submit AI-generated work as their own without learning the material',
          'AI always gives wrong answers',
          'AI costs too much money'
        ],
        correctIndex: 1,
        explanation: 'Academic integrity is the primary concern — students may use AI to generate work without engaging with the learning process.'
      },
      {
        type: 'mcq',
        difficulty: 'hard',
        text: 'Which assessment strategy works best when students have access to AI tools?',
        options: [
          'Multiple-choice tests only',
          'Banning all technology during assessments',
          'Process-based assessments that evaluate critical thinking, analysis, and the student\'s reasoning journey',
          'Longer essays with strict word counts'
        ],
        correctIndex: 2,
        explanation: 'Process-based assessments (showing reasoning steps, in-class presentations, iterative drafts, verbal defenses) evaluate genuine understanding rather than final outputs that AI could generate.'
      },
      {
        type: 'short-answer',
        difficulty: 'hard',
        text: 'What educational concept describes adjusting teaching methods and materials to accommodate different learning levels within the same classroom?',
        acceptableAnswers: ['differentiation', 'differentiated instruction', 'differentiated learning', 'adaptive learning', 'personalized learning'],
        explanation: 'Differentiated instruction involves tailoring teaching methods, content, and assessments to meet diverse student needs within a single classroom.'
      }
    ]
  },

  // ─── #305: Teaching AI Fluency ───
  {
    courseId: 'teaching-ai-fluency',
    num: 305,
    title: 'Teaching AI Fluency',
    section: 'Educators',
    questions: [
      {
        type: 'mcq',
        difficulty: 'easy',
        text: 'What is "AI literacy"?',
        options: [
          'The ability to read books about AI',
          'Understanding what AI is, how it works, its capabilities and limitations, and how to use it responsibly',
          'Being able to build AI from scratch',
          'Having a degree in computer science'
        ],
        correctIndex: 1,
        explanation: 'AI literacy is the ability to understand, use, and critically evaluate AI technologies. It includes knowing what AI can and cannot do, recognizing its limitations, and using it ethically.'
      },
      {
        type: 'true-false',
        difficulty: 'medium',
        text: 'Teaching AI fluency should start with having students build neural networks from scratch.',
        options: ['True', 'False'],
        correctIndex: 1,
        explanation: 'False. AI fluency should start with practical understanding — what AI is, how to use it responsibly, and critical evaluation of its outputs.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'What is an effective classroom activity for teaching AI concepts?',
        options: [
          'Reading a textbook chapter silently',
          'Having students compare AI outputs to expert answers and discuss the differences',
          'Memorizing AI terminology',
          'Watching a movie about robots'
        ],
        correctIndex: 1,
        explanation: 'Comparing AI outputs to expert-verified answers develops critical thinking. Students learn to identify when AI is accurate and when it hallucinates.'
      },
      {
        type: 'mcq',
        difficulty: 'hard',
        text: 'How should teachers address the ethical dimensions of AI with students?',
        options: [
          'Avoid the topic entirely as it is too complex',
          'Tell students that AI is always fair and unbiased',
          'Facilitate discussions about bias, privacy, transparency, and the societal impact of AI systems',
          'Only discuss ethics in philosophy class'
        ],
        correctIndex: 2,
        explanation: 'AI ethics should be integrated across subjects. Students should discuss real examples of AI bias, privacy concerns, and the importance of human oversight.'
      },
      {
        type: 'short-answer',
        difficulty: 'hard',
        text: 'What term describes the ability to critically evaluate whether information produced by AI is accurate, relevant, and trustworthy?',
        acceptableAnswers: ['critical thinking', 'information literacy', 'digital literacy', 'media literacy', 'AI literacy', 'critical evaluation'],
        explanation: 'Critical thinking (or information/digital literacy) is essential for evaluating AI outputs. Students must learn to question, verify, and cross-reference AI-generated information.'
      }
    ]
  },

  // ─── #306: AI Fluency for Nonprofits ───
  {
    courseId: 'ai-fluency-nonprofits',
    num: 306,
    title: 'AI Fluency for Nonprofits',
    section: 'Educators',
    questions: [
      {
        type: 'mcq',
        difficulty: 'easy',
        text: 'How can nonprofits and schools benefit from AI tools?',
        options: [
          'AI is too expensive for nonprofits',
          'AI can help with grant writing, data analysis, communication, and program evaluation',
          'AI can only be used by large tech companies',
          'Nonprofits should avoid technology completely'
        ],
        correctIndex: 1,
        explanation: 'AI tools can help nonprofits write grants, analyze program data, create communications, translate documents, and automate administrative tasks.'
      },
      {
        type: 'true-false',
        difficulty: 'medium',
        text: 'Small organizations with limited budgets cannot benefit from AI because all AI tools require expensive subscriptions.',
        options: ['True', 'False'],
        correctIndex: 1,
        explanation: 'False. Many AI tools offer free tiers or nonprofit discounts. Open-source AI tools are completely free.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'What is the most important consideration when a nonprofit uses AI to handle beneficiary data?',
        options: [
          'Making the data public for transparency',
          'Data privacy and protecting sensitive information about vulnerable populations',
          'Using the cheapest AI tool available',
          'Sharing data with all partner organizations'
        ],
        correctIndex: 1,
        explanation: 'Nonprofits must prioritize data privacy, especially when working with vulnerable populations. Sensitive data should never be shared with AI tools without proper safeguards.'
      },
      {
        type: 'mcq',
        difficulty: 'hard',
        text: 'How can AI help nonprofits measure and communicate their impact?',
        options: [
          'AI cannot help with impact measurement',
          'By analyzing program data, identifying trends, generating reports, and creating compelling narratives from data',
          'By replacing all staff members',
          'By automatically fundraising online'
        ],
        correctIndex: 1,
        explanation: 'AI can analyze large datasets to find patterns in program outcomes, generate visualizations, draft impact reports, and help translate data into compelling stories for stakeholders.'
      },
      {
        type: 'short-answer',
        difficulty: 'hard',
        text: 'What term describes the gap between communities that have access to modern technology and those that do not?',
        acceptableAnswers: ['digital divide', 'technology gap', 'digital gap', 'tech divide'],
        explanation: 'The digital divide refers to the inequality between demographics and regions that have access to modern information and communications technology and those that do not.'
      }
    ]
  },

  // ─── #307: Building With the Claude API ───
  {
    courseId: 'building-claude-api',
    num: 307,
    title: 'Building With the Claude API',
    section: 'Advanced',
    questions: [
      {
        type: 'mcq',
        difficulty: 'easy',
        text: 'What is an API?',
        options: [
          'A type of programming language',
          'An interface that allows different software applications to communicate with each other',
          'A computer operating system',
          'A type of database'
        ],
        correctIndex: 1,
        explanation: 'API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate.'
      },
      {
        type: 'true-false',
        difficulty: 'medium',
        text: 'When using the Claude API, you send a request with your prompt and receive a response containing the model\'s generated text.',
        options: ['True', 'False'],
        correctIndex: 0,
        explanation: 'True. The Claude API follows a request-response pattern: you send a message via HTTP, and receive a JSON response containing Claude\'s generated text.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'What is an API key used for?',
        options: [
          'Encrypting your data',
          'Identifying and authenticating your application when making API requests',
          'Speeding up your internet connection',
          'Creating a user account'
        ],
        correctIndex: 1,
        explanation: 'An API key is a unique identifier that authenticates your application with the API service. It tracks usage, enables billing, and ensures only authorized applications can access the API.'
      },
      {
        type: 'mcq',
        difficulty: 'hard',
        text: 'What is "streaming" in the context of the Claude API?',
        options: [
          'Watching video content',
          'Receiving the model\'s response token by token in real-time instead of waiting for the complete response',
          'Uploading large files',
          'Broadcasting your screen'
        ],
        correctIndex: 1,
        explanation: 'Streaming delivers the API response incrementally — each token arrives as it is generated, providing a real-time typing effect.'
      },
      {
        type: 'short-answer',
        difficulty: 'hard',
        text: 'In the Claude API, what is the name of the parameter that controls how creative or random the model\'s responses are?',
        acceptableAnswers: ['temperature', 'temp'],
        explanation: 'The temperature parameter (0-1) controls response randomness. Low temperature = deterministic, focused responses. High temperature = more creative, varied responses.'
      }
    ]
  },

  // ─── #308: Claude Code in Action ───
  {
    courseId: 'claude-code-action',
    num: 308,
    title: 'Claude Code in Action',
    section: 'Advanced',
    questions: [
      {
        type: 'mcq',
        difficulty: 'easy',
        text: 'What is Claude Code?',
        options: [
          'A visual code editor',
          'A command-line tool that lets developers delegate coding tasks to Claude directly from their terminal',
          'A code hosting platform like GitHub',
          'A programming language'
        ],
        correctIndex: 1,
        explanation: 'Claude Code is an agentic coding tool that runs in your terminal. You describe what you want in natural language, and Claude writes, edits, and runs code for you.'
      },
      {
        type: 'true-false',
        difficulty: 'medium',
        text: 'Claude Code can read, write, and edit files on your computer, and run terminal commands.',
        options: ['True', 'False'],
        correctIndex: 0,
        explanation: 'True. Claude Code has access to your file system and terminal, allowing it to read existing code, write new files, edit code, run tests, and execute commands.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'What makes Claude Code "agentic"?',
        options: [
          'It has a graphical user interface',
          'It can autonomously plan and execute multi-step tasks, making decisions along the way',
          'It only responds to single questions',
          'It requires manual approval for every action'
        ],
        correctIndex: 1,
        explanation: 'An agentic AI can break complex tasks into steps, decide which tools to use, execute actions, evaluate results, and iterate — all with minimal human intervention.'
      },
      {
        type: 'mcq',
        difficulty: 'hard',
        text: 'What is a best practice when using Claude Code for a large codebase?',
        options: [
          'Ask Claude Code to rewrite the entire project at once',
          'Provide clear context about the project structure, make focused requests, and review changes incrementally',
          'Never give Claude Code access to important files',
          'Only use it for writing comments'
        ],
        correctIndex: 1,
        explanation: 'Best practices include providing project context, making focused incremental requests, reviewing changes before committing, and using version control.'
      },
      {
        type: 'short-answer',
        difficulty: 'hard',
        text: 'What version control system is commonly used alongside Claude Code to track and manage code changes?',
        acceptableAnswers: ['git', 'Git', 'GIT', 'github', 'GitHub'],
        explanation: 'Git is the standard version control system used with Claude Code. It tracks changes, enables rollbacks, and provides a safety net.'
      }
    ]
  },

  // ─── #309: Introduction to MCP ───
  {
    courseId: 'intro-mcp',
    num: 309,
    title: 'Introduction to Model Context Protocol',
    section: 'Advanced',
    questions: [
      {
        type: 'mcq',
        difficulty: 'easy',
        text: 'What does MCP stand for?',
        options: ['Machine Code Protocol', 'Model Context Protocol', 'Multi-Channel Processing', 'Managed Cloud Platform'],
        correctIndex: 1,
        explanation: 'MCP stands for Model Context Protocol — an open standard that enables AI models to connect to external tools, databases, and APIs.'
      },
      {
        type: 'true-false',
        difficulty: 'medium',
        text: 'MCP allows AI models to access real-time data from external sources like databases, APIs, and file systems.',
        options: ['True', 'False'],
        correctIndex: 0,
        explanation: 'True. MCP acts as a bridge between AI models and external systems. It lets models query databases, call APIs, read files, and interact with tools.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'What is the main benefit of MCP over hardcoded integrations?',
        options: [
          'MCP is faster than any other protocol',
          'MCP provides a standardized, reusable way to connect AI to many different tools',
          'MCP eliminates the need for any programming',
          'MCP only works with Anthropic products'
        ],
        correctIndex: 1,
        explanation: 'MCP provides a universal standard — instead of building custom integrations for each tool, developers create MCP servers once and any MCP-compatible AI client can use them.'
      },
      {
        type: 'mcq',
        difficulty: 'hard',
        text: 'In the MCP architecture, what is the relationship between a "server" and a "client"?',
        options: [
          'They are the same thing',
          'The server provides tools and data; the client (AI model) discovers and uses them',
          'The client provides tools; the server uses them',
          'They communicate through email'
        ],
        correctIndex: 1,
        explanation: 'In MCP: servers expose capabilities (tools, resources, prompts) and clients (AI models or applications) discover and invoke those capabilities.'
      },
      {
        type: 'short-answer',
        difficulty: 'hard',
        text: 'In MCP, what is the name for a capability that an AI model can invoke to perform an action, like querying a database or sending a message?',
        acceptableAnswers: ['tool', 'tools', 'MCP tool', 'function', 'resource'],
        explanation: 'In MCP, "tools" are callable functions that the AI model can invoke to perform actions — like searching a database, reading a file, or calling an external API.'
      }
    ]
  },

  // ─── #310: MCP Advanced Topics ───
  {
    courseId: 'mcp-advanced',
    num: 310,
    title: 'MCP: Advanced Topics',
    section: 'Advanced',
    questions: [
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'What is a "transport" in the MCP architecture?',
        options: [
          'A vehicle used by AI robots',
          'The communication layer that carries messages between MCP clients and servers',
          'A type of data encryption',
          'A programming language for MCP'
        ],
        correctIndex: 1,
        explanation: 'A transport is the communication mechanism (stdio, HTTP/SSE, WebSocket) that carries JSON-RPC messages between MCP clients and servers.'
      },
      {
        type: 'true-false',
        difficulty: 'medium',
        text: 'An MCP client can connect to multiple MCP servers simultaneously, combining their capabilities.',
        options: ['True', 'False'],
        correctIndex: 0,
        explanation: 'True. Multi-server architectures allow an AI client to connect to many MCP servers at once — combining all their tools.'
      },
      {
        type: 'mcq',
        difficulty: 'hard',
        text: 'What is the purpose of authentication in MCP server deployments?',
        options: [
          'To make MCP servers run faster',
          'To ensure only authorized clients can access the server and its sensitive resources',
          'Authentication is not needed for MCP',
          'To encrypt the AI model itself'
        ],
        correctIndex: 1,
        explanation: 'Authentication ensures that only authorized users/applications can access MCP servers. This is critical when servers provide access to sensitive data.'
      },
      {
        type: 'mcq',
        difficulty: 'hard',
        text: 'What is a key consideration when deploying MCP servers in production?',
        options: [
          'Use the simplest possible setup with no monitoring',
          'Rate limiting, error handling, logging, and security are all essential',
          'Production MCP servers should run on localhost only',
          'There are no special considerations for production'
        ],
        correctIndex: 1,
        explanation: 'Production MCP deployments require rate limiting, proper error handling, logging, security (authentication, authorization), and monitoring.'
      },
      {
        type: 'short-answer',
        difficulty: 'hard',
        text: 'What message format does MCP use for communication between clients and servers?',
        acceptableAnswers: ['JSON-RPC', 'JSON RPC', 'jsonrpc', 'JSON-RPC 2.0', 'json-rpc'],
        explanation: 'MCP uses JSON-RPC 2.0 as its message format — a lightweight remote procedure call protocol that uses JSON for data serialization.'
      }
    ]
  },

  // ─── #311: Introduction to Agent Skills ───
  {
    courseId: 'agent-skills',
    num: 311,
    title: 'Introduction to Agent Skills',
    section: 'Advanced',
    questions: [
      {
        type: 'mcq',
        difficulty: 'easy',
        text: 'What is an "agent" in the context of AI?',
        options: [
          'A secret spy program',
          'An AI system that can autonomously plan, decide, and take actions to achieve goals',
          'A human who operates AI software',
          'A type of computer virus'
        ],
        correctIndex: 1,
        explanation: 'An AI agent is a system that can perceive its environment, make decisions, and take actions autonomously to achieve specific goals.'
      },
      {
        type: 'true-false',
        difficulty: 'medium',
        text: 'Agent skills are reusable packages of instructions and tools that make AI agents more effective at specific tasks.',
        options: ['True', 'False'],
        correctIndex: 0,
        explanation: 'True. Skills are modular packages containing prompts, tool configurations, and workflows that give agents specialized capabilities.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'What is the benefit of making agent skills reusable?',
        options: [
          'Reusable skills use less electricity',
          'Once a skill is designed and tested, it can be shared and used across different projects without rebuilding from scratch',
          'Reusable skills are always free',
          'There is no benefit to reusability'
        ],
        correctIndex: 1,
        explanation: 'Reusable skills save development time, ensure consistency, and allow knowledge sharing across many different agents and projects.'
      },
      {
        type: 'mcq',
        difficulty: 'hard',
        text: 'What makes a well-designed agent skill effective?',
        options: [
          'Using as many tools as possible',
          'Clear instructions, defined inputs/outputs, error handling, and thorough testing',
          'Making it as complex as possible',
          'Keeping it secret from other developers'
        ],
        correctIndex: 1,
        explanation: 'Effective skills have clear, detailed instructions, well-defined input/output schemas, robust error handling, and thorough testing.'
      },
      {
        type: 'short-answer',
        difficulty: 'hard',
        text: 'What term describes the ability of an AI agent to break a complex goal into smaller subtasks and execute them in sequence?',
        acceptableAnswers: ['planning', 'task decomposition', 'task planning', 'agentic planning', 'reasoning', 'chain of thought'],
        explanation: 'Planning (or task decomposition) is the ability to break a complex goal into manageable subtasks. This is a core capability of agentic AI systems.'
      }
    ]
  },

  // ─── #312: Claude with Amazon Bedrock ───
  {
    courseId: 'claude-bedrock',
    num: 312,
    title: 'Claude with Amazon Bedrock',
    section: 'Advanced',
    questions: [
      {
        type: 'mcq',
        difficulty: 'easy',
        text: 'What is Amazon Bedrock?',
        options: [
          'A type of rock formation',
          'A fully managed AWS service that provides access to foundation models including Claude',
          'Amazon\'s social media platform',
          'A code editor by Amazon'
        ],
        correctIndex: 1,
        explanation: 'Amazon Bedrock is an AWS service that provides API access to foundation models from multiple providers (including Anthropic\'s Claude).'
      },
      {
        type: 'true-false',
        difficulty: 'medium',
        text: 'Using Claude through Amazon Bedrock means your data stays within your AWS account and is not used to train the model.',
        options: ['True', 'False'],
        correctIndex: 0,
        explanation: 'True. Amazon Bedrock keeps your data within your AWS account. Your inputs and outputs are not used to train or improve the underlying foundation models.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'What is a key advantage of using Claude through Bedrock instead of directly?',
        options: [
          'It is always free',
          'Enterprise security, compliance, VPC integration, and AWS infrastructure scalability',
          'Claude is smarter on Bedrock',
          'Bedrock provides a graphical interface'
        ],
        correctIndex: 1,
        explanation: 'Bedrock provides enterprise features: VPC private endpoints, IAM access controls, AWS CloudTrail logging, compliance certifications, and automatic scaling.'
      },
      {
        type: 'mcq',
        difficulty: 'hard',
        text: 'What does "fine-tuning" mean in the context of using Claude on Bedrock?',
        options: [
          'Making the response text smaller',
          'Customizing the model\'s behavior on domain-specific data to improve performance for your use case',
          'Adjusting the screen resolution',
          'Reducing the cost of API calls'
        ],
        correctIndex: 1,
        explanation: 'Fine-tuning involves further training a foundation model on your own domain-specific data to improve its performance for particular tasks.'
      },
      {
        type: 'short-answer',
        difficulty: 'hard',
        text: 'What AWS service is used to control who can access Amazon Bedrock resources and API endpoints?',
        acceptableAnswers: ['IAM', 'AWS IAM', 'Identity and Access Management', 'iam'],
        explanation: 'AWS IAM (Identity and Access Management) controls access to Bedrock resources. IAM policies define which users, roles, and services can invoke specific models.'
      }
    ]
  }
]

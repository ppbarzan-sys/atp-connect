export interface RoboticsCourse {
  id: string
  title: string
  description: string
  category: 'arduino' | 'raspberry-pi' | 'cs50'
  duration: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  icon: string
  url: string
  provider: string
}

export const roboticsCourses: RoboticsCourse[] = [
  {
    id: 'arduino-fundamentals',
    title: 'Arduino Fundamentals',
    description: 'Learn programming and electronics from scratch with Arduino. Build real circuits, write code, and create interactive projects step by step. No prior experience needed.',
    category: 'arduino',
    duration: '10-15 hours',
    difficulty: 'Beginner',
    icon: '🔧',
    url: 'https://courses.arduino.cc/',
    provider: 'Arduino'
  },
  {
    id: 'arduino-iot',
    title: 'Explore IoT with Arduino',
    description: 'Discover the Internet of Things. Learn to connect sensors, collect real-time data, and build smart devices using Arduino and the IoT Cloud.',
    category: 'arduino',
    duration: '15-25 hours',
    difficulty: 'Intermediate',
    icon: '📡',
    url: 'https://courses.arduino.cc/explore-iot/home/',
    provider: 'Arduino'
  },
  {
    id: 'tinkercad-circuits',
    title: 'Tinkercad Circuits — Arduino Simulator',
    description: 'Practice Arduino projects entirely online for free — no hardware required. Design circuits, write code, and simulate your projects in the browser. Perfect for getting started.',
    category: 'arduino',
    duration: 'Self-paced',
    difficulty: 'Beginner',
    icon: '🖥️',
    url: 'https://www.tinkercad.com/circuits',
    provider: 'Autodesk'
  },
  {
    id: 'arduino-science',
    title: 'Arduino Science Kit — Physics Experiments',
    description: 'Use Arduino to run physics experiments with real sensors. Measure motion, light, temperature, and sound — connects directly to your lab curriculum.',
    category: 'arduino',
    duration: '15-20 hours',
    difficulty: 'Intermediate',
    icon: '🔬',
    url: 'https://www.arduino.cc/education/science-kit/',
    provider: 'Arduino'
  },
  {
    id: 'rpi-electronics',
    title: 'Introduction to Electronics & Robotics',
    description: 'Free course from the Raspberry Pi Foundation. Learn to build circuits, control LEDs, motors, and sensors, and program your own robots using Python.',
    category: 'raspberry-pi',
    duration: '10-15 hours',
    difficulty: 'Beginner',
    icon: '🤖',
    url: 'https://www.raspberrypi.org/courses/electronics-and-robotics',
    provider: 'Raspberry Pi'
  },
  {
    id: 'rpi-programming',
    title: 'Introduction to Programming with Python',
    description: 'Learn to code with Python using the Raspberry Pi. Covers variables, loops, functions, and building interactive programs. Free and beginner-friendly.',
    category: 'raspberry-pi',
    duration: '8-12 hours',
    difficulty: 'Beginner',
    icon: '🐍',
    url: 'https://www.raspberrypi.org/courses/',
    provider: 'Raspberry Pi'
  },
  {
    id: 'rpi-physical-computing',
    title: 'Physical Computing with Raspberry Pi',
    description: 'Connect the digital and physical worlds. Control LEDs, buzzers, and motors with code. Read data from buttons, sensors, and cameras. Build real projects.',
    category: 'raspberry-pi',
    duration: '10-15 hours',
    difficulty: 'Intermediate',
    icon: '💡',
    url: 'https://www.raspberrypi.org/courses/',
    provider: 'Raspberry Pi'
  },
  {
    id: 'cs50x',
    title: 'CS50: Introduction to Computer Science',
    description: "Harvard University's legendary intro to CS. Covers algorithms, data structures, web development, and Python. Free on edX with optional certificate. The world's most popular CS course.",
    category: 'cs50',
    duration: '100+ hours',
    difficulty: 'Beginner',
    icon: '🎓',
    url: 'https://cs50.harvard.edu/x/',
    provider: 'Harvard'
  },
  {
    id: 'cs50-ai',
    title: 'CS50: Introduction to AI with Python',
    description: 'Explore the algorithms behind AI — search, optimization, machine learning, and neural networks. Build intelligent systems with Python. Free from Harvard.',
    category: 'cs50',
    duration: '40-60 hours',
    difficulty: 'Advanced',
    icon: '🧪',
    url: 'https://cs50.harvard.edu/ai/',
    provider: 'Harvard'
  }
]

const roboticsCoursesIt: RoboticsCourse[] = [
  {
    id: 'arduino-fundamentals',
    title: 'Fondamenti di Arduino',
    description: "Impara la programmazione e l'elettronica da zero con Arduino. Costruisci circuiti reali, scrivi codice e crea progetti interattivi passo dopo passo. Nessuna esperienza richiesta.",
    category: 'arduino',
    duration: '10-15 ore',
    difficulty: 'Beginner',
    icon: '🔧',
    url: 'https://courses.arduino.cc/',
    provider: 'Arduino'
  },
  {
    id: 'arduino-iot',
    title: "Esplora l'IoT con Arduino",
    description: "Scopri l'Internet delle Cose. Impara a collegare sensori, raccogliere dati in tempo reale e costruire dispositivi intelligenti usando Arduino e l'IoT Cloud.",
    category: 'arduino',
    duration: '15-25 ore',
    difficulty: 'Intermediate',
    icon: '📡',
    url: 'https://courses.arduino.cc/explore-iot/home/',
    provider: 'Arduino'
  },
  {
    id: 'tinkercad-circuits',
    title: 'Tinkercad Circuits — Simulatore Arduino',
    description: "Pratica i progetti Arduino interamente online e gratis — nessun hardware richiesto. Progetta circuiti, scrivi codice e simula i tuoi progetti nel browser. Perfetto per iniziare.",
    category: 'arduino',
    duration: 'Autogestito',
    difficulty: 'Beginner',
    icon: '🖥️',
    url: 'https://www.tinkercad.com/circuits',
    provider: 'Autodesk'
  },
  {
    id: 'arduino-science',
    title: 'Arduino Science Kit — Esperimenti di Fisica',
    description: "Usa Arduino per eseguire esperimenti di fisica con sensori reali. Misura movimento, luce, temperatura e suono — si collega direttamente al tuo programma di laboratorio.",
    category: 'arduino',
    duration: '15-20 ore',
    difficulty: 'Intermediate',
    icon: '🔬',
    url: 'https://www.arduino.cc/education/science-kit/',
    provider: 'Arduino'
  },
  {
    id: 'rpi-electronics',
    title: "Introduzione all'Elettronica e alla Robotica",
    description: "Corso gratuito della Raspberry Pi Foundation. Impara a costruire circuiti, controllare LED, motori e sensori, e programmare i tuoi robot usando Python.",
    category: 'raspberry-pi',
    duration: '10-15 ore',
    difficulty: 'Beginner',
    icon: '🤖',
    url: 'https://www.raspberrypi.org/courses/electronics-and-robotics',
    provider: 'Raspberry Pi'
  },
  {
    id: 'rpi-programming',
    title: 'Introduzione alla Programmazione con Python',
    description: "Impara a programmare con Python usando il Raspberry Pi. Copre variabili, cicli, funzioni e la creazione di programmi interattivi. Gratuito e adatto ai principianti.",
    category: 'raspberry-pi',
    duration: '8-12 ore',
    difficulty: 'Beginner',
    icon: '🐍',
    url: 'https://www.raspberrypi.org/courses/',
    provider: 'Raspberry Pi'
  },
  {
    id: 'rpi-physical-computing',
    title: 'Physical Computing con Raspberry Pi',
    description: "Collega il mondo digitale a quello fisico. Controlla LED, buzzer e motori con il codice. Leggi dati da pulsanti, sensori e fotocamere. Costruisci progetti reali.",
    category: 'raspberry-pi',
    duration: '10-15 ore',
    difficulty: 'Intermediate',
    icon: '💡',
    url: 'https://www.raspberrypi.org/courses/',
    provider: 'Raspberry Pi'
  },
  {
    id: 'cs50x',
    title: "CS50: Introduzione all'Informatica",
    description: "Il leggendario corso introduttivo di informatica di Harvard. Copre algoritmi, strutture dati, sviluppo web e Python. Gratuito su edX con certificato opzionale. Il corso di informatica più popolare al mondo.",
    category: 'cs50',
    duration: '100+ ore',
    difficulty: 'Beginner',
    icon: '🎓',
    url: 'https://cs50.harvard.edu/x/',
    provider: 'Harvard'
  },
  {
    id: 'cs50-ai',
    title: "CS50: Introduzione all'IA con Python",
    description: "Esplora gli algoritmi alla base dell'IA — ricerca, ottimizzazione, machine learning e reti neurali. Costruisci sistemi intelligenti con Python. Gratuito da Harvard.",
    category: 'cs50',
    duration: '40-60 ore',
    difficulty: 'Advanced',
    icon: '🧪',
    url: 'https://cs50.harvard.edu/ai/',
    provider: 'Harvard'
  }
]

export function getRoboticsCourses(locale: string): RoboticsCourse[] {
  return locale === 'it' ? roboticsCoursesIt : roboticsCourses
}

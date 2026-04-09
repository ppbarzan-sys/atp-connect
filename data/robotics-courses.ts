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

const roboticsCoursesFr: RoboticsCourse[] = [
  {
    id: 'arduino-fundamentals',
    title: 'Fondamentaux Arduino',
    description: "Apprenez la programmation et l'électronique de zéro avec Arduino. Construisez de vrais circuits, écrivez du code et créez des projets interactifs étape par étape. Aucune expérience requise.",
    category: 'arduino',
    duration: '10-15 heures',
    difficulty: 'Beginner',
    icon: '🔧',
    url: 'https://courses.arduino.cc/',
    provider: 'Arduino'
  },
  {
    id: 'arduino-iot',
    title: "Explorer l'IoT avec Arduino",
    description: "Découvrez l'Internet des Objets. Apprenez à connecter des capteurs, collecter des données en temps réel et construire des appareils intelligents avec Arduino et l'IoT Cloud.",
    category: 'arduino',
    duration: '15-25 heures',
    difficulty: 'Intermediate',
    icon: '📡',
    url: 'https://courses.arduino.cc/explore-iot/home/',
    provider: 'Arduino'
  },
  {
    id: 'tinkercad-circuits',
    title: 'Tinkercad Circuits — Simulateur Arduino',
    description: "Pratiquez les projets Arduino entièrement en ligne et gratuitement — aucun matériel requis. Concevez des circuits, écrivez du code et simulez vos projets dans le navigateur. Parfait pour débuter.",
    category: 'arduino',
    duration: 'À votre rythme',
    difficulty: 'Beginner',
    icon: '🖥️',
    url: 'https://www.tinkercad.com/circuits',
    provider: 'Autodesk'
  },
  {
    id: 'arduino-science',
    title: 'Arduino Science Kit — Expériences de Physique',
    description: "Utilisez Arduino pour réaliser des expériences de physique avec de vrais capteurs. Mesurez le mouvement, la lumière, la température et le son — s'intègre directement à votre programme de laboratoire.",
    category: 'arduino',
    duration: '15-20 heures',
    difficulty: 'Intermediate',
    icon: '🔬',
    url: 'https://www.arduino.cc/education/science-kit/',
    provider: 'Arduino'
  },
  {
    id: 'rpi-electronics',
    title: "Introduction à l'Électronique et à la Robotique",
    description: "Cours gratuit de la Raspberry Pi Foundation. Apprenez à construire des circuits, contrôler des LED, des moteurs et des capteurs, et à programmer vos propres robots en Python.",
    category: 'raspberry-pi',
    duration: '10-15 heures',
    difficulty: 'Beginner',
    icon: '🤖',
    url: 'https://www.raspberrypi.org/courses/electronics-and-robotics',
    provider: 'Raspberry Pi'
  },
  {
    id: 'rpi-programming',
    title: 'Introduction à la Programmation avec Python',
    description: "Apprenez à coder avec Python sur Raspberry Pi. Couvre les variables, les boucles, les fonctions et la création de programmes interactifs. Gratuit et accessible aux débutants.",
    category: 'raspberry-pi',
    duration: '8-12 heures',
    difficulty: 'Beginner',
    icon: '🐍',
    url: 'https://www.raspberrypi.org/courses/',
    provider: 'Raspberry Pi'
  },
  {
    id: 'rpi-physical-computing',
    title: 'Informatique Physique avec Raspberry Pi',
    description: "Connectez le monde numérique au monde physique. Contrôlez des LED, des buzzers et des moteurs par le code. Lisez des données depuis des boutons, capteurs et caméras. Construisez de vrais projets.",
    category: 'raspberry-pi',
    duration: '10-15 heures',
    difficulty: 'Intermediate',
    icon: '💡',
    url: 'https://www.raspberrypi.org/courses/',
    provider: 'Raspberry Pi'
  },
  {
    id: 'cs50x',
    title: "CS50 : Introduction à l'Informatique",
    description: "Le légendaire cours d'introduction à l'informatique de Harvard. Couvre les algorithmes, les structures de données, le développement web et Python. Gratuit sur edX avec certificat optionnel. Le cours d'informatique le plus populaire au monde.",
    category: 'cs50',
    duration: '100+ heures',
    difficulty: 'Beginner',
    icon: '🎓',
    url: 'https://cs50.harvard.edu/x/',
    provider: 'Harvard'
  },
  {
    id: 'cs50-ai',
    title: "CS50 : Introduction à l'IA avec Python",
    description: "Explorez les algorithmes qui sous-tendent l'IA — recherche, optimisation, apprentissage automatique et réseaux de neurones. Construisez des systèmes intelligents avec Python. Gratuit par Harvard.",
    category: 'cs50',
    duration: '40-60 heures',
    difficulty: 'Advanced',
    icon: '🧪',
    url: 'https://cs50.harvard.edu/ai/',
    provider: 'Harvard'
  }
]

const roboticsCoursesAr: RoboticsCourse[] = [
  {
    id: 'arduino-fundamentals',
    title: 'أساسيات أردوينو',
    description: 'تعلّم البرمجة والإلكترونيات من الصفر مع أردوينو. ابنِ دوائر حقيقية، واكتب الكود، وأنشئ مشاريع تفاعلية خطوة بخطوة. لا تحتاج خبرة سابقة.',
    category: 'arduino',
    duration: '١٠-١٥ ساعة',
    difficulty: 'Beginner',
    icon: '🔧',
    url: 'https://courses.arduino.cc/',
    provider: 'Arduino'
  },
  {
    id: 'arduino-iot',
    title: 'استكشاف إنترنت الأشياء مع أردوينو',
    description: 'اكتشف إنترنت الأشياء. تعلّم توصيل المستشعرات وجمع البيانات في الوقت الحقيقي وبناء أجهزة ذكية باستخدام أردوينو وسحابة إنترنت الأشياء.',
    category: 'arduino',
    duration: '١٥-٢٥ ساعة',
    difficulty: 'Intermediate',
    icon: '📡',
    url: 'https://courses.arduino.cc/explore-iot/home/',
    provider: 'Arduino'
  },
  {
    id: 'tinkercad-circuits',
    title: 'تينكركاد للدوائر — محاكي أردوينو',
    description: 'تدرّب على مشاريع أردوينو عبر الإنترنت مجانًا — لا حاجة لأجهزة. صمّم الدوائر واكتب الكود وحاكِ مشاريعك في المتصفح. مثالي للبدء.',
    category: 'arduino',
    duration: 'حسب الوتيرة الشخصية',
    difficulty: 'Beginner',
    icon: '🖥️',
    url: 'https://www.tinkercad.com/circuits',
    provider: 'Autodesk'
  },
  {
    id: 'arduino-science',
    title: 'مجموعة أردوينو العلمية — تجارب الفيزياء',
    description: 'استخدم أردوينو لإجراء تجارب فيزيائية بمستشعرات حقيقية. قِس الحركة والضوء والحرارة والصوت — يتصل مباشرة بمنهج المختبر.',
    category: 'arduino',
    duration: '١٥-٢٠ ساعة',
    difficulty: 'Intermediate',
    icon: '🔬',
    url: 'https://www.arduino.cc/education/science-kit/',
    provider: 'Arduino'
  },
  {
    id: 'rpi-electronics',
    title: 'مقدمة في الإلكترونيات والروبوتات',
    description: 'دورة مجانية من مؤسسة راسبيري باي. تعلّم بناء الدوائر والتحكم في مصابيح LED والمحركات والمستشعرات وبرمجة الروبوتات باستخدام بايثون.',
    category: 'raspberry-pi',
    duration: '١٠-١٥ ساعة',
    difficulty: 'Beginner',
    icon: '🤖',
    url: 'https://www.raspberrypi.org/courses/electronics-and-robotics',
    provider: 'Raspberry Pi'
  },
  {
    id: 'rpi-programming',
    title: 'مقدمة في البرمجة باستخدام بايثون',
    description: 'تعلّم البرمجة بلغة بايثون مع راسبيري باي. يغطي المتغيرات والحلقات والدوال وبناء البرامج التفاعلية. مجاني ومناسب للمبتدئين.',
    category: 'raspberry-pi',
    duration: '٨-١٢ ساعة',
    difficulty: 'Beginner',
    icon: '🐍',
    url: 'https://www.raspberrypi.org/courses/',
    provider: 'Raspberry Pi'
  },
  {
    id: 'rpi-physical-computing',
    title: 'الحوسبة الفيزيائية مع راسبيري باي',
    description: 'اربط العالم الرقمي بالعالم المادي. تحكّم في مصابيح LED والأزرار والمحركات بالكود. اقرأ البيانات من الأزرار والمستشعرات والكاميرات. ابنِ مشاريع حقيقية.',
    category: 'raspberry-pi',
    duration: '١٠-١٥ ساعة',
    difficulty: 'Intermediate',
    icon: '💡',
    url: 'https://www.raspberrypi.org/courses/',
    provider: 'Raspberry Pi'
  },
  {
    id: 'cs50x',
    title: 'CS50: مقدمة في علوم الحاسوب',
    description: 'الدورة الأسطورية من جامعة هارفارد لمقدمة علوم الحاسوب. تغطي الخوارزميات وهياكل البيانات وتطوير الويب وبايثون. مجانية على edX. الدورة الأكثر شعبية في العالم.',
    category: 'cs50',
    duration: '١٠٠+ ساعة',
    difficulty: 'Beginner',
    icon: '🎓',
    url: 'https://cs50.harvard.edu/x/',
    provider: 'Harvard'
  },
  {
    id: 'cs50-ai',
    title: 'CS50: مقدمة في الذكاء الاصطناعي مع بايثون',
    description: 'استكشف الخوارزميات وراء الذكاء الاصطناعي — البحث والتحسين والتعلّم الآلي والشبكات العصبية. ابنِ أنظمة ذكية بلغة بايثون. مجانية من هارفارد.',
    category: 'cs50',
    duration: '٤٠-٦٠ ساعة',
    difficulty: 'Advanced',
    icon: '🧪',
    url: 'https://cs50.harvard.edu/ai/',
    provider: 'Harvard'
  }
]

const roboticsCoursesEs: RoboticsCourse[] = [
  {
    id: 'arduino-fundamentals',
    title: 'Fundamentos de Arduino',
    description: 'Aprende programación y electrónica desde cero con Arduino. Construye circuitos reales, escribe código y crea proyectos interactivos paso a paso. No se necesita experiencia previa.',
    category: 'arduino',
    duration: '10-15 horas',
    difficulty: 'Beginner',
    icon: '🔧',
    url: 'https://courses.arduino.cc/',
    provider: 'Arduino'
  },
  {
    id: 'arduino-iot',
    title: 'Explora IoT con Arduino',
    description: 'Descubre el Internet de las Cosas. Aprende a conectar sensores, recopilar datos en tiempo real y construir dispositivos inteligentes usando Arduino y la nube IoT.',
    category: 'arduino',
    duration: '15-25 horas',
    difficulty: 'Intermediate',
    icon: '📡',
    url: 'https://courses.arduino.cc/explore-iot/home/',
    provider: 'Arduino'
  },
  {
    id: 'tinkercad-circuits',
    title: 'Tinkercad Circuits — Simulador Arduino',
    description: 'Practica proyectos Arduino completamente en línea y gratis — sin hardware necesario. Diseña circuitos, escribe código y simula tus proyectos en el navegador. Perfecto para comenzar.',
    category: 'arduino',
    duration: 'A tu ritmo',
    difficulty: 'Beginner',
    icon: '🖥️',
    url: 'https://www.tinkercad.com/circuits',
    provider: 'Autodesk'
  },
  {
    id: 'arduino-science',
    title: 'Kit de Ciencias Arduino — Experimentos de Física',
    description: 'Usa Arduino para realizar experimentos de física con sensores reales. Mide movimiento, luz, temperatura y sonido — se conecta directamente con tu plan de estudios de laboratorio.',
    category: 'arduino',
    duration: '15-20 horas',
    difficulty: 'Intermediate',
    icon: '🔬',
    url: 'https://www.arduino.cc/education/science-kit/',
    provider: 'Arduino'
  },
  {
    id: 'rpi-electronics',
    title: 'Introducción a Electrónica y Robótica',
    description: 'Curso gratuito de la Fundación Raspberry Pi. Aprende a construir circuitos, controlar LEDs, motores y sensores, y programar tus propios robots usando Python.',
    category: 'raspberry-pi',
    duration: '10-15 horas',
    difficulty: 'Beginner',
    icon: '🤖',
    url: 'https://www.raspberrypi.org/courses/electronics-and-robotics',
    provider: 'Raspberry Pi'
  },
  {
    id: 'rpi-programming',
    title: 'Introducción a la Programación con Python',
    description: 'Aprende a programar con Python usando Raspberry Pi. Cubre variables, bucles, funciones y construcción de programas interactivos. Gratuito y apto para principiantes.',
    category: 'raspberry-pi',
    duration: '8-12 horas',
    difficulty: 'Beginner',
    icon: '🐍',
    url: 'https://www.raspberrypi.org/courses/',
    provider: 'Raspberry Pi'
  },
  {
    id: 'rpi-physical-computing',
    title: 'Computación Física con Raspberry Pi',
    description: 'Conecta el mundo digital con el físico. Controla LEDs, zumbadores y motores con código. Lee datos de botones, sensores y cámaras. Construye proyectos reales.',
    category: 'raspberry-pi',
    duration: '10-15 horas',
    difficulty: 'Intermediate',
    icon: '💡',
    url: 'https://www.raspberrypi.org/courses/',
    provider: 'Raspberry Pi'
  },
  {
    id: 'cs50x',
    title: 'CS50: Introducción a las Ciencias de la Computación',
    description: 'El legendario curso introductorio de CS de la Universidad de Harvard. Cubre algoritmos, estructuras de datos, desarrollo web y Python. Gratis en edX. El curso de CS más popular del mundo.',
    category: 'cs50',
    duration: '100+ horas',
    difficulty: 'Beginner',
    icon: '🎓',
    url: 'https://cs50.harvard.edu/x/',
    provider: 'Harvard'
  },
  {
    id: 'cs50-ai',
    title: 'CS50: Introducción a la IA con Python',
    description: 'Explora los algoritmos detrás de la IA: búsqueda, optimización, aprendizaje automático y redes neuronales. Construye sistemas inteligentes con Python. Gratis de Harvard.',
    category: 'cs50',
    duration: '40-60 horas',
    difficulty: 'Advanced',
    icon: '🧪',
    url: 'https://cs50.harvard.edu/ai/',
    provider: 'Harvard'
  }
]

export function getRoboticsCourses(locale: string): RoboticsCourse[] {
  if (locale === 'it') return roboticsCoursesIt
  if (locale === 'fr') return roboticsCoursesFr
  if (locale === 'ar') return roboticsCoursesAr
  if (locale === 'es') return roboticsCoursesEs
  return roboticsCourses
}

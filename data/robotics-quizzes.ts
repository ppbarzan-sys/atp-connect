export interface CourseQuiz {
  courseId: string
  num: number
  title: string
  section: string
  questions: QuizQuestion[]
}

export interface QuizQuestion {
  type: 'mcq' | 'true-false' | 'short-answer'
  difficulty: 'easy' | 'medium' | 'hard'
  text: string
  options?: string[]
  correctIndex?: number
  acceptableAnswers?: string[]
  explanation: string
}

export const roboticsQuizzes: CourseQuiz[] = [
  // ─── #201: Arduino Fundamentals ───
  {
    courseId: 'arduino-fundamentals',
    num: 201,
    title: 'Arduino Fundamentals',
    section: 'Arduino',
    questions: [
      {
        type: 'mcq',
        difficulty: 'easy',
        text: 'What programming language is primarily used to program Arduino boards?',
        options: ['Python', 'C/C++', 'JavaScript', 'Ruby'],
        correctIndex: 1,
        explanation: 'Arduino uses a simplified version of C/C++ as its programming language. The Arduino IDE compiles this code and uploads it to the board.'
      },
      {
        type: 'true-false',
        difficulty: 'easy',
        text: 'An Arduino board can only run one program at a time.',
        options: ['True', 'False'],
        correctIndex: 0,
        explanation: 'True. Arduino boards are single-threaded microcontrollers that execute one program (sketch) at a time, running the loop() function repeatedly.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'Which two functions are required in every Arduino sketch?',
        options: ['start() and run()', 'setup() and loop()', 'begin() and execute()', 'init() and main()'],
        correctIndex: 1,
        explanation: 'Every Arduino sketch must have setup() (runs once at startup) and loop() (runs repeatedly). This is the fundamental structure of all Arduino programs.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'What is the difference between a digital pin and an analog pin on Arduino?',
        options: [
          'Digital pins are faster than analog pins',
          'Digital pins read HIGH/LOW only; analog pins read values from 0-1023',
          'Analog pins can only be used for output',
          'There is no difference'
        ],
        correctIndex: 1,
        explanation: 'Digital pins read or write binary values (HIGH=5V or LOW=0V). Analog pins use an ADC (Analog-to-Digital Converter) to read continuous voltage values mapped to 0-1023.'
      },
      {
        type: 'short-answer',
        difficulty: 'hard',
        text: 'What Arduino function do you use to make an LED blink by introducing a pause between turning it on and off?',
        acceptableAnswers: ['delay', 'delay()', 'millis', 'millis()'],
        explanation: 'The delay() function pauses the program for a specified number of milliseconds. For example, delay(1000) pauses for 1 second. Advanced users may use millis() for non-blocking delays.'
      }
    ]
  },

  // ─── #202: Explore IoT with Arduino ───
  {
    courseId: 'arduino-iot',
    num: 202,
    title: 'Explore IoT with Arduino',
    section: 'Arduino',
    questions: [
      {
        type: 'mcq',
        difficulty: 'easy',
        text: 'What does IoT stand for?',
        options: ['Internet of Things', 'Input of Technology', 'Integration of Tools', 'Interface of Terminals'],
        correctIndex: 0,
        explanation: 'IoT stands for Internet of Things — the network of physical devices embedded with sensors, software, and connectivity that enables them to exchange data over the internet.'
      },
      {
        type: 'true-false',
        difficulty: 'medium',
        text: 'In an IoT system, sensors can only send data — they cannot receive commands from the cloud.',
        options: ['True', 'False'],
        correctIndex: 1,
        explanation: 'False. IoT devices can both send sensor data to the cloud AND receive commands back. For example, a smart thermostat sends temperature readings and receives instructions to adjust heating.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'Which communication protocol is most commonly used by IoT devices to send lightweight messages?',
        options: ['FTP', 'MQTT', 'SMTP', 'POP3'],
        correctIndex: 1,
        explanation: 'MQTT (Message Queuing Telemetry Transport) is a lightweight messaging protocol designed for IoT. It uses a publish/subscribe model that is efficient for devices with limited bandwidth.'
      },
      {
        type: 'mcq',
        difficulty: 'hard',
        text: 'What is the Arduino IoT Cloud primarily used for?',
        options: [
          'Writing Arduino code offline',
          'Remotely monitoring and controlling Arduino devices via dashboards',
          'Selling Arduino hardware',
          'Simulating circuits without hardware'
        ],
        correctIndex: 1,
        explanation: 'The Arduino IoT Cloud provides dashboards for remotely monitoring sensor data and controlling connected devices from anywhere via the internet.'
      },
      {
        type: 'short-answer',
        difficulty: 'hard',
        text: 'Name one type of sensor commonly used in IoT projects to collect environmental data.',
        acceptableAnswers: ['temperature', 'humidity', 'light', 'motion', 'pressure', 'gas', 'temperature sensor', 'humidity sensor', 'light sensor', 'motion sensor', 'pressure sensor', 'ultrasonic', 'infrared', 'PIR'],
        explanation: 'Common IoT sensors include temperature (DHT11/DHT22), humidity, light (LDR), motion (PIR), pressure (BMP280), gas (MQ-series), and ultrasonic distance sensors.'
      }
    ]
  },

  // ─── #203: Tinkercad Circuits ───
  {
    courseId: 'tinkercad-circuits',
    num: 203,
    title: 'Tinkercad Circuits — Arduino Simulator',
    section: 'Arduino',
    questions: [
      {
        type: 'mcq',
        difficulty: 'easy',
        text: 'What is Tinkercad Circuits?',
        options: [
          'A physical Arduino starter kit',
          'An online simulator for designing and testing circuits in a browser',
          'A mobile app for controlling robots',
          'A social media platform for engineers'
        ],
        correctIndex: 1,
        explanation: 'Tinkercad Circuits is a free, browser-based tool by Autodesk that lets you design circuits, write Arduino code, and simulate everything without needing any physical hardware.'
      },
      {
        type: 'true-false',
        difficulty: 'easy',
        text: 'You need to buy an Arduino board to use Tinkercad Circuits.',
        options: ['True', 'False'],
        correctIndex: 1,
        explanation: 'False. Tinkercad Circuits is a virtual simulator — you can design and test circuits entirely in your browser without any physical hardware.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'In a basic LED circuit on Tinkercad, why do you need a resistor?',
        options: [
          'To make the LED brighter',
          'To store electrical energy',
          'To limit current and prevent the LED from burning out',
          'To convert AC to DC power'
        ],
        correctIndex: 2,
        explanation: 'A resistor limits the amount of current flowing through the LED. Without it, too much current would pass through, potentially damaging or burning out the LED.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'What is a breadboard used for in circuit design?',
        options: [
          'Permanently soldering components together',
          'Temporarily connecting electronic components without soldering',
          'Measuring voltage',
          'Programming the Arduino'
        ],
        correctIndex: 1,
        explanation: 'A breadboard allows you to quickly prototype circuits by pushing component leads into holes that are internally connected — no soldering required.'
      },
      {
        type: 'short-answer',
        difficulty: 'hard',
        text: 'In Tinkercad, what is the typical resistor value (in ohms) used with a standard LED connected to a 5V Arduino pin?',
        acceptableAnswers: ['220', '220 ohms', '330', '330 ohms', '220\u03A9', '330\u03A9', '220 \u03A9', '330 \u03A9'],
        explanation: 'A 220\u03A9 or 330\u03A9 resistor is typically used with a standard LED on a 5V Arduino pin. Using Ohm\'s law: (5V - 2V LED drop) / 0.02A = 150\u03A9 minimum, so 220\u03A9 is a safe common choice.'
      }
    ]
  },

  // ─── #204: Arduino Science Kit ───
  {
    courseId: 'arduino-science',
    num: 204,
    title: 'Arduino Science Kit — Physics Experiments',
    section: 'Arduino',
    questions: [
      {
        type: 'mcq',
        difficulty: 'easy',
        text: 'What is the main advantage of using Arduino sensors in physics experiments?',
        options: [
          'They make experiments faster to set up',
          'They provide precise digital measurements that can be recorded automatically',
          'They replace the need for any theory',
          'They are only useful for chemistry'
        ],
        correctIndex: 1,
        explanation: 'Arduino sensors provide accurate digital measurements (temperature, light, motion, etc.) that are automatically recorded, reducing human error and enabling real-time data analysis.'
      },
      {
        type: 'true-false',
        difficulty: 'medium',
        text: 'An Arduino temperature sensor measures temperature by converting thermal energy into an electrical voltage signal.',
        options: ['True', 'False'],
        correctIndex: 0,
        explanation: 'True. Temperature sensors (like the TMP36 or DHT11) convert temperature changes into proportional voltage changes that the Arduino reads through its analog input pins.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'Which Arduino sensor would you use to measure the speed of a moving object?',
        options: [
          'Light sensor (LDR)',
          'Ultrasonic distance sensor (HC-SR04)',
          'Gas sensor (MQ-2)',
          'Humidity sensor (DHT11)'
        ],
        correctIndex: 1,
        explanation: 'An ultrasonic sensor (HC-SR04) measures distance by sending sound pulses and timing their echo. By taking multiple distance readings over time, you can calculate speed.'
      },
      {
        type: 'mcq',
        difficulty: 'hard',
        text: 'In a physics experiment measuring acceleration due to gravity, how would an Arduino improve data collection compared to a manual stopwatch?',
        options: [
          'Arduino cannot measure gravity',
          'Arduino provides millisecond-precision timing and automatic data logging',
          'A stopwatch is always more accurate than Arduino',
          'Arduino can only measure static objects'
        ],
        correctIndex: 1,
        explanation: 'Arduino can use sensors (photogate, accelerometer) to capture timing with millisecond precision and automatically log hundreds of data points, far exceeding human reaction time with a stopwatch.'
      },
      {
        type: 'short-answer',
        difficulty: 'hard',
        text: 'What physical quantity does an accelerometer sensor measure?',
        acceptableAnswers: ['acceleration', 'acceleration due to gravity', 'g-force', 'movement', 'orientation', 'tilt'],
        explanation: 'An accelerometer measures acceleration forces acting on the sensor, including gravity (9.8 m/s\u00B2). It can detect motion, tilt, vibration, and orientation.'
      }
    ]
  },

  // ─── #205: Intro to Electronics & Robotics (RPi) ───
  {
    courseId: 'rpi-electronics',
    num: 205,
    title: 'Introduction to Electronics & Robotics',
    section: 'Raspberry Pi',
    questions: [
      {
        type: 'mcq',
        difficulty: 'easy',
        text: 'What is a Raspberry Pi?',
        options: [
          'A type of dessert',
          'A small, affordable single-board computer',
          'An advanced calculator',
          'A video game console'
        ],
        correctIndex: 1,
        explanation: 'The Raspberry Pi is a credit-card-sized single-board computer developed by the Raspberry Pi Foundation. It can run a full Linux operating system and is widely used for learning programming, electronics, and robotics.'
      },
      {
        type: 'true-false',
        difficulty: 'easy',
        text: 'A robot must have wheels to be considered a robot.',
        options: ['True', 'False'],
        correctIndex: 1,
        explanation: 'False. Robots come in many forms — robotic arms, drones, underwater ROVs, humanoid robots, and even software bots. The key features are sensing, processing, and acting — not wheels.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'What are the three basic components of any robotic system?',
        options: [
          'Screen, keyboard, mouse',
          'Sensors, controller (processor), actuators',
          'Battery, motor, LED',
          'Wi-Fi, Bluetooth, USB'
        ],
        correctIndex: 1,
        explanation: 'Every robot has: sensors (to perceive the environment), a controller/processor (to make decisions), and actuators (motors, servos — to take physical action). This is the sense-think-act cycle.'
      },
      {
        type: 'mcq',
        difficulty: 'hard',
        text: 'What is the GPIO on a Raspberry Pi used for?',
        options: [
          'Connecting to Wi-Fi networks',
          'Displaying graphics on screen',
          'Connecting and controlling external electronic components like LEDs, motors, and sensors',
          'Storing files on an SD card'
        ],
        correctIndex: 2,
        explanation: 'GPIO (General Purpose Input/Output) pins allow the Raspberry Pi to interface with external hardware — reading sensor data (input) and controlling LEDs, motors, and relays (output).'
      },
      {
        type: 'short-answer',
        difficulty: 'medium',
        text: 'What programming language is most commonly used with Raspberry Pi for robotics projects?',
        acceptableAnswers: ['Python', 'python', 'Python3', 'python3'],
        explanation: 'Python is the primary programming language for Raspberry Pi projects. It comes pre-installed on Raspberry Pi OS and has extensive libraries for controlling hardware.'
      }
    ]
  },

  // ─── #206: Intro to Programming with Python (RPi) ───
  {
    courseId: 'rpi-programming',
    num: 206,
    title: 'Introduction to Programming with Python',
    section: 'Raspberry Pi',
    questions: [
      {
        type: 'mcq',
        difficulty: 'easy',
        text: 'What does a variable do in Python?',
        options: [
          'It deletes data from memory',
          'It stores a value that can be used and changed later',
          'It connects to the internet',
          'It prints text to the screen'
        ],
        correctIndex: 1,
        explanation: 'A variable is a named container that stores data in the computer\'s memory. For example: age = 15 stores the number 15 in a variable called "age".'
      },
      {
        type: 'true-false',
        difficulty: 'easy',
        text: 'In Python, indentation (spaces at the beginning of a line) is just for readability and does not affect how the code runs.',
        options: ['True', 'False'],
        correctIndex: 1,
        explanation: 'False. In Python, indentation is mandatory and defines code blocks (like the body of loops, functions, and if-statements). Incorrect indentation will cause an IndentationError.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'What is the output of this Python code: for i in range(3): print(i)?',
        options: ['1 2 3', '0 1 2', '0 1 2 3', '1 2'],
        correctIndex: 1,
        explanation: 'range(3) generates numbers starting from 0 up to (but not including) 3, so the output is 0, 1, 2. Python ranges are zero-indexed and exclude the end value.'
      },
      {
        type: 'mcq',
        difficulty: 'hard',
        text: 'What is the purpose of a function in Python?',
        options: [
          'To make the program run slower',
          'To group reusable code that performs a specific task',
          'To permanently store data on the hard drive',
          'To connect to external websites'
        ],
        correctIndex: 1,
        explanation: 'Functions group reusable code that performs a specific task. You define them with "def" and call them by name. They make code organized, reusable, and easier to debug.'
      },
      {
        type: 'short-answer',
        difficulty: 'medium',
        text: 'What Python keyword is used to create a loop that repeats code a specific number of times?',
        acceptableAnswers: ['for', 'for loop', 'while', 'while loop'],
        explanation: 'The "for" keyword creates a loop that iterates a specific number of times (e.g., for i in range(10)). The "while" keyword creates a loop that continues as long as a condition is true.'
      }
    ]
  },

  // ─── #207: Physical Computing with Raspberry Pi ───
  {
    courseId: 'rpi-physical-computing',
    num: 207,
    title: 'Physical Computing with Raspberry Pi',
    section: 'Raspberry Pi',
    questions: [
      {
        type: 'mcq',
        difficulty: 'easy',
        text: 'What does "physical computing" mean?',
        options: [
          'Using a powerful gaming computer',
          'Building interactive systems that sense and respond to the physical world',
          'Computing physics formulas by hand',
          'Running software in a virtual machine'
        ],
        correctIndex: 1,
        explanation: 'Physical computing means creating interactive systems that can sense the real world (using sensors) and respond to it (using lights, motors, speakers) — bridging the gap between digital code and the physical environment.'
      },
      {
        type: 'true-false',
        difficulty: 'medium',
        text: 'An LED connected to a Raspberry Pi GPIO pin needs a resistor to prevent it from being damaged by too much current.',
        options: ['True', 'False'],
        correctIndex: 0,
        explanation: 'True. GPIO pins supply 3.3V which can push too much current through an LED without a resistor. A 330\u03A9 resistor is typically used to limit current to a safe level.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'What type of motor allows you to control the exact angle of rotation?',
        options: ['DC motor', 'Servo motor', 'Stepper motor', 'AC motor'],
        correctIndex: 1,
        explanation: 'A servo motor can be precisely controlled to rotate to a specific angle (typically 0-180\u00B0) using PWM signals. This makes servos ideal for robotic arms and precise positioning.'
      },
      {
        type: 'mcq',
        difficulty: 'hard',
        text: 'What is PWM (Pulse Width Modulation) used for in physical computing?',
        options: [
          'Connecting to Wi-Fi networks',
          'Controlling the brightness of LEDs and speed of motors by rapidly switching power on and off',
          'Encrypting data for secure communication',
          'Measuring the weight of objects'
        ],
        correctIndex: 1,
        explanation: 'PWM rapidly switches a digital pin on and off at varying ratios (duty cycle). A 50% duty cycle = half brightness/speed, 100% = full power. This simulates analog output from digital pins.'
      },
      {
        type: 'short-answer',
        difficulty: 'hard',
        text: 'What Python library is commonly used to control GPIO pins on a Raspberry Pi with simple, beginner-friendly commands?',
        acceptableAnswers: ['gpiozero', 'GPIO Zero', 'RPi.GPIO', 'rpi.gpio', 'gpio zero'],
        explanation: 'gpiozero is a beginner-friendly Python library for Raspberry Pi GPIO. It provides simple commands like LED(17).on() and Button(2).is_pressed. RPi.GPIO is the lower-level alternative.'
      }
    ]
  },

  // ─── #208: CS50: Intro to Computer Science ───
  {
    courseId: 'cs50x',
    num: 208,
    title: 'CS50: Introduction to Computer Science',
    section: 'CS50',
    questions: [
      {
        type: 'mcq',
        difficulty: 'easy',
        text: 'What is an algorithm?',
        options: [
          'A type of computer virus',
          'A step-by-step set of instructions for solving a problem',
          'A programming language',
          'A type of computer hardware'
        ],
        correctIndex: 1,
        explanation: 'An algorithm is a precise, step-by-step set of instructions for solving a specific problem or performing a task. Algorithms are the foundation of computer science.'
      },
      {
        type: 'true-false',
        difficulty: 'medium',
        text: 'Binary is a number system that uses only the digits 0 and 1 to represent all data in a computer.',
        options: ['True', 'False'],
        correctIndex: 0,
        explanation: 'True. Computers use binary (base-2) because electronic circuits have two states: on (1) and off (0). All data — numbers, text, images, video — is ultimately stored as sequences of 0s and 1s.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'What is the main purpose of a data structure?',
        options: [
          'To make the computer look more organized',
          'To organize and store data efficiently so it can be accessed and modified easily',
          'To encrypt data for security',
          'To create visual graphics'
        ],
        correctIndex: 1,
        explanation: 'Data structures (arrays, linked lists, trees, hash tables, etc.) organize data in specific ways that make certain operations efficient.'
      },
      {
        type: 'mcq',
        difficulty: 'hard',
        text: 'What is the time complexity of binary search on a sorted array of n elements?',
        options: ['O(n)', 'O(n\u00B2)', 'O(log n)', 'O(1)'],
        correctIndex: 2,
        explanation: 'Binary search has O(log n) time complexity because it halves the search space with each step. For 1,000,000 elements, it takes at most ~20 comparisons.'
      },
      {
        type: 'short-answer',
        difficulty: 'hard',
        text: 'In computer science, what does "debugging" mean?',
        acceptableAnswers: ['finding and fixing errors', 'fixing bugs', 'removing bugs', 'finding errors', 'fixing errors', 'finding and fixing bugs', 'error correction', 'troubleshooting code'],
        explanation: 'Debugging is the process of finding, analyzing, and fixing errors (bugs) in code. The term originated when Grace Hopper found an actual moth causing problems in a Harvard computer in 1947.'
      }
    ]
  },

  // ─── #209: CS50: Intro to AI with Python ───
  {
    courseId: 'cs50-ai',
    num: 209,
    title: 'CS50: Introduction to AI with Python',
    section: 'CS50',
    questions: [
      {
        type: 'mcq',
        difficulty: 'easy',
        text: 'What is artificial intelligence (AI)?',
        options: [
          'A robot that looks like a human',
          'The ability of a computer system to perform tasks that normally require human intelligence',
          'A very fast computer',
          'A social media algorithm'
        ],
        correctIndex: 1,
        explanation: 'AI refers to computer systems designed to perform tasks that typically require human intelligence — such as understanding language, recognizing patterns, making decisions, and learning from experience.'
      },
      {
        type: 'true-false',
        difficulty: 'medium',
        text: 'Machine learning is a subset of artificial intelligence where systems learn from data without being explicitly programmed for every task.',
        options: ['True', 'False'],
        correctIndex: 0,
        explanation: 'True. Machine learning (ML) is a branch of AI where algorithms learn patterns from data and improve their performance over time, rather than following fixed, hand-coded rules.'
      },
      {
        type: 'mcq',
        difficulty: 'medium',
        text: 'What is a neural network inspired by?',
        options: [
          'The internet',
          'The structure and function of the human brain',
          'Social networks',
          'Computer networks'
        ],
        correctIndex: 1,
        explanation: 'Neural networks are inspired by the biological neural networks in the human brain. They consist of layers of interconnected nodes (neurons) that process information and learn to recognize patterns.'
      },
      {
        type: 'mcq',
        difficulty: 'hard',
        text: 'In AI, what is the difference between supervised and unsupervised learning?',
        options: [
          'Supervised learning requires a teacher; unsupervised does not',
          'Supervised learning uses labeled training data; unsupervised learning finds patterns in unlabeled data',
          'Supervised learning is faster; unsupervised learning is slower',
          'There is no difference'
        ],
        correctIndex: 1,
        explanation: 'In supervised learning, the model trains on labeled data (input-output pairs). In unsupervised learning, the model discovers hidden patterns in unlabeled data without predefined answers.'
      },
      {
        type: 'short-answer',
        difficulty: 'hard',
        text: 'What AI technique involves an agent learning to make decisions by receiving rewards or penalties for its actions?',
        acceptableAnswers: ['reinforcement learning', 'reinforcement', 'RL', 'reward-based learning'],
        explanation: 'Reinforcement learning (RL) trains agents to make decisions by rewarding desired behaviors and penalizing undesired ones. It is used in game-playing AI (AlphaGo), robotics, and autonomous vehicles.'
      }
    ]
  }
]

import { Experiment } from './experiments'

export const roboticsSectionColors: Record<string, string> = {
  Fundamentals: '#3B82F6',
  Sensors: '#8B5CF6',
  Actuators: '#F97316',
  Projects: '#14B8A6',
}

export const roboticsSectionEmojis: Record<string, string> = {
  Fundamentals: '\u{1F527}',
  Sensors: '\u{1F4E1}',
  Actuators: '\u2699\uFE0F',
  Projects: '\u{1F680}',
}

export const roboticsExperiments: Experiment[] = [
  // ─── #501: LED Blink — Your First Circuit ───
  {
    num: 501,
    cardEmoji: '\u{1F4A1}',
    title: 'LED Blink \u2014 Your First Circuit',
    section: 'Fundamentals',
    desc: 'Build your first circuit by connecting an LED to Arduino and writing code to make it blink on and off.',
    equipmentNeeded: 'arduino-kit',
    setupTime: '10 min',
    duration: '25 min',
    summary: {
      whatTheyLearn: 'Students learn the basics of a digital circuit \u2014 how current flows from Arduino through a resistor and LED, and how to write their first Arduino sketch using digitalWrite() and delay().',
      instructions: [
        'Insert the Arduino Uno into the breadboard base.',
        'Connect a 220\u03A9 resistor from Arduino digital pin 13 to an empty breadboard row.',
        'Connect the long leg (anode, +) of a red LED to the same row as the resistor.',
        'Connect the short leg (cathode, \u2212) of the LED to the Arduino GND rail.',
        'Upload the Blink sketch from File > Examples > 01.Basics > Blink.',
      ],
      expectedOutcome: 'The LED blinks on for 1 second, then off for 1 second, repeating indefinitely. Changing delay(1000) to delay(250) makes it blink faster.',
    },
    experiment: {
      equipment: [
        { emoji: '\u{1F50C}', name: 'Arduino Uno R3' },
        { emoji: '\u{1F35E}', name: 'Breadboard + wooden base' },
        { emoji: '\u{1F4A1}', name: '1x Red LED' },
        { emoji: '\u{1F517}', name: '1x 220\u03A9 resistor (red-red-brown)' },
        { emoji: '\u{1F50C}', name: '2x Jumper wires' },
        { emoji: '\u{1F50C}', name: 'USB cable' },
      ],
      observationsToRecord: [
        'Does the LED light up when connected?',
        'What happens when you change delay(1000) to delay(500)?',
        'What happens if you remove the resistor? (ONLY OBSERVE briefly)',
        'What happens if you reverse the LED legs?',
      ],
      theoryPoints: [
        'LEDs are polarized \u2014 current only flows in one direction (anode + to cathode \u2212)',
        'A resistor limits current to prevent LED damage. V = IR, so R = (5V - 2V) / 0.02A = 150\u03A9 minimum',
        'digitalWrite(pin, HIGH) sets the pin to 5V; LOW sets it to 0V',
        'delay(ms) pauses the program for the specified milliseconds',
      ],
      realWorldConnections: [
        'Traffic lights use timed LED switching',
        'Emergency vehicle lights use rapid blinking patterns',
        'Status indicators on electronics (power LED, charging indicator)',
      ],
      formula: 'R = (V_supply - V_LED) / I_LED = (5V - 2V) / 20mA = 150\u03A9 (use 220\u03A9 for safety)',
    },
    questions: {
      mcq: [
        {
          text: 'What is the purpose of the resistor in an LED circuit?',
          options: ['To make the LED brighter', 'To limit the current and protect the LED from burning out', 'To store energy for the LED', 'To reverse the current direction'],
          correctIndex: 1,
          explanation: 'A resistor limits the amount of current flowing through the LED. Without it, too much current would flow and damage or destroy the LED.',
        },
        {
          text: 'What does the Arduino function delay(1000) do?',
          options: ['Turns the LED on for 1 second', 'Pauses the program for 1000 milliseconds (1 second)', 'Sets pin 1000 to HIGH', 'Blinks the LED 1000 times'],
          correctIndex: 1,
          explanation: 'delay(1000) pauses the entire program for 1000 milliseconds (1 second). During this time, whatever state the pins are in remains unchanged.',
        },
        {
          text: 'Which Arduino function sets a digital pin to HIGH (5V) or LOW (0V)?',
          options: ['analogWrite()', 'digitalRead()', 'digitalWrite()', 'pinMode()'],
          correctIndex: 2,
          explanation: 'digitalWrite(pin, value) sets a digital pin to either HIGH (5V) or LOW (0V). It is used to turn LEDs, motors, and other digital components on and off.',
        },
        {
          text: 'What happens if you connect an LED backwards (reversed polarity)?',
          options: ['It lights up brighter', 'It blinks automatically', 'It does not light up because LEDs only allow current in one direction', 'It changes color'],
          correctIndex: 2,
          explanation: 'LEDs are diodes \u2014 they only allow current to flow in one direction (from anode + to cathode \u2212). Reversing the LED means no current flows.',
        },
        {
          text: 'In the Blink sketch, which two functions are required in every Arduino program?',
          options: ['start() and stop()', 'begin() and end()', 'setup() and loop()', 'on() and off()'],
          correctIndex: 2,
          explanation: 'Every Arduino sketch must have setup() \u2014 which runs once at startup \u2014 and loop() \u2014 which runs repeatedly forever.',
        },
      ],
      discussion: [
        'Why do we need a resistor with an LED but not with the built-in LED on pin 13?',
        'If you wanted the LED to blink in a pattern (2 fast, 1 slow), how would you modify the code?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Digital Output', pct: 30 },
        { label: 'Circuit Basics', pct: 30 },
        { label: 'Arduino Code Structure', pct: 25 },
        { label: "Ohm's Law", pct: 15 },
      ],
      misconceptions: [
        'Students often think removing the resistor makes the LED brighter (it does briefly, but then burns it out)',
        'Students may think HIGH means maximum voltage rather than 5V specifically',
        'Students sometimes confuse the anode and cathode of the LED',
      ],
      hook: "Every smart device you own \u2014 from your phone's notification light to a car's dashboard \u2014 uses LEDs controlled by code. Today you'll write your first program to control one!",
      khanLinks: [
        { title: 'Intro to Circuits', url: 'https://www.khanacademy.org/science/physics/circuits-topic' },
        { title: "Ohm's Law", url: 'https://www.khanacademy.org/science/physics/circuits-topic/circuits-resistance/v/introduction-to-circuits-and-ohms-law' },
      ],
    },
    dataTable: {
      headers: ['Delay (ms)', 'Blinks per Minute', 'LED On Time', 'LED Off Time', 'Observation'],
      rows: 5,
    },
    observations: [
      'Record the delay value and count how many times the LED blinks in 30 seconds',
      'Calculate blinks per minute for each delay setting',
      'Note any difference in perceived brightness at very fast blink rates',
    ],
    conclusion: "An LED circuit requires a current-limiting resistor to protect the LED. The Arduino's digitalWrite() function controls the pin voltage (5V or 0V), and delay() controls timing.",
    ai: {
      opening: "Welcome to your first Arduino experiment! \u{1F916}\u{1F4A1} We're going to make an LED blink using code. This is the 'Hello World' of electronics!",
      keywords: {
        setup: 'Make sure the LED\'s long leg (anode) connects through the resistor to pin 13, and the short leg (cathode) goes to GND.',
        formula: "Use Ohm's Law: R = V/I. The Arduino outputs 5V, the LED drops about 2V, so you need at least 150\u03A9. We use 220\u03A9 for safety.",
        error: "If your LED doesn't light up: 1) Check the LED direction (long leg = +), 2) Make sure the resistor is connected, 3) Verify pin 13 in your code.",
        question: 'Try changing the delay values. What happens with delay(100)? With delay(50)? At what speed does the blinking look like a solid light?',
        real: 'Traffic lights, phone notification LEDs, car dashboards, and stadium screens all use timed LED control!',
        result: "You should see the LED turning on for 1 second and off for 1 second. If it's always on or always off, check your wiring.",
        extend: 'Try controlling multiple LEDs on different pins, or create SOS in Morse code (3 short, 3 long, 3 short).',
        explain: 'The loop() function repeats forever. Inside it, we set pin 13 HIGH (LED on), wait, set it LOW (LED off), wait, and repeat.',
        hook: "Fun fact: making an LED blink IS the 'Hello World' of Arduino!",
        misconception: "The resistor doesn't make the LED dimmer in a bad way \u2014 it protects it! Without it, the LED burns out in seconds.",
      },
      hint: 'Make sure your LED has the long leg (anode) connected to the resistor side, and the short leg (cathode) to GND.',
      expected: 'The red LED should blink on and off at a regular interval determined by your delay() values.',
    },
  },

  // ─── #502: Traffic Light Controller ───
  {
    num: 502,
    cardEmoji: '\u{1F6A6}',
    title: 'Traffic Light Controller',
    section: 'Fundamentals',
    desc: 'Build a 3-LED traffic light system and program it to cycle through red, yellow, and green with realistic timing.',
    equipmentNeeded: 'arduino-kit',
    setupTime: '10 min',
    duration: '30 min',
    summary: {
      whatTheyLearn: 'Students learn sequential logic by controlling multiple LEDs in a timed sequence, simulating a real traffic light system.',
      instructions: [
        'Place three LEDs on the breadboard: red, yellow, and green (top to bottom).',
        'Connect each LED through a 220\u03A9 resistor to Arduino pins: red=pin 4, yellow=pin 3, green=pin 2.',
        'Connect all LED cathodes to the GND rail.',
        'Write code to cycle: Green ON (5s) \u2192 Yellow ON (2s) \u2192 Red ON (5s) \u2192 repeat.',
        'Upload and observe the traffic light pattern.',
      ],
      expectedOutcome: 'The three LEDs cycle in the correct traffic light sequence with realistic timing.',
    },
    experiment: {
      equipment: [
        { emoji: '\u{1F50C}', name: 'Arduino Uno R3' },
        { emoji: '\u{1F35E}', name: 'Breadboard' },
        { emoji: '\u{1F534}', name: '1x Red LED' },
        { emoji: '\u{1F7E1}', name: '1x Yellow LED' },
        { emoji: '\u{1F7E2}', name: '1x Green LED' },
        { emoji: '\u{1F517}', name: '3x 220\u03A9 resistors' },
        { emoji: '\u{1F50C}', name: 'Jumper wires' },
      ],
      observationsToRecord: [
        'Do all three LEDs light up individually when tested?',
        'Does the sequence follow the correct traffic light order?',
        'What total cycle time do you measure?',
        'What happens if you add a pedestrian crossing phase?',
      ],
      theoryPoints: [
        'Sequential logic executes steps in a fixed order',
        'Each LED needs its own current-limiting resistor',
        'Traffic lights follow international standards for phase timing',
        'State machines represent systems with defined states and transitions',
      ],
      realWorldConnections: [
        'Real traffic lights use embedded controllers with sensor inputs',
        'Pedestrian crossings add additional states to the sequence',
        'Emergency vehicle priority systems override normal sequences',
      ],
      formula: 'Total cycle time = T_green + T_yellow + T_red',
    },
    questions: {
      mcq: [
        {
          text: 'In a traffic light sequence, which light comes on between green and red?',
          options: ['Blue', 'White', 'Yellow (amber)', 'No light \u2014 they switch directly'],
          correctIndex: 2,
          explanation: 'The yellow (amber) light serves as a warning that the signal is about to change to red, giving drivers time to stop safely.',
        },
        {
          text: 'How many digital output pins are needed to control a basic 3-color traffic light?',
          options: ['1', '2', '3', '6'],
          correctIndex: 2,
          explanation: 'Each LED needs its own digital pin for independent control: one for red, one for yellow, and one for green.',
        },
        {
          text: 'What is the purpose of calling digitalWrite(redPin, LOW) before turning on the green LED?',
          options: ['To save battery power', 'To ensure only one light is on at a time', 'To make the green LED brighter', 'It has no purpose'],
          correctIndex: 1,
          explanation: 'Turning off the red LED before turning on green ensures only one traffic light color shows at a time, mimicking real traffic lights.',
        },
        {
          text: 'If the green light is on for 5 seconds and yellow for 2 seconds and red for 5 seconds, what is the total cycle time?',
          options: ['7 seconds', '10 seconds', '12 seconds', '15 seconds'],
          correctIndex: 2,
          explanation: 'Total cycle = 5s (green) + 2s (yellow) + 5s (red) = 12 seconds for one complete cycle.',
        },
        {
          text: 'What is a "state machine" in programming?',
          options: ['A machine that runs states', 'A model where a system can be in one of several defined states with rules for transitioning between them', 'A type of Arduino board', 'A random number generator'],
          correctIndex: 1,
          explanation: 'A state machine is a programming concept where a system has defined states (green, yellow, red) and specific rules for transitioning between them.',
        },
      ],
      discussion: [
        'How would you add a pedestrian crossing button to this traffic light?',
        'Why do real traffic lights have sensors embedded in the road?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Sequential Logic', pct: 35 },
        { label: 'Multiple Digital Outputs', pct: 25 },
        { label: 'Timing & Delays', pct: 25 },
        { label: 'State Machines', pct: 15 },
      ],
      misconceptions: [
        'Students may try to turn on all LEDs at once instead of sequencing them',
        'Students sometimes forget to turn off the previous LED before lighting the next one',
      ],
      hook: "Traffic lights control millions of intersections worldwide. Today you'll build and program your own!",
      khanLinks: [
        { title: 'Intro to Circuits', url: 'https://www.khanacademy.org/science/physics/circuits-topic' },
      ],
    },
    dataTable: {
      headers: ['Phase', 'LED Color', 'Duration (s)', 'Pin Number', 'Observation'],
      rows: 4,
    },
    observations: [
      'Record the timing for each phase of your traffic light',
      'Verify the sequence matches real traffic light behavior',
      'Observe what happens when you change the timing values',
    ],
    conclusion: 'A traffic light controller demonstrates sequential logic \u2014 executing steps in a defined order with precise timing. Each state (green, yellow, red) has a specific duration and transition rule.',
    ai: {
      opening: "Let's build a traffic light! \u{1F6A6} You'll control 3 LEDs in sequence \u2014 just like the signals at a real intersection.",
      keywords: {
        setup: 'Connect red to pin 4, yellow to pin 3, green to pin 2. Each LED needs its own 220\u03A9 resistor to GND.',
        formula: 'Total cycle time = green time + yellow time + red time. A typical real cycle is 60-120 seconds.',
        error: 'If LEDs light up out of order, double-check which wire goes to which pin. Label your wires!',
        question: 'Can you add a 4th state where all lights are off for 1 second between cycles?',
        real: 'Modern traffic lights use sensors, cameras, and AI to optimize traffic flow in real time.',
        result: 'You should see green \u2192 yellow \u2192 red cycling continuously.',
        extend: 'Add a second set of 3 LEDs for a cross-street and coordinate both directions!',
        explain: 'We turn each LED on and off in sequence using digitalWrite() and delay() to create the timing pattern.',
      },
      hint: 'Remember to turn OFF the previous LED before turning ON the next one in the sequence.',
      expected: 'Three LEDs cycling in traffic light order: green (5s) \u2192 yellow (2s) \u2192 red (5s) \u2192 repeat.',
    },
  },

  // ─── #503: Button-Controlled LED ───
  {
    num: 503,
    cardEmoji: '\u{1F518}',
    title: 'Button-Controlled LED',
    section: 'Fundamentals',
    desc: 'Use a pushbutton as a digital input to control an LED. Learn about digital input, pull-down resistors, and conditional logic.',
    equipmentNeeded: 'arduino-kit',
    setupTime: '10 min',
    duration: '25 min',
    summary: {
      whatTheyLearn: 'Students learn how to read digital inputs using digitalRead(), understand pull-down resistors, and use if/else conditional statements.',
      instructions: [
        'Connect a pushbutton across the center gap of the breadboard.',
        'Wire one side of the button to 5V.',
        'Wire the other side to Arduino pin 2 AND through a 10k\u03A9 pull-down resistor to GND.',
        'Connect an LED with a 220\u03A9 resistor from pin 13 to GND.',
        'Write code: if digitalRead(2) == HIGH, turn LED on; else turn LED off.',
      ],
      expectedOutcome: 'The LED lights up when the button is pressed and turns off when released.',
    },
    experiment: {
      equipment: [
        { emoji: '\u{1F50C}', name: 'Arduino Uno R3' },
        { emoji: '\u{1F35E}', name: 'Breadboard' },
        { emoji: '\u{1F518}', name: '1x Pushbutton' },
        { emoji: '\u{1F4A1}', name: '1x Red LED' },
        { emoji: '\u{1F517}', name: '1x 220\u03A9 resistor' },
        { emoji: '\u{1F517}', name: '1x 10k\u03A9 pull-down resistor' },
        { emoji: '\u{1F50C}', name: 'Jumper wires' },
      ],
      observationsToRecord: [
        'Does the LED respond immediately to button presses?',
        'What happens without the pull-down resistor?',
        'Can you observe any "bouncing" (flickering) when pressing the button?',
        'Record button state and LED state for 10 presses.',
      ],
      theoryPoints: [
        'digitalRead() returns HIGH (1) or LOW (0) based on pin voltage',
        'A pull-down resistor ensures the pin reads LOW when the button is not pressed',
        'Without a pull-down resistor, the pin "floats" and gives random readings',
        'if/else statements allow code to make decisions based on input',
      ],
      realWorldConnections: [
        'Elevator buttons, doorbells, and keyboard keys all use the same principle',
        'Industrial emergency stop buttons use the same digital input concept',
        'Touch-screen buttons are a modern evolution of physical pushbuttons',
      ],
      formula: 'Pull-down: when button open, V_pin = 0V (LOW); when button pressed, V_pin = 5V (HIGH)',
    },
    questions: {
      mcq: [
        {
          text: 'What does digitalRead() return when a button connected with a pull-down resistor is NOT pressed?',
          options: ['HIGH', 'LOW', 'NULL', '0.5'],
          correctIndex: 1,
          explanation: 'With a pull-down resistor, the pin is connected to GND (0V) when the button is not pressed, so digitalRead() returns LOW.',
        },
        {
          text: 'What is the purpose of a pull-down resistor in a button circuit?',
          options: ['To make the button harder to press', 'To ensure the pin reads a definite LOW when the button is not pressed', 'To increase the LED brightness', 'To protect the Arduino from damage'],
          correctIndex: 1,
          explanation: 'A pull-down resistor connects the pin to GND, ensuring it reads LOW when the button is open. Without it, the pin floats and gives unpredictable readings.',
        },
        {
          text: 'Which Arduino function is used to read the state of a digital pin?',
          options: ['analogRead()', 'digitalRead()', 'digitalWrite()', 'Serial.read()'],
          correctIndex: 1,
          explanation: 'digitalRead(pin) reads the current state of a digital pin and returns either HIGH or LOW.',
        },
        {
          text: 'What does "floating pin" mean?',
          options: ['A pin connected to water', 'A pin not connected to a definite HIGH or LOW, giving unpredictable readings', 'A pin that moves physically', 'A pin set to maximum voltage'],
          correctIndex: 1,
          explanation: 'A floating pin has no defined voltage \u2014 it picks up electromagnetic noise and gives random HIGH/LOW readings.',
        },
        {
          text: 'In the code "if (buttonState == HIGH) { ... } else { ... }", what does the else block execute?',
          options: ['When the button is pressed', 'When the button is not pressed (LOW)', 'Always', 'Never'],
          correctIndex: 1,
          explanation: 'The else block runs when the if condition is false \u2014 in this case, when buttonState is not HIGH (i.e., it is LOW).',
        },
      ],
      discussion: [
        'What is button "debouncing" and why might you need it?',
        'How would you make the LED toggle (stay on after one press, off after the next)?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Digital Input', pct: 30 },
        { label: 'Pull-down Resistors', pct: 25 },
        { label: 'Conditional Logic', pct: 30 },
        { label: 'Circuit Design', pct: 15 },
      ],
      misconceptions: [
        'Students forget the pull-down resistor and get erratic behavior',
        'Students confuse INPUT and OUTPUT pin modes',
      ],
      hook: 'Every button you press \u2014 from elevator buttons to game controllers \u2014 uses the same digital input principle!',
      khanLinks: [
        { title: 'Intro to Circuits', url: 'https://www.khanacademy.org/science/physics/circuits-topic' },
      ],
    },
    dataTable: {
      headers: ['Press #', 'Button State', 'digitalRead() Value', 'LED State', 'Response Time'],
      rows: 10,
    },
    observations: [
      'Record button press and LED state for each press',
      'Test what happens without the pull-down resistor',
      'Note any flickering or delayed response',
    ],
    conclusion: 'Digital input with digitalRead() allows Arduino to respond to physical interactions. Pull-down resistors ensure reliable readings, and if/else logic enables decision-making in code.',
    ai: {
      opening: "Time to add interactivity! \u{1F518} You'll connect a button to control an LED \u2014 your first input/output project.",
      keywords: {
        setup: 'Button between 5V and pin 2. Add a 10k\u03A9 pull-down resistor from pin 2 to GND.',
        formula: 'Pull-down: V_pin = 0V when open, 5V when pressed. The 10k\u03A9 resistor safely limits current.',
        error: "If the LED behaves randomly, you're probably missing the pull-down resistor. The pin is 'floating'.",
        question: 'Can you add a second button that controls a second LED independently?',
        real: 'Every keyboard key, game controller button, and elevator button uses this exact concept.',
        result: 'Press the button: LED on. Release: LED off. Simple but powerful!',
        extend: 'Add debouncing code or make the button toggle the LED state.',
      },
      hint: 'The 10k\u03A9 pull-down resistor is essential! Without it, the pin will float and give random readings.',
      expected: 'LED turns on when button is pressed, off when released.',
    },
  },

  // ─── #504: Potentiometer & Analog Input ───
  {
    num: 504,
    cardEmoji: '\u{1F39B}\uFE0F',
    title: 'Potentiometer \u2014 Reading Analog Values',
    section: 'Fundamentals',
    desc: "Connect a potentiometer to Arduino's analog input and read variable voltage values from 0 to 1023.",
    setupTime: '10 min',
    equipmentNeeded: 'arduino-kit',
    duration: '25 min',
    summary: {
      whatTheyLearn: 'Students learn about analog input (0-1023), PWM output (0-255), the map() function, and voltage dividers.',
      instructions: [
        'Connect the potentiometer: left pin to GND, right pin to 5V, middle (wiper) to A0.',
        'Connect an LED with 220\u03A9 resistor from pin 9 (PWM) to GND.',
        'Write code to read A0 with analogRead(), map to 0-255, output with analogWrite().',
        'Open Serial Monitor to see the raw analog values as you turn the knob.',
        'Observe the LED brightness change as you rotate the potentiometer.',
      ],
      expectedOutcome: 'Turning the potentiometer smoothly controls LED brightness from off to full brightness.',
    },
    experiment: {
      equipment: [
        { emoji: '\u{1F50C}', name: 'Arduino Uno R3' },
        { emoji: '\u{1F35E}', name: 'Breadboard' },
        { emoji: '\u{1F39B}\uFE0F', name: '1x Potentiometer (10k\u03A9)' },
        { emoji: '\u{1F4A1}', name: '1x LED' },
        { emoji: '\u{1F517}', name: '1x 220\u03A9 resistor' },
        { emoji: '\u{1F50C}', name: 'Jumper wires' },
      ],
      observationsToRecord: [
        'What analog value do you read at minimum position?',
        'What analog value do you read at maximum position?',
        'At what analog value does the LED appear half brightness?',
        'Is the brightness change linear or non-linear?',
      ],
      theoryPoints: [
        'analogRead() converts voltage (0-5V) to a digital value (0-1023) using a 10-bit ADC',
        'analogWrite() uses PWM (0-255) to simulate analog output',
        'map(value, fromLow, fromHigh, toLow, toHigh) rescales one range to another',
        'A potentiometer is a variable voltage divider',
      ],
      realWorldConnections: [
        'Volume knobs on speakers and amplifiers',
        'Dimmer switches for room lighting',
        'Joystick controllers in gaming and robotics',
      ],
      formula: 'V_out = V_in \u00D7 (R2 / (R1 + R2)); Analog reading = V_pin \u00D7 1023 / 5V',
    },
    questions: {
      mcq: [
        {
          text: 'What range of values does analogRead() return?',
          options: ['0 to 100', '0 to 255', '0 to 1023', '0 to 5000'],
          correctIndex: 2,
          explanation: "Arduino's ADC (Analog-to-Digital Converter) has 10-bit resolution: 2\u00B9\u2070 = 1024 values, from 0 to 1023.",
        },
        {
          text: 'What does the map() function do?',
          options: ['Displays a geographic map', 'Converts a value from one range to another', 'Maps a pin to a specific voltage', 'Creates an array'],
          correctIndex: 1,
          explanation: 'map(value, fromLow, fromHigh, toLow, toHigh) rescales a number from one range to another. E.g., map(512, 0, 1023, 0, 255) returns ~127.',
        },
        {
          text: 'What is PWM used for with analogWrite()?',
          options: ['Reading analog sensors', 'Simulating analog output by rapidly switching digital on/off', 'Programming without mistakes', 'Connecting to Wi-Fi'],
          correctIndex: 1,
          explanation: 'PWM (Pulse Width Modulation) rapidly switches a pin between HIGH and LOW. The duty cycle determines the average voltage, simulating analog output.',
        },
        {
          text: 'What is a potentiometer?',
          options: ['A type of LED', 'A variable resistor that acts as a voltage divider', 'A temperature sensor', 'A type of motor'],
          correctIndex: 1,
          explanation: 'A potentiometer is a three-terminal variable resistor. Turning the knob changes the resistance ratio, varying the output voltage.',
        },
        {
          text: 'Why can analogWrite() only be used on certain Arduino pins (marked with ~)?',
          options: ['Other pins are broken', 'Only those pins support hardware PWM', 'Those pins have higher voltage', 'It works on all pins'],
          correctIndex: 1,
          explanation: 'Only pins with hardware PWM support (marked ~ on the board: 3, 5, 6, 9, 10, 11 on Uno) can use analogWrite().',
        },
      ],
      discussion: [
        'What is the difference between digital and analog signals?',
        'How could you use two potentiometers to control an RGB LED?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Analog Input (ADC)', pct: 30 },
        { label: 'PWM Output', pct: 25 },
        { label: 'map() Function', pct: 20 },
        { label: 'Voltage Dividers', pct: 25 },
      ],
      misconceptions: [
        'Students confuse analogRead range (0-1023) with analogWrite range (0-255)',
        'Students think analog pins can only be inputs (they can also be digital I/O)',
      ],
      hook: 'Volume knobs, dimmer switches, and joysticks all use potentiometers. Today you control an LED with one!',
      khanLinks: [
        { title: 'Voltage Dividers', url: 'https://www.khanacademy.org/science/physics/circuits-topic' },
      ],
    },
    dataTable: {
      headers: ['Pot Position (%)', 'Analog Reading', 'Mapped PWM (0-255)', 'LED Brightness', 'Calculated Voltage'],
      rows: 6,
    },
    observations: [
      'Record analog readings at different potentiometer positions',
      'Calculate the voltage from the analog reading',
      'Compare perceived brightness to PWM value (linear?)',
    ],
    conclusion: 'Analog input (ADC) converts continuous voltages to digital values. PWM simulates analog output. The map() function bridges different value ranges.',
    ai: {
      opening: "Let's go analog! \u{1F39B}\uFE0F You'll use a potentiometer to smoothly control LED brightness \u2014 your first analog project.",
      keywords: {
        setup: 'Pot: left=GND, right=5V, middle=A0. LED on pin 9 (PWM) with 220\u03A9 resistor.',
        formula: 'ADC: 10-bit = 0-1023. PWM: 8-bit = 0-255. Use map() to convert between them.',
        error: 'If brightness jumps instead of smooth change, make sure you\'re using a PWM pin (~) for the LED.',
        question: 'What happens if you use map(val, 0, 1023, 255, 0) instead? Try it!',
        real: 'Volume knobs, light dimmers, and game joysticks all use potentiometers.',
        result: 'Turning the potentiometer should smoothly change LED brightness from off to full.',
      },
      hint: 'Make sure to use a PWM-capable pin (marked with ~) for analogWrite().',
      expected: 'LED brightness changes smoothly as you turn the potentiometer knob.',
    },
  },

  // ─── #505: Temperature Sensor ───
  {
    num: 505,
    cardEmoji: '\u{1F321}\uFE0F',
    title: 'Temperature Sensor \u2014 Measuring Heat',
    section: 'Sensors',
    desc: 'Use the TMP36 temperature sensor to measure ambient temperature and display readings on the Serial Monitor.',
    equipmentNeeded: 'arduino-kit',
    setupTime: '10 min',
    duration: '30 min',
    summary: {
      whatTheyLearn: 'Students learn to read analog sensors, convert voltage to temperature, use the Serial Monitor for data logging, and understand sensor calibration.',
      instructions: [
        'Identify the TMP36 pins (flat side facing you): left=5V, middle=signal to A1, right=GND.',
        'Connect the TMP36 to the breadboard with the correct pin orientation.',
        'Write code to read A1, convert to voltage, then to temperature in \u00B0C.',
        'Open Serial Monitor at 9600 baud to see temperature readings.',
        'Test by touching the sensor to warm it up and blowing on it to cool it.',
      ],
      expectedOutcome: 'Serial Monitor displays room temperature (~20-25\u00B0C). Touching the sensor raises the reading; blowing cools it.',
    },
    experiment: {
      equipment: [
        { emoji: '\u{1F50C}', name: 'Arduino Uno R3' },
        { emoji: '\u{1F35E}', name: 'Breadboard' },
        { emoji: '\u{1F321}\uFE0F', name: '1x TMP36 temperature sensor' },
        { emoji: '\u{1F50C}', name: 'Jumper wires' },
      ],
      observationsToRecord: [
        'What is the room temperature reading?',
        'How much does it change when you touch the sensor?',
        'How quickly does it return to room temperature?',
        'Compare to a thermometer \u2014 how accurate is the TMP36?',
      ],
      theoryPoints: [
        'The TMP36 outputs a voltage proportional to temperature (10mV/\u00B0C with 500mV offset)',
        'ADC converts the sensor voltage to a digital value (0-1023)',
        'Temperature (\u00B0C) = (voltage - 0.5) \u00D7 100',
        'Serial.begin(9600) initializes serial communication at 9600 baud',
      ],
      realWorldConnections: [
        'Home thermostats use temperature sensors to control heating/cooling',
        'Weather stations collect temperature data for forecasts',
        'Server rooms monitor temperature to prevent overheating',
      ],
      formula: 'Temperature (\u00B0C) = (voltage - 0.5) \u00D7 100; voltage = analogRead(A1) \u00D7 5.0 / 1024.0',
    },
    questions: {
      mcq: [
        {
          text: 'What does the TMP36 sensor output?',
          options: ['A digital HIGH/LOW signal', 'A voltage proportional to temperature', 'A resistance that changes with temperature', 'A frequency signal'],
          correctIndex: 1,
          explanation: 'The TMP36 outputs an analog voltage that increases linearly with temperature: 10mV per degree Celsius, with a 500mV offset at 0\u00B0C.',
        },
        {
          text: 'If the TMP36 outputs 0.75V, what is the temperature?',
          options: ['7.5\u00B0C', '15\u00B0C', '25\u00B0C', '75\u00B0C'],
          correctIndex: 2,
          explanation: 'T = (0.75 - 0.5) \u00D7 100 = 0.25 \u00D7 100 = 25\u00B0C. Subtract the 500mV offset, then multiply by 100.',
        },
        {
          text: 'What does Serial.begin(9600) do?',
          options: ['Sets pin 9600 to HIGH', 'Initializes serial communication at 9600 bits per second', 'Creates 9600 variables', 'Waits 9600 milliseconds'],
          correctIndex: 1,
          explanation: 'Serial.begin(9600) starts serial communication between Arduino and computer at 9600 baud (bits per second), enabling the Serial Monitor.',
        },
        {
          text: 'Why do we multiply the analogRead value by 5.0/1024.0?',
          options: ['To convert digital reading back to voltage', 'To make the number bigger', 'To convert Celsius to Fahrenheit', 'To calibrate the sensor'],
          correctIndex: 0,
          explanation: 'The ADC maps 0-5V to 0-1023. Multiplying by 5.0/1024.0 converts the digital reading back to the actual voltage on the pin.',
        },
        {
          text: 'What is the resolution of the TMP36 when read by Arduino\'s 10-bit ADC?',
          options: ['1\u00B0C', '0.5\u00B0C', 'About 0.49\u00B0C', '0.01\u00B0C'],
          correctIndex: 2,
          explanation: 'Each ADC step = 5V/1024 = 4.88mV. Since TMP36 outputs 10mV/\u00B0C, resolution = 4.88mV / 10mV/\u00B0C \u2248 0.49\u00B0C.',
        },
      ],
      discussion: [
        'How would you build a temperature alarm that buzzes above 30\u00B0C?',
        'What factors could cause inaccurate temperature readings?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Analog Sensors', pct: 30 },
        { label: 'Voltage-to-Temperature Conversion', pct: 25 },
        { label: 'Serial Monitor', pct: 25 },
        { label: 'Data Logging', pct: 20 },
      ],
      misconceptions: [
        'Students may connect TMP36 backwards, which can damage it',
        'Students confuse ADC reading (0-1023) with voltage (0-5V)',
      ],
      hook: 'Your phone, your car, and even your fridge all have temperature sensors. Today you build your own digital thermometer!',
      khanLinks: [
        { title: 'Temperature and Heat', url: 'https://www.khanacademy.org/science/physics/thermodynamics' },
      ],
    },
    dataTable: {
      headers: ['Time', 'Raw ADC Reading', 'Voltage (V)', 'Temperature (\u00B0C)', 'Condition'],
      rows: 10,
    },
    observations: [
      'Record temperature readings over 10 minutes',
      'Note how quickly the sensor responds to temperature changes',
      'Compare readings to a reference thermometer',
    ],
    conclusion: 'Analog sensors convert physical quantities to voltage. Arduino\'s ADC converts voltage to digital values. Mathematical formulas then translate readings into meaningful units.',
    ai: {
      opening: "Let's measure temperature! \u{1F321}\uFE0F You'll build a digital thermometer using the TMP36 sensor and learn about analog-to-digital conversion.",
      keywords: {
        setup: 'TMP36 flat side facing you: left=5V, middle=A1, right=GND. Double-check orientation!',
        formula: 'voltage = analogRead(A1) * 5.0 / 1024.0; tempC = (voltage - 0.5) * 100;',
        error: 'If you get very wrong readings (like -40\u00B0C), the TMP36 may be connected backwards. Disconnect and check!',
        question: 'Try logging data every 2 seconds for 5 minutes. Can you detect when someone enters the room?',
        real: 'Home thermostats, weather stations, and industrial sensors all use similar principles.',
        result: 'You should see room temperature (about 20-25\u00B0C). Touch the sensor to see it rise.',
      },
      hint: 'CRITICAL: TMP36 pin order (flat side facing you) is: 5V | Signal | GND. Reversing it can damage the sensor!',
      expected: 'Serial Monitor shows temperature readings around 20-25\u00B0C for a typical room.',
    },
  },

  // ─── #506: Light Sensor ───
  {
    num: 506,
    cardEmoji: '\u2600\uFE0F',
    title: 'Light Sensor \u2014 Measuring Brightness',
    section: 'Sensors',
    desc: 'Build a light-sensing circuit using a photoresistor (LDR) and create an automatic night light.',
    equipmentNeeded: 'arduino-kit',
    setupTime: '10 min',
    duration: '30 min',
    summary: {
      whatTheyLearn: 'Students learn about light-dependent resistors, voltage dividers with variable resistance, threshold detection, and automatic control systems.',
      instructions: [
        'Create a voltage divider: LDR from 5V to A0, and 10k\u03A9 resistor from A0 to GND.',
        'Connect an LED with 220\u03A9 resistor from pin 9 (PWM) to GND.',
        'Read A0 in code and print light levels to Serial Monitor.',
        'Add threshold logic: if light level < 300, turn LED on; else turn off.',
        'Test by covering the LDR with your hand (dark) and exposing to light.',
      ],
      expectedOutcome: 'The LED automatically turns on in darkness and off in bright light, like a real night light.',
    },
    experiment: {
      equipment: [
        { emoji: '\u{1F50C}', name: 'Arduino Uno R3' },
        { emoji: '\u{1F35E}', name: 'Breadboard' },
        { emoji: '\u2600\uFE0F', name: '1x Photoresistor (LDR)' },
        { emoji: '\u{1F517}', name: '1x 10k\u03A9 resistor' },
        { emoji: '\u{1F4A1}', name: '1x LED' },
        { emoji: '\u{1F517}', name: '1x 220\u03A9 resistor' },
        { emoji: '\u{1F50C}', name: 'Jumper wires' },
      ],
      observationsToRecord: [
        'What analog value do you read in darkness?',
        'What value in normal room light?',
        'What value in bright sunlight?',
        'At what threshold value does your night light work best?',
      ],
      theoryPoints: [
        'An LDR decreases resistance as light increases',
        'The voltage divider formula determines the voltage at the analog pin',
        'Threshold detection compares a reading against a set value',
        'PWM can make brightness proportional to darkness level',
      ],
      realWorldConnections: [
        'Street lights that turn on at dusk',
        'Phone screen auto-brightness',
        'Solar garden lights',
      ],
      formula: 'V_out = 5V \u00D7 R_fixed / (R_LDR + R_fixed); R_LDR decreases as light increases',
    },
    questions: {
      mcq: [
        {
          text: 'How does an LDR (photoresistor) respond to light?',
          options: ['Resistance increases with more light', 'Resistance decreases with more light', 'Resistance stays constant', 'It generates voltage from light'],
          correctIndex: 1,
          explanation: 'An LDR (Light Dependent Resistor) has high resistance in darkness and low resistance in bright light.',
        },
        {
          text: 'In the LDR voltage divider circuit, what happens to the analog reading when you cover the sensor?',
          options: ['It increases to 1023', 'It decreases toward 0', 'It stays the same', 'It becomes negative'],
          correctIndex: 1,
          explanation: 'In darkness, LDR resistance is very high. More voltage drops across the LDR, leaving less at the analog pin, so the reading decreases.',
        },
        {
          text: 'What is "threshold detection" in a sensor system?',
          options: ['Finding the maximum sensor value', 'Comparing a sensor reading to a set value to trigger an action', 'Calibrating the sensor', 'Averaging multiple readings'],
          correctIndex: 1,
          explanation: 'Threshold detection checks if a sensor value is above or below a set point, triggering different actions (like turning a light on/off).',
        },
        {
          text: 'Why use a voltage divider with the LDR instead of connecting it directly?',
          options: ['LDRs are fragile and need protection', 'A voltage divider converts changing resistance into a measurable voltage change', 'Direct connection gives the same result', 'The Arduino requires exactly 2.5V'],
          correctIndex: 1,
          explanation: 'Arduino measures voltage, not resistance. The voltage divider converts the LDR\'s changing resistance into a proportional voltage change on the analog pin.',
        },
        {
          text: 'How would you make the LED brightness proportional to darkness (dimmer in light, brighter in dark)?',
          options: ['Use a bigger resistor', 'Use map() with analogWrite() to set PWM based on inverse of light level', 'Connect more LEDs', 'Use a different sensor'],
          correctIndex: 1,
          explanation: 'Map the light reading inversely: map(lightLevel, 0, 1023, 255, 0) or constrain the dark range. Use analogWrite() on a PWM pin for smooth dimming.',
        },
      ],
      discussion: [
        'How could you calibrate the threshold for different environments?',
        'What are the limitations of using an LDR for precise light measurement?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Light Sensors (LDR)', pct: 25 },
        { label: 'Voltage Dividers', pct: 25 },
        { label: 'Threshold Detection', pct: 25 },
        { label: 'Automatic Control', pct: 25 },
      ],
      misconceptions: [
        'Students may think the LDR generates electricity like a solar cell (it only changes resistance)',
        'Students confuse which way the analog reading changes with light level',
      ],
      hook: 'Ever wondered how street lights know when to turn on? You\'re about to build the same system!',
      khanLinks: [
        { title: 'Intro to Circuits', url: 'https://www.khanacademy.org/science/physics/circuits-topic' },
      ],
    },
    dataTable: {
      headers: ['Light Condition', 'Analog Reading', 'Calculated Voltage', 'LED State', 'Notes'],
      rows: 6,
    },
    observations: [
      'Record readings under different light conditions',
      'Determine the best threshold for your environment',
      'Test the automatic night light behavior',
    ],
    conclusion: 'Light sensors (LDRs) in a voltage divider convert light levels to measurable voltages. Threshold detection enables automatic control systems like night lights.',
    ai: {
      opening: "Let's build an automatic night light! \u2600\uFE0F You'll learn how light sensors work and create a system that responds to darkness.",
      keywords: {
        setup: 'LDR from 5V to A0. 10k\u03A9 from A0 to GND. LED on pin 9 with 220\u03A9 resistor.',
        formula: 'Voltage divider: V = 5V \u00D7 10k / (LDR + 10k). In dark, LDR is ~100k+, voltage is low.',
        error: 'If LED is always on or off, adjust your threshold. Print light values first to find the right range.',
        question: 'What threshold value works best in your classroom?',
        real: 'Street lights, phone auto-brightness, and solar garden lights all use this concept.',
        result: 'Cover the LDR: LED on. Uncover it: LED off. Your automatic night light works!',
      },
      hint: 'Start by printing the raw analog values to Serial Monitor to find the right threshold for your environment.',
      expected: 'LED turns on when LDR is in darkness, off in bright light.',
    },
  },

  // ─── #507: Ultrasonic Distance Sensor ───
  {
    num: 507,
    cardEmoji: '\u{1F4CF}',
    title: 'Ultrasonic Distance Sensor',
    section: 'Sensors',
    desc: 'Measure distances using sound waves with the ultrasonic sensor. Calculate speed of sound from your measurements.',
    equipmentNeeded: 'arduino-kit',
    setupTime: '10 min',
    duration: '30 min',
    summary: {
      whatTheyLearn: 'Students learn the physics of ultrasonic distance measurement, time-of-flight calculations, and the speed of sound.',
      instructions: [
        'Connect the ultrasonic sensor to the Science Carrier R3 board.',
        'Upload the distance measurement sketch.',
        'Open Serial Monitor to see real-time distance readings.',
        'Place objects at known distances (ruler) and compare to sensor readings.',
        'Record data for at least 8 different distances.',
      ],
      expectedOutcome: 'Accurate distance measurements (within \u00B12cm) displayed on Serial Monitor for objects 2cm to 400cm away.',
    },
    experiment: {
      equipment: [
        { emoji: '\u{1F50C}', name: 'Arduino Nano RP2040 Connect' },
        { emoji: '\u{1F4E1}', name: 'Science Carrier R3' },
        { emoji: '\u{1F4CF}', name: 'Ultrasonic Distance Sensor' },
        { emoji: '\u{1F4CF}', name: 'Ruler or measuring tape' },
        { emoji: '\u{1F50C}', name: 'USB-C cable' },
      ],
      observationsToRecord: [
        'How accurate is the sensor at short distances (< 10cm)?',
        'How accurate at long distances (> 100cm)?',
        'What is the maximum reliable distance?',
        'Does the angle of the object affect the reading?',
      ],
      theoryPoints: [
        'Ultrasonic sensors emit sound pulses (40kHz) and measure echo return time',
        'Speed of sound at 20\u00B0C \u2248 343 m/s (0.0343 cm/\u03BCs)',
        'Distance = (time \u00D7 speed) / 2 (divide by 2 because sound travels to object and back)',
        'pulseIn() measures the duration of a pulse on a pin',
      ],
      realWorldConnections: [
        'Car parking sensors use ultrasonic distance measurement',
        'Sonar in submarines for underwater mapping',
        'Robotic obstacle avoidance systems',
      ],
      formula: 'Distance (cm) = (time_\u03BCs \u00D7 0.0343) / 2; Speed of sound = 343 m/s at 20\u00B0C',
    },
    questions: {
      mcq: [
        {
          text: 'How does an ultrasonic distance sensor measure distance?',
          options: ['Using a laser beam', 'By measuring the time for a sound pulse to echo back', 'By detecting infrared radiation', 'By measuring magnetic fields'],
          correctIndex: 1,
          explanation: 'Ultrasonic sensors send a sound pulse and measure the time until the echo returns. Knowing the speed of sound, distance = (time \u00D7 speed) / 2.',
        },
        {
          text: 'Why do we divide the measured time by 2 in the distance formula?',
          options: ['To convert units', 'Because sound travels to the object AND back, so we need half the total time', 'To account for air resistance', 'To average two readings'],
          correctIndex: 1,
          explanation: 'The measured time is the round trip (to object and back). We only want the one-way distance, so we divide by 2.',
        },
        {
          text: 'What is the approximate speed of sound in air at room temperature?',
          options: ['100 m/s', '343 m/s', '3000 m/s', '300,000 km/s'],
          correctIndex: 1,
          explanation: 'Sound travels at approximately 343 meters per second in air at 20\u00B0C. This is much slower than light (300,000 km/s).',
        },
        {
          text: 'What Arduino function measures the duration of a pulse on a pin?',
          options: ['analogRead()', 'digitalRead()', 'pulseIn()', 'millis()'],
          correctIndex: 2,
          explanation: 'pulseIn(pin, value) waits for the pin to go to the specified value, times how long it stays there, and returns the duration in microseconds.',
        },
        {
          text: 'What factor can affect the accuracy of ultrasonic distance measurement?',
          options: ['Color of the object', 'Temperature of the air (changes speed of sound)', 'Brightness of the room', 'Size of the Arduino board'],
          correctIndex: 1,
          explanation: 'The speed of sound changes with air temperature (about +0.6 m/s per \u00B0C). Soft or angled surfaces can also affect echo accuracy.',
        },
      ],
      discussion: [
        'How could you use this sensor to build a parking assist system?',
        'Why might the sensor give inaccurate readings for soft or angled surfaces?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Speed of Sound', pct: 25 },
        { label: 'Time-of-Flight', pct: 30 },
        { label: 'Echo Detection', pct: 25 },
        { label: 'Measurement Accuracy', pct: 20 },
      ],
      misconceptions: [
        'Students may think ultrasonic sensors use light or lasers',
        'Students forget to divide by 2 for the round-trip time',
      ],
      hook: 'Your car\'s parking sensors use the same physics you\'ll explore today \u2014 measuring distance with sound!',
      khanLinks: [
        { title: 'Sound Waves', url: 'https://www.khanacademy.org/science/physics/mechanical-waves-and-sound' },
      ],
    },
    dataTable: {
      headers: ['Actual Distance (cm)', 'Sensor Reading (cm)', 'Error (cm)', '% Error', 'Surface Type'],
      rows: 8,
    },
    observations: [
      'Compare sensor readings to ruler measurements at 8 different distances',
      'Calculate percentage error for each measurement',
      'Test with different surface types (hard, soft, angled)',
    ],
    conclusion: 'Ultrasonic sensors use the speed of sound and time-of-flight to calculate distance. Accuracy depends on temperature, surface type, and angle.',
    ai: {
      opening: "Let's measure distance with sound! \u{1F4CF} You'll learn how sonar works \u2014 the same technology used in submarines and parking sensors.",
      keywords: {
        setup: 'Connect the ultrasonic sensor to the Science Carrier R3. The sensor faces outward.',
        formula: 'distance = (pulseIn_time * 0.0343) / 2. Divide by 2 for round trip!',
        error: 'If readings are zero, check sensor connections. If inconsistent, ensure the target is flat and perpendicular.',
        question: 'At what distance does the sensor become unreliable? Why?',
        real: 'Cars, submarines, robots, and even bats use the same echo-location principle.',
        result: 'You should see accurate distances (\u00B12cm) for objects 2-400cm away.',
      },
      hint: 'Make sure the sensor is pointed directly at a flat surface for the most accurate readings.',
      expected: 'Distance measurements in cm displayed on Serial Monitor, accurate to within 2cm.',
    },
  },

  // ─── #508: Environmental Monitoring Station ───
  {
    num: 508,
    cardEmoji: '\u{1F324}\uFE0F',
    title: 'Environmental Monitoring Station',
    section: 'Sensors',
    desc: 'Use the Science Kit R3 carrier board to simultaneously read temperature, humidity, pressure, and light \u2014 building a weather station.',
    equipmentNeeded: 'arduino-kit',
    setupTime: '5 min',
    duration: '35 min',
    summary: {
      whatTheyLearn: 'Students learn multi-sensor data collection, environmental monitoring, data correlation, and the Arduino Science Journal app.',
      instructions: [
        'Connect the Arduino Nano RP2040 Connect to the Science Carrier R3.',
        'Connect via USB-C to your computer.',
        'Upload the environmental monitoring sketch (reads all onboard sensors).',
        'Open Serial Monitor or the Arduino Science Journal app.',
        'Record readings every 2 minutes for 20 minutes.',
      ],
      expectedOutcome: 'A complete environmental data log showing temperature, humidity, pressure, and light levels changing over time.',
    },
    experiment: {
      equipment: [
        { emoji: '\u{1F50C}', name: 'Arduino Nano RP2040 Connect' },
        { emoji: '\u{1F4E1}', name: 'Science Carrier R3 (embedded sensors)' },
        { emoji: '\u{1F50C}', name: 'USB-C cable' },
      ],
      observationsToRecord: [
        'What are the baseline readings for each sensor?',
        'How do readings change when you breathe near the sensors?',
        'Does opening a window change the pressure reading?',
        'How do the four measurements correlate with each other?',
      ],
      theoryPoints: [
        'Temperature affects humidity capacity (warm air holds more moisture)',
        'Atmospheric pressure at sea level \u2248 1013.25 hPa',
        'Pressure decreases with altitude (~12 hPa per 100m)',
        'Light levels are measured in lux (0=dark, 100,000=direct sunlight)',
      ],
      realWorldConnections: [
        'Weather stations collect this exact data for forecasting',
        'Smart buildings monitor indoor air quality',
        'Agricultural sensors optimize growing conditions',
      ],
      formula: 'Barometric formula: P = P\u2080 \u00D7 e^(-Mgh/RT); Relative humidity = (actual vapor / max vapor at temp) \u00D7 100%',
    },
    questions: {
      mcq: [
        {
          text: 'What is the standard atmospheric pressure at sea level?',
          options: ['100 hPa', '500 hPa', '1013.25 hPa', '5000 hPa'],
          correctIndex: 2,
          explanation: 'Standard atmospheric pressure at sea level is 1013.25 hectopascals (hPa), also known as 1 atmosphere or 101.325 kPa.',
        },
        {
          text: 'What happens to atmospheric pressure as you go higher in altitude?',
          options: ['It increases', 'It decreases', 'It stays the same', 'It fluctuates randomly'],
          correctIndex: 1,
          explanation: 'Atmospheric pressure decreases with altitude because there is less air above you pressing down. It drops about 12 hPa per 100m.',
        },
        {
          text: 'What does "relative humidity" measure?',
          options: ['The total amount of water in the air', 'The percentage of moisture in the air relative to the maximum it can hold at that temperature', 'The temperature of water vapor', 'The speed of evaporation'],
          correctIndex: 1,
          explanation: 'Relative humidity is the ratio of actual water vapor in the air to the maximum amount it could hold at the current temperature, expressed as a percentage.',
        },
        {
          text: 'Why is it useful to measure multiple environmental parameters simultaneously?',
          options: ['It makes the project look more complex', 'Parameters are related and together give a complete picture of conditions', 'Multiple sensors are cheaper than one', 'It is not useful'],
          correctIndex: 1,
          explanation: 'Environmental parameters are interconnected. Temperature affects humidity, pressure indicates weather changes, and light affects biological processes. Together they tell a complete story.',
        },
        {
          text: 'What unit is light intensity typically measured in?',
          options: ['Watts', 'Decibels', 'Lux', 'Ohms'],
          correctIndex: 2,
          explanation: 'Light intensity is measured in lux. A dark room might be 10 lux, an office 500 lux, and direct sunlight 100,000 lux.',
        },
      ],
      discussion: [
        'How could this station help a farmer manage crops?',
        'What patterns would you expect in a 24-hour monitoring period?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Multi-Sensor Data', pct: 25 },
        { label: 'Atmospheric Science', pct: 25 },
        { label: 'Data Logging', pct: 25 },
        { label: 'Data Analysis', pct: 25 },
      ],
      misconceptions: [
        'Students may think all sensors need external wiring (carrier board has embedded sensors)',
        'Students confuse absolute and relative humidity',
      ],
      hook: 'Weather forecasters use the same types of sensors. Today you build your own weather station!',
      khanLinks: [
        { title: 'Weather and Climate', url: 'https://www.khanacademy.org/science/earth-science' },
      ],
    },
    dataTable: {
      headers: ['Time', 'Temperature (\u00B0C)', 'Humidity (%)', 'Pressure (hPa)', 'Light (lux)'],
      rows: 10,
    },
    observations: [
      'Record all four sensor readings every 2 minutes for 20 minutes',
      'Look for correlations between readings',
      'Test how breathing near the sensor changes humidity and temperature',
    ],
    conclusion: 'Multi-sensor environmental monitoring reveals how physical parameters are interconnected. Temperature, humidity, pressure, and light together provide a complete picture of environmental conditions.',
    ai: {
      opening: "Let's build a weather station! \u{1F324}\uFE0F The Science Kit carrier board has 4 environmental sensors built in \u2014 no extra wiring needed.",
      keywords: {
        setup: 'Just connect the Nano RP2040 to the Science Carrier R3 and plug in USB-C. All sensors are on the board!',
        formula: 'Standard pressure: 1013.25 hPa. Humidity: % of max moisture air can hold at current temp.',
        error: 'If readings seem off, make sure the carrier board is properly seated on the Nano.',
        question: 'What happens to all four readings when you breathe on the sensors?',
        real: 'Professional weather stations, smart buildings, and agricultural IoT systems use these same sensors.',
        result: 'You should see temperature, humidity, pressure, and light values updating in real time.',
      },
      hint: 'The Science Carrier R3 has all sensors built in \u2014 no breadboard wiring needed for this experiment!',
      expected: 'Four sensor readings displayed: temp (~20-25\u00B0C), humidity (30-70%), pressure (~1013 hPa), light (varies).',
    },
  },

  // ─── #509: Servo Motor Control ───
  {
    num: 509,
    cardEmoji: '\u{1F9BE}',
    title: 'Servo Motor \u2014 Precision Angle Control',
    section: 'Actuators',
    desc: 'Control a servo motor to rotate to precise angles (0-180\u00B0) using a potentiometer as input.',
    equipmentNeeded: 'arduino-kit',
    setupTime: '10 min',
    duration: '30 min',
    summary: {
      whatTheyLearn: 'Students learn servo motor control using the Servo library, PWM signals for angle positioning, and input-to-output mapping.',
      instructions: [
        'Connect the servo motor: red wire=5V, brown/black=GND, orange/yellow signal=pin 9.',
        'Connect a potentiometer: left=GND, right=5V, middle=A0.',
        'Include the Servo library and create a Servo object.',
        'Read potentiometer (0-1023), map to angle (0-180), write to servo.',
        'Turn the potentiometer knob and watch the servo follow.',
      ],
      expectedOutcome: 'The servo motor follows the potentiometer position, rotating smoothly from 0\u00B0 to 180\u00B0.',
    },
    experiment: {
      equipment: [
        { emoji: '\u{1F50C}', name: 'Arduino Uno R3' },
        { emoji: '\u{1F35E}', name: 'Breadboard' },
        { emoji: '\u{1F9BE}', name: '1x Servo motor' },
        { emoji: '\u{1F39B}\uFE0F', name: '1x Potentiometer (10k\u03A9)' },
        { emoji: '\u{1F50C}', name: 'Jumper wires' },
      ],
      observationsToRecord: [
        'Does the servo move the full 0-180\u00B0 range?',
        'Is the movement smooth or jerky?',
        'Does the servo hold its position when you stop turning?',
        'What happens at the extreme angles (0\u00B0 and 180\u00B0)?',
      ],
      theoryPoints: [
        'Servos contain a motor, gear train, and position feedback circuit',
        'PWM signal width determines angle: 1ms=0\u00B0, 1.5ms=90\u00B0, 2ms=180\u00B0',
        'The Servo library handles PWM timing automatically',
        'Servo.write(angle) sets position; Servo.attach(pin) connects to a pin',
      ],
      realWorldConnections: [
        'Robotic arms in manufacturing use high-precision servos',
        'RC cars and planes use servos for steering',
        'Camera gimbals stabilize video using fast servos',
      ],
      formula: 'angle = map(analogRead(A0), 0, 1023, 0, 180); PWM: 1ms=0\u00B0, 1.5ms=90\u00B0, 2ms=180\u00B0',
    },
    questions: {
      mcq: [
        {
          text: 'What is the main difference between a servo motor and a regular DC motor?',
          options: ['Servos are bigger', 'Servos can be controlled to specific angles; DC motors just spin', 'DC motors are more powerful', 'There is no difference'],
          correctIndex: 1,
          explanation: 'A servo can be positioned to a specific angle (0-180\u00B0) using built-in position feedback. A regular DC motor just spins continuously.',
        },
        {
          text: 'What Arduino library is needed to control a servo?',
          options: ['Motor.h', 'Servo.h', 'PWM.h', 'No library needed'],
          correctIndex: 1,
          explanation: 'The Servo library (Servo.h) provides simple functions like attach(), write(), and read() for controlling servo motors.',
        },
        {
          text: 'What does Servo.write(90) do?',
          options: ['Spins the servo at 90 RPM', 'Moves the servo to the 90-degree position (center)', 'Sets the speed to 90%', 'Waits 90 milliseconds'],
          correctIndex: 1,
          explanation: 'Servo.write(90) moves the servo to the center position (90\u00B0 out of the 0-180\u00B0 range).',
        },
        {
          text: 'How does a servo know its current position?',
          options: ['It uses GPS', 'An internal potentiometer provides position feedback', 'It counts the number of rotations', 'It uses a camera'],
          correctIndex: 1,
          explanation: 'Servos have an internal potentiometer attached to the output shaft that provides position feedback to the control circuit.',
        },
        {
          text: 'What is the typical angle range of a standard hobby servo?',
          options: ['0-90\u00B0', '0-180\u00B0', '0-360\u00B0', '0-720\u00B0'],
          correctIndex: 1,
          explanation: 'Standard hobby servos have a 0-180\u00B0 range. Special continuous rotation servos can spin 360\u00B0 but lose precise angle control.',
        },
      ],
      discussion: [
        'How would you build a 2-axis robotic arm using two servos?',
        'What is the difference between a standard servo and a continuous rotation servo?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Servo Control', pct: 30 },
        { label: 'PWM Signals', pct: 25 },
        { label: 'Input-Output Mapping', pct: 25 },
        { label: 'Mechanical Linkage', pct: 20 },
      ],
      misconceptions: [
        'Students may think servos can rotate continuously like DC motors',
        'Students confuse the servo signal wire with power wires',
      ],
      hook: 'Robotic arms, RC cars, and camera gimbals all use servos. Today you control one with a dial!',
      khanLinks: [],
    },
    dataTable: {
      headers: ['Pot Position (%)', 'Analog Reading', 'Mapped Angle (\u00B0)', 'Actual Servo Position', 'Notes'],
      rows: 6,
    },
    observations: [
      'Record potentiometer readings and corresponding servo angles',
      'Test the full range of motion (0-180\u00B0)',
      'Note any dead zones or jitter at extreme positions',
    ],
    conclusion: 'Servos provide precise angle control using PWM signals. The Servo library simplifies control, and map() converts input ranges to output angles.',
    ai: {
      opening: "Let's control a servo motor! \u{1F9BE} You'll turn a potentiometer knob and the servo follows \u2014 just like a robotic joint.",
      keywords: {
        setup: 'Servo: red=5V, black/brown=GND, signal=pin 9. Potentiometer: left=GND, right=5V, middle=A0.',
        formula: 'angle = map(analogRead(A0), 0, 1023, 0, 180). PWM pulse: 1ms=0\u00B0, 2ms=180\u00B0.',
        error: 'If the servo jitters, it may need more power. Try powering it from an external 5V source.',
        question: 'Can you program the servo to sweep back and forth automatically without the potentiometer?',
        real: 'Robotic arms, RC vehicles, and camera stabilizers all use servos for precise positioning.',
        result: 'Turn the pot: servo follows from 0\u00B0 to 180\u00B0. The mapping should feel smooth and responsive.',
      },
      hint: 'Make sure to include #include <Servo.h> at the top of your sketch and call myServo.attach(9) in setup().',
      expected: 'Servo smoothly follows potentiometer from 0\u00B0 to 180\u00B0.',
    },
  },

  // ─── #510: DC Motor Speed Control ───
  {
    num: 510,
    cardEmoji: '\u{1F504}',
    title: 'DC Motor Speed Control',
    section: 'Actuators',
    desc: 'Control the speed and direction of a DC motor using the H-bridge (L293D) motor driver IC.',
    equipmentNeeded: 'arduino-kit',
    setupTime: '15 min',
    duration: '35 min',
    summary: {
      whatTheyLearn: 'Students learn about H-bridge motor drivers, PWM speed control, direction reversal, and flyback diode protection.',
      instructions: [
        'Place the L293D IC on the breadboard (notch facing up).',
        'Wire L293D: pin 1 (enable) to Arduino pin 3 (PWM), pins 2,7 to Arduino pins 4,5, pin 8 to 9V, pin 16 to 5V.',
        'Connect the DC motor to L293D output pins 3 and 6.',
        'Connect a potentiometer to A0 for speed control.',
        'Write code: direction via pins 4/5, speed via PWM on pin 3.',
      ],
      expectedOutcome: 'The DC motor speed is controlled by the potentiometer, and direction can be reversed by changing pin states.',
    },
    experiment: {
      equipment: [
        { emoji: '\u{1F50C}', name: 'Arduino Uno R3' },
        { emoji: '\u{1F35E}', name: 'Breadboard' },
        { emoji: '\u{1F504}', name: '1x DC motor' },
        { emoji: '\u{1F4E6}', name: '1x L293D H-bridge IC' },
        { emoji: '\u{1F39B}\uFE0F', name: '1x Potentiometer' },
        { emoji: '\u{1F517}', name: '1x 1N4007 diode' },
        { emoji: '\u{1F50B}', name: '9V battery snap' },
        { emoji: '\u{1F50C}', name: 'Jumper wires' },
      ],
      observationsToRecord: [
        'At what PWM value does the motor start spinning?',
        'Is speed proportional to PWM duty cycle?',
        'Does direction reversal work smoothly?',
        'What happens if you try to reverse while spinning fast?',
      ],
      theoryPoints: [
        'An H-bridge uses 4 switches to control motor direction',
        'PWM duty cycle controls the effective voltage and thus speed',
        'Flyback diodes protect against back-EMF from the motor',
        'The L293D IC contains two H-bridges for driving up to 2 motors',
      ],
      realWorldConnections: [
        'Electric vehicles use H-bridges for motor control',
        'Industrial robots use motor drivers for precise movement',
        'Drones use motor speed control for stability and direction',
      ],
      formula: 'Speed \u221D Duty cycle; H-bridge: IN1=H,IN2=L \u2192 Forward; IN1=L,IN2=H \u2192 Reverse',
    },
    questions: {
      mcq: [
        {
          text: 'What is an H-bridge used for?',
          options: ['Measuring temperature', 'Controlling the direction of a DC motor', 'Reading analog sensors', 'Connecting to Wi-Fi'],
          correctIndex: 1,
          explanation: 'An H-bridge is a circuit that allows you to control both the direction and speed of a DC motor by switching the polarity of the voltage applied to it.',
        },
        {
          text: 'What is a flyback diode used for in a motor circuit?',
          options: ['To make the motor spin faster', 'To protect the circuit from voltage spikes when the motor stops', 'To measure motor speed', 'To connect multiple motors'],
          correctIndex: 1,
          explanation: 'When a motor stops, it generates a back-EMF voltage spike. A flyback diode safely absorbs this spike, protecting the H-bridge and Arduino.',
        },
        {
          text: 'How does PWM control motor speed?',
          options: ['By changing the voltage', 'By rapidly switching power on and off, with the ratio determining effective power', 'By adding more resistance', 'By changing the motor wiring'],
          correctIndex: 1,
          explanation: 'PWM rapidly switches the motor power on and off. A 50% duty cycle means power is on half the time, giving half speed. 100% = full speed.',
        },
        {
          text: 'In the L293D, what pin controls the motor speed?',
          options: ['Input pins (IN1, IN2)', 'Enable pin (EN)', 'Output pins (OUT1, OUT2)', 'Ground pin'],
          correctIndex: 1,
          explanation: 'The enable pin (EN) controls whether the motor runs. Using PWM on this pin controls the speed, while IN1/IN2 control direction.',
        },
        {
          text: 'Why does the motor need a separate power supply (9V) from the Arduino (5V)?',
          options: ['Motors are more expensive', 'Motors draw too much current for the Arduino to supply safely', 'The Arduino only works at 5V', '9V makes the motor quieter'],
          correctIndex: 1,
          explanation: 'DC motors can draw hundreds of milliamps or more, exceeding what Arduino can safely provide. A separate supply protects the Arduino and provides enough power.',
        },
      ],
      discussion: [
        'How would you control two motors independently for a robot?',
        'What safety precautions are important when working with motors?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'H-Bridge Operation', pct: 30 },
        { label: 'PWM Speed Control', pct: 25 },
        { label: 'Motor Drivers', pct: 25 },
        { label: 'Circuit Protection', pct: 20 },
      ],
      misconceptions: [
        'Students may try to drive motors directly from Arduino pins (can damage the board)',
        'Students confuse direction control pins with speed control pin',
      ],
      hook: 'Electric cars, robots, and drones all use motor controllers. Today you build one from scratch!',
      khanLinks: [],
    },
    dataTable: {
      headers: ['Pot Value', 'PWM Duty Cycle (%)', 'Direction', 'Motor Speed (estimate)', 'Notes'],
      rows: 8,
    },
    observations: [
      'Record PWM values and observed motor speeds',
      'Find the minimum PWM value that makes the motor spin',
      'Test direction reversal and note any issues',
    ],
    conclusion: 'H-bridges enable bidirectional DC motor control. PWM varies speed, direction pins control rotation direction, and flyback diodes protect the circuit.',
    ai: {
      opening: "Let's spin a motor! \u{1F504} You'll use an H-bridge to control both speed and direction \u2014 the foundation of all robotics.",
      keywords: {
        setup: 'L293D: enable on pin 3 (PWM), direction on pins 4,5, motor power from 9V battery. Follow the wiring diagram carefully!',
        formula: 'Speed = PWM duty cycle. Direction: IN1=H,IN2=L forward; IN1=L,IN2=H reverse; both LOW = stop.',
        error: 'Motor not spinning? Check: 1) 9V battery connected, 2) Enable pin has PWM, 3) IN1/IN2 are set correctly.',
        question: 'What minimum PWM value starts the motor moving? Why is it not 0?',
        real: 'Electric vehicles, drones, and industrial robots all use H-bridge motor drivers.',
        result: 'Motor speed follows the potentiometer. You can reverse direction by changing IN1/IN2 states.',
      },
      hint: 'NEVER connect a motor directly to Arduino pins! Always use a motor driver like the L293D.',
      expected: 'Motor speed controlled by potentiometer, with ability to reverse direction.',
    },
  },

  // ─── #511: Piezo Buzzer ───
  {
    num: 511,
    cardEmoji: '\u{1F3B5}',
    title: 'Piezo Buzzer \u2014 Making Music with Code',
    section: 'Actuators',
    desc: 'Generate different musical tones using a piezo buzzer and program a simple melody.',
    equipmentNeeded: 'arduino-kit',
    setupTime: '5 min',
    duration: '25 min',
    summary: {
      whatTheyLearn: 'Students learn about sound waves, frequency and pitch relationship, the tone() function, and using arrays to store melodies.',
      instructions: [
        'Connect one leg of the piezo buzzer to Arduino pin 8.',
        'Connect the other leg to GND.',
        'Use tone(8, frequency, duration) to play individual notes.',
        'Create arrays for notes and durations to play a melody.',
        'Upload and listen to your programmed melody!',
      ],
      expectedOutcome: 'The buzzer plays individual tones and a recognizable melody (e.g., "Twinkle Twinkle Little Star").',
    },
    experiment: {
      equipment: [
        { emoji: '\u{1F50C}', name: 'Arduino Uno R3' },
        { emoji: '\u{1F35E}', name: 'Breadboard' },
        { emoji: '\u{1F3B5}', name: '1x Piezo buzzer' },
        { emoji: '\u{1F50C}', name: 'Jumper wires' },
      ],
      observationsToRecord: [
        'What frequency range can you hear?',
        'Which frequencies sound high vs. low?',
        'Can you identify the musical notes by ear?',
        'How does duration affect the perceived rhythm?',
      ],
      theoryPoints: [
        'Sound is produced by vibrations at specific frequencies',
        'Higher frequency = higher pitch. A4 = 440 Hz is the standard tuning reference',
        'tone(pin, frequency, duration) generates a square wave at the given frequency',
        'Musical notes correspond to specific frequencies: C4=262Hz, D4=294Hz, E4=330Hz, etc.',
      ],
      realWorldConnections: [
        'Musical instruments produce specific frequencies for each note',
        'Alarm systems use different tones for different alerts',
        'Electronic greeting cards use similar buzzer technology',
      ],
      formula: 'Musical notes: C4=262Hz, D4=294Hz, E4=330Hz, F4=349Hz, G4=392Hz, A4=440Hz, B4=494Hz, C5=523Hz',
    },
    questions: {
      mcq: [
        {
          text: 'What determines the pitch of a sound?',
          options: ['Volume', 'Duration', 'Frequency', 'Color'],
          correctIndex: 2,
          explanation: 'Pitch is determined by frequency. Higher frequency = higher pitch. For example, A4 = 440 Hz, and A5 = 880 Hz (one octave higher = double the frequency).',
        },
        {
          text: 'What is the standard tuning frequency for the note A4?',
          options: ['220 Hz', '440 Hz', '880 Hz', '1000 Hz'],
          correctIndex: 1,
          explanation: '440 Hz is the internationally accepted standard for A4 (A above middle C). It is used as the reference for tuning musical instruments.',
        },
        {
          text: 'What does the Arduino function tone(8, 440, 500) do?',
          options: ['Reads pin 8 for 440ms', 'Plays a 440Hz tone on pin 8 for 500 milliseconds', 'Sets pin 8 to 440 volts', 'Waits 500 seconds'],
          correctIndex: 1,
          explanation: 'tone(pin, frequency, duration) plays a square wave at the specified frequency on the given pin for the specified duration in milliseconds.',
        },
        {
          text: 'What is the relationship between an octave and frequency?',
          options: ['Same frequency', 'Double the frequency', 'Triple the frequency', 'Half the frequency'],
          correctIndex: 1,
          explanation: 'Going up one octave doubles the frequency. A4=440Hz, A5=880Hz. Going down one octave halves it: A3=220Hz.',
        },
        {
          text: 'What data structure is useful for storing a sequence of musical notes in code?',
          options: ['A single variable', 'An array', 'A resistor', 'A loop counter'],
          correctIndex: 1,
          explanation: 'Arrays store sequences of values. A melody needs an array of note frequencies and an array of note durations.',
        },
      ],
      discussion: [
        'Why does a square wave from a buzzer sound different from the same note on a piano?',
        'How would you add a button to play different melodies?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Sound & Frequency', pct: 30 },
        { label: 'tone() Function', pct: 25 },
        { label: 'Arrays & Sequences', pct: 25 },
        { label: 'Musical Theory', pct: 20 },
      ],
      misconceptions: [
        'Students confuse volume (amplitude) with pitch (frequency)',
        'Students may not realize noTone() is needed to stop a continuous tone',
      ],
      hook: "Music is math! Every note is a specific frequency. Today you'll program your Arduino to play a melody!",
      khanLinks: [
        { title: 'Sound Waves', url: 'https://www.khanacademy.org/science/physics/mechanical-waves-and-sound' },
      ],
    },
    dataTable: {
      headers: ['Note Name', 'Frequency (Hz)', 'Duration (ms)', 'Perceived Pitch', 'Notes'],
      rows: 8,
    },
    observations: [
      'Record different note frequencies and how they sound',
      'Program and play a simple melody',
      'Experiment with different rhythms by changing durations',
    ],
    conclusion: 'Sound is produced by vibrations at specific frequencies. The tone() function generates these frequencies, and arrays organize notes into melodies.',
    ai: {
      opening: "Let's make music with code! \u{1F3B5} You'll program your Arduino to play melodies using a piezo buzzer.",
      keywords: {
        setup: 'Connect the buzzer between pin 8 and GND. That\'s it \u2014 simplest wiring yet!',
        formula: 'Note frequencies: C=262, D=294, E=330, F=349, G=392, A=440, B=494, C5=523 Hz.',
        error: 'No sound? Check buzzer polarity (some have + and - legs). Try a different pin.',
        question: 'Can you program "Happy Birthday" or your favorite song? Look up the note frequencies!',
        real: 'Doorbells, alarm clocks, and electronic toys all use piezo buzzers.',
        result: 'You should hear clear musical tones. Different frequencies = different notes!',
      },
      hint: 'Use noTone(pin) between notes to create clear separation. Without it, notes blend together.',
      expected: 'Clear musical tones from the buzzer, eventually playing a recognizable melody.',
    },
  },

  // ─── #512: Smart Night Light (Mini-Project) ───
  {
    num: 512,
    cardEmoji: '\u{1F319}',
    title: 'Smart Night Light \u2014 Combining Sensors & Actuators',
    section: 'Projects',
    desc: 'Build an automatic night light that turns on when dark, adjusts brightness based on ambient light, and plays a tone when activated.',
    equipmentNeeded: 'arduino-kit',
    setupTime: '15 min',
    duration: '40 min',
    summary: {
      whatTheyLearn: 'Students combine everything they learned \u2014 sensors, actuators, analog/digital I/O \u2014 into a complete interactive system.',
      instructions: [
        'Build the LDR voltage divider (A0) and potentiometer sensitivity control (A1).',
        'Connect the RGB LED to pins 9, 10, 11 (PWM) with 220\u03A9 resistors.',
        'Connect the piezo buzzer to pin 8.',
        'Write code: read LDR, compare to threshold (set by pot), control LED brightness and color, play activation tone.',
        'Test in different lighting conditions.',
      ],
      expectedOutcome: 'A fully automatic night light: LED fades on when dark (brightness proportional to darkness), plays a soft tone on activation, with adjustable sensitivity.',
    },
    experiment: {
      equipment: [
        { emoji: '\u{1F50C}', name: 'Arduino Uno R3' },
        { emoji: '\u{1F35E}', name: 'Breadboard' },
        { emoji: '\u2600\uFE0F', name: '1x Photoresistor (LDR)' },
        { emoji: '\u{1F517}', name: '1x 10k\u03A9 resistor' },
        { emoji: '\u{1F308}', name: '1x RGB LED' },
        { emoji: '\u{1F517}', name: '3x 220\u03A9 resistors' },
        { emoji: '\u{1F3B5}', name: '1x Piezo buzzer' },
        { emoji: '\u{1F39B}\uFE0F', name: '1x Potentiometer (sensitivity)' },
        { emoji: '\u{1F50C}', name: 'Jumper wires' },
      ],
      observationsToRecord: [
        'At what light level does the night light activate?',
        'Does the brightness respond proportionally to darkness?',
        'Does the activation tone play correctly?',
        'Can you adjust sensitivity with the potentiometer?',
      ],
      theoryPoints: [
        'System integration combines multiple inputs and outputs',
        'Threshold with hysteresis prevents rapid on/off switching',
        'PWM brightness allows smooth dimming proportional to darkness',
        'User-adjustable parameters (via potentiometer) make the system adaptable',
      ],
      realWorldConnections: [
        'Commercial night lights use the same sensor-actuator principle',
        'Smart home devices combine multiple sensors for automation',
        'IoT systems integrate sensing, processing, and actuation',
      ],
      formula: 'brightness = map(lightLevel, threshold, 0, 0, 255); threshold = map(analogRead(A1), 0, 1023, 100, 900)',
    },
    questions: {
      mcq: [
        {
          text: 'What is "system integration" in engineering?',
          options: ['Using only one component', 'Combining multiple components to work together as a complete system', 'Making the system as complex as possible', 'Testing each part separately'],
          correctIndex: 1,
          explanation: 'System integration means combining sensors, actuators, and code into a cohesive system where all parts work together toward a common goal.',
        },
        {
          text: 'Why add a potentiometer to adjust the night light sensitivity?',
          options: ['It looks more professional', 'It allows the user to adapt the threshold to different environments', 'Potentiometers are required for all circuits', 'It increases the LED brightness'],
          correctIndex: 1,
          explanation: 'Different rooms have different ambient light levels. A user-adjustable threshold lets the night light work correctly in any environment.',
        },
        {
          text: 'What is "hysteresis" and why is it useful in a night light?',
          options: ['A type of LED', 'A gap between the on and off thresholds that prevents rapid flickering', 'A sound effect', 'A type of resistor'],
          correctIndex: 1,
          explanation: 'Hysteresis adds a buffer between activation and deactivation thresholds. This prevents the light from rapidly flickering on and off when light levels hover near the threshold.',
        },
        {
          text: 'How does the RGB LED create different colors?',
          options: ['By using different voltages', 'By mixing red, green, and blue light at different intensities using PWM', 'By changing the LED temperature', 'By using color filters'],
          correctIndex: 1,
          explanation: 'An RGB LED has three separate LEDs (red, green, blue) inside. By controlling the brightness of each with PWM, you can mix any color.',
        },
        {
          text: 'What is the most important first step when debugging a complex circuit that does not work?',
          options: ['Rewire everything from scratch', 'Test each component individually to isolate the problem', 'Add more components', 'Change the Arduino board'],
          correctIndex: 1,
          explanation: 'Systematic debugging means testing each component separately: Does the LDR read correctly? Does the LED light up? Does the buzzer work? Isolate the problem before fixing it.',
        },
      ],
      discussion: [
        'How would you add a motion sensor (PIR) to make this a smart security light?',
        'What additional features would make this product commercially viable?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'System Integration', pct: 30 },
        { label: 'Multiple I/O Control', pct: 25 },
        { label: 'Design Thinking', pct: 25 },
        { label: 'Debugging Strategies', pct: 20 },
      ],
      misconceptions: [
        'Students may try to build everything at once instead of testing components individually',
        'Students sometimes forget that RGB LED needs 3 separate resistors',
      ],
      hook: "This is your capstone project! Everything you've learned \u2014 LEDs, sensors, buzzers, code \u2014 comes together in one smart device.",
      khanLinks: [],
    },
    dataTable: {
      headers: ['Light Level', 'Threshold (pot)', 'LED Brightness', 'LED Color', 'Buzzer', 'Notes'],
      rows: 6,
    },
    observations: [
      'Test the complete system in different lighting conditions',
      'Adjust the threshold potentiometer for optimal activation',
      'Record the system behavior at different light levels',
    ],
    conclusion: 'Building a smart night light demonstrates system integration \u2014 combining sensors, actuators, and code into a functional product. This is the foundation of IoT and smart home technology.',
    ai: {
      opening: "Capstone time! \u{1F319} You'll combine everything \u2014 light sensor, RGB LED, buzzer, and potentiometer \u2014 into a smart night light.",
      keywords: {
        setup: 'LDR on A0, Pot on A1, RGB LED on pins 9/10/11, Buzzer on pin 8. Most complex circuit yet!',
        formula: 'brightness = map(light, threshold, 0, 0, 255). Threshold is adjustable via the pot on A1.',
        error: 'Build and test one component at a time. Get LDR reading first, then add LED, then buzzer.',
        question: 'Can you make the LED color change based on how dark it is? Blue for dusk, warm white for night?',
        real: 'Commercial smart lights, home automation, and IoT devices use this same multi-sensor approach.',
        result: 'A fully automatic night light: activates in darkness, brightness proportional to darkness, plays a tone, adjustable sensitivity.',
      },
      hint: 'Build incrementally! Test the LDR alone first, then add the LED, then the buzzer, then combine.',
      expected: 'Automatic night light that responds to darkness with adjustable sensitivity, RGB color, and activation tone.',
    },
  },
]

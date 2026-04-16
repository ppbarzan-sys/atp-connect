import type { Experiment } from './experiments'
import { roboticsExperiments } from './robotics-experiments'

/* eslint-disable @typescript-eslint/no-explicit-any */
const esTranslations: Record<number, any> = {
  501: {
    title: 'Parpadeo de LED — Tu Primer Circuito',
    desc: 'Construye tu primer circuito conectando un LED a Arduino y escribiendo código para hacerlo parpadear.',
    summary: {
      whatTheyLearn: 'Los estudiantes aprenden los fundamentos de un circuito digital: cómo fluye la corriente desde Arduino a través de una resistencia y un LED, y cómo escribir su primer sketch de Arduino usando digitalWrite() y delay().',
      instructions: [
        'Inserta el Arduino Uno en la base de la protoboard.',
        'Conecta una resistencia de 220Ω desde el pin digital 13 de Arduino a una fila vacía de la protoboard.',
        'Conecta la pata larga (ánodo, +) de un LED rojo a la misma fila que la resistencia.',
        'Conecta la pata corta (cátodo, −) del LED al riel GND de Arduino.',
        'Sube el sketch Blink desde File > Examples > 01.Basics > Blink.',
      ],
      expectedOutcome: 'El LED parpadea encendido durante 1 segundo y apagado durante 1 segundo, repitiéndose indefinidamente. Cambiar delay(1000) a delay(250) hace que parpadee más rápido.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Protoboard + base de madera' },
        { emoji: '💡', name: '1x LED rojo' },
        { emoji: '🔗', name: '1x Resistencia de 220Ω (rojo-rojo-marrón)' },
        { emoji: '🔌', name: '2x Cables de conexión' },
        { emoji: '🔌', name: 'Cable USB' },
      ],
      observationsToRecord: [
        '¿Se enciende el LED al conectarlo?',
        '¿Qué sucede cuando cambias delay(1000) a delay(500)?',
        '¿Qué sucede si quitas la resistencia? (SOLO OBSERVA brevemente)',
        '¿Qué sucede si inviertes las patas del LED?',
      ],
      theoryPoints: [
        'Los LED están polarizados — la corriente solo fluye en una dirección (del ánodo + al cátodo −)',
        'Una resistencia limita la corriente para proteger el LED. V = IR, entonces R = (5V - 2V) / 0.02A = 150Ω mínimo',
        'digitalWrite(pin, HIGH) establece el pin a 5V; LOW lo establece a 0V',
        'delay(ms) pausa el programa durante los milisegundos especificados',
      ],
      realWorldConnections: [
        'Los semáforos usan conmutación temporizada de LED',
        'Las luces de vehículos de emergencia usan patrones de parpadeo rápido',
        'Indicadores de estado en dispositivos electrónicos (LED de encendido, indicador de carga)',
      ],
      formula: 'R = (V_supply - V_LED) / I_LED = (5V - 2V) / 20mA = 150Ω (se usa 220Ω por seguridad)',
    },
    questions: {
      mcq: [
        {
          text: '¿Cuál es el propósito de la resistencia en un circuito LED?',
          options: ['Hacer el LED más brillante', 'Limitar la corriente y proteger el LED de quemarse', 'Almacenar energía para el LED', 'Invertir la dirección de la corriente'],
          correctIndex: 1,
          explanation: 'Una resistencia limita la cantidad de corriente que fluye a través del LED. Sin ella, fluiría demasiada corriente y dañaría o destruiría el LED.',
        },
        {
          text: '¿Qué hace la función delay(1000) de Arduino?',
          options: ['Enciende el LED durante 1 segundo', 'Pausa el programa durante 1000 milisegundos (1 segundo)', 'Establece el pin 1000 a HIGH', 'Hace parpadear el LED 1000 veces'],
          correctIndex: 1,
          explanation: 'delay(1000) pausa todo el programa durante 1000 milisegundos (1 segundo). Durante este tiempo, el estado de los pines permanece sin cambios.',
        },
        {
          text: '¿Qué función de Arduino establece un pin digital a HIGH (5V) o LOW (0V)?',
          options: ['analogWrite()', 'digitalRead()', 'digitalWrite()', 'pinMode()'],
          correctIndex: 2,
          explanation: 'digitalWrite(pin, value) establece un pin digital a HIGH (5V) o LOW (0V). Se usa para encender y apagar LEDs, motores y otros componentes digitales.',
        },
        {
          text: '¿Qué sucede si conectas un LED al revés (polaridad invertida)?',
          options: ['Se enciende más brillante', 'Parpadea automáticamente', 'No se enciende porque los LED solo permiten el flujo de corriente en una dirección', 'Cambia de color'],
          correctIndex: 2,
          explanation: 'Los LED son diodos — solo permiten que la corriente fluya en una dirección (del ánodo + al cátodo −). Invertir el LED significa que no fluye corriente.',
        },
        {
          text: 'En el sketch Blink, ¿cuáles son las dos funciones requeridas en todo programa Arduino?',
          options: ['start() y stop()', 'begin() y end()', 'setup() y loop()', 'on() y off()'],
          correctIndex: 2,
          explanation: 'Cada sketch de Arduino debe tener setup() — que se ejecuta una vez al inicio — y loop() — que se ejecuta repetidamente de forma indefinida.',
        },
      ],
      discussion: [
        '¿Por qué necesitamos una resistencia con un LED externo pero no con el LED integrado del pin 13?',
        'Si quisieras que el LED parpadee en un patrón (2 rápidos, 1 lento), ¿cómo modificarías el código?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Salida Digital', pct: 30 },
        { label: 'Fundamentos de Circuitos', pct: 30 },
        { label: 'Estructura del Código Arduino', pct: 25 },
        { label: 'Ley de Ohm', pct: 15 },
      ],
      misconceptions: [
        'Los estudiantes a menudo piensan que quitar la resistencia hace el LED más brillante (lo hace brevemente, pero luego se quema)',
        'Los estudiantes pueden pensar que HIGH significa voltaje máximo en lugar de 5V específicamente',
        'Los estudiantes a veces confunden el ánodo y el cátodo del LED',
      ],
      hook: 'Cada dispositivo inteligente que posees — desde la luz de notificación de tu teléfono hasta el tablero de un auto — usa LEDs controlados por código. ¡Hoy escribirás tu primer programa para controlar uno!',
      khanLinks: [
        { title: 'Introducción a los Circuitos', url: 'https://www.khanacademy.org/science/physics/circuits-topic' },
        { title: 'Ley de Ohm', url: 'https://www.khanacademy.org/science/physics/circuits-topic/circuits-resistance/v/introduction-to-circuits-and-ohms-law' },
      ],
    },
    dataTable: {
      headers: ['Retardo (ms)', 'Parpadeos por Minuto', 'Tiempo LED Encendido', 'Tiempo LED Apagado', 'Observación'],
    },
    observations: [
      'Registra el valor de retardo y cuenta cuántas veces parpadea el LED en 30 segundos',
      'Calcula los parpadeos por minuto para cada valor de retardo',
      'Nota cualquier diferencia en el brillo percibido a velocidades de parpadeo muy rápidas',
    ],
    conclusion: 'Un circuito LED requiere una resistencia limitadora de corriente para proteger el LED. La función digitalWrite() de Arduino controla el voltaje del pin (5V o 0V), y delay() controla la temporización.',
    ai: {
      opening: '¡Bienvenido a tu primer experimento con Arduino! 🤖💡 Vamos a hacer parpadear un LED usando código. ¡Este es el "Hola Mundo" de la electrónica!',
      keywords: {
        setup: 'Asegúrate de que la pata larga del LED (ánodo) se conecte a través de la resistencia al pin 13, y la pata corta (cátodo) vaya a GND.',
        formula: 'Usa la Ley de Ohm: R = V/I. Arduino produce 5V, el LED consume unos 2V, así que necesitas al menos 150Ω. Usamos 220Ω por seguridad.',
        error: 'Si tu LED no se enciende: 1) Verifica la dirección del LED (pata larga = +), 2) Asegúrate de que la resistencia esté conectada, 3) Confirma el pin 13 en tu código.',
        question: 'Intenta cambiar los valores de delay. ¿Qué pasa con delay(100)? ¿Con delay(50)? ¿A qué velocidad el parpadeo parece una luz fija?',
        real: '¡Los semáforos, los LEDs de notificación del teléfono, los tableros de autos y las pantallas de estadios todos usan control temporizado de LED!',
        result: 'Deberías ver el LED encendiéndose por 1 segundo y apagándose por 1 segundo. Si siempre está encendido o apagado, revisa tu cableado.',
        extend: 'Intenta controlar múltiples LEDs en diferentes pines, o crea SOS en código Morse (3 cortos, 3 largos, 3 cortos).',
        explain: 'La función loop() se repite indefinidamente. Dentro de ella, ponemos el pin 13 en HIGH (LED encendido), esperamos, lo ponemos en LOW (LED apagado), esperamos, y repetimos.',
        hook: '¡Dato curioso: hacer parpadear un LED ES el "Hola Mundo" de Arduino!',
        misconception: 'La resistencia no hace que el LED brille menos de mala manera — ¡lo protege! Sin ella, el LED se quema en segundos.',
      },
      hint: 'Asegúrate de que tu LED tenga la pata larga (ánodo) conectada al lado de la resistencia, y la pata corta (cátodo) a GND.',
      expected: 'El LED rojo debería parpadear encendiéndose y apagándose a un intervalo regular determinado por los valores de delay().',
    },
  },

  502: {
    title: 'Controlador de Semáforo',
    desc: 'Construye un sistema de semáforo con 3 LEDs y prográmalo para que cicle entre rojo, amarillo y verde con tiempos realistas.',
    summary: {
      whatTheyLearn: 'Los estudiantes aprenden lógica secuencial controlando múltiples LEDs en una secuencia temporizada, simulando un sistema de semáforo real.',
      instructions: [
        'Coloca tres LEDs en la protoboard: rojo, amarillo y verde (de arriba a abajo).',
        'Conecta cada LED a través de una resistencia de 220Ω a los pines de Arduino: rojo=pin 4, amarillo=pin 3, verde=pin 2.',
        'Conecta todos los cátodos de los LEDs al riel GND.',
        'Escribe código para ciclar: Verde ENCENDIDO (5s) → Amarillo ENCENDIDO (2s) → Rojo ENCENDIDO (5s) → repetir.',
        'Sube el código y observa el patrón del semáforo.',
      ],
      expectedOutcome: 'Los tres LEDs ciclan en la secuencia correcta de semáforo con tiempos realistas.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Protoboard' },
        { emoji: '🔴', name: '1x LED rojo' },
        { emoji: '🟡', name: '1x LED amarillo' },
        { emoji: '🟢', name: '1x LED verde' },
        { emoji: '🔗', name: '3x Resistencias de 220Ω' },
        { emoji: '🔌', name: 'Cables de conexión' },
      ],
      observationsToRecord: [
        '¿Se encienden los tres LEDs individualmente al probarlos?',
        '¿La secuencia sigue el orden correcto del semáforo?',
        '¿Qué tiempo total del ciclo mides?',
        '¿Qué sucede si agregas una fase de cruce peatonal?',
      ],
      theoryPoints: [
        'La lógica secuencial ejecuta pasos en un orden fijo',
        'Cada LED necesita su propia resistencia limitadora de corriente',
        'Los semáforos siguen estándares internacionales para los tiempos de fase',
        'Las máquinas de estados representan sistemas con estados y transiciones definidos',
      ],
      realWorldConnections: [
        'Los semáforos reales usan controladores integrados con entradas de sensores',
        'Los cruces peatonales agregan estados adicionales a la secuencia',
        'Los sistemas de prioridad de vehículos de emergencia anulan las secuencias normales',
      ],
      formula: 'Tiempo total del ciclo = T_verde + T_amarillo + T_rojo',
    },
    questions: {
      mcq: [
        {
          text: 'En una secuencia de semáforo, ¿qué luz se enciende entre el verde y el rojo?',
          options: ['Azul', 'Blanco', 'Amarillo (ámbar)', 'Ninguna luz — cambian directamente'],
          correctIndex: 2,
          explanation: 'La luz amarilla (ámbar) sirve como advertencia de que la señal está a punto de cambiar a rojo, dando tiempo a los conductores para detenerse de forma segura.',
        },
        {
          text: '¿Cuántos pines de salida digital se necesitan para controlar un semáforo básico de 3 colores?',
          options: ['1', '2', '3', '6'],
          correctIndex: 2,
          explanation: 'Cada LED necesita su propio pin digital para control independiente: uno para rojo, uno para amarillo y uno para verde.',
        },
        {
          text: '¿Cuál es el propósito de llamar a digitalWrite(redPin, LOW) antes de encender el LED verde?',
          options: ['Para ahorrar batería', 'Para asegurar que solo una luz esté encendida a la vez', 'Para hacer el LED verde más brillante', 'No tiene propósito'],
          correctIndex: 1,
          explanation: 'Apagar el LED rojo antes de encender el verde asegura que solo se muestre un color del semáforo a la vez, imitando los semáforos reales.',
        },
        {
          text: 'Si la luz verde está encendida 5 segundos, la amarilla 2 segundos y la roja 5 segundos, ¿cuál es el tiempo total del ciclo?',
          options: ['7 segundos', '10 segundos', '12 segundos', '15 segundos'],
          correctIndex: 2,
          explanation: 'Ciclo total = 5s (verde) + 2s (amarillo) + 5s (rojo) = 12 segundos para un ciclo completo.',
        },
        {
          text: '¿Qué es una "máquina de estados" en programación?',
          options: ['Una máquina que ejecuta estados', 'Un modelo donde un sistema puede estar en uno de varios estados definidos con reglas para transicionar entre ellos', 'Un tipo de placa Arduino', 'Un generador de números aleatorios'],
          correctIndex: 1,
          explanation: 'Una máquina de estados es un concepto de programación donde un sistema tiene estados definidos (verde, amarillo, rojo) y reglas específicas para transicionar entre ellos.',
        },
      ],
      discussion: [
        '¿Cómo agregarías un botón de cruce peatonal a este semáforo?',
        '¿Por qué los semáforos reales tienen sensores empotrados en la carretera?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Lógica Secuencial', pct: 35 },
        { label: 'Múltiples Salidas Digitales', pct: 25 },
        { label: 'Temporización y Retardos', pct: 25 },
        { label: 'Máquinas de Estados', pct: 15 },
      ],
      misconceptions: [
        'Los estudiantes pueden intentar encender todos los LEDs a la vez en lugar de secuenciarlos',
        'Los estudiantes a veces olvidan apagar el LED anterior antes de encender el siguiente',
      ],
      hook: 'Los semáforos controlan millones de intersecciones en todo el mundo. ¡Hoy construirás y programarás el tuyo!',
      khanLinks: [
        { title: 'Introducción a los Circuitos', url: 'https://www.khanacademy.org/science/physics/circuits-topic' },
      ],
    },
    dataTable: {
      headers: ['Fase', 'Color del LED', 'Duración (s)', 'Número de Pin', 'Observación'],
    },
    observations: [
      'Registra la temporización de cada fase de tu semáforo',
      'Verifica que la secuencia coincida con el comportamiento real de un semáforo',
      'Observa qué sucede cuando cambias los valores de temporización',
    ],
    conclusion: 'Un controlador de semáforo demuestra lógica secuencial — ejecutar pasos en un orden definido con temporización precisa. Cada estado (verde, amarillo, rojo) tiene una duración y regla de transición específicas.',
    ai: {
      opening: '¡Vamos a construir un semáforo! 🚦 Controlarás 3 LEDs en secuencia — igual que las señales en una intersección real.',
      keywords: {
        setup: 'Conecta rojo al pin 4, amarillo al pin 3, verde al pin 2. Cada LED necesita su propia resistencia de 220Ω a GND.',
        formula: 'Tiempo total del ciclo = tiempo verde + tiempo amarillo + tiempo rojo. Un ciclo real típico es de 60-120 segundos.',
        error: 'Si los LEDs se encienden fuera de orden, verifica qué cable va a qué pin. ¡Etiqueta tus cables!',
        question: '¿Puedes agregar un 4to estado donde todas las luces estén apagadas por 1 segundo entre ciclos?',
        real: 'Los semáforos modernos usan sensores, cámaras e IA para optimizar el flujo de tráfico en tiempo real.',
        result: 'Deberías ver verde → amarillo → rojo ciclando continuamente.',
        extend: '¡Agrega un segundo conjunto de 3 LEDs para una calle transversal y coordina ambas direcciones!',
        explain: 'Encendemos y apagamos cada LED en secuencia usando digitalWrite() y delay() para crear el patrón de temporización.',
      },
      hint: 'Recuerda APAGAR el LED anterior antes de ENCENDER el siguiente en la secuencia.',
      expected: 'Tres LEDs ciclando en orden de semáforo: verde (5s) → amarillo (2s) → rojo (5s) → repetir.',
    },
  },

  503: {
    title: 'LED Controlado por Botón',
    desc: 'Usa un pulsador como entrada digital para controlar un LED. Aprende sobre entrada digital, resistencias pull-down y lógica condicional.',
    summary: {
      whatTheyLearn: 'Los estudiantes aprenden a leer entradas digitales usando digitalRead(), comprenden las resistencias pull-down y usan sentencias condicionales if/else.',
      instructions: [
        'Conecta un pulsador a través del espacio central de la protoboard.',
        'Conecta un lado del botón a 5V.',
        'Conecta el otro lado al pin 2 de Arduino Y a través de una resistencia pull-down de 10kΩ a GND.',
        'Conecta un LED con una resistencia de 220Ω del pin 13 a GND.',
        'Escribe código: si digitalRead(2) == HIGH, enciende el LED; de lo contrario, apágalo.',
      ],
      expectedOutcome: 'El LED se enciende cuando se presiona el botón y se apaga al soltarlo.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Protoboard' },
        { emoji: '🔘', name: '1x Pulsador' },
        { emoji: '💡', name: '1x LED rojo' },
        { emoji: '🔗', name: '1x Resistencia de 220Ω' },
        { emoji: '🔗', name: '1x Resistencia pull-down de 10kΩ' },
        { emoji: '🔌', name: 'Cables de conexión' },
      ],
      observationsToRecord: [
        '¿El LED responde inmediatamente a las pulsaciones?',
        '¿Qué sucede sin la resistencia pull-down?',
        '¿Puedes observar algún "rebote" (parpadeo) al presionar el botón?',
        'Registra el estado del botón y el estado del LED para 10 pulsaciones.',
      ],
      theoryPoints: [
        'digitalRead() devuelve HIGH (1) o LOW (0) según el voltaje del pin',
        'Una resistencia pull-down asegura que el pin lea LOW cuando el botón no está presionado',
        'Sin una resistencia pull-down, el pin "flota" y da lecturas aleatorias',
        'Las sentencias if/else permiten que el código tome decisiones basadas en la entrada',
      ],
      realWorldConnections: [
        'Los botones de ascensor, timbres y teclas de teclado todos usan el mismo principio',
        'Los botones de parada de emergencia industrial usan el mismo concepto de entrada digital',
        'Los botones de pantalla táctil son una evolución moderna de los pulsadores físicos',
      ],
      formula: 'Pull-down: cuando el botón está abierto, V_pin = 0V (LOW); cuando el botón se presiona, V_pin = 5V (HIGH)',
    },
    questions: {
      mcq: [
        {
          text: '¿Qué devuelve digitalRead() cuando un botón conectado con resistencia pull-down NO está presionado?',
          options: ['HIGH', 'LOW', 'NULL', '0.5'],
          correctIndex: 1,
          explanation: 'Con una resistencia pull-down, el pin está conectado a GND (0V) cuando el botón no está presionado, por lo que digitalRead() devuelve LOW.',
        },
        {
          text: '¿Cuál es el propósito de una resistencia pull-down en un circuito de botón?',
          options: ['Hacer el botón más difícil de presionar', 'Asegurar que el pin lea un LOW definido cuando el botón no está presionado', 'Aumentar el brillo del LED', 'Proteger el Arduino de daños'],
          correctIndex: 1,
          explanation: 'Una resistencia pull-down conecta el pin a GND, asegurando que lea LOW cuando el botón está abierto. Sin ella, el pin flota y da lecturas impredecibles.',
        },
        {
          text: '¿Qué función de Arduino se usa para leer el estado de un pin digital?',
          options: ['analogRead()', 'digitalRead()', 'digitalWrite()', 'Serial.read()'],
          correctIndex: 1,
          explanation: 'digitalRead(pin) lee el estado actual de un pin digital y devuelve HIGH o LOW.',
        },
        {
          text: '¿Qué significa "pin flotante"?',
          options: ['Un pin conectado al agua', 'Un pin no conectado a un HIGH o LOW definido, que da lecturas impredecibles', 'Un pin que se mueve físicamente', 'Un pin configurado al voltaje máximo'],
          correctIndex: 1,
          explanation: 'Un pin flotante no tiene un voltaje definido — capta ruido electromagnético y da lecturas HIGH/LOW aleatorias.',
        },
        {
          text: 'En el código "if (buttonState == HIGH) { ... } else { ... }", ¿qué ejecuta el bloque else?',
          options: ['Cuando el botón está presionado', 'Cuando el botón no está presionado (LOW)', 'Siempre', 'Nunca'],
          correctIndex: 1,
          explanation: 'El bloque else se ejecuta cuando la condición if es falsa — en este caso, cuando buttonState no es HIGH (es decir, es LOW).',
        },
      ],
      discussion: [
        '¿Qué es el "debouncing" de botones y por qué podrías necesitarlo?',
        '¿Cómo harías que el LED alterne (se quede encendido después de una pulsación, apagado después de la siguiente)?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Entrada Digital', pct: 30 },
        { label: 'Resistencias Pull-down', pct: 25 },
        { label: 'Lógica Condicional', pct: 30 },
        { label: 'Diseño de Circuitos', pct: 15 },
      ],
      misconceptions: [
        'Los estudiantes olvidan la resistencia pull-down y obtienen comportamiento errático',
        'Los estudiantes confunden los modos de pin INPUT y OUTPUT',
      ],
      hook: 'Cada botón que presionas — desde los botones del ascensor hasta los controles de juegos — ¡usa el mismo principio de entrada digital!',
      khanLinks: [
        { title: 'Introducción a los Circuitos', url: 'https://www.khanacademy.org/science/physics/circuits-topic' },
      ],
    },
    dataTable: {
      headers: ['Pulsación #', 'Estado del Botón', 'Valor de digitalRead()', 'Estado del LED', 'Tiempo de Respuesta'],
    },
    observations: [
      'Registra la pulsación del botón y el estado del LED para cada pulsación',
      'Prueba qué sucede sin la resistencia pull-down',
      'Nota cualquier parpadeo o respuesta retrasada',
    ],
    conclusion: 'La entrada digital con digitalRead() permite que Arduino responda a interacciones físicas. Las resistencias pull-down aseguran lecturas fiables, y la lógica if/else permite la toma de decisiones en el código.',
    ai: {
      opening: '¡Es hora de agregar interactividad! 🔘 Conectarás un botón para controlar un LED — tu primer proyecto de entrada/salida.',
      keywords: {
        setup: 'Botón entre 5V y pin 2. Agrega una resistencia pull-down de 10kΩ del pin 2 a GND.',
        formula: 'Pull-down: V_pin = 0V cuando está abierto, 5V cuando se presiona. La resistencia de 10kΩ limita la corriente de forma segura.',
        error: 'Si el LED se comporta de forma aleatoria, probablemente te falta la resistencia pull-down. El pin está "flotando".',
        question: '¿Puedes agregar un segundo botón que controle un segundo LED de forma independiente?',
        real: 'Cada tecla de teclado, botón de mando de juegos y botón de ascensor usa exactamente este concepto.',
        result: 'Presiona el botón: LED encendido. Suelta: LED apagado. ¡Simple pero poderoso!',
        extend: 'Agrega código de debouncing o haz que el botón alterne el estado del LED.',
      },
      hint: '¡La resistencia pull-down de 10kΩ es esencial! Sin ella, el pin flotará y dará lecturas aleatorias.',
      expected: 'El LED se enciende cuando se presiona el botón y se apaga al soltarlo.',
    },
  },

  504: {
    title: 'Potenciómetro — Lectura de Valores Analógicos',
    desc: 'Conecta un potenciómetro a la entrada analógica de Arduino y lee valores de voltaje variable de 0 a 1023.',
    summary: {
      whatTheyLearn: 'Los estudiantes aprenden sobre entrada analógica (0-1023), salida PWM (0-255), la función map() y divisores de voltaje.',
      instructions: [
        'Conecta el potenciómetro: pin izquierdo a GND, pin derecho a 5V, medio (cursor) a A0.',
        'Conecta un LED con resistencia de 220Ω del pin 9 (PWM) a GND.',
        'Escribe código para leer A0 con analogRead(), mapear a 0-255 y emitir con analogWrite().',
        'Abre el Monitor Serial para ver los valores analógicos crudos mientras giras la perilla.',
        'Observa cómo cambia el brillo del LED al rotar el potenciómetro.',
      ],
      expectedOutcome: 'Girar el potenciómetro controla suavemente el brillo del LED desde apagado hasta brillo máximo.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Protoboard' },
        { emoji: '🎛️', name: '1x Potenciómetro (10kΩ)' },
        { emoji: '💡', name: '1x LED' },
        { emoji: '🔗', name: '1x Resistencia de 220Ω' },
        { emoji: '🔌', name: 'Cables de conexión' },
      ],
      observationsToRecord: [
        '¿Qué valor analógico lees en la posición mínima?',
        '¿Qué valor analógico lees en la posición máxima?',
        '¿En qué valor analógico el LED parece tener la mitad del brillo?',
        '¿El cambio de brillo es lineal o no lineal?',
      ],
      theoryPoints: [
        'analogRead() convierte voltaje (0-5V) a un valor digital (0-1023) usando un ADC de 10 bits',
        'analogWrite() usa PWM (0-255) para simular salida analógica',
        'map(value, fromLow, fromHigh, toLow, toHigh) reescala un rango a otro',
        'Un potenciómetro es un divisor de voltaje variable',
      ],
      realWorldConnections: [
        'Perillas de volumen en altavoces y amplificadores',
        'Interruptores reguladores para iluminación de habitaciones',
        'Controles de joystick en juegos y robótica',
      ],
      formula: 'V_out = V_in × (R2 / (R1 + R2)); Lectura analógica = V_pin × 1023 / 5V',
    },
    questions: {
      mcq: [
        {
          text: '¿Qué rango de valores devuelve analogRead()?',
          options: ['0 a 100', '0 a 255', '0 a 1023', '0 a 5000'],
          correctIndex: 2,
          explanation: 'El ADC (Convertidor Analógico-Digital) de Arduino tiene resolución de 10 bits: 2¹⁰ = 1024 valores, de 0 a 1023.',
        },
        {
          text: '¿Qué hace la función map()?',
          options: ['Muestra un mapa geográfico', 'Convierte un valor de un rango a otro', 'Mapea un pin a un voltaje específico', 'Crea un arreglo'],
          correctIndex: 1,
          explanation: 'map(value, fromLow, fromHigh, toLow, toHigh) reescala un número de un rango a otro. Ej: map(512, 0, 1023, 0, 255) devuelve ~127.',
        },
        {
          text: '¿Para qué se usa PWM con analogWrite()?',
          options: ['Leer sensores analógicos', 'Simular salida analógica conmutando rápidamente entre encendido/apagado digital', 'Programar sin errores', 'Conectarse a Wi-Fi'],
          correctIndex: 1,
          explanation: 'PWM (Modulación por Ancho de Pulso) conmuta rápidamente un pin entre HIGH y LOW. El ciclo de trabajo determina el voltaje promedio, simulando salida analógica.',
        },
        {
          text: '¿Qué es un potenciómetro?',
          options: ['Un tipo de LED', 'Una resistencia variable que actúa como divisor de voltaje', 'Un sensor de temperatura', 'Un tipo de motor'],
          correctIndex: 1,
          explanation: 'Un potenciómetro es una resistencia variable de tres terminales. Girar la perilla cambia la relación de resistencia, variando el voltaje de salida.',
        },
        {
          text: '¿Por qué analogWrite() solo puede usarse en ciertos pines de Arduino (marcados con ~)?',
          options: ['Los otros pines están rotos', 'Solo esos pines soportan PWM por hardware', 'Esos pines tienen mayor voltaje', 'Funciona en todos los pines'],
          correctIndex: 1,
          explanation: 'Solo los pines con soporte PWM por hardware (marcados ~ en la placa: 3, 5, 6, 9, 10, 11 en Uno) pueden usar analogWrite().',
        },
      ],
      discussion: [
        '¿Cuál es la diferencia entre señales digitales y analógicas?',
        '¿Cómo podrías usar dos potenciómetros para controlar un LED RGB?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Entrada Analógica (ADC)', pct: 30 },
        { label: 'Salida PWM', pct: 25 },
        { label: 'Función map()', pct: 20 },
        { label: 'Divisores de Voltaje', pct: 25 },
      ],
      misconceptions: [
        'Los estudiantes confunden el rango de analogRead (0-1023) con el rango de analogWrite (0-255)',
        'Los estudiantes piensan que los pines analógicos solo pueden ser entradas (también pueden ser E/S digitales)',
      ],
      hook: 'Las perillas de volumen, los reguladores de luz y los joysticks todos usan potenciómetros. ¡Hoy controlas un LED con uno!',
      khanLinks: [
        { title: 'Divisores de Voltaje', url: 'https://www.khanacademy.org/science/physics/circuits-topic' },
      ],
    },
    dataTable: {
      headers: ['Posición del Pot (%)', 'Lectura Analógica', 'PWM Mapeado (0-255)', 'Brillo del LED', 'Voltaje Calculado'],
    },
    observations: [
      'Registra las lecturas analógicas en diferentes posiciones del potenciómetro',
      'Calcula el voltaje a partir de la lectura analógica',
      'Compara el brillo percibido con el valor PWM (¿lineal?)',
    ],
    conclusion: 'La entrada analógica (ADC) convierte voltajes continuos en valores digitales. PWM simula salida analógica. La función map() conecta diferentes rangos de valores.',
    ai: {
      opening: '¡Vamos a lo analógico! 🎛️ Usarás un potenciómetro para controlar suavemente el brillo del LED — tu primer proyecto analógico.',
      keywords: {
        setup: 'Pot: izquierda=GND, derecha=5V, medio=A0. LED en pin 9 (PWM) con resistencia de 220Ω.',
        formula: 'ADC: 10 bits = 0-1023. PWM: 8 bits = 0-255. Usa map() para convertir entre ellos.',
        error: 'Si el brillo salta en vez de cambiar suavemente, asegúrate de estar usando un pin PWM (~) para el LED.',
        question: '¿Qué pasa si usas map(val, 0, 1023, 255, 0) en su lugar? ¡Pruébalo!',
        real: 'Las perillas de volumen, los reguladores de luz y los joysticks de juegos todos usan potenciómetros.',
        result: 'Girar el potenciómetro debería cambiar suavemente el brillo del LED de apagado a máximo.',
      },
      hint: 'Asegúrate de usar un pin compatible con PWM (marcado con ~) para analogWrite().',
      expected: 'El brillo del LED cambia suavemente al girar la perilla del potenciómetro.',
    },
  },

  505: {
    title: 'Sensor de Temperatura — Midiendo el Calor',
    desc: 'Usa el sensor de temperatura TMP36 para medir la temperatura ambiente y mostrar las lecturas en el Monitor Serial.',
    summary: {
      whatTheyLearn: 'Los estudiantes aprenden a leer sensores analógicos, convertir voltaje en temperatura, usar el Monitor Serial para registro de datos y comprender la calibración de sensores.',
      instructions: [
        'Identifica los pines del TMP36 (lado plano hacia ti): izquierdo=5V, medio=señal a A1, derecho=GND.',
        'Conecta el TMP36 a la protoboard con la orientación correcta de los pines.',
        'Escribe código para leer A1, convertir a voltaje y luego a temperatura en °C.',
        'Abre el Monitor Serial a 9600 baudios para ver las lecturas de temperatura.',
        'Prueba tocando el sensor para calentarlo y soplando sobre él para enfriarlo.',
      ],
      expectedOutcome: 'El Monitor Serial muestra la temperatura ambiente (~20-25°C). Tocar el sensor sube la lectura; soplar la enfría.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Protoboard' },
        { emoji: '🌡️', name: '1x Sensor de temperatura TMP36' },
        { emoji: '🔌', name: 'Cables de conexión' },
      ],
      observationsToRecord: [
        '¿Cuál es la lectura de temperatura ambiente?',
        '¿Cuánto cambia cuando tocas el sensor?',
        '¿Qué tan rápido vuelve a la temperatura ambiente?',
        'Compara con un termómetro — ¿qué tan preciso es el TMP36?',
      ],
      theoryPoints: [
        'El TMP36 produce un voltaje proporcional a la temperatura (10mV/°C con offset de 500mV)',
        'El ADC convierte el voltaje del sensor a un valor digital (0-1023)',
        'Temperatura (°C) = (voltaje - 0.5) × 100',
        'Serial.begin(9600) inicializa la comunicación serial a 9600 baudios',
      ],
      realWorldConnections: [
        'Los termostatos del hogar usan sensores de temperatura para controlar calefacción/refrigeración',
        'Las estaciones meteorológicas recopilan datos de temperatura para pronósticos',
        'Las salas de servidores monitorean la temperatura para prevenir sobrecalentamiento',
      ],
      formula: 'Temperatura (°C) = (voltaje - 0.5) × 100; voltaje = analogRead(A1) × 5.0 / 1024.0',
    },
    questions: {
      mcq: [
        {
          text: '¿Qué produce el sensor TMP36?',
          options: ['Una señal digital HIGH/LOW', 'Un voltaje proporcional a la temperatura', 'Una resistencia que cambia con la temperatura', 'Una señal de frecuencia'],
          correctIndex: 1,
          explanation: 'El TMP36 produce un voltaje analógico que aumenta linealmente con la temperatura: 10mV por grado Celsius, con un offset de 500mV a 0°C.',
        },
        {
          text: 'Si el TMP36 produce 0.75V, ¿cuál es la temperatura?',
          options: ['7.5°C', '15°C', '25°C', '75°C'],
          correctIndex: 2,
          explanation: 'T = (0.75 - 0.5) × 100 = 0.25 × 100 = 25°C. Resta el offset de 500mV y luego multiplica por 100.',
        },
        {
          text: '¿Qué hace Serial.begin(9600)?',
          options: ['Establece el pin 9600 a HIGH', 'Inicializa la comunicación serial a 9600 bits por segundo', 'Crea 9600 variables', 'Espera 9600 milisegundos'],
          correctIndex: 1,
          explanation: 'Serial.begin(9600) inicia la comunicación serial entre Arduino y la computadora a 9600 baudios (bits por segundo), habilitando el Monitor Serial.',
        },
        {
          text: '¿Por qué multiplicamos el valor de analogRead por 5.0/1024.0?',
          options: ['Para convertir la lectura digital de vuelta a voltaje', 'Para hacer el número más grande', 'Para convertir Celsius a Fahrenheit', 'Para calibrar el sensor'],
          correctIndex: 0,
          explanation: 'El ADC mapea 0-5V a 0-1023. Multiplicar por 5.0/1024.0 convierte la lectura digital de vuelta al voltaje real en el pin.',
        },
        {
          text: '¿Cuál es la resolución del TMP36 cuando se lee con el ADC de 10 bits de Arduino?',
          options: ['1°C', '0.5°C', 'Aproximadamente 0.49°C', '0.01°C'],
          correctIndex: 2,
          explanation: 'Cada paso del ADC = 5V/1024 = 4.88mV. Como el TMP36 produce 10mV/°C, la resolución = 4.88mV / 10mV/°C ≈ 0.49°C.',
        },
      ],
      discussion: [
        '¿Cómo construirías una alarma de temperatura que suene por encima de 30°C?',
        '¿Qué factores podrían causar lecturas de temperatura inexactas?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Sensores Analógicos', pct: 30 },
        { label: 'Conversión Voltaje-Temperatura', pct: 25 },
        { label: 'Monitor Serial', pct: 25 },
        { label: 'Registro de Datos', pct: 20 },
      ],
      misconceptions: [
        'Los estudiantes pueden conectar el TMP36 al revés, lo que puede dañarlo',
        'Los estudiantes confunden la lectura ADC (0-1023) con el voltaje (0-5V)',
      ],
      hook: 'Tu teléfono, tu auto e incluso tu nevera tienen sensores de temperatura. ¡Hoy construyes tu propio termómetro digital!',
      khanLinks: [
        { title: 'Temperatura y Calor', url: 'https://www.khanacademy.org/science/physics/thermodynamics' },
      ],
    },
    dataTable: {
      headers: ['Tiempo', 'Lectura ADC Cruda', 'Voltaje (V)', 'Temperatura (°C)', 'Condición'],
    },
    observations: [
      'Registra las lecturas de temperatura durante 10 minutos',
      'Nota qué tan rápido responde el sensor a los cambios de temperatura',
      'Compara las lecturas con un termómetro de referencia',
    ],
    conclusion: 'Los sensores analógicos convierten magnitudes físicas en voltaje. El ADC de Arduino convierte voltaje en valores digitales. Las fórmulas matemáticas luego traducen las lecturas en unidades significativas.',
    ai: {
      opening: '¡Vamos a medir la temperatura! 🌡️ Construirás un termómetro digital usando el sensor TMP36 y aprenderás sobre la conversión analógica-digital.',
      keywords: {
        setup: 'TMP36 con el lado plano hacia ti: izquierda=5V, medio=A1, derecha=GND. ¡Verifica la orientación!',
        formula: 'voltage = analogRead(A1) * 5.0 / 1024.0; tempC = (voltage - 0.5) * 100;',
        error: 'Si obtienes lecturas muy incorrectas (como -40°C), el TMP36 puede estar conectado al revés. ¡Desconecta y verifica!',
        question: 'Intenta registrar datos cada 2 segundos durante 5 minutos. ¿Puedes detectar cuándo alguien entra en la habitación?',
        real: 'Los termostatos del hogar, las estaciones meteorológicas y los sensores industriales todos usan principios similares.',
        result: 'Deberías ver la temperatura ambiente (unos 20-25°C). Toca el sensor para verla subir.',
      },
      hint: 'IMPORTANTE: El orden de pines del TMP36 (lado plano hacia ti) es: 5V | Señal | GND. ¡Invertirlo puede dañar el sensor!',
      expected: 'El Monitor Serial muestra lecturas de temperatura alrededor de 20-25°C para una habitación típica.',
    },
  },

  506: {
    title: 'Sensor de Luz — Midiendo el Brillo',
    desc: 'Construye un circuito sensor de luz usando un fotoresistor (LDR) y crea una luz nocturna automática.',
    summary: {
      whatTheyLearn: 'Los estudiantes aprenden sobre resistencias dependientes de la luz, divisores de voltaje con resistencia variable, detección de umbral y sistemas de control automático.',
      instructions: [
        'Crea un divisor de voltaje: LDR de 5V a A0, y resistencia de 10kΩ de A0 a GND.',
        'Conecta un LED con resistencia de 220Ω del pin 9 (PWM) a GND.',
        'Lee A0 en el código e imprime los niveles de luz en el Monitor Serial.',
        'Agrega lógica de umbral: si el nivel de luz < 300, enciende el LED; de lo contrario, apágalo.',
        'Prueba cubriendo el LDR con la mano (oscuro) y exponiéndolo a la luz.',
      ],
      expectedOutcome: 'El LED se enciende automáticamente en la oscuridad y se apaga con luz brillante, como una luz nocturna real.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Protoboard' },
        { emoji: '☀️', name: '1x Fotoresistor (LDR)' },
        { emoji: '🔗', name: '1x Resistencia de 10kΩ' },
        { emoji: '💡', name: '1x LED' },
        { emoji: '🔗', name: '1x Resistencia de 220Ω' },
        { emoji: '🔌', name: 'Cables de conexión' },
      ],
      observationsToRecord: [
        '¿Qué valor analógico lees en la oscuridad?',
        '¿Qué valor con la luz normal de la habitación?',
        '¿Qué valor con luz solar directa?',
        '¿Con qué valor de umbral funciona mejor tu luz nocturna?',
      ],
      theoryPoints: [
        'Un LDR disminuye su resistencia a medida que aumenta la luz',
        'La fórmula del divisor de voltaje determina el voltaje en el pin analógico',
        'La detección de umbral compara una lectura contra un valor establecido',
        'PWM puede hacer que el brillo sea proporcional al nivel de oscuridad',
      ],
      realWorldConnections: [
        'Farolas que se encienden al anochecer',
        'Brillo automático de la pantalla del teléfono',
        'Luces solares de jardín',
      ],
      formula: 'V_out = 5V × R_fijo / (R_LDR + R_fijo); R_LDR disminuye cuando la luz aumenta',
    },
    questions: {
      mcq: [
        {
          text: '¿Cómo responde un LDR (fotoresistor) a la luz?',
          options: ['La resistencia aumenta con más luz', 'La resistencia disminuye con más luz', 'La resistencia permanece constante', 'Genera voltaje a partir de la luz'],
          correctIndex: 1,
          explanation: 'Un LDR (Resistencia Dependiente de la Luz) tiene alta resistencia en la oscuridad y baja resistencia con luz brillante.',
        },
        {
          text: 'En el circuito de divisor de voltaje con LDR, ¿qué sucede con la lectura analógica cuando cubres el sensor?',
          options: ['Aumenta a 1023', 'Disminuye hacia 0', 'Permanece igual', 'Se vuelve negativa'],
          correctIndex: 1,
          explanation: 'En la oscuridad, la resistencia del LDR es muy alta. Más voltaje cae sobre el LDR, dejando menos en el pin analógico, así que la lectura disminuye.',
        },
        {
          text: '¿Qué es la "detección de umbral" en un sistema de sensores?',
          options: ['Encontrar el valor máximo del sensor', 'Comparar una lectura del sensor con un valor establecido para activar una acción', 'Calibrar el sensor', 'Promediar múltiples lecturas'],
          correctIndex: 1,
          explanation: 'La detección de umbral verifica si un valor del sensor está por encima o por debajo de un punto establecido, activando diferentes acciones (como encender/apagar una luz).',
        },
        {
          text: '¿Por qué usar un divisor de voltaje con el LDR en lugar de conectarlo directamente?',
          options: ['Los LDR son frágiles y necesitan protección', 'Un divisor de voltaje convierte cambios de resistencia en un cambio de voltaje medible', 'La conexión directa da el mismo resultado', 'Arduino requiere exactamente 2.5V'],
          correctIndex: 1,
          explanation: 'Arduino mide voltaje, no resistencia. El divisor de voltaje convierte la resistencia cambiante del LDR en un cambio de voltaje proporcional en el pin analógico.',
        },
        {
          text: '¿Cómo harías que el brillo del LED sea proporcional a la oscuridad (más tenue con luz, más brillante en la oscuridad)?',
          options: ['Usar una resistencia más grande', 'Usar map() con analogWrite() para establecer PWM basado en el inverso del nivel de luz', 'Conectar más LEDs', 'Usar un sensor diferente'],
          correctIndex: 1,
          explanation: 'Mapea la lectura de luz inversamente: map(lightLevel, 0, 1023, 255, 0) o restringe el rango oscuro. Usa analogWrite() en un pin PWM para atenuación suave.',
        },
      ],
      discussion: [
        '¿Cómo podrías calibrar el umbral para diferentes entornos?',
        '¿Cuáles son las limitaciones de usar un LDR para medición precisa de luz?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Sensores de Luz (LDR)', pct: 25 },
        { label: 'Divisores de Voltaje', pct: 25 },
        { label: 'Detección de Umbral', pct: 25 },
        { label: 'Control Automático', pct: 25 },
      ],
      misconceptions: [
        'Los estudiantes pueden pensar que el LDR genera electricidad como una celda solar (solo cambia la resistencia)',
        'Los estudiantes confunden en qué dirección cambia la lectura analógica con el nivel de luz',
      ],
      hook: '¿Alguna vez te preguntaste cómo saben las farolas cuándo encenderse? ¡Estás a punto de construir el mismo sistema!',
      khanLinks: [
        { title: 'Introducción a los Circuitos', url: 'https://www.khanacademy.org/science/physics/circuits-topic' },
      ],
    },
    dataTable: {
      headers: ['Condición de Luz', 'Lectura Analógica', 'Voltaje Calculado', 'Estado del LED', 'Notas'],
    },
    observations: [
      'Registra las lecturas bajo diferentes condiciones de luz',
      'Determina el mejor umbral para tu entorno',
      'Prueba el comportamiento de la luz nocturna automática',
    ],
    conclusion: 'Los sensores de luz (LDR) en un divisor de voltaje convierten los niveles de luz en voltajes medibles. La detección de umbral permite sistemas de control automático como las luces nocturnas.',
    ai: {
      opening: '¡Vamos a construir una luz nocturna automática! ☀️ Aprenderás cómo funcionan los sensores de luz y crearás un sistema que responda a la oscuridad.',
      keywords: {
        setup: 'LDR de 5V a A0. 10kΩ de A0 a GND. LED en pin 9 con resistencia de 220Ω.',
        formula: 'Divisor de voltaje: V = 5V × 10k / (LDR + 10k). En la oscuridad, el LDR es ~100k+, el voltaje es bajo.',
        error: 'Si el LED está siempre encendido o apagado, ajusta tu umbral. Primero imprime los valores de luz para encontrar el rango correcto.',
        question: '¿Qué valor de umbral funciona mejor en tu aula?',
        real: 'Las farolas, el brillo automático del teléfono y las luces solares de jardín todos usan este concepto.',
        result: 'Cubre el LDR: LED encendido. Descúbrelo: LED apagado. ¡Tu luz nocturna automática funciona!',
      },
      hint: 'Comienza imprimiendo los valores analógicos crudos en el Monitor Serial para encontrar el umbral adecuado para tu entorno.',
      expected: 'El LED se enciende cuando el LDR está en oscuridad y se apaga con luz brillante.',
    },
  },

  507: {
    title: 'Sensor de Distancia Ultrasónico',
    desc: 'Mide distancias usando ondas sonoras con el sensor ultrasónico. Calcula la velocidad del sonido a partir de tus mediciones.',
    summary: {
      whatTheyLearn: 'Los estudiantes aprenden la física de la medición de distancia ultrasónica, los cálculos de tiempo de vuelo y la velocidad del sonido.',
      instructions: [
        'Conecta el sensor ultrasónico a la placa Science Carrier R3.',
        'Sube el sketch de medición de distancia.',
        'Abre el Monitor Serial para ver las lecturas de distancia en tiempo real.',
        'Coloca objetos a distancias conocidas (regla) y compara con las lecturas del sensor.',
        'Registra datos para al menos 8 distancias diferentes.',
      ],
      expectedOutcome: 'Mediciones de distancia precisas (dentro de ±2cm) mostradas en el Monitor Serial para objetos de 2cm a 400cm de distancia.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Nano RP2040 Connect' },
        { emoji: '📡', name: 'Science Carrier R3' },
        { emoji: '📏', name: 'Sensor de Distancia Ultrasónico' },
        { emoji: '📏', name: 'Regla o cinta métrica' },
        { emoji: '🔌', name: 'Cable USB-C' },
      ],
      observationsToRecord: [
        '¿Qué tan preciso es el sensor a distancias cortas (< 10cm)?',
        '¿Qué tan preciso a distancias largas (> 100cm)?',
        '¿Cuál es la distancia máxima fiable?',
        '¿El ángulo del objeto afecta la lectura?',
      ],
      theoryPoints: [
        'Los sensores ultrasónicos emiten pulsos de sonido (40kHz) y miden el tiempo de retorno del eco',
        'Velocidad del sonido a 20°C ≈ 343 m/s (0.0343 cm/μs)',
        'Distancia = (tiempo × velocidad) / 2 (se divide por 2 porque el sonido viaja al objeto y vuelve)',
        'pulseIn() mide la duración de un pulso en un pin',
      ],
      realWorldConnections: [
        'Los sensores de estacionamiento de autos usan medición de distancia ultrasónica',
        'El sonar en submarinos para mapeo submarino',
        'Sistemas de evasión de obstáculos en robots',
      ],
      formula: 'Distancia (cm) = (tiempo_μs × 0.0343) / 2; Velocidad del sonido = 343 m/s a 20°C',
    },
    questions: {
      mcq: [
        {
          text: '¿Cómo mide la distancia un sensor ultrasónico?',
          options: ['Usando un rayo láser', 'Midiendo el tiempo que un pulso sonoro tarda en hacer eco de vuelta', 'Detectando radiación infrarroja', 'Midiendo campos magnéticos'],
          correctIndex: 1,
          explanation: 'Los sensores ultrasónicos envían un pulso sonoro y miden el tiempo hasta que el eco regresa. Conociendo la velocidad del sonido, distancia = (tiempo × velocidad) / 2.',
        },
        {
          text: '¿Por qué dividimos el tiempo medido por 2 en la fórmula de distancia?',
          options: ['Para convertir unidades', 'Porque el sonido viaja al objeto Y de vuelta, así que necesitamos la mitad del tiempo total', 'Para tener en cuenta la resistencia del aire', 'Para promediar dos lecturas'],
          correctIndex: 1,
          explanation: 'El tiempo medido es el viaje de ida y vuelta (al objeto y de regreso). Solo queremos la distancia de un sentido, así que dividimos por 2.',
        },
        {
          text: '¿Cuál es la velocidad aproximada del sonido en el aire a temperatura ambiente?',
          options: ['100 m/s', '343 m/s', '3000 m/s', '300,000 km/s'],
          correctIndex: 1,
          explanation: 'El sonido viaja a aproximadamente 343 metros por segundo en el aire a 20°C. Esto es mucho más lento que la luz (300,000 km/s).',
        },
        {
          text: '¿Qué función de Arduino mide la duración de un pulso en un pin?',
          options: ['analogRead()', 'digitalRead()', 'pulseIn()', 'millis()'],
          correctIndex: 2,
          explanation: 'pulseIn(pin, value) espera a que el pin alcance el valor especificado, mide cuánto tiempo permanece así y devuelve la duración en microsegundos.',
        },
        {
          text: '¿Qué factor puede afectar la precisión de la medición de distancia ultrasónica?',
          options: ['El color del objeto', 'La temperatura del aire (cambia la velocidad del sonido)', 'El brillo de la habitación', 'El tamaño de la placa Arduino'],
          correctIndex: 1,
          explanation: 'La velocidad del sonido cambia con la temperatura del aire (aproximadamente +0.6 m/s por °C). Las superficies blandas o en ángulo también pueden afectar la precisión del eco.',
        },
      ],
      discussion: [
        '¿Cómo podrías usar este sensor para construir un sistema de asistencia de estacionamiento?',
        '¿Por qué podría el sensor dar lecturas inexactas para superficies blandas o en ángulo?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Velocidad del Sonido', pct: 25 },
        { label: 'Tiempo de Vuelo', pct: 30 },
        { label: 'Detección de Eco', pct: 25 },
        { label: 'Precisión de Medición', pct: 20 },
      ],
      misconceptions: [
        'Los estudiantes pueden pensar que los sensores ultrasónicos usan luz o láseres',
        'Los estudiantes olvidan dividir por 2 para el tiempo de ida y vuelta',
      ],
      hook: 'Los sensores de estacionamiento de tu auto usan la misma física que explorarás hoy — ¡midiendo distancia con sonido!',
      khanLinks: [
        { title: 'Ondas Sonoras', url: 'https://www.khanacademy.org/science/physics/mechanical-waves-and-sound' },
      ],
    },
    dataTable: {
      headers: ['Distancia Real (cm)', 'Lectura del Sensor (cm)', 'Error (cm)', '% Error', 'Tipo de Superficie'],
    },
    observations: [
      'Compara las lecturas del sensor con las mediciones de la regla a 8 distancias diferentes',
      'Calcula el porcentaje de error para cada medición',
      'Prueba con diferentes tipos de superficie (dura, blanda, en ángulo)',
    ],
    conclusion: 'Los sensores ultrasónicos usan la velocidad del sonido y el tiempo de vuelo para calcular distancia. La precisión depende de la temperatura, el tipo de superficie y el ángulo.',
    ai: {
      opening: '¡Vamos a medir distancia con sonido! 📏 Aprenderás cómo funciona el sonar — la misma tecnología usada en submarinos y sensores de estacionamiento.',
      keywords: {
        setup: 'Conecta el sensor ultrasónico al Science Carrier R3. El sensor apunta hacia afuera.',
        formula: 'distancia = (pulseIn_tiempo * 0.0343) / 2. ¡Divide por 2 por el viaje de ida y vuelta!',
        error: 'Si las lecturas son cero, verifica las conexiones del sensor. Si son inconsistentes, asegúrate de que el objetivo sea plano y perpendicular.',
        question: '¿A qué distancia se vuelve poco fiable el sensor? ¿Por qué?',
        real: 'Autos, submarinos, robots e incluso murciélagos usan el mismo principio de ecolocalización.',
        result: 'Deberías ver distancias precisas (±2cm) para objetos a 2-400cm de distancia.',
      },
      hint: 'Asegúrate de que el sensor apunte directamente a una superficie plana para obtener las lecturas más precisas.',
      expected: 'Mediciones de distancia en cm mostradas en el Monitor Serial, con precisión de 2cm.',
    },
  },

  508: {
    title: 'Estación de Monitoreo Ambiental',
    desc: 'Usa la placa Science Kit R3 para leer simultáneamente temperatura, humedad, presión y luz — construyendo una estación meteorológica.',
    summary: {
      whatTheyLearn: 'Los estudiantes aprenden recopilación de datos multi-sensor, monitoreo ambiental, correlación de datos y la app Arduino Science Journal.',
      instructions: [
        'Conecta el Arduino Nano RP2040 Connect al Science Carrier R3.',
        'Conecta vía USB-C a tu computadora.',
        'Sube el sketch de monitoreo ambiental (lee todos los sensores integrados).',
        'Abre el Monitor Serial o la app Arduino Science Journal.',
        'Registra lecturas cada 2 minutos durante 20 minutos.',
      ],
      expectedOutcome: 'Un registro completo de datos ambientales que muestra cómo cambian la temperatura, humedad, presión y niveles de luz con el tiempo.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Nano RP2040 Connect' },
        { emoji: '📡', name: 'Science Carrier R3 (sensores integrados)' },
        { emoji: '🔌', name: 'Cable USB-C' },
      ],
      observationsToRecord: [
        '¿Cuáles son las lecturas base de cada sensor?',
        '¿Cómo cambian las lecturas cuando respiras cerca de los sensores?',
        '¿Abrir una ventana cambia la lectura de presión?',
        '¿Cómo se correlacionan las cuatro mediciones entre sí?',
      ],
      theoryPoints: [
        'La temperatura afecta la capacidad de humedad (el aire caliente retiene más humedad)',
        'La presión atmosférica al nivel del mar ≈ 1013.25 hPa',
        'La presión disminuye con la altitud (~12 hPa por cada 100m)',
        'Los niveles de luz se miden en lux (0=oscuro, 100,000=luz solar directa)',
      ],
      realWorldConnections: [
        'Las estaciones meteorológicas recopilan exactamente estos datos para pronósticos',
        'Los edificios inteligentes monitorean la calidad del aire interior',
        'Los sensores agrícolas optimizan las condiciones de cultivo',
      ],
      formula: 'Fórmula barométrica: P = P₀ × e^(-Mgh/RT); Humedad relativa = (vapor real / vapor máx. a temp.) × 100%',
    },
    questions: {
      mcq: [
        {
          text: '¿Cuál es la presión atmosférica estándar al nivel del mar?',
          options: ['100 hPa', '500 hPa', '1013.25 hPa', '5000 hPa'],
          correctIndex: 2,
          explanation: 'La presión atmosférica estándar al nivel del mar es 1013.25 hectopascales (hPa), también conocida como 1 atmósfera o 101.325 kPa.',
        },
        {
          text: '¿Qué sucede con la presión atmosférica a mayor altitud?',
          options: ['Aumenta', 'Disminuye', 'Permanece igual', 'Fluctúa aleatoriamente'],
          correctIndex: 1,
          explanation: 'La presión atmosférica disminuye con la altitud porque hay menos aire encima presionando hacia abajo. Disminuye unos 12 hPa por cada 100m.',
        },
        {
          text: '¿Qué mide la "humedad relativa"?',
          options: ['La cantidad total de agua en el aire', 'El porcentaje de humedad en el aire relativo al máximo que puede contener a esa temperatura', 'La temperatura del vapor de agua', 'La velocidad de evaporación'],
          correctIndex: 1,
          explanation: 'La humedad relativa es la proporción entre el vapor de agua real en el aire y la cantidad máxima que podría contener a la temperatura actual, expresada como porcentaje.',
        },
        {
          text: '¿Por qué es útil medir múltiples parámetros ambientales simultáneamente?',
          options: ['Hace el proyecto más complejo', 'Los parámetros están relacionados y juntos dan una imagen completa de las condiciones', 'Múltiples sensores son más baratos que uno', 'No es útil'],
          correctIndex: 1,
          explanation: 'Los parámetros ambientales están interconectados. La temperatura afecta la humedad, la presión indica cambios meteorológicos y la luz afecta procesos biológicos. Juntos cuentan una historia completa.',
        },
        {
          text: '¿En qué unidad se mide típicamente la intensidad de la luz?',
          options: ['Watts', 'Decibelios', 'Lux', 'Ohmios'],
          correctIndex: 2,
          explanation: 'La intensidad de luz se mide en lux. Una habitación oscura puede ser 10 lux, una oficina 500 lux y la luz solar directa 100,000 lux.',
        },
      ],
      discussion: [
        '¿Cómo podría esta estación ayudar a un agricultor a gestionar sus cultivos?',
        '¿Qué patrones esperarías en un período de monitoreo de 24 horas?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Datos Multi-Sensor', pct: 25 },
        { label: 'Ciencia Atmosférica', pct: 25 },
        { label: 'Registro de Datos', pct: 25 },
        { label: 'Análisis de Datos', pct: 25 },
      ],
      misconceptions: [
        'Los estudiantes pueden pensar que todos los sensores necesitan cableado externo (la placa carrier tiene sensores integrados)',
        'Los estudiantes confunden humedad absoluta y relativa',
      ],
      hook: 'Los meteorólogos usan los mismos tipos de sensores. ¡Hoy construyes tu propia estación meteorológica!',
      khanLinks: [
        { title: 'Clima y Meteorología', url: 'https://www.khanacademy.org/science/earth-science' },
      ],
    },
    dataTable: {
      headers: ['Tiempo', 'Temperatura (°C)', 'Humedad (%)', 'Presión (hPa)', 'Luz (lux)'],
    },
    observations: [
      'Registra las lecturas de los cuatro sensores cada 2 minutos durante 20 minutos',
      'Busca correlaciones entre las lecturas',
      'Prueba cómo respirar cerca del sensor cambia la humedad y la temperatura',
    ],
    conclusion: 'El monitoreo ambiental multi-sensor revela cómo los parámetros físicos están interconectados. Temperatura, humedad, presión y luz juntos proporcionan una imagen completa de las condiciones ambientales.',
    ai: {
      opening: '¡Vamos a construir una estación meteorológica! 🌤️ La placa Science Kit carrier tiene 4 sensores ambientales integrados — sin cableado adicional necesario.',
      keywords: {
        setup: 'Solo conecta el Nano RP2040 al Science Carrier R3 y enchufa el USB-C. ¡Todos los sensores están en la placa!',
        formula: 'Presión estándar: 1013.25 hPa. Humedad: % del máximo de humedad que el aire puede contener a la temperatura actual.',
        error: 'Si las lecturas parecen incorrectas, asegúrate de que la placa carrier esté correctamente colocada sobre el Nano.',
        question: '¿Qué sucede con las cuatro lecturas cuando respiras sobre los sensores?',
        real: 'Las estaciones meteorológicas profesionales, los edificios inteligentes y los sistemas agrícolas IoT usan estos mismos sensores.',
        result: 'Deberías ver los valores de temperatura, humedad, presión y luz actualizándose en tiempo real.',
      },
      hint: 'El Science Carrier R3 tiene todos los sensores integrados — ¡no se necesita cableado en protoboard para este experimento!',
      expected: 'Cuatro lecturas de sensores: temp (~20-25°C), humedad (30-70%), presión (~1013 hPa), luz (varía).',
    },
  },

  509: {
    title: 'Servo Motor — Control Preciso de Ángulo',
    desc: 'Controla un servo motor para rotar a ángulos precisos (0-180°) usando un potenciómetro como entrada.',
    summary: {
      whatTheyLearn: 'Los estudiantes aprenden el control de servo motores usando la librería Servo, señales PWM para posicionamiento angular y mapeo de entrada a salida.',
      instructions: [
        'Conecta el servo motor: cable rojo=5V, marrón/negro=GND, naranja/amarillo señal=pin 9.',
        'Conecta un potenciómetro: izquierda=GND, derecha=5V, medio=A0.',
        'Incluye la librería Servo y crea un objeto Servo.',
        'Lee el potenciómetro (0-1023), mapea a ángulo (0-180) y escribe al servo.',
        'Gira la perilla del potenciómetro y observa cómo el servo la sigue.',
      ],
      expectedOutcome: 'El servo motor sigue la posición del potenciómetro, rotando suavemente de 0° a 180°.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Protoboard' },
        { emoji: '🦾', name: '1x Servo motor' },
        { emoji: '🎛️', name: '1x Potenciómetro (10kΩ)' },
        { emoji: '🔌', name: 'Cables de conexión' },
      ],
      observationsToRecord: [
        '¿El servo se mueve en el rango completo de 0-180°?',
        '¿El movimiento es suave o entrecortado?',
        '¿El servo mantiene su posición cuando dejas de girar?',
        '¿Qué sucede en los ángulos extremos (0° y 180°)?',
      ],
      theoryPoints: [
        'Los servos contienen un motor, un tren de engranajes y un circuito de retroalimentación de posición',
        'El ancho de la señal PWM determina el ángulo: 1ms=0°, 1.5ms=90°, 2ms=180°',
        'La librería Servo maneja la temporización PWM automáticamente',
        'Servo.write(angle) establece la posición; Servo.attach(pin) conecta a un pin',
      ],
      realWorldConnections: [
        'Los brazos robóticos en manufactura usan servos de alta precisión',
        'Los autos y aviones RC usan servos para la dirección',
        'Los estabilizadores de cámara usan servos rápidos para estabilizar video',
      ],
      formula: 'angle = map(analogRead(A0), 0, 1023, 0, 180); PWM: 1ms=0°, 1.5ms=90°, 2ms=180°',
    },
    questions: {
      mcq: [
        {
          text: '¿Cuál es la diferencia principal entre un servo motor y un motor DC regular?',
          options: ['Los servos son más grandes', 'Los servos pueden controlarse a ángulos específicos; los motores DC solo giran', 'Los motores DC son más potentes', 'No hay diferencia'],
          correctIndex: 1,
          explanation: 'Un servo puede posicionarse en un ángulo específico (0-180°) usando retroalimentación de posición integrada. Un motor DC regular solo gira continuamente.',
        },
        {
          text: '¿Qué librería de Arduino se necesita para controlar un servo?',
          options: ['Motor.h', 'Servo.h', 'PWM.h', 'No se necesita librería'],
          correctIndex: 1,
          explanation: 'La librería Servo (Servo.h) proporciona funciones simples como attach(), write() y read() para controlar servo motores.',
        },
        {
          text: '¿Qué hace Servo.write(90)?',
          options: ['Gira el servo a 90 RPM', 'Mueve el servo a la posición de 90 grados (centro)', 'Establece la velocidad al 90%', 'Espera 90 milisegundos'],
          correctIndex: 1,
          explanation: 'Servo.write(90) mueve el servo a la posición central (90° del rango de 0-180°).',
        },
        {
          text: '¿Cómo sabe un servo su posición actual?',
          options: ['Usa GPS', 'Un potenciómetro interno proporciona retroalimentación de posición', 'Cuenta el número de rotaciones', 'Usa una cámara'],
          correctIndex: 1,
          explanation: 'Los servos tienen un potenciómetro interno conectado al eje de salida que proporciona retroalimentación de posición al circuito de control.',
        },
        {
          text: '¿Cuál es el rango angular típico de un servo estándar de hobby?',
          options: ['0-90°', '0-180°', '0-360°', '0-720°'],
          correctIndex: 1,
          explanation: 'Los servos estándar de hobby tienen un rango de 0-180°. Los servos especiales de rotación continua pueden girar 360° pero pierden el control preciso de ángulo.',
        },
      ],
      discussion: [
        '¿Cómo construirías un brazo robótico de 2 ejes usando dos servos?',
        '¿Cuál es la diferencia entre un servo estándar y un servo de rotación continua?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Control de Servo', pct: 30 },
        { label: 'Señales PWM', pct: 25 },
        { label: 'Mapeo Entrada-Salida', pct: 25 },
        { label: 'Acoplamiento Mecánico', pct: 20 },
      ],
      misconceptions: [
        'Los estudiantes pueden pensar que los servos pueden rotar continuamente como los motores DC',
        'Los estudiantes confunden el cable de señal del servo con los cables de alimentación',
      ],
      hook: 'Los brazos robóticos, los autos RC y los estabilizadores de cámara todos usan servos. ¡Hoy controlas uno con un dial!',
      khanLinks: [],
    },
    dataTable: {
      headers: ['Posición del Pot (%)', 'Lectura Analógica', 'Ángulo Mapeado (°)', 'Posición Real del Servo', 'Notas'],
    },
    observations: [
      'Registra las lecturas del potenciómetro y los ángulos correspondientes del servo',
      'Prueba el rango completo de movimiento (0-180°)',
      'Nota cualquier zona muerta o vibración en las posiciones extremas',
    ],
    conclusion: 'Los servos proporcionan control preciso de ángulo usando señales PWM. La librería Servo simplifica el control, y map() convierte rangos de entrada en ángulos de salida.',
    ai: {
      opening: '¡Vamos a controlar un servo motor! 🦾 Girarás una perilla de potenciómetro y el servo seguirá — igual que una articulación robótica.',
      keywords: {
        setup: 'Servo: rojo=5V, negro/marrón=GND, señal=pin 9. Potenciómetro: izquierda=GND, derecha=5V, medio=A0.',
        formula: 'angle = map(analogRead(A0), 0, 1023, 0, 180). Pulso PWM: 1ms=0°, 2ms=180°.',
        error: 'Si el servo vibra, puede necesitar más potencia. Intenta alimentarlo desde una fuente externa de 5V.',
        question: '¿Puedes programar el servo para que barra automáticamente de un lado a otro sin el potenciómetro?',
        real: 'Los brazos robóticos, los vehículos RC y los estabilizadores de cámara todos usan servos para posicionamiento preciso.',
        result: 'Gira el pot: el servo sigue de 0° a 180°. El mapeo debería sentirse suave y responsivo.',
      },
      hint: 'Asegúrate de incluir #include <Servo.h> en la parte superior de tu sketch y llamar myServo.attach(9) en setup().',
      expected: 'El servo sigue suavemente el potenciómetro de 0° a 180°.',
    },
  },

  510: {
    title: 'Control de Velocidad del Motor DC',
    desc: 'Controla la velocidad y dirección de un motor DC usando el puente H (L293D) como controlador de motor.',
    summary: {
      whatTheyLearn: 'Los estudiantes aprenden sobre controladores de motor con puente H, control de velocidad por PWM, inversión de dirección y protección con diodo flyback.',
      instructions: [
        'Coloca el IC L293D en la protoboard (muesca hacia arriba).',
        'Cablea el L293D: pin 1 (enable) al pin 3 de Arduino (PWM), pines 2,7 a los pines 4,5 de Arduino, pin 8 a 9V, pin 16 a 5V.',
        'Conecta el motor DC a los pines de salida 3 y 6 del L293D.',
        'Conecta un potenciómetro a A0 para control de velocidad.',
        'Escribe código: dirección vía pines 4/5, velocidad vía PWM en pin 3.',
      ],
      expectedOutcome: 'La velocidad del motor DC se controla con el potenciómetro, y la dirección puede invertirse cambiando los estados de los pines.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Protoboard' },
        { emoji: '🔄', name: '1x Motor DC' },
        { emoji: '📦', name: '1x IC puente H L293D' },
        { emoji: '🎛️', name: '1x Potenciómetro' },
        { emoji: '🔗', name: '1x Diodo 1N4007' },
        { emoji: '🔋', name: 'Conector de batería 9V' },
        { emoji: '🔌', name: 'Cables de conexión' },
      ],
      observationsToRecord: [
        '¿A qué valor PWM comienza a girar el motor?',
        '¿La velocidad es proporcional al ciclo de trabajo PWM?',
        '¿La inversión de dirección funciona suavemente?',
        '¿Qué sucede si intentas invertir mientras gira rápido?',
      ],
      theoryPoints: [
        'Un puente H usa 4 interruptores para controlar la dirección del motor',
        'El ciclo de trabajo PWM controla el voltaje efectivo y por tanto la velocidad',
        'Los diodos flyback protegen contra la fuerza contraelectromotriz del motor',
        'El IC L293D contiene dos puentes H para manejar hasta 2 motores',
      ],
      realWorldConnections: [
        'Los vehículos eléctricos usan puentes H para el control del motor',
        'Los robots industriales usan controladores de motor para movimiento preciso',
        'Los drones usan control de velocidad de motor para estabilidad y dirección',
      ],
      formula: 'Velocidad ∝ Ciclo de trabajo; Puente H: IN1=H,IN2=L → Adelante; IN1=L,IN2=H → Reversa',
    },
    questions: {
      mcq: [
        {
          text: '¿Para qué se usa un puente H?',
          options: ['Medir temperatura', 'Controlar la dirección de un motor DC', 'Leer sensores analógicos', 'Conectarse a Wi-Fi'],
          correctIndex: 1,
          explanation: 'Un puente H es un circuito que permite controlar tanto la dirección como la velocidad de un motor DC cambiando la polaridad del voltaje aplicado.',
        },
        {
          text: '¿Para qué se usa un diodo flyback en un circuito de motor?',
          options: ['Para hacer girar el motor más rápido', 'Para proteger el circuito de picos de voltaje cuando el motor se detiene', 'Para medir la velocidad del motor', 'Para conectar múltiples motores'],
          correctIndex: 1,
          explanation: 'Cuando un motor se detiene, genera un pico de voltaje de fuerza contraelectromotriz. Un diodo flyback absorbe este pico de forma segura, protegiendo el puente H y Arduino.',
        },
        {
          text: '¿Cómo controla PWM la velocidad del motor?',
          options: ['Cambiando el voltaje', 'Conmutando rápidamente la energía encendida y apagada, donde la proporción determina la potencia efectiva', 'Agregando más resistencia', 'Cambiando el cableado del motor'],
          correctIndex: 1,
          explanation: 'PWM conmuta rápidamente la energía del motor encendida y apagada. Un ciclo de trabajo del 50% significa que la energía está encendida la mitad del tiempo, dando media velocidad. 100% = velocidad máxima.',
        },
        {
          text: 'En el L293D, ¿qué pin controla la velocidad del motor?',
          options: ['Pines de entrada (IN1, IN2)', 'Pin de habilitación (EN)', 'Pines de salida (OUT1, OUT2)', 'Pin de tierra'],
          correctIndex: 1,
          explanation: 'El pin de habilitación (EN) controla si el motor funciona. Usar PWM en este pin controla la velocidad, mientras que IN1/IN2 controlan la dirección.',
        },
        {
          text: '¿Por qué necesita el motor una fuente de alimentación separada (9V) del Arduino (5V)?',
          options: ['Los motores son más caros', 'Los motores consumen demasiada corriente para que Arduino la suministre de forma segura', 'Arduino solo funciona a 5V', '9V hace el motor más silencioso'],
          correctIndex: 1,
          explanation: 'Los motores DC pueden consumir cientos de miliamperios o más, excediendo lo que Arduino puede suministrar con seguridad. Una fuente separada protege Arduino y proporciona suficiente potencia.',
        },
      ],
      discussion: [
        '¿Cómo controlarías dos motores independientemente para un robot?',
        '¿Qué precauciones de seguridad son importantes al trabajar con motores?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Operación del Puente H', pct: 30 },
        { label: 'Control de Velocidad PWM', pct: 25 },
        { label: 'Controladores de Motor', pct: 25 },
        { label: 'Protección del Circuito', pct: 20 },
      ],
      misconceptions: [
        'Los estudiantes pueden intentar alimentar motores directamente desde los pines de Arduino (puede dañar la placa)',
        'Los estudiantes confunden los pines de control de dirección con el pin de control de velocidad',
      ],
      hook: '¡Los autos eléctricos, los robots y los drones todos usan controladores de motor. Hoy construyes uno desde cero!',
      khanLinks: [],
    },
    dataTable: {
      headers: ['Valor del Pot', 'Ciclo de Trabajo PWM (%)', 'Dirección', 'Velocidad del Motor (estimada)', 'Notas'],
    },
    observations: [
      'Registra los valores PWM y las velocidades de motor observadas',
      'Encuentra el valor PWM mínimo que hace girar el motor',
      'Prueba la inversión de dirección y nota cualquier problema',
    ],
    conclusion: 'Los puentes H permiten el control bidireccional de motores DC. PWM varía la velocidad, los pines de dirección controlan el sentido de rotación, y los diodos flyback protegen el circuito.',
    ai: {
      opening: '¡Hagamos girar un motor! 🔄 Usarás un puente H para controlar tanto la velocidad como la dirección — la base de toda la robótica.',
      keywords: {
        setup: 'L293D: enable en pin 3 (PWM), dirección en pines 4,5, alimentación del motor desde batería de 9V. ¡Sigue el diagrama de cableado cuidadosamente!',
        formula: 'Velocidad = ciclo de trabajo PWM. Dirección: IN1=H,IN2=L adelante; IN1=L,IN2=H reversa; ambos LOW = parar.',
        error: '¿El motor no gira? Verifica: 1) Batería de 9V conectada, 2) Pin Enable tiene PWM, 3) IN1/IN2 están configurados correctamente.',
        question: '¿Qué valor PWM mínimo hace que el motor comience a moverse? ¿Por qué no es 0?',
        real: 'Los vehículos eléctricos, los drones y los robots industriales todos usan controladores de motor con puente H.',
        result: 'La velocidad del motor sigue el potenciómetro. Puedes invertir la dirección cambiando los estados de IN1/IN2.',
      },
      hint: '¡NUNCA conectes un motor directamente a los pines de Arduino! Siempre usa un controlador de motor como el L293D.',
      expected: 'Velocidad del motor controlada por potenciómetro, con capacidad de invertir la dirección.',
    },
  },

  511: {
    title: 'Zumbador Piezoeléctrico — Haciendo Música con Código',
    desc: 'Genera diferentes tonos musicales usando un zumbador piezoeléctrico y programa una melodía simple.',
    summary: {
      whatTheyLearn: 'Los estudiantes aprenden sobre ondas sonoras, la relación entre frecuencia y tono, la función tone() y el uso de arreglos para almacenar melodías.',
      instructions: [
        'Conecta una pata del zumbador piezoeléctrico al pin 8 de Arduino.',
        'Conecta la otra pata a GND.',
        'Usa tone(8, frecuencia, duración) para reproducir notas individuales.',
        'Crea arreglos para las notas y duraciones para reproducir una melodía.',
        '¡Sube el código y escucha tu melodía programada!',
      ],
      expectedOutcome: 'El zumbador reproduce tonos individuales y una melodía reconocible (ej: "Estrellita, ¿dónde estás?").',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Protoboard' },
        { emoji: '🎵', name: '1x Zumbador piezoeléctrico' },
        { emoji: '🔌', name: 'Cables de conexión' },
      ],
      observationsToRecord: [
        '¿Qué rango de frecuencias puedes escuchar?',
        '¿Qué frecuencias suenan agudas vs. graves?',
        '¿Puedes identificar las notas musicales de oído?',
        '¿Cómo afecta la duración al ritmo percibido?',
      ],
      theoryPoints: [
        'El sonido se produce por vibraciones a frecuencias específicas',
        'Mayor frecuencia = tono más agudo. A4 = 440 Hz es la referencia estándar de afinación',
        'tone(pin, frecuencia, duración) genera una onda cuadrada a la frecuencia dada',
        'Las notas musicales corresponden a frecuencias específicas: C4=262Hz, D4=294Hz, E4=330Hz, etc.',
      ],
      realWorldConnections: [
        'Los instrumentos musicales producen frecuencias específicas para cada nota',
        'Los sistemas de alarma usan diferentes tonos para diferentes alertas',
        'Las tarjetas de felicitación electrónicas usan tecnología de zumbador similar',
      ],
      formula: 'Notas musicales: C4=262Hz, D4=294Hz, E4=330Hz, F4=349Hz, G4=392Hz, A4=440Hz, B4=494Hz, C5=523Hz',
    },
    questions: {
      mcq: [
        {
          text: '¿Qué determina el tono de un sonido?',
          options: ['El volumen', 'La duración', 'La frecuencia', 'El color'],
          correctIndex: 2,
          explanation: 'El tono está determinado por la frecuencia. Mayor frecuencia = tono más agudo. Por ejemplo, A4 = 440 Hz, y A5 = 880 Hz (una octava más alto = doble de frecuencia).',
        },
        {
          text: '¿Cuál es la frecuencia estándar de afinación para la nota A4?',
          options: ['220 Hz', '440 Hz', '880 Hz', '1000 Hz'],
          correctIndex: 1,
          explanation: '440 Hz es el estándar internacionalmente aceptado para A4 (La por encima del Do central). Se usa como referencia para afinar instrumentos musicales.',
        },
        {
          text: '¿Qué hace la función tone(8, 440, 500) de Arduino?',
          options: ['Lee el pin 8 durante 440ms', 'Reproduce un tono de 440Hz en el pin 8 durante 500 milisegundos', 'Establece el pin 8 a 440 voltios', 'Espera 500 segundos'],
          correctIndex: 1,
          explanation: 'tone(pin, frecuencia, duración) reproduce una onda cuadrada a la frecuencia especificada en el pin dado durante la duración especificada en milisegundos.',
        },
        {
          text: '¿Cuál es la relación entre una octava y la frecuencia?',
          options: ['Misma frecuencia', 'El doble de la frecuencia', 'El triple de la frecuencia', 'La mitad de la frecuencia'],
          correctIndex: 1,
          explanation: 'Subir una octava duplica la frecuencia. A4=440Hz, A5=880Hz. Bajar una octava la divide a la mitad: A3=220Hz.',
        },
        {
          text: '¿Qué estructura de datos es útil para almacenar una secuencia de notas musicales en código?',
          options: ['Una variable simple', 'Un arreglo', 'Una resistencia', 'Un contador de bucle'],
          correctIndex: 1,
          explanation: 'Los arreglos almacenan secuencias de valores. Una melodía necesita un arreglo de frecuencias de notas y un arreglo de duraciones de notas.',
        },
      ],
      discussion: [
        '¿Por qué una onda cuadrada de un zumbador suena diferente a la misma nota en un piano?',
        '¿Cómo agregarías un botón para reproducir diferentes melodías?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Sonido y Frecuencia', pct: 30 },
        { label: 'Función tone()', pct: 25 },
        { label: 'Arreglos y Secuencias', pct: 25 },
        { label: 'Teoría Musical', pct: 20 },
      ],
      misconceptions: [
        'Los estudiantes confunden volumen (amplitud) con tono (frecuencia)',
        'Los estudiantes pueden no darse cuenta de que se necesita noTone() para detener un tono continuo',
      ],
      hook: '¡La música es matemáticas! Cada nota es una frecuencia específica. ¡Hoy programarás tu Arduino para tocar una melodía!',
      khanLinks: [
        { title: 'Ondas Sonoras', url: 'https://www.khanacademy.org/science/physics/mechanical-waves-and-sound' },
      ],
    },
    dataTable: {
      headers: ['Nombre de la Nota', 'Frecuencia (Hz)', 'Duración (ms)', 'Tono Percibido', 'Notas'],
    },
    observations: [
      'Registra diferentes frecuencias de notas y cómo suenan',
      'Programa y reproduce una melodía simple',
      'Experimenta con diferentes ritmos cambiando las duraciones',
    ],
    conclusion: 'El sonido se produce por vibraciones a frecuencias específicas. La función tone() genera estas frecuencias, y los arreglos organizan las notas en melodías.',
    ai: {
      opening: '¡Hagamos música con código! 🎵 Programarás tu Arduino para tocar melodías usando un zumbador piezoeléctrico.',
      keywords: {
        setup: 'Conecta el zumbador entre el pin 8 y GND. ¡Eso es todo — el cableado más simple hasta ahora!',
        formula: 'Frecuencias de notas: C=262, D=294, E=330, F=349, G=392, A=440, B=494, C5=523 Hz.',
        error: '¿Sin sonido? Verifica la polaridad del zumbador (algunos tienen patas + y -). Prueba un pin diferente.',
        question: '¿Puedes programar "Cumpleaños Feliz" o tu canción favorita? ¡Busca las frecuencias de las notas!',
        real: 'Los timbres, los despertadores y los juguetes electrónicos todos usan zumbadores piezoeléctricos.',
        result: '¡Deberías escuchar tonos musicales claros. Diferentes frecuencias = diferentes notas!',
      },
      hint: 'Usa noTone(pin) entre las notas para crear una separación clara. Sin ella, las notas se mezclan.',
      expected: 'Tonos musicales claros del zumbador, eventualmente reproduciendo una melodía reconocible.',
    },
  },

  512: {
    title: 'Luz Nocturna Inteligente — Combinando Sensores y Actuadores',
    desc: 'Construye una luz nocturna automática que se enciende en la oscuridad, ajusta el brillo según la luz ambiente y reproduce un tono al activarse.',
    summary: {
      whatTheyLearn: 'Los estudiantes combinan todo lo que aprendieron — sensores, actuadores, E/S analógica/digital — en un sistema interactivo completo.',
      instructions: [
        'Construye el divisor de voltaje del LDR (A0) y el control de sensibilidad con potenciómetro (A1).',
        'Conecta el LED RGB a los pines 9, 10, 11 (PWM) con resistencias de 220Ω.',
        'Conecta el zumbador piezoeléctrico al pin 8.',
        'Escribe código: lee el LDR, compara con el umbral (ajustado por el pot), controla brillo y color del LED, reproduce tono de activación.',
        'Prueba en diferentes condiciones de iluminación.',
      ],
      expectedOutcome: 'Una luz nocturna completamente automática: el LED se enciende gradualmente en la oscuridad (brillo proporcional a la oscuridad), reproduce un tono suave al activarse, con sensibilidad ajustable.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Protoboard' },
        { emoji: '☀️', name: '1x Fotoresistor (LDR)' },
        { emoji: '🔗', name: '1x Resistencia de 10kΩ' },
        { emoji: '🌈', name: '1x LED RGB' },
        { emoji: '🔗', name: '3x Resistencias de 220Ω' },
        { emoji: '🎵', name: '1x Zumbador piezoeléctrico' },
        { emoji: '🎛️', name: '1x Potenciómetro (sensibilidad)' },
        { emoji: '🔌', name: 'Cables de conexión' },
      ],
      observationsToRecord: [
        '¿A qué nivel de luz se activa la luz nocturna?',
        '¿El brillo responde proporcionalmente a la oscuridad?',
        '¿El tono de activación se reproduce correctamente?',
        '¿Puedes ajustar la sensibilidad con el potenciómetro?',
      ],
      theoryPoints: [
        'La integración de sistemas combina múltiples entradas y salidas',
        'El umbral con histéresis previene la conmutación rápida encendido/apagado',
        'El brillo PWM permite atenuación suave proporcional a la oscuridad',
        'Los parámetros ajustables por el usuario (vía potenciómetro) hacen el sistema adaptable',
      ],
      realWorldConnections: [
        'Las luces nocturnas comerciales usan el mismo principio sensor-actuador',
        'Los dispositivos domésticos inteligentes combinan múltiples sensores para automatización',
        'Los sistemas IoT integran detección, procesamiento y actuación',
      ],
      formula: 'brillo = map(lightLevel, threshold, 0, 0, 255); threshold = map(analogRead(A1), 0, 1023, 100, 900)',
    },
    questions: {
      mcq: [
        {
          text: '¿Qué es la "integración de sistemas" en ingeniería?',
          options: ['Usar solo un componente', 'Combinar múltiples componentes para que trabajen juntos como un sistema completo', 'Hacer el sistema lo más complejo posible', 'Probar cada parte por separado'],
          correctIndex: 1,
          explanation: 'La integración de sistemas significa combinar sensores, actuadores y código en un sistema cohesivo donde todas las partes trabajan juntas hacia un objetivo común.',
        },
        {
          text: '¿Por qué agregar un potenciómetro para ajustar la sensibilidad de la luz nocturna?',
          options: ['Se ve más profesional', 'Permite al usuario adaptar el umbral a diferentes entornos', 'Los potenciómetros son necesarios para todos los circuitos', 'Aumenta el brillo del LED'],
          correctIndex: 1,
          explanation: 'Diferentes habitaciones tienen diferentes niveles de luz ambiental. Un umbral ajustable por el usuario permite que la luz nocturna funcione correctamente en cualquier entorno.',
        },
        {
          text: '¿Qué es la "histéresis" y por qué es útil en una luz nocturna?',
          options: ['Un tipo de LED', 'Una brecha entre los umbrales de encendido y apagado que previene el parpadeo rápido', 'Un efecto de sonido', 'Un tipo de resistencia'],
          correctIndex: 1,
          explanation: 'La histéresis agrega un margen entre los umbrales de activación y desactivación. Esto previene que la luz parpadee rápidamente cuando los niveles de luz rondan cerca del umbral.',
        },
        {
          text: '¿Cómo crea diferentes colores el LED RGB?',
          options: ['Usando diferentes voltajes', 'Mezclando luz roja, verde y azul a diferentes intensidades usando PWM', 'Cambiando la temperatura del LED', 'Usando filtros de color'],
          correctIndex: 1,
          explanation: 'Un LED RGB tiene tres LEDs separados (rojo, verde, azul) dentro. Controlando el brillo de cada uno con PWM, puedes mezclar cualquier color.',
        },
        {
          text: '¿Cuál es el primer paso más importante al depurar un circuito complejo que no funciona?',
          options: ['Recablear todo desde cero', 'Probar cada componente individualmente para aislar el problema', 'Agregar más componentes', 'Cambiar la placa Arduino'],
          correctIndex: 1,
          explanation: 'La depuración sistemática significa probar cada componente por separado: ¿el LDR lee correctamente? ¿El LED se enciende? ¿El zumbador funciona? Aísla el problema antes de arreglarlo.',
        },
      ],
      discussion: [
        '¿Cómo agregarías un sensor de movimiento (PIR) para hacer esto una luz de seguridad inteligente?',
        '¿Qué características adicionales harían este producto comercialmente viable?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Integración de Sistemas', pct: 30 },
        { label: 'Control de Múltiples E/S', pct: 25 },
        { label: 'Pensamiento de Diseño', pct: 25 },
        { label: 'Estrategias de Depuración', pct: 20 },
      ],
      misconceptions: [
        'Los estudiantes pueden intentar construir todo a la vez en lugar de probar los componentes individualmente',
        'Los estudiantes a veces olvidan que el LED RGB necesita 3 resistencias separadas',
      ],
      hook: '¡Este es tu proyecto final! Todo lo que aprendiste — LEDs, sensores, zumbadores, código — se une en un dispositivo inteligente.',
      khanLinks: [],
    },
    dataTable: {
      headers: ['Nivel de Luz', 'Umbral (pot)', 'Brillo del LED', 'Color del LED', 'Zumbador', 'Notas'],
    },
    observations: [
      'Prueba el sistema completo en diferentes condiciones de iluminación',
      'Ajusta el potenciómetro de umbral para una activación óptima',
      'Registra el comportamiento del sistema a diferentes niveles de luz',
    ],
    conclusion: 'Construir una luz nocturna inteligente demuestra la integración de sistemas — combinar sensores, actuadores y código en un producto funcional. Esta es la base de la tecnología IoT y del hogar inteligente.',
    ai: {
      opening: '¡Es hora del proyecto final! 🌙 Combinarás todo — sensor de luz, LED RGB, zumbador y potenciómetro — en una luz nocturna inteligente.',
      keywords: {
        setup: 'LDR en A0, Pot en A1, LED RGB en pines 9/10/11, Zumbador en pin 8. ¡El circuito más complejo hasta ahora!',
        formula: 'brillo = map(light, threshold, 0, 0, 255). El umbral es ajustable vía el pot en A1.',
        error: 'Construye y prueba un componente a la vez. Primero la lectura del LDR, luego agrega el LED, luego el zumbador.',
        question: '¿Puedes hacer que el color del LED cambie según qué tan oscuro esté? ¿Azul al atardecer, blanco cálido de noche?',
        real: 'Las luces inteligentes comerciales, la automatización del hogar y los dispositivos IoT usan este mismo enfoque multi-sensor.',
        result: 'Una luz nocturna completamente automática: se activa en la oscuridad, brillo proporcional a la oscuridad, reproduce un tono, sensibilidad ajustable.',
      },
      hint: '¡Construye incrementalmente! Prueba el LDR solo primero, luego agrega el LED, luego el zumbador, luego combina.',
      expected: 'Luz nocturna automática que responde a la oscuridad con sensibilidad ajustable, color RGB y tono de activación.',
    },
  },
}

export const roboticsExperimentsEs: Experiment[] = roboticsExperiments.map(exp => {
  const t = esTranslations[exp.num]
  if (!t) return exp
  return {
    ...exp,
    title: t.title ?? exp.title,
    desc: t.desc ?? exp.desc,
    summary: t.summary ? { ...exp.summary, ...t.summary } : exp.summary,
    experiment: t.experiment ? { ...exp.experiment, ...t.experiment } : exp.experiment,
    questions: t.questions ? { ...exp.questions, ...t.questions } : exp.questions,
    overview: t.overview ? { ...exp.overview, ...t.overview } : exp.overview,
    dataTable: t.dataTable ? { ...exp.dataTable, ...t.dataTable } : exp.dataTable,
    observations: t.observations ?? exp.observations,
    conclusion: t.conclusion ?? exp.conclusion,
    ai: t.ai ? { ...exp.ai, ...t.ai, keywords: t.ai.keywords ? { ...exp.ai?.keywords, ...t.ai.keywords } : exp.ai?.keywords } : exp.ai,
  } as Experiment
})

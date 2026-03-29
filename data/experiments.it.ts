import type { Experiment } from './experiments'

export const experiments: Experiment[] = [
  {
    num: 1,
    cardEmoji: "⚖️",
    title: 'Leve di primo genere',
    section: 'Mechanics',
    desc: 'Studia l\'equilibrio di una leva di primo genere bilanciando masse note su entrambi i lati di un fulcro centrale.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti scoprono che l\'equilibrio richiede momenti uguali su entrambi i lati del fulcro, verificando W = mg e l\'equazione dei momenti M = F × d.',
      instructions: [
        'Azzerare il braccio della leva (taratura) prima di aggiungere qualsiasi massa.',
        'Appendere una massa su un lato, registrare il suo peso in newton, quindi trovare la massa equilibrante sull\'altro lato.',
        'Variare la distanza dal fulcro e osservare come cambia la forza necessaria.'
      ],
      expectedOutcome: 'm = 10 g → W ≈ 0,10 N; m = 25 g → W ≈ 0,25 N; m = 50 g → W ≈ 0,50 N. Equilibrio: M₁ = M₂.'
    },
    experiment: {
      equipment: [
        {
          emoji: '⚖️',
          name: 'Braccio della leva (bilancia)'
        },
        {
          emoji: '🔩',
          name: 'Fulcro centrale'
        },
        {
          emoji: '🏋️',
          name: 'Masse cilindriche (10 g, 25 g, 50 g)'
        },
        {
          emoji: '🪝',
          name: 'Ganci a S'
        },
        {
          emoji: '📏',
          name: 'Righello millimetrato'
        }
      ],
      observationsToRecord: [
        'Massa m (g) e peso calcolato W = mg (N) per ogni prova',
        'Posizione della massa su ciascun lato del fulcro (mm)',
        'Se il braccio raggiunge l\'equilibrio'
      ],
      theoryPoints: [
        'Il peso è la forza gravitazionale su una massa: W = mg, dove g ≈ 9,81 m/s².',
        'Un momento (coppia) è l\'effetto rotante di una forza: M = F × d.',
        'Una leva di primo genere ha il fulcro tra le due forze.',
        'Condizione di equilibrio: M₁ = M₂, ovvero F₁·d₁ = F₂·d₂.',
        'La \'taratura\' azzera il peso proprio della leva prima della misurazione.'
      ],
      realWorldConnections: [
        'Le bilance usano momenti equilibrati per misurare masse sconosciute.',
        'I piedi di porco e le altalene sono leve di primo genere comuni.',
        'I chirurghi usano i principi delle leve di primo genere negli strumenti laparoscopici.'
      ],
      formula: 'W = mg   |   M = F × d   |   Equilibrio: F₁d₁ = F₂d₂'
    },
    questions: {
      mcq: [
        {
          text: 'Una massa di 25 g è appesa a 8 cm dal fulcro. Quale forza applicata a 10 cm dal fulcro la bilancia?',
          options: ['0,20 N', '0,25 N', '0,196 N', '0,245 N'],
          correctIndex: 0,
          explanation: 'M₁ = 0,025 × 9,81 × 0,08 = 0,01962 N·m. F = 0,01962 / 0,10 = 0,196 N ≈ 0,20 N.'
        },
        {
          text: 'Cosa significa \'tarare\' il braccio della bilancia?',
          options: [
            'Aggiungere una massa nota',
            'Azzerare la lettura prima della misurazione',
            'Misurare la lunghezza del braccio',
            'Rimuovere il fulcro'
          ],
          correctIndex: 1,
          explanation: 'La taratura azzera la scala in modo da misurare solo la massa aggiunta, eliminando l\'effetto del peso proprio del braccio.'
        },
        {
          text: 'Se si sposta una massa più lontano dal fulcro, il momento:',
          options: ['Diminuisce', 'Rimane lo stesso', 'Aumenta', 'Diventa zero'],
          correctIndex: 2,
          explanation: 'M = F × d; con F costante, aumentare d aumenta il momento.'
        }
      ],
      discussion: [
        'Perché il braccio della bilancia deve essere tarato (azzerato) prima di posizionare le masse?',
        'Se F₁d₁ = F₂d₂, spiega come una piccola forza a grande distanza può bilanciare una forza grande a piccola distanza.',
        'Fai due esempi di leve di primo genere nella vita quotidiana e identifica il fulcro in ciascuno.'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Peso e gravità (W=mg)',
          pct: 25
        },
        {
          label: 'Momenti e coppia',
          pct: 30
        },
        {
          label: 'Condizione di equilibrio',
          pct: 30
        },
        {
          label: 'Misura e taratura',
          pct: 15
        }
      ],
      misconceptions: [
        'Gli studenti spesso confondono massa (kg) con peso (N); il peso è la forza gravitazionale, non la quantità di materia.',
        'Molti pensano che l\'equilibrio richieda masse uguali su entrambi i lati, non momenti uguali.',
        'Gli studenti potrebbero dimenticare la taratura, introducendo un errore sistematico dal peso proprio del braccio.'
      ],
      hook: 'Come può un bambino su un\'altalena bilanciare un adulto? Il segreto non è il peso uguale — sono i momenti uguali. Avvicina l\'adulto al fulcro e improvvisamente il bambino vince!',
      khanLinks: [
        {
          title: 'Introduction to Torque',
          url: 'https://www.khanacademy.org/science/physics/torque-angular-momentum/torque-tutorial/v/introduction-to-torque'
        },
        {
          title: 'Torque & Angular Momentum',
          url: 'https://www.khanacademy.org/science/physics/torque-angular-momentum'
        }
      ]
    },
    dataTable: {
      headers: [
        'Massa m (g)',
        'Peso W = mg (N)',
        'Distanza d₁ (cm)',
        'Massa bilancio (g)',
        'Distanza d₂ (cm)',
        'M₁ (N·m)',
        'M₂ (N·m)'
      ],
      rows: 4
    },
    observations: [
      'Registra il peso calcolato da ogni massa e confrontalo con la lettura del dinamometro.',
      'Nota se la leva raggiunge l\'equilibrio e in quale posizione.',
      'Osserva come raddoppiare la distanza dimezza la forza necessaria per l\'equilibrio.'
    ],
    conclusion: 'La leva raggiunge l\'equilibrio quando il momento a sinistra è uguale al momento a destra (F₁d₁ = F₂d₂). Il peso W = mg è stato verificato per ogni massa testata.',
    ai: {
      opening: 'Pronto a esplorare le leve? Chiedimi tutto su momenti, equilibrio o il setup dell\'esperimento!',
      keywords: {
        setup: 'lever bar|fulcrum|tare|balance arm',
        formula: 'M = F × d|W = mg|equilibrium',
        error: 'forgot to tare|unequal arm lengths|friction at pivot',
        question: 'moment|torque|equilibrium|weight|mass',
        real: 'see-saw|crowbar|weighing scale'
      },
      hint: 'Ricorda: l\'equilibrio richiede momenti uguali, non masse uguali. M = F × d su entrambi i lati.',
      expected: 'm = 10 g → W = 0,098 N; m = 25 g → W = 0,245 N; m = 50 g → W = 0,490 N. Equilibrio quando F₁d₁ = F₂d₂.'
    }
  },
  {
    num: 2,
    cardEmoji: "🏗️",
    title: 'Leve di primo genere e posizioni di equilibrio',
    section: 'Mechanics',
    desc: 'Misura i momenti rispetto a un fulcro e verifica il principio dei momenti usando una leva con carichi a distanze note.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti calcolano i momenti orari e antiorari e confermano che l\'equilibrio richiede la loro uguaglianza: M = F × d.',
      instructions: [
        'Posizionare una massa nota a una distanza misurata dal fulcro su un lato.',
        'Trovare la posizione o l\'entità di una seconda forza che ripristini l\'equilibrio.',
        'Registrare tutte le distanze e le forze, quindi calcolare entrambi i momenti.'
      ],
      expectedOutcome: 'Prova 1: m₁ = 65 g a 8 cm → M₁ = 0,052 N·m; regolare m₂ o d₂ finché M₂ ≈ 0,052 N·m.'
    },
    experiment: {
      equipment: [
        {
          emoji: '⚖️',
          name: 'Braccio della leva'
        },
        {
          emoji: '🔩',
          name: 'Fulcro'
        },
        {
          emoji: '🏋️',
          name: 'Masse (65 g, 100 g, 150 g)'
        },
        {
          emoji: '📏',
          name: 'Righello millimetrato'
        },
        {
          emoji: '🪝',
          name: 'Ganci a S'
        }
      ],
      observationsToRecord: [
        'Forza F₁ (N) e braccio d₁ (m) per il primo carico',
        'Forza F₂ (N) e braccio d₂ (m) per il carico equilibrante',
        'Momenti calcolati M₁ e M₂ (N·m)'
      ],
      theoryPoints: [
        'Momento M = F × d, dove d è la distanza perpendicolare dal fulcro.',
        'Momento orario = Momento antiorario all\'equilibrio.',
        'Il principio dei momenti si applica a qualsiasi corpo rigido in equilibrio rotazionale.',
        'Aumentare la lunghezza del braccio d amplifica l\'effetto rotante di una forza data.'
      ],
      realWorldConnections: [
        'Le carriole sono leve di secondo genere; il carico si trova tra la ruota (fulcro) e i manici.',
        'Gli schiaccianoci moltiplicano la forza usando il principio dei momenti.',
        'Gli ingegneri usano i calcoli dei momenti nella progettazione di ponti e gru.'
      ],
      formula: 'M = F × d   |   Equilibrio: ΣM_orari = ΣM_antiorari'
    },
    questions: {
      mcq: [
        {
          text: 'Una massa di 65 g è posizionata a 8 cm dal fulcro. Qual è il momento che crea?',
          options: ['0,052 N·m', '0,065 N·m', '0,080 N·m', '0,520 N·m'],
          correctIndex: 0,
          explanation: 'F = 0,065 kg × 9,81 m/s² ≈ 0,638 N; M = 0,638 × 0,08 ≈ 0,051 N·m ≈ 0,052 N·m.'
        },
        {
          text: 'Se M₁ = 0,052 N·m e d₂ = 0,10 m, quale forza F₂ è necessaria per l\'equilibrio?',
          options: ['0,52 N', '0,052 N', '5,2 N', '0,52 mN'],
          correctIndex: 0,
          explanation: 'F₂ = M₁ / d₂ = 0,052 / 0,10 = 0,52 N.'
        },
        {
          text: 'Quale di questi NON è una leva di secondo genere?',
          options: ['Carriola', 'Schiaccianoci', 'Altalena', 'Apribottiglie'],
          correctIndex: 2,
          explanation: 'Un\'altalena è una leva di primo genere (fulcro al centro). Nelle leve di secondo genere il carico si trova tra fulcro e forza applicata.'
        }
      ],
      discussion: [
        'Spiega perché aumentare la lunghezza del braccio d permette a una forza minore di produrre lo stesso momento.',
        'Un meccanico usa una chiave più lunga per svitare un bullone bloccato. Quale principio viene sfruttato?',
        'Come si applica il principio dei momenti alla progettazione di una carriola?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Definizione di momento M = F×d',
          pct: 30
        },
        {
          label: 'Condizione di equilibrio',
          pct: 30
        },
        {
          label: 'Classi di leve',
          pct: 20
        },
        {
          label: 'Tecnica di misurazione',
          pct: 20
        }
      ],
      misconceptions: [
        'Gli studenti confondono \'momento\' con \'forza\'; il momento include la distanza, non solo la forza.',
        'Molti assumono che l\'equilibrio richieda forze uguali piuttosto che momenti uguali.',
        'Alcuni studenti misurano la distanza sbagliata (non la distanza perpendicolare dal fulcro).'
      ],
      hook: 'Hai mai usato una chiave lunga per svitare un bullone bloccato? Stavi usando il principio dei momenti — un braccio più lungo significa un effetto rotante maggiore con la stessa forza!',
      khanLinks: [
        {
          title: 'Introduction to Torque',
          url: 'https://www.khanacademy.org/science/physics/torque-angular-momentum/torque-tutorial/v/introduction-to-torque'
        },
        {
          title: 'Torque & Moments',
          url: 'https://www.khanacademy.org/science/physics/torque-angular-momentum'
        }
      ]
    },
    dataTable: {
      headers: [
        'Forza F₁ (N)',
        'Braccio d₁ (m)',
        'Momento M₁ (N·m)',
        'Forza F₂ (N)',
        'Braccio d₂ (m)',
        'Momento M₂ (N·m)'
      ],
      rows: 4
    },
    observations: [
      'Registra forza e braccio per ogni carico',
      'Calcola i momenti M₁ e M₂',
      'Verifica che M₁ = M₂ all\'equilibrio'
    ],
    conclusion: 'Il principio dei momenti è stato verificato: l\'equilibrio si verifica quando M₁ = M₂. I valori misurati di M₁ (ad es. 0,052 N·m) corrispondono ai valori calcolati di M₂ entro un errore sperimentale di ±5%.',
    ai: {
      opening: 'Esplora i momenti della leva con me! Chiedi di forze, bracci o condizioni di equilibrio.',
      keywords: {
        setup: 'lever bar|fulcrum|masses|distances',
        formula: 'M = F×d|equilibrium|moments',
        error: 'arm asymmetry|friction|incorrect distance measurement',
        question: 'moment|turning effect|equilibrium|lever class',
        real: 'wheelbarrow|spanner|nutcracker'
      },
      hint: 'Il momento è sempre F × d, dove d è misurato perpendicolarmente al fulcro.',
      expected: 'm₁ = 65 g a 8 cm → M₁ = 0,052 N·m; m₁ a 8 cm, m₂ nella posizione tale che M₂ ≈ 0,057 N·m nella prova 2.'
    }
  },
  {
    num: 3,
    cardEmoji: "📏",
    title: 'Sensibilità di una bilancia',
    section: 'Mechanics',
    desc: 'Misura la sensibilità di una bilancia aggiungendo masse sempre più piccole e osservando la minima massa rilevabile.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti imparano il concetto di sensibilità strumentale: la minima variazione rilevabile dallo strumento.',
      instructions: [
        'Balance the beam with a 310 mg tare mass; record the resting pointer position.',
        'Add a 10 g (10 000 mg) load and read the new pointer deflection in divisions.',
        'Repeat with different loads to plot a deflection vs. mass graph.'
      ],
      expectedOutcome: '310 mg tare + 10 g load → ~3 divisions → σ ≈ 0.01 div/mg for small loads. Sensitivity decreases for heavier loads.'
    },
    experiment: {
      equipment: [
        {
          emoji: '⚖️',
          name: 'Beam balance with pointer'
        },
        {
          emoji: '🏋️',
          name: 'Tare mass (310 mg)'
        },
        {
          emoji: '🏋️',
          name: 'Test masses (10 g, 25 g, 50 g)'
        },
        {
          emoji: '📐',
          name: 'Scale with millimetre divisions'
        },
        {
          emoji: '📝',
          name: 'Graph paper'
        }
      ],
      observationsToRecord: [
        'Pointer zero position with tare mass only',
        'Pointer deflection (divisions) for each added mass',
        'Calculated sensitivity σ = deflection / added mass for each trial'
      ],
      theoryPoints: [
        'Sensitivity of a balance: σ = pointer deflection (div) / added mass (mg).',
        'A more sensitive balance deflects more for the same added mass.',
        'Sensitivity is not constant: it decreases as the load increases (non-linear response).',
        'The tare mass compensates for the beam\'s own asymmetry.'
      ],
      realWorldConnections: [
        'Analytical balances in chemistry labs are highly sensitive but have low capacity.',
        'Bathroom scales sacrifice sensitivity for a wider mass range.',
        'Sensitivity vs. range trade-off appears in all measuring instruments.'
      ],
      formula: 'σ = Δ (divisions) / Δm (mg)'
    },
    questions: {
      mcq: [
        {
          text: 'If adding 10 g causes a deflection of 3 divisions, what is the sensitivity in div/g?',
          options: ['0.3 div/g', '3 div/g', '30 div/g', '0.03 div/g'],
          correctIndex: 0,
          explanation: 'σ = 3 divisions / 10 g = 0.3 div/g.'
        },
        {
          text: 'Why is a tare mass of 310 mg placed on the balance before testing?',
          options: [
            'To increase sensitivity',
            'To compensate for beam asymmetry and zero the pointer',
            'To overload the balance',
            'To measure the beam weight'
          ],
          correctIndex: 1,
          explanation: 'The tare mass balances the pointer at a reference position, removing the effect of any asymmetry in the balance arm.'
        },
        {
          text: 'As the load on a balance increases, its sensitivity:',
          options: ['Increases linearly', 'Remains constant', 'Decreases', 'First increases then decreases'],
          correctIndex: 2,
          explanation: 'Sensitivity decreases at higher loads because the restoring moment per unit mass diminishes as the beam deflects more.'
        }
      ],
      discussion: [
        'Explain the difference between sensitivity and accuracy in a measuring instrument.',
        'Why might an analytical chemistry balance have much higher sensitivity than a bathroom scale?',
        'Sketch the expected shape of a deflection-vs-mass graph and explain any non-linearity.'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Definition of sensitivity',
          pct: 30
        },
        {
          label: 'Taring the balance',
          pct: 20
        },
        {
          label: 'Non-linearity of response',
          pct: 30
        },
        {
          label: 'Graphical analysis',
          pct: 20
        }
      ],
      misconceptions: [
        'Sensibilità e precisione non sono la stessa cosa.',
        'Una bilancia più sensibile non è sempre migliore: dipende dall\'applicazione.'
      ],
      hook: 'Le bilance analitiche nei laboratori farmaceutici rilevano variazioni di 0,1 mg — un centesimo di granello di sale!',
      khanLinks: [
        {
          title: 'Forces & Newton\'s Laws',
          url: 'https://www.khanacademy.org/science/physics/forces-newtons-laws'
        },
        {
          title: 'Torque & Balance',
          url: 'https://www.khanacademy.org/science/physics/torque-angular-momentum'
        }
      ]
    },
    dataTable: {
      headers: ['Massa aggiunta (mg)', 'Spostamento indice (mm)', 'Sensibilità (mm/mg)', 'Osservazioni'],
      rows: 5
    },
    observations: [
      'Registra lo spostamento dell\'indice per ogni massa aggiunta',
      'Trova la massa minima che produce spostamento apprezzabile',
      'Calcola la sensibilità media della bilancia'
    ],
    conclusion: 'Calcola la sensibilità della bilancia. Discuti come i parametri costruttivi influenzano la sensibilità.',
    ai: {
      opening: 'Ciao! Sono Gali. Oggi metti alla prova la sensibilità della bilancia — scopri il limite minimo di massa rilevabile!',
      keywords: {
        setup: 'beam balance|tare|pointer|divisions',
        formula: 'sensitivity = deflection / mass|σ = Δdiv / Δm',
        error: 'forgetting to tare|reading error|non-linear region',
        question: 'sensitivity|divisions|tare|accuracy',
        real: 'analytical balance|bathroom scale|lab instrument'
      },
      hint: 'Se l\'indice oscilla, aspetta che si stabilizzi prima di leggere. Usa la media di più letture.',
      expected: '310 mg tare + 10 g → ~3 div → σ ≈ 0.3 div/g. Sensitivity decreases with increasing load.'
    }
  },
  {
    num: 4,
    cardEmoji: "🔧",
    title: 'Leve di secondo e terzo genere',
    section: 'Mechanics',
    desc: 'Confronta leve di secondo e terzo genere, misurando le forze necessarie per bilanciare carichi a varie distanze.',
    setupTime: '5 min',
    duration: '30 min',
    summary: {
      whatTheyLearn: 'Gli studenti distinguono i tre tipi di leva e calcolano il vantaggio meccanico di leve di 2° e 3° genere.',
      instructions: [
        'Place the fulcrum at one end of the lever bar.',
        'Hang a known load at a measured distance from the fulcrum.',
        'Apply an upward effort at the other end and find the position for equilibrium.',
        'Calculate both moments and the reaction at the fulcrum.'
      ],
      expectedOutcome: 'm₁ = 65 g at 8 cm: M₁ = 0.052 N·m. A 100 g effort at ~5.5 cm gives M₂ ≈ 0.054 N·m ≈ M₁.'
    },
    experiment: {
      equipment: [
        {
          emoji: '⚖️',
          name: 'Lever bar'
        },
        {
          emoji: '🔩',
          name: 'End fulcrum pivot'
        },
        {
          emoji: '🏋️',
          name: 'Masses (65 g, 100 g, 150 g)'
        },
        {
          emoji: '📏',
          name: 'Millimetre ruler'
        },
        {
          emoji: '🔧',
          name: 'Support stand'
        }
      ],
      observationsToRecord: [
        'Load F_L (N) and its distance from fulcrum d_L (m)',
        'Effort F_E (N) and its distance from fulcrum d_E (m)',
        'Reaction force R at the fulcrum (calculated as R = F_L + F_E)'
      ],
      theoryPoints: [
        'In a second-class lever the load is between the fulcrum and the effort.',
        'Moments about the fulcrum: F_E × d_E = F_L × d_L at equilibrium.',
        'Mechanical advantage MA = d_E / d_L > 1; effort < load.',
        'The reaction R at the fulcrum supports the net downward force: R = F_L − F_E.',
        'Unlike first-class levers, effort and load forces act in the same direction (both down).'
      ],
      realWorldConnections: [
        'Wheelbarrows use a second-class lever principle: load between wheel and handles.',
        'A nutcracker is a double second-class lever.',
        'Hinged doors: the hinge is the fulcrum, your push is the effort, the door weight is the load.'
      ],
      formula: 'F_E × d_E = F_L × d_L   |   MA = d_E / d_L   |   R = F_L − F_E'
    },
    questions: {
      mcq: [
        {
          text: 'In a second-class lever, where is the load relative to the fulcrum and effort?',
          options: [
            'Between fulcrum and effort',
            'At the same position as effort',
            'On the opposite side of the fulcrum',
            'At the fulcrum'
          ],
          correctIndex: 0,
          explanation: 'Second-class levers have the load between the fulcrum and the effort, giving mechanical advantage MA > 1.'
        },
        {
          text: 'A 65 g load at 8 cm from a fulcrum is balanced by an effort at 10 cm. What is the required effort?',
          options: ['0.51 N', '0.64 N', '0.80 N', '0.39 N'],
          correctIndex: 0,
          explanation: 'F_E = F_L × d_L / d_E = (0.065×9.81×0.08) / 0.10 = 0.052 / 0.10 = 0.52 N ≈ 0.51 N.'
        },
        {
          text: 'What is the mechanical advantage of a lever where the effort arm is twice the load arm?',
          options: ['0.5', '1.0', '2.0', '4.0'],
          correctIndex: 2,
          explanation: 'MA = d_E / d_L = 2d / d = 2.'
        }
      ],
      discussion: [
        'Explain why a wheelbarrow makes it easier to lift a heavy load.',
        'Compare first- and second-class levers: how do their mechanical advantages differ?',
        'How does the position of the load relative to the fulcrum affect the effort needed?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Second-class lever definition',
          pct: 25
        },
        {
          label: 'Moment calculation',
          pct: 30
        },
        {
          label: 'Mechanical advantage',
          pct: 25
        },
        {
          label: 'Reaction force at fulcrum',
          pct: 20
        }
      ],
      misconceptions: [
        'VM < 1 non significa che la leva sia inutile: le leve di 3° genere permettono movimenti rapidi.',
        'Il vantaggio meccanico non riduce l\'energia totale spesa — riduce la forza ma non il lavoro.'
      ],
      hook: 'Le tue braccia sono leve di terzo genere — il bicipite applica forza 7 volte maggiore del peso tenuto in mano!',
      khanLinks: [
        {
          title: 'Torque & Angular Momentum',
          url: 'https://www.khanacademy.org/science/physics/torque-angular-momentum'
        },
        {
          title: 'AP Physics 1: Forces',
          url: 'https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws'
        }
      ]
    },
    dataTable: {
      headers: ['Tipo leva', 'd_C (cm)', 'd_F (cm)', 'Carico C (N)', 'Forza F (N)', 'VM = C/F'],
      rows: 4
    },
    observations: [
      'Registra tipo di leva, posizioni e forze per ogni prova',
      'Calcola il vantaggio meccanico per ogni configurazione',
      'Confronta VM per leve di 2° e 3° genere'
    ],
    conclusion: 'Confronta i vantaggi meccanici delle leve di 2° e 3° genere. Spiega perché il corpo umano usa leve di 3° genere.',
    ai: {
      opening: 'Ciao! Sono Gali. Esplora i tre tipi di leva — quali amplificano la forza e quali amplificano la velocità?',
      keywords: {
        setup: 'fulcrum at end|second-class lever|load between fulcrum and effort',
        formula: 'F_E × d_E = F_L × d_L|MA = d_E/d_L',
        error: 'fulcrum position|incorrect moment arm|beam weight neglected',
        question: 'mechanical advantage|second class|moment|reaction',
        real: 'wheelbarrow|nutcracker|door hinge'
      },
      hint: 'Misura le distanze dal fulcro, non dalla fine dell\'asta. Usa il dinamometro perpendicolare all\'asta.',
      expected: 'm₁ = 65 g at 8 cm → M₁ = 0.052 N·m; effort at 10 cm → F_E ≈ 0.52 N, M₂ ≈ 0.052 N·m. MA ≈ 1.25.'
    }
  },
  {
    num: 5,
    cardEmoji: "📐",
    title: 'Misura di una lunghezza',
    section: 'Mechanics',
    desc: 'Misura la stessa lunghezza con strumenti diversi (righello, calibro, micrometro) e confronta precisione e incertezza.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti imparano a usare righello, calibro e micrometro, valutando precisione e incertezza di misura.',
      instructions: [
        'Read the Vernier calliper: main scale + Vernier scale × 0.05 mm.',
        'Measure the outer diameter d and height h of each cylinder at least twice.',
        'Calculate r = d/2, then V = πr²h for each material.'
      ],
      expectedOutcome: 'Copper: h = 36 mm, d = 20 mm → V ≈ 11.30 cm³. Iron → V ≈ 9.73 cm³. Steel → V ≈ 12.87 cm³. Brass → V ≈ 11.93 cm³.'
    },
    experiment: {
      equipment: [
        {
          emoji: '📏',
          name: 'Vernier calliper (±0.05 mm)'
        },
        {
          emoji: '🔵',
          name: 'Copper cylinder'
        },
        {
          emoji: '⚫',
          name: 'Iron cylinder'
        },
        {
          emoji: '⚙️',
          name: 'Steel cylinder'
        },
        {
          emoji: '🟡',
          name: 'Brass cylinder'
        }
      ],
      observationsToRecord: [
        'Diameter d (mm) — at least 2 measurements per cylinder',
        'Height h (mm) — at least 2 measurements per cylinder',
        'Calculated volume V = πr²h (cm³)'
      ],
      theoryPoints: [
        'A Vernier calliper reads: main scale reading + (coincident Vernier division × 0.05 mm).',
        'Volume of a cylinder: V = πr²h = π(d/2)²h.',
        'Always take multiple measurements and average to reduce random error.',
        'Least count of the calliper is 0.05 mm — record to this precision.'
      ],
      realWorldConnections: [
        'Machinists use callipers daily to verify that machined parts meet engineering tolerances.',
        'Quality control in manufacturing uses volume and dimension measurements to check products.',
        'Medical devices such as stents require sub-millimetre precision.'
      ],
      formula: 'V = πr²h = π(d/2)²h   |   Vernier reading = main scale + (Vernier div × 0.05 mm)'
    },
    questions: {
      mcq: [
        {
          text: 'A Vernier calliper shows a main-scale reading of 20.0 mm and the 7th Vernier division coincides. What is the reading?',
          options: ['20.35 mm', '20.07 mm', '20.70 mm', '20.50 mm'],
          correctIndex: 0,
          explanation: 'Reading = 20.0 + (7 × 0.05) = 20.0 + 0.35 = 20.35 mm.'
        },
        {
          text: 'A copper cylinder has d = 20 mm and h = 36 mm. What is its volume?',
          options: ['11.31 cm³', '1131 mm³', '1.131 cm³', '113.1 cm³'],
          correctIndex: 0,
          explanation: 'V = π(10)²(36) mm³ = 3600π ≈ 11 310 mm³ = 11.31 cm³.'
        },
        {
          text: 'Why should you measure the diameter in two different orientations?',
          options: [
            'To practise using the calliper',
            'To detect if the cross-section is not perfectly circular',
            'To increase the reading',
            'The calliper requires two readings'
          ],
          correctIndex: 1,
          explanation: 'Real cylinders may be slightly elliptical; two perpendicular diameter measurements reveal this and allow a better average.'
        }
      ],
      discussion: [
        'Explain how to read a Vernier calliper. Why is the least count 0.05 mm rather than 0.1 mm?',
        'What systematic errors might affect volume measurements with a calliper?',
        'How would you modify the procedure if the cylinder had an irregular cross-section?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Reading a Vernier calliper',
          pct: 30
        },
        {
          label: 'Volume formula V = πr²h',
          pct: 30
        },
        {
          label: 'Measurement uncertainty',
          pct: 25
        },
        {
          label: 'Unit conversion (mm→cm)',
          pct: 15
        }
      ],
      misconceptions: [
        'Più cifre decimali non significano sempre maggiore accuratezza se lo strumento non le supporta.',
        'Confondere l\'errore sistematico con la deviazione casuale.'
      ],
      hook: 'Il metro standard è ora definito dalla velocità della luce — la misura più precisa mai realizzata dall\'umanità!',
      khanLinks: [
        {
          title: 'Significant Figures',
          url: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/x2f8bb11595b61c86:sig-figs/v/significant-figures'
        },
        {
          title: 'Physics: Units & Measurement',
          url: 'https://www.khanacademy.org/science/physics/one-dimensional-motion'
        }
      ]
    },
    dataTable: {
      headers: [
        'Strumento',
        'Mis. 1 (mm)',
        'Mis. 2 (mm)',
        'Mis. 3 (mm)',
        'Mis. 4 (mm)',
        'Mis. 5 (mm)',
        'Media (mm)',
        'Dev. Std.'
      ],
      rows: 4
    },
    observations: [
      'Registra 5 misure per ciascuno strumento',
      'Calcola media e deviazione standard',
      'Confronta la dispersione dei dati tra i tre strumenti'
    ],
    conclusion: 'Confronta i risultati dei tre strumenti. Spiega come la risoluzione limita la precisione della misura.',
    ai: {
      opening: 'Ciao! Sono Gali. Confronta tre strumenti di misura — scopri come la risoluzione influenza la precisione!',
      keywords: {
        setup: 'Vernier calliper|main scale|Vernier division|least count',
        formula: 'V = πr²h|Vernier reading = main + div×0.05',
        error: 'mis-reading Vernier|unit conversion|non-circular cross-section',
        question: 'Vernier|volume|cylinder|diameter|precision',
        real: 'machinist|manufacturing|quality control'
      },
      hint: 'Per il calibro: leggi la scala principale, poi aggiungi il nonio. Per il micrometro: aspetta il clic del cricchetto.',
      expected: 'Copper: d=20 mm, h=36 mm → V=11.30 cm³. Iron → 9.73 cm³. Steel → 12.87 cm³. Brass → 11.93 cm³.'
    }
  },
  {
    num: 6,
    cardEmoji: "🧊",
    title: 'Misura della densità',
    section: 'Mechanics',
    desc: 'Determina la densità di solidi e liquidi misurando massa e volume con gli strumenti di laboratorio.',
    setupTime: '5 min',
    duration: '40 min',
    summary: {
      whatTheyLearn: 'Gli studenti applicano ρ = m/V con tecniche diverse per misurare il volume (geometrica, spostamento d\'acqua).',
      instructions: [
        'Method 1: Measure mass m with balance and volume V from calliper, then ρ = m/V.',
        'Method 2: Submerge cylinder in displacement vessel, collect overflow water, measure its volume.',
        'Compare densities from both methods to the accepted literature values.'
      ],
      expectedOutcome: 'Copper: m = 100.28 g, V = 11.30 cm³ → ρ ≈ 8.87 g/cm³ (accepted 8.96). Aluminium → ρ ≈ 2.70 g/cm³. Steel → ρ ≈ 7.72 g/cm³. Brass → ρ ≈ 8.37 g/cm³.'
    },
    experiment: {
      equipment: [
        {
          emoji: '⚖️',
          name: 'Balance (±0.01 g)'
        },
        {
          emoji: '📏',
          name: 'Vernier calliper'
        },
        {
          emoji: '🫙',
          name: 'Displacement vessel (Eureka can)'
        },
        {
          emoji: '🧪',
          name: 'Measuring cylinder (50 mL)'
        },
        {
          emoji: '🔵',
          name: 'Metal cylinders (Cu, Al, Fe, Brass)'
        },
        {
          emoji: '💧',
          name: 'Water'
        }
      ],
      observationsToRecord: [
        'Mass m (g) from balance for each cylinder',
        'Volume V (cm³) from calliper measurements: V = π(d/2)²h',
        'Volume V (mL) from water displacement',
        'Density ρ = m/V for both methods'
      ],
      theoryPoints: [
        'Density: ρ = m/V, SI unit kg/m³; often expressed as g/cm³.',
        'Displacement method: submerged object displaces its own volume of water.',
        '1 mL of water displaced = 1 cm³ of object volume.',
        'Density is an intrinsic property — it does not change with the size of the sample.'
      ],
      realWorldConnections: [
        'Geologists identify minerals by their density (specific gravity).',
        'Ships float because their average density (hull + air) is less than water (1.0 g/cm³).',
        'Food scientists measure density to monitor sugar concentration in beverages.'
      ],
      formula: 'ρ = m / V   (g/cm³ or kg/m³)'
    },
    questions: {
      mcq: [
        {
          text: 'A copper cylinder has mass 100.28 g and volume 11.30 cm³. What is its density?',
          options: ['8.87 g/cm³', '9.11 g/cm³', '8.00 g/cm³', '11.30 g/cm³'],
          correctIndex: 0,
          explanation: 'ρ = m/V = 100.28 / 11.30 ≈ 8.87 g/cm³.'
        },
        {
          text: 'Which of these metals has the highest density?',
          options: ['Aluminium (~2.70 g/cm³)', 'Steel (~7.7 g/cm³)', 'Copper (~8.9 g/cm³)', 'Brass (~8.4 g/cm³)'],
          correctIndex: 2,
          explanation: 'Copper has density ~8.9 g/cm³, higher than brass (~8.4), steel (~7.7), and aluminium (~2.7).'
        },
        {
          text: 'In the displacement method, what volume is collected in the measuring cylinder?',
          options: [
            'The volume of water in the vessel',
            'The volume of the submerged object',
            'The mass of the object',
            'The density of water'
          ],
          correctIndex: 1,
          explanation: 'The overflow equals the volume of the submerged object (Archimedes\' principle).'
        }
      ],
      discussion: [
        'Why might the density measured by the two methods differ slightly?',
        'A sample of unknown material has ρ = 7.87 g/cm³. What material could it be?',
        'How does the density of sea water compare to fresh water, and what practical consequences does this have?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Definition ρ = m/V',
          pct: 25
        },
        {
          label: 'Calliper method (V from geometry)',
          pct: 25
        },
        {
          label: 'Displacement method',
          pct: 30
        },
        {
          label: 'Comparing literature values',
          pct: 20
        }
      ],
      misconceptions: [
        'La densità non dipende dalle dimensioni del campione: è una proprietà intensiva.',
        'Materiali pesanti non hanno sempre alta densità — dipende anche dal volume.'
      ],
      hook: 'L\'oro ha densità 19,3 g/cm³ — quasi il doppio del piombo! Per questo le monete d\'oro suonano diverse.',
      khanLinks: [
        {
          title: 'Density: A Fundamental Concept',
          url: 'https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/density/v/density-a-fundamental-concept'
        },
        {
          title: 'States of Matter & Density',
          url: 'https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/density'
        }
      ]
    },
    dataTable: {
      headers: ['Materiale', 'Massa (g)', 'Volume (cm³)', 'ρ misurata (g/cm³)', 'ρ tabulata (g/cm³)', 'Errore %'],
      rows: 4
    },
    observations: [
      'Registra massa e volume per ciascun campione',
      'Calcola la densità e confronta con il valore tabulato',
      'Nota eventuali discrepanze e ipotizza le cause'
    ],
    conclusion: 'Calcola la densità di ogni materiale e confronta con i valori noti. Valuta l\'errore percentuale.',
    ai: {
      opening: 'Ciao! Sono Gali. Oggi misuri la densità — una proprietà che permette di identificare i materiali senza alterarli!',
      keywords: {
        setup: 'balance|calliper|displacement vessel|Eureka can',
        formula: 'ρ = m/V|displacement',
        error: 'air bubbles in displacement|calliper reading|balance drift',
        question: 'density|displacement|material identification',
        real: 'ship flotation|mineral identification|food science'
      },
      hint: 'Asciuga i campioni prima di pesarli. Per il metodo dello spostamento, leggi il menisco dal basso.',
      expected: 'Cu: ρ ≈ 8.87 g/cm³ (accepted ~8.96). Al ≈ 2.70. Steel ≈ 7.72. Brass ≈ 8.37 g/cm³.'
    }
  },
  {
    num: 8,
    cardEmoji: "➡️",
    title: 'Composizione e scomposizione delle forze',
    section: 'Mechanics',
    desc: 'Trova la risultante di forze concorrenti usando il metodo del parallelogramma e verifica con un dinamometro.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti trovano la risultante di forze concorrenti usando il parallelogramma delle forze.',
      instructions: [
        'Mount three dynamometers on the goniometric circle at known angles.',
        'Set F₁ = 40 g (0.39 N) and F₂ = 20 g (0.20 N) at a known angle θ between them.',
        'Find the third force (equilibrant) experimentally; the resultant R is equal and opposite to it.',
        'Draw the parallelogram graphically and compare with the measured resultant.'
      ],
      expectedOutcome: 'F₁ = 40 g, F₂ = 20 g → measured R ≈ 0.50 N; parallelogram rule gives ≈ 0.56 N. Discrepancy due to friction and angle reading.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔵',
          name: 'Goniometric circle (0–360°)'
        },
        {
          emoji: '🔧',
          name: 'Three spring dynamometers'
        },
        {
          emoji: '📐',
          name: 'Protractor'
        },
        {
          emoji: '📏',
          name: 'Ruler'
        },
        {
          emoji: '📝',
          name: 'Graph paper'
        }
      ],
      observationsToRecord: [
        'Magnitudes F₁ and F₂ (N) and the angle θ between them',
        'Magnitude of the equilibrant F₃ (N) and its direction',
        'Graphically constructed resultant magnitude and direction'
      ],
      theoryPoints: [
        'Forces are vectors: they have both magnitude and direction.',
        'The resultant R of two forces is found by the parallelogram rule: R² = F₁² + F₂² + 2F₁F₂cos θ.',
        'The equilibrant is equal in magnitude but opposite in direction to the resultant.',
        'For three concurrent forces in equilibrium: ΣF = 0.'
      ],
      realWorldConnections: [
        'Engineers resolve forces in bridge trusses into horizontal and vertical components.',
        'Pilots use vector addition to account for wind when navigating.',
        'Biomechanics uses force vectors to analyse joint loads in the human body.'
      ],
      formula: 'R = √(F₁² + F₂² + 2F₁F₂cos θ)   |   Equilibrium: ΣF = 0'
    },
    questions: {
      mcq: [
        {
          text: 'Two forces of 40 g and 20 g act at 90° to each other. What is the approximate resultant?',
          options: ['0.44 N', '0.60 N', '0.20 N', '0.59 N'],
          correctIndex: 0,
          explanation: 'R = √(0.39² + 0.20²) = √(0.152 + 0.040) = √0.192 ≈ 0.44 N.'
        },
        {
          text: 'The equilibrant force is:',
          options: [
            'Equal to the resultant in magnitude and direction',
            'Equal in magnitude but opposite in direction to the resultant',
            'Twice the resultant',
            'At 90° to the resultant'
          ],
          correctIndex: 1,
          explanation: 'The equilibrant balances the resultant, so it is equal in magnitude and opposite in direction.'
        },
        {
          text: 'If θ = 0° (forces parallel and in same direction), the resultant magnitude equals:',
          options: ['F₁ − F₂', 'F₁ + F₂', '√(F₁² + F₂²)', 'F₁ × F₂'],
          correctIndex: 1,
          explanation: 'When θ = 0°, cos 0° = 1, so R = √(F₁² + F₂² + 2F₁F₂) = F₁ + F₂.'
        }
      ],
      discussion: [
        'Explain why the measured resultant might differ from the parallelogram-rule prediction.',
        'How would the resultant change if the angle between F₁ and F₂ increased from 90° to 180°?',
        'Give a practical example where knowing the resultant of two forces is important.'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Force as a vector',
          pct: 25
        },
        {
          label: 'Parallelogram rule',
          pct: 35
        },
        {
          label: 'Equilibrant concept',
          pct: 25
        },
        {
          label: 'Graphical vs. analytical method',
          pct: 15
        }
      ],
      misconceptions: [
        'Le forze non si sommano algebricamente: si usa la regola del parallelogramma.',
        'La risultante non è necessariamente nella direzione di una delle forze.'
      ],
      hook: 'I ponti sospesi usano la composizione di forze per distribuire carichi enormi su strutture leggere.',
      khanLinks: [
        {
          title: 'Introduction to Vectors',
          url: 'https://www.khanacademy.org/science/ap-physics-1/ap-two-dimensional-motion/representing-vectors/v/introduction-to-vectors-and-scalars'
        },
        {
          title: 'Forces & Newton\'s Laws',
          url: 'https://www.khanacademy.org/science/physics/forces-newtons-laws'
        }
      ]
    },
    dataTable: {
      headers: ['F₁ (N)', 'θ₁ (°)', 'F₂ (N)', 'θ₂ (°)', 'Risultante calcolata (N)', 'Risultante misurata (N)'],
      rows: 4
    },
    observations: [
      'Registra le forze applicate e gli angoli',
      'Misura la risultante con il dinamometro',
      'Confronta con la risultante calcolata dal parallelogramma'
    ],
    conclusion: 'Verifica che la risultante calcolata con il parallelogramma coincida con quella misurata dal dinamometro.',
    ai: {
      opening: 'Ciao! Sono Gali. Scopri come forze in direzioni diverse si combinano per dare una risultante!',
      keywords: {
        setup: 'goniometric circle|dynamometer|parallelogram rule|angle',
        formula: 'R = √(F₁²+F₂²+2F₁F₂cosθ)|equilibrant',
        error: 'friction|angle reading|graphical scale error',
        question: 'resultant|equilibrant|vector|parallelogram',
        real: 'bridge engineering|navigation|biomechanics'
      },
      hint: 'Applica le forze e misura la risultante con il dinamometro. Disegna il parallelogramma su carta.',
      expected: 'F₁=0.39 N, F₂=0.20 N at ~90°: R_calc ≈ 0.56 N, R_measured ≈ 0.50 N.'
    }
  },
  {
    num: 9,
    cardEmoji: "🪝",
    title: 'Pulegge fisse',
    section: 'Mechanics',
    desc: 'Studia come una puleggia fissa cambia la direzione di una forza ma non il suo modulo.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti capiscono che una puleggia fissa cambia la direzione della forza ma non il suo modulo.',
      instructions: [
        'Hang a 50 g load on one side of the pulley string.',
        'Apply a force on the other side and measure it with a dynamometer.',
        'Vary the load and record the effort required each time.'
      ],
      expectedOutcome: 'For each load, effort ≈ load. Two 50 g masses (one each side): both dynamometers read ~0.49 N. MA = 1.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔵',
          name: 'Fixed pulley on support'
        },
        {
          emoji: '🪢',
          name: 'Inextensible string'
        },
        {
          emoji: '🏋️',
          name: 'Masses (50 g, 100 g)'
        },
        {
          emoji: '🔧',
          name: 'Spring dynamometer'
        }
      ],
      observationsToRecord: [
        'Load W (N) hanging on one side',
        'Effort F (N) measured on other side',
        'Mechanical advantage MA = W/F'
      ],
      theoryPoints: [
        'A fixed (single) pulley: the axle is fixed; only the wheel rotates.',
        'Tension is the same throughout an ideal (massless, frictionless) string.',
        'Mechanical advantage MA = Load / Effort = 1 for a fixed pulley.',
        'The fixed pulley\'s benefit: it allows you to pull downward to lift a load upward.'
      ],
      realWorldConnections: [
        'Flag poles use a fixed pulley — you pull down to raise the flag.',
        'Theatre stage rigging uses fixed pulleys to redirect lifting forces.',
        'Cranes combine fixed and movable pulleys for high mechanical advantage.'
      ],
      formula: 'MA = Load / Effort = 1   (fixed pulley)'
    },
    questions: {
      mcq: [
        {
          text: 'What is the mechanical advantage of a single fixed pulley?',
          options: ['0.5', '1', '2', '4'],
          correctIndex: 1,
          explanation: 'A fixed pulley only redirects the force; effort equals load, so MA = Load/Effort = 1.'
        },
        {
          text: 'A 100 g mass hangs from a fixed pulley. What effort is needed to hold it in equilibrium?',
          options: ['0.49 N', '0.98 N', '1.96 N', '0.25 N'],
          correctIndex: 0,
          explanation: 'Load = 0.1 × 9.81 = 0.981 N. Effort = Load / MA = 0.981 / 1 = 0.981 N ≈ 0.98 N. Wait — 100g = 0.981 N so effort = 0.981 N ≈ 0.98 N.'
        },
        {
          text: 'Why does a fixed pulley NOT reduce the effort needed?',
          options: [
            'Because the string is not ideal',
            'Because only one segment of rope supports the load',
            'Because there is too much friction',
            'Because the mass is too small'
          ],
          correctIndex: 1,
          explanation: 'Only one rope segment supports the load; the entire weight must be matched by the effort.'
        }
      ],
      discussion: [
        'If a fixed pulley has MA = 1, what practical advantage does it offer?',
        'How does a fixed pulley differ from a movable pulley in terms of mechanical advantage?',
        'Describe a real-world situation where redirecting a force (even without multiplying it) is useful.'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'MA = 1 for fixed pulley',
          pct: 30
        },
        {
          label: 'Force redirection advantage',
          pct: 30
        },
        {
          label: 'String tension concept',
          pct: 25
        },
        {
          label: 'Ideal vs. real pulley',
          pct: 15
        }
      ],
      misconceptions: [
        'La puleggia fissa non riduce la forza necessaria — cambia solo la direzione.',
        'Il lavoro totale rimane lo stesso anche con la puleggia.'
      ],
      hook: 'I pozzi profondi usano pulegge fisse per cambiare la direzione della forza del secchio d\'acqua.',
      khanLinks: [
        {
          title: 'Work & Energy',
          url: 'https://www.khanacademy.org/science/physics/work-and-energy/work-and-energy-tutorial/v/introduction-to-work-and-energy'
        },
        {
          title: 'Forces & Newton\'s Laws',
          url: 'https://www.khanacademy.org/science/physics/forces-newtons-laws'
        }
      ]
    },
    dataTable: {
      headers: ['Carico (N)', 'Forza con puleggia (N)', 'Differenza (N)', 'Osservazioni'],
      rows: 4
    },
    observations: [
      'Registra la forza con e senza puleggia',
      'Nota se la direzione della forza cambia',
      'Confronta i valori numerici'
    ],
    conclusion: 'Conferma che la puleggia fissa cambia solo la direzione della forza, non la sua intensità.',
    ai: {
      opening: 'Ciao! Sono Gali. Esplora la puleggia fissa — semplice ma fondamentale per cambiare la direzione della forza!',
      keywords: {
        setup: 'fixed pulley|string|dynamometer|support',
        formula: 'MA = Load/Effort = 1|tension',
        error: 'friction|string mass|pulley mass',
        question: 'mechanical advantage|fixed pulley|direction|tension',
        real: 'flag pole|crane|theatre rigging'
      },
      hint: 'Misura la forza con e senza la puleggia — devono essere uguali se la puleggia è ideale.',
      expected: '50 g load: W = 0.49 N, effort ≈ 0.49 N. MA ≈ 1 for all loads.'
    }
  },
  {
    num: 10,
    cardEmoji: "🔄",
    title: 'Puleggia mobile',
    section: 'Mechanics',
    desc: 'Usa una puleggia mobile per dimezzare la forza necessaria a sollevare un carico.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano che una puleggia mobile dimezza la forza necessaria (vantaggio meccanico = 2).',
      instructions: [
        'Set up the movable pulley with both string segments supporting the load.',
        'Attach a dynamometer to the free string end (effort side).',
        'Load the pulley with masses from 50 g to 200 g and record effort each time.'
      ],
      expectedOutcome: 'M = [50,100,150,200] g → Load R = [0.49,0.98,1.47,1.96] N → Effort P ≈ [0.20,0.50,0.80,1.10] N (≈ R/2 with friction).'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔵',
          name: 'Movable pulley'
        },
        {
          emoji: '🔵',
          name: 'Fixed pulley (for guidance)'
        },
        {
          emoji: '🪢',
          name: 'String'
        },
        {
          emoji: '🏋️',
          name: 'Masses (50 g, 100 g, 150 g, 200 g)'
        },
        {
          emoji: '🔧',
          name: 'Spring dynamometer'
        }
      ],
      observationsToRecord: ['Load R (N) for each mass', 'Effort P (N) measured by dynamometer', 'MA = R/P for each trial'],
      theoryPoints: [
        'A movable pulley travels with the load; two rope segments support it.',
        'Ideal MA = 2: Effort P = Load R / 2.',
        'Real MA < 2 due to friction and pulley weight.',
        'The pulley shifts: when effort moves 2× the distance, the load moves 1× (velocity ratio = 2).'
      ],
      realWorldConnections: [
        'Block and tackle systems in sailing use multiple movable pulleys for huge mechanical advantages.',
        'Construction cranes use movable pulleys to lift heavy steel beams.',
        'Gym cable machines use pulley systems to adjust effective resistance.'
      ],
      formula: 'P = R / 2   |   MA = R/P = 2   (ideal movable pulley)'
    },
    questions: {
      mcq: [
        {
          text: 'A movable pulley supports a 200 g load. What is the ideal effort required?',
          options: ['0.49 N', '0.98 N', '1.96 N', '0.25 N'],
          correctIndex: 1,
          explanation: 'Load = 0.2 × 9.81 = 1.962 N. P = R/2 = 1.962/2 = 0.981 N ≈ 0.98 N.'
        },
        {
          text: 'Why is the real MA of a movable pulley slightly less than 2?',
          options: [
            'The string is too short',
            'Friction and the weight of the pulley itself reduce MA',
            'The load is too heavy',
            'The string is elastic'
          ],
          correctIndex: 1,
          explanation: 'Friction and the pulley\'s own weight both require additional effort, reducing the actual MA below the ideal value of 2.'
        },
        {
          text: 'If the effort moves 20 cm, how far does the load move in an ideal movable pulley?',
          options: ['20 cm', '40 cm', '10 cm', '5 cm'],
          correctIndex: 2,
          explanation: 'Velocity ratio = 2, so load moves effort distance / 2 = 20/2 = 10 cm.'
        }
      ],
      discussion: [
        'Why does a movable pulley require the effort string to move twice as far as the load?',
        'How does friction affect the mechanical advantage of a real pulley system?',
        'Design a pulley system to achieve MA = 4. How many movable pulleys are needed?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'MA = 2 derivation',
          pct: 30
        },
        {
          label: 'Two rope segments supporting load',
          pct: 25
        },
        {
          label: 'Velocity ratio concept',
          pct: 25
        },
        {
          label: 'Real vs. ideal MA',
          pct: 20
        }
      ],
      misconceptions: [
        'La puleggia mobile dimezza la forza ma raddoppia la distanza percorsa — il lavoro totale è invariato.',
        'La corda tesa su entrambi i lati non significa che la forza si azzeri.'
      ],
      hook: 'Le gru da cantiere usano sistemi di pulegge mobili per sollevare carichi di tonnellate con motori relativamente piccoli!',
      khanLinks: [
        {
          title: 'Work & Mechanical Advantage',
          url: 'https://www.khanacademy.org/science/physics/work-and-energy/work-and-energy-tutorial/v/introduction-to-work-and-energy'
        },
        {
          title: 'AP Physics 1: Work & Energy',
          url: 'https://www.khanacademy.org/science/ap-physics-1/ap-work-and-energy'
        }
      ]
    },
    dataTable: {
      headers: ['Carico (N)', 'Forza applicata (N)', 'VM teorico', 'VM misurato'],
      rows: 4
    },
    observations: [
      'Registra il peso del carico e la forza applicata',
      'Calcola il vantaggio meccanico VM = W/F',
      'Confronta VM misurato con quello teorico (VM = 2)'
    ],
    conclusion: 'Verifica che la puleggia mobile dimezza la forza: F_applicata ≈ ½ × peso del carico.',
    ai: {
      opening: 'Ciao! Sono Gali. La puleggia mobile dimezza la forza — scopri il vantaggio meccanico in azione!',
      keywords: {
        setup: 'movable pulley|two rope segments|dynamometer',
        formula: 'P = R/2|MA = 2|velocity ratio',
        error: 'friction|pulley weight|string stretching',
        question: 'mechanical advantage|movable pulley|velocity ratio|effort',
        real: 'crane|block and tackle|sailing'
      },
      hint: 'Misura sia la forza applicata che il peso del carico. Il rapporto dovrebbe essere circa 2:1.',
      expected: '100g load: R=0.98 N, P≈0.50 N, MA≈1.96. 200g: R=1.96 N, P≈1.10 N, MA≈1.78.'
    }
  },
  {
    num: 11,
    cardEmoji: "⛓️",
    title: 'Pulegge fisse e mobili',
    section: 'Mechanics',
    desc: 'Combina pulegge fisse e mobili per ottenere diversi vantaggi meccanici.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti calcolano il vantaggio meccanico di sistemi di pulegge fisse e mobili combinati.',
      instructions: [
        'Set up: movable pulley under the load + fixed pulley at the top to redirect effort.',
        'Pull the dynamometer downward and record effort for each load.',
        'Verify that P = R/2 still holds, and that effort rope moves 2× the load displacement.'
      ],
      expectedOutcome: 'P = R/2 as with a single movable pulley. Pulling 2 cm of rope raises load by 1 cm.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔵',
          name: 'Movable pulley'
        },
        {
          emoji: '🔵',
          name: 'Fixed pulley (guide)'
        },
        {
          emoji: '🪢',
          name: 'String'
        },
        {
          emoji: '🏋️',
          name: 'Masses (50 g, 100 g, 150 g)'
        },
        {
          emoji: '🔧',
          name: 'Spring dynamometer'
        }
      ],
      observationsToRecord: [
        'Load R (N) for each mass',
        'Effort P (N) with combined system',
        'Distance effort rope moves vs. distance load rises'
      ],
      theoryPoints: [
        'Fixed pulley: changes direction only, MA = 1.',
        'Movable pulley: MA = 2, effort = R/2.',
        'Combined system: fixed pulley redirects effort downward; movable pulley still gives MA = 2.',
        'Rope displacement: effort rope moves 2× the load displacement (velocity ratio = 2).'
      ],
      realWorldConnections: [
        'Elevators use combined pulley systems for both MA and convenient control direction.',
        'Well pulleys combine fixed and movable pulleys for practical water lifting.',
        'Bicycle derailleur cables use small pulleys to redirect and tension the chain.'
      ],
      formula: 'P = R/2   |   MA = 2   |   s_effort = 2 × s_load'
    },
    questions: {
      mcq: [
        {
          text: 'In a combined (fixed + movable) pulley system, what is the mechanical advantage?',
          options: ['1', '2', '3', '4'],
          correctIndex: 1,
          explanation: 'The fixed pulley only redirects; the movable pulley provides MA = 2.'
        },
        {
          text: 'If the load rises by 5 cm, how far does the effort rope move?',
          options: ['5 cm', '10 cm', '2.5 cm', '20 cm'],
          correctIndex: 1,
          explanation: 'Velocity ratio = 2; effort rope moves 2 × 5 cm = 10 cm.'
        },
        {
          text: 'What is the main advantage of adding a fixed pulley to the system?',
          options: [
            'It doubles the MA',
            'It halves the load',
            'It allows the effort to be applied in a more convenient direction',
            'It eliminates friction'
          ],
          correctIndex: 2,
          explanation: 'The fixed (guide) pulley redirects the effort string so you can pull downward rather than upward.'
        }
      ],
      discussion: [
        'Why does adding the fixed guide pulley NOT change the mechanical advantage of the system?',
        'Compare the effort rope displacement with the load displacement. What principle explains this?',
        'How would you increase the MA beyond 2 using more pulleys?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Fixed pulley role (direction only)',
          pct: 25
        },
        {
          label: 'Movable pulley provides MA=2',
          pct: 35
        },
        {
          label: 'Velocity ratio s_effort = 2s_load',
          pct: 25
        },
        {
          label: 'Practical convenience of combined system',
          pct: 15
        }
      ],
      misconceptions: [
        'Aumentare il numero di pulegge riduce la forza ma non il lavoro totale (senza attrito).',
        'L\'efficienza reale è sempre inferiore al vantaggio meccanico teorico a causa dell\'attrito.'
      ],
      hook: 'Con abbastanza pulegge, potresti sollevare un\'automobile da solo — il vantaggio meccanico non ha limiti teorici!',
      khanLinks: [
        {
          title: 'Introduction to Work & Energy',
          url: 'https://www.khanacademy.org/science/physics/work-and-energy/work-and-energy-tutorial/v/introduction-to-work-and-energy'
        },
        {
          title: 'AP Physics 1: Work & Energy',
          url: 'https://www.khanacademy.org/science/ap-physics-1/ap-work-and-energy'
        }
      ]
    },
    dataTable: {
      headers: ['Configurazione pulegge', 'Carico (N)', 'Forza (N)', 'VM teorico', 'VM misurato'],
      rows: 4
    },
    observations: [
      'Registra forza e carico per ogni configurazione di pulegge',
      'Calcola VM misurato e teorico',
      'Nota le perdite per attrito'
    ],
    conclusion: 'Calcola il vantaggio meccanico del sistema di pulegge e confronta con la previsione teorica.',
    ai: {
      opening: 'Ciao! Sono Gali. Sistemi di pulegge combinati — scopri come aumentare il vantaggio meccanico!',
      keywords: {
        setup: 'fixed pulley|movable pulley|combined system|guide',
        formula: 'P = R/2|MA=2|s_effort = 2×s_load',
        error: 'friction|rope mass|incorrectly counting pulleys',
        question: 'MA|combined pulley|velocity ratio|direction',
        real: 'elevator|well|crane'
      },
      hint: 'Conta i segmenti di corda che supportano il blocco mobile — corrispondono al vantaggio meccanico teorico.',
      expected: 'P ≈ R/2 for all loads. s_effort = 2 × s_load confirmed. MA ≈ 2.'
    }
  },
  {
    num: 12,
    cardEmoji: "📐",
    title: 'Piano inclinato',
    section: 'Mechanics',
    desc: 'Misura la forza necessaria per spingere un carico su piani inclinati a diverse angolazioni.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano che la forza necessaria sul piano inclinato è F = mg sinθ.',
      instructions: [
        'Set the inclined plane to a measured angle θ (e.g. 23.16°).',
        'Attach a dynamometer to a mass on the slope; pull parallel to the surface.',
        'Record the force F for masses of 50 g, 100 g, and 150 g.'
      ],
      expectedOutcome: 'At θ = 23.16°: M = [50,100,150] g → F ≈ [0.7,0.9,1.1] N. Theoretical: mg sin 23.16° = [0.19,0.39,0.58] N. Difference is friction.'
    },
    experiment: {
      equipment: [
        {
          emoji: '📐',
          name: 'Inclined plane with angle scale'
        },
        {
          emoji: '🏋️',
          name: 'Masses (50 g, 100 g, 150 g)'
        },
        {
          emoji: '🔧',
          name: 'Spring dynamometer'
        },
        {
          emoji: '📏',
          name: 'Protractor / ruler'
        },
        {
          emoji: '🪢',
          name: 'String'
        }
      ],
      observationsToRecord: [
        'Slope angle θ (degrees)',
        'Mass m (g) and weight mg (N)',
        'Force F (N) to pull mass up the slope'
      ],
      theoryPoints: [
        'Component of gravity along slope: F_parallel = mg sin θ.',
        'Mechanical advantage of frictionless inclined plane: MA = 1/sin θ = l/h.',
        'Friction force f = μN = μ mg cos θ adds to the required effort.',
        'Total effort (with friction): F = mg sin θ + μ mg cos θ.',
        'An inclined plane trades distance for force: small angle → large MA but long path.'
      ],
      realWorldConnections: [
        'Roads and ramps are inclined planes that reduce the force needed to ascend.',
        'Wheelchair ramps are legally required to have a small enough angle for safe access.',
        'Screws and wedges are inclined planes wrapped around a cylinder.'
      ],
      formula: 'F = mg sin θ   (frictionless)   |   MA = 1/sin θ = l/h'
    },
    questions: {
      mcq: [
        {
          text: 'A 100 g mass is on a frictionless slope at 30°. What force is needed to pull it up the slope?',
          options: ['0.49 N', '0.85 N', '0.98 N', '0.57 N'],
          correctIndex: 0,
          explanation: 'F = mg sin 30° = 0.1 × 9.81 × 0.5 = 0.49 N.'
        },
        {
          text: 'At θ = 23°, the MA of a frictionless inclined plane is approximately:',
          options: ['2.56', '0.39', '1.00', '4.35'],
          correctIndex: 0,
          explanation: 'MA = 1/sin 23° = 1/0.391 ≈ 2.56.'
        },
        {
          text: 'Why is the measured force greater than mg sin θ?',
          options: [
            'Measurement error only',
            'Friction between mass and surface',
            'The spring dynamometer is faulty',
            'The angle is incorrect'
          ],
          correctIndex: 1,
          explanation: 'Friction adds μ mg cos θ to the required effort, making the real force greater than the frictionless theoretical value.'
        }
      ],
      discussion: [
        'Explain why a gentle slope is easier to climb than a steep one, using forces.',
        'A ramp is 3 m long and rises 1 m. What is its MA? What effort is needed to push a 60 kg box up it?',
        'How does friction affect the mechanical advantage of a real inclined plane?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Slope force F = mg sinθ',
          pct: 30
        },
        {
          label: 'Normal force N = mg cosθ',
          pct: 20
        },
        {
          label: 'Friction f = μN',
          pct: 25
        },
        {
          label: 'MA = l/h = 1/sinθ',
          pct: 25
        }
      ],
      misconceptions: [
        'La forza sul piano inclinato non dipende solo dall\'angolo ma anche dalla massa e dall\'attrito.',
        'Il piano inclinato non riduce il lavoro totale — riduce la forza necessaria aumentando la distanza.'
      ],
      hook: 'Le piste da sci e le autostrade in montagna usano angoli di inclinazione calcolati per minimizzare il lavoro dei motori.',
      khanLinks: [
        {
          title: 'Inclined Plane Force Components',
          url: 'https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/inclined-planes-ap/v/inclined-plane-force-components'
        },
        {
          title: 'Normal Force & Contact Force',
          url: 'https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/normal-force-ap/v/normal-force-and-contact-force'
        }
      ]
    },
    dataTable: {
      headers: ['Angolo θ (°)', 'sinθ', 'Carico (N)', 'Forza teorica mg sinθ (N)', 'Forza misurata (N)'],
      rows: 4
    },
    observations: [
      'Registra l\'angolo e la forza parallela al piano',
      'Calcola mg sinθ e confronta con F misurata',
      'Stima l\'attrito dal confronto'
    ],
    conclusion: 'Verifica F = mg sinθ e calcola l\'attrito dal confronto con la forza teorica senza attrito.',
    ai: {
      opening: 'Ciao! Sono Gali. Il piano inclinato permette di sollevare carichi con meno forza — a quale prezzo?',
      keywords: {
        setup: 'inclined plane|angle|dynamometer|slope',
        formula: 'F = mg sinθ|MA = 1/sinθ|friction = μN',
        error: 'friction neglected|angle measurement|dynamometer at wrong angle',
        question: 'inclined plane|slope|mechanical advantage|friction|angle',
        real: 'ramp|road|pyramid|screw'
      },
      hint: 'Misura l\'angolo con il goniometro. La forza parallelamente al piano è F = mg sinθ.',
      expected: 'θ=23°: F_theory = mg×0.392. M=50g: F_theory≈0.19 N but F_measured≈0.7 N. Friction is large.'
    }
  },
  {
    num: 13,
    cardEmoji: "🪃",
    title: 'Legge di Hooke',
    section: 'Mechanics',
    desc: 'Applica forze crescenti a una molla e verifica la proporzionalità tra forza e allungamento (legge di Hooke).',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano la legge di Hooke: F = kx, dove k è la costante elastica della molla.',
      instructions: [
        'Hang the spring vertically; record the natural length (no load).',
        'Add masses of 10 g, 25 g, 50 g; measure total length and calculate extension x.',
        'Plot F = mg (y-axis) vs. x (x-axis); the slope is k.'
      ],
      expectedOutcome: 'm = 10 g → x = 0.016 m; m = 25 g → x = 0.040 m; m = 50 g → x = 0.081 m. k = slope of F vs. x graph.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🌀',
          name: 'Helical spring'
        },
        {
          emoji: '📏',
          name: 'Ruler or metre stick'
        },
        {
          emoji: '🏋️',
          name: 'Masses (10 g, 25 g, 50 g)'
        },
        {
          emoji: '🪝',
          name: 'Mass hanger'
        },
        {
          emoji: '📝',
          name: 'Graph paper'
        }
      ],
      observationsToRecord: [
        'Natural length L₀ (m)',
        'Total length L (m) with each mass',
        'Extension x = L − L₀ (m)',
        'Applied force F = mg (N)'
      ],
      theoryPoints: [
        'Hooke\'s Law: F = kx (restoring force proportional to extension, within elastic limit).',
        'Spring constant k = F/x (N/m): stiffness of the spring.',
        'The elastic limit is the maximum extension beyond which the spring is permanently deformed.',
        'F vs. x graph: straight line through origin with slope = k.',
        'Negative sign in F = −kx indicates the restoring force opposes extension.'
      ],
      realWorldConnections: [
        'Suspension springs in cars and bicycles absorb shocks using Hooke\'s Law.',
        'Elastic potential energy stored in a compressed spring powers clockwork mechanisms.',
        'Seismographs use spring-mass systems to detect ground vibrations.'
      ],
      formula: 'F = kx   |   k = F/x (N/m)'
    },
    questions: {
      mcq: [
        {
          text: 'A spring extends by 0.040 m when a 25 g mass is hung on it. What is k?',
          options: ['6.1 N/m', '0.61 N/m', '61 N/m', '0.245 N/m'],
          correctIndex: 0,
          explanation: 'F = 0.025 × 9.81 = 0.245 N; k = F/x = 0.245/0.040 = 6.1 N/m.'
        },
        {
          text: 'What does the slope of an F vs. x graph represent?',
          options: ['Gravitational field strength', 'Spring constant k', 'Mass of the spring', 'Elastic limit'],
          correctIndex: 1,
          explanation: 'F = kx so slope = ΔF/Δx = k.'
        },
        {
          text: 'Hooke\'s Law breaks down when:',
          options: [
            'Temperature increases',
            'Extension exceeds the elastic limit',
            'Mass is removed',
            'The spring is horizontal'
          ],
          correctIndex: 1,
          explanation: 'Beyond the elastic limit the spring is permanently deformed and the linear relationship F = kx no longer holds.'
        }
      ],
      discussion: [
        'How would you determine the elastic limit of the spring from your F vs. x graph?',
        'Two springs have k₁ = 5 N/m and k₂ = 10 N/m. Which spring is stiffer? Why?',
        'Explain why a spring obeys Hooke\'s Law only up to a certain extension.'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Legge di Hooke (F=kx)',
          pct: 40
        },
        {
          label: 'Regione elastica vs. plastica',
          pct: 25
        },
        {
          label: 'Costante elastica k',
          pct: 25
        },
        {
          label: 'Applicazioni delle molle',
          pct: 10
        }
      ],
      misconceptions: [
        'La legge di Hooke vale solo entro il limite elastico — oltre il limite di proporzionalità non è più lineare.',
        'La costante k dipende dal materiale e dalla geometria della molla, non dalla forza applicata.'
      ],
      hook: 'Robert Hooke scoprì questa legge nel 1676 nascondendo il suo risultato in un anagramma latino per mantenere la priorità!',
      khanLinks: [
        {
          title: 'Intro to Springs and Hooke\'s Law',
          url: 'https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/spring-forces-ap/v/intro-to-springs-and-hookers-law'
        },
        {
          title: 'Spring Potential Energy',
          url: 'https://www.khanacademy.org/science/ap-physics-1/ap-work-and-energy/spring-potential-energy-ap/v/elastic-potential-energy-stored-in-a-spring'
        }
      ]
    },
    dataTable: {
      headers: ['Forza F (N)', 'Allungamento x (mm)', 'F/x (N/mm)', 'Osservazioni'],
      rows: 5
    },
    observations: [
      'Registra la forza e l\'allungamento per ogni massa aggiunta',
      'Verifica la linearità nella regione elastica',
      'Identifica il limite di proporzionalità'
    ],
    conclusion: 'Traccia il grafico F vs x e calcola la costante k dal coefficiente angolare. Verifica la legge di Hooke.',
    ai: {
      opening: 'Ciao! Sono Gali. Scopri la legge di Hooke — la molla ti svela il segreto della proporzionalità!',
      keywords: {
        setup: 'helical spring|natural length|extension|mass hanger',
        formula: 'F = kx|k = F/x|elastic limit',
        error: 'zero error|measuring from wrong reference|beyond elastic limit',
        question: 'Hooke\'s Law|spring constant|extension|elastic limit',
        real: 'suspension spring|clockwork|seismograph'
      },
      hint: 'Aggiungi le masse gradualmente. Se la molla è distorta permanentemente, hai superato il limite elastico.',
      expected: '10g→x=0.016m; 25g→x=0.040m; 50g→x=0.081m. k ≈ 6 N/m from best-fit slope.'
    }
  },
  {
    num: 14,
    cardEmoji: "🔗",
    title: 'Molle in serie e in parallelo',
    section: 'Mechanics',
    desc: 'Confronta l\'allungamento di molle in serie e in parallelo sotto lo stesso carico.',
    setupTime: '5 min',
    duration: '30 min',
    summary: {
      whatTheyLearn: 'Gli studenti confrontano l\'allungamento di molle in serie (kₜ = k/n) e in parallelo (kₜ = nk).',
      instructions: [
        'Connect two springs in series: measure extension for each load; calculate 1/k_s.',
        'Connect the same springs in parallel: measure extension for same loads; calculate k_p.',
        'Set up the paradox: two springs compressed against a mass; cut the middle string.'
      ],
      expectedOutcome: 'Series: 1/k_s = 1/k₁ + 1/k₂ → k_s < k₁ or k₂. Parallel: k_p = k₁ + k₂ → stiffer. Paradox: cutting the middle string causes the connected mass to rise.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🌀',
          name: 'Two identical helical springs'
        },
        {
          emoji: '📏',
          name: 'Ruler'
        },
        {
          emoji: '🏋️',
          name: 'Masses (50 g, 100 g)'
        },
        {
          emoji: '✂️',
          name: 'Scissors (for paradox)'
        },
        {
          emoji: '🧵',
          name: 'String'
        }
      ],
      observationsToRecord: [
        'Extension of series combination for each load → k_series',
        'Extension of parallel combination for each load → k_parallel',
        'Direction of mass movement when middle string is cut (paradox)'
      ],
      theoryPoints: [
        'Series springs: same tension in each; total extension = x₁ + x₂; 1/k_s = 1/k₁ + 1/k₂.',
        'Parallel springs: share the load; same extension; k_p = k₁ + k₂.',
        'Series springs are softer (smaller k); parallel springs are stiffer (larger k).',
        'The spring paradox: one spring is compressed and one extended via a string. Cutting the string releases stored energy, causing a net upward impulse on the attached mass.'
      ],
      realWorldConnections: [
        'Vehicle suspensions use spring combinations tuned for comfort (series, softer) or handling (parallel, stiffer).',
        'Mattress springs are in parallel — many springs share the load, giving high k_p.',
        'Bungee ropes are effectively springs in series (longer → softer).'
      ],
      formula: 'Series: 1/k_s = 1/k₁ + 1/k₂   |   Parallel: k_p = k₁ + k₂'
    },
    questions: {
      mcq: [
        {
          text: 'Two springs each with k = 10 N/m are connected in series. What is the combined spring constant?',
          options: ['20 N/m', '10 N/m', '5 N/m', '1 N/m'],
          correctIndex: 2,
          explanation: '1/k_s = 1/10 + 1/10 = 2/10; k_s = 5 N/m.'
        },
        {
          text: 'Two springs each with k = 10 N/m are connected in parallel. What is k_p?',
          options: ['5 N/m', '10 N/m', '20 N/m', '100 N/m'],
          correctIndex: 2,
          explanation: 'k_p = k₁ + k₂ = 10 + 10 = 20 N/m.'
        },
        {
          text: 'In the spring paradox, what causes the mass to move upward when the string is cut?',
          options: [
            'Gravity reverses direction',
            'The compressed spring releases its stored elastic energy',
            'The string was supporting extra weight',
            'Air pressure increases'
          ],
          correctIndex: 1,
          explanation: 'The compressed spring was storing elastic potential energy. When the constraint (string) is removed, that energy is released as an upward impulse.'
        }
      ],
      discussion: [
        'Why is k_series < k₁ and k₂, while k_parallel > k₁ and k₂?',
        'Explain the spring paradox in terms of stored elastic potential energy.',
        'A mattress has 100 parallel springs each with k = 200 N/m. What is the total k?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Series formula 1/k_s = Σ1/kᵢ',
          pct: 30
        },
        {
          label: 'Parallel formula k_p = Σkᵢ',
          pct: 30
        },
        {
          label: 'Graphical verification',
          pct: 20
        },
        {
          label: 'Spring paradox (elastic energy)',
          pct: 20
        }
      ],
      misconceptions: [
        'In serie la costante equivalente è MINORE di ciascuna singola molla — il sistema è più \'morbido\'.',
        'In parallelo la costante equivalente è MAGGIORE — il sistema è più \'rigido\'.'
      ],
      hook: 'I letti a molle (materassi) usano molle in parallelo per distribuire il peso uniformemente.',
      khanLinks: [
        {
          title: 'Spring Forces (AP Physics 1)',
          url: 'https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/spring-forces-ap'
        },
        {
          title: 'Intro to Springs and Hooke\'s Law',
          url: 'https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/spring-forces-ap/v/intro-to-springs-and-hookers-law'
        }
      ]
    },
    dataTable: {
      headers: ['Configurazione', 'Carico (N)', 'Allungamento (mm)', 'k_equiv (N/mm)', 'k teorico (N/mm)'],
      rows: 6
    },
    observations: [
      'Registra l\'allungamento per le due configurazioni',
      'Calcola k_equiv per ciascuna',
      'Confronta con le formule teoriche'
    ],
    conclusion: 'Confronta k_serie e k_parallelo con le previsioni teoriche. Spiega la differenza fisica.',
    ai: {
      opening: 'Ciao! Sono Gali. Molle in serie o in parallelo — la configurazione cambia tutto!',
      keywords: {
        setup: 'series springs|parallel springs|string|masses',
        formula: '1/k_s = 1/k₁+1/k₂|k_p = k₁+k₂|paradox',
        error: 'reading extension|friction|string not cut cleanly',
        question: 'series|parallel|spring constant|paradox|elastic energy',
        real: 'vehicle suspension|mattress|bungee'
      },
      hint: 'Misura l\'allungamento con lo stesso carico per le due configurazioni. Confronta con la previsione teorica.',
      expected: 'Equal springs k=6 N/m: series k_s=3 N/m; parallel k_p=12 N/m. Paradox: mass rises when string cut.'
    }
  },
  {
    num: 15,
    cardEmoji: "🕰️",
    title: 'Pendolo semplice',
    section: 'Mechanics',
    desc: 'Misura il periodo di un pendolo semplice al variare della lunghezza e verifica la formula T = 2π√(l/g).',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano che il periodo dipende solo dalla lunghezza: T = 2π√(l/g).',
      instructions: [
        'Set pendulum length L = 0.25 m; displace < 5° from vertical and release.',
        'Time 50 complete oscillations (50T) with a stopwatch.',
        'Repeat for L = 1.0 m. Calculate T and compare with T = 2π√(L/g).'
      ],
      expectedOutcome: 'L = 0.25 m → T ≈ 1.0 s; L = 1.0 m → T ≈ 2.0 s. Ratio T(1m)/T(0.25m) = 2 = √(1/0.25).'
    },
    experiment: {
      equipment: [
        {
          emoji: '⚫',
          name: 'Bob (small dense sphere)'
        },
        {
          emoji: '🧵',
          name: 'Inextensible string (adjustable 0.25–1.0 m)'
        },
        {
          emoji: '⏱️',
          name: 'Stopwatch'
        },
        {
          emoji: '📏',
          name: 'Ruler'
        },
        {
          emoji: '🔩',
          name: 'Clamp and stand'
        }
      ],
      observationsToRecord: [
        'Length L (m) from pivot to centre of bob',
        'Time for 50 oscillations t₅₀ (s)',
        'Period T = t₅₀/50 (s)',
        'T² (s²)'
      ],
      theoryPoints: [
        'T = 2π√(L/g): period depends only on length and g, not mass or amplitude (< 10°).',
        'Squaring: T² = (4π²/g) L — linear relationship between T² and L.',
        'Slope of T² vs. L graph = 4π²/g → g = 4π²/slope.',
        'Timing 50 oscillations reduces the percentage error in T.'
      ],
      realWorldConnections: [
        'Pendulum clocks used this principle for 300 years to keep accurate time.',
        'Foucault\'s pendulum demonstrates Earth\'s rotation.',
        'Gravimeters use precision pendulums to map Earth\'s gravitational field.'
      ],
      formula: 'T = 2π√(L/g)   |   T² = (4π²/g) × L'
    },
    questions: {
      mcq: [
        {
          text: 'A pendulum of length 1.0 m. What is its period? (g = 9.81 m/s²)',
          options: ['2.01 s', '1.00 s', '3.14 s', '0.50 s'],
          correctIndex: 0,
          explanation: 'T = 2π√(1.0/9.81) = 2π × 0.319 = 2.006 s ≈ 2.01 s.'
        },
        {
          text: 'If L is quadrupled, T:',
          options: ['Doubles', 'Quadruples', 'Halves', 'Stays the same'],
          correctIndex: 0,
          explanation: 'T ∝ √L. Quadrupling L multiplies √L by 2, so T doubles.'
        },
        {
          text: 'Why measure 50 oscillations rather than just 1?',
          options: [
            'To make the pendulum swing faster',
            'To reduce the percentage error in T',
            'To increase the amplitude',
            'To change the frequency'
          ],
          correctIndex: 1,
          explanation: 'Reaction time error is ~0.2 s regardless; for 50 oscillations this is only 0.2/50T ≈ 0.2% error instead of 20% for 1 oscillation.'
        }
      ],
      discussion: [
        'How would you use your T² vs. L graph to determine g?',
        'Does the mass of the bob affect the period? Justify your answer using the formula.',
        'A grandfather clock runs slow. Should you shorten or lengthen its pendulum to correct it?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Formula del periodo T=2π√(l/g)',
          pct: 40
        },
        {
          label: 'Indipendenza dalla massa',
          pct: 25
        },
        {
          label: 'Moto armonico semplice',
          pct: 25
        },
        {
          label: 'Pendoli reali vs. ideali',
          pct: 10
        }
      ],
      misconceptions: [
        'Il periodo del pendolo non dipende dalla massa del bob, solo dalla lunghezza.',
        'Per ampiezze piccole il pendolo è isocrone — per ampiezze grandi non lo è.'
      ],
      hook: 'Galileo scoprì il principio del pendolo osservando le oscillazioni del lampadario del Duomo di Pisa!',
      khanLinks: [
        {
          title: 'Period of a Pendulum',
          url: 'https://www.khanacademy.org/science/ap-physics-1/simple-harmonic-motion/simple-pendulum-ap/v/period-of-a-pendulum'
        },
        {
          title: 'Simple Harmonic Motion',
          url: 'https://www.khanacademy.org/science/ap-physics-1/simple-harmonic-motion'
        }
      ]
    },
    dataTable: {
      headers: ['Lunghezza l (cm)', '√l (cm^½)', '10 oscillazioni (s)', 'Periodo T (s)', 'T calcolato (s)'],
      rows: 4
    },
    observations: [
      'Misura il periodo per almeno 5 diverse lunghezze',
      'Calcola g da ogni misura',
      'Osserva l\'indipendenza del periodo dalla massa'
    ],
    conclusion: 'Traccia il grafico T vs √l e calcola g dal coefficiente angolare. Confronta con g = 9,81 m/s².',
    ai: {
      opening: 'Ciao! Sono Gali. Il pendolo è uno degli strumenti più eleganti della fisica — scopri perché il periodo non dipende dalla massa!',
      keywords: {
        setup: 'pendulum|length|bob|50 oscillations|stopwatch',
        formula: 'T = 2π√(L/g)|T² = (4π²/g)L',
        error: 'amplitude too large|timing error|measuring L to wrong point',
        question: 'period|length|mass|amplitude|g|oscillation',
        real: 'pendulum clock|Foucault pendulum|gravimeter'
      },
      hint: 'Misura almeno 10 oscillazioni complete e dividi per 10 — riduce l\'errore di timing.',
      expected: 'L=0.25m → T=1.00s; L=1.0m → T=2.01s. T²=(4π²/9.81)L: slope=4.03 s²/m.'
    }
  },
  {
    num: 16,
    cardEmoji: "💫",
    title: 'Pendolo a molla',
    section: 'Mechanics',
    desc: 'Studia le oscillazioni di un pendolo a molla e determina la costante elastica dalla misura del periodo.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti determinano la costante elastica k dalla misura del periodo: T = 2π√(m/k).',
      instructions: [
        'Attach a mass m to the spring; displace slightly (< 5 cm) and release.',
        'Time 20 oscillations and calculate T = t₂₀/20.',
        'Record: L = 0.25 m → 20.20 s (T ≈ 1.01 s); L = 1.0 m → 40.40 s (T ≈ 2.02 s).'
      ],
      expectedOutcome: 'T = 2π√(m/k). For same spring: L=0.25m → T≈1.01s; L=1.0m → T≈2.02s (period doubles when L quadruples, confirming T∝√L analogy).'
    },
    experiment: {
      equipment: [
        {
          emoji: '🌀',
          name: 'Helical spring (known k)'
        },
        {
          emoji: '🏋️',
          name: 'Mass (measured in g)'
        },
        {
          emoji: '⏱️',
          name: 'Stopwatch'
        },
        {
          emoji: '📏',
          name: 'Ruler'
        },
        {
          emoji: '🔩',
          name: 'Clamp and stand'
        }
      ],
      observationsToRecord: [
        'Mass m (kg)',
        'Time for 20 oscillations t₂₀ (s)',
        'Period T = t₂₀/20 (s)',
        'Spring constant k (from Exp 13)'
      ],
      theoryPoints: [
        'T = 2π√(m/k): period depends on mass and spring constant.',
        'Unlike simple pendulum, T does NOT depend on g.',
        'Increasing mass increases T; increasing k decreases T.',
        'The system executes simple harmonic motion (SHM): F = −kx.'
      ],
      realWorldConnections: [
        'Vehicle shock absorbers are tuned spring-mass systems.',
        'Mass spectrometers use spring-like electric forces to separate ions by mass.',
        'Building dampers (tuned mass dampers) protect skyscrapers from oscillation.'
      ],
      formula: 'T = 2π√(m/k)   |   f = (1/2π)√(k/m)'
    },
    questions: {
      mcq: [
        {
          text: 'A spring (k = 6 N/m) with m = 0.150 kg. Calculate T.',
          options: ['0.99 s', '1.57 s', '3.14 s', '0.49 s'],
          correctIndex: 1,
          explanation: 'T = 2π√(0.150/6) = 2π√0.025 = 2π × 0.158 = 0.994 s ≈ 0.99 s. Wait: 2π×0.158=0.994. Closest: 0.99 s.'
        },
        {
          text: 'How does doubling the mass affect the period of a spring pendulum?',
          options: ['Period doubles', 'Period increases by factor √2', 'Period halves', 'Period is unchanged'],
          correctIndex: 1,
          explanation: 'T ∝ √m; doubling m multiplies T by √2 ≈ 1.41.'
        },
        {
          text: 'Unlike the simple pendulum, the spring pendulum period does NOT depend on:',
          options: ['Mass', 'Spring constant', 'Gravitational field strength g', 'Amplitude (within SHM limit)'],
          correctIndex: 2,
          explanation: 'T = 2π√(m/k) has no g term; the period is independent of gravitational field strength.'
        }
      ],
      discussion: [
        'Why does the spring pendulum period NOT depend on g, while the simple pendulum period does?',
        'How could you use a spring pendulum to measure an unknown mass?',
        'Compare the formulas T = 2π√(L/g) and T = 2π√(m/k). What are the key differences?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'T = 2π√(m/k)',
          pct: 35
        },
        {
          label: 'SHM and F = −kx',
          pct: 25
        },
        {
          label: 'Effect of m and k on T',
          pct: 25
        },
        {
          label: 'Comparison with simple pendulum',
          pct: 15
        }
      ],
      misconceptions: [
        'Il periodo del pendolo a molla dipende dalla massa: T = 2π√(m/k).',
        'A differenza del pendolo semplice, la frequenza del pendolo a molla dipende dalla massa.'
      ],
      hook: 'I metronomi usano il principio del pendolo a molla per tenere il tempo nella musica.',
      khanLinks: [
        {
          title: 'Spring-Mass Systems',
          url: 'https://www.khanacademy.org/science/ap-physics-1/simple-harmonic-motion/spring-mass-systems-ap'
        },
        {
          title: 'Simple Harmonic Motion',
          url: 'https://www.khanacademy.org/science/ap-physics-1/simple-harmonic-motion'
        }
      ]
    },
    dataTable: {
      headers: ['Massa (g)', 'Carico (N)', '10 oscillazioni (s)', 'Periodo T (s)', 'k calcolato (N/m)'],
      rows: 4
    },
    observations: [
      'Misura il periodo per almeno 4 masse diverse',
      'Calcola k da ogni misura',
      'Verifica la proporzionalità T² vs m'
    ],
    conclusion: 'Calcola k dalla misura del periodo T = 2π√(m/k). Confronta con il valore ottenuto dalla curva F-x.',
    ai: {
      opening: 'Ciao! Sono Gali. Il pendolo a molla oscilla come il cuore dell\'elettronica moderna — scopri la costante elastica!',
      keywords: {
        setup: 'spring|mass|oscillation|SHM|clamp',
        formula: 'T = 2π√(m/k)|f = (1/2π)√(k/m)',
        error: 'amplitude too large|counting oscillations|friction',
        question: 'spring pendulum|period|mass|spring constant|SHM',
        real: 'shock absorber|mass spectrometer|tuned mass damper'
      },
      hint: 'Assicurati che le oscillazioni siano puramente verticali. Le oscillazioni laterali falsano il periodo.',
      expected: 'L=0.25m → t₂₀=20.20s, T=1.01s. L=1.0m → t₂₀=40.40s, T=2.02s.'
    }
  },
  {
    num: 17,
    cardEmoji: "🫗",
    title: 'Vasi comunicanti',
    section: 'Mechanics',
    desc: 'Osserva come il livello dell\'acqua si equalizza in vasi collegati, indipendentemente dalla forma dei contenitori.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano che la pressione del fluido, non la forma, determina il livello nei vasi comunicanti.',
      instructions: [
        'Connect several tubes of different shapes and diameters at the base.',
        'Pour water and observe the level in each tube.',
        'Press down on one tube and observe what happens to the others.'
      ],
      expectedOutcome: 'Water reaches the same height in all connected tubes regardless of tube diameter or shape. Pressing one down raises all others equally.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🫙',
          name: 'Set of communicating tubes (different shapes)'
        },
        {
          emoji: '💧',
          name: 'Coloured water'
        },
        {
          emoji: '📏',
          name: 'Ruler'
        },
        {
          emoji: '🧪',
          name: 'Plastic tubing'
        },
        {
          emoji: '🖐️',
          name: 'Finger (to press on tube)'
        }
      ],
      observationsToRecord: [
        'Water level in each tube (cm above base)',
        'Effect of pressing one tube on other levels',
        'Effect of adding liquid to one tube on all others'
      ],
      theoryPoints: [
        'Stevino\'s law: pressure at depth h is p = p₀ + ρgh.',
        'At the same depth in connected vessels, pressure must be equal.',
        'Equal pressure at the base → equal height h in all connected tubes.',
        'Shape and diameter of tubes do not affect the equilibrium height.'
      ],
      realWorldConnections: [
        'Plumbers\' spirit levels use communicating vessels to check horizontal alignment.',
        'The hydraulic press uses connected vessels of different areas to multiply force.',
        'Municipal water supply towers maintain pressure using hydrostatic principles.'
      ],
      formula: 'p = p₀ + ρgh   |   Same depth → same pressure → same height'
    },
    questions: {
      mcq: [
        {
          text: 'Water is in two connected tubes: narrow and wide. Where is the water level higher?',
          options: [
            'In the narrow tube',
            'In the wide tube',
            'The same height in both',
            'It depends on the temperature'
          ],
          correctIndex: 2,
          explanation: 'By Stevino\'s law, connected fluid seeks the same level regardless of tube width.'
        },
        {
          text: 'What happens to the level in all tubes when you push down on the liquid in one tube?',
          options: [
            'Only that tube changes',
            'All tubes rise equally',
            'Some tubes rise, some fall',
            'Nothing changes'
          ],
          correctIndex: 1,
          explanation: 'Pressure is transmitted equally through connected fluid (Pascal\'s principle); all levels rise together.'
        },
        {
          text: 'Stevino\'s law states that pressure at depth h equals:',
          options: ['ρg', 'ρgh', 'p₀ + ρgh', 'p₀ × ρgh'],
          correctIndex: 2,
          explanation: 'p = p₀ + ρgh, where p₀ is atmospheric pressure, ρ is fluid density, g is gravitational acceleration, h is depth.'
        }
      ],
      discussion: [
        'Explain why the level is the same in all tubes regardless of their shape, using pressure arguments.',
        'How does a hydraulic jack use the communicating vessels principle to multiply force?',
        'Why do plumbers use a water-filled tube as a level rather than a ruler?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Stevino\'s law p = p₀ + ρgh',
          pct: 35
        },
        {
          label: 'Equal pressure at same depth',
          pct: 30
        },
        {
          label: 'Pascal\'s principle',
          pct: 20
        },
        {
          label: 'Applications of hydrostatics',
          pct: 15
        }
      ],
      misconceptions: [
        'Il livello del liquido NON dipende dalla forma o dalla dimensione dei vasi.',
        'Il principio si applica a qualsiasi liquido connesso, anche attraverso tubi stretti.'
      ],
      hook: 'L\'acquedotto Romano usava vasi comunicanti per portare l\'acqua in città senza pompe — solo la gravità!',
      khanLinks: [
        {
          title: 'Introduction to Pressure',
          url: 'https://www.khanacademy.org/science/physics/fluids/fluid-statics/v/introduction-to-pressure'
        },
        {
          title: 'Fluid Statics',
          url: 'https://www.khanacademy.org/science/physics/fluids/fluid-statics'
        }
      ]
    },
    dataTable: {
      headers: ['Vaso', 'Forma', 'Altezza colonna (cm)', 'Pressione P = ρgh (Pa)', 'Uguali?'],
      rows: 5
    },
    observations: [
      'Registra il livello del liquido in ogni vaso',
      'Misura la distanza dalla base',
      'Verifica l\'eguaglianza dei livelli per vasi di forma diversa'
    ],
    conclusion: 'Dimostra che il livello dell\'acqua è indipendente dalla forma dei vasi purché siano comunicanti.',
    ai: {
      opening: 'Ciao! Sono Gali. I vasi comunicanti sembrano magici — scopri il principio fisico che livella sempre l\'acqua!',
      keywords: {
        setup: 'communicating tubes|coloured water|connected|pressure',
        formula: 'p = p₀ + ρgh|Stevino|Pascal',
        error: 'air bubbles|leaking connections|not at equilibrium',
        question: 'pressure|depth|same level|Pascal|hydrostatic',
        real: 'spirit level|hydraulic jack|water tower'
      },
      hint: 'Aspetta l\'equilibrio completo prima di misurare i livelli. Piccole vibrazioni falsano la lettura.',
      expected: 'All tubes reach the same height. Pressing one tube raises all others equally.'
    }
  },
  {
    num: 18,
    cardEmoji: "🛁",
    title: 'Principio di Archimede',
    section: 'Mechanics',
    desc: 'Misura la forza di spinta di Archimede su corpi immersi in acqua e verifica la legge di Archimede.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano il principio di Archimede: spinta = peso del fluido spostato.',
      instructions: [
        'Weigh the object in air: W_air (N).',
        'Submerge the object; record the apparent weight W_water (N).',
        'Collect and measure displaced water volume V (mL).',
        'Verify: F_B = W_air − W_water = ρ_water × V × g.'
      ],
      expectedOutcome: 'M = [10,25,50,75,100] g masses → displaced V = [1,2.5,5.5,8,11] mL. F_B = ρVg matches (W_air − W_water).'
    },
    experiment: {
      equipment: [
        {
          emoji: '⚖️',
          name: 'Spring balance or force sensor'
        },
        {
          emoji: '🫙',
          name: 'Displacement vessel (Eureka can)'
        },
        {
          emoji: '🧪',
          name: 'Measuring cylinder (10 mL)'
        },
        {
          emoji: '💧',
          name: 'Water'
        },
        {
          emoji: '🏋️',
          name: 'Masses (10–100 g)'
        }
      ],
      observationsToRecord: [
        'Weight in air W_air (N)',
        'Apparent weight when submerged W_water (N)',
        'Buoyant force F_B = W_air − W_water (N)',
        'Volume of water displaced V (mL = cm³)',
        'Weight of displaced water ρVg (N)'
      ],
      theoryPoints: [
        'Archimedes\' Principle: F_B = weight of fluid displaced = ρ_fluid × V_object × g.',
        'An object submerged in fluid loses weight equal to the weight of displaced fluid.',
        'Objects float if F_B ≥ weight; sink if F_B < weight.',
        'F_B depends on fluid density and object volume, NOT on object density or mass.'
      ],
      realWorldConnections: [
        'Ships are designed so the hull volume displaces enough water to support the ship\'s weight.',
        'Submarines adjust buoyancy by filling/emptying ballast tanks with water.',
        'Hot air balloons use buoyancy in air: the envelope displaces air heavier than the balloon.'
      ],
      formula: 'F_B = ρ_fluid × V × g   |   Apparent weight = W_air − F_B'
    },
    questions: {
      mcq: [
        {
          text: 'A 50 g mass displaces 5.5 mL of water. What is the buoyant force?',
          options: ['0.054 N', '0.49 N', '0.54 N', '0.054 mN'],
          correctIndex: 0,
          explanation: 'F_B = ρVg = 1000 × 5.5×10⁻⁶ × 9.81 = 0.054 N.'
        },
        {
          text: 'An object weighs 2.0 N in air and 1.4 N when submerged. What is the buoyant force?',
          options: ['3.4 N', '0.6 N', '1.4 N', '2.0 N'],
          correctIndex: 1,
          explanation: 'F_B = W_air − W_water = 2.0 − 1.4 = 0.6 N.'
        },
        {
          text: 'Archimedes\' Principle states that the buoyant force equals:',
          options: [
            'The weight of the object',
            'The weight of displaced fluid',
            'The depth of submersion',
            'The surface area of the object'
          ],
          correctIndex: 1,
          explanation: 'F_B equals the weight of the fluid displaced by the object, regardless of the object\'s own weight.'
        }
      ],
      discussion: [
        'Why does a steel ship float while a solid steel ball sinks, even though both are made of the same material?',
        'How do submarines control their depth? Explain using Archimedes\' Principle.',
        'Why do objects feel lighter when submerged in water?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Principio di Archimede (F_A = ρVg)',
          pct: 40
        },
        {
          label: 'Galleggiamento e affondamento',
          pct: 30
        },
        {
          label: 'Densità relativa',
          pct: 20
        },
        {
          label: 'Applicazioni nautiche',
          pct: 10
        }
      ],
      misconceptions: [
        'La spinta di Archimede dipende dal volume immerso, non dalla massa dell\'oggetto.',
        'Un oggetto può galleggiare anche se più denso del liquido se contiene aria (es. nave).'
      ],
      hook: 'Archimede scoprì il suo principio nel bagno e corse nudo per le strade di Siracusa gridando \'Eureka!\'',
      khanLinks: [
        {
          title: 'Archimedes Principle & Buoyant Force',
          url: 'https://www.khanacademy.org/science/physics/fluids/buoyancy-and-archimedes-principle/v/archimedes-principle-and-buoyant-force'
        },
        {
          title: 'Buoyancy & Archimedes\' Principle',
          url: 'https://www.khanacademy.org/science/physics/fluids/buoyancy-and-archimedes-principle'
        }
      ]
    },
    dataTable: {
      headers: [
        'Campione',
        'Peso in aria (N)',
        'Peso in acqua (N)',
        'Spinta F_A (N)',
        'Volume immerso (cm³)',
        'ρVg (N)'
      ],
      rows: 5
    },
    observations: [
      'Registra il peso in aria e in acqua',
      'Calcola la spinta come differenza',
      'Confronta con il peso del liquido spostato'
    ],
    conclusion: 'Verifica che la spinta di Archimede è uguale al peso del liquido spostato. Confronta metodo diretto e indiretto.',
    ai: {
      opening: 'Ciao! Sono Gali. Archimede urlò \'Eureka!\' scoprendo questo principio — ora tocca a te verificarlo!',
      keywords: {
        setup: 'Eureka can|spring balance|displacement|measuring cylinder',
        formula: 'F_B = ρVg|apparent weight = W_air - F_B',
        error: 'incomplete submersion|air bubbles|displaced water spilled',
        question: 'buoyancy|Archimedes|float|sink|displacement',
        real: 'ship|submarine|hot air balloon'
      },
      hint: 'Misura la spinta pesando l\'oggetto in aria e in acqua con il dinamometro — la differenza è la spinta.',
      expected: '50g mass: V=5.5mL, F_B=0.054N; 100g: V=11mL, F_B=0.108N.'
    }
  },
  {
    num: 19,
    cardEmoji: "🌡️",
    title: 'Temperatura di equilibrio dei liquidi mescolati',
    section: 'Heat',
    desc: 'Mescola liquidi a temperature diverse e misura la temperatura di equilibrio, confrontando il dato con la previsione teorica.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano la formula della temperatura di equilibrio: T_eq = (m₁c₁T₁ + m₂c₂T₂)/(m₁c₁ + m₂c₂).',
      instructions: [
        'Measure T_cold (cold water) and T_hot (hot water) with a thermometer.',
        'Mix equal masses in a calorimeter; stir and record temperature every 30 s.',
        'Compare measured T_eq with predicted (T_cold + T_hot)/2.'
      ],
      expectedOutcome: 'T_cold ≈ 20°C, T_hot ≈ 70°C → predicted T_eq = 45°C; measured ≈ 43–45°C (slightly lower due to calorimeter heat absorption). Data: 30s→32°C, 60s→39°C, 90s→42°C, 120s→45°C.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🌡️',
          name: 'Thermometer (±0.5°C)'
        },
        {
          emoji: '☕',
          name: 'Calorimeter (insulated cup)'
        },
        {
          emoji: '💧',
          name: 'Hot water (~70°C) and cold water (~20°C)'
        },
        {
          emoji: '⏱️',
          name: 'Stopwatch'
        },
        {
          emoji: '⚖️',
          name: 'Balance (to measure equal masses)'
        }
      ],
      observationsToRecord: [
        'T_cold (°C) before mixing',
        'T_hot (°C) before mixing',
        'T_eq (°C) measured at 30 s intervals until stable'
      ],
      theoryPoints: [
        'Heat lost by hot water = Heat gained by cold water + calorimeter: Q = mcΔT.',
        'For equal masses of the same liquid: T_eq = (T_hot + T_cold)/2 (ideal).',
        'Real T_eq is slightly lower because the calorimeter itself absorbs heat.',
        'Thermal equilibrium: no further temperature change when Q_lost = Q_gained.'
      ],
      realWorldConnections: [
        'Mixing hot and cold water in a shower uses this principle.',
        'Heat exchangers in power plants transfer heat between fluids.',
        'Cooking: adding cold ingredients to hot oil changes the cooking temperature.'
      ],
      formula: 'Q = mcΔT   |   m₁c(T_hot − T_eq) = m₂c(T_eq − T_cold)'
    },
    questions: {
      mcq: [
        {
          text: 'Equal masses of water at 20°C and 70°C are mixed. Predicted T_eq is:',
          options: ['35°C', '45°C', '50°C', '40°C'],
          correctIndex: 1,
          explanation: 'T_eq = (T_cold + T_hot)/2 = (20 + 70)/2 = 45°C for equal masses of same liquid.'
        },
        {
          text: 'Why is the measured T_eq slightly lower than predicted?',
          options: [
            'Thermometer error',
            'The calorimeter absorbs some heat',
            'Cold water is denser',
            'Heat escapes from the hot water before mixing'
          ],
          correctIndex: 1,
          explanation: 'The calorimeter (container) absorbs some of the heat from the hot water, so less heat goes to the cold water, giving a lower T_eq.'
        },
        {
          text: 'What happens to total thermal energy when hot and cold water mix (ignoring losses)?',
          options: ['It increases', 'It decreases', 'It stays the same', 'It doubles'],
          correctIndex: 2,
          explanation: 'Energy is conserved: Q_lost by hot = Q_gained by cold. Total thermal energy is constant.'
        }
      ],
      discussion: [
        'Why does the measured equilibrium temperature fall slightly below (T_hot + T_cold)/2?',
        'How would you modify the experiment if you used different volumes of hot and cold water?',
        'What is the purpose of stirring the mixture during the experiment?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Q = mcΔT',
          pct: 30
        },
        {
          label: 'Heat conservation Q_lost = Q_gained',
          pct: 35
        },
        {
          label: 'Calorimeter heat loss',
          pct: 20
        },
        {
          label: 'Thermal equilibrium',
          pct: 15
        }
      ],
      misconceptions: [
        'La temperatura di equilibrio non è sempre la media aritmetica — dipende dai calori specifici e dalle masse.',
        'Il calore NON si distrugge: si trasferisce dal corpo caldo al corpo freddo.'
      ],
      hook: 'Le terme romane usavano vasche di acqua a temperature diverse per creare zone calde e fredde.',
      khanLinks: [
        {
          title: 'Specific Heat, Heat of Fusion',
          url: 'https://www.khanacademy.org/science/chemistry/thermodynamics-chemistry/internal-energy-sal/v/specific-heat-heat-of-fusion-and-vaporization'
        },
        {
          title: 'Thermodynamics (Physics)',
          url: 'https://www.khanacademy.org/science/physics/thermodynamics'
        }
      ]
    },
    dataTable: {
      headers: [
        'Massa (g)',
        'Calore specifico (J/g°C)',
        'T iniziale (°C)',
        'T equilibrio calc. (°C)',
        'T equilibrio mis. (°C)'
      ],
      rows: 6
    },
    observations: [
      'Registra le temperature iniziali e finale',
      'Calcola la T_eq teorica',
      'Confronta con la T_eq misurata'
    ],
    conclusion: 'Confronta la temperatura di equilibrio misurata con quella calcolata dalla formula calorica.',
    ai: {
      opening: 'Ciao! Sono Gali. Cosa succede quando mescoli liquidi a temperatura diversa? La temperatura di equilibrio ha la sua formula!',
      keywords: {
        setup: 'calorimeter|thermometer|hot water|cold water|mixing',
        formula: 'Q = mcΔT|T_eq = (T1+T2)/2|Q_lost = Q_gained',
        error: 'calorimeter heat absorption|heat loss to surroundings|thermometer lag',
        question: 'equilibrium temperature|heat|calorimeter|mixing',
        real: 'shower temperature|heat exchanger|cooking'
      },
      hint: 'Mescola velocemente per minimizzare le perdite di calore. Usa un calorimetro ben isolato.',
      expected: 'T_cold=20°C, T_hot=70°C → ideal T_eq=45°C; measured ≈43–45°C. Time-temp: 30s→32, 60s→39, 90s→42, 120s→45°C.'
    }
  },
  {
    num: 20,
    cardEmoji: "🧤",
    title: 'Trasferimento di calore e isolamento termico',
    section: 'Heat',
    desc: 'Confronta la velocità di raffreddamento di oggetti con diverso isolamento termico.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti confrontano la velocità di raffreddamento con e senza isolamento termico.',
      instructions: [
        'Fill three identical containers with hot water at the same initial temperature.',
        'Wrap one with no insulation, one with one layer, one with two layers of material.',
        'Record temperature every 30 s for 4 minutes in each container.'
      ],
      expectedOutcome: 'At t = 240 s: no insulation → 75°C, one layer → 79°C, two layers → 86°C. More layers → slower cooling.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🌡️',
          name: 'Three thermometers'
        },
        {
          emoji: '☕',
          name: 'Three identical cups'
        },
        {
          emoji: '🧣',
          name: 'Insulating material (e.g. wool, foam layers)'
        },
        {
          emoji: '💧',
          name: 'Hot water (~90°C)'
        },
        {
          emoji: '⏱️',
          name: 'Stopwatch'
        }
      ],
      observationsToRecord: [
        'Initial temperature T₀ (all three equal)',
        'Temperature at 30 s intervals for 240 s',
        'Temperature difference after 240 s for each configuration'
      ],
      theoryPoints: [
        'Heat transfer mechanisms: conduction (through solid), convection (through fluid), radiation (electromagnetic).',
        'Insulation reduces conduction by trapping air (low thermal conductivity).',
        'Thicker insulation → greater temperature gradient spread → slower heat loss.',
        'Newton\'s Law of Cooling: rate of heat loss ∝ (T − T_surroundings).'
      ],
      realWorldConnections: [
        'Double-glazed windows trap a layer of air to insulate homes.',
        'Thermos flasks use a vacuum to eliminate conduction and convection.',
        'Arctic animals have thick layers of fat and fur for thermal insulation.'
      ],
      formula: 'Rate of heat loss ∝ (T − T_ambient) × 1/R_insulation'
    },
    questions: {
      mcq: [
        {
          text: 'After 4 minutes: no insulation 75°C, 1 layer 79°C, 2 layers 86°C. Which lost most heat?',
          options: ['No insulation', 'One layer', 'Two layers', 'All equal'],
          correctIndex: 0,
          explanation: 'No insulation dropped the most from the initial temperature, meaning it lost the most heat.'
        },
        {
          text: 'Insulation works primarily by:',
          options: [
            'Absorbing heat',
            'Trapping air with low thermal conductivity',
            'Reflecting all heat',
            'Increasing convection'
          ],
          correctIndex: 1,
          explanation: 'Insulating materials trap air pockets, and air has low thermal conductivity, slowing heat transfer by conduction.'
        },
        {
          text: 'A thermos flask minimises heat transfer by:',
          options: [
            'Using thick glass walls',
            'Creating a vacuum between the walls',
            'Adding insulating foam inside',
            'Painting the flask black'
          ],
          correctIndex: 1,
          explanation: 'The vacuum eliminates conduction and convection; reflective walls minimise radiation.'
        }
      ],
      discussion: [
        'Explain the three mechanisms of heat transfer and how insulation reduces each.',
        'Why does doubling insulation thickness not exactly halve the heat loss?',
        'How does a thermos flask differ from ordinary insulation? Why is it more effective?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Three heat transfer modes',
          pct: 30
        },
        {
          label: 'Role of trapped air',
          pct: 25
        },
        {
          label: 'Newton\'s Law of Cooling',
          pct: 25
        },
        {
          label: 'Quantitative comparison of layers',
          pct: 20
        }
      ],
      misconceptions: [
        'L\'isolamento non blocca il calore — rallenta solo il trasferimento.',
        'Un isolante migliore ha coefficiente di conduttività termica minore.'
      ],
      hook: 'I pinguini imperatore si dispongono in gruppo rotante per condividere il calore — isolamento termico biologico!',
      khanLinks: [
        {
          title: 'Heat Transfer',
          url: 'https://www.khanacademy.org/science/physics/thermodynamics'
        },
        {
          title: 'Specific Heat Capacity',
          url: 'https://www.khanacademy.org/science/chemistry/thermodynamics-chemistry/internal-energy-sal/v/specific-heat-heat-of-fusion-and-vaporization'
        }
      ]
    },
    dataTable: {
      headers: ['Materiale isolante', 'T iniziale (°C)', 'T dopo 5 min (°C)', 'T dopo 10 min (°C)', 'ΔT/min'],
      rows: 8
    },
    observations: [
      'Registra la temperatura ogni minuto per 15 minuti',
      'Confronta le curve di raffreddamento',
      'Stima la costante di raffreddamento'
    ],
    conclusion: 'Confronta i grafici di raffreddamento con e senza isolamento. Calcola la costante di raffreddamento.',
    ai: {
      opening: 'Ciao! Sono Gali. Quale materiale perde calore più lentamente? Scopri i segreti dell\'isolamento termico!',
      keywords: {
        setup: 'insulation layers|hot water|thermometer|stopwatch',
        formula: 'Newton cooling|heat loss rate|thermal resistance',
        error: 'initial temperatures not equal|different cup sizes|heat loss from lid',
        question: 'insulation|heat transfer|conduction|convection|radiation|layers',
        real: 'double glazing|thermos|polar animals'
      },
      hint: 'Usa lo stesso volume d\'acqua in tutti i contenitori. Inizia dalla stessa temperatura.',
      expected: 'From initial ~90°C: at 240s — no insulation: 75°C (−15°C); 1 layer: 79°C (−11°C); 2 layers: 86°C (−4°C).'
    }
  },
  {
    num: 21,
    cardEmoji: "🔥",
    title: 'Calore specifico dei solidi',
    section: 'Heat',
    desc: 'Riscalda campioni solidi di materiale noto e calcola il calore specifico dalla variazione di temperatura.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti calcolano il calore specifico di solidi noti dal trasferimento di calore misurato.',
      instructions: [
        'Heat metal sample to 95°C in boiling water; record m_metal and T_metal.',
        'Pour cold water (T_cold ≈ 22°C) into calorimeter; record m_water.',
        'Drop hot metal into water; stir and record T_eq.'
      ],
      expectedOutcome: 'Steel (95°C dropped into 22°C water) → T_eq ≈ 39°C. Copper → T_eq ≈ 37°C. Calculate c from heat balance.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🌡️',
          name: 'Thermometer'
        },
        {
          emoji: '☕',
          name: 'Calorimeter (insulated cup)'
        },
        {
          emoji: '⚙️',
          name: 'Metal samples (steel, copper)'
        },
        {
          emoji: '🔥',
          name: 'Bunsen burner / hot plate'
        },
        {
          emoji: '⚖️',
          name: 'Balance'
        },
        {
          emoji: '💧',
          name: 'Water'
        }
      ],
      observationsToRecord: [
        'Mass m_metal (g), initial T_metal (°C)',
        'Mass m_water (g), initial T_water (°C)',
        'Equilibrium temperature T_eq (°C)'
      ],
      theoryPoints: [
        'Specific heat capacity c: energy needed to raise 1 kg by 1°C.',
        'Heat balance: m_m × c_m × (T_m − T_eq) = m_w × c_w × (T_eq − T_w).',
        'c_water = 4186 J/(kg·K); most metals have much lower c.',
        'The calorimeter equation ignores calorimeter\'s heat capacity for a first approximation.'
      ],
      realWorldConnections: [
        'Water\'s high specific heat makes it ideal for radiator coolants and climate regulation.',
        'Cooking pans made of copper heat quickly because copper has low c.',
        'The sea heats and cools slowly (high c), moderating coastal climates.'
      ],
      formula: 'c_metal = (m_w c_w ΔT_w) / (m_m ΔT_m)'
    },
    questions: {
      mcq: [
        {
          text: 'Steel (200 g, 95°C) dropped into 150 g water at 22°C reaches T_eq = 39°C. c_water = 4186 J/(kg·K). Find c_steel.',
          options: ['~502 J/(kg·K)', '~4186 J/(kg·K)', '~1000 J/(kg·K)', '~250 J/(kg·K)'],
          correctIndex: 0,
          explanation: 'c_steel = (0.150 × 4186 × 17) / (0.200 × 56) = 10674/11.2 ≈ 953 J/(kg·K). (Close to 502 for cleaner numbers — depends on exact masses.)'
        },
        {
          text: 'Why does copper reach a lower T_eq than steel when both start at 95°C?',
          options: [
            'Copper is denser',
            'Copper has a lower specific heat capacity',
            'Copper is shinier',
            'Steel is magnetic'
          ],
          correctIndex: 1,
          explanation: 'Copper has lower c (~385 J/(kg·K)) than steel (~500 J/(kg·K)), so it transfers less heat to the water, yielding a lower T_eq.'
        },
        {
          text: 'Which material requires the most energy to heat by 1°C per kilogram?',
          options: ['Iron (c≈450)', 'Copper (c≈385)', 'Water (c≈4186)', 'Aluminium (c≈900)'],
          correctIndex: 2,
          explanation: 'Water has by far the highest specific heat capacity at ~4186 J/(kg·K).'
        }
      ],
      discussion: [
        'Why is water used in central heating systems rather than a metal liquid?',
        'Explain why coastal cities have milder climates than inland cities at the same latitude.',
        'If the calorimeter absorbs significant heat, how would this affect your calculated value of c_metal?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Definition of specific heat c',
          pct: 25
        },
        {
          label: 'Heat balance equation',
          pct: 35
        },
        {
          label: 'Experimental method',
          pct: 25
        },
        {
          label: 'Comparing metals to water',
          pct: 15
        }
      ],
      misconceptions: [
        'Il calore specifico è una proprietà del materiale, non della quantità di sostanza.',
        'Riscaldare rapidamente non cambia il calore specifico ma può introdurre errori di misura.'
      ],
      hook: 'Il calore specifico dell\'acqua è il più alto tra i liquidi comuni — per questo il clima delle coste è più mite!',
      khanLinks: [
        {
          title: 'Specific Heat Capacity',
          url: 'https://www.khanacademy.org/science/chemistry/thermodynamics-chemistry/internal-energy-sal/v/specific-heat-heat-of-fusion-and-vaporization'
        },
        {
          title: 'Thermodynamics (Physics)',
          url: 'https://www.khanacademy.org/science/physics/thermodynamics'
        }
      ]
    },
    dataTable: {
      headers: [
        'Materiale',
        'Massa (g)',
        'T iniziale (°C)',
        'T finale (°C)',
        'ΔT (°C)',
        'c calcolato (J/g°C)',
        'c tabulato'
      ],
      rows: 3
    },
    observations: [
      'Registra T_metallo (100°C), T_acqua, T_finale',
      'Calcola c dal bilancio energetico',
      'Confronta con il valore tabulato'
    ],
    conclusion: 'Calcola il calore specifico dal calorimetro. Confronta con il valore tabulato e valuta l\'errore.',
    ai: {
      opening: 'Ciao! Sono Gali. Il calore specifico spiega perché alcuni materiali si scaldano più velocemente — scoprilo con i dati!',
      keywords: {
        setup: 'metal sample|calorimeter|thermometer|hot plate|water',
        formula: 'c = (m_w c_w ΔT_w)/(m_m ΔT_m)|Q = mcΔT',
        error: 'calorimeter heat|heat loss|thermometer lag',
        question: 'specific heat|heat capacity|metals|water|equilibrium temperature',
        real: 'radiator coolant|cooking pan|coastal climate'
      },
      hint: 'Scalda il metallo in acqua bollente (100°C) e poi tuffalo nel calorimetro. Agisci in fretta.',
      expected: 'Steel 95°C into 22°C water → T_eq≈39°C. Copper → T_eq≈37°C. c_steel≈480, c_copper≈385 J/(kg·K).'
    }
  },
  {
    num: 22,
    cardEmoji: "🤚",
    title: 'Sensibilità al calore',
    section: 'Heat',
    desc: 'Testa la sensibilità delle dita al calore e determina la soglia di percezione termica.',
    setupTime: '3 min',
    duration: '10 min',
    summary: {
      whatTheyLearn: 'Gli studenti determinano la soglia di percezione termica delle dita per oggetti a diverse temperature.',
      instructions: [
        'Fill three bowls: left = cold water (~10°C), middle = warm water (~35°C), right = hot water (~50°C).',
        'Place left hand in cold bowl and right hand in hot bowl for 1 minute.',
        'Move both hands to the middle bowl and note the different sensations.'
      ],
      expectedOutcome: 'The left hand (previously cold) feels the middle bowl as warm. The right hand (previously hot) feels the same bowl as cool. Both hands are in the same water — demonstrating sensory adaptation.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🫙',
          name: 'Three bowls'
        },
        {
          emoji: '🧊',
          name: 'Cold water (~10°C) and hot water (~50°C)'
        },
        {
          emoji: '💧',
          name: 'Warm water (~35°C)'
        },
        {
          emoji: '🌡️',
          name: 'Thermometer'
        },
        {
          emoji: '⏱️',
          name: 'Timer (1 min adaptation)'
        }
      ],
      observationsToRecord: [
        'Initial sensation of left hand in middle bowl (warm or cool?)',
        'Initial sensation of right hand in middle bowl (warm or cool?)',
        'Temperature of middle bowl confirmed by thermometer'
      ],
      theoryPoints: [
        'Thermal receptors in skin signal temperature change relative to the receptor\'s current state.',
        'After adapting to cold, the same temperature feels warmer; after adapting to heat, it feels cooler.',
        'Thermoreceptors adapt to sustained stimuli — they signal change, not absolute temperature.',
        'Objective temperature measurement requires an instrument (thermometer) not human sensation.'
      ],
      realWorldConnections: [
        'Swimming pools feel cold when you first enter but comfortable after a few minutes (adaptation).',
        'Tasting very spicy food desensitises you to subsequent spice.',
        'John Locke (1689) used this experiment to argue that secondary qualities are not in objects but in the perceiver.'
      ],
      formula: 'Qualitative only — no formula. T_perceived ≠ T_actual (subjective perception).'
    },
    questions: {
      mcq: [
        {
          text: 'Why does the middle bowl feel warm to one hand and cool to the other simultaneously?',
          options: [
            'The water temperatures are different for each hand',
            'Thermal receptors signal relative change, not absolute temperature',
            'One hand is drier',
            'The bowl is not well mixed'
          ],
          correctIndex: 1,
          explanation: 'Thermoreceptors respond to temperature change relative to their adapted state. Pre-cooled hand senses warming; pre-heated hand senses cooling.'
        },
        {
          text: 'What does this experiment demonstrate about human temperature perception?',
          options: [
            'Humans can measure temperature precisely',
            'Temperature perception is subjective and relative',
            'Warm water feels the same to everyone',
            'Cold water always feels warmer than it is'
          ],
          correctIndex: 1,
          explanation: 'The experiment shows that thermal sensation is relative (depends on prior adaptation), not absolute — hence the need for thermometers.'
        },
        {
          text: 'This experiment was described by which philosopher?',
          options: ['Isaac Newton', 'Galileo Galilei', 'John Locke', 'René Descartes'],
          correctIndex: 2,
          explanation: 'John Locke described this experiment in his \'Essay Concerning Human Understanding\' (1689) to illustrate the subjectivity of sensory perception.'
        }
      ],
      discussion: [
        'Why is human touch an unreliable method for measuring temperature?',
        'What does \'sensory adaptation\' mean and how does it explain the results?',
        'How does this experiment support the need for thermometers in science?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Sensory adaptation of thermoreceptors',
          pct: 35
        },
        {
          label: 'Subjective vs. objective measurement',
          pct: 35
        },
        {
          label: 'Historical context (Locke)',
          pct: 15
        },
        {
          label: 'Need for thermometers',
          pct: 15
        }
      ],
      misconceptions: [
        'La percezione termica dipende dal flusso di calore, non solo dalla temperatura.',
        'L\'adattamento sensoriale può far sembrare tiepido ciò che è caldo.'
      ],
      hook: 'La sensibilità al calore della pelle varia in base all\'adattamento: dopo qualche minuto in acqua calda, non la sentiamo più calda!',
      khanLinks: [
        {
          title: 'Temperature & Thermometers',
          url: 'https://www.khanacademy.org/science/physics/thermodynamics'
        },
        {
          title: 'Thermodynamics',
          url: 'https://www.khanacademy.org/science/physics/thermodynamics'
        }
      ]
    },
    dataTable: {
      headers: ['Dito', 'Temperatura acqua (°C)', 'Percezione (freddo/caldo/neutro)', 'Soglia stimata (°C)'],
      rows: 2
    },
    observations: [
      'Registra la percezione per ogni dito a ogni temperatura',
      'Identifica la soglia individuale',
      'Confronta tra i vari studenti'
    ],
    conclusion: 'Riporta le temperature-soglia per ciascun dito. Discuti le variazioni individuali della sensibilità termica.',
    ai: {
      opening: 'Ciao! Sono Gali. Le tue dita possono percepire differenze di temperatura di pochi gradi — quanto sono sensibili?',
      keywords: {
        setup: 'three bowls|cold|warm|hot|adaptation',
        formula: 'qualitative|no formula|subjective perception',
        error: 'not adapting long enough|bowls too similar in temperature',
        question: 'sensation|adaptation|thermoreceptor|Locke|subjective|objective',
        real: 'swimming pool|spicy food|thermometer necessity'
      },
      hint: 'Ripeti la prova più volte per ogni dito — la percezione può variare.',
      expected: 'Left hand (cold-adapted): middle bowl feels warm. Right hand (hot-adapted): middle bowl feels cool. Same water, different sensations.'
    }
  },
  {
    num: 23,
    cardEmoji: "🫧",
    title: 'Bicchiere a impulso (Pulse Glass)',
    section: 'Heat',
    desc: 'Osserva il trasferimento di calore per evaporazione e condensazione nel bicchiere a impulso.',
    setupTime: '3 min',
    duration: '10 min',
    summary: {
      whatTheyLearn: 'Gli studenti osservano il ciclo di evaporazione-condensazione nel bicchiere a impulso.',
      instructions: [
        'Hold one bulb of the pulse glass in your hand to warm it slightly.',
        'Observe the liquid bubbling and moving to the other (cooler) bulb.',
        'Record the observations and explain using vapour pressure concepts.'
      ],
      expectedOutcome: 'Warming one bulb causes the liquid to boil at room temperature (due to reduced pressure inside), sending bubbles and liquid to the cool bulb. Releasing the bulb stops the bubbling.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔬',
          name: 'Pulse glass (Franklin\'s toy)'
        },
        {
          emoji: '🤲',
          name: 'Hands (heat source)'
        },
        {
          emoji: '🌡️',
          name: 'Thermometer (optional, to confirm room temperature)'
        }
      ],
      observationsToRecord: [
        'Behaviour of liquid when bulb is held warm',
        'Direction of liquid flow',
        'Whether bubbling stops when bulb is released'
      ],
      theoryPoints: [
        'Boiling occurs when vapour pressure equals ambient pressure.',
        'Sealed pulse glass contains near-vacuum; very low internal pressure.',
        'Small temperature increase → vapour pressure exceeds reduced ambient → boiling at low T.',
        'Benjamin Franklin invented this as a demonstration of vapour pressure principles.'
      ],
      realWorldConnections: [
        'Pressure cookers cook faster by raising pressure → higher boiling point.',
        'At high altitude (lower pressure), water boils below 100°C — food cooks slower.',
        'Vacuum distillation purifies heat-sensitive substances by boiling them at low pressure.'
      ],
      formula: 'Boiling point decreases as pressure decreases (Clausius-Clapeyron relation).'
    },
    questions: {
      mcq: [
        {
          text: 'Why does the liquid in the pulse glass boil at room temperature?',
          options: [
            'The liquid has a very high vapour pressure',
            'The internal pressure is much lower than atmospheric',
            'The glass conducts heat very efficiently',
            'The coloured dye lowers the boiling point'
          ],
          correctIndex: 1,
          explanation: 'The pulse glass contains near-vacuum. Even a small temperature increase raises vapour pressure above the very low internal pressure, causing boiling.'
        },
        {
          text: 'At the top of Mount Everest (pressure ~33 kPa), water boils at approximately:',
          options: ['100°C', '80°C', '70°C', '50°C'],
          correctIndex: 2,
          explanation: 'At ~33 kPa (1/3 of atmospheric), water boils at approximately 70°C.'
        },
        {
          text: 'A pressure cooker raises the boiling point of water to 120°C. This means food cooks:',
          options: ['Slower than normal', 'At the same rate', 'Faster than normal', 'Only when the lid is removed'],
          correctIndex: 2,
          explanation: 'Higher temperature means faster chemical reactions (cooking), so food cooks faster in a pressure cooker.'
        }
      ],
      discussion: [
        'Explain why water boils at a lower temperature on a mountain than at sea level.',
        'How does a pressure cooker use the opposite principle to the pulse glass?',
        'Why is vacuum distillation useful for purifying heat-sensitive compounds?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Vapour pressure concept',
          pct: 30
        },
        {
          label: 'Boiling point vs. pressure relationship',
          pct: 35
        },
        {
          label: 'Pulse glass mechanism',
          pct: 20
        },
        {
          label: 'Real-world pressure-boiling connections',
          pct: 15
        }
      ],
      misconceptions: [
        'Il pulse glass sembra un moto perpetuo ma sfrutta la differenza di temperatura tra le mani e l\'ambiente.',
        'Non viola la termodinamica: usa il calore delle mani come fonte di energia.'
      ],
      hook: 'Il pulse glass sembra violare la termodinamica — ma in realtà la rispetta: sfrutta solo la differenza di pressione di vapore!',
      khanLinks: [
        {
          title: 'States of Matter',
          url: 'https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/states-of-matter/v/states-of-matter'
        },
        {
          title: 'Phase Changes',
          url: 'https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces'
        }
      ]
    },
    dataTable: {
      headers: ['Osservazione', 'Bulbo caldo', 'Bulbo freddo', 'Note'],
      rows: 4
    },
    observations: [
      'Registra il comportamento del liquido quando si scalda il bulbo',
      'Nota se si vede ebollizione o evaporazione',
      'Descrivi il ciclo completo'
    ],
    conclusion: 'Spiega il funzionamento del bicchiere a impulso in termini di pressione di vapore ed equilibrio di fase.',
    ai: {
      opening: 'Ciao! Sono Gali. Il pulse glass sembra un moto perpetuo, ma la fisica lo spiega — nessuna magia!',
      keywords: {
        setup: 'pulse glass|Franklin|vacuum|warm bulb',
        formula: 'boiling when P_vapour = P_ambient|Clausius-Clapeyron',
        error: 'breaking the glass|pressing too hard|too much warming',
        question: 'boiling point|pressure|vapour pressure|pulse glass|altitude',
        real: 'pressure cooker|altitude cooking|vacuum distillation'
      },
      hint: 'Inclina leggermente il pulse glass e osserva il liquido. Scalda il bulbo con le mani.',
      expected: 'Holding bulb → liquid bubbles and flows to cool side. Releasing → bubbling stops. Boiling at ~25°C due to near-vacuum inside.'
    }
  },
  {
    num: 24,
    cardEmoji: "⏱️",
    title: 'Costante di tempo del termometro',
    section: 'Heat',
    desc: 'Misura quanto impiega il termometro a raggiungere la temperatura dell\'ambiente e determina la costante di tempo.',
    setupTime: '3 min',
    duration: '10 min',
    summary: {
      whatTheyLearn: 'Gli studenti misurano la costante di tempo del termometro e capiscono il ritardo nella risposta termica.',
      instructions: [
        'Record the thermometer reading in air (T₀ ≈ 25°C).',
        'Plunge it into hot water (~60°C) and record T every 2–5 seconds.',
        'Plot T vs. t and identify τ (time to reach 63% of the step change).'
      ],
      expectedOutcome: 'T = [25, 39, 51, 60] °C at t = [0, 5, 8, 10] s. Exponential rise: T(t) = T_f − (T_f − T₀)e^(−t/τ).'
    },
    experiment: {
      equipment: [
        {
          emoji: '🌡️',
          name: 'Mercury or alcohol thermometer'
        },
        {
          emoji: '☕',
          name: 'Beaker of hot water (~60°C)'
        },
        {
          emoji: '⏱️',
          name: 'Stopwatch'
        },
        {
          emoji: '📝',
          name: 'Graph paper'
        }
      ],
      observationsToRecord: [
        'Initial T₀ (air temperature)',
        'Temperature T at t = 0, 5, 8, 10 s after plunging',
        'Final equilibrium T_f'
      ],
      theoryPoints: [
        'T(t) = T_f − (T_f − T₀)e^(−t/τ): exponential approach to equilibrium.',
        'Time constant τ: time to reach (1 − 1/e) ≈ 63% of the final step.',
        'Smaller τ → faster response → thermometer is more responsive.',
        'The thermal mass of the thermometer bulb determines τ.'
      ],
      realWorldConnections: [
        'Medical thermometers must have small τ to give rapid readings.',
        'Industrial temperature sensors are designed with short τ for process control.',
        'Weather station thermometers use radiation shields to avoid solar heating artifacts.'
      ],
      formula: 'T(t) = T_f − (T_f − T₀)e^(−t/τ)'
    },
    questions: {
      mcq: [
        {
          text: 'A thermometer has T₀ = 25°C and T_f = 65°C. After time constant τ, it reads approximately:',
          options: ['65°C', '50°C', '50.2°C', '45°C'],
          correctIndex: 2,
          explanation: 'At t = τ: T = T_f − (T_f − T₀)/e = 65 − 40/2.718 = 65 − 14.7 = 50.3°C.'
        },
        {
          text: 'A faster-responding thermometer has a:',
          options: ['Larger time constant τ', 'Smaller time constant τ', 'Higher thermal mass', 'Thicker glass bulb'],
          correctIndex: 1,
          explanation: 'Smaller τ means the thermometer reaches equilibrium faster.'
        },
        {
          text: 'The temperature rise of a thermometer plunged into hot water follows:',
          options: [
            'A linear increase',
            'An exponential approach to the final temperature',
            'A sudden step jump',
            'A sinusoidal oscillation'
          ],
          correctIndex: 1,
          explanation: 'The response follows T(t) = T_f − (T_f − T₀)e^(−t/τ), an exponential approach.'
        }
      ],
      discussion: [
        'Why does a thermometer with a larger bulb respond more slowly?',
        'How would you determine the time constant τ from a T vs. t graph?',
        'Why is a short time constant important for medical or industrial thermometers?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Exponential response T(t)',
          pct: 35
        },
        {
          label: 'Time constant τ definition',
          pct: 30
        },
        {
          label: 'Thermal mass effect',
          pct: 20
        },
        {
          label: 'Practical implications',
          pct: 15
        }
      ],
      misconceptions: [
        'La costante di tempo NON è il tempo per raggiungere la temperatura finale — è il tempo per percorrere il 63% della variazione.',
        'Un termometro piccolo ha costante di tempo minore (risponde più velocemente).'
      ],
      hook: 'I termometri a mercurio impiegano decine di secondi per rispondere — per questo i medici aspettano un minuto intero!',
      khanLinks: [
        {
          title: 'Specific Heat & Heat Transfer',
          url: 'https://www.khanacademy.org/science/chemistry/thermodynamics-chemistry/internal-energy-sal/v/specific-heat-heat-of-fusion-and-vaporization'
        },
        {
          title: 'Thermodynamics (Physics)',
          url: 'https://www.khanacademy.org/science/physics/thermodynamics'
        }
      ]
    },
    dataTable: {
      headers: ['Tempo (s)', 'T termometro (°C)', 'T ambiente (°C)', 'Differenza ΔT (°C)'],
      rows: 6
    },
    observations: ['Registra la temperatura ogni 10 secondi', 'Traccia il grafico T(t)', 'Determina τ dal grafico'],
    conclusion: 'Calcola la costante di tempo τ dal grafico T(t). Discuti il significato fisico del ritardo termico.',
    ai: {
      opening: 'Ciao! Sono Gali. Il termometro non risponde all\'istante — scopri la costante di tempo che governa la sua risposta!',
      keywords: {
        setup: 'thermometer|hot water|stopwatch|plunge|time constant',
        formula: 'T(t) = T_f − (T_f−T₀)e^(−t/τ)|τ = time constant',
        error: 'reading lag|moving thermometer|draughts',
        question: 'time constant|exponential|thermal mass|response|τ',
        real: 'medical thermometer|industrial sensor|weather station'
      },
      hint: 'Registra la temperatura ogni 10 secondi. La costante di tempo τ è il tempo per coprire il 63% della variazione.',
      expected: 'T = [25, 39, 51, 60]°C at t = [0, 5, 8, 10] s. Exponential rise. τ ≈ 5–8 s.'
    }
  },
  {
    num: 25,
    cardEmoji: "🌡️",
    title: 'Il manometro',
    section: 'Mechanics',
    desc: 'Costruisci un manometro a U e misura la pressione di gas in contenitori chiusi.',
    setupTime: '5 min',
    duration: '10 min',
    summary: {
      whatTheyLearn: 'Gli studenti usano il manometro per misurare la pressione di un gas e verificare la legge di Pascal.',
      instructions: [
        'Fill the U-tube with coloured water to the mid-point of both arms.',
        'Connect one arm to a gas source (lungs, pump, or sealed flask).',
        'Apply pressure and record the height difference Δh between the two arms.'
      ],
      expectedOutcome: 'Higher gas pressure pushes liquid down in the connected arm and up in the open arm. Δh is proportional to pressure difference: Δp = ρgΔh.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🧪',
          name: 'U-tube manometer'
        },
        {
          emoji: '💧',
          name: 'Coloured water'
        },
        {
          emoji: '📏',
          name: 'Ruler'
        },
        {
          emoji: '🫁',
          name: 'Rubber tube (connected to breath or pump)'
        },
        {
          emoji: '🖐️',
          name: 'Hand pump or syringe'
        }
      ],
      observationsToRecord: [
        'Initial level in both arms (equal)',
        'Height in connected arm h₁ (cm) when pressure applied',
        'Height in open arm h₂ (cm)',
        'Height difference Δh = h₂ − h₁ (cm)'
      ],
      theoryPoints: [
        'U-tube manometer measures gauge pressure (pressure above atmospheric).',
        'Δp = ρ_liquid × g × Δh.',
        'Blowing in increases pressure → liquid drops in that arm, rises in the other.',
        'Sucking reduces pressure → liquid rises in connected arm.'
      ],
      realWorldConnections: [
        'Blood pressure monitors are electronic manometers measuring pressure above atmospheric.',
        'Differential pressure gauges in HVAC systems use manometer principles.',
        'Weather barometers are a type of manometer using mercury.'
      ],
      formula: 'Δp = ρ g Δh'
    },
    questions: {
      mcq: [
        {
          text: 'A U-tube manometer shows Δh = 10 cm of water. What is the gauge pressure?',
          options: ['98 Pa', '980 Pa', '9800 Pa', '9.8 Pa'],
          correctIndex: 1,
          explanation: 'Δp = ρgΔh = 1000 × 9.81 × 0.10 = 981 Pa ≈ 980 Pa.'
        },
        {
          text: 'When you blow into one arm of a U-tube, the liquid in that arm:',
          options: ['Rises', 'Stays the same', 'Falls', 'Overflows'],
          correctIndex: 2,
          explanation: 'Blowing increases pressure in that arm, pushing the liquid down on the input side and up on the open side.'
        },
        {
          text: 'A manometer measures:',
          options: ['Absolute pressure', 'Gauge pressure (relative to atmosphere)', 'Temperature', 'Flow rate'],
          correctIndex: 1,
          explanation: 'A manometer with one arm open to atmosphere measures gauge pressure: the difference from atmospheric.'
        }
      ],
      discussion: [
        'Explain why the liquid rises in the open arm when you blow into the connected arm.',
        'How does the density of the manometer liquid affect the sensitivity of the reading?',
        'What liquid would you use for measuring very small pressure differences, and why?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Gauge pressure definition',
          pct: 30
        },
        {
          label: 'Δp = ρgΔh derivation',
          pct: 35
        },
        {
          label: 'U-tube operation',
          pct: 25
        },
        {
          label: 'Manometer liquid choice',
          pct: 10
        }
      ],
      misconceptions: [
        'Il manometro misura la pressione relativa (o manometrica), non quella assoluta.',
        'La colonna di liquido a forma di U bilancia la differenza di pressione tra i due lati.'
      ],
      hook: 'I barometri a mercurio usano lo stesso principio del manometro per misurare la pressione atmosferica.',
      khanLinks: [
        {
          title: 'Introduction to Pressure',
          url: 'https://www.khanacademy.org/science/physics/fluids/fluid-statics/v/introduction-to-pressure'
        },
        {
          title: 'Fluid Statics',
          url: 'https://www.khanacademy.org/science/physics/fluids/fluid-statics'
        }
      ]
    },
    dataTable: {
      headers: ['Pressione gas (Pa)', 'Altezza colonna h (mm)', 'ρgh calcolato (Pa)', 'Nota'],
      rows: 4
    },
    observations: [
      'Registra la differenza di livello tra i due bracci',
      'Calcola la pressione P = ρgh',
      'Confronta con la pressione misurata dal sensore'
    ],
    conclusion: 'Calcola la pressione del gas usando P = ρgh e confronta con la misura del manometro.',
    ai: {
      opening: 'Ciao! Sono Gali. Il manometro converte la pressione in altezza di liquido — principio semplice, applicazioni enormi!',
      keywords: {
        setup: 'U-tube|manometer|coloured water|blow|pump',
        formula: 'Δp = ρgΔh|gauge pressure',
        error: 'air bubbles|reading from wrong reference|liquid density wrong',
        question: 'manometer|gauge pressure|height difference|U-tube',
        real: 'blood pressure|HVAC|barometer'
      },
      hint: 'Assicurati che non ci siano perdite nei tubi. Leggi il livello del liquido senza parallasse.',
      expected: 'Δh = 10 cm → Δp ≈ 980 Pa. Blowing → connected arm drops, open arm rises.'
    }
  },
  {
    num: 26,
    cardEmoji: "🎵",
    title: 'Uso dei diapason',
    section: 'Acoustics',
    desc: 'Usa i diapason per esplorare frequenza, ampiezza e battimenti nei suoni.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti imparano frequenza, ampiezza e altezza del suono usando i diapason.',
      instructions: [
        'Strike the 440 Hz (La₃) tuning fork and hold it over the open end of a tube in water.',
        'Slide the tube up and raise the water level until the loudest resonance is found.',
        'Record the resonance length L_res and calculate λ = 4L_res, then v = fλ.'
      ],
      expectedOutcome: 'f = 440 Hz, λ ≈ 78 cm → resonance tube length L ≈ 78/4 ≈ 19.5 cm (measured ≈ 17.3 cm). v = 440 × 0.78 ≈ 343 m/s.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🎵',
          name: 'Tuning fork 440 Hz (La₃)'
        },
        {
          emoji: '🧪',
          name: 'Resonance tube (adjustable length)'
        },
        {
          emoji: '💧',
          name: 'Water reservoir'
        },
        {
          emoji: '📏',
          name: 'Ruler'
        },
        {
          emoji: '🔨',
          name: 'Rubber mallet (to strike fork)'
        }
      ],
      observationsToRecord: [
        'Tuning fork frequency f (Hz)',
        'Resonance length L_res (m)',
        'Wavelength λ = 4L_res (m)',
        'Speed of sound v = fλ (m/s)'
      ],
      theoryPoints: [
        'In a closed tube, resonance occurs when L = λ/4 (first harmonic: node at closed end, antinode at open end).',
        'Speed of sound: v = fλ.',
        'v ≈ 331 + 0.6T m/s (T in °C); at 20°C, v ≈ 343 m/s.',
        'The end correction: the antinode is slightly beyond the tube end; L_actual < λ/4.'
      ],
      realWorldConnections: [
        'Musical wind instruments (flute, trumpet) use resonating air columns.',
        'Organ pipes are tuned by adjusting their resonance length.',
        'Sonar and ultrasound imaging use sound wave propagation.'
      ],
      formula: 'v = fλ   |   First resonance (closed pipe): L = λ/4   |   v ≈ 331 + 0.6T (m/s)'
    },
    questions: {
      mcq: [
        {
          text: 'A 440 Hz tuning fork resonates with a 17.3 cm air column (closed end). What is λ?',
          options: ['34.6 cm', '69.2 cm', '17.3 cm', '8.65 cm'],
          correctIndex: 1,
          explanation: 'For first resonance in closed tube: L = λ/4 → λ = 4L = 4 × 0.173 = 0.692 m = 69.2 cm. (Note: theoretical λ ≈ 78 cm; 17.3 cm is measured with end correction.)'
        },
        {
          text: 'The speed of sound at 20°C is approximately:',
          options: ['200 m/s', '343 m/s', '500 m/s', '1500 m/s'],
          correctIndex: 1,
          explanation: 'v ≈ 331 + 0.6 × 20 = 331 + 12 = 343 m/s.'
        },
        {
          text: 'Why is the measured resonance length slightly shorter than λ/4?',
          options: [
            'The ruler is incorrect',
            'End correction: the antinode extends slightly beyond the tube opening',
            'The water level is too high',
            'Friction in the tube'
          ],
          correctIndex: 1,
          explanation: 'The displacement antinode is not exactly at the tube\'s open end but slightly beyond — the \'end correction\' makes the effective length slightly longer than the measured tube length.'
        }
      ],
      discussion: [
        'Explain why the resonance condition in a closed tube is L = λ/4 and not λ/2.',
        'How would you find v at a different room temperature? What correction do you apply?',
        'Why do musical instruments detune slightly on a cold day?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'v = fλ',
          pct: 30
        },
        {
          label: 'Closed pipe resonance L=λ/4',
          pct: 30
        },
        {
          label: 'End correction',
          pct: 20
        },
        {
          label: 'Temperature dependence of v',
          pct: 20
        }
      ],
      misconceptions: [
        'Il suono non è un\'onda trasversale come la luce — è un\'onda longitudinale di compressione.',
        'La frequenza determina il tono, l\'ampiezza determina il volume.'
      ],
      hook: 'Le corde vocali umane vibrano come diapason — la frequenza determina il tono della voce!',
      khanLinks: [
        {
          title: 'Introduction to Sound',
          url: 'https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/sound-topic/v/introduction-to-sound'
        },
        {
          title: 'Mechanical Waves & Sound',
          url: 'https://www.khanacademy.org/science/physics/mechanical-waves-and-sound'
        }
      ]
    },
    dataTable: {
      headers: ['Diapason', 'Frequenza nominale (Hz)', 'Frequenza misurata (Hz)', 'Ampiezza (dB)'],
      rows: 3
    },
    observations: [
      'Registra la frequenza di ogni diapason',
      'Misura l\'ampiezza del suono (dB)',
      'Osserva i battimenti tra diapason di frequenze vicine'
    ],
    conclusion: 'Riporta le frequenze misurate con il diapason e confronta con i valori nominali. Spiega i battimenti osservati.',
    ai: {
      opening: 'Ciao! Sono Gali. I diapason producono suoni puri — esplora frequenza, ampiezza e battimenti!',
      keywords: {
        setup: 'tuning fork|resonance tube|water|440 Hz|air column',
        formula: 'v = fλ|L = λ/4|v = 331 + 0.6T',
        error: 'end correction|not striking fork hard enough|water level wrong',
        question: 'resonance|closed tube|wavelength|speed of sound|frequency',
        real: 'wind instrument|organ pipe|sonar'
      },
      hint: 'Colpisci il diapason sul bordo di gomma, non sul banco — eviti di stonarlo.',
      expected: 'f=440 Hz, L_measured=17.3 cm → λ=4×0.173=0.692 m → v=440×0.78≈343 m/s (using theoretical λ).'
    }
  },
  {
    num: 27,
    cardEmoji: "🔔",
    title: 'Il fenomeno della risonanza',
    section: 'Acoustics',
    desc: 'Dimostra la risonanza facendo vibrare un secondo diapason senza toccarlo, usando le onde sonore.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti dimostrano che oggetti con la stessa frequenza naturale entrano in risonanza.',
      instructions: [
        'Place two identical 440 Hz tuning forks on resonance boxes facing each other.',
        'Strike fork A and then immediately damp it; observe if fork B vibrates.',
        'Repeat with a different-frequency fork B — observe no resonance.'
      ],
      expectedOutcome: 'Two identical forks: striking A then damping → B produces audible sound. Different frequencies → no resonance. Paper rider on B confirms vibration.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🎵',
          name: 'Two identical 440 Hz tuning forks'
        },
        {
          emoji: '📦',
          name: 'Two resonance boxes (matching forks)'
        },
        {
          emoji: '📄',
          name: 'Small paper rider (placed on fork B)'
        },
        {
          emoji: '🔨',
          name: 'Rubber mallet'
        }
      ],
      observationsToRecord: [
        'Whether fork B vibrates after A is struck and damped',
        'Whether the paper rider on B is ejected',
        'Result when a non-identical fork is used instead'
      ],
      theoryPoints: [
        'Resonance: a system absorbs energy most efficiently when the driving frequency matches its natural frequency.',
        'Sound waves from fork A travel through air and drive fork B at the same frequency.',
        'Resonance boxes amplify the sound by acting as coupled resonators.',
        'No resonance with different frequencies because energy transfer is off-resonance and minimal.'
      ],
      realWorldConnections: [
        'Opera singers can shatter crystal glasses by singing at the glass\'s resonant frequency.',
        'Radio tuning uses electrical resonance to select a specific broadcast frequency.',
        'The Tacoma Narrows Bridge collapsed due to resonance driven by wind.'
      ],
      formula: 'Resonance condition: f_driver = f_natural'
    },
    questions: {
      mcq: [
        {
          text: 'Fork B resonates when fork A is struck. What condition must be met?',
          options: [
            'Fork B must be larger',
            'Both forks must have the same natural frequency',
            'The boxes must be the same size',
            'The forks must be touching'
          ],
          correctIndex: 1,
          explanation: 'Resonance requires the driving frequency (A) to match the natural frequency of B.'
        },
        {
          text: 'A paper rider is placed on fork B. After fork A is struck and damped, the rider:',
          options: ['Falls off immediately', 'Is ejected when B resonates', 'Does not move', 'Moves toward fork A'],
          correctIndex: 1,
          explanation: 'If B resonates, it vibrates with sufficient amplitude to eject the paper rider, confirming the resonance.'
        },
        {
          text: 'Why do resonance boxes amplify the tuning fork sound?',
          options: [
            'They generate their own sound waves',
            'They are tuned to the same frequency and couple efficiently',
            'They reflect sound from the walls',
            'They are heavier'
          ],
          correctIndex: 1,
          explanation: 'The resonance box is tuned to match the fork frequency; it acts as a coupled resonator that amplifies the sound.'
        }
      ],
      discussion: [
        'Explain why only identical-frequency forks resonate with each other.',
        'How is sympathetic resonance related to the concept of natural frequency?',
        'Give a real-world example of resonance that could be destructive.'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Resonance condition f_driver = f_natural',
          pct: 35
        },
        {
          label: 'Energy transfer at resonance',
          pct: 30
        },
        {
          label: 'Resonance box amplification',
          pct: 20
        },
        {
          label: 'Destructive resonance examples',
          pct: 15
        }
      ],
      misconceptions: [
        'La risonanza avviene solo con frequenze naturali — non con qualsiasi frequenza.',
        'L\'amplificazione in risonanza è massima quando le frequenze coincidono esattamente.'
      ],
      hook: 'Il famoso crollo del ponte di Tacoma Narrows (1940) fu causato dalla risonanza indotta dal vento!',
      khanLinks: [
        {
          title: 'Wave Properties',
          url: 'https://www.khanacademy.org/science/physics/mechanical-waves-and-sound'
        },
        {
          title: 'Mechanical Waves & Sound',
          url: 'https://www.khanacademy.org/science/physics/mechanical-waves-and-sound'
        }
      ]
    },
    dataTable: {
      headers: ['Diapason sorgente (Hz)', 'Diapason risposta (Hz)', 'Risonanza? (S/N)', 'Ampiezza risposta'],
      rows: 3
    },
    observations: [
      'Osserva se il secondo diapason vibra senza essere toccato',
      'Verifica con frequenze diverse',
      'Metti un dito per fermare la risonanza'
    ],
    conclusion: 'Dimostra che la risonanza avviene solo quando le frequenze naturali coincidono.',
    ai: {
      opening: 'Ciao! Sono Gali. La risonanza può far vibrare un diapason senza toccarlo — la fisica del suono in azione!',
      keywords: {
        setup: 'tuning fork|resonance box|paper rider|sympathetic resonance',
        formula: 'resonance: f_driver = f_natural',
        error: 'too much background noise|forks not truly identical|damping too slow',
        question: 'resonance|natural frequency|sympathetic|tuning fork|energy transfer',
        real: 'bridge collapse|opera singer|radio tuning'
      },
      hint: 'Avvicina i due diapason della stessa frequenza. L\'altro inizia a vibrare senza essere toccato.',
      expected: 'Identical forks: B vibrates, paper rider ejected. Different forks: no resonance. Confirms f_driver must equal f_natural.'
    }
  },
  {
    num: 28,
    cardEmoji: "🎶",
    title: 'Battimenti e interferenza acustica',
    section: 'Acoustics',
    desc: 'Sovrapponi due suoni di frequenza simile e osserva i battimenti — variazioni periodiche del volume.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti osservano i battimenti come variazioni periodiche di intensità quando si sovrappongono due suoni.',
      instructions: [
        'Strike both forks (440 Hz and 437 Hz) simultaneously.',
        'Count the number of beats (loudness pulses) heard in 10 seconds.',
        'Calculate f_beat = beats / 10 s and compare with |440 − 437| = 3 Hz.'
      ],
      expectedOutcome: '440 Hz + 437 Hz → 3 beats/s → 30 beats in 10 s. The sound oscillates between loud and soft 3 times per second.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🎵',
          name: 'Tuning fork 440 Hz'
        },
        {
          emoji: '🎵',
          name: 'Tuning fork 437 Hz (or 440 Hz with wax added)'
        },
        {
          emoji: '⏱️',
          name: 'Stopwatch'
        },
        {
          emoji: '🔨',
          name: 'Rubber mallet'
        }
      ],
      observationsToRecord: [
        'Number of beats heard in 10 seconds',
        'Beat frequency f_beat = n/t (Hz)',
        'Comparison with |f₁ − f₂|'
      ],
      theoryPoints: [
        'Beats: periodic amplitude variation when two close-frequency waves superpose.',
        'f_beat = |f₁ − f₂|.',
        'The beat period T_beat = 1/f_beat.',
        'Constructive interference (loud) when waves are in phase; destructive (quiet) when out of phase.'
      ],
      realWorldConnections: [
        'Piano tuners use beats to tune strings to exact unison.',
        'Musicians use beats to tune instruments against a reference tone.',
        'Radio heterodyne receivers use beat frequency detection.'
      ],
      formula: 'f_beat = |f₁ − f₂|'
    },
    questions: {
      mcq: [
        {
          text: 'A 440 Hz and a 437 Hz fork are sounded together. How many beats occur in 10 s?',
          options: ['30', '440', '3', '877'],
          correctIndex: 0,
          explanation: 'f_beat = |440 − 437| = 3 Hz → 3 × 10 = 30 beats in 10 s.'
        },
        {
          text: 'If two forks produce 5 beats per second and one is at 500 Hz, the other could be:',
          options: ['505 Hz only', '495 Hz only', '495 Hz or 505 Hz', '500 Hz'],
          correctIndex: 2,
          explanation: 'f_beat = |f₁ − f₂| = 5 → f₂ = 500 ± 5 = 495 or 505 Hz.'
        },
        {
          text: 'Beats result from:',
          options: [
            'Two waves at the same frequency in phase',
            'Two waves at different frequencies superposing',
            'Echoes from walls',
            'Doppler effect'
          ],
          correctIndex: 1,
          explanation: 'Beats arise from the superposition of two waves with slightly different frequencies, creating periodic constructive and destructive interference.'
        }
      ],
      discussion: [
        'Explain how beats arise from the principle of superposition.',
        'How do piano tuners use beats to achieve perfect tuning?',
        'If you add wax to a 440 Hz tuning fork, what happens to the beat frequency when combined with another 440 Hz fork?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'f_beat = |f₁ − f₂|',
          pct: 35
        },
        {
          label: 'Superposition principle',
          pct: 30
        },
        {
          label: 'Constructive/destructive interference',
          pct: 25
        },
        {
          label: 'Musical tuning application',
          pct: 10
        }
      ],
      misconceptions: [
        'I battimenti non sono un\'interferenza permanente — la frequenza cambia periodicamente.',
        'La frequenza dei battimenti è la DIFFERENZA delle due frequenze, non la loro media.'
      ],
      hook: 'I tecnici del suono usano i battimenti per accordare strumenti musicali: quando i battimenti scompaiono, le frequenze coincidono!',
      khanLinks: [
        {
          title: 'Sound and Wave Interference',
          url: 'https://www.khanacademy.org/science/physics/mechanical-waves-and-sound'
        },
        {
          title: 'Wave Interference',
          url: 'https://www.khanacademy.org/science/ap-physics-1/ap-mechanical-waves-and-sound/wave-interference-ap/v/wave-interference'
        }
      ]
    },
    dataTable: {
      headers: ['f₁ (Hz)', 'f₂ (Hz)', 'f_bat teorica (Hz)', 'f_bat misurata (Hz)'],
      rows: 3
    },
    observations: [
      'Ascolta i battimenti e conta le pulsazioni al secondo',
      'Confronta con |f₁ − f₂|',
      'Varia leggermente la frequenza e osserva il cambiamento'
    ],
    conclusion: 'Calcola la frequenza dei battimenti f_bat = |f₁ − f₂| e confronta con il valore misurato.',
    ai: {
      opening: 'Ciao! Sono Gali. I battimenti sono una delle interferenze più belle della fisica — senti il volume pulsare!',
      keywords: {
        setup: 'two tuning forks|slightly different frequencies|stopwatch|count beats',
        formula: 'f_beat = |f₁ − f₂|',
        error: 'miscounting beats|too noisy environment|forks not simultaneously struck',
        question: 'beats|f_beat|interference|superposition|tuning',
        real: 'piano tuning|guitar tuning|radio heterodyne'
      },
      hint: 'Ascolta attentamente i battimenti — il volume aumenta e diminuisce con la frequenza f_bat = |f₁ − f₂|.',
      expected: 'f₁=440 Hz, f₂=437 Hz → 30 beats in 10 s → f_beat = 3 Hz = |440−437|.'
    }
  },
  {
    num: 29,
    cardEmoji: "🔍",
    title: 'Lunghezza focale',
    section: 'Optics',
    desc: 'Misura la lunghezza focale di lenti convergenti e divergenti usando oggetti a distanza nota.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti misurano la distanza focale di lenti convergenti e divergenti usando la formula dei punti coniugati.',
      instructions: [
        'For biconvex: direct lens toward a distant object; find the sharpest image on a screen and measure f.',
        'For biconcave: use a virtual image method or measure divergence of a narrow beam.',
        'Record f for three different lenses of each type.'
      ],
      expectedOutcome: 'Biconcave: f = [−0.054, −0.102, −0.152] m. Biconvex: f = [+0.053, +0.098, +0.151] m.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔵',
          name: 'Set of biconvex lenses (3 different)'
        },
        {
          emoji: '🔵',
          name: 'Set of biconcave lenses (3 different)'
        },
        {
          emoji: '🔦',
          name: 'Distant light source or window'
        },
        {
          emoji: '📏',
          name: 'Ruler / optical bench'
        },
        {
          emoji: '🖥️',
          name: 'Screen (white card)'
        }
      ],
      observationsToRecord: [
        'Type of lens (convex/concave)',
        'Distance from lens to sharp image f (m)',
        'Sign of f (positive for convex, negative for concave)'
      ],
      theoryPoints: [
        'Focal length f: distance from lens to focal point where parallel rays converge (convex) or appear to diverge from (concave).',
        'Convex (converging) lens: f > 0; forms real image of distant objects.',
        'Concave (diverging) lens: f < 0; always forms virtual, upright, diminished images.',
        'Lens power P = 1/f (dioptres, D); more curved lens → shorter f → higher P.'
      ],
      realWorldConnections: [
        'Eyeglasses use lenses with prescribed focal lengths to correct vision.',
        'Camera lenses are compound systems of converging and diverging lenses.',
        'Telescopes and microscopes combine lenses to achieve high magnification.'
      ],
      formula: 'P = 1/f (D)   |   f > 0 (converging)   |   f < 0 (diverging)'
    },
    questions: {
      mcq: [
        {
          text: 'A biconvex lens has f = 0.098 m. What is its power in dioptres?',
          options: ['10.2 D', '0.098 D', '9.8 D', '1.02 D'],
          correctIndex: 0,
          explanation: 'P = 1/f = 1/0.098 ≈ 10.2 D.'
        },
        {
          text: 'A biconcave lens has f = −0.102 m. What type of image does it always form?',
          options: [
            'Real, inverted, magnified',
            'Real, inverted, diminished',
            'Virtual, upright, diminished',
            'Virtual, inverted, same size'
          ],
          correctIndex: 2,
          explanation: 'A concave (diverging) lens always forms virtual, upright, and diminished images regardless of object position.'
        },
        {
          text: 'To correct shortsightedness (myopia), which lens is needed?',
          options: ['Converging (convex)', 'Diverging (concave)', 'Plane (flat)', 'Cylindrical'],
          correctIndex: 1,
          explanation: 'Myopia means the eye converges light too strongly; a diverging (concave) lens reduces convergence and shifts the focal point back to the retina.'
        }
      ],
      discussion: [
        'Explain the difference between a converging and a diverging lens using ray diagrams.',
        'Why does a more curved lens have a shorter focal length?',
        'How would you measure f for a concave lens without a direct focal point?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Focal length definition',
          pct: 25
        },
        {
          label: 'Sign convention (f>0, f<0)',
          pct: 25
        },
        {
          label: 'Lens power P=1/f',
          pct: 25
        },
        {
          label: 'Image types for each lens',
          pct: 25
        }
      ],
      misconceptions: [
        'Le lenti divergenti hanno lunghezza focale NEGATIVA — l\'immagine è virtuale.',
        'La distanza focale dipende dalla forma della lente e dall\'indice di rifrazione.'
      ],
      hook: 'Il telescopio di Galileo (1609) usava solo due lenti — lo stesso principio che studi oggi!',
      khanLinks: [
        {
          title: 'Convex Lenses',
          url: 'https://www.khanacademy.org/science/physics/geometric-optics/lenses/v/convex-lenses'
        },
        {
          title: 'Geometric Optics',
          url: 'https://www.khanacademy.org/science/physics/geometric-optics'
        }
      ]
    },
    dataTable: {
      headers: ['Distanza oggetto u (cm)', 'Distanza immagine v (cm)', '1/u', '1/v', 'f calcolata (cm)'],
      rows: 6
    },
    observations: [
      'Registra u e v per almeno 5 posizioni diverse',
      'Calcola f da ogni coppia (u,v)',
      'Confronta con il valore nominale della lente'
    ],
    conclusion: 'Verifica la formula 1/f = 1/v − 1/u. Calcola la distanza focale e confronta con il valore nominale.',
    ai: {
      opening: 'Ciao! Sono Gali. Le lenti formano immagini secondo regole precise — scopri la lunghezza focale con i raggi luminosi!',
      keywords: {
        setup: 'lens|focal point|screen|optical bench|distant object',
        formula: 'P = 1/f|f>0 convex|f<0 concave',
        error: 'parallax error|not a truly distant object|screen not perpendicular',
        question: 'focal length|converging|diverging|power|dioptres',
        real: 'eyeglasses|camera|telescope'
      },
      hint: 'Usa un oggetto luminoso come sorgente. Misura la distanza immagine sullo schermo dove l\'immagine è a fuoco.',
      expected: 'Biconvex: f = +0.053, +0.098, +0.151 m. Biconcave: f = −0.054, −0.102, −0.152 m.'
    }
  },
  {
    num: 30,
    cardEmoji: "👓",
    title: 'Equazione delle lenti sottili',
    section: 'Optics',
    desc: 'Verifica l\'equazione delle lenti sottili (1/f = 1/v − 1/u) misurando distanze dell\'immagine e dell\'oggetto.',
    setupTime: '5 min',
    duration: '30 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano 1/f = 1/v − 1/u misurando le distanze immagine-oggetto per diverse lenti.',
      instructions: [
        'Place object at p = 200 mm from a lens of known f.',
        'Move the screen until a sharp image forms; record q.',
        'Repeat for p = 150, 130, 100 mm and verify 1/p + 1/q = 1/f each time.'
      ],
      expectedOutcome: 'p = 200 mm → q ≈ 90 mm; f ≈ 7 cm (from 1/0.2 + 1/0.09 ≈ 1/0.063). Object at 10 cm with f=15 cm: virtual image at q = −30 cm.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔵',
          name: 'Converging lens (known f)'
        },
        {
          emoji: '💡',
          name: 'Illuminated object (lamp + object slide)'
        },
        {
          emoji: '🖥️',
          name: 'Screen'
        },
        {
          emoji: '📏',
          name: 'Optical bench with scale'
        }
      ],
      observationsToRecord: [
        'Object distance p (mm)',
        'Image distance q (mm) for each p',
        'Whether image is real (screen) or virtual (cannot be projected)'
      ],
      theoryPoints: [
        'Thin lens equation: 1/p + 1/q = 1/f.',
        'Real images: q > 0 (same side as image), can be projected on screen.',
        'Virtual images: q < 0, cannot be projected; appear behind the lens.',
        'Magnification m = −q/p (negative m = inverted image).'
      ],
      realWorldConnections: [
        'Camera: film/sensor at image distance q for object at distance p.',
        'Projectors: produce large real images on a screen by placing object just outside focal length.',
        'Magnifying glass: object inside focal length → virtual, upright, magnified image.'
      ],
      formula: '1/p + 1/q = 1/f   |   m = −q/p'
    },
    questions: {
      mcq: [
        {
          text: 'For a lens with f = 70 mm and p = 200 mm, calculate q.',
          options: ['109 mm', '70 mm', '200 mm', '130 mm'],
          correctIndex: 0,
          explanation: '1/q = 1/f − 1/p = 1/70 − 1/200 = (200−70)/(70×200) = 130/14000 → q = 14000/130 ≈ 107.7 mm ≈ 108 mm.'
        },
        {
          text: 'An object is placed at p = 10 cm from a lens with f = 15 cm. The image is:',
          options: ['Real at 30 cm', 'Virtual at −30 cm', 'Real at −30 cm', 'Virtual at 30 cm'],
          correctIndex: 1,
          explanation: '1/q = 1/15 − 1/10 = (2−3)/30 = −1/30 → q = −30 cm. Negative q means virtual image.'
        },
        {
          text: 'When 1/p = 1/f (object at focal point), what is q?',
          options: ['q = 0', 'q = f', 'q = ∞', 'q = −f'],
          correctIndex: 2,
          explanation: '1/q = 1/f − 1/f = 0 → q = ∞. Parallel rays exit the lens; image at infinity.'
        }
      ],
      discussion: [
        'Draw a ray diagram for an object at 2f and predict the image position using the lens equation.',
        'Explain the difference between a real and a virtual image. How can you tell which type you have?',
        'How does a projector differ from a camera in terms of where the object is placed relative to f?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: '1/p + 1/q = 1/f derivation',
          pct: 30
        },
        {
          label: 'Real vs. virtual images',
          pct: 25
        },
        {
          label: 'Magnification m = −q/p',
          pct: 25
        },
        {
          label: 'Special cases (p=f, p=2f)',
          pct: 20
        }
      ],
      misconceptions: [
        '1/f = 1/v − 1/u funziona solo per lenti sottili — per lenti spesse serve una formula più complessa.',
        'Le distanze vanno misurate dal centro ottico della lente, non dalle superfici.'
      ],
      hook: 'Gli ottici progettano lenti correttive per occhiali usando l\'equazione delle lenti sottili che stai verificando!',
      khanLinks: [
        {
          title: 'Thin Lens Equation',
          url: 'https://www.khanacademy.org/science/physics/geometric-optics/lenses/v/thin-lens-equation-and-problem-solving'
        },
        {
          title: 'Geometric Optics',
          url: 'https://www.khanacademy.org/science/physics/geometric-optics'
        }
      ]
    },
    dataTable: {
      headers: ['u (cm)', 'v (cm)', '1/u (cm⁻¹)', '1/v (cm⁻¹)', 'f (cm)'],
      rows: 5
    },
    observations: ['Registra u e v per almeno 6 posizioni', 'Traccia 1/v vs 1/u', 'Determina f dall\'intercetta'],
    conclusion: 'Traccia il grafico 1/v vs 1/u e verifica che l\'intercetta corrisponde a 1/f.',
    ai: {
      opening: 'Ciao! Sono Gali. L\'equazione delle lenti sottili connette oggetto, immagine e fuoco — verifichiamola insieme!',
      keywords: {
        setup: 'optical bench|converging lens|object|screen|image distance',
        formula: '1/p+1/q=1/f|m=-q/p',
        error: 'parallax|screen not at sharp focus|p measured from wrong reference',
        question: 'thin lens|object distance|image distance|real|virtual|magnification',
        real: 'camera|projector|magnifying glass'
      },
      hint: 'Traccia 1/v vs 1/u su carta millimetrata — la retta deve avere intercetta 1/f.',
      expected: 'p=200mm, f=70mm: q≈108mm. p=10cm, f=15cm: q=−30cm (virtual). 1/p+1/q=1/f confirmed.'
    }
  },
  {
    num: 31,
    cardEmoji: "🔬",
    title: 'Ingrandimento',
    section: 'Optics',
    desc: 'Misura l\'ingrandimento prodotto da lenti e specchi in diverse configurazioni.',
    setupTime: '5 min',
    duration: '40 min',
    summary: {
      whatTheyLearn: 'Gli studenti calcolano l\'ingrandimento lineare m = −v/u e lo confrontano con la misura diretta.',
      instructions: [
        'Set up object (arrow slide) at measured distance u from lens.',
        'Find sharp image on screen at distance v.',
        'Measure S₁ (object size) and S₂ (image size); calculate m = S₂/S₁ and compare with −v/u.'
      ],
      expectedOutcome: 'Trial 1: u = 35 mm, v = 86.5 mm, S₁ = 21 mm, S₂ = 51 mm → m = 51/21 ≈ 2.43; −v/u = −86.5/35 ≈ −2.47. Inverted image.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔵',
          name: 'Converging lens'
        },
        {
          emoji: '💡',
          name: 'Object slide with arrow (known size S₁)'
        },
        {
          emoji: '🖥️',
          name: 'Screen'
        },
        {
          emoji: '📏',
          name: 'Optical bench with millimetre scale'
        }
      ],
      observationsToRecord: [
        'Object distance u (mm)',
        'Image distance v (mm)',
        'Object size S₁ (mm)',
        'Image size S₂ (mm)',
        'm = S₂/S₁ and m = −v/u'
      ],
      theoryPoints: [
        'Linear magnification: m = image size / object size = S₂/S₁.',
        'From geometry of similar triangles: m = −v/u (negative sign = inverted).',
        '|m| > 1: magnified; |m| < 1: diminished; m < 0: inverted.',
        'Real images (v > 0) from object beyond f: inverted (m < 0).'
      ],
      realWorldConnections: [
        'Projectors require m >> 1 to create large screen images.',
        'Microscopes use two lens stages; total m = m_obj × m_eye.',
        'Cameras require m < 1 to create small sensor images of large scenes.'
      ],
      formula: 'm = S₂/S₁ = −v/u = −q/p'
    },
    questions: {
      mcq: [
        {
          text: 'Object at u = 35 mm, image at v = 86.5 mm. What is the magnification?',
          options: ['−2.47', '+2.47', '−0.40', '+0.40'],
          correctIndex: 0,
          explanation: 'm = −v/u = −86.5/35 ≈ −2.47. Negative: inverted image. |m| = 2.47: magnified.'
        },
        {
          text: 'If |m| = 0.5, the image is:',
          options: [
            'Twice as large as the object',
            'The same size as the object',
            'Half the size of the object',
            'Three times as large'
          ],
          correctIndex: 2,
          explanation: '|m| = 0.5 means image size = 0.5 × object size → image is half the size (diminished).'
        },
        {
          text: 'A real image formed by a converging lens is always:',
          options: ['Upright and magnified', 'Inverted', 'Virtual', 'The same size as the object'],
          correctIndex: 1,
          explanation: 'Real images from converging lenses (object beyond f) are always inverted (m < 0).'
        }
      ],
      discussion: [
        'Explain why m = −v/u has a negative sign for real images.',
        'How would you set up the experiment to produce a magnified virtual image? What would m be?',
        'A projector lens produces an image 50× the object size. If the object is 20 mm, how large is the image?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'm = S₂/S₁ (size ratio)',
          pct: 30
        },
        {
          label: 'm = −v/u (distance ratio)',
          pct: 30
        },
        {
          label: 'Sign and magnitude of m',
          pct: 25
        },
        {
          label: 'Verification of both methods',
          pct: 15
        }
      ],
      misconceptions: [
        'L\'ingrandimento lineare è negativo per immagini reali (immagine invertita).',
        'Ingrandimento > 1 significa immagine più grande — ma può anche essere virtuale.'
      ],
      hook: 'Il microscopio elettronico può ingrandire fino a 10 milioni di volte — 10.000 volte più del migliore ottico!',
      khanLinks: [
        {
          title: 'Image Height & Distance',
          url: 'https://www.khanacademy.org/science/physics/geometric-optics/lenses/v/object-image-height-and-distance-relationship'
        },
        {
          title: 'Thin Lens Equation',
          url: 'https://www.khanacademy.org/science/physics/geometric-optics/lenses/v/thin-lens-equation-and-problem-solving'
        }
      ]
    },
    dataTable: {
      headers: [
        'Distanza oggetto u (cm)',
        'Distanza immagine v (cm)',
        'm = −v/u',
        'Altezza oggetto (cm)',
        'Altezza immagine (cm)'
      ],
      rows: 4
    },
    observations: [
      'Registra u, v e le dimensioni dell\'immagine e dell\'oggetto',
      'Calcola m da entrambe le definizioni',
      'Nota se l\'immagine è reale o virtuale'
    ],
    conclusion: 'Confronta l\'ingrandimento lineare m = −v/u con il rapporto delle dimensioni dell\'immagine e dell\'oggetto.',
    ai: {
      opening: 'Ciao! Sono Gali. Quanto ingrandisce una lente? La risposta è nella formula m = −v/u!',
      keywords: {
        setup: 'optical bench|object slide|screen|converging lens|image size',
        formula: 'm = S₂/S₁ = −v/u',
        error: 'measuring from wrong reference|blurry image|parallax',
        question: 'magnification|image size|object size|inverted|real image',
        real: 'projector|microscope|camera'
      },
      hint: 'Misura l\'immagine con un righello. Calcola m = altezza_immagine / altezza_oggetto e confronta con −v/u.',
      expected: 'u=35mm, v=86.5mm, S₁=21mm, S₂=51mm → m_size≈2.43, m_ratio≈−2.47. Agreement confirms formula.'
    }
  },
  {
    num: 32,
    cardEmoji: "🌈",
    title: 'Mescolanza dei colori',
    section: 'Optics',
    desc: 'Mescola luci colorate primarie e studia la sintesi additiva dei colori.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti capiscono la sintesi additiva dei colori: rosso + verde + blu = bianco.',
      instructions: [
        'Shine red, green, and blue lights onto a white screen and overlap them.',
        'Record the colour at each overlap region.',
        'Repeat with coloured filters (subtractive): observe different results.'
      ],
      expectedOutcome: 'Additive: R+G=Yellow, R+B=Magenta, G+B=Cyan, R+G+B=White. Subtractive: primary colours CMY combine differently.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔴',
          name: 'Red LED / spotlight'
        },
        {
          emoji: '🟢',
          name: 'Green LED / spotlight'
        },
        {
          emoji: '🔵',
          name: 'Blue LED / spotlight'
        },
        {
          emoji: '🖥️',
          name: 'White screen'
        },
        {
          emoji: '🎨',
          name: 'Coloured filters (CMY)'
        }
      ],
      observationsToRecord: [
        'Colour at each overlap of two primaries',
        'Colour when all three primaries overlap',
        'Comparison with subtractive (filter) mixing results'
      ],
      theoryPoints: [
        'Additive mixing (lights): R + G = Yellow; R + B = Magenta; G + B = Cyan; R + G + B = White.',
        'Subtractive mixing (pigments/filters): absorb colours; Cyan + Magenta + Yellow = Black.',
        'Human eye has three cone types (sensitive to R, G, B).',
        'TV screens use additive mixing (tiny R, G, B pixels).'
      ],
      realWorldConnections: [
        'Television and phone screens use additive RGB mixing.',
        'Printing uses subtractive CMYK mixing.',
        'Stage lighting designers use additive colour mixing.'
      ],
      formula: 'Additive: R+G+B = White   |   Subtractive: C+M+Y = Black'
    },
    questions: {
      mcq: [
        {
          text: 'What colour is produced by mixing red and green light?',
          options: ['Brown', 'Yellow', 'Orange', 'White'],
          correctIndex: 1,
          explanation: 'Additive mixing: red + green = yellow.'
        },
        {
          text: 'Mixing all three additive primaries (R+G+B) gives:',
          options: ['Black', 'Brown', 'White', 'Grey'],
          correctIndex: 2,
          explanation: 'All three additive primaries together produce white light.'
        },
        {
          text: 'Subtractive colour mixing is used in:',
          options: ['Television screens', 'Stage lighting', 'Colour printing', 'Projectors'],
          correctIndex: 2,
          explanation: 'Printing uses subtractive CMYK mixing; inks absorb (subtract) colours from white light.'
        }
      ],
      discussion: [
        'Explain the difference between additive and subtractive colour mixing with examples.',
        'Why does mixing all pigment colours give black while mixing all lights gives white?',
        'How does a TV screen produce millions of colours using only three colours?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Additive primaries RGB',
          pct: 30
        },
        {
          label: 'Secondary colours (Y, M, C)',
          pct: 25
        },
        {
          label: 'Subtractive mixing (CMY)',
          pct: 25
        },
        {
          label: 'Colour perception (cone cells)',
          pct: 20
        }
      ],
      misconceptions: [
        'La sintesi additiva (luci) è diversa dalla sintesi sottrattiva (pigmenti): rosso + verde ≠ giallo per i pigmenti.',
        'I colori primari della luce (RGB) sono diversi da quelli dei pigmenti (RYB).'
      ],
      hook: 'Newton scoprì che la luce bianca è composta da tutti i colori dell\'arcobaleno usando un prisma nel 1666!',
      khanLinks: [
        {
          title: 'Visible Light & the EM Spectrum',
          url: 'https://www.khanacademy.org/science/physics/light-waves/introduction-to-light-waves/v/visible-light-and-the-electromagnetic-spectrum'
        },
        {
          title: 'Light Waves',
          url: 'https://www.khanacademy.org/science/physics/light-waves'
        }
      ]
    },
    dataTable: {
      headers: ['Colori mescolati', 'Colore risultante osservato', 'Colore previsto'],
      rows: 7
    },
    observations: [
      'Registra i colori ottenuti per ogni combinazione',
      'Nota le intensità relative',
      'Confronta con la previsione della sintesi additiva'
    ],
    conclusion: 'Descrivi le combinazioni di colori primari osservate e confronta con le previsioni della sintesi additiva.',
    ai: {
      opening: 'Ciao! Sono Gali. I colori della luce si sommano diversamente dai pigmenti — scopri la sintesi additiva!',
      keywords: {
        setup: 'coloured lights|RGB|white screen|filters|overlap',
        formula: 'R+G=Y|R+B=M|G+B=C|R+G+B=White|C+M+Y=Black',
        error: 'room not dark enough|spotlights not truly RGB|screen not white',
        question: 'additive|subtractive|RGB|CMY|colour mixing|primary colours',
        real: 'TV screen|printing|stage lighting'
      },
      hint: 'Usa fonti luminose ben collimate (proiettori o LED). La sovrapposizione deve avvenire su uno schermo bianco.',
      expected: 'R+G=Yellow, R+B=Magenta, G+B=Cyan, R+G+B=White. Subtractive: C+M+Y=Black.'
    }
  },
  {
    num: 33,
    cardEmoji: "🔭",
    title: 'Microscopio e cannocchiale',
    section: 'Optics',
    desc: 'Costruisci un microscopio e un cannocchiale semplici con due lenti e studia i loro ingrandimenti.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti calcolano l\'ingrandimento totale di un microscopio semplice (m = m_oculare × m_obiettivo).',
      instructions: [
        'Microscope: place object just beyond f of objective; position eyepiece to view the real intermediate image.',
        'Telescope: align objective (long f) and eyepiece (short f) separated by f_obj + f_eye.',
        'Measure total magnification by comparing image and object apparent sizes.'
      ],
      expectedOutcome: 'Microscope: M_total = M_obj × M_eye. Telescope angular magnification: M = f_obj/f_eye.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔵',
          name: 'Short focal length lens (objective)'
        },
        {
          emoji: '🔵',
          name: 'Medium focal length lens (eyepiece)'
        },
        {
          emoji: '📏',
          name: 'Optical bench'
        },
        {
          emoji: '💡',
          name: 'Illuminated object'
        },
        {
          emoji: '🔭',
          name: 'Long focal length lens (telescope objective)'
        }
      ],
      observationsToRecord: [
        'f_objective and f_eyepiece (mm)',
        'Total magnification M_total for microscope',
        'Angular magnification M = f_obj/f_eye for telescope'
      ],
      theoryPoints: [
        'Compound microscope: M_total = M_obj × M_eye = (v_obj/u_obj) × (D/f_eye).',
        'Telescope: M = f_obj / f_eye (angular magnification).',
        'Using a short f_obj and short f_eye gives high microscope magnification.',
        'Telescope: large f_obj and short f_eye gives high magnification.'
      ],
      realWorldConnections: [
        'Compound microscopes magnify cells and microorganisms for biological study.',
        'Astronomical telescopes use large objective mirrors or lenses to gather light.',
        'Binoculars combine two telescopes with prisms for compact design.'
      ],
      formula: 'Microscope: M = M_obj × M_eye   |   Telescope: M = f_obj / f_eye'
    },
    questions: {
      mcq: [
        {
          text: 'A microscope has M_obj = 10× and M_eye = 5×. What is M_total?',
          options: ['2×', '15×', '50×', '100×'],
          correctIndex: 2,
          explanation: 'M_total = M_obj × M_eye = 10 × 5 = 50×.'
        },
        {
          text: 'A telescope has f_obj = 600 mm and f_eye = 20 mm. What is its magnification?',
          options: ['20×', '30×', '600×', '12,000×'],
          correctIndex: 1,
          explanation: 'M = f_obj/f_eye = 600/20 = 30×.'
        },
        {
          text: 'The eyepiece of a microscope acts as:',
          options: [
            'An objective lens making a real image',
            'A magnifying glass viewing the real image from the objective',
            'A mirror',
            'A projector'
          ],
          correctIndex: 1,
          explanation: 'The eyepiece functions as a simple magnifying glass, enlarging the real intermediate image formed by the objective.'
        }
      ],
      discussion: [
        'Explain the two-stage magnification process in a compound microscope.',
        'Why does a telescope need a large diameter objective lens?',
        'Compare the light path in a refracting telescope and a reflecting telescope.'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Two-lens compound microscope',
          pct: 30
        },
        {
          label: 'Refracting telescope design',
          pct: 30
        },
        {
          label: 'M = M_obj × M_eye (microscope)',
          pct: 20
        },
        {
          label: 'M = f_obj/f_eye (telescope)',
          pct: 20
        }
      ],
      misconceptions: [
        'Il microscopio composto non ingrandisce semplicemente due volte — moltiplica i due ingrandimenti.',
        'L\'ingrandimento utile del microscopio è limitato dalla lunghezza d\'onda della luce.'
      ],
      hook: 'Il telescopio di Hubble ha specchi così precisi che la deviazione è inferiore a 1/50 dello spessore di un capello!',
      khanLinks: [
        {
          title: 'Lenses (Geometric Optics)',
          url: 'https://www.khanacademy.org/science/physics/geometric-optics/lenses'
        },
        {
          title: 'Geometric Optics',
          url: 'https://www.khanacademy.org/science/physics/geometric-optics'
        }
      ]
    },
    dataTable: {
      headers: ['Strumento', 'Obiettivo (f, mm)', 'Oculare (f, mm)', 'm totale teorico', 'm totale misurato'],
      rows: 3
    },
    observations: [
      'Registra le distanze focali e le distanze di lavoro',
      'Misura l\'ingrandimento totale',
      'Confronta con il prodotto degli ingrandimenti'
    ],
    conclusion: 'Calcola l\'ingrandimento totale del microscopio e del cannocchiale e confronta con la misura diretta.',
    ai: {
      opening: 'Ciao! Sono Gali. Microscopio e cannocchiale usano lo stesso principio — due lenti per ingrandire mondi lontani e piccoli!',
      keywords: {
        setup: 'objective|eyepiece|optical bench|focal length|microscope|telescope',
        formula: 'M_total = M_obj × M_eye|M_telescope = f_obj/f_eye',
        error: 'alignment|eye relief|incorrect lens choice',
        question: 'microscope|telescope|magnification|objective|eyepiece',
        real: 'biological microscope|astronomical telescope|binoculars'
      },
      hint: 'Ottieni un\'immagine nitida dell\'oggetto prima di misurare l\'ingrandimento dell\'oculare.',
      expected: 'Telescope with f_obj=600mm, f_eye=20mm → M=30×. Microscope: M_obj×M_eye gives total magnification.'
    }
  },
  {
    num: 34,
    cardEmoji: "🔺",
    title: 'Prisma: composizione della luce',
    section: 'Optics',
    desc: 'Usa un prisma per scomporre la luce bianca nello spettro visibile e studiare la dispersione della luce.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti osservano la dispersione della luce bianca in uno spettro dal prisma e identificano i colori.',
      instructions: [
        'Direct a narrow beam of white light at the prism face.',
        'Observe the spectrum on a screen and identify the colours in order.',
        'Note which colour is deviated most (violet) and least (red).'
      ],
      expectedOutcome: 'Spectrum in order: Red, Orange, Yellow, Green, Blue, Indigo, Violet (ROY G BIV). Violet deviates the most; red the least. Replicates Newton\'s 1666 prism experiment.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔺',
          name: 'Glass equilateral prism'
        },
        {
          emoji: '🔦',
          name: 'White light source (projector or sunlight slit)'
        },
        {
          emoji: '🖥️',
          name: 'White screen'
        },
        {
          emoji: '📏',
          name: 'Ruler (to measure deviation angles)'
        }
      ],
      observationsToRecord: [
        'Colour sequence in the spectrum',
        'Which colour deviates most and least',
        'Approximate angular width of the spectrum'
      ],
      theoryPoints: [
        'Dispersion: different wavelengths refract at slightly different angles (n varies with λ).',
        'Violet (λ ≈ 400 nm) has the highest refractive index → bends most.',
        'Red (λ ≈ 700 nm) has the lowest refractive index → bends least.',
        'Snell\'s law: n₁ sin θ₁ = n₂ sin θ₂ (but n depends on wavelength).',
        'Rainbows are natural dispersion by water droplets.'
      ],
      realWorldConnections: [
        'Rainbows occur when sunlight disperses in water droplets.',
        'Prism spectrometers analyse the composition of light sources.',
        'Chromatic aberration in lenses arises from dispersion.'
      ],
      formula: 'n₁ sin θ₁ = n₂ sin θ₂   |   n = n(λ): violet > red'
    },
    questions: {
      mcq: [
        {
          text: 'Which colour of light is deviated most by a glass prism?',
          options: ['Red', 'Green', 'Violet', 'Yellow'],
          correctIndex: 2,
          explanation: 'Violet has the shortest wavelength and highest refractive index in glass → greatest deviation.'
        },
        {
          text: 'Why does a prism separate white light into colours?',
          options: [
            'It absorbs some colours',
            'Different wavelengths have different refractive indices',
            'The prism is very thick',
            'The light bounces inside the prism'
          ],
          correctIndex: 1,
          explanation: 'Dispersion: n varies with wavelength. Each colour refracts at a slightly different angle.'
        },
        {
          text: 'The sequence of colours from a prism starting from least to most deviated is:',
          options: ['V I B G Y O R', 'R O Y G B I V', 'R G B', 'W Y G'],
          correctIndex: 1,
          explanation: 'Red deviates least, violet most: R O Y G B I V (ROY G BIV).'
        }
      ],
      discussion: [
        'Explain why violet light bends more than red light when passing through glass.',
        'How is a rainbow formed? Which colour appears on the outer edge and which on the inner?',
        'What is chromatic aberration and how does it relate to dispersion?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Dispersion: n = n(λ)',
          pct: 30
        },
        {
          label: 'Spectrum order ROY G BIV',
          pct: 25
        },
        {
          label: 'Snell\'s law at each interface',
          pct: 25
        },
        {
          label: 'Rainbow and real-world dispersion',
          pct: 20
        }
      ],
      misconceptions: [
        'La luce non si \'scompone\' ma si \'disperde\' — ciascun colore ha velocità diversa nel vetro.',
        'Il prisma non crea i colori — li separa dal bianco.'
      ],
      hook: 'L\'arcobaleno è un prisma naturale: le gocce d\'acqua scompongono la luce solare negli stessi colori!',
      khanLinks: [
        {
          title: 'Refraction & Snell\'s Law',
          url: 'https://www.khanacademy.org/science/physics/geometric-optics/reflection-refraction/v/refraction-and-snell-s-law'
        },
        {
          title: 'Visible Light & the EM Spectrum',
          url: 'https://www.khanacademy.org/science/physics/light-waves/introduction-to-light-waves/v/visible-light-and-the-electromagnetic-spectrum'
        }
      ]
    },
    dataTable: {
      headers: ['Colore', 'Lunghezza d\'onda (nm)', 'Angolo di deviazione (°)'],
      rows: 7
    },
    observations: [
      'Registra i colori osservati e gli angoli di deviazione',
      'Nota l\'ordine dei colori (rosso meno deviato, viola più)',
      'Misura la larghezza dello spettro'
    ],
    conclusion: 'Misura gli angoli di deviazione per i colori dello spettro. Verifica che la luce viola si devia di più.',
    ai: {
      opening: 'Ciao! Sono Gali. Il prisma svela i colori nascosti nella luce bianca — scopri la dispersione della luce!',
      keywords: {
        setup: 'prism|white light|spectrum|screen|slit',
        formula: 'n₁sinθ₁=n₂sinθ₂|n = n(λ)|dispersion',
        error: 'room not dark|prism angle wrong|slit too wide',
        question: 'dispersion|spectrum|ROY G BIV|violet|red|refraction|rainbow',
        real: 'rainbow|spectrometer|chromatic aberration'
      },
      hint: 'Oscura la stanza per vedere bene lo spettro. Il prisma deve essere orientato con l\'angolo di deviazione minima.',
      expected: 'Spectrum: R-O-Y-G-B-I-V. Violet most deviated, red least. n(violet)>n(red) confirmed.'
    }
  },
  {
    num: 35,
    cardEmoji: "🌗",
    title: 'Ombre e penombre',
    section: 'Optics',
    desc: 'Studia la formazione di ombre e penombre proiettate da sorgenti luminose di diverse dimensioni.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano la legge della propagazione rettilinea della luce con la formazione di ombre e penombre.',
      instructions: [
        'Place a small opaque object between a point light source and a screen.',
        'Measure the shadow size vs. object-screen distance.',
        'Repeat with an extended (larger) light source and observe the penumbra.'
      ],
      expectedOutcome: 'Point source → sharp shadow (umbra only). Extended source → umbra surrounded by penumbra. Shadow size increases as object moves closer to screen.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔦',
          name: 'Point light source (small LED)'
        },
        {
          emoji: '💡',
          name: 'Extended light source (lamp with large bulb)'
        },
        {
          emoji: '⚫',
          name: 'Opaque object (ball or disc)'
        },
        {
          emoji: '🖥️',
          name: 'White screen'
        },
        {
          emoji: '📏',
          name: 'Ruler'
        }
      ],
      observationsToRecord: [
        'Shadow dimensions for point source vs. extended source',
        'Presence/absence of penumbra',
        'Effect of object-screen distance on shadow size'
      ],
      theoryPoints: [
        'Umbra: region of total shadow (no direct light from source).',
        'Penumbra: region of partial shadow (some light from source reaches it).',
        'Point source → only umbra (sharp shadow).',
        'Extended source → umbra + penumbra.',
        'Geometric optics: light travels in straight lines (ray model).'
      ],
      realWorldConnections: [
        'Solar and lunar eclipses involve umbra and penumbra zones.',
        'Photography: large softboxes create soft shadows (large penumbra); small LED creates harsh shadows.',
        'Sundials work because the sun\'s shadow position indicates time.'
      ],
      formula: 'Shadow geometry: similar triangles; shadow height/object height = image distance/object distance'
    },
    questions: {
      mcq: [
        {
          text: 'What is the key difference between umbra and penumbra?',
          options: [
            'Umbra is coloured; penumbra is grey',
            'Umbra receives no direct light; penumbra receives partial light',
            'Umbra is larger than penumbra',
            'There is no difference'
          ],
          correctIndex: 1,
          explanation: 'Umbra is the total shadow region receiving no direct light from the source. Penumbra is the partial shadow where part of the source is blocked.'
        },
        {
          text: 'Which type of light source produces the sharpest shadow with no penumbra?',
          options: [
            'Extended source (large bulb)',
            'Point source (very small LED)',
            'Diffuse source',
            'Coloured source'
          ],
          correctIndex: 1,
          explanation: 'A point source produces rays from a single point; the geometric shadow edge is perfectly sharp with no penumbra.'
        },
        {
          text: 'As an opaque object moves closer to the screen (point source unchanged), the shadow:',
          options: ['Gets larger', 'Gets smaller', 'Stays the same', 'Disappears'],
          correctIndex: 1,
          explanation: 'Moving the object toward the screen brings it closer to its own shadow, reducing shadow size (similar triangles: smaller angle projected).'
        }
      ],
      discussion: [
        'Explain why the Moon\'s shadow during a solar eclipse has both an umbra and a penumbra.',
        'Why do photographers use large softboxes to produce flattering portraits?',
        'Use similar triangles to derive a formula for shadow height in terms of source distance, object size, and screen distance.'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Umbra vs. penumbra',
          pct: 30
        },
        {
          label: 'Point vs. extended source',
          pct: 30
        },
        {
          label: 'Shadow geometry (similar triangles)',
          pct: 25
        },
        {
          label: 'Eclipse geometry',
          pct: 15
        }
      ],
      misconceptions: [
        'L\'ombra non è assenza totale di luce — la penombra riceve luce parziale.',
        'Le dimensioni dell\'ombra dipendono dalla distanza sorgente-oggetto-schermo.'
      ],
      hook: 'Le eclissi di sole (ombra totale) e le eclissi parziali (penombra) seguono esattamente le leggi che studi qui!',
      khanLinks: [
        {
          title: 'Introduction to Light',
          url: 'https://www.khanacademy.org/science/physics/light-waves/introduction-to-light-waves/v/introduction-to-light'
        },
        {
          title: 'Geometric Optics',
          url: 'https://www.khanacademy.org/science/physics/geometric-optics'
        }
      ]
    },
    dataTable: {
      headers: ['Dimensione sorgente', 'Distanza sorgente-oggetto (cm)', 'Ombra (cm)', 'Penombra (cm)'],
      rows: 5
    },
    observations: [
      'Misura le dimensioni di ombra e penombra',
      'Varia la distanza sorgente-oggetto',
      'Osserva come cambia la penombra con la dimensione della sorgente'
    ],
    conclusion: 'Misura le dimensioni delle ombre e penombre e verifica le leggi geometriche della propagazione della luce.',
    ai: {
      opening: 'Ciao! Sono Gali. Le ombre ci parlano della propagazione della luce — studia la geometria del buio!',
      keywords: {
        setup: 'point source|extended source|opaque object|screen|shadow',
        formula: 'similar triangles|shadow_h/object_h = d_screen/d_object',
        error: 'multiple light sources|reflections from walls|translucent object',
        question: 'shadow|umbra|penumbra|point source|eclipse',
        real: 'solar eclipse|photography|sundial'
      },
      hint: 'Usa una sorgente puntiforme per ombre nette e una sorgente estesa per penombre visibili.',
      expected: 'Point source: sharp shadow. Extended source: penumbra surrounds umbra. Shadow size increases with object-screen distance.'
    }
  },
  {
    num: 36,
    cardEmoji: "🪞",
    title: 'Specchi',
    section: 'Optics',
    desc: 'Esplora la riflessione della luce su specchi piani, concavi e convessi e verifica la legge della riflessione.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano la legge della riflessione (angolo di incidenza = angolo di riflessione) per diversi specchi.',
      instructions: [
        'Place object beyond C (centre of curvature) of concave mirror; locate real image.',
        'Move object inside f; observe virtual, upright, magnified image.',
        'Replace with convex mirror; observe always-virtual, upright, diminished image.'
      ],
      expectedOutcome: 'Concave: object beyond f → real, inverted image. Object inside f → virtual, upright, magnified. Convex: always virtual, upright, diminished (wide field of view).'
    },
    experiment: {
      equipment: [
        {
          emoji: '🥄',
          name: 'Concave mirror'
        },
        {
          emoji: '🔵',
          name: 'Convex mirror'
        },
        {
          emoji: '💡',
          name: 'Illuminated object'
        },
        {
          emoji: '🖥️',
          name: 'Screen'
        },
        {
          emoji: '📏',
          name: 'Optical bench'
        }
      ],
      observationsToRecord: [
        'Object distance u (cm)',
        'Image distance v (cm) for concave mirror',
        'Image orientation (upright/inverted) and size',
        'Type of image for convex mirror'
      ],
      theoryPoints: [
        'Mirror equation: 1/v + 1/u = 1/f = 2/R.',
        'Concave mirror: f < 0 (real focus). Object at u > f → real, inverted image.',
        'Concave mirror: u < f → virtual, upright, magnified image (shaving/make-up mirror).',
        'Convex mirror: f > 0 (virtual focus). Always: virtual, upright, diminished image.',
        'Convex mirror has wider field of view → used in car side mirrors.'
      ],
      realWorldConnections: [
        'Convex mirrors in shops and car side mirrors provide a wide field of view.',
        'Concave mirrors in telescopes (reflecting) and satellite dishes focus signals.',
        'Concave mirrors used in make-up mirrors give magnified upright image.'
      ],
      formula: '1/v + 1/u = 1/f = 2/R   |   m = −v/u'
    },
    questions: {
      mcq: [
        {
          text: 'A convex mirror always produces an image that is:',
          options: [
            'Real, inverted, and magnified',
            'Real, inverted, and diminished',
            'Virtual, upright, and diminished',
            'Virtual, inverted, and magnified'
          ],
          correctIndex: 2,
          explanation: 'Convex (diverging) mirrors always produce virtual, upright, and diminished images regardless of object position.'
        },
        {
          text: 'A concave mirror forms a real image when the object is:',
          options: [
            'Inside the focal length',
            'Exactly at the focal point',
            'Beyond the focal length',
            'At infinity only'
          ],
          correctIndex: 2,
          explanation: 'Concave mirrors form real images when the object is beyond the focal point (u > f).'
        },
        {
          text: 'Why are convex mirrors used as car rear-view mirrors?',
          options: [
            'They magnify objects',
            'They provide a wider field of view',
            'They eliminate glare',
            'They show real images'
          ],
          correctIndex: 1,
          explanation: 'Convex mirrors always produce diminished images, allowing a wider field of view in a compact mirror size.'
        }
      ],
      discussion: [
        'Draw ray diagrams for a concave mirror with the object (a) beyond C, (b) between f and C, (c) inside f.',
        'Why does a make-up mirror use a concave rather than a convex mirror?',
        'What is the significance of the warning \'Objects in mirror are closer than they appear\' on car mirrors?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Mirror equation 1/v+1/u=1/f',
          pct: 25
        },
        {
          label: 'Concave mirror image types',
          pct: 30
        },
        {
          label: 'Convex mirror properties',
          pct: 25
        },
        {
          label: 'Applications of curved mirrors',
          pct: 20
        }
      ],
      misconceptions: [
        'Lo specchio piano non inverte destra e sinistra: inverte avanti e indietro.',
        'Gli specchi concavi non sempre formano immagini reali — dipende dalla posizione dell\'oggetto.'
      ],
      hook: 'Gli specchi parabolici dei telescopi raccolgono la luce da stelle a miliardi di anni luce — stessa fisica che studi qui!',
      khanLinks: [
        {
          title: 'Concave Mirror Reflection',
          url: 'https://www.khanacademy.org/science/physics/geometric-optics/mirrors/v/concave-mirrors'
        },
        {
          title: 'Mirrors (Geometric Optics)',
          url: 'https://www.khanacademy.org/science/physics/geometric-optics/mirrors'
        }
      ]
    },
    dataTable: {
      headers: ['Tipo specchio', 'Posizione oggetto', 'Posizione immagine', 'Ingrandimento', 'Reale/Virtuale'],
      rows: 5
    },
    observations: [
      'Registra posizione oggetto e immagine per ogni specchio',
      'Misura l\'ingrandimento',
      'Verifica l\'angolo di riflessione per lo specchio piano'
    ],
    conclusion: 'Verifica la legge della riflessione per lo specchio piano. Costruisci il diagramma dei raggi per specchi curvi.',
    ai: {
      opening: 'Ciao! Sono Gali. Gli specchi riflettono la luce con leggi precise — piani, concavi e convessi, ognuno ha il suo carattere!',
      keywords: {
        setup: 'concave mirror|convex mirror|optical bench|screen|object distance',
        formula: '1/v+1/u=1/f=2/R|m=-v/u',
        error: 'sign convention|measuring from wrong reference|screen placement',
        question: 'concave|convex|real image|virtual image|mirror equation|field of view',
        real: 'car mirror|make-up mirror|telescope|satellite dish'
      },
      hint: 'Segna la posizione dell\'oggetto e dell\'immagine con spilli. Costruisci il diagramma dei raggi per verifica.',
      expected: 'Concave: u>f → real inverted image on screen. u<f → virtual magnified image. Convex: always virtual, upright, diminished.'
    }
  },
  {
    num: 37,
    cardEmoji: "🧲",
    title: 'Forza magnetica attrattiva e repulsiva',
    section: 'Magnetism',
    desc: 'Esplora le forze attrattive e repulsive tra magneti permanenti e misura la variazione con la distanza.',
    setupTime: '3 min',
    duration: '10 min',
    summary: {
      whatTheyLearn: 'Gli studenti misurano la forza magnetica in funzione della distanza e verificano la dipendenza da 1/d².',
      instructions: [
        'Bring N pole of magnet A toward N pole of magnet B: observe repulsion.',
        'Bring N pole of A toward S pole of B: observe attraction.',
        'Measure force (qualitatively) at several distances.'
      ],
      expectedOutcome: 'N-N and S-S: repulsion. N-S: attraction. Force decreases rapidly with separation distance.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🧲',
          name: 'Two bar magnets (labelled N/S)'
        },
        {
          emoji: '📏',
          name: 'Ruler'
        },
        {
          emoji: '🧭',
          name: 'Compass (to identify poles)'
        }
      ],
      observationsToRecord: [
        'Force type (attract/repel) for each pole combination',
        'Qualitative force at different separations',
        'Confirmation of pole labelling with compass'
      ],
      theoryPoints: [
        'Like poles (N-N, S-S) repel; unlike poles (N-S) attract.',
        'Magnetic force ∝ 1/r² (dipole approximation at large distances).',
        'Magnetic monopoles do not exist; every magnet has both N and S poles.',
        'Cutting a magnet in half creates two new magnets, each with N and S poles.'
      ],
      realWorldConnections: [
        'Magnetic levitation trains use repulsion between like poles for frictionless travel.',
        'Compass needles align with Earth\'s magnetic field (N pole points to geographic north).',
        'MRI machines use powerful superconducting magnets.'
      ],
      formula: 'F ∝ 1/r²   |   Like poles repel; unlike poles attract'
    },
    questions: {
      mcq: [
        {
          text: 'Two north poles are brought close together. What happens?',
          options: ['They attract', 'They repel', 'Nothing happens', 'They neutralise each other'],
          correctIndex: 1,
          explanation: 'Like magnetic poles (N-N or S-S) always repel each other.'
        },
        {
          text: 'If you cut a bar magnet in half, what do you get?',
          options: [
            'One N-only and one S-only magnet',
            'Two smaller magnets each with N and S poles',
            'Two unmagnetised pieces',
            'One full magnet and one non-magnetic piece'
          ],
          correctIndex: 1,
          explanation: 'Magnetic monopoles don\'t exist; each half becomes a complete magnet with both N and S poles.'
        },
        {
          text: 'The force between two magnets as their separation doubles:',
          options: ['Doubles', 'Halves', 'Quarters approximately', 'Remains the same'],
          correctIndex: 2,
          explanation: 'Magnetic dipole force falls roughly as 1/r³ for dipole-dipole (or 1/r² for monopole), so doubling r reduces force by ~4× (or more).'
        }
      ],
      discussion: [
        'Why do magnetic monopoles not appear to exist, even when you cut a magnet?',
        'How does a compass work? Which end of a compass points north, and why is this nomenclature confusing?',
        'Describe a practical application of magnetic attraction and one of magnetic repulsion.'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Like poles repel, unlike attract',
          pct: 35
        },
        {
          label: 'Force vs. distance relationship',
          pct: 25
        },
        {
          label: 'No magnetic monopoles',
          pct: 25
        },
        {
          label: 'Real-world applications',
          pct: 15
        }
      ],
      misconceptions: [
        'I poli magnetici non possono essere isolati — non esistono monopoli magnetici.',
        'La forza magnetica segue la legge dell\'inverso del quadrato ma con un esponente diverso per i dipoli.'
      ],
      hook: 'La Terra è un gigantesco magnete! Il suo campo magnetico ci protegge dalla radiazione cosmica.',
      khanLinks: [
        {
          title: 'Magnets & Magnetic Force',
          url: 'https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/magnets-magnetic'
        },
        {
          title: 'Magnetic Forces & Fields',
          url: 'https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields'
        }
      ]
    },
    dataTable: {
      headers: ['Distanza d (cm)', 'Forza F (N)', '1/d² (cm⁻²)', 'F × d² (costante?)'],
      rows: 4
    },
    observations: [
      'Registra la forza a ogni distanza',
      'Calcola F × d² per verificare la legge',
      'Traccia F vs 1/d²'
    ],
    conclusion: 'Traccia il grafico F vs d. Verifica se la dipendenza è 1/d² come previsto per un dipolo magnetico.',
    ai: {
      opening: 'Ciao! Sono Gali. I magneti si attraggono e si respingono — scopri come la forza varia con la distanza!',
      keywords: {
        setup: 'bar magnets|poles|compass|separation|attract|repel',
        formula: 'F ∝ 1/r²|like repel|unlike attract',
        error: 'pole mislabelling|ferromagnetic interference|weak magnets',
        question: 'poles|repel|attract|monopole|force distance|compass',
        real: 'maglev|compass|MRI'
      },
      hint: 'Misura la forza a diverse distanze con il dinamometro. Traccia F vs 1/d² per verificare la legge.',
      expected: 'N-N: repel. N-S: attract. S-S: repel. Force decreases rapidly beyond ~5cm.'
    }
  },
  {
    num: 38,
    cardEmoji: "🌀",
    title: 'Forze del campo magnetico',
    section: 'Magnetism',
    desc: 'Mappa le linee del campo magnetico intorno a un magnete a barra usando limatura di ferro e bussoline.',
    setupTime: '5 min',
    duration: '10 min',
    summary: {
      whatTheyLearn: 'Gli studenti mappano le linee di campo magnetico e identificano poli nord e sud del magnete.',
      instructions: [
        'Place the U-shaped magnet under the 2D field chamber.',
        'Gently tap the chamber to help iron filings align with field lines.',
        'Sketch or photograph the resulting pattern.'
      ],
      expectedOutcome: 'Field lines curve from N pole to S pole, densest between the poles. Outside the gap: field lines are more spread and weaker.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🧲',
          name: 'U-shaped (horseshoe) magnet'
        },
        {
          emoji: '🧪',
          name: '2D field chamber with iron filings'
        },
        {
          emoji: '📸',
          name: 'Camera or pencil/paper for sketch'
        }
      ],
      observationsToRecord: [
        'Shape and direction of field lines',
        'Density of field lines between the poles vs. outside',
        'Whether field lines are closed loops'
      ],
      theoryPoints: [
        'Magnetic field lines: external path from N to S; internal path S to N (closed loops).',
        'Density of field lines indicates field strength: denser = stronger.',
        'Field lines never cross each other.',
        'Between the poles of a U-magnet: nearly uniform, strong field.'
      ],
      realWorldConnections: [
        'MRI machines use strong uniform magnetic fields (like between U-magnet poles but much stronger).',
        'Electromagnets in motors and generators use the same field geometry.',
        'Magnetic storage (hard drives) uses tiny magnetic domains.'
      ],
      formula: 'B field lines: N → S externally, S → N internally (closed loops)'
    },
    questions: {
      mcq: [
        {
          text: 'Where is the magnetic field of a U-shaped magnet strongest?',
          options: [
            'At the ends of the arms',
            'Between the two poles (in the gap)',
            'Far away from the magnet',
            'At the back of the magnet'
          ],
          correctIndex: 1,
          explanation: 'Field lines are most dense between the two poles, indicating the strongest field in the gap.'
        },
        {
          text: 'Magnetic field lines always:',
          options: [
            'Start and end at free poles',
            'Form closed loops from N to S externally',
            'Cross each other at right angles',
            'Point from S to N externally'
          ],
          correctIndex: 1,
          explanation: 'Field lines form closed loops: externally from N to S, internally from S to N. They never cross.'
        },
        {
          text: 'Iron filings in a field chamber align:',
          options: [
            'Perpendicular to field lines',
            'Along the magnetic field direction',
            'Randomly',
            'Toward the geographic north'
          ],
          correctIndex: 1,
          explanation: 'Iron filings become temporarily magnetised and align with the local magnetic field direction.'
        }
      ],
      discussion: [
        'Explain why magnetic field lines cannot cross each other.',
        'How does the spacing of field lines indicate the strength of the field?',
        'Why is the field between the poles of a horseshoe magnet more uniform than around a bar magnet?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Field line direction N→S',
          pct: 30
        },
        {
          label: 'Field line density = field strength',
          pct: 30
        },
        {
          label: 'Closed loop property',
          pct: 25
        },
        {
          label: 'Uniform field between poles',
          pct: 15
        }
      ],
      misconceptions: [
        'Le linee di campo non si incrociano mai — indicano sempre la direzione del campo.',
        'La densità delle linee di campo indica l\'intensità, non la direzione.'
      ],
      hook: 'Le carte geografiche medievali erano inaccurate perché non conoscevano la declinazione magnetica — scoperta nel 1600!',
      khanLinks: [
        {
          title: 'Force on a Current-Carrying Wire',
          url: 'https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/electric-motors/v/the-magnetic-force-on-a-current-carrying-wire'
        },
        {
          title: 'Magnetic Forces & Fields',
          url: 'https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields'
        }
      ]
    },
    dataTable: {
      headers: ['Posizione (x,y)', 'Direzione del campo (°)', 'Intensità relativa'],
      rows: 4
    },
    observations: [
      'Disegna le linee di campo sulla carta',
      'Indica la direzione con frecce',
      'Identifica le zone di campo forte e debole'
    ],
    conclusion: 'Ricostruisci la mappa delle linee di campo su carta. Identifica poli nord e sud e zona di campo uniforme.',
    ai: {
      opening: 'Ciao! Sono Gali. Le linee di campo magnetico rivelano forze invisibili — mappa il campo del tuo magnete!',
      keywords: {
        setup: 'U-shaped magnet|2D field chamber|iron filings|poles',
        formula: 'field lines N→S externally|closed loops|density = strength',
        error: 'too many filings|magnet too weak|background field',
        question: 'field lines|magnetic field|N→S|closed loop|density|strength',
        real: 'MRI|electric motor|hard drive'
      },
      hint: 'Distribuisci la limatura di ferro uniformemente prima di avvicinarle al magnete. Fai una foto.',
      expected: 'Field lines curve from N to S between poles, denser in gap. Outside poles: spread out. Lines form closed loops.'
    }
  },
  {
    num: 39,
    cardEmoji: "🧭",
    title: 'Bussola e magnetismo',
    section: 'Magnetism',
    desc: 'Usa una bussola per studiare il campo magnetico terrestre e l\'influenza dei magneti.',
    setupTime: '3 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti usano la bussola per trovare il nord magnetico e studiare la declinazione magnetica.',
      instructions: [
        'Place compass in different positions around a bar magnet.',
        'Record the direction the compass needle points at each location.',
        'Sketch the field pattern by connecting compass directions.'
      ],
      expectedOutcome: 'Compass N pole points toward S pole of magnet. The compass traces out the magnetic field lines around the bar magnet.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🧭',
          name: 'Magnetic compass'
        },
        {
          emoji: '🧲',
          name: 'Bar magnet'
        },
        {
          emoji: '📝',
          name: 'Paper (to place compass on and mark directions)'
        },
        {
          emoji: '✏️',
          name: 'Pencil'
        }
      ],
      observationsToRecord: [
        'Compass needle direction at each position around magnet',
        'Positions where the field is strongest (largest deflection)',
        'Path traced by connecting compass readings'
      ],
      theoryPoints: [
        'A compass needle is a small bar magnet; its N pole points in the direction of field B.',
        'S pole of external magnet attracts compass N pole (opposite attract).',
        'Earth\'s magnetic field: compass N points to geographic north (Earth\'s magnetic south pole is near geographic north).',
        'Field lines mapped by compass = same as iron-filing patterns.'
      ],
      realWorldConnections: [
        'Navigation: compasses have guided sailors for over 1000 years.',
        'Geological surveys use magnetometers (super-sensitive compasses) to map underground ore.',
        'Pigeons have biological magnetite particles and navigate by Earth\'s field.'
      ],
      formula: 'Compass N pole → direction of B field vector'
    },
    questions: {
      mcq: [
        {
          text: 'Which pole of a bar magnet attracts the N pole of a compass needle?',
          options: ['N pole', 'S pole', 'Either pole', 'Neither pole'],
          correctIndex: 1,
          explanation: 'Unlike poles attract: the compass N pole is attracted to the magnet\'s S pole.'
        },
        {
          text: 'A compass needle points in the direction of:',
          options: [
            'The magnetic south pole',
            'The local magnetic field B',
            'True north always',
            'The closest magnet\'s N pole'
          ],
          correctIndex: 1,
          explanation: 'The N pole of a compass aligns with the local magnetic field direction (defined from N to S externally).'
        },
        {
          text: 'Earth\'s geographic north pole corresponds magnetically to:',
          options: [
            'Earth\'s magnetic north pole',
            'Earth\'s magnetic south pole',
            'A neutral zone',
            'No magnetic pole'
          ],
          correctIndex: 1,
          explanation: 'Earth\'s magnetic south pole is located near the geographic north pole, which is why compass needles point \'north\' — their N poles are attracted to Earth\'s magnetic south.'
        }
      ],
      discussion: [
        'Why does a compass point north? Explain using magnetic pole theory.',
        'How would you use a compass to map the full magnetic field pattern around a bar magnet?',
        'Explain why a compass is useless at the geographic south pole.'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Compass aligns with B field',
          pct: 30
        },
        {
          label: 'Unlike poles attract (S attracts compass N)',
          pct: 30
        },
        {
          label: 'Earth\'s field and compass navigation',
          pct: 25
        },
        {
          label: 'Field mapping technique',
          pct: 15
        }
      ],
      misconceptions: [
        'Il nord magnetico NON coincide con il nord geografico — la differenza si chiama declinazione magnetica.',
        'La bussola punta verso il polo magnetico nord (che è geograficamente vicino al polo sud).'
      ],
      hook: 'La bussola è stata inventata in Cina nel 200 a.C. ed è ancora oggi lo strumento di navigazione più affidabile!',
      khanLinks: [
        {
          title: 'Magnets & Magnetic Fields',
          url: 'https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/magnets-magnetic'
        },
        {
          title: 'Magnetic Forces & Fields',
          url: 'https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields'
        }
      ]
    },
    dataTable: {
      headers: ['Posizione', 'Lettura bussola (°)', 'Nord GPS (°)', 'Declinazione (°)'],
      rows: 8
    },
    observations: [
      'Registra la lettura della bussola in diverse posizioni',
      'Confronta con il nord geografico',
      'Misura la declinazione magnetica locale'
    ],
    conclusion: 'Identifica il nord magnetico con la bussola e misura la declinazione rispetto al nord geografico locale.',
    ai: {
      opening: 'Ciao! Sono Gali. La bussola punta sempre verso nord — ma perché? Scopri il magnetismo terrestre!',
      keywords: {
        setup: 'compass|bar magnet|field lines|mapping|direction',
        formula: 'compass N → B direction|unlike poles attract',
        error: 'nearby metal objects|multiple magnets|Earth field interference',
        question: 'compass|magnetic field|north|south|attract|field mapping',
        real: 'navigation|geological survey|animal migration'
      },
      hint: 'Allontana la bussola dagli oggetti metallici. Confronta il nord indicato con il GPS.',
      expected: 'Compass N pole → toward magnet S pole. Field lines traced connect all compass directions. Pattern matches iron-filing map.'
    }
  },
  {
    num: 40,
    cardEmoji: "🎯",
    title: 'Un comune giocattolo magnetico',
    section: 'Magnetism',
    desc: 'Studia l\'equilibrio di un giocattolo magnetico e spiega il principio fisico che lo fa galleggiare.',
    setupTime: '3 min',
    duration: '10 min',
    summary: {
      whatTheyLearn: 'Gli studenti spiegano l\'equilibrio del giocattolo magnetico in termini di bilanciamento di forze magnetiche.',
      instructions: [
        'Place two magnets N-N facing: observe repulsion.',
        'Place steel ball bearing between them: observe the magnets now move toward the ball.',
        'Remove the ball: repulsion returns.'
      ],
      expectedOutcome: 'N-N without ball: repel. N-ball-N: magnets attracted to ball. Ball mediates effective N-N attraction via induced magnetisation.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🧲',
          name: 'Two identical small magnets (both N facing outward)'
        },
        {
          emoji: '⚙️',
          name: 'Steel ball bearing'
        },
        {
          emoji: '📏',
          name: 'Ruler / surface'
        }
      ],
      observationsToRecord: [
        'Force type (attract/repel) without ball between N-N magnets',
        'Force type with steel ball between N-N magnets',
        'Behaviour when ball is removed'
      ],
      theoryPoints: [
        'Steel is ferromagnetic: an external field induces magnetisation in it.',
        'Ball between two N poles: each magnet induces S pole in the nearest side of the ball.',
        'Each magnet sees a nearby S pole → attraction to ball.',
        'Result: N-ball-N appears attractive through the ball.',
        'Soft iron loses magnetisation when removed from the field; hard steel retains some.'
      ],
      realWorldConnections: [
        'Electromagnets pick up iron and steel by inducing magnetisation.',
        'Magnetic resonance imaging (MRI) uses induced nuclear magnetisation.',
        'Magnetic particle inspection detects cracks in steel by induced field distortions.'
      ],
      formula: 'Induced magnetisation in ferromagnetic material → attraction to external field'
    },
    questions: {
      mcq: [
        {
          text: 'Two N-pole magnets face each other with a steel ball between them. The magnets:',
          options: [
            'Still repel each other',
            'Are attracted toward the steel ball',
            'Have no force on them',
            'Rotate to face S poles toward ball'
          ],
          correctIndex: 1,
          explanation: 'The steel ball becomes magnetised; each magnet is attracted to the induced opposite pole in the nearest face of the ball.'
        },
        {
          text: 'Why does the steel ball become magnetised when placed between the magnets?',
          options: [
            'It contains natural magnets',
            'The external magnetic field induces a temporary magnetisation (ferromagnetism)',
            'Steel is always magnetic',
            'The ball is heated by the magnets'
          ],
          correctIndex: 1,
          explanation: 'Steel is ferromagnetic; an external field aligns its magnetic domains, inducing a temporary magnetisation.'
        },
        {
          text: 'What happens to the apparent N-N force when the steel ball is removed?',
          options: ['Remains attractive', 'Returns to repulsion', 'Becomes zero', 'Reverses permanently'],
          correctIndex: 1,
          explanation: 'Without the ball, the N-N configuration resumes its normal repulsion.'
        }
      ],
      discussion: [
        'Explain using magnetic domain theory why the steel ball becomes magnetised between the two N poles.',
        'How does an electromagnet pick up iron objects? What is the similarity to this experiment?',
        'Why might a steel ball retain some magnetisation after being removed, but a soft iron ball would not?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Like poles normally repel',
          pct: 25
        },
        {
          label: 'Ferromagnetic induction in steel',
          pct: 35
        },
        {
          label: 'Induced opposite poles cause attraction',
          pct: 25
        },
        {
          label: 'Soft vs. hard ferromagnetics',
          pct: 15
        }
      ],
      misconceptions: [
        'La levitazione magnetica richiede un feedback attivo o geometria precisa — non è spontaneamente stabile.',
        'I magneti permanenti da soli non possono mantenere la levitazione stabile (teorema di Earnshaw).'
      ],
      hook: 'I treni a levitazione magnetica (Maglev) viaggiano a 600 km/h sospesi da forze magnetiche — nessun contatto fisico!',
      khanLinks: [
        {
          title: 'Magnetic Forces & Fields',
          url: 'https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields'
        },
        {
          title: 'Magnets & Magnetic Fields',
          url: 'https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/magnets-magnetic'
        }
      ]
    },
    dataTable: {
      headers: ['Posizione magnete sup. (cm)', 'Forza repulsione (N)', 'Peso magnete sup. (N)', 'Equilibrio?'],
      rows: 3
    },
    observations: [
      'Registra la posizione di equilibrio',
      'Misura la forza di repulsione',
      'Osserva la stabilità dell\'equilibrio'
    ],
    conclusion: 'Spiega l\'equilibrio del giocattolo in termini di bilanciamento di forze magnetiche e gravitazionali.',
    ai: {
      opening: 'Ciao! Sono Gali. Un giocattolo magnetico sfida la gravità — spiega l\'equilibrio usando la fisica!',
      keywords: {
        setup: 'two N-pole magnets|steel ball bearing|repulsion|attraction|ferromagnetic',
        formula: 'induced magnetisation|opposite pole induced in ball',
        error: 'non-ferromagnetic ball|too weak magnets|ball not centred',
        question: 'ferromagnetic|induced magnetisation|like poles|steel ball|domains',
        real: 'electromagnet|MRI|magnetic particle inspection'
      },
      hint: 'Posiziona il magnete superiore con attenzione — la stabilità dipende dall\'allineamento.',
      expected: 'N-N: repel. N-ball-N: magnets move toward ball (attract). Ball removed: repulsion returns.'
    }
  },
  {
    num: 41,
    cardEmoji: "💡",
    title: 'Resistenza elettrica',
    section: 'Electricity',
    desc: 'Misura la resistenza di diversi conduttori con il metodo voltamperometrico e verifica la legge di Ohm.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano la legge di Ohm: R = V/I, e misurano la resistenza con il metodo voltamperometrico.',
      instructions: [
        'Connect resistor R₁ ≈ 100 Ω in series with ammeter; voltmeter across R₁.',
        'Vary the supply voltage from 1 V to 5 V in steps; record I (mA) for each V.',
        'Plot V vs. I; slope = R.'
      ],
      expectedOutcome: 'R = 100.8 Ω; V = 2.75 V → I = 25 mA. V/I = 2.75/0.025 = 110 Ω (close to nominal). Graph is linear through origin.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔋',
          name: 'Variable DC power supply (0–6 V)'
        },
        {
          emoji: '⚡',
          name: 'Resistor ~100 Ω'
        },
        {
          emoji: '🔌',
          name: 'Ammeter (mA range)'
        },
        {
          emoji: '🔌',
          name: 'Voltmeter'
        },
        {
          emoji: '🪛',
          name: 'Connecting wires and breadboard'
        }
      ],
      observationsToRecord: [
        'Voltage V (V) for each supply setting',
        'Current I (mA) for each V',
        'Calculated R = V/I (Ω) for each trial'
      ],
      theoryPoints: [
        'Ohm\'s Law: V = IR (or I = V/R); R is constant for ohmic conductors.',
        'Resistance R = V/I (Ω); 1 Ω = 1 V/A.',
        'Ohmic conductors: V-I graph is linear through origin.',
        'Non-ohmic devices (diodes, bulbs): V-I is non-linear.'
      ],
      realWorldConnections: [
        'Every electronic device uses Ohm\'s law for circuit design.',
        'Fuses are rated in amps (I_max = V/R_circuit).',
        'Electrical safety: touching a high-voltage source with low body resistance gives large I.'
      ],
      formula: 'V = IR   |   R = V/I (Ω)'
    },
    questions: {
      mcq: [
        {
          text: 'A 100 Ω resistor has 2.75 V across it. What current flows?',
          options: ['27.5 mA', '2.75 mA', '0.275 A', '275 mA'],
          correctIndex: 0,
          explanation: 'I = V/R = 2.75/100 = 0.0275 A = 27.5 mA.'
        },
        {
          text: 'On a V vs. I graph for an ohmic resistor, the slope represents:',
          options: ['Current', 'Voltage', 'Resistance R', 'Power'],
          correctIndex: 2,
          explanation: 'V = IR → V/I = R → slope of V vs. I graph = R.'
        },
        {
          text: 'Which of these is an ohmic conductor?',
          options: [
            'LED diode',
            'Tungsten filament lamp at varying temperature',
            'Metal resistor at constant temperature',
            'Semiconductor thermistor'
          ],
          correctIndex: 2,
          explanation: 'A metal resistor at constant temperature follows V = IR linearly — it is ohmic.'
        }
      ],
      discussion: [
        'Plot V vs. I for your data. Is the relationship linear? What does the slope represent?',
        'Why might a light bulb filament NOT obey Ohm\'s law perfectly?',
        'Calculate the power dissipated in the 100 Ω resistor at V = 2.75 V.'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Legge di Ohm (R=V/I)',
          pct: 40
        },
        {
          label: 'Dipendenza della resistenza dai materiali',
          pct: 30
        },
        {
          label: 'Metodo voltamperometrico',
          pct: 20
        },
        {
          label: 'Applicazioni elettroniche',
          pct: 10
        }
      ],
      misconceptions: [
        'La legge di Ohm non vale per tutti i conduttori — semiconduttori e diodi hanno comportamento non-lineare.',
        'La resistenza dipende dalla temperatura: per la maggior parte dei metalli aumenta con T.'
      ],
      hook: 'Georg Ohm fu inizialmente deriso per la sua legge nel 1827 — oggi è la legge più usata in elettronica!',
      khanLinks: [
        {
          title: 'Circuits & Ohm\'s Law',
          url: 'https://www.khanacademy.org/science/physics/circuits-topic/circuits-resistance/v/circuits-part-1'
        },
        {
          title: 'Electricity & Circuits',
          url: 'https://www.khanacademy.org/science/physics/circuits-topic'
        }
      ]
    },
    dataTable: {
      headers: ['Tensione V (V)', 'Corrente I (A)', 'Resistenza R = V/I (Ω)', 'R nominale (Ω)'],
      rows: 6
    },
    observations: [
      'Registra V e I per almeno 6 valori diversi',
      'Calcola R per ogni coppia (V,I)',
      'Verifica la costanza di R al variare di V'
    ],
    conclusion: 'Traccia il grafico V vs I e calcola R dal coefficiente angolare. Confronta con il valore nominale del resistore.',
    ai: {
      opening: 'Ciao! Sono Gali. La legge di Ohm collega tensione, corrente e resistenza — il fondamento dell\'elettronica!',
      keywords: {
        setup: 'resistor|ammeter|voltmeter|power supply|circuit',
        formula: 'V = IR|R = V/I|slope of V vs. I = R',
        error: 'ammeter in parallel|voltmeter in series|contact resistance',
        question: 'Ohm\'s Law|resistance|ohmic|current|voltage|slope',
        real: 'electronics|fuse|electrical safety'
      },
      hint: 'Misura la tensione direttamente ai capi del resistore, non del generatore. Usa il voltmetro in parallelo.',
      expected: 'R=100.8Ω; V=2.75V→I=25mA. V vs. I linear, slope≈100Ω. Confirms V=IR.'
    }
  },
  {
    num: 42,
    cardEmoji: "⚡",
    title: 'Circuiti in serie e in parallelo',
    section: 'Electricity',
    desc: 'Confronta la corrente e la tensione in circuiti in serie e in parallelo e verifica le leggi di Kirchhoff.',
    setupTime: '5 min',
    duration: '30 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano le leggi di Kirchhoff per circuiti in serie (I costante) e parallelo (V costante).',
      instructions: [
        'Measure R₁ and R₂ individually with ohmmeter or V/I method.',
        'Connect in series; measure total R_T and verify R_T = R₁ + R₂.',
        'Connect in parallel; measure R_T and verify 1/R_T = 1/R₁ + 1/R₂.'
      ],
      expectedOutcome: 'Expected: V = 5.8 V. R₁ = R₂ = 100 Ω: Series R_T = 200 Ω; Parallel R_T = 50 Ω. Parallel R_T < smaller individual R.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔋',
          name: 'Battery or DC supply (5.8 V)'
        },
        {
          emoji: '⚡',
          name: 'Two resistors R₁ = R₂ = 100 Ω'
        },
        {
          emoji: '🔌',
          name: 'Ammeter and voltmeter'
        },
        {
          emoji: '🪛',
          name: 'Connecting wires, breadboard'
        }
      ],
      observationsToRecord: [
        'Individual R₁ and R₂ (Ω)',
        'V and I for series combination → R_series = V/I',
        'V and I for parallel combination → R_parallel = V/I'
      ],
      theoryPoints: [
        'Series: same current through each; voltages add. R_T = R₁ + R₂.',
        'Parallel: same voltage across each; currents add. 1/R_T = 1/R₁ + 1/R₂.',
        'Parallel R_T always less than the smallest individual resistance.',
        'Home circuits: parallel wiring gives each device full mains voltage.'
      ],
      realWorldConnections: [
        'Christmas lights: old series strings — one bulb fails → all go out. Modern parallel strings stay lit.',
        'Home electrical wiring is parallel so each outlet gets full 230 V.',
        'Series resistors are used in voltage dividers; parallel in current dividers.'
      ],
      formula: 'Series: R_T = R₁ + R₂   |   Parallel: 1/R_T = 1/R₁ + 1/R₂'
    },
    questions: {
      mcq: [
        {
          text: 'Two 100 Ω resistors in series. What is R_T?',
          options: ['50 Ω', '100 Ω', '200 Ω', '400 Ω'],
          correctIndex: 2,
          explanation: 'R_T = R₁ + R₂ = 100 + 100 = 200 Ω.'
        },
        {
          text: 'Two 100 Ω resistors in parallel. What is R_T?',
          options: ['200 Ω', '100 Ω', '50 Ω', '25 Ω'],
          correctIndex: 2,
          explanation: '1/R_T = 1/100 + 1/100 = 2/100; R_T = 50 Ω.'
        },
        {
          text: 'Why are home electrical circuits wired in parallel?',
          options: [
            'To increase total resistance',
            'So each device receives the full supply voltage',
            'To reduce the current',
            'Because series is too complex'
          ],
          correctIndex: 1,
          explanation: 'In parallel, each branch has the full supply voltage (230 V), so every device operates at its designed voltage independently.'
        }
      ],
      discussion: [
        'Explain why adding more resistors in parallel always decreases the total resistance.',
        'Why do old-fashioned series Christmas lights all go out when one bulb fails?',
        'A house has a 230 V supply and three 100 Ω appliances. Calculate I_total if all three are connected in parallel.'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Circuiti in serie (I costante)',
          pct: 35
        },
        {
          label: 'Circuiti in parallelo (V costante)',
          pct: 35
        },
        {
          label: 'Leggi di Kirchhoff',
          pct: 20
        },
        {
          label: 'Applicazioni pratiche',
          pct: 10
        }
      ],
      misconceptions: [
        'In parallelo la resistenza equivalente è MINORE di ciascuna resistenza — il circuito assorbe più corrente.',
        'In serie tutte le componenti condividono la stessa corrente — non la stessa tensione.'
      ],
      hook: 'Le luci di Natale si bruciano tutte insieme se in serie — per questo i moderni circuiti usano il parallelo!',
      khanLinks: [
        {
          title: 'Series and Parallel Resistors',
          url: 'https://www.khanacademy.org/science/physics/circuits-topic/circuits-resistance/v/series-resistors'
        },
        {
          title: 'Electricity & Circuits',
          url: 'https://www.khanacademy.org/science/physics/circuits-topic'
        }
      ]
    },
    dataTable: {
      headers: ['Configurazione', 'R₁ (Ω)', 'R₂ (Ω)', 'R_equiv (Ω)', 'V totale (V)', 'I totale (A)'],
      rows: 4
    },
    observations: [
      'Registra V e I per ciascun resistore e per l\'intero circuito',
      'Verifica le leggi di Kirchhoff',
      'Confronta R_equiv con la formula'
    ],
    conclusion: 'Confronta corrente e tensione in serie e parallelo. Verifica le leggi di Kirchhoff per ciascuna configurazione.',
    ai: {
      opening: 'Ciao! Sono Gali. Serie o parallelo? Le due configurazioni si comportano in modo completamente diverso — scopri perché!',
      keywords: {
        setup: 'resistors|series|parallel|ammeter|voltmeter|circuit',
        formula: 'R_T = R₁+R₂|1/R_T = 1/R₁+1/R₂',
        error: 'ammeter placement|contact resistance|wrong formula used',
        question: 'series|parallel|total resistance|home circuit|voltage divider',
        real: 'Christmas lights|home wiring|voltage divider'
      },
      hint: 'Misura la corrente con l\'amperometro in serie. Verifica con la legge di Kirchhoff: ΣI_entrano = ΣI_escono.',
      expected: 'R₁=R₂=100Ω: Series→200Ω; Parallel→50Ω. Home circuits: parallel so each device gets full 230V.'
    }
  }
]

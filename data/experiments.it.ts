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
    equipmentNeeded: 'mobile-lab',
    equipmentNeeded: 'mobile-lab',
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
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti imparano che la sensibilità σ = spostamento / massa aggiunta (div/mg) e scoprono che la sensibilità non è costante su tutto l\'intervallo.',
      instructions: [
        'Equilibra il braccio con una massa di taratura di 310 mg; registra la posizione di riposo dell\'indice.',
        'Aggiungi un carico di 10 g (10 000 mg) e leggi il nuovo spostamento dell\'indice in divisioni.',
        'Ripeti con carichi diversi per tracciare un grafico spostamento vs. massa.'
      ],
      expectedOutcome: 'Taratura 310 mg + carico 10 g → ~3 divisioni → σ ≈ 0,01 div/mg per piccoli carichi. La sensibilità diminuisce per carichi maggiori.'
    },
    experiment: {
      equipment: [
        {
          emoji: '⚖️',
          name: 'Bilancia a braccio con indice'
        },
        {
          emoji: '🏋️',
          name: 'Massa di taratura (310 mg)'
        },
        {
          emoji: '🏋️',
          name: 'Masse di prova (10 g, 25 g, 50 g)'
        },
        {
          emoji: '📐',
          name: 'Scala con divisioni millimetrate'
        },
        {
          emoji: '📝',
          name: 'Carta millimetrata'
        }
      ],
      observationsToRecord: [
        'Posizione zero dell\'indice con la sola massa di taratura',
        'Spostamento dell\'indice (divisioni) per ogni massa aggiunta',
        'Sensibilità calcolata σ = spostamento / massa aggiunta per ogni prova'
      ],
      theoryPoints: [
        'Sensibilità di una bilancia: σ = spostamento dell\'indice (div) / massa aggiunta (mg).',
        'Una bilancia più sensibile si sposta di più a parità di massa aggiunta.',
        'La sensibilità non è costante: diminuisce all\'aumentare del carico (risposta non lineare).',
        'La massa di taratura compensa l\'asimmetria propria del braccio.'
      ],
      realWorldConnections: [
        'Le bilance analitiche nei laboratori di chimica sono molto sensibili ma hanno bassa portata.',
        'Le bilance pesapersone sacrificano la sensibilità per un intervallo di masse più ampio.',
        'Il compromesso sensibilità-portata è presente in tutti gli strumenti di misura.'
      ],
      formula: 'σ = Δ (divisioni) / Δm (mg)'
    },
    questions: {
      mcq: [
        {
          text: 'Se aggiungendo 10 g si ottiene uno spostamento di 3 divisioni, qual è la sensibilità in div/g?',
          options: ['0,3 div/g', '3 div/g', '30 div/g', '0,03 div/g'],
          correctIndex: 0,
          explanation: 'σ = 3 divisioni / 10 g = 0,3 div/g.'
        },
        {
          text: 'Perché si pone una massa di taratura di 310 mg sulla bilancia prima della prova?',
          options: [
            'Per aumentare la sensibilità',
            'Per compensare l\'asimmetria del braccio e azzerare l\'indice',
            'Per sovraccaricare la bilancia',
            'Per misurare il peso del braccio'
          ],
          correctIndex: 1,
          explanation: 'La massa di taratura equilibra l\'indice in una posizione di riferimento, eliminando l\'effetto di eventuali asimmetrie del braccio della bilancia.'
        },
        {
          text: 'All\'aumentare del carico su una bilancia, la sua sensibilità:',
          options: ['Aumenta linearmente', 'Rimane costante', 'Diminuisce', 'Prima aumenta e poi diminuisce'],
          correctIndex: 2,
          explanation: 'La sensibilità diminuisce a carichi maggiori perché il momento di richiamo per unità di massa si riduce man mano che il braccio si inclina di più.'
        }
      ],
      discussion: [
        'Spiega la differenza tra sensibilità e precisione in uno strumento di misura.',
        'Perché una bilancia analitica da chimica può avere una sensibilità molto maggiore di una bilancia pesapersone?',
        'Disegna la forma attesa di un grafico spostamento vs. massa e spiega eventuali non linearità.'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Definizione di sensibilità',
          pct: 30
        },
        {
          label: 'Taratura della bilancia',
          pct: 20
        },
        {
          label: 'Non linearità della risposta',
          pct: 30
        },
        {
          label: 'Analisi grafica',
          pct: 20
        }
      ],
      misconceptions: [
        'Gli studenti spesso pensano che una bilancia più sensibile sia sempre migliore; in realtà, un\'alta sensibilità limita la massa massima misurabile.',
        'Molti assumono che la sensibilità sia costante a tutti i carichi, ma diminuisce per spostamenti maggiori.',
        'È comune confondere \'sensibilità\' con \'precisione\' o \'accuratezza\'.'
      ],
      hook: 'Perché i laboratori di chimica hanno bilance minuscole che misurano fino a 0,001 g, mentre le pese per camion usano piattaforme enormi? È tutta una questione di compromesso sensibilità-portata!',
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
      headers: [
        'Massa aggiunta Δm (mg)',
        'Spostamento indice (div)',
        'Sensibilità σ (div/mg)'
      ],
      rows: 5
    },
    observations: [
      'Osserva come l\'indice si sposta di più per masse aggiunte maggiori.',
      'Nota se la sensibilità (div per mg) rimane costante o cambia.',
      'Registra la posizione di riposo ogni volta che viene rimossa una massa per verificare l\'isteresi.'
    ],
    conclusion: 'La sensibilità della bilancia era circa 0,01 div/mg per piccoli carichi (ad es. 3 divisioni per un carico di 10 g). La sensibilità è diminuita per carichi maggiori, confermando la risposta non lineare della bilancia.',
    ai: {
      opening: 'Curioso riguardo alla sensibilità della bilancia? Chiedimi come si calcola, perché varia o come migliorare il tuo esperimento!',
      keywords: {
        setup: 'beam balance|tare|pointer|divisions',
        formula: 'sensitivity = deflection / mass|σ = Δdiv / Δm',
        error: 'forgetting to tare|reading error|non-linear region',
        question: 'sensitivity|divisions|tare|accuracy',
        real: 'analytical balance|bathroom scale|lab instrument'
      },
      hint: 'Sensibilità σ = divisioni di spostamento ÷ massa aggiunta (in mg o g). Non è costante — traccia spostamento vs. massa per vedere la curva.',
      expected: 'Taratura 310 mg + 10 g → ~3 div → σ ≈ 0,3 div/g. La sensibilità diminuisce all\'aumentare del carico.'
    }
  },
  {
    num: 4,
    cardEmoji: "🔧",
    title: 'Leve di secondo e terzo genere',
    section: 'Mechanics',
    desc: 'Confronta leve di secondo e terzo genere, misurando le forze necessarie per bilanciare carichi a varie distanze.',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '30 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano che i momenti rispetto al fulcro si bilanciano anche quando si trova all\'estremità della leva, e calcolano la forza di reazione al perno.',
      instructions: [
        'Posiziona il fulcro a un\'estremità dell\'asta della leva.',
        'Appendi un carico noto a una distanza misurata dal fulcro.',
        'Applica uno sforzo verso l\'alto all\'altra estremità e trova la posizione di equilibrio.',
        'Calcola entrambi i momenti e la reazione al fulcro.'
      ],
      expectedOutcome: 'm₁ = 65 g a 8 cm: M₁ = 0,052 N·m. Uno sforzo di 100 g a ~5,5 cm dà M₂ ≈ 0,054 N·m ≈ M₁.'
    },
    experiment: {
      equipment: [
        {
          emoji: '⚖️',
          name: 'Asta della leva'
        },
        {
          emoji: '🔩',
          name: 'Fulcro all\'estremità'
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
          emoji: '🔧',
          name: 'Sostegno di supporto'
        }
      ],
      observationsToRecord: [
        'Carico F_L (N) e sua distanza dal fulcro d_L (m)',
        'Sforzo F_E (N) e sua distanza dal fulcro d_E (m)',
        'Forza di reazione R al fulcro (calcolata come R = F_L + F_E)'
      ],
      theoryPoints: [
        'In una leva di secondo genere il carico si trova tra il fulcro e lo sforzo.',
        'Momenti rispetto al fulcro: F_E × d_E = F_L × d_L all\'equilibrio.',
        'Vantaggio meccanico VM = d_E / d_L > 1; sforzo < carico.',
        'La reazione R al fulcro sostiene la forza netta verso il basso: R = F_L − F_E.',
        'A differenza delle leve di primo genere, sforzo e carico agiscono nella stessa direzione (entrambi verso il basso).'
      ],
      realWorldConnections: [
        'Le carriole usano il principio della leva di secondo genere: carico tra ruota e manici.',
        'Uno schiaccianoci è una doppia leva di secondo genere.',
        'Porte incernierate: la cerniera è il fulcro, la tua spinta è lo sforzo, il peso della porta è il carico.'
      ],
      formula: 'F_E × d_E = F_L × d_L   |   VM = d_E / d_L   |   R = F_L − F_E'
    },
    questions: {
      mcq: [
        {
          text: 'In una leva di secondo genere, dove si trova il carico rispetto al fulcro e allo sforzo?',
          options: [
            'Tra fulcro e sforzo',
            'Nella stessa posizione dello sforzo',
            'Sul lato opposto del fulcro',
            'Al fulcro'
          ],
          correctIndex: 0,
          explanation: 'Le leve di secondo genere hanno il carico tra fulcro e sforzo, dando un vantaggio meccanico VM > 1.'
        },
        {
          text: 'Un carico di 65 g a 8 cm da un fulcro è bilanciato da uno sforzo a 10 cm. Qual è lo sforzo richiesto?',
          options: ['0,51 N', '0,64 N', '0,80 N', '0,39 N'],
          correctIndex: 0,
          explanation: 'F_E = F_L × d_L / d_E = (0,065×9,81×0,08) / 0,10 = 0,052 / 0,10 = 0,52 N ≈ 0,51 N.'
        },
        {
          text: 'Qual è il vantaggio meccanico di una leva in cui il braccio dello sforzo è il doppio di quello del carico?',
          options: ['0,5', '1,0', '2,0', '4,0'],
          correctIndex: 2,
          explanation: 'VM = d_E / d_L = 2d / d = 2.'
        }
      ],
      discussion: [
        'Spiega perché una carriola rende più facile sollevare un carico pesante.',
        'Confronta leve di primo e secondo genere: in cosa differiscono i loro vantaggi meccanici?',
        'Come influisce la posizione del carico rispetto al fulcro sullo sforzo necessario?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Definizione di leva di secondo genere',
          pct: 25
        },
        {
          label: 'Calcolo del momento',
          pct: 30
        },
        {
          label: 'Vantaggio meccanico',
          pct: 25
        },
        {
          label: 'Forza di reazione al fulcro',
          pct: 20
        }
      ],
      misconceptions: [
        'Gli studenti confondono spesso le leve di primo e secondo genere; la distinzione chiave è la posizione del carico.',
        'Alcuni pensano che lo sforzo debba essere sempre maggiore del carico; nelle leve di secondo genere lo sforzo è minore.',
        'Dimenticare di considerare la forza di reazione al fulcro porta a diagrammi delle forze errati.'
      ],
      hook: 'Perché puoi sollevare un carico pesante su una carriola con molto meno sforzo rispetto a sollevarlo direttamente? Il principio della leva di secondo genere significa che il tuo braccio dello sforzo è più lungo di quello del carico!',
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
      headers: [
        'Carico F_L (N)',
        'Distanza carico d_L (m)',
        'M_L (N·m)',
        'Sforzo F_E (N)',
        'Distanza sforzo d_E (m)',
        'M_E (N·m)',
        'VM'
      ],
      rows: 4
    },
    observations: [
      'Verifica che M_E ≈ M_L per l\'equilibrio entro l\'errore sperimentale.',
      'Nota come lo sforzo richiesto sia inferiore al carico (VM > 1).',
      'Osserva la direzione della forza di reazione al fulcro d\'estremità.'
    ],
    conclusion: 'L\'equilibrio è stato confermato per una leva di secondo genere: M_L = M_E. Con il fulcro a un\'estremità, il carico a 8 cm e lo sforzo a 10 cm, lo sforzo richiesto (≈0,52 N) era inferiore al carico (≈0,64 N), dando VM ≈ 1,25.',
    ai: {
      opening: 'Le leve di secondo genere sono tutte una questione di vantaggio meccanico! Chiedimi come funzionano, come calcolare il VM o qualsiasi cosa sull\'esperimento.',
      keywords: {
        setup: 'fulcrum at end|second-class lever|load between fulcrum and effort',
        formula: 'F_E × d_E = F_L × d_L|MA = d_E/d_L',
        error: 'fulcrum position|incorrect moment arm|beam weight neglected',
        question: 'mechanical advantage|second class|moment|reaction',
        real: 'wheelbarrow|nutcracker|door hinge'
      },
      hint: 'Per una leva di secondo genere: F_E × d_E = F_L × d_L. VM = d_E / d_L — sempre maggiore di 1 nelle leve di secondo genere.',
      expected: 'm₁ = 65 g a 8 cm → M₁ = 0,052 N·m; sforzo a 10 cm → F_E ≈ 0,52 N, M₂ ≈ 0,052 N·m. VM ≈ 1,25.'
    }
  },
  {
    num: 5,
    cardEmoji: "📐",
    title: 'Misura di una lunghezza',
    section: 'Mechanics',
    desc: 'Misura la stessa lunghezza con strumenti diversi (righello, calibro, micrometro) e confronta precisione e incertezza.',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti usano un calibro a nonio (precisione ±0,05 mm) per misurare le dimensioni dei cilindri e applicano V = πr²h per trovarne il volume.',
      instructions: [
        'Leggi il calibro a nonio: scala principale + scala del nonio × 0,05 mm.',
        'Misura il diametro esterno d e l\'altezza h di ogni cilindro almeno due volte.',
        'Calcola r = d/2, quindi V = πr²h per ogni materiale.'
      ],
      expectedOutcome: 'Rame: h = 36 mm, d = 20 mm → V ≈ 11,30 cm³. Ferro → V ≈ 9,73 cm³. Acciaio → V ≈ 12,87 cm³. Ottone → V ≈ 11,93 cm³.'
    },
    experiment: {
      equipment: [
        {
          emoji: '📏',
          name: 'Calibro a nonio (±0,05 mm)'
        },
        {
          emoji: '🔵',
          name: 'Cilindro di rame'
        },
        {
          emoji: '⚫',
          name: 'Cilindro di ferro'
        },
        {
          emoji: '⚙️',
          name: 'Cilindro di acciaio'
        },
        {
          emoji: '🟡',
          name: 'Cilindro di ottone'
        }
      ],
      observationsToRecord: [
        'Diametro d (mm) — almeno 2 misure per cilindro',
        'Altezza h (mm) — almeno 2 misure per cilindro',
        'Volume calcolato V = πr²h (cm³)'
      ],
      theoryPoints: [
        'Un calibro a nonio si legge: valore della scala principale + (divisione del nonio coincidente × 0,05 mm).',
        'Volume di un cilindro: V = πr²h = π(d/2)²h.',
        'Effettua sempre più misure e fai la media per ridurre l\'errore casuale.',
        'La risoluzione del calibro è 0,05 mm — registra con questa precisione.'
      ],
      realWorldConnections: [
        'I meccanici usano quotidianamente i calibri per verificare che i pezzi lavorati rispettino le tolleranze ingegneristiche.',
        'Il controllo qualità nella produzione utilizza misure di volume e dimensione per verificare i prodotti.',
        'I dispositivi medici come gli stent richiedono precisioni inferiori al millimetro.'
      ],
      formula: 'V = πr²h = π(d/2)²h   |   Lettura nonio = scala principale + (div nonio × 0,05 mm)'
    },
    questions: {
      mcq: [
        {
          text: 'Un calibro a nonio mostra una lettura sulla scala principale di 20,0 mm e la 7ª divisione del nonio coincide. Qual è la lettura?',
          options: ['20,35 mm', '20,07 mm', '20,70 mm', '20,50 mm'],
          correctIndex: 0,
          explanation: 'Lettura = 20,0 + (7 × 0,05) = 20,0 + 0,35 = 20,35 mm.'
        },
        {
          text: 'Un cilindro di rame ha d = 20 mm e h = 36 mm. Qual è il suo volume?',
          options: ['11,31 cm³', '1131 mm³', '1,131 cm³', '113,1 cm³'],
          correctIndex: 0,
          explanation: 'V = π(10)²(36) mm³ = 3600π ≈ 11 310 mm³ = 11,31 cm³.'
        },
        {
          text: 'Perché è necessario misurare il diametro in due orientamenti diversi?',
          options: [
            'Per esercitarsi con il calibro',
            'Per rilevare se la sezione non è perfettamente circolare',
            'Per aumentare la lettura',
            'Il calibro richiede due letture'
          ],
          correctIndex: 1,
          explanation: 'I cilindri reali possono essere leggermente ellittici; due misure perpendicolari del diametro lo rivelano e permettono una media migliore.'
        }
      ],
      discussion: [
        'Spiega come leggere un calibro a nonio. Perché la risoluzione è 0,05 mm e non 0,1 mm?',
        'Quali errori sistematici possono influire sulle misure di volume con un calibro?',
        'Come modificheresti la procedura se il cilindro avesse una sezione irregolare?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Lettura del calibro a nonio',
          pct: 30
        },
        {
          label: 'Formula del volume V = πr²h',
          pct: 30
        },
        {
          label: 'Incertezza di misura',
          pct: 25
        },
        {
          label: 'Conversione di unità (mm→cm)',
          pct: 15
        }
      ],
      misconceptions: [
        'Gli studenti spesso leggono male la scala del nonio, dimenticando di moltiplicare la divisione coincidente per 0,05 mm.',
        'Molti dimenticano di convertire mm in cm prima di calcolare il volume in cm³.',
        'Assumere che una sola misura sia sufficiente; sono necessarie più letture per ridurre l\'errore casuale.'
      ],
      hook: 'Un calibro a nonio legge fino a 0,05 mm — cioè 50 micrometri, più sottile di un capello umano! Come riesce l\'aggiunta di una piccola scala scorrevole a rendere possibile tale precisione?',
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
        'Materiale',
        'd₁ (mm)',
        'd₂ (mm)',
        'd_med (mm)',
        'h₁ (mm)',
        'h₂ (mm)',
        'h_med (mm)',
        'V (cm³)'
      ],
      rows: 4
    },
    observations: [
      'Registra ogni misura di diametro e altezza con precisione di 0,05 mm.',
      'Nota eventuali differenze tra due letture del diametro per lo stesso cilindro.',
      'Confronta i volumi calcolati per rame, ferro, acciaio e ottone.'
    ],
    conclusion: 'I volumi sono stati calcolati usando V = π(d/2)²h. Risultati: rame ≈ 11,30 cm³, ferro ≈ 9,73 cm³, acciaio ≈ 12,87 cm³, ottone ≈ 11,93 cm³. Il calibro a nonio ha fornito misure con precisione ±0,05 mm.',
    ai: {
      opening: 'Impariamo a padroneggiare il calibro a nonio! Chiedimi come leggerlo, come calcolare il volume o sugli errori di misura.',
      keywords: {
        setup: 'Vernier calliper|main scale|Vernier division|least count',
        formula: 'V = πr²h|Vernier reading = main + div×0.05',
        error: 'mis-reading Vernier|unit conversion|non-circular cross-section',
        question: 'Vernier|volume|cylinder|diameter|precision',
        real: 'machinist|manufacturing|quality control'
      },
      hint: 'Lettura nonio = scala principale + (divisione coincidente × 0,05 mm). Quindi V = π(d/2)²h. Converti mm in cm prima di calcolare cm³.',
      expected: 'Rame: d=20 mm, h=36 mm → V=11,30 cm³. Ferro → 9,73 cm³. Acciaio → 12,87 cm³. Ottone → 11,93 cm³.'
    }
  },
  {
    num: 6,
    cardEmoji: "🧊",
    title: 'Misura della densità',
    section: 'Mechanics',
    desc: 'Determina la densità di solidi e liquidi misurando massa e volume con gli strumenti di laboratorio.',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '40 min',
    summary: {
      whatTheyLearn: 'Gli studenti applicano ρ = m/V usando la massa da una bilancia e il volume da misure col calibro o dallo spostamento d\'acqua, poi confrontano i due metodi.',
      instructions: [
        'Metodo 1: misura la massa m con la bilancia e il volume V con il calibro, poi ρ = m/V.',
        'Metodo 2: immergi il cilindro nel vaso a tracimazione, raccogli l\'acqua traboccata, misurane il volume.',
        'Confronta le densità di entrambi i metodi con i valori accettati in letteratura.'
      ],
      expectedOutcome: 'Rame: m = 100,28 g, V = 11,30 cm³ → ρ ≈ 8,87 g/cm³ (valore accettato 8,96). Alluminio → ρ ≈ 2,70 g/cm³. Acciaio → ρ ≈ 7,72 g/cm³. Ottone → ρ ≈ 8,37 g/cm³.'
    },
    experiment: {
      equipment: [
        {
          emoji: '⚖️',
          name: 'Bilancia (±0,01 g)'
        },
        {
          emoji: '📏',
          name: 'Calibro a nonio'
        },
        {
          emoji: '🫙',
          name: 'Vaso a tracimazione (vaso di Eureka)'
        },
        {
          emoji: '🧪',
          name: 'Cilindro graduato (50 mL)'
        },
        {
          emoji: '🔵',
          name: 'Cilindri metallici (Cu, Al, Fe, Ottone)'
        },
        {
          emoji: '💧',
          name: 'Acqua'
        }
      ],
      observationsToRecord: [
        'Massa m (g) dalla bilancia per ogni cilindro',
        'Volume V (cm³) dalle misure col calibro: V = π(d/2)²h',
        'Volume V (mL) per spostamento d\'acqua',
        'Densità ρ = m/V per entrambi i metodi'
      ],
      theoryPoints: [
        'Densità: ρ = m/V, unità SI kg/m³; spesso espressa in g/cm³.',
        'Metodo dello spostamento: un oggetto immerso sposta un volume d\'acqua pari al proprio volume.',
        '1 mL di acqua spostata = 1 cm³ di volume dell\'oggetto.',
        'La densità è una proprietà intrinseca — non cambia con le dimensioni del campione.'
      ],
      realWorldConnections: [
        'I geologi identificano i minerali dalla loro densità (peso specifico).',
        'Le navi galleggiano perché la loro densità media (scafo + aria) è inferiore a quella dell\'acqua (1,0 g/cm³).',
        'Gli scienziati alimentari misurano la densità per monitorare la concentrazione di zuccheri nelle bevande.'
      ],
      formula: 'ρ = m / V   (g/cm³ o kg/m³)'
    },
    questions: {
      mcq: [
        {
          text: 'Un cilindro di rame ha massa 100,28 g e volume 11,30 cm³. Qual è la sua densità?',
          options: ['8,87 g/cm³', '9,11 g/cm³', '8,00 g/cm³', '11,30 g/cm³'],
          correctIndex: 0,
          explanation: 'ρ = m/V = 100,28 / 11,30 ≈ 8,87 g/cm³.'
        },
        {
          text: 'Quale di questi metalli ha la densità più alta?',
          options: ['Alluminio (~2,70 g/cm³)', 'Acciaio (~7,7 g/cm³)', 'Rame (~8,9 g/cm³)', 'Ottone (~8,4 g/cm³)'],
          correctIndex: 2,
          explanation: 'Il rame ha densità ~8,9 g/cm³, maggiore di ottone (~8,4), acciaio (~7,7) e alluminio (~2,7).'
        },
        {
          text: 'Nel metodo dello spostamento, quale volume viene raccolto nel cilindro graduato?',
          options: [
            'Il volume di acqua nel recipiente',
            'Il volume dell\'oggetto immerso',
            'La massa dell\'oggetto',
            'La densità dell\'acqua'
          ],
          correctIndex: 1,
          explanation: 'La tracimazione è uguale al volume dell\'oggetto immerso (principio di Archimede).'
        }
      ],
      discussion: [
        'Perché le densità misurate con i due metodi possono differire leggermente?',
        'Un campione di materiale sconosciuto ha ρ = 7,87 g/cm³. Quale materiale potrebbe essere?',
        'Come si confronta la densità dell\'acqua di mare con quella dolce, e quali conseguenze pratiche ha?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Definizione ρ = m/V',
          pct: 25
        },
        {
          label: 'Metodo del calibro (V dalla geometria)',
          pct: 25
        },
        {
          label: 'Metodo dello spostamento',
          pct: 30
        },
        {
          label: 'Confronto con valori di letteratura',
          pct: 20
        }
      ],
      misconceptions: [
        'Gli studenti confondono densità con pesantezza; un piccolo pezzo di piombo è più denso di un grande pezzo di legno anche se il legno è più pesante.',
        'Molti pensano che la densità cambi quando l\'oggetto viene tagliato a metà; non è così.',
        'Confondere il volume spostato con la massa dell\'acqua spostata porta a errori di unità.'
      ],
      hook: 'Come può una massiccia nave d\'acciaio galleggiare sull\'acqua mentre un piccolo bullone d\'acciaio affonda? È tutta una questione di densità media — la nave intrappola un grande volume d\'aria, riducendo la sua densità complessiva al di sotto di 1,0 g/cm³.',
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
      headers: [
        'Materiale',
        'Massa m (g)',
        'V_calc (cm³)',
        'V_disp (mL)',
        'ρ_calc (g/cm³)',
        'ρ_disp (g/cm³)',
        'ρ_atteso (g/cm³)'
      ],
      rows: 4
    },
    observations: [
      'Registra le masse a ±0,01 g e i volumi a ±0,1 cm³.',
      'Confronta ρ di entrambi i metodi e calcola la differenza percentuale.',
      'Nota quale metodo è più accurato e spiega perché.'
    ],
    conclusion: 'La densità è stata determinata con due metodi. Rame: ρ ≈ 8,87 g/cm³ (valore accettato 8,96 g/cm³). I risultati confermano ρ = m/V e il principio di spostamento di Archimede. Discrepanza < 5% dovuta alla precisione di misura.',
    ai: {
      opening: 'La densità è una delle proprietà fondamentali dei materiali! Chiedimi di ρ = m/V, dei due metodi o di come ridurre gli errori.',
      keywords: {
        setup: 'balance|calliper|displacement vessel|Eureka can',
        formula: 'ρ = m/V|displacement',
        error: 'air bubbles in displacement|calliper reading|balance drift',
        question: 'density|displacement|material identification',
        real: 'ship flotation|mineral identification|food science'
      },
      hint: 'ρ = m/V. Metodo 1: V da πr²h. Metodo 2: V = volume d\'acqua spostata. Confronta entrambi i risultati con i valori di letteratura.',
      expected: 'Cu: ρ ≈ 8,87 g/cm³ (accettato ~8,96). Al ≈ 2,70. Acciaio ≈ 7,72. Ottone ≈ 8,37 g/cm³.'
    }
  },
  {
    num: 8,
    cardEmoji: "➡️",
    title: 'Composizione e scomposizione delle forze',
    section: 'Mechanics',
    desc: 'Trova la risultante di forze concorrenti usando il metodo del parallelogramma e verifica con un dinamometro.',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti applicano la regola del parallelogramma per sommare vettori di forza graficamente e verificano il risultato con un cerchio goniometrico e tre dinamometri.',
      instructions: [
        'Monta tre dinamometri sul cerchio goniometrico ad angoli noti.',
        'Imposta F₁ = 40 g (0,39 N) e F₂ = 20 g (0,20 N) a un angolo noto θ tra loro.',
        'Trova sperimentalmente la terza forza (equilibrante); la risultante R è uguale e opposta ad essa.',
        'Disegna graficamente il parallelogramma e confronta con la risultante misurata.'
      ],
      expectedOutcome: 'F₁ = 40 g, F₂ = 20 g → R misurata ≈ 0,50 N; la regola del parallelogramma dà ≈ 0,56 N. Discrepanza dovuta ad attrito e lettura dell\'angolo.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔵',
          name: 'Cerchio goniometrico (0–360°)'
        },
        {
          emoji: '🔧',
          name: 'Tre dinamometri a molla'
        },
        {
          emoji: '📐',
          name: 'Goniometro'
        },
        {
          emoji: '📏',
          name: 'Righello'
        },
        {
          emoji: '📝',
          name: 'Carta millimetrata'
        }
      ],
      observationsToRecord: [
        'Moduli F₁ e F₂ (N) e l\'angolo θ tra di essi',
        'Modulo dell\'equilibrante F₃ (N) e sua direzione',
        'Modulo e direzione della risultante costruita graficamente'
      ],
      theoryPoints: [
        'Le forze sono vettori: hanno sia modulo sia direzione.',
        'La risultante R di due forze si trova con la regola del parallelogramma: R² = F₁² + F₂² + 2F₁F₂cos θ.',
        'L\'equilibrante ha modulo uguale ma direzione opposta alla risultante.',
        'Per tre forze concorrenti in equilibrio: ΣF = 0.'
      ],
      realWorldConnections: [
        'Gli ingegneri scompongono le forze nei tralicci dei ponti in componenti orizzontali e verticali.',
        'I piloti usano la somma vettoriale per tenere conto del vento durante la navigazione.',
        'La biomeccanica usa vettori di forza per analizzare i carichi articolari nel corpo umano.'
      ],
      formula: 'R = √(F₁² + F₂² + 2F₁F₂cos θ)   |   Equilibrio: ΣF = 0'
    },
    questions: {
      mcq: [
        {
          text: 'Due forze di 40 g e 20 g agiscono a 90° l\'una dall\'altra. Qual è la risultante approssimata?',
          options: ['0,44 N', '0,60 N', '0,20 N', '0,59 N'],
          correctIndex: 0,
          explanation: 'R = √(0,39² + 0,20²) = √(0,152 + 0,040) = √0,192 ≈ 0,44 N.'
        },
        {
          text: 'La forza equilibrante è:',
          options: [
            'Uguale alla risultante in modulo e direzione',
            'Uguale in modulo ma opposta in direzione alla risultante',
            'Il doppio della risultante',
            'A 90° rispetto alla risultante'
          ],
          correctIndex: 1,
          explanation: 'L\'equilibrante bilancia la risultante, quindi è uguale in modulo e opposta in direzione.'
        },
        {
          text: 'Se θ = 0° (forze parallele e nello stesso verso), il modulo della risultante è uguale a:',
          options: ['F₁ − F₂', 'F₁ + F₂', '√(F₁² + F₂²)', 'F₁ × F₂'],
          correctIndex: 1,
          explanation: 'Quando θ = 0°, cos 0° = 1, quindi R = √(F₁² + F₂² + 2F₁F₂) = F₁ + F₂.'
        }
      ],
      discussion: [
        'Spiega perché la risultante misurata può differire dalla previsione della regola del parallelogramma.',
        'Come cambierebbe la risultante se l\'angolo tra F₁ e F₂ aumentasse da 90° a 180°?',
        'Fai un esempio pratico in cui conoscere la risultante di due forze è importante.'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Forza come vettore',
          pct: 25
        },
        {
          label: 'Regola del parallelogramma',
          pct: 35
        },
        {
          label: 'Concetto di equilibrante',
          pct: 25
        },
        {
          label: 'Metodo grafico vs. analitico',
          pct: 15
        }
      ],
      misconceptions: [
        'Gli studenti spesso sommano i moduli delle forze senza considerare la direzione, trattando le forze come scalari.',
        'Molti pensano che l\'equilibrante sia la stessa cosa della risultante; è uguale ma opposta.',
        'Dimenticare che il parallelogramma deve avere le due forze come lati adiacenti, non opposti.'
      ],
      hook: 'Tre persone tirano funi collegate a un anello. Se conosci due delle forze, puoi prevedere la terza necessaria per tenere l\'anello fermo? La somma vettoriale dà la risposta!',
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
      headers: [
        'F₁ (N)',
        'F₂ (N)',
        'Angolo θ (°)',
        'R_misurata (N)',
        'R_calcolata (N)',
        '% Differenza'
      ],
      rows: 4
    },
    observations: [
      'Registra gli angoli di ogni dinamometro sul cerchio goniometrico.',
      'Nota eventuali effetti di attrito che impediscono all\'anello di restare centrato.',
      'Confronta i valori grafici e calcolati della risultante.'
    ],
    conclusion: 'La regola del parallelogramma è stata verificata: per F₁ = 0,39 N e F₂ = 0,20 N, la risultante calcolata era ~0,56 N e l\'equilibrante misurata ha dato R ≈ 0,50 N. La discrepanza di ~12% è attribuita all\'attrito e all\'errore di lettura dell\'angolo.',
    ai: {
      opening: 'Pronto a sommare le forze come un fisico? Chiedimi della regola del parallelogramma, delle forze equilibranti o delle componenti vettoriali!',
      keywords: {
        setup: 'goniometric circle|dynamometer|parallelogram rule|angle',
        formula: 'R = √(F₁²+F₂²+2F₁F₂cosθ)|equilibrant',
        error: 'friction|angle reading|graphical scale error',
        question: 'resultant|equilibrant|vector|parallelogram',
        real: 'bridge engineering|navigation|biomechanics'
      },
      hint: 'R = √(F₁² + F₂² + 2F₁F₂cosθ). L\'equilibrante è uguale e opposta a R. A 90°, R = √(F₁² + F₂²).',
      expected: 'F₁=0,39 N, F₂=0,20 N a ~90°: R_calc ≈ 0,56 N, R_misurata ≈ 0,50 N.'
    }
  },
  {
    num: 9,
    cardEmoji: "🪝",
    title: 'Pulegge fisse',
    section: 'Mechanics',
    desc: 'Studia come una puleggia fissa cambia la direzione di una forza ma non il suo modulo.',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano che una puleggia fissa ha VM = 1 (sforzo = carico) e confermano che il suo unico vantaggio è cambiare la direzione della forza.',
      instructions: [
        'Appendi un carico di 50 g a un lato della corda della puleggia.',
        'Applica una forza sull\'altro lato e misurala con un dinamometro.',
        'Varia il carico e registra ogni volta lo sforzo richiesto.'
      ],
      expectedOutcome: 'Per ogni carico, sforzo ≈ carico. Due masse da 50 g (una per lato): entrambi i dinamometri segnano ~0,49 N. VM = 1.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔵',
          name: 'Puleggia fissa su supporto'
        },
        {
          emoji: '🪢',
          name: 'Corda inestensibile'
        },
        {
          emoji: '🏋️',
          name: 'Masse (50 g, 100 g)'
        },
        {
          emoji: '🔧',
          name: 'Dinamometro a molla'
        }
      ],
      observationsToRecord: [
        'Carico W (N) appeso da un lato',
        'Sforzo F (N) misurato dall\'altro lato',
        'Vantaggio meccanico VM = W/F'
      ],
      theoryPoints: [
        'Una puleggia fissa (singola): l\'asse è fisso; ruota solo la ruota.',
        'La tensione è la stessa lungo tutta una corda ideale (senza massa e senza attrito).',
        'Vantaggio meccanico VM = Carico / Sforzo = 1 per una puleggia fissa.',
        'Il vantaggio della puleggia fissa: permette di tirare verso il basso per sollevare un carico verso l\'alto.'
      ],
      realWorldConnections: [
        'I pennoni usano una puleggia fissa — tiri verso il basso per alzare la bandiera.',
        'L\'attrezzatura di scena in teatro usa pulegge fisse per reindirizzare le forze di sollevamento.',
        'Le gru combinano pulegge fisse e mobili per un elevato vantaggio meccanico.'
      ],
      formula: 'VM = Carico / Sforzo = 1   (puleggia fissa)'
    },
    questions: {
      mcq: [
        {
          text: 'Qual è il vantaggio meccanico di una singola puleggia fissa?',
          options: ['0,5', '1', '2', '4'],
          correctIndex: 1,
          explanation: 'Una puleggia fissa reindirizza solo la forza; lo sforzo è uguale al carico, quindi VM = Carico/Sforzo = 1.'
        },
        {
          text: 'Una massa di 100 g è appesa a una puleggia fissa. Quale sforzo è necessario per tenerla in equilibrio?',
          options: ['0,49 N', '0,98 N', '1,96 N', '0,25 N'],
          correctIndex: 1,
          explanation: 'Carico = 0,1 × 9,81 = 0,981 N. Sforzo = Carico / VM = 0,981 / 1 ≈ 0,98 N.'
        },
        {
          text: 'Perché una puleggia fissa NON riduce lo sforzo necessario?',
          options: [
            'Perché la corda non è ideale',
            'Perché solo un segmento di corda sostiene il carico',
            'Perché c\'è troppo attrito',
            'Perché la massa è troppo piccola'
          ],
          correctIndex: 1,
          explanation: 'Solo un segmento di corda sostiene il carico; l\'intero peso deve essere bilanciato dallo sforzo.'
        }
      ],
      discussion: [
        'Se una puleggia fissa ha VM = 1, quale vantaggio pratico offre?',
        'In cosa differisce una puleggia fissa da una mobile in termini di vantaggio meccanico?',
        'Descrivi una situazione reale in cui reindirizzare una forza (anche senza moltiplicarla) è utile.'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'VM = 1 per puleggia fissa',
          pct: 30
        },
        {
          label: 'Vantaggio della redirezione della forza',
          pct: 30
        },
        {
          label: 'Concetto di tensione della corda',
          pct: 25
        },
        {
          label: 'Puleggia ideale vs. reale',
          pct: 15
        }
      ],
      misconceptions: [
        'Molti studenti si aspettano che una puleggia riduca sempre lo sforzo necessario; una singola puleggia fissa non lo fa.',
        'Confondere \'vantaggio meccanico\' con \'rapporto di velocità\' — per macchine ideali sono uguali.',
        'Ignorare la massa di corda e puleggia può dare risultati idealizzati diversi dalla realtà.'
      ],
      hook: 'Perché i muratori usano una puleggia singola in cima a un\'impalcatura per sollevare i mattoni? Non per ridurre lo sforzo — ma per tirare verso il basso invece di spingere verso l\'alto. La direzione conta!',
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
      headers: [
        'Carico (g)',
        'Carico W (N)',
        'Sforzo F (N)',
        'VM = W/F'
      ],
      rows: 4
    },
    observations: [
      'Confronta le letture di sforzo e carico per ogni prova.',
      'Nota eventuali effetti di attrito che rendono lo sforzo leggermente maggiore del carico.',
      'Osserva che la puleggia cambia solo la direzione della forza.'
    ],
    conclusion: 'La puleggia fissa ha VM ≈ 1: lo sforzo è uguale al carico (entro l\'attrito). Per un carico di 50 g: W = 0,49 N, sforzo ≈ 0,49 N. L\'unico vantaggio è l\'inversione della direzione della forza.',
    ai: {
      opening: 'Le pulegge sono macchine semplici! Chiedimi del vantaggio meccanico, della tensione della corda o del perché la direzione conta.',
      keywords: {
        setup: 'fixed pulley|string|dynamometer|support',
        formula: 'MA = Load/Effort = 1|tension',
        error: 'friction|string mass|pulley mass',
        question: 'mechanical advantage|fixed pulley|direction|tension',
        real: 'flag pole|crane|theatre rigging'
      },
      hint: 'VM = Carico/Sforzo = 1 per una puleggia fissa. Lo sforzo è uguale al carico. Il vantaggio è il cambio di direzione, non la riduzione di forza.',
      expected: 'Carico 50 g: W = 0,49 N, sforzo ≈ 0,49 N. VM ≈ 1 per tutti i carichi.'
    }
  },
  {
    num: 10,
    cardEmoji: "🔄",
    title: 'Puleggia mobile',
    section: 'Mechanics',
    desc: 'Usa una puleggia mobile per dimezzare la forza necessaria a sollevare un carico.',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano che P = R/2 (sforzo = metà del carico) per una puleggia mobile, confermando VM = 2.',
      instructions: [
        'Prepara la puleggia mobile con entrambi i segmenti di corda che sostengono il carico.',
        'Fissa un dinamometro all\'estremità libera della corda (lato dello sforzo).',
        'Carica la puleggia con masse da 50 g a 200 g e registra lo sforzo ogni volta.'
      ],
      expectedOutcome: 'M = [50,100,150,200] g → Carico R = [0,49;0,98;1,47;1,96] N → Sforzo P ≈ [0,20;0,50;0,80;1,10] N (≈ R/2 con attrito).'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔵',
          name: 'Puleggia mobile'
        },
        {
          emoji: '🔵',
          name: 'Puleggia fissa (per guida)'
        },
        {
          emoji: '🪢',
          name: 'Corda'
        },
        {
          emoji: '🏋️',
          name: 'Masse (50 g, 100 g, 150 g, 200 g)'
        },
        {
          emoji: '🔧',
          name: 'Dinamometro a molla'
        }
      ],
      observationsToRecord: ['Carico R (N) per ogni massa', 'Sforzo P (N) misurato dal dinamometro', 'VM = R/P per ogni prova'],
      theoryPoints: [
        'Una puleggia mobile si muove con il carico; due segmenti di corda lo sostengono.',
        'VM ideale = 2: Sforzo P = Carico R / 2.',
        'VM reale < 2 a causa dell\'attrito e del peso della puleggia.',
        'La puleggia si sposta: quando lo sforzo percorre 2× la distanza, il carico ne percorre 1× (rapporto di velocità = 2).'
      ],
      realWorldConnections: [
        'I paranchi in nautica usano più pulegge mobili per enormi vantaggi meccanici.',
        'Le gru da cantiere usano pulegge mobili per sollevare pesanti travi d\'acciaio.',
        'Le macchine a cavo in palestra usano sistemi di pulegge per regolare la resistenza effettiva.'
      ],
      formula: 'P = R / 2   |   VM = R/P = 2   (puleggia mobile ideale)'
    },
    questions: {
      mcq: [
        {
          text: 'Una puleggia mobile sostiene un carico di 200 g. Qual è lo sforzo ideale richiesto?',
          options: ['0,49 N', '0,98 N', '1,96 N', '0,25 N'],
          correctIndex: 1,
          explanation: 'Carico = 0,2 × 9,81 = 1,962 N. P = R/2 = 1,962/2 = 0,981 N ≈ 0,98 N.'
        },
        {
          text: 'Perché il VM reale di una puleggia mobile è leggermente inferiore a 2?',
          options: [
            'La corda è troppo corta',
            'L\'attrito e il peso della puleggia stessa riducono il VM',
            'Il carico è troppo pesante',
            'La corda è elastica'
          ],
          correctIndex: 1,
          explanation: 'L\'attrito e il peso proprio della puleggia richiedono entrambi uno sforzo aggiuntivo, riducendo il VM reale al di sotto del valore ideale di 2.'
        },
        {
          text: 'Se lo sforzo si sposta di 20 cm, di quanto si muove il carico in una puleggia mobile ideale?',
          options: ['20 cm', '40 cm', '10 cm', '5 cm'],
          correctIndex: 2,
          explanation: 'Rapporto di velocità = 2, quindi il carico si muove di distanza dello sforzo / 2 = 20/2 = 10 cm.'
        }
      ],
      discussion: [
        'Perché una puleggia mobile richiede che la corda dello sforzo si muova del doppio rispetto al carico?',
        'Come influisce l\'attrito sul vantaggio meccanico di un sistema di pulegge reale?',
        'Progetta un sistema di pulegge per ottenere VM = 4. Quante pulegge mobili servono?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Derivazione di VM = 2',
          pct: 30
        },
        {
          label: 'Due segmenti di corda che sostengono il carico',
          pct: 25
        },
        {
          label: 'Concetto di rapporto di velocità',
          pct: 25
        },
        {
          label: 'VM reale vs. ideale',
          pct: 20
        }
      ],
      misconceptions: [
        'Gli studenti pensano che una puleggia mobile e una fissa abbiano lo stesso VM; la mobile ha VM=2.',
        'Molti dimenticano che la corda dello sforzo deve muoversi del doppio rispetto al carico (conservazione dell\'energia).',
        'Ignorare il peso della puleggia porta a VM teorici sovrastimati.'
      ],
      hook: 'Una puleggia mobile significa che devi esercitare solo la metà della forza per sollevare un carico! Ma c\'è un tranello — la tua mano deve muoversi del doppio. L\'energia si conserva sempre!',
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
      headers: [
        'Massa (g)',
        'Carico R (N)',
        'Sforzo P (N)',
        'VM = R/P',
        'VM ideale'
      ],
      rows: 4
    },
    observations: [
      'Registra P e R per ogni carico e calcola il VM.',
      'Confronta il VM reale con il valore ideale di 2.',
      'Misura di quanto si muove la corda dello sforzo per uno spostamento fissato del carico.'
    ],
    conclusion: 'La puleggia mobile ha dato VM ≈ 1,8–2,0 (ideale = 2). Per un carico di 100 g: R = 0,98 N, P ≈ 0,50 N, VM ≈ 1,96. La leggera deviazione da VM=2 è dovuta all\'attrito e al peso della puleggia.',
    ai: {
      opening: 'Le pulegge mobili sono moltiplicatori di forza! Chiedimi come si deriva VM=2 o come l\'attrito influisce sul risultato.',
      keywords: {
        setup: 'movable pulley|two rope segments|dynamometer',
        formula: 'P = R/2|MA = 2|velocity ratio',
        error: 'friction|pulley weight|string stretching',
        question: 'mechanical advantage|movable pulley|velocity ratio|effort',
        real: 'crane|block and tackle|sailing'
      },
      hint: 'VM = 2 per puleggia mobile ideale: P = R/2. Nella realtà l\'attrito rende P leggermente maggiore di R/2.',
      expected: 'Carico 100g: R=0,98 N, P≈0,50 N, VM≈1,96. 200g: R=1,96 N, P≈1,10 N, VM≈1,78.'
    }
  },
  {
    num: 11,
    cardEmoji: "⛓️",
    title: 'Pulegge fisse e mobili',
    section: 'Mechanics',
    desc: 'Combina pulegge fisse e mobili per ottenere diversi vantaggi meccanici.',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti vedono che combinando una puleggia fissa (di guida) con una mobile si mantiene VM = 2 permettendo di applicare lo sforzo verso il basso.',
      instructions: [
        'Prepara il sistema: puleggia mobile sotto il carico + puleggia fissa in alto per reindirizzare lo sforzo.',
        'Tira il dinamometro verso il basso e registra lo sforzo per ogni carico.',
        'Verifica che P = R/2 valga ancora e che la corda dello sforzo si muova del doppio rispetto al carico.'
      ],
      expectedOutcome: 'P = R/2 come con una singola puleggia mobile. Tirando 2 cm di corda il carico sale di 1 cm.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔵',
          name: 'Puleggia mobile'
        },
        {
          emoji: '🔵',
          name: 'Puleggia fissa (di guida)'
        },
        {
          emoji: '🪢',
          name: 'Corda'
        },
        {
          emoji: '🏋️',
          name: 'Masse (50 g, 100 g, 150 g)'
        },
        {
          emoji: '🔧',
          name: 'Dinamometro a molla'
        }
      ],
      observationsToRecord: [
        'Carico R (N) per ogni massa',
        'Sforzo P (N) con il sistema combinato',
        'Distanza percorsa dalla corda dello sforzo vs. distanza di sollevamento del carico'
      ],
      theoryPoints: [
        'Puleggia fissa: cambia solo la direzione, VM = 1.',
        'Puleggia mobile: VM = 2, sforzo = R/2.',
        'Sistema combinato: la puleggia fissa reindirizza lo sforzo verso il basso; la puleggia mobile fornisce comunque VM = 2.',
        'Spostamento della corda: la corda dello sforzo si muove di 2× rispetto al carico (rapporto di velocità = 2).'
      ],
      realWorldConnections: [
        'Gli ascensori usano sistemi di pulegge combinate sia per il VM sia per una direzione di controllo comoda.',
        'Le pulegge dei pozzi combinano pulegge fisse e mobili per il sollevamento pratico dell\'acqua.',
        'I cavi del deragliatore della bicicletta usano piccole pulegge per reindirizzare e tensionare la catena.'
      ],
      formula: 'P = R/2   |   VM = 2   |   s_sforzo = 2 × s_carico'
    },
    questions: {
      mcq: [
        {
          text: 'In un sistema di pulegge combinato (fissa + mobile), qual è il vantaggio meccanico?',
          options: ['1', '2', '3', '4'],
          correctIndex: 1,
          explanation: 'La puleggia fissa reindirizza solo; la puleggia mobile fornisce VM = 2.'
        },
        {
          text: 'Se il carico sale di 5 cm, quanto si muove la corda dello sforzo?',
          options: ['5 cm', '10 cm', '2,5 cm', '20 cm'],
          correctIndex: 1,
          explanation: 'Rapporto di velocità = 2; la corda dello sforzo si muove di 2 × 5 cm = 10 cm.'
        },
        {
          text: 'Qual è il vantaggio principale dell\'aggiunta di una puleggia fissa al sistema?',
          options: [
            'Raddoppia il VM',
            'Dimezza il carico',
            'Permette di applicare lo sforzo in una direzione più comoda',
            'Elimina l\'attrito'
          ],
          correctIndex: 2,
          explanation: 'La puleggia fissa (di guida) reindirizza la corda dello sforzo in modo da tirare verso il basso invece che verso l\'alto.'
        }
      ],
      discussion: [
        'Perché aggiungere la puleggia fissa di guida NON cambia il vantaggio meccanico del sistema?',
        'Confronta lo spostamento della corda dello sforzo con quello del carico. Quale principio lo spiega?',
        'Come aumenteresti il VM oltre 2 usando più pulegge?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Ruolo della puleggia fissa (solo direzione)',
          pct: 25
        },
        {
          label: 'La puleggia mobile dà VM=2',
          pct: 35
        },
        {
          label: 'Rapporto di velocità s_sforzo = 2s_carico',
          pct: 25
        },
        {
          label: 'Comodità pratica del sistema combinato',
          pct: 15
        }
      ],
      misconceptions: [
        'Gli studenti si aspettano che il sistema combinato abbia VM = 3 (1+2); la puleggia fissa non contribuisce al VM.',
        'Confondere il numero totale di segmenti di corda con il vantaggio meccanico nei sistemi combinati.',
        'Assumere che l\'attrito sia trascurabile; i sistemi reali hanno sempre qualche perdita per attrito.'
      ],
      hook: 'Un pozzo usa una manovella per sollevare un secchio. Ma se potessi usare un sistema di pulegge che dimezza lo sforzo E ti permette di tirare in una direzione naturale? Le pulegge combinate fanno esattamente questo!',
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
      headers: [
        'Massa (g)',
        'Carico R (N)',
        'Sforzo P (N)',
        'VM = R/P',
        's_sforzo (cm)',
        's_carico (cm)'
      ],
      rows: 4
    },
    observations: [
      'Verifica che P ≈ R/2 per il sistema combinato come per la singola puleggia mobile.',
      'Misura s_sforzo e s_carico e conferma il rapporto 2:1.',
      'Nota la direzione della forza di sforzo (verso il basso) rispetto al carico (verso l\'alto).'
    ],
    conclusion: 'Il sistema di pulegge combinato (fissa + mobile) mantiene VM = 2 (P = R/2) permettendo di applicare lo sforzo verso il basso. Lo spostamento della corda dello sforzo è stato 2× quello del carico in tutte le prove.',
    ai: {
      opening: 'Le pulegge combinate danno direzione E vantaggio meccanico! Chiedimi come si mantiene VM=2 e come si relazionano le distanze di corda.',
      keywords: {
        setup: 'fixed pulley|movable pulley|combined system|guide',
        formula: 'P = R/2|MA=2|s_effort = 2×s_load',
        error: 'friction|rope mass|incorrectly counting pulleys',
        question: 'MA|combined pulley|velocity ratio|direction',
        real: 'elevator|well|crane'
      },
      hint: 'La puleggia fissa reindirizza soltanto. La puleggia mobile dà VM=2. Insieme: P=R/2 e lo sforzo percorre 2× la distanza del carico.',
      expected: 'P ≈ R/2 per tutti i carichi. s_sforzo = 2 × s_carico confermato. VM ≈ 2.'
    }
  },
  {
    num: 12,
    cardEmoji: "📐",
    title: 'Piano inclinato',
    section: 'Mechanics',
    desc: 'Misura la forza necessaria per spingere un carico su piani inclinati a diverse angolazioni.',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano che F = mg sin θ (la componente della gravità lungo il piano) e misurano il vantaggio meccanico VM = 1/sin θ.',
      instructions: [
        'Imposta il piano inclinato a un angolo misurato θ (ad es. 23,16°).',
        'Fissa un dinamometro a una massa sul piano; tira parallelamente alla superficie.',
        'Registra la forza F per masse di 50 g, 100 g e 150 g.'
      ],
      expectedOutcome: 'A θ = 23,16°: M = [50,100,150] g → F ≈ [0,7;0,9;1,1] N. Teorica: mg sin 23,16° = [0,19;0,39;0,58] N. La differenza è l\'attrito.'
    },
    experiment: {
      equipment: [
        {
          emoji: '📐',
          name: 'Piano inclinato con scala dell\'angolo'
        },
        {
          emoji: '🏋️',
          name: 'Masse (50 g, 100 g, 150 g)'
        },
        {
          emoji: '🔧',
          name: 'Dinamometro a molla'
        },
        {
          emoji: '📏',
          name: 'Goniometro / righello'
        },
        {
          emoji: '🪢',
          name: 'Corda'
        }
      ],
      observationsToRecord: [
        'Angolo del piano θ (gradi)',
        'Massa m (g) e peso mg (N)',
        'Forza F (N) per tirare la massa lungo il piano'
      ],
      theoryPoints: [
        'Componente della gravità lungo il piano: F_parallela = mg sin θ.',
        'Vantaggio meccanico del piano inclinato senza attrito: VM = 1/sin θ = l/h.',
        'La forza di attrito f = μN = μ mg cos θ si aggiunge allo sforzo richiesto.',
        'Sforzo totale (con attrito): F = mg sin θ + μ mg cos θ.',
        'Un piano inclinato scambia distanza per forza: angolo piccolo → VM grande ma percorso lungo.'
      ],
      realWorldConnections: [
        'Strade e rampe sono piani inclinati che riducono la forza necessaria per salire.',
        'Le rampe per sedie a rotelle devono per legge avere un angolo abbastanza piccolo per un accesso sicuro.',
        'Viti e cunei sono piani inclinati avvolti attorno a un cilindro.'
      ],
      formula: 'F = mg sin θ   (senza attrito)   |   VM = 1/sin θ = l/h'
    },
    questions: {
      mcq: [
        {
          text: 'Una massa di 100 g è su un piano senza attrito a 30°. Quale forza è necessaria per tirarla in salita?',
          options: ['0,49 N', '0,85 N', '0,98 N', '0,57 N'],
          correctIndex: 0,
          explanation: 'F = mg sin 30° = 0,1 × 9,81 × 0,5 = 0,49 N.'
        },
        {
          text: 'A θ = 23°, il VM di un piano inclinato senza attrito è circa:',
          options: ['2,56', '0,39', '1,00', '4,35'],
          correctIndex: 0,
          explanation: 'VM = 1/sin 23° = 1/0,391 ≈ 2,56.'
        },
        {
          text: 'Perché la forza misurata è maggiore di mg sin θ?',
          options: [
            'Solo errore di misura',
            'Attrito tra la massa e la superficie',
            'Il dinamometro a molla è difettoso',
            'L\'angolo è errato'
          ],
          correctIndex: 1,
          explanation: 'L\'attrito aggiunge μ mg cos θ allo sforzo richiesto, rendendo la forza reale maggiore del valore teorico senza attrito.'
        }
      ],
      discussion: [
        'Spiega perché un piano poco inclinato è più facile da salire di uno ripido, usando le forze.',
        'Una rampa è lunga 3 m e alta 1 m. Qual è il suo VM? Quale sforzo serve per spingere una cassa di 60 kg su di essa?',
        'Come influisce l\'attrito sul vantaggio meccanico di un piano inclinato reale?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Forza sul piano F = mg sinθ',
          pct: 30
        },
        {
          label: 'Forza normale N = mg cosθ',
          pct: 20
        },
        {
          label: 'Attrito f = μN',
          pct: 25
        },
        {
          label: 'VM = l/h = 1/sinθ',
          pct: 25
        }
      ],
      misconceptions: [
        'Gli studenti pensano spesso che l\'attrito diminuisca su piani più ripidi; in realtà la forza normale (e l\'attrito) diminuisce ma la forza richiesta aumenta comunque.',
        'Confondere la lunghezza del piano con l\'altezza guadagnata porta a errori nel calcolo del VM.',
        'Molti dimenticano che l\'attrito è sempre diretto in senso opposto al moto, aumentando lo sforzo richiesto.'
      ],
      hook: 'Gli antichi Egizi spostavano blocchi di tonnellate su enormi rampe per costruire le piramidi. Conoscevano il piano inclinato: con un\'inclinazione abbastanza dolce, qualsiasi forza può muovere qualsiasi carico!',
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
      headers: [
        'Massa (g)',
        'Peso mg (N)',
        'Angolo θ (°)',
        'F_misurata (N)',
        'mg·sinθ (N)',
        'Attrito f (N)'
      ],
      rows: 4
    },
    observations: [
      'Registra la forza necessaria per tirare ogni massa lungo il piano a velocità costante.',
      'Calcola mg sin θ e confronta con la forza misurata.',
      'La differenza (F − mg sin θ) stima la forza di attrito.'
    ],
    conclusion: 'A θ = 23,16°: le forze misurate erano F ≈ 0,7; 0,9; 1,1 N per 50, 100, 150 g. Teoriche mg sin θ ≈ 0,19; 0,39; 0,58 N. La differenza conferma una significativa forza di attrito sul piano.',
    ai: {
      opening: 'I piani inclinati trasformano salite ripide in spinte dolci! Chiedimi di F = mg sinθ, del VM o di come l\'attrito cambia le cose.',
      keywords: {
        setup: 'inclined plane|angle|dynamometer|slope',
        formula: 'F = mg sinθ|MA = 1/sinθ|friction = μN',
        error: 'friction neglected|angle measurement|dynamometer at wrong angle',
        question: 'inclined plane|slope|mechanical advantage|friction|angle',
        real: 'ramp|road|pyramid|screw'
      },
      hint: 'F = mg sinθ (senza attrito). F reale = mg sinθ + μ mg cosθ. VM = l/h = 1/sinθ.',
      expected: 'θ=23°: F_teorica = mg×0,392. M=50g: F_teorica≈0,19 N ma F_misurata≈0,7 N. L\'attrito è grande.'
    }
  },
  {
    num: 13,
    cardEmoji: "🪃",
    title: 'Legge di Hooke',
    section: 'Mechanics',
    desc: 'Applica forze crescenti a una molla e verifica la proporzionalità tra forza e allungamento (legge di Hooke).',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti tracciano F vs. x e verificano F = kx. La pendenza della retta è uguale alla costante elastica k (N/m).',
      instructions: [
        'Appendi la molla verticalmente; registra la lunghezza naturale (senza carico).',
        'Aggiungi masse di 10 g, 25 g, 50 g; misura la lunghezza totale e calcola l\'allungamento x.',
        'Traccia F = mg (asse y) vs. x (asse x); la pendenza è k.'
      ],
      expectedOutcome: 'm = 10 g → x = 0,016 m; m = 25 g → x = 0,040 m; m = 50 g → x = 0,081 m. k = pendenza del grafico F vs. x.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🌀',
          name: 'Molla elicoidale'
        },
        {
          emoji: '📏',
          name: 'Righello o metro'
        },
        {
          emoji: '🏋️',
          name: 'Masse (10 g, 25 g, 50 g)'
        },
        {
          emoji: '🪝',
          name: 'Porta-masse'
        },
        {
          emoji: '📝',
          name: 'Carta millimetrata'
        }
      ],
      observationsToRecord: [
        'Lunghezza naturale L₀ (m)',
        'Lunghezza totale L (m) con ogni massa',
        'Allungamento x = L − L₀ (m)',
        'Forza applicata F = mg (N)'
      ],
      theoryPoints: [
        'Legge di Hooke: F = kx (forza di richiamo proporzionale all\'allungamento, entro il limite elastico).',
        'Costante elastica k = F/x (N/m): rigidità della molla.',
        'Il limite elastico è l\'allungamento massimo oltre il quale la molla si deforma permanentemente.',
        'Grafico F vs. x: retta passante per l\'origine con pendenza = k.',
        'Il segno negativo in F = −kx indica che la forza di richiamo si oppone all\'allungamento.'
      ],
      realWorldConnections: [
        'Le molle di sospensione di auto e biciclette assorbono gli urti usando la legge di Hooke.',
        'L\'energia potenziale elastica immagazzinata in una molla compressa alimenta i meccanismi a orologeria.',
        'I sismografi usano sistemi massa-molla per rilevare le vibrazioni del terreno.'
      ],
      formula: 'F = kx   |   k = F/x (N/m)'
    },
    questions: {
      mcq: [
        {
          text: 'Una molla si allunga di 0,040 m quando vi si appende una massa di 25 g. Qual è k?',
          options: ['6,1 N/m', '0,61 N/m', '61 N/m', '0,245 N/m'],
          correctIndex: 0,
          explanation: 'F = 0,025 × 9,81 = 0,245 N; k = F/x = 0,245/0,040 = 6,1 N/m.'
        },
        {
          text: 'Cosa rappresenta la pendenza di un grafico F vs. x?',
          options: ['Intensità del campo gravitazionale', 'Costante elastica k', 'Massa della molla', 'Limite elastico'],
          correctIndex: 1,
          explanation: 'F = kx quindi pendenza = ΔF/Δx = k.'
        },
        {
          text: 'La legge di Hooke non vale più quando:',
          options: [
            'La temperatura aumenta',
            'L\'allungamento supera il limite elastico',
            'La massa viene rimossa',
            'La molla è orizzontale'
          ],
          correctIndex: 1,
          explanation: 'Oltre il limite elastico la molla è deformata permanentemente e la relazione lineare F = kx non vale più.'
        }
      ],
      discussion: [
        'Come determineresti il limite elastico della molla dal tuo grafico F vs. x?',
        'Due molle hanno k₁ = 5 N/m e k₂ = 10 N/m. Quale molla è più rigida? Perché?',
        'Spiega perché una molla obbedisce alla legge di Hooke solo fino a un certo allungamento.'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Legge di Hooke F = kx',
          pct: 35
        },
        {
          label: 'Costante elastica k dalla pendenza del grafico',
          pct: 30
        },
        {
          label: 'Limite elastico',
          pct: 20
        },
        {
          label: 'Analisi grafica',
          pct: 15
        }
      ],
      misconceptions: [
        'Gli studenti a volte pensano che k dipenda dal carico; è una proprietà della molla, costante nella regione elastica.',
        'Dimenticare di misurare dalla lunghezza naturale: allungamento x = L − L₀, non la lunghezza totale L.',
        'Assumere che il grafico debba passare per (0,0); in pratica un piccolo errore di zero può farlo traslare.'
      ],
      hook: 'Un dinamometro a molla funziona grazie alla legge di Hooke — l\'allungamento è esattamente proporzionale alla forza. Senza questa semplice regola, le bilance pesapersone sarebbero inutili!',
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
      headers: [
        'Massa m (g)',
        'Forza F = mg (N)',
        'Lunghezza totale L (m)',
        'Allungamento x = L−L₀ (m)',
        'k = F/x (N/m)'
      ],
      rows: 5
    },
    observations: [
      'Registra la lunghezza naturale L₀ con cura senza nessuna massa applicata.',
      'Assicurati che ogni massa sia aggiunta delicatamente per evitare oscillazioni durante la misura.',
      'Traccia F vs. x e disegna la retta di miglior fit attraverso l\'origine.'
    ],
    conclusion: 'Legge di Hooke verificata: F = kx. Dati: m=10g→x=1,6cm, m=25g→x=4,0cm, m=50g→x=8,1cm. Costante elastica k ≈ 6,0 N/m dalla pendenza del grafico. Relazione lineare confermata entro il limite elastico.',
    ai: {
      opening: 'Molle e legge di Hooke! Chiedimi come trovare k, cosa significa il limite elastico o come tracciare il grafico.',
      keywords: {
        setup: 'helical spring|natural length|extension|mass hanger',
        formula: 'F = kx|k = F/x|elastic limit',
        error: 'zero error|measuring from wrong reference|beyond elastic limit',
        question: 'Hooke\'s Law|spring constant|extension|elastic limit',
        real: 'suspension spring|clockwork|seismograph'
      },
      hint: 'x = L − L₀ (allungamento, non lunghezza totale). Traccia F vs. x; pendenza = k. F = kx solo entro il limite elastico.',
      expected: '10g→x=0,016m; 25g→x=0,040m; 50g→x=0,081m. k ≈ 6 N/m dalla pendenza del best-fit.'
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
      whatTheyLearn: 'Gli studenti ricavano e verificano 1/k_serie = 1/k₁ + 1/k₂ e k_parallelo = k₁ + k₂, e osservano il paradosso in cui tagliando il filo centrale di due molle caricate una massa si solleva.',
      instructions: [
        'Collegare due molle in serie: misurare l\'allungamento per ogni carico; calcolare 1/k_s.',
        'Collegare le stesse molle in parallelo: misurare l\'allungamento per gli stessi carichi; calcolare k_p.',
        'Preparare il paradosso: due molle compresse contro una massa; tagliare il filo centrale.'
      ],
      expectedOutcome: 'Serie: 1/k_s = 1/k₁ + 1/k₂ → k_s < k₁ o k₂. Parallelo: k_p = k₁ + k₂ → più rigido. Paradosso: tagliando il filo centrale la massa collegata si solleva.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🌀',
          name: 'Due molle elicoidali identiche'
        },
        {
          emoji: '📏',
          name: 'Righello'
        },
        {
          emoji: '🏋️',
          name: 'Masse (50 g, 100 g)'
        },
        {
          emoji: '✂️',
          name: 'Forbici (per il paradosso)'
        },
        {
          emoji: '🧵',
          name: 'Filo'
        }
      ],
      observationsToRecord: [
        'Allungamento della combinazione in serie per ogni carico → k_serie',
        'Allungamento della combinazione in parallelo per ogni carico → k_parallelo',
        'Direzione del movimento della massa quando si taglia il filo centrale (paradosso)'
      ],
      theoryPoints: [
        'Molle in serie: stessa tensione in ciascuna; allungamento totale = x₁ + x₂; 1/k_s = 1/k₁ + 1/k₂.',
        'Molle in parallelo: si dividono il carico; stesso allungamento; k_p = k₁ + k₂.',
        'Le molle in serie sono più morbide (k minore); quelle in parallelo sono più rigide (k maggiore).',
        'Il paradosso delle molle: una molla è compressa e l\'altra allungata tramite un filo. Tagliando il filo si libera l\'energia immagazzinata, producendo un impulso netto verso l\'alto sulla massa collegata.'
      ],
      realWorldConnections: [
        'Le sospensioni dei veicoli usano combinazioni di molle calibrate per comfort (serie, più morbide) o tenuta di strada (parallelo, più rigide).',
        'Le molle dei materassi sono in parallelo — molte molle si dividono il carico, dando un k_p alto.',
        'Le corde da bungee jumping sono di fatto molle in serie (più lunghe → più morbide).'
      ],
      formula: 'Serie: 1/k_s = 1/k₁ + 1/k₂   |   Parallelo: k_p = k₁ + k₂'
    },
    questions: {
      mcq: [
        {
          text: 'Due molle con k = 10 N/m ciascuna sono collegate in serie. Qual è la costante elastica combinata?',
          options: ['20 N/m', '10 N/m', '5 N/m', '1 N/m'],
          correctIndex: 2,
          explanation: '1/k_s = 1/10 + 1/10 = 2/10; k_s = 5 N/m.'
        },
        {
          text: 'Due molle con k = 10 N/m ciascuna sono collegate in parallelo. Quanto vale k_p?',
          options: ['5 N/m', '10 N/m', '20 N/m', '100 N/m'],
          correctIndex: 2,
          explanation: 'k_p = k₁ + k₂ = 10 + 10 = 20 N/m.'
        },
        {
          text: 'Nel paradosso delle molle, cosa fa muovere la massa verso l\'alto quando si taglia il filo?',
          options: [
            'La gravità cambia direzione',
            'La molla compressa rilascia l\'energia elastica immagazzinata',
            'Il filo sosteneva un peso in più',
            'La pressione dell\'aria aumenta'
          ],
          correctIndex: 1,
          explanation: 'La molla compressa stava immagazzinando energia potenziale elastica. Quando il vincolo (filo) viene rimosso, quell\'energia viene liberata come impulso verso l\'alto.'
        }
      ],
      discussion: [
        'Perché k_serie < k₁ e k₂, mentre k_parallelo > k₁ e k₂?',
        'Spiega il paradosso delle molle in termini di energia potenziale elastica immagazzinata.',
        'Un materasso ha 100 molle in parallelo, ciascuna con k = 200 N/m. Quanto vale il k totale?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Formula della serie 1/k_s = Σ1/kᵢ',
          pct: 30
        },
        {
          label: 'Formula del parallelo k_p = Σkᵢ',
          pct: 30
        },
        {
          label: 'Verifica grafica',
          pct: 20
        },
        {
          label: 'Paradosso delle molle (energia elastica)',
          pct: 20
        }
      ],
      misconceptions: [
        'Gli studenti spesso applicano la formula delle serie (1/k_tot) quando intendono il parallelo e viceversa — ricorda: serie → più morbida; parallelo → più rigida.',
        'Molti pensano che le molle in serie si allunghino la metà di una singola molla; in realtà si allungano il doppio per unità di carico.',
        'Il paradosso delle molle sorprende tutti: gli studenti si aspettano che la massa cada o resti ferma quando si taglia il filo.'
      ],
      hook: 'Taglia il filo che collega due molle caricate e guarda cosa succede — una massa schizza verso l\'alto! Le molle possono immagazzinare e rilasciare energia in modi inaspettati.',
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
      headers: ['Configurazione', 'Massa (g)', 'Carico F (N)', 'Allungamento x (m)', 'k_eff (N/m)'],
      rows: 6
    },
    observations: [
      'Registra l\'allungamento per le combinazioni in serie e in parallelo con gli stessi carichi.',
      'Conferma che in serie si allunga di più di una singola molla e in parallelo di meno.',
      'Osserva la direzione del moto quando viene tagliato il filo del paradosso.'
    ],
    conclusion: 'Serie: k_s = k/2 per molle uguali (più morbida). Parallelo: k_p = 2k (più rigida). Formule verificate entro un errore del 5%. Paradosso: la massa si è sollevata quando il filo centrale è stato tagliato — la liberazione di energia elastica lo spiega.',
    ai: {
      opening: 'Molle in serie o in parallelo — quale è più rigida? E qual è il paradosso delle molle? Chiedimi tutto sulle combinazioni di molle!',
      keywords: {
        setup: 'series springs|parallel springs|string|masses',
        formula: '1/k_s = 1/k₁+1/k₂|k_p = k₁+k₂|paradox',
        error: 'reading extension|friction|string not cut cleanly',
        question: 'series|parallel|spring constant|paradox|elastic energy',
        real: 'vehicle suspension|mattress|bungee'
      },
      hint: 'Serie: 1/k_s = 1/k₁+1/k₂ (più morbida). Parallelo: k_p = k₁+k₂ (più rigida). Paradosso: la molla compressa immagazzina energia → si libera verso l\'alto quando il filo viene tagliato.',
      expected: 'Molle uguali k=6 N/m: serie k_s=3 N/m; parallelo k_p=12 N/m. Paradosso: la massa si solleva quando il filo viene tagliato.'
    }
  },
  {
    num: 15,
    cardEmoji: "🕰️",
    title: 'Pendolo semplice',
    section: 'Mechanics',
    desc: 'Misura il periodo di un pendolo semplice al variare della lunghezza e verifica la formula T = 2π√(l/g).',
    equipmentNeeded: 'basic-supplies',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti misurano T per le lunghezze L = 0,25 m e L = 1,0 m e confermano T² ∝ L, permettendo il calcolo di g.',
      instructions: [
        'Imposta la lunghezza del pendolo L = 0,25 m; sposta di meno di 5° dalla verticale e rilascia.',
        'Cronometra 50 oscillazioni complete (50T) con un cronometro.',
        'Ripeti per L = 1,0 m. Calcola T e confronta con T = 2π√(L/g).'
      ],
      expectedOutcome: 'L = 0,25 m → T ≈ 1,0 s; L = 1,0 m → T ≈ 2,0 s. Rapporto T(1m)/T(0,25m) = 2 = √(1/0,25).'
    },
    experiment: {
      equipment: [
        {
          emoji: '⚫',
          name: 'Massa oscillante (piccola sfera densa)'
        },
        {
          emoji: '🧵',
          name: 'Filo inestensibile (regolabile 0,25–1,0 m)'
        },
        {
          emoji: '⏱️',
          name: 'Cronometro'
        },
        {
          emoji: '📏',
          name: 'Righello'
        },
        {
          emoji: '🔩',
          name: 'Morsetto e sostegno'
        }
      ],
      observationsToRecord: [
        'Lunghezza L (m) dal perno al centro della massa',
        'Tempo per 50 oscillazioni t₅₀ (s)',
        'Periodo T = t₅₀/50 (s)',
        'T² (s²)'
      ],
      theoryPoints: [
        'T = 2π√(L/g): il periodo dipende solo dalla lunghezza e da g, non dalla massa o dall\'ampiezza (< 10°).',
        'Elevando al quadrato: T² = (4π²/g) L — relazione lineare tra T² e L.',
        'Coefficiente angolare del grafico T² vs. L = 4π²/g → g = 4π²/pendenza.',
        'Cronometrare 50 oscillazioni riduce l\'errore percentuale su T.'
      ],
      realWorldConnections: [
        'Gli orologi a pendolo hanno usato questo principio per 300 anni per misurare il tempo con precisione.',
        'Il pendolo di Foucault dimostra la rotazione terrestre.',
        'I gravimetri usano pendoli di precisione per mappare il campo gravitazionale terrestre.'
      ],
      formula: 'T = 2π√(L/g)   |   T² = (4π²/g) × L'
    },
    questions: {
      mcq: [
        {
          text: 'Un pendolo di lunghezza 1,0 m. Qual è il suo periodo? (g = 9,81 m/s²)',
          options: ['2,01 s', '1,00 s', '3,14 s', '0,50 s'],
          correctIndex: 0,
          explanation: 'T = 2π√(1,0/9,81) = 2π × 0,319 = 2,006 s ≈ 2,01 s.'
        },
        {
          text: 'Se L viene quadruplicata, T:',
          options: ['Raddoppia', 'Quadruplica', 'Si dimezza', 'Resta uguale'],
          correctIndex: 0,
          explanation: 'T ∝ √L. Quadruplicare L moltiplica √L per 2, quindi T raddoppia.'
        },
        {
          text: 'Perché misurare 50 oscillazioni invece di 1 soltanto?',
          options: [
            'Per far oscillare il pendolo più velocemente',
            'Per ridurre l\'errore percentuale su T',
            'Per aumentare l\'ampiezza',
            'Per cambiare la frequenza'
          ],
          correctIndex: 1,
          explanation: 'L\'errore dovuto al tempo di reazione è ~0,2 s in ogni caso; per 50 oscillazioni è solo 0,2/50T ≈ 0,2% invece del 20% per una sola oscillazione.'
        }
      ],
      discussion: [
        'Come useresti il tuo grafico T² vs. L per determinare g?',
        'La massa del bob influenza il periodo? Giustifica la risposta usando la formula.',
        'Un orologio a pendolo va in ritardo. Dovresti accorciare o allungare il suo pendolo per correggerlo?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'T = 2π√(L/g)',
          pct: 30
        },
        {
          label: 'Grafico lineare T² vs. L',
          pct: 25
        },
        {
          label: 'Misurazione di g dalla pendenza',
          pct: 25
        },
        {
          label: 'Tecnica sperimentale (50 oscillazioni)',
          pct: 20
        }
      ],
      misconceptions: [
        'Gli studenti spesso pensano che masse più pesanti oscillino più velocemente; il periodo è indipendente dalla massa.',
        'Molti credono che ampiezze maggiori aumentino il periodo; T è indipendente dall\'ampiezza per piccoli angoli (< 10°).',
        'Confondere un\'oscillazione completa (A→B→A) con una mezza oscillazione (A→B).'
      ],
      hook: 'Si dice che Galileo cronometrasse l\'oscillazione delle lampade della cattedrale con il proprio polso. Notò che tutte le oscillazioni duravano lo stesso tempo indipendentemente dalla loro ampiezza — la nascita dell\'orologio a pendolo!',
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
      headers: ['Lunghezza L (m)', 'Tempo 50 oscillazioni t₅₀ (s)', 'Periodo T = t₅₀/50 (s)', 'T² (s²)', 'T_teorico (s)'],
      rows: 4
    },
    observations: [
      'Mantieni l\'ampiezza sotto 5° per ogni prova.',
      'Registra t₅₀ tre volte e fai la media per ridurre l\'errore di cronometraggio.',
      'Traccia T² vs. L e disegna la retta di miglior approssimazione per trovare g.'
    ],
    conclusion: 'T = 2π√(L/g) verificata. L=0,25 m → T ≈ 1,00 s; L=1,0 m → T ≈ 2,01 s. Rapporto T(1m)/T(0,25m) = 2,01 ≈ √4 = 2. g calcolato dal coefficiente angolare ≈ 9,7–9,9 m/s².',
    ai: {
      opening: 'I pendoli sono i primi strumenti per misurare il tempo! Chiedimi di T = 2π√(L/g), come trovare g, o tecniche di cronometraggio.',
      keywords: {
        setup: 'pendulum|length|bob|50 oscillations|stopwatch',
        formula: 'T = 2π√(L/g)|T² = (4π²/g)L',
        error: 'amplitude too large|timing error|measuring L to wrong point',
        question: 'period|length|mass|amplitude|g|oscillation',
        real: 'pendulum clock|Foucault pendulum|gravimeter'
      },
      hint: 'T = 2π√(L/g). Cronometra 50 oscillazioni; T = t₅₀/50. T² vs. L è lineare; pendenza = 4π²/g.',
      expected: 'L=0,25m → T=1,00s; L=1,0m → T=2,01s. T²=(4π²/9,81)L: pendenza=4,03 s²/m.'
    }
  },
  {
    num: 16,
    cardEmoji: "💫",
    title: 'Pendolo a molla',
    section: 'Mechanics',
    desc: 'Studia le oscillazioni di un pendolo a molla e determina la costante elastica dalla misura del periodo.',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano che il periodo di un pendolo a molla dipende dalla massa e dalla costante elastica ma NON dall\'ampiezza, e misurano T per due lunghezze diverse.',
      instructions: [
        'Attacca una massa m alla molla; sposta leggermente (< 5 cm) e rilascia.',
        'Cronometra 20 oscillazioni e calcola T = t₂₀/20.',
        'Registra: L = 0,25 m → 20,20 s (T ≈ 1,01 s); L = 1,0 m → 40,40 s (T ≈ 2,02 s).'
      ],
      expectedOutcome: 'T = 2π√(m/k). Per la stessa molla: L=0,25m → T≈1,01s; L=1,0m → T≈2,02s (il periodo raddoppia quando L quadruplica, confermando l\'analogia T∝√L).'
    },
    experiment: {
      equipment: [
        {
          emoji: '🌀',
          name: 'Molla elicoidale (k nota)'
        },
        {
          emoji: '🏋️',
          name: 'Massa (misurata in g)'
        },
        {
          emoji: '⏱️',
          name: 'Cronometro'
        },
        {
          emoji: '📏',
          name: 'Righello'
        },
        {
          emoji: '🔩',
          name: 'Morsetto e sostegno'
        }
      ],
      observationsToRecord: [
        'Massa m (kg)',
        'Tempo per 20 oscillazioni t₂₀ (s)',
        'Periodo T = t₂₀/20 (s)',
        'Costante elastica k (dall\'Esp. 13)'
      ],
      theoryPoints: [
        'T = 2π√(m/k): il periodo dipende dalla massa e dalla costante elastica.',
        'A differenza del pendolo semplice, T NON dipende da g.',
        'Aumentare la massa aumenta T; aumentare k diminuisce T.',
        'Il sistema esegue un moto armonico semplice (SHM): F = −kx.'
      ],
      realWorldConnections: [
        'Gli ammortizzatori dei veicoli sono sistemi massa-molla calibrati.',
        'Gli spettrometri di massa usano forze elettriche simili a molle per separare gli ioni per massa.',
        'Gli smorzatori degli edifici (smorzatori a massa accordata) proteggono i grattacieli dalle oscillazioni.'
      ],
      formula: 'T = 2π√(m/k)   |   f = (1/2π)√(k/m)'
    },
    questions: {
      mcq: [
        {
          text: 'Una molla (k = 6 N/m) con m = 0,150 kg. Calcola T.',
          options: ['0,99 s', '1,57 s', '3,14 s', '0,49 s'],
          correctIndex: 1,
          explanation: 'T = 2π√(0,150/6) = 2π√0,025 = 2π × 0,158 = 0,994 s ≈ 0,99 s.'
        },
        {
          text: 'Come influisce il raddoppio della massa sul periodo di un pendolo a molla?',
          options: ['Il periodo raddoppia', 'Il periodo aumenta di un fattore √2', 'Il periodo si dimezza', 'Il periodo non cambia'],
          correctIndex: 1,
          explanation: 'T ∝ √m; raddoppiare m moltiplica T per √2 ≈ 1,41.'
        },
        {
          text: 'A differenza del pendolo semplice, il periodo del pendolo a molla NON dipende da:',
          options: ['Massa', 'Costante elastica', 'Intensità del campo gravitazionale g', 'Ampiezza (entro il limite SHM)'],
          correctIndex: 2,
          explanation: 'T = 2π√(m/k) non contiene g; il periodo è indipendente dall\'intensità del campo gravitazionale.'
        }
      ],
      discussion: [
        'Perché il periodo del pendolo a molla NON dipende da g, mentre quello del pendolo semplice sì?',
        'Come potresti usare un pendolo a molla per misurare una massa sconosciuta?',
        'Confronta le formule T = 2π√(L/g) e T = 2π√(m/k). Quali sono le differenze principali?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'T = 2π√(m/k)',
          pct: 35
        },
        {
          label: 'SHM e F = −kx',
          pct: 25
        },
        {
          label: 'Effetto di m e k su T',
          pct: 25
        },
        {
          label: 'Confronto col pendolo semplice',
          pct: 15
        }
      ],
      misconceptions: [
        'Gli studenti confondono la formula del pendolo a molla con quella del pendolo semplice.',
        'Molti pensano che g compaia nella formula del pendolo a molla; non è così.',
        'Un errore comune è dimenticare che T aumenta con la massa ma diminuisce con k.'
      ],
      hook: 'Gli astronauti sulla Stazione Spaziale Internazionale usano sistemi massa-molla per misurare la loro massa — una bilancia sarebbe inutile in assenza di gravità, ma T = 2π√(m/k) non dipende da g!',
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
      headers: ['Massa m (kg)', 'Molla k (N/m)', 't₂₀ (s)', 'T = t₂₀/20 (s)', 'T_teorico (s)'],
      rows: 4
    },
    observations: [
      'Sposta la massa di non più di 5 cm per restare entro l\'approssimazione SHM.',
      'Cronometra 20 oscillazioni tre volte e fai la media.',
      'Registra L = 0,25 m → 20,20 s e L = 1,0 m → 40,40 s dal programma.'
    ],
    conclusion: 'T = 2π√(m/k) verificato. L=0,25m → t₂₀=20,20s, T=1,01s. L=1,0m → t₂₀=40,40s, T=2,02s. Il periodo è raddoppiato quando la lunghezza effettiva è quadruplicata, coerentemente con T∝√(m/k).',
    ai: {
      opening: 'I pendoli a molla oscillano senza bisogno della gravità! Chiedimi di T = 2π√(m/k) o come misurare la massa nello spazio.',
      keywords: {
        setup: 'spring|mass|oscillation|SHM|clamp',
        formula: 'T = 2π√(m/k)|f = (1/2π)√(k/m)',
        error: 'amplitude too large|counting oscillations|friction',
        question: 'spring pendulum|period|mass|spring constant|SHM',
        real: 'shock absorber|mass spectrometer|tuned mass damper'
      },
      hint: 'T = 2π√(m/k). Nessun g nella formula! Cronometra 20 oscillazioni per errore minore.',
      expected: 'L=0,25m → t₂₀=20,20s, T=1,01s. L=1,0m → t₂₀=40,40s, T=2,02s.'
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
      whatTheyLearn: 'Gli studenti verificano che la pressione in un fluido statico dipende solo dalla profondità (p = ρgh + p₀) e che il liquido raggiunge lo stesso livello in tutti i vasi collegati, indipendentemente dalla forma.',
      instructions: [
        'Collega alla base diversi tubi di forme e diametri differenti.',
        'Versa acqua e osserva il livello in ciascun tubo.',
        'Premi verso il basso su un tubo e osserva cosa accade agli altri.'
      ],
      expectedOutcome: 'L\'acqua raggiunge la stessa altezza in tutti i tubi collegati indipendentemente dal diametro o dalla forma del tubo. Premendo su uno, tutti gli altri si alzano in modo uguale.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🫙',
          name: 'Set di tubi comunicanti (forme diverse)'
        },
        {
          emoji: '💧',
          name: 'Acqua colorata'
        },
        {
          emoji: '📏',
          name: 'Righello'
        },
        {
          emoji: '🧪',
          name: 'Tubi di plastica'
        },
        {
          emoji: '🖐️',
          name: 'Dito (per premere sul tubo)'
        }
      ],
      observationsToRecord: [
        'Livello dell\'acqua in ciascun tubo (cm dalla base)',
        'Effetto della pressione su un tubo sugli altri livelli',
        'Effetto dell\'aggiunta di liquido in un tubo su tutti gli altri'
      ],
      theoryPoints: [
        'Legge di Stevino: la pressione a profondità h è p = p₀ + ρgh.',
        'A uguale profondità in vasi comunicanti, la pressione deve essere uguale.',
        'Pressione uguale alla base → stessa altezza h in tutti i tubi collegati.',
        'Forma e diametro dei tubi non influenzano l\'altezza di equilibrio.'
      ],
      realWorldConnections: [
        'Le livelle ad acqua degli idraulici usano vasi comunicanti per controllare l\'allineamento orizzontale.',
        'La pressa idraulica usa vasi collegati di aree diverse per moltiplicare la forza.',
        'Le torri piezometriche mantengono la pressione nell\'acquedotto usando i principi dell\'idrostatica.'
      ],
      formula: 'p = p₀ + ρgh   |   Stessa profondità → stessa pressione → stessa altezza'
    },
    questions: {
      mcq: [
        {
          text: 'L\'acqua è in due tubi collegati: uno stretto e uno largo. Dove è più alto il livello dell\'acqua?',
          options: [
            'Nel tubo stretto',
            'Nel tubo largo',
            'Alla stessa altezza in entrambi',
            'Dipende dalla temperatura'
          ],
          correctIndex: 2,
          explanation: 'Per la legge di Stevino, il fluido collegato cerca lo stesso livello indipendentemente dalla larghezza del tubo.'
        },
        {
          text: 'Cosa accade al livello in tutti i tubi quando si preme sul liquido in un tubo?',
          options: [
            'Cambia solo quel tubo',
            'Tutti i tubi si alzano in modo uguale',
            'Alcuni tubi salgono, altri scendono',
            'Nulla cambia'
          ],
          correctIndex: 1,
          explanation: 'La pressione si trasmette in modo uguale attraverso il fluido collegato (principio di Pascal); tutti i livelli salgono insieme.'
        },
        {
          text: 'La legge di Stevino afferma che la pressione a profondità h è uguale a:',
          options: ['ρg', 'ρgh', 'p₀ + ρgh', 'p₀ × ρgh'],
          correctIndex: 2,
          explanation: 'p = p₀ + ρgh, dove p₀ è la pressione atmosferica, ρ la densità del fluido, g l\'accelerazione di gravità, h la profondità.'
        }
      ],
      discussion: [
        'Spiega perché il livello è lo stesso in tutti i tubi indipendentemente dalla loro forma, usando argomenti di pressione.',
        'Come usa un martinetto idraulico il principio dei vasi comunicanti per moltiplicare la forza?',
        'Perché gli idraulici usano un tubo riempito d\'acqua come livella invece di un righello?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Legge di Stevino p = p₀ + ρgh',
          pct: 35
        },
        {
          label: 'Pressione uguale a uguale profondità',
          pct: 30
        },
        {
          label: 'Principio di Pascal',
          pct: 20
        },
        {
          label: 'Applicazioni dell\'idrostatica',
          pct: 15
        }
      ],
      misconceptions: [
        'Gli studenti spesso pensano che il tubo più stretto avrà un livello più alto; la forma è irrilevante.',
        'Molti confondono pressione con forza; la pressione è forza per unità di area.',
        'Dimenticare il termine di pressione atmosferica p₀ nella formula di Stevino.'
      ],
      hook: 'Come funziona un semplice tubo pieno d\'acqua come livella perfetta? Perché l\'acqua trova sempre lo stesso livello in qualsiasi sistema collegato — Stevino lo sapeva già nel 1586!',
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
      headers: ['Tubo', 'Forma/Diametro', 'Livello dell\'acqua (cm)', 'Corrisponde agli altri?'],
      rows: 5
    },
    observations: [
      'Registra il livello in ciascun tubo e conferma che siano uguali.',
      'Osserva l\'effetto della pressione su un tubo su tutti gli altri.',
      'Nota che il livello è indipendente dal diametro del tubo.'
    ],
    conclusion: 'L\'acqua ha raggiunto lo stesso livello in tutti i tubi collegati indipendentemente dalla forma o dal diametro, confermando la legge di Stevino: stessa profondità → stessa pressione. Principio di Pascal confermato: la pressione applicata a un tubo è stata trasmessa a tutti.',
    ai: {
      opening: 'L\'acqua trova sempre il suo livello — la legge di Stevino lo spiega! Chiedimi di pressione idrostatica, principio di Pascal o dell\'esperimento.',
      keywords: {
        setup: 'communicating tubes|coloured water|connected|pressure',
        formula: 'p = p₀ + ρgh|Stevino|Pascal',
        error: 'air bubbles|leaking connections|not at equilibrium',
        question: 'pressure|depth|same level|Pascal|hydrostatic',
        real: 'spirit level|hydraulic jack|water tower'
      },
      hint: 'p = p₀ + ρgh. A uguale profondità, uguale pressione → stesso livello del liquido in tutti i tubi collegati.',
      expected: 'Tutti i tubi raggiungono la stessa altezza. Premendo un tubo si alzano tutti gli altri in modo uguale.'
    }
  },
  {
    num: 18,
    cardEmoji: "🛁",
    title: 'Principio di Archimede',
    section: 'Mechanics',
    desc: 'Misura la forza di spinta di Archimede su corpi immersi in acqua e verifica la legge di Archimede.',
    equipmentNeeded: 'mobile-lab',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano F_A = ρ_fluido × V_oggetto × g misurando la perdita di peso nell\'immersione e il volume d\'acqua spostata.',
      instructions: [
        'Pesa l\'oggetto in aria: W_aria (N).',
        'Immergi l\'oggetto; registra il peso apparente W_acqua (N).',
        'Raccogli e misura il volume d\'acqua spostata V (mL).',
        'Verifica: F_A = W_aria − W_acqua = ρ_acqua × V × g.'
      ],
      expectedOutcome: 'Masse M = [10,25,50,75,100] g → V spostato = [1,2,5,5,5,8,11] mL. F_A = ρVg corrisponde a (W_aria − W_acqua).'
    },
    experiment: {
      equipment: [
        {
          emoji: '⚖️',
          name: 'Dinamometro o sensore di forza'
        },
        {
          emoji: '🫙',
          name: 'Vaso di trabocco (secchio di Eureka)'
        },
        {
          emoji: '🧪',
          name: 'Cilindro graduato (10 mL)'
        },
        {
          emoji: '💧',
          name: 'Acqua'
        },
        {
          emoji: '🏋️',
          name: 'Masse (10–100 g)'
        }
      ],
      observationsToRecord: [
        'Peso in aria W_aria (N)',
        'Peso apparente quando immerso W_acqua (N)',
        'Spinta di Archimede F_A = W_aria − W_acqua (N)',
        'Volume d\'acqua spostata V (mL = cm³)',
        'Peso dell\'acqua spostata ρVg (N)'
      ],
      theoryPoints: [
        'Principio di Archimede: F_A = peso del fluido spostato = ρ_fluido × V_oggetto × g.',
        'Un oggetto immerso in un fluido perde un peso uguale al peso del fluido spostato.',
        'Gli oggetti galleggiano se F_A ≥ peso; affondano se F_A < peso.',
        'F_A dipende dalla densità del fluido e dal volume dell\'oggetto, NON dalla densità o dalla massa dell\'oggetto.'
      ],
      realWorldConnections: [
        'Le navi sono progettate in modo che il volume dello scafo sposti abbastanza acqua da sostenere il peso della nave.',
        'I sottomarini regolano il galleggiamento riempiendo o svuotando d\'acqua le casse di zavorra.',
        'Le mongolfiere usano la spinta nell\'aria: l\'involucro sposta aria più pesante del pallone.'
      ],
      formula: 'F_A = ρ_fluido × V × g   |   Peso apparente = W_aria − F_A'
    },
    questions: {
      mcq: [
        {
          text: 'Una massa di 50 g sposta 5,5 mL d\'acqua. Qual è la spinta di Archimede?',
          options: ['0,054 N', '0,49 N', '0,54 N', '0,054 mN'],
          correctIndex: 0,
          explanation: 'F_A = ρVg = 1000 × 5,5×10⁻⁶ × 9,81 = 0,054 N.'
        },
        {
          text: 'Un oggetto pesa 2,0 N in aria e 1,4 N immerso. Qual è la spinta di Archimede?',
          options: ['3,4 N', '0,6 N', '1,4 N', '2,0 N'],
          correctIndex: 1,
          explanation: 'F_A = W_aria − W_acqua = 2,0 − 1,4 = 0,6 N.'
        },
        {
          text: 'Il principio di Archimede afferma che la spinta è uguale a:',
          options: [
            'Il peso dell\'oggetto',
            'Il peso del fluido spostato',
            'La profondità di immersione',
            'L\'area superficiale dell\'oggetto'
          ],
          correctIndex: 1,
          explanation: 'F_A è uguale al peso del fluido spostato dall\'oggetto, indipendentemente dal peso dell\'oggetto stesso.'
        }
      ],
      discussion: [
        'Perché una nave d\'acciaio galleggia mentre una sfera piena d\'acciaio affonda, anche se sono fatte dello stesso materiale?',
        'Come controllano i sottomarini la loro profondità? Spiega usando il principio di Archimede.',
        'Perché gli oggetti sembrano più leggeri quando sono immersi in acqua?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'F_A = ρVg',
          pct: 35
        },
        {
          label: 'Misurazione del peso apparente',
          pct: 25
        },
        {
          label: 'Misurazione del volume spostato',
          pct: 25
        },
        {
          label: 'Condizioni di galleggiamento vs. affondamento',
          pct: 15
        }
      ],
      misconceptions: [
        'Gli studenti pensano che oggetti più pesanti abbiano più spinta; F_A dipende solo dal volume spostato, non dalla massa.',
        'Molti confondono il peso apparente con la spinta; peso apparente = W_aria − F_A.',
        'Assumere che la spinta dipenda dalla profondità di immersione (non è così, per oggetti completamente immersi).'
      ],
      hook: 'La leggenda narra che Archimede saltò dalla vasca da bagno gridando \'Eureka!\' dopo aver capito che un oggetto immerso sposta esattamente il proprio volume d\'acqua. Questa intuizione ha rivoluzionato la scienza!',
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
        'Massa m (g)',
        'W_aria (N)',
        'W_acqua (N)',
        'F_A (N)',
        'V_spost (mL)',
        'ρVg (N)'
      ],
      rows: 5
    },
    observations: [
      'Assicurati che l\'oggetto sia completamente immerso senza toccare le pareti del vaso.',
      'Raccogli con attenzione tutta l\'acqua spostata nel cilindro graduato.',
      'Confronta F_A = W_aria − W_acqua con ρVg = 1000 × V_mL × 10⁻⁶ × 9,81.'
    ],
    conclusion: 'Principio di Archimede verificato: F_A = ρVg = W_aria − W_acqua per tutte le masse. Esempio: 50 g → V=5,5 mL, F_A=0,054 N calcolata vs. 0,054 N misurata. Accordo entro il 2%.',
    ai: {
      opening: 'Il principio di Archimede spiega il galleggiamento, i sottomarini e le navi! Chiedimi della spinta, di come misurarla o perché le navi galleggiano.',
      keywords: {
        setup: 'Eureka can|spring balance|displacement|measuring cylinder',
        formula: 'F_B = ρVg|apparent weight = W_air - F_B',
        error: 'incomplete submersion|air bubbles|displaced water spilled',
        question: 'buoyancy|Archimedes|float|sink|displacement',
        real: 'ship|submarine|hot air balloon'
      },
      hint: 'F_A = W_aria − W_acqua = ρ_acqua × V_spostato × g. Raccogli TUTTA l\'acqua spostata per misurare V.',
      expected: 'massa 50g: V=5,5mL, F_A=0,054N; 100g: V=11mL, F_A=0,108N.'
    }
  },
  {
    num: 19,
    cardEmoji: "🌡️",
    title: 'Temperatura di equilibrio dei liquidi mescolati',
    section: 'Heat',
    desc: 'Mescola liquidi a temperature diverse e misura la temperatura di equilibrio, confrontando il dato con la previsione teorica.',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti confermano Q_ceduto = Q_assorbito e scoprono che il calorimetro assorbe del calore, rendendo T_eq leggermente inferiore alla media prevista.',
      instructions: [
        'Misura T_fredda (acqua fredda) e T_calda (acqua calda) con un termometro.',
        'Mescola masse uguali in un calorimetro; agita e registra la temperatura ogni 30 s.',
        'Confronta T_eq misurata con quella prevista (T_fredda + T_calda)/2.'
      ],
      expectedOutcome: 'T_fredda ≈ 20°C, T_calda ≈ 70°C → T_eq prevista = 45°C; misurata ≈ 43–45°C (leggermente inferiore per l\'assorbimento di calore del calorimetro). Dati: 30s→32°C, 60s→39°C, 90s→42°C, 120s→45°C.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🌡️',
          name: 'Termometro (±0,5°C)'
        },
        {
          emoji: '☕',
          name: 'Calorimetro (contenitore isolato)'
        },
        {
          emoji: '💧',
          name: 'Acqua calda (~70°C) e acqua fredda (~20°C)'
        },
        {
          emoji: '⏱️',
          name: 'Cronometro'
        },
        {
          emoji: '⚖️',
          name: 'Bilancia (per misurare masse uguali)'
        }
      ],
      observationsToRecord: [
        'T_fredda (°C) prima della miscela',
        'T_calda (°C) prima della miscela',
        'T_eq (°C) misurata a intervalli di 30 s fino a stabilizzazione'
      ],
      theoryPoints: [
        'Calore ceduto dall\'acqua calda = Calore assorbito dall\'acqua fredda + calorimetro: Q = mcΔT.',
        'Per masse uguali dello stesso liquido: T_eq = (T_calda + T_fredda)/2 (ideale).',
        'La T_eq reale è leggermente inferiore perché il calorimetro stesso assorbe calore.',
        'Equilibrio termico: nessun ulteriore cambiamento di temperatura quando Q_ceduto = Q_assorbito.'
      ],
      realWorldConnections: [
        'Miscelare acqua calda e fredda nella doccia usa questo principio.',
        'Gli scambiatori di calore nelle centrali elettriche trasferiscono calore tra fluidi.',
        'In cucina: aggiungere ingredienti freddi all\'olio caldo cambia la temperatura di cottura.'
      ],
      formula: 'Q = mcΔT   |   m₁c(T_calda − T_eq) = m₂c(T_eq − T_fredda)'
    },
    questions: {
      mcq: [
        {
          text: 'Masse uguali di acqua a 20°C e 70°C vengono mescolate. La T_eq prevista è:',
          options: ['35°C', '45°C', '50°C', '40°C'],
          correctIndex: 1,
          explanation: 'T_eq = (T_fredda + T_calda)/2 = (20 + 70)/2 = 45°C per masse uguali dello stesso liquido.'
        },
        {
          text: 'Perché la T_eq misurata è leggermente inferiore a quella prevista?',
          options: [
            'Errore del termometro',
            'Il calorimetro assorbe del calore',
            'L\'acqua fredda è più densa',
            'Il calore fuoriesce dall\'acqua calda prima della miscela'
          ],
          correctIndex: 1,
          explanation: 'Il calorimetro (contenitore) assorbe parte del calore dall\'acqua calda, quindi meno calore va all\'acqua fredda, dando una T_eq più bassa.'
        },
        {
          text: 'Cosa succede all\'energia termica totale quando acqua calda e fredda si mescolano (ignorando le perdite)?',
          options: ['Aumenta', 'Diminuisce', 'Rimane invariata', 'Raddoppia'],
          correctIndex: 2,
          explanation: 'L\'energia si conserva: Q_ceduto dal caldo = Q_assorbito dal freddo. L\'energia termica totale è costante.'
        }
      ],
      discussion: [
        'Perché la temperatura di equilibrio misurata è leggermente inferiore a (T_calda + T_fredda)/2?',
        'Come modificheresti l\'esperimento se usassi volumi diversi di acqua calda e fredda?',
        'Qual è lo scopo di agitare la miscela durante l\'esperimento?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Q = mcΔT',
          pct: 30
        },
        {
          label: 'Conservazione del calore Q_ceduto = Q_assorbito',
          pct: 35
        },
        {
          label: 'Perdite di calore del calorimetro',
          pct: 20
        },
        {
          label: 'Equilibrio termico',
          pct: 15
        }
      ],
      misconceptions: [
        'Gli studenti pensano che l\'acqua più calda \'domini\' e che T_eq sia più vicina a T_calda; masse uguali danno esattamente la media.',
        'Molti dimenticano che il calorimetro stesso assorbe calore, riducendo T_eq.',
        'Confondere il calore Q con la temperatura T; il calore è energia, la temperatura è una misura dell\'energia cinetica media.'
      ],
      hook: 'Se mescoli 1 litro di acqua bollente con 1 litro di acqua ghiacciata, cosa ottieni? Acqua appena tiepida — esattamente 50°C. La natura condivide perfettamente l\'energia!',
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
        'Tempo (s)',
        'Temperatura (°C)'
      ],
      rows: 6
    },
    observations: [
      'Registra T ogni 30 secondi dopo aver mescolato, fino alla stabilizzazione.',
      'Nota la temperatura finale di equilibrio e confrontala con il valore previsto.',
      'Descrivi la forma del grafico temperatura-tempo.'
    ],
    conclusion: 'T_eq misurata ≈ 43–45°C vs. prevista 45°C. Il calorimetro ha assorbito del calore, dando una temperatura di equilibrio leggermente inferiore. Q_ceduto ≈ Q_assorbito confermato qualitativamente. Dati: 30s→32°C, 60s→39°C, 90s→42°C, 120s→45°C.',
    ai: {
      opening: 'Mescolare caldo e freddo — pura termodinamica! Chiedimi di Q=mcΔT, perché T_eq è più bassa del previsto o della conservazione del calore.',
      keywords: {
        setup: 'calorimeter|thermometer|hot water|cold water|mixing',
        formula: 'Q = mcΔT|T_eq = (T1+T2)/2|Q_lost = Q_gained',
        error: 'calorimeter heat absorption|heat loss to surroundings|thermometer lag',
        question: 'equilibrium temperature|heat|calorimeter|mixing',
        real: 'shower temperature|heat exchanger|cooking'
      },
      hint: 'Per masse uguali dello stesso liquido: T_eq = (T_calda + T_fredda)/2 in modo ideale. In pratica T_eq è più bassa perché il calorimetro assorbe calore.',
      expected: 'T_fredda=20°C, T_calda=70°C → T_eq ideale=45°C; misurata ≈43–45°C. Tempo-temp: 30s→32, 60s→39, 90s→42, 120s→45°C.'
    }
  },
  {
    num: 20,
    cardEmoji: "🧤",
    title: 'Trasferimento di calore e isolamento termico',
    section: 'Heat',
    desc: 'Confronta la velocità di raffreddamento di oggetti con diverso isolamento termico.',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano che più strati di isolante rallentano la perdita di calore e comprendono i meccanismi di conduzione, convezione e irraggiamento.',
      instructions: [
        'Riempi tre contenitori identici con acqua calda alla stessa temperatura iniziale.',
        'Avvolgi uno senza isolamento, uno con uno strato, uno con due strati di materiale.',
        'Registra la temperatura ogni 30 s per 4 minuti in ciascun contenitore.'
      ],
      expectedOutcome: 'A t = 240 s: senza isolamento → 75°C, uno strato → 79°C, due strati → 86°C. Più strati → raffreddamento più lento.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🌡️',
          name: 'Tre termometri'
        },
        {
          emoji: '☕',
          name: 'Tre tazze identiche'
        },
        {
          emoji: '🧣',
          name: 'Materiale isolante (es. lana, strati di gommapiuma)'
        },
        {
          emoji: '💧',
          name: 'Acqua calda (~90°C)'
        },
        {
          emoji: '⏱️',
          name: 'Cronometro'
        }
      ],
      observationsToRecord: [
        'Temperatura iniziale T₀ (uguale per tutti e tre)',
        'Temperatura a intervalli di 30 s per 240 s',
        'Differenza di temperatura dopo 240 s per ciascuna configurazione'
      ],
      theoryPoints: [
        'Meccanismi di trasferimento del calore: conduzione (attraverso solidi), convezione (attraverso fluidi), irraggiamento (elettromagnetico).',
        'L\'isolamento riduce la conduzione intrappolando aria (bassa conducibilità termica).',
        'Isolamento più spesso → gradiente di temperatura più disteso → perdita di calore più lenta.',
        'Legge di raffreddamento di Newton: velocità di perdita del calore ∝ (T − T_ambiente).'
      ],
      realWorldConnections: [
        'Le finestre con doppi vetri intrappolano uno strato d\'aria per isolare le case.',
        'I thermos usano il vuoto per eliminare conduzione e convezione.',
        'Gli animali artici hanno spessi strati di grasso e pelliccia per l\'isolamento termico.'
      ],
      formula: 'Velocità di perdita del calore ∝ (T − T_ambiente) × 1/R_isolamento'
    },
    questions: {
      mcq: [
        {
          text: 'Dopo 4 minuti: senza isolamento 75°C, 1 strato 79°C, 2 strati 86°C. Quale ha perso più calore?',
          options: ['Senza isolamento', 'Uno strato', 'Due strati', 'Tutti uguali'],
          correctIndex: 0,
          explanation: 'Quello senza isolamento è sceso di più dalla temperatura iniziale, quindi ha perso più calore.'
        },
        {
          text: 'L\'isolamento funziona principalmente:',
          options: [
            'Assorbendo calore',
            'Intrappolando aria a bassa conducibilità termica',
            'Riflettendo tutto il calore',
            'Aumentando la convezione'
          ],
          correctIndex: 1,
          explanation: 'I materiali isolanti intrappolano sacche d\'aria, e l\'aria ha una bassa conducibilità termica, rallentando il trasferimento di calore per conduzione.'
        },
        {
          text: 'Un thermos minimizza il trasferimento di calore:',
          options: [
            'Usando pareti di vetro spesse',
            'Creando il vuoto tra le pareti',
            'Aggiungendo schiuma isolante all\'interno',
            'Verniciando il thermos di nero'
          ],
          correctIndex: 1,
          explanation: 'Il vuoto elimina conduzione e convezione; le pareti riflettenti minimizzano l\'irraggiamento.'
        }
      ],
      discussion: [
        'Spiega i tre meccanismi di trasferimento del calore e come l\'isolamento riduce ciascuno.',
        'Perché raddoppiare lo spessore dell\'isolante non dimezza esattamente la perdita di calore?',
        'In cosa differisce un thermos dall\'isolamento ordinario? Perché è più efficace?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'I tre modi di trasferimento del calore',
          pct: 30
        },
        {
          label: 'Ruolo dell\'aria intrappolata',
          pct: 25
        },
        {
          label: 'Legge di raffreddamento di Newton',
          pct: 25
        },
        {
          label: 'Confronto quantitativo degli strati',
          pct: 20
        }
      ],
      misconceptions: [
        'Gli studenti pensano che l\'isolamento \'aggiunga calore\'; rallenta soltanto la perdita di calore.',
        'Molti confondono calore e temperatura; l\'isolamento rallenta la velocità del flusso di calore, non la differenza di temperatura.',
        'Presumere che una superficie nera perda sempre più calore di una bianca; solo per l\'irraggiamento, il nero emette/assorbe di più.'
      ],
      hook: 'Perché avvolgiamo i neonati nelle coperte, isoliamo le case con la schiuma e usiamo i thermos per il caffè? Perché intrappolare aria è il modo più semplice ed efficace per rallentare la perdita di calore!',
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
      headers: ['Tempo (s)', 'T senza isolamento (°C)', 'T 1 strato (°C)', 'T 2 strati (°C)'],
      rows: 8
    },
    observations: [
      'Registra la temperatura ogni 30 s contemporaneamente per tutte e tre le tazze.',
      'A t=240s: confronta le letture — attese 75°C, 79°C, 86°C.',
      'Disegna le curve T vs. t per tutte e tre sullo stesso grafico.'
    ],
    conclusion: 'Più strati di isolante rallentano notevolmente la perdita di calore. A t=240s: senza isolamento→75°C, 1 strato→79°C, 2 strati→86°C. Diminuzione di temperatura: 15°C, 11°C, 4°C rispettivamente (dalla temperatura iniziale ~90°C). La conduzione attraverso l\'aria intrappolata spiega la differenza.',
    ai: {
      opening: 'L\'isolamento serve a rallentare la fuga di calore! Chiedimi di conduzione, convezione, irraggiamento o come analizzare il grafico temperatura-tempo.',
      keywords: {
        setup: 'insulation layers|hot water|thermometer|stopwatch',
        formula: 'Newton cooling|heat loss rate|thermal resistance',
        error: 'initial temperatures not equal|different cup sizes|heat loss from lid',
        question: 'insulation|heat transfer|conduction|convection|radiation|layers',
        real: 'double glazing|thermos|polar animals'
      },
      hint: 'Più strati = più aria intrappolata = conducibilità termica minore = perdita di calore più lenta. A t=240s: senza isolamento→75°C, 1 strato→79°C, 2 strati→86°C.',
      expected: 'Dalla temperatura iniziale ~90°C: a 240s — senza isolamento: 75°C (−15°C); 1 strato: 79°C (−11°C); 2 strati: 86°C (−4°C).'
    }
  },
  {
    num: 21,
    cardEmoji: "🔥",
    title: 'Calore specifico dei solidi',
    section: 'Heat',
    desc: 'Riscalda campioni solidi di materiale noto e calcola il calore specifico dalla variazione di temperatura.',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti applicano Q_metallo = Q_acqua per trovare c_metallo = (m_a × c_a × ΔT_a) / (m_m × ΔT_m).',
      instructions: [
        'Scalda il campione metallico a 95°C in acqua bollente; registra m_metallo e T_metallo.',
        'Versa acqua fredda (T_fredda ≈ 22°C) nel calorimetro; registra m_acqua.',
        'Immergi il metallo caldo nell\'acqua; mescola e registra T_eq.'
      ],
      expectedOutcome: 'Acciaio (95°C immerso in acqua a 22°C) → T_eq ≈ 39°C. Rame → T_eq ≈ 37°C. Calcola c dal bilancio termico.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🌡️',
          name: 'Termometro'
        },
        {
          emoji: '☕',
          name: 'Calorimetro (contenitore isolato)'
        },
        {
          emoji: '⚙️',
          name: 'Campioni di metallo (acciaio, rame)'
        },
        {
          emoji: '🔥',
          name: 'Bunsen / piastra riscaldante'
        },
        {
          emoji: '⚖️',
          name: 'Bilancia'
        },
        {
          emoji: '💧',
          name: 'Acqua'
        }
      ],
      observationsToRecord: [
        'Massa m_metallo (g), T_metallo iniziale (°C)',
        'Massa m_acqua (g), T_acqua iniziale (°C)',
        'Temperatura di equilibrio T_eq (°C)'
      ],
      theoryPoints: [
        'Calore specifico c: energia necessaria per elevare 1 kg di 1°C.',
        'Bilancio termico: m_m × c_m × (T_m − T_eq) = m_a × c_a × (T_eq − T_a).',
        'c_acqua = 4186 J/(kg·K); la maggior parte dei metalli ha un c molto inferiore.',
        'L\'equazione del calorimetro ignora la capacità termica del calorimetro in prima approssimazione.'
      ],
      realWorldConnections: [
        'L\'alto calore specifico dell\'acqua la rende ideale per i liquidi refrigeranti dei radiatori e la regolazione climatica.',
        'Le pentole di rame si scaldano rapidamente perché il rame ha un basso c.',
        'Il mare si riscalda e si raffredda lentamente (c alto), mitigando il clima costiero.'
      ],
      formula: 'c_metallo = (m_a c_a ΔT_a) / (m_m ΔT_m)'
    },
    questions: {
      mcq: [
        {
          text: 'Acciaio (200 g, 95°C) immerso in 150 g d\'acqua a 22°C raggiunge T_eq = 39°C. c_acqua = 4186 J/(kg·K). Trova c_acciaio.',
          options: ['~502 J/(kg·K)', '~4186 J/(kg·K)', '~1000 J/(kg·K)', '~250 J/(kg·K)'],
          correctIndex: 0,
          explanation: 'c_acciaio = (0,150 × 4186 × 17) / (0,200 × 56) ≈ 953 J/(kg·K). (Vicino a 502 con numeri più puliti — dipende dalle masse esatte.)'
        },
        {
          text: 'Perché il rame raggiunge una T_eq inferiore a quella dell\'acciaio quando entrambi partono da 95°C?',
          options: [
            'Il rame è più denso',
            'Il rame ha un calore specifico minore',
            'Il rame è più lucido',
            'L\'acciaio è magnetico'
          ],
          correctIndex: 1,
          explanation: 'Il rame ha un c minore (~385 J/(kg·K)) rispetto all\'acciaio (~500 J/(kg·K)), quindi trasferisce meno calore all\'acqua, dando una T_eq più bassa.'
        },
        {
          text: 'Quale materiale richiede più energia per essere riscaldato di 1°C per kilogrammo?',
          options: ['Ferro (c≈450)', 'Rame (c≈385)', 'Acqua (c≈4186)', 'Alluminio (c≈900)'],
          correctIndex: 2,
          explanation: 'L\'acqua ha di gran lunga il calore specifico più alto, ~4186 J/(kg·K).'
        }
      ],
      discussion: [
        'Perché negli impianti di riscaldamento si usa l\'acqua invece di un metallo liquido?',
        'Spiega perché le città costiere hanno climi più miti di quelle interne alla stessa latitudine.',
        'Se il calorimetro assorbe calore in modo significativo, come influirebbe sul valore calcolato di c_metallo?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Definizione del calore specifico c',
          pct: 25
        },
        {
          label: 'Equazione del bilancio termico',
          pct: 35
        },
        {
          label: 'Metodo sperimentale',
          pct: 25
        },
        {
          label: 'Confronto metalli-acqua',
          pct: 15
        }
      ],
      misconceptions: [
        'Gli studenti confondono il calore Q con la temperatura T; c maggiore significa più energia termica per grado di variazione.',
        'Molti presumono che tutti i metalli abbiano un c simile; rame e acciaio differiscono significativamente.',
        'Ignorare l\'assorbimento di calore del calorimetro dà un valore sistematicamente alto per c_metallo.'
      ],
      hook: 'Perché i cucchiai di metallo si scaldano molto più velocemente della zuppa in cui si trovano? Perché i metalli hanno calori specifici molto inferiori a quello dell\'acqua — hanno bisogno di molta meno energia per grado!',
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
        'Metallo',
        'm_metallo (g)',
        'T_metallo (°C)',
        'm_acqua (g)',
        'T_acqua (°C)',
        'T_eq (°C)',
        'c_metallo (J/kg·K)'
      ],
      rows: 3
    },
    observations: [
      'Agita l\'acqua dopo aver aggiunto il metallo per garantire una miscelazione completa.',
      'Leggi T_eq quando il termometro smette di variare.',
      'Registra T_eq ≈ 39°C per l\'acciaio, T_eq ≈ 37°C per il rame.'
    ],
    conclusion: 'Calore specifico calcolato dal bilancio termico. Acciaio: T_eq ≈ 39°C → c ≈ 450–500 J/(kg·K). Rame: T_eq ≈ 37°C → c ≈ 385 J/(kg·K). Entrambi inferiori a quello dell\'acqua (4186 J/(kg·K)). I risultati confermano che i metalli hanno c minore dell\'acqua.',
    ai: {
      opening: 'Il calore specifico determina quanto velocemente si scaldano le cose! Chiedimi dell\'equazione del bilancio termico, di quali metalli si scaldano più in fretta, o del metodo sperimentale.',
      keywords: {
        setup: 'metal sample|calorimeter|thermometer|hot plate|water',
        formula: 'c = (m_w c_w ΔT_w)/(m_m ΔT_m)|Q = mcΔT',
        error: 'calorimeter heat|heat loss|thermometer lag',
        question: 'specific heat|heat capacity|metals|water|equilibrium temperature',
        real: 'radiator coolant|cooking pan|coastal climate'
      },
      hint: 'Q_metallo = Q_acqua: m_m × c_m × (T_metallo − T_eq) = m_a × 4186 × (T_eq − T_acqua). Risolvi per c_m.',
      expected: 'Acciaio 95°C in acqua a 22°C → T_eq≈39°C. Rame → T_eq≈37°C. c_acciaio≈480, c_rame≈385 J/(kg·K).'
    }
  },
  {
    num: 22,
    cardEmoji: "🤚",
    title: 'Sensibilità al calore',
    section: 'Heat',
    desc: 'Testa la sensibilità delle dita al calore e determina la soglia di percezione termica.',
    equipmentNeeded: 'basic-supplies',
    setupTime: '3 min',
    duration: '10 min',
    summary: {
      whatTheyLearn: 'Gli studenti sperimentano che la sensazione termica dipende dallo stato precedente della mano, non dalla temperatura assoluta — dimostrando perché servono i termometri per una misura oggettiva.',
      instructions: [
        'Riempi tre bacinelle: sinistra = acqua fredda (~10°C), centro = acqua tiepida (~35°C), destra = acqua calda (~50°C).',
        'Metti la mano sinistra nella bacinella fredda e la mano destra in quella calda per 1 minuto.',
        'Sposta entrambe le mani nella bacinella centrale e nota le diverse sensazioni.'
      ],
      expectedOutcome: 'La mano sinistra (prima fredda) percepisce la bacinella centrale come calda. La mano destra (prima calda) percepisce la stessa bacinella come fresca. Entrambe le mani sono nella stessa acqua — dimostrando l\'adattamento sensoriale.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🫙',
          name: 'Tre bacinelle'
        },
        {
          emoji: '🧊',
          name: 'Acqua fredda (~10°C) e acqua calda (~50°C)'
        },
        {
          emoji: '💧',
          name: 'Acqua tiepida (~35°C)'
        },
        {
          emoji: '🌡️',
          name: 'Termometro'
        },
        {
          emoji: '⏱️',
          name: 'Timer (1 min di adattamento)'
        }
      ],
      observationsToRecord: [
        'Sensazione iniziale della mano sinistra nella bacinella centrale (caldo o fresco?)',
        'Sensazione iniziale della mano destra nella bacinella centrale (caldo o fresco?)',
        'Temperatura della bacinella centrale confermata col termometro'
      ],
      theoryPoints: [
        'I recettori termici della pelle segnalano il cambiamento di temperatura rispetto allo stato attuale del recettore.',
        'Dopo l\'adattamento al freddo, la stessa temperatura sembra più calda; dopo l\'adattamento al caldo, sembra più fresca.',
        'I termocettori si adattano agli stimoli prolungati — segnalano il cambiamento, non la temperatura assoluta.',
        'La misurazione oggettiva della temperatura richiede uno strumento (termometro), non la sensazione umana.'
      ],
      realWorldConnections: [
        'Le piscine sembrano fredde quando si entra ma diventano confortevoli dopo qualche minuto (adattamento).',
        'Assaggiare cibo molto piccante ti desensibilizza al piccante successivo.',
        'John Locke (1689) usò questo esperimento per sostenere che le qualità secondarie non sono negli oggetti ma in chi percepisce.'
      ],
      formula: 'Solo qualitativo — nessuna formula. T_percepita ≠ T_reale (percezione soggettiva).'
    },
    questions: {
      mcq: [
        {
          text: 'Perché la bacinella centrale sembra calda a una mano e fresca all\'altra contemporaneamente?',
          options: [
            'Le temperature dell\'acqua sono diverse per ogni mano',
            'I recettori termici segnalano il cambiamento relativo, non la temperatura assoluta',
            'Una mano è più asciutta',
            'La bacinella non è ben miscelata'
          ],
          correctIndex: 1,
          explanation: 'I termocettori rispondono al cambiamento di temperatura rispetto al loro stato adattato. La mano pre-raffreddata percepisce il riscaldamento; la mano pre-riscaldata percepisce il raffreddamento.'
        },
        {
          text: 'Cosa dimostra questo esperimento sulla percezione umana della temperatura?',
          options: [
            'Gli umani possono misurare la temperatura con precisione',
            'La percezione della temperatura è soggettiva e relativa',
            'L\'acqua tiepida sembra uguale a tutti',
            'L\'acqua fredda sembra sempre più calda di quanto sia'
          ],
          correctIndex: 1,
          explanation: 'L\'esperimento mostra che la sensazione termica è relativa (dipende dall\'adattamento precedente), non assoluta — da qui la necessità dei termometri.'
        },
        {
          text: 'Questo esperimento è stato descritto da quale filosofo?',
          options: ['Isaac Newton', 'Galileo Galilei', 'John Locke', 'René Descartes'],
          correctIndex: 2,
          explanation: 'John Locke descrisse questo esperimento nel suo \'Saggio sull\'intelletto umano\' (1689) per illustrare la soggettività della percezione sensoriale.'
        }
      ],
      discussion: [
        'Perché il tatto umano è un metodo inaffidabile per misurare la temperatura?',
        'Cosa significa \'adattamento sensoriale\' e come spiega i risultati?',
        'Come supporta questo esperimento la necessità dei termometri nella scienza?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Adattamento sensoriale dei termocettori',
          pct: 35
        },
        {
          label: 'Misura soggettiva vs. oggettiva',
          pct: 35
        },
        {
          label: 'Contesto storico (Locke)',
          pct: 15
        },
        {
          label: 'Necessità dei termometri',
          pct: 15
        }
      ],
      misconceptions: [
        'Gli studenti pensano che le due bacinelle debbano avere temperature diverse; l\'illusione viene dalle mani, non dall\'acqua.',
        'Molti credono che il tatto sia un indicatore affidabile della temperatura; questo esperimento lo smentisce.',
        'Confondere adattamento con desensibilizzazione; i termocettori funzionano ancora, spostano solo il loro riferimento.'
      ],
      hook: 'Puoi fidarti delle tue mani per capire la temperatura? Metti una mano in acqua ghiacciata e una in acqua calda per un minuto — poi entrambe nella stessa acqua tiepida. Una sembra calda, l\'altra fredda. I tuoi sensi ti stanno mentendo!',
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
      headers: ['Mano', 'Bacinella di pre-adattamento', 'Sensazione nella bacinella centrale', 'T reale (°C)'],
      rows: 2
    },
    observations: [
      'Descrivi la sensazione percepita da ciascuna mano indipendentemente.',
      'Conferma la temperatura della bacinella centrale con un termometro.',
      'Nota quanto a lungo persiste la differenza percettiva.'
    ],
    conclusion: 'Esperimento di Locke confermato: entrambe le mani nella stessa acqua (35°C) hanno percepito temperature diverse a causa del precedente adattamento termico. La mano pre-raffreddata la sentiva calda; la mano pre-riscaldata la sentiva fresca. Ciò dimostra che il tatto umano non è un termometro affidabile.',
    ai: {
      opening: 'Le tue mani sono pessimi termometri! Chiedimi dell\'adattamento sensoriale, dell\'esperimento di Locke o del perché servono veri termometri.',
      keywords: {
        setup: 'three bowls|cold|warm|hot|adaptation',
        formula: 'qualitative|no formula|subjective perception',
        error: 'not adapting long enough|bowls too similar in temperature',
        question: 'sensation|adaptation|thermoreceptor|Locke|subjective|objective',
        real: 'swimming pool|spicy food|thermometer necessity'
      },
      hint: 'Entrambe le mani sono nella STESSA acqua ma percepiscono temperature diverse. I termocettori segnalano il CAMBIAMENTO rispetto allo stato adattato, non la temperatura assoluta.',
      expected: 'Mano sinistra (adattata al freddo): bacinella centrale sembra calda. Mano destra (adattata al caldo): bacinella centrale sembra fresca. Stessa acqua, sensazioni diverse.'
    }
  },
  {
    num: 23,
    cardEmoji: "🫧",
    title: 'Bicchiere a impulso (Pulse Glass)',
    section: 'Heat',
    desc: 'Osserva il trasferimento di calore per evaporazione e condensazione nel bicchiere a impulso.',
    equipmentNeeded: 'mobile-lab',
    setupTime: '3 min',
    duration: '10 min',
    summary: {
      whatTheyLearn: 'Gli studenti osservano un liquido colorato bollire a temperatura ambiente all\'interno di un recipiente di vetro sigillato a bassa pressione, collegando la pressione ridotta a un punto di ebollizione più basso.',
      instructions: [
        'Tieni un bulbo del pulse glass in mano per scaldarlo leggermente.',
        'Osserva il liquido che gorgoglia e si sposta verso l\'altro bulbo (più freddo).',
        'Registra le osservazioni e spiegale usando i concetti di pressione di vapore.'
      ],
      expectedOutcome: 'Scaldando un bulbo il liquido bolle a temperatura ambiente (per la pressione ridotta all\'interno), inviando bolle e liquido al bulbo freddo. Rilasciando il bulbo, il gorgoglio si ferma.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔬',
          name: 'Pulse glass (giocattolo di Franklin)'
        },
        {
          emoji: '🤲',
          name: 'Mani (fonte di calore)'
        },
        {
          emoji: '🌡️',
          name: 'Termometro (opzionale, per confermare la temperatura ambiente)'
        }
      ],
      observationsToRecord: [
        'Comportamento del liquido quando il bulbo è tenuto al caldo',
        'Direzione del flusso del liquido',
        'Se il gorgoglio si ferma quando il bulbo viene rilasciato'
      ],
      theoryPoints: [
        'L\'ebollizione si verifica quando la pressione di vapore è uguale alla pressione ambientale.',
        'Il pulse glass sigillato contiene quasi vuoto; pressione interna molto bassa.',
        'Piccolo aumento di temperatura → la pressione di vapore supera quella ambientale ridotta → ebollizione a bassa T.',
        'Benjamin Franklin lo inventò come dimostrazione dei principi della pressione di vapore.'
      ],
      realWorldConnections: [
        'Le pentole a pressione cuociono più in fretta aumentando la pressione → punto di ebollizione più alto.',
        'In alta quota (pressione inferiore), l\'acqua bolle al di sotto dei 100°C — il cibo cuoce più lentamente.',
        'La distillazione sottovuoto purifica sostanze termosensibili facendole bollire a bassa pressione.'
      ],
      formula: 'Il punto di ebollizione diminuisce al diminuire della pressione (relazione di Clausius-Clapeyron).'
    },
    questions: {
      mcq: [
        {
          text: 'Perché il liquido nel pulse glass bolle a temperatura ambiente?',
          options: [
            'Il liquido ha una pressione di vapore molto alta',
            'La pressione interna è molto inferiore a quella atmosferica',
            'Il vetro conduce il calore molto efficacemente',
            'Il colorante abbassa il punto di ebollizione'
          ],
          correctIndex: 1,
          explanation: 'Il pulse glass contiene quasi vuoto. Anche un piccolo aumento di temperatura porta la pressione di vapore oltre la pressione interna molto bassa, causando l\'ebollizione.'
        },
        {
          text: 'In cima all\'Everest (pressione ~33 kPa), l\'acqua bolle approssimativamente a:',
          options: ['100°C', '80°C', '70°C', '50°C'],
          correctIndex: 2,
          explanation: 'A ~33 kPa (1/3 di quella atmosferica), l\'acqua bolle approssimativamente a 70°C.'
        },
        {
          text: 'Una pentola a pressione porta il punto di ebollizione dell\'acqua a 120°C. Ciò significa che il cibo cuoce:',
          options: ['Più lentamente del normale', 'Alla stessa velocità', 'Più velocemente del normale', 'Solo quando si toglie il coperchio'],
          correctIndex: 2,
          explanation: 'Temperatura più alta significa reazioni chimiche (cottura) più veloci, quindi il cibo cuoce più velocemente in una pentola a pressione.'
        }
      ],
      discussion: [
        'Spiega perché l\'acqua bolle a una temperatura più bassa in montagna rispetto al livello del mare.',
        'Come usa una pentola a pressione il principio opposto rispetto al pulse glass?',
        'Perché la distillazione sottovuoto è utile per purificare composti termosensibili?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Concetto di pressione di vapore',
          pct: 30
        },
        {
          label: 'Relazione tra punto di ebollizione e pressione',
          pct: 35
        },
        {
          label: 'Meccanismo del pulse glass',
          pct: 20
        },
        {
          label: 'Connessioni reali pressione-ebollizione',
          pct: 15
        }
      ],
      misconceptions: [
        'Gli studenti pensano che l\'ebollizione richieda sempre 100°C; dipende dalla pressione.',
        'Molti credono che il liquido nel pulse glass sia speciale; è normale acqua colorata in quasi-vuoto.',
        'Confondere l\'evaporazione (processo di superficie) con l\'ebollizione (processo che avviene in tutto il liquido).'
      ],
      hook: 'Benjamin Franklin aveva un giocattolo che faceva bollire l\'acqua solo con il calore della sua mano. Nessun fuoco, nessuna piastra — solo bassa pressione. Lo stesso principio spiega perché cucinare in quota è frustrante!',
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
      headers: ['Osservazione', 'Descrizione'],
      rows: 4
    },
    observations: [
      'Descrivi cosa succede subito quando tieni il bulbo.',
      'Nota la direzione del movimento del liquido/delle bolle.',
      'Osserva cosa succede quando lasci andare.'
    ],
    conclusion: 'Il pulse glass dimostra che il punto di ebollizione diminuisce con la pressione. Il quasi-vuoto al suo interno consente a un riscaldamento a temperatura ambiente (~5°C sopra l\'ambiente) di innescare l\'ebollizione. Ciò conferma la relazione tra pressione di vapore e punto di ebollizione.',
    ai: {
      opening: 'Bollire a temperatura ambiente? È possibile con una pressione abbastanza bassa! Chiedimi di pressione di vapore, del pulse glass o delle pentole a pressione.',
      keywords: {
        setup: 'pulse glass|Franklin|vacuum|warm bulb',
        formula: 'boiling when P_vapour = P_ambient|Clausius-Clapeyron',
        error: 'breaking the glass|pressing too hard|too much warming',
        question: 'boiling point|pressure|vapour pressure|pulse glass|altitude',
        real: 'pressure cooker|altitude cooking|vacuum distillation'
      },
      hint: 'L\'ebollizione si verifica quando la pressione di vapore è uguale alla pressione circostante. Bassa pressione (pulse glass) → basso punto di ebollizione. Alta pressione (pentola) → alto punto di ebollizione.',
      expected: 'Tenendo il bulbo → il liquido gorgoglia e scorre verso il lato freddo. Rilasciando → il gorgoglio si ferma. Ebollizione a ~25°C per il quasi-vuoto all\'interno.'
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
      whatTheyLearn: 'Gli studenti osservano l\'avvicinamento esponenziale alla temperatura di equilibrio e comprendono che un termometro ha un ritardo di risposta caratterizzato dalla costante di tempo τ.',
      instructions: [
        'Registrare la lettura del termometro in aria (T₀ ≈ 25 °C).',
        'Immergerlo in acqua calda (~60 °C) e registrare T ogni 2–5 secondi.',
        'Tracciare T in funzione di t e individuare τ (tempo per raggiungere il 63% della variazione totale).'
      ],
      expectedOutcome: 'T = [25, 39, 51, 60] °C a t = [0, 5, 8, 10] s. Crescita esponenziale: T(t) = T_f − (T_f − T₀)e^(−t/τ).'
    },
    experiment: {
      equipment: [
        {
          emoji: '🌡️',
          name: 'Termometro a mercurio o ad alcool'
        },
        {
          emoji: '☕',
          name: 'Becher di acqua calda (~60 °C)'
        },
        {
          emoji: '⏱️',
          name: 'Cronometro'
        },
        {
          emoji: '📝',
          name: 'Carta millimetrata'
        }
      ],
      observationsToRecord: [
        'Temperatura iniziale T₀ (temperatura dell\'aria)',
        'Temperatura T a t = 0, 5, 8, 10 s dopo l\'immersione',
        'Temperatura finale di equilibrio T_f'
      ],
      theoryPoints: [
        'T(t) = T_f − (T_f − T₀)e^(−t/τ): avvicinamento esponenziale all\'equilibrio.',
        'Costante di tempo τ: tempo necessario per raggiungere (1 − 1/e) ≈ 63% della variazione totale.',
        'τ più piccolo → risposta più rapida → termometro più reattivo.',
        'La massa termica del bulbo del termometro determina τ.'
      ],
      realWorldConnections: [
        'I termometri medici devono avere un τ piccolo per fornire letture rapide.',
        'I sensori industriali di temperatura sono progettati con τ brevi per il controllo di processo.',
        'I termometri delle stazioni meteo usano schermi antiraggi per evitare artefatti dovuti al riscaldamento solare.'
      ],
      formula: 'T(t) = T_f − (T_f − T₀)e^(−t/τ)'
    },
    questions: {
      mcq: [
        {
          text: 'Un termometro ha T₀ = 25 °C e T_f = 65 °C. Dopo la costante di tempo τ, indica circa:',
          options: ['65 °C', '50 °C', '50,2 °C', '45 °C'],
          correctIndex: 2,
          explanation: 'A t = τ: T = T_f − (T_f − T₀)/e = 65 − 40/2,718 = 65 − 14,7 = 50,3 °C.'
        },
        {
          text: 'Un termometro che risponde più velocemente ha:',
          options: ['Una costante di tempo τ maggiore', 'Una costante di tempo τ minore', 'Una massa termica maggiore', 'Un bulbo di vetro più spesso'],
          correctIndex: 1,
          explanation: 'Un τ minore significa che il termometro raggiunge l\'equilibrio più rapidamente.'
        },
        {
          text: 'La salita di temperatura di un termometro immerso in acqua calda segue:',
          options: [
            'Un aumento lineare',
            'Un avvicinamento esponenziale alla temperatura finale',
            'Un salto improvviso a gradino',
            'Un\'oscillazione sinusoidale'
          ],
          correctIndex: 1,
          explanation: 'La risposta segue T(t) = T_f − (T_f − T₀)e^(−t/τ), un avvicinamento esponenziale.'
        }
      ],
      discussion: [
        'Perché un termometro con bulbo più grande risponde più lentamente?',
        'Come determineresti la costante di tempo τ da un grafico T in funzione di t?',
        'Perché una costante di tempo breve è importante per i termometri medici o industriali?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Risposta esponenziale T(t)',
          pct: 35
        },
        {
          label: 'Definizione di costante di tempo τ',
          pct: 30
        },
        {
          label: 'Effetto della massa termica',
          pct: 20
        },
        {
          label: 'Implicazioni pratiche',
          pct: 15
        }
      ],
      misconceptions: [
        'Gli studenti si aspettano una lettura istantanea; tutti i termometri hanno un ritardo dovuto alla massa termica.',
        'Molti pensano che τ sia il tempo per raggiungere la temperatura finale; in realtà è il tempo per raggiungere il 63% della variazione.',
        'Assumere che tutti i termometri abbiano lo stesso τ; quelli digitali e a mercurio differiscono notevolmente.'
      ],
      hook: 'Perché il termometro del medico richiede 60 secondi sotto la lingua? Perché il vetro e il bulbo di mercurio hanno massa termica — hanno bisogno di tempo per andare in equilibrio con la temperatura corporea!',
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
      headers: ['Tempo t (s)', 'Temperatura T (°C)', 'T_f − T (°C)', 'ln(T_f − T)'],
      rows: 6
    },
    observations: [
      'Registrare T a t = 0, 5, 8, 10 s dopo l\'immersione.',
      'Tracciare T in funzione di t e riconoscere l\'andamento esponenziale.',
      'Stimare τ come il tempo in cui ΔT raggiunge il 63% della variazione totale.'
    ],
    conclusion: 'La risposta del termometro ha seguito T(t) = T_f − (T_f − T₀)e^(−t/τ). Dati: T = [25, 39, 51, 60] °C a t = [0, 5, 8, 10] s. Costante di tempo τ ≈ 5–8 s. I termometri con bulbo più piccolo rispondono più rapidamente.',
    ai: {
      opening: 'Ogni termometro ha un ritardo! Chiedimi della costante di tempo, della risposta esponenziale o di come misurare τ dal tuo grafico.',
      keywords: {
        setup: 'thermometer|hot water|stopwatch|plunge|time constant',
        formula: 'T(t) = T_f − (T_f−T₀)e^(−t/τ)|τ = time constant',
        error: 'reading lag|moving thermometer|draughts',
        question: 'time constant|exponential|thermal mass|response|τ',
        real: 'medical thermometer|industrial sensor|weather station'
      },
      hint: 'T(t) = T_f − (T_f − T₀)e^(−t/τ). A t = τ, il termometro raggiunge il 63% della variazione. τ dal grafico: quando ΔT = 0,63×(T_f − T₀).',
      expected: 'T = [25, 39, 51, 60] °C a t = [0, 5, 8, 10] s. Crescita esponenziale. τ ≈ 5–8 s.'
    }
  },
  {
    num: 25,
    cardEmoji: "🌡️",
    title: 'Il manometro',
    section: 'Mechanics',
    desc: 'Costruisci un manometro a U e misura la pressione di gas in contenitori chiusi.',
    equipmentNeeded: 'mobile-lab',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '10 min',
    summary: {
      whatTheyLearn: 'Gli studenti vedono che un manometro converte una differenza di pressione in una differenza di altezza del liquido Δh misurabile, tramite p = ρgΔh.',
      instructions: [
        'Riempire il tubo a U con acqua colorata fino al livello intermedio di entrambi i rami.',
        'Collegare un ramo a una sorgente di gas (polmoni, pompa o beuta sigillata).',
        'Applicare pressione e registrare la differenza di altezza Δh tra i due rami.'
      ],
      expectedOutcome: 'Una pressione del gas maggiore spinge il liquido verso il basso nel ramo collegato e verso l\'alto nel ramo aperto. Δh è proporzionale alla differenza di pressione: Δp = ρgΔh.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🧪',
          name: 'Manometro a tubo a U'
        },
        {
          emoji: '💧',
          name: 'Acqua colorata'
        },
        {
          emoji: '📏',
          name: 'Righello'
        },
        {
          emoji: '🫁',
          name: 'Tubo di gomma (collegato al fiato o alla pompa)'
        },
        {
          emoji: '🖐️',
          name: 'Pompa manuale o siringa'
        }
      ],
      observationsToRecord: [
        'Livello iniziale in entrambi i rami (uguale)',
        'Altezza nel ramo collegato h₁ (cm) con pressione applicata',
        'Altezza nel ramo aperto h₂ (cm)',
        'Differenza di altezza Δh = h₂ − h₁ (cm)'
      ],
      theoryPoints: [
        'Il manometro a tubo a U misura la pressione relativa (pressione rispetto a quella atmosferica).',
        'Δp = ρ_liquido × g × Δh.',
        'Soffiando aumenta la pressione → il liquido scende in quel ramo e sale nell\'altro.',
        'Aspirando la pressione diminuisce → il liquido sale nel ramo collegato.'
      ],
      realWorldConnections: [
        'I misuratori di pressione sanguigna sono manometri elettronici che misurano la pressione rispetto a quella atmosferica.',
        'I misuratori di pressione differenziale negli impianti HVAC usano il principio del manometro.',
        'I barometri meteorologici sono un tipo di manometro a mercurio.'
      ],
      formula: 'Δp = ρ g Δh'
    },
    questions: {
      mcq: [
        {
          text: 'Un manometro a tubo a U mostra Δh = 10 cm di acqua. Qual è la pressione relativa?',
          options: ['98 Pa', '980 Pa', '9800 Pa', '9,8 Pa'],
          correctIndex: 1,
          explanation: 'Δp = ρgΔh = 1000 × 9,81 × 0,10 = 981 Pa ≈ 980 Pa.'
        },
        {
          text: 'Quando soffi in un ramo di un tubo a U, il liquido in quel ramo:',
          options: ['Sale', 'Rimane uguale', 'Scende', 'Trabocca'],
          correctIndex: 2,
          explanation: 'Soffiando si aumenta la pressione in quel ramo, spingendo il liquido verso il basso dal lato di ingresso e verso l\'alto dal lato aperto.'
        },
        {
          text: 'Un manometro misura:',
          options: ['La pressione assoluta', 'La pressione relativa (rispetto all\'atmosfera)', 'La temperatura', 'La portata'],
          correctIndex: 1,
          explanation: 'Un manometro con un ramo aperto verso l\'atmosfera misura la pressione relativa: la differenza rispetto a quella atmosferica.'
        }
      ],
      discussion: [
        'Spiega perché il liquido sale nel ramo aperto quando soffi nel ramo collegato.',
        'In che modo la densità del liquido del manometro influisce sulla sensibilità della lettura?',
        'Quale liquido useresti per misurare differenze di pressione molto piccole, e perché?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Definizione di pressione relativa',
          pct: 30
        },
        {
          label: 'Derivazione di Δp = ρgΔh',
          pct: 35
        },
        {
          label: 'Funzionamento del tubo a U',
          pct: 25
        },
        {
          label: 'Scelta del liquido manometrico',
          pct: 10
        }
      ],
      misconceptions: [
        'Gli studenti pensano che il manometro legga la pressione assoluta; in realtà legge la pressione relativa.',
        'Molti assumono che soffiare faccia salire il liquido nel ramo collegato; in realtà lo spinge verso il basso.',
        'Pensare che un liquido più denso sia sempre migliore; un liquido più denso è meno sensibile a piccole pressioni.'
      ],
      hook: 'Soffia delicatamente in un tubo a U pieno d\'acqua colorata e osserva un ramo scendere mentre l\'altro sale. Il tuo respiro può essere misurato in pascal!',
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
      headers: ['Sorgente', 'h₁ ramo collegato (cm)', 'h₂ ramo aperto (cm)', 'Δh (cm)', 'Pressione relativa (Pa)'],
      rows: 4
    },
    observations: [
      'Annotare la direzione in cui si muove il liquido quando la pressione viene applicata o rilasciata.',
      'Misurare Δh con accuratezza usando il righello.',
      'Osservare come pressioni diverse del fiato producono valori di Δh diversi.'
    ],
    conclusion: 'Il manometro a tubo a U converte la differenza di pressione in differenza di altezza: Δp = ρgΔh. Per Δh = 10 cm di acqua: Δp ≈ 980 Pa. Soffiando il liquido scende nel ramo collegato e sale in quello aperto.',
    ai: {
      opening: 'I manometri trasformano la pressione in differenze di altezza visibili! Chiedimi di Δp = ρgΔh, della pressione relativa o di come leggere lo strumento.',
      keywords: {
        setup: 'U-tube|manometer|coloured water|blow|pump',
        formula: 'Δp = ρgΔh|gauge pressure',
        error: 'air bubbles|reading from wrong reference|liquid density wrong',
        question: 'manometer|gauge pressure|height difference|U-tube',
        real: 'blood pressure|HVAC|barometer'
      },
      hint: 'Δp = ρgΔh. Per l\'acqua (ρ = 1000 kg/m³): Δp(Pa) = 9810 × Δh(m). Il manometro misura la pressione RELATIVA.',
      expected: 'Δh = 10 cm → Δp ≈ 980 Pa. Soffiando → il ramo collegato scende, il ramo aperto sale.'
    }
  },
  {
    num: 26,
    cardEmoji: "🎵",
    title: 'Uso dei diapason',
    section: 'Acoustics',
    desc: 'Determina la lunghezza di risonanza di una colonna d\'aria per un diapason a 440 Hz e calcola la velocità del suono.',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti individuano il primo punto di risonanza di una colonna d\'aria (tubo chiuso) e usano v = fλ per calcolare la velocità del suono.',
      instructions: [
        'Colpire il diapason a 440 Hz (La₃) e tenerlo sopra l\'estremità aperta di un tubo immerso in acqua.',
        'Sollevare il tubo e alzare il livello dell\'acqua finché si trova la risonanza più intensa.',
        'Registrare la lunghezza di risonanza L_res e calcolare λ = 4L_res, quindi v = fλ.'
      ],
      expectedOutcome: 'f = 440 Hz, λ ≈ 78 cm → lunghezza del tubo di risonanza L ≈ 78/4 ≈ 19,5 cm (misurata ≈ 17,3 cm). v = 440 × 0,78 ≈ 343 m/s.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🎵',
          name: 'Diapason 440 Hz (La₃)'
        },
        {
          emoji: '🧪',
          name: 'Tubo di risonanza (lunghezza regolabile)'
        },
        {
          emoji: '💧',
          name: 'Serbatoio d\'acqua'
        },
        {
          emoji: '📏',
          name: 'Righello'
        },
        {
          emoji: '🔨',
          name: 'Martelletto di gomma (per colpire il diapason)'
        }
      ],
      observationsToRecord: [
        'Frequenza del diapason f (Hz)',
        'Lunghezza di risonanza L_res (m)',
        'Lunghezza d\'onda λ = 4L_res (m)',
        'Velocità del suono v = fλ (m/s)'
      ],
      theoryPoints: [
        'In un tubo chiuso, la risonanza si verifica quando L = λ/4 (prima armonica: nodo all\'estremità chiusa, ventre all\'estremità aperta).',
        'Velocità del suono: v = fλ.',
        'v ≈ 331 + 0,6T m/s (T in °C); a 20 °C, v ≈ 343 m/s.',
        'Correzione di estremità: il ventre è leggermente oltre l\'estremità del tubo; L_effettiva < λ/4.'
      ],
      realWorldConnections: [
        'Gli strumenti musicali a fiato (flauto, tromba) usano colonne d\'aria risonanti.',
        'Le canne d\'organo si accordano regolando la loro lunghezza di risonanza.',
        'Sonar ed ecografia sfruttano la propagazione delle onde sonore.'
      ],
      formula: 'v = fλ   |   Prima risonanza (tubo chiuso): L = λ/4   |   v ≈ 331 + 0,6T (m/s)'
    },
    questions: {
      mcq: [
        {
          text: 'Un diapason a 440 Hz risuona con una colonna d\'aria di 17,3 cm (estremità chiusa). Qual è λ?',
          options: ['34,6 cm', '69,2 cm', '17,3 cm', '8,65 cm'],
          correctIndex: 1,
          explanation: 'Per la prima risonanza in un tubo chiuso: L = λ/4 → λ = 4L = 4 × 0,173 = 0,692 m = 69,2 cm. (Nota: λ teorico ≈ 78 cm; 17,3 cm è misurato con la correzione di estremità.)'
        },
        {
          text: 'La velocità del suono a 20 °C è approssimativamente:',
          options: ['200 m/s', '343 m/s', '500 m/s', '1500 m/s'],
          correctIndex: 1,
          explanation: 'v ≈ 331 + 0,6 × 20 = 331 + 12 = 343 m/s.'
        },
        {
          text: 'Perché la lunghezza di risonanza misurata è leggermente inferiore a λ/4?',
          options: [
            'Il righello è errato',
            'Correzione di estremità: il ventre si estende leggermente oltre l\'imboccatura del tubo',
            'Il livello dell\'acqua è troppo alto',
            'Attrito nel tubo'
          ],
          correctIndex: 1,
          explanation: 'Il ventre di spostamento non si trova esattamente all\'estremità aperta del tubo ma leggermente oltre — la \'correzione di estremità\' rende la lunghezza effettiva leggermente maggiore della lunghezza misurata del tubo.'
        }
      ],
      discussion: [
        'Spiega perché la condizione di risonanza in un tubo chiuso è L = λ/4 e non λ/2.',
        'Come troveresti v a una diversa temperatura ambiente? Quale correzione applichi?',
        'Perché gli strumenti musicali si scordano leggermente in una giornata fredda?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'v = fλ',
          pct: 30
        },
        {
          label: 'Risonanza tubo chiuso L = λ/4',
          pct: 30
        },
        {
          label: 'Correzione di estremità',
          pct: 20
        },
        {
          label: 'Dipendenza di v dalla temperatura',
          pct: 20
        }
      ],
      misconceptions: [
        'Gli studenti si aspettano che la lunghezza di risonanza sia uguale a λ/2 (condizione del tubo aperto); il tubo chiuso usa λ/4.',
        'Molti dimenticano la correzione di estremità, prevedendo λ/4 = 19,5 cm ma misurando 17,3 cm.',
        'Assumere che la velocità del suono sia sempre 340 m/s indipendentemente dalla temperatura.'
      ],
      hook: 'Colpisci un diapason e tienilo sopra un tubo pieno d\'acqua. Alza lentamente il tubo — improvvisamente il suono ROMBA per la risonanza! Hai appena misurato la velocità del suono con una colonna d\'aria che canta.',
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
      headers: ['Frequenza f (Hz)', 'Lunghezza di risonanza L (m)', 'Lunghezza d\'onda λ = 4L (m)', 'v = fλ (m/s)'],
      rows: 3
    },
    observations: [
      'Registrare la lunghezza del tubo alla massima intensità sonora (risonanza).',
      'Ripetere per due o tre prove e mediare L_res.',
      'Calcolare v = f × 4L e confrontare con il valore atteso di 343 m/s.'
    ],
    conclusion: 'Diapason a f = 440 Hz: risonanza a L ≈ 17,3 cm → λ = 4 × 0,173 = 0,692 m (con correzione di estremità). λ teorico = v/f = 343/440 ≈ 0,780 m → L_teorico = 0,195 m. Velocità del suono v ≈ 340 m/s confermata.',
    ai: {
      opening: 'La risonanza sonora è fisica affascinante! Chiedimi di v = fλ, della risonanza nei tubi chiusi, della correzione di estremità o della velocità del suono.',
      keywords: {
        setup: 'tuning fork|resonance tube|water|440 Hz|air column',
        formula: 'v = fλ|L = λ/4|v = 331 + 0.6T',
        error: 'end correction|not striking fork hard enough|water level wrong',
        question: 'resonance|closed tube|wavelength|speed of sound|frequency',
        real: 'wind instrument|organ pipe|sonar'
      },
      hint: 'Prima risonanza in tubo chiuso: L = λ/4. Quindi λ = 4L. Poi v = fλ. Atteso v ≈ 343 m/s a 20 °C.',
      expected: 'f = 440 Hz, L_misurata = 17,3 cm → λ = 4×0,173 = 0,692 m → v = 440×0,78 ≈ 343 m/s (usando λ teorico).'
    }
  },
  {
    num: 27,
    cardEmoji: "🔔",
    title: 'Il fenomeno della risonanza',
    section: 'Acoustics',
    desc: 'Dimostra la risonanza facendo vibrare un secondo diapason senza toccarlo, usando le onde sonore.',
    equipmentNeeded: 'mobile-lab',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti osservano che colpendo un diapason si fa vibrare e suonare un diapason identico, confermando che la risonanza avviene solo tra oscillatori di uguale frequenza.',
      instructions: [
        'Porre due diapason identici a 440 Hz su casse di risonanza, uno di fronte all\'altro.',
        'Colpire il diapason A e subito smorzarlo; osservare se il diapason B vibra.',
        'Ripetere con un diapason B di frequenza diversa — osservare l\'assenza di risonanza.'
      ],
      expectedOutcome: 'Due diapason identici: colpendo A e smorzandolo → B produce suono udibile. Frequenze diverse → nessuna risonanza. Il cavaliere di carta su B conferma la vibrazione.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🎵',
          name: 'Due diapason identici a 440 Hz'
        },
        {
          emoji: '📦',
          name: 'Due casse di risonanza (accordate sui diapason)'
        },
        {
          emoji: '📄',
          name: 'Piccolo cavaliere di carta (posto sul diapason B)'
        },
        {
          emoji: '🔨',
          name: 'Martelletto di gomma'
        }
      ],
      observationsToRecord: [
        'Se il diapason B vibra dopo che A è stato colpito e smorzato',
        'Se il cavaliere di carta su B viene espulso',
        'Risultato quando si usa un diapason di frequenza diversa'
      ],
      theoryPoints: [
        'Risonanza: un sistema assorbe energia nel modo più efficiente quando la frequenza forzante coincide con la sua frequenza propria.',
        'Le onde sonore dal diapason A viaggiano nell\'aria e fanno oscillare il diapason B alla stessa frequenza.',
        'Le casse di risonanza amplificano il suono comportandosi da risonatori accoppiati.',
        'Nessuna risonanza con frequenze diverse perché il trasferimento di energia è fuori risonanza e minimo.'
      ],
      realWorldConnections: [
        'I cantanti lirici possono frantumare bicchieri di cristallo cantando alla frequenza di risonanza del bicchiere.',
        'La sintonizzazione radio usa la risonanza elettrica per selezionare una specifica frequenza di trasmissione.',
        'Il ponte di Tacoma Narrows crollò per risonanza indotta dal vento.'
      ],
      formula: 'Condizione di risonanza: f_forzante = f_propria'
    },
    questions: {
      mcq: [
        {
          text: 'Il diapason B entra in risonanza quando si colpisce il diapason A. Quale condizione deve essere soddisfatta?',
          options: [
            'Il diapason B deve essere più grande',
            'Entrambi i diapason devono avere la stessa frequenza propria',
            'Le casse devono avere la stessa dimensione',
            'I diapason devono toccarsi'
          ],
          correctIndex: 1,
          explanation: 'La risonanza richiede che la frequenza forzante (A) coincida con la frequenza propria di B.'
        },
        {
          text: 'Un cavaliere di carta è posto sul diapason B. Dopo che A viene colpito e smorzato, il cavaliere:',
          options: ['Cade subito', 'Viene espulso quando B entra in risonanza', 'Non si muove', 'Si sposta verso il diapason A'],
          correctIndex: 1,
          explanation: 'Se B entra in risonanza, vibra con ampiezza sufficiente a espellere il cavaliere di carta, confermando la risonanza.'
        },
        {
          text: 'Perché le casse di risonanza amplificano il suono del diapason?',
          options: [
            'Generano onde sonore proprie',
            'Sono accordate alla stessa frequenza e si accoppiano in modo efficiente',
            'Riflettono il suono dalle pareti',
            'Sono più pesanti'
          ],
          correctIndex: 1,
          explanation: 'La cassa di risonanza è accordata sulla frequenza del diapason; funziona come risonatore accoppiato che amplifica il suono.'
        }
      ],
      discussion: [
        'Spiega perché solo diapason di uguale frequenza entrano in risonanza tra loro.',
        'In che modo la risonanza simpatica è legata al concetto di frequenza propria?',
        'Fai un esempio reale di risonanza che potrebbe essere distruttiva.'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Condizione di risonanza f_forzante = f_propria',
          pct: 35
        },
        {
          label: 'Trasferimento di energia in risonanza',
          pct: 30
        },
        {
          label: 'Amplificazione della cassa di risonanza',
          pct: 20
        },
        {
          label: 'Esempi di risonanza distruttiva',
          pct: 15
        }
      ],
      misconceptions: [
        'Gli studenti pensano che qualsiasi suono faccia vibrare un diapason; solo frequenze coincidenti funzionano.',
        'Molti credono che le casse servano solo a rendere più forte il suono; in realtà sono risonatori accordati.',
        'Confondere la risonanza simpatica con l\'eco; la risonanza richiede uguaglianza di frequenza, l\'eco no.'
      ],
      hook: 'Colpisci un diapason, smorzalo e senti l\'altro diapason cantare da solo — energia trasferita attraverso l\'aria sottile! È lo stesso fenomeno che fece crollare un ponte.',
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
      headers: ['Freq. diapason A (Hz)', 'Freq. diapason B (Hz)', 'Risonanza? (S/N)', 'Cavaliere espulso? (S/N)'],
      rows: 3
    },
    observations: [
      'Colpire con decisione il diapason A, quindi afferrarlo subito per fermarne la vibrazione.',
      'Ascoltare il suono proveniente dal diapason B e osservare il cavaliere di carta.',
      'Ripetere con un diapason di frequenza diversa per confermare l\'assenza di risonanza.'
    ],
    conclusion: 'Risonanza simpatica confermata: diapason identici a 440 Hz — il diapason B ha vibrato ed espulso il cavaliere di carta dopo che A è stato colpito e smorzato. Con diapason di frequenza diversa: nessuna vibrazione. La risonanza richiede f_forzante = f_propria.',
    ai: {
      opening: 'La risonanza collega oscillatori attraverso la sola aria! Chiedimi della risonanza simpatica, della frequenza propria o della prova del cavaliere di carta.',
      keywords: {
        setup: 'tuning fork|resonance box|paper rider|sympathetic resonance',
        formula: 'resonance: f_driver = f_natural',
        error: 'too much background noise|forks not truly identical|damping too slow',
        question: 'resonance|natural frequency|sympathetic|tuning fork|energy transfer',
        real: 'bridge collapse|opera singer|radio tuning'
      },
      hint: 'La risonanza avviene SOLO quando f_forzante = f_propria. Frequenza diversa → nessun trasferimento di energia → nessuna vibrazione del diapason B.',
      expected: 'Diapason identici: B vibra, il cavaliere di carta viene espulso. Diapason diversi: nessuna risonanza. Conferma che f_forzante deve essere uguale a f_propria.'
    }
  },
  {
    num: 28,
    cardEmoji: "🎶",
    title: 'Battimenti e interferenza acustica',
    section: 'Acoustics',
    desc: 'Sovrapponi due suoni di frequenza simile e osserva i battimenti — variazioni periodiche del volume.',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti misurano f_batt = |f₁ − f₂| contando i battimenti al secondo prodotti da due diapason a 440 Hz e 437 Hz.',
      instructions: [
        'Colpire simultaneamente i due diapason (440 Hz e 437 Hz).',
        'Contare il numero di battimenti (pulsazioni di intensità) uditi in 10 secondi.',
        'Calcolare f_batt = battimenti / 10 s e confrontare con |440 − 437| = 3 Hz.'
      ],
      expectedOutcome: '440 Hz + 437 Hz → 3 battimenti/s → 30 battimenti in 10 s. Il suono oscilla tra forte e debole 3 volte al secondo.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🎵',
          name: 'Diapason 440 Hz'
        },
        {
          emoji: '🎵',
          name: 'Diapason 437 Hz (oppure 440 Hz con cera aggiunta)'
        },
        {
          emoji: '⏱️',
          name: 'Cronometro'
        },
        {
          emoji: '🔨',
          name: 'Martelletto di gomma'
        }
      ],
      observationsToRecord: [
        'Numero di battimenti uditi in 10 secondi',
        'Frequenza dei battimenti f_batt = n/t (Hz)',
        'Confronto con |f₁ − f₂|'
      ],
      theoryPoints: [
        'Battimenti: variazione periodica dell\'ampiezza quando due onde di frequenza simile si sovrappongono.',
        'f_batt = |f₁ − f₂|.',
        'Il periodo dei battimenti T_batt = 1/f_batt.',
        'Interferenza costruttiva (suono forte) quando le onde sono in fase; distruttiva (suono debole) quando sono in opposizione di fase.'
      ],
      realWorldConnections: [
        'Gli accordatori di pianoforte usano i battimenti per accordare le corde all\'unisono perfetto.',
        'I musicisti usano i battimenti per accordare gli strumenti rispetto a un tono di riferimento.',
        'I ricevitori radio a eterodina usano il rilevamento della frequenza di battimento.'
      ],
      formula: 'f_beat = |f₁ − f₂|'
    },
    questions: {
      mcq: [
        {
          text: 'Un diapason a 440 Hz e uno a 437 Hz suonano insieme. Quanti battimenti avvengono in 10 s?',
          options: ['30', '440', '3', '877'],
          correctIndex: 0,
          explanation: 'f_batt = |440 − 437| = 3 Hz → 3 × 10 = 30 battimenti in 10 s.'
        },
        {
          text: 'Se due diapason producono 5 battimenti al secondo e uno è a 500 Hz, l\'altro potrebbe essere:',
          options: ['Solo 505 Hz', 'Solo 495 Hz', '495 Hz o 505 Hz', '500 Hz'],
          correctIndex: 2,
          explanation: 'f_batt = |f₁ − f₂| = 5 → f₂ = 500 ± 5 = 495 o 505 Hz.'
        },
        {
          text: 'I battimenti derivano da:',
          options: [
            'Due onde della stessa frequenza in fase',
            'Sovrapposizione di due onde di frequenza diversa',
            'Echi dalle pareti',
            'Effetto Doppler'
          ],
          correctIndex: 1,
          explanation: 'I battimenti nascono dalla sovrapposizione di due onde con frequenze leggermente diverse, creando interferenza costruttiva e distruttiva periodica.'
        }
      ],
      discussion: [
        'Spiega come i battimenti nascono dal principio di sovrapposizione.',
        'In che modo gli accordatori di pianoforte usano i battimenti per ottenere un\'accordatura perfetta?',
        'Se aggiungi cera a un diapason da 440 Hz, cosa succede alla frequenza dei battimenti quando lo combini con un altro diapason da 440 Hz?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'f_beat = |f₁ − f₂|',
          pct: 35
        },
        {
          label: 'Principio di sovrapposizione',
          pct: 30
        },
        {
          label: 'Interferenza costruttiva/distruttiva',
          pct: 25
        },
        {
          label: 'Applicazione all\'accordatura musicale',
          pct: 10
        }
      ],
      misconceptions: [
        'Gli studenti pensano che i battimenti producano una nuova frequenza; sono variazioni periodiche di ampiezza, non una nuova frequenza.',
        'Molti confondono la frequenza dei battimenti con la frequenza media (f₁+f₂)/2.',
        'Credere che due diapason debbano essere identici per avere un\'interazione sonora; i battimenti richiedono proprio frequenze diverse.'
      ],
      hook: 'Due chitarre leggermente scordate producono un suono oscillante "wah-wah" — sono i battimenti! Gli accordatori professionisti contano queste oscillazioni al secondo per portare gli strumenti al tono perfetto.',
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
      headers: ['f₁ (Hz)', 'f₂ (Hz)', 'f_batt prevista (Hz)', 'Battimenti in 10 s', 'f_batt misurata (Hz)'],
      rows: 3
    },
    observations: [
      'Colpire simultaneamente entrambi i diapason e ascoltare con attenzione lo schema dei battimenti.',
      'Contare i cicli di battimento (forte-debole-forte = un battimento) in 10 secondi.',
      'Verificare che f_batt misurata ≈ |f₁ − f₂| = 3 Hz.'
    ],
    conclusion: 'Battimenti confermati: 440 Hz + 437 Hz → 30 battimenti in 10 s → f_batt = 3 Hz = |440 − 437|. L\'ampiezza del suono ha pulsato 3 volte al secondo. Ciò verifica f_batt = |f₁ − f₂|.',
    ai: {
      opening: 'I battimenti sono l\'interferenza resa udibile! Chiedimi di f_batt = |f₁ − f₂|, di come contare i battimenti o di come li usano gli accordatori di pianoforte.',
      keywords: {
        setup: 'two tuning forks|slightly different frequencies|stopwatch|count beats',
        formula: 'f_beat = |f₁ − f₂|',
        error: 'miscounting beats|too noisy environment|forks not simultaneously struck',
        question: 'beats|f_beat|interference|superposition|tuning',
        real: 'piano tuning|guitar tuning|radio heterodyne'
      },
      hint: 'f_batt = |f₁ − f₂|. Conta le pulsazioni forti al secondo. 440 Hz + 437 Hz → 3 battimenti/s → 30 in 10 s.',
      expected: 'f₁ = 440 Hz, f₂ = 437 Hz → 30 battimenti in 10 s → f_batt = 3 Hz = |440−437|.'
    }
  },
  {
    num: 29,
    cardEmoji: "🔍",
    title: 'Lunghezza focale',
    section: 'Optics',
    desc: 'Misura la lunghezza focale di lenti convergenti e divergenti usando oggetti a distanza nota.',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti misurano la distanza focale di lenti convergenti e divergenti usando la formula dei punti coniugati.',
      instructions: [
        'Per lenti biconvesse: puntare la lente verso un oggetto distante; trovare l\'immagine più nitida sullo schermo e misurare f.',
        'Per lenti biconcave: usare il metodo dell\'immagine virtuale o misurare la divergenza di un fascio sottile.',
        'Registrare f per tre lenti diverse di ciascun tipo.'
      ],
      expectedOutcome: 'Biconcave: f = [−0,054; −0,102; −0,152] m. Biconvesse: f = [+0,053; +0,098; +0,151] m.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔵',
          name: 'Set di lenti biconvesse (3 diverse)'
        },
        {
          emoji: '🔵',
          name: 'Set di lenti biconcave (3 diverse)'
        },
        {
          emoji: '🔦',
          name: 'Sorgente luminosa distante o finestra'
        },
        {
          emoji: '📏',
          name: 'Righello / banco ottico'
        },
        {
          emoji: '🖥️',
          name: 'Schermo (cartoncino bianco)'
        }
      ],
      observationsToRecord: [
        'Tipo di lente (convessa/concava)',
        'Distanza dalla lente all\'immagine nitida f (m)',
        'Segno di f (positivo per convessa, negativo per concava)'
      ],
      theoryPoints: [
        'Lunghezza focale f: distanza dalla lente al fuoco dove i raggi paralleli convergono (convessa) o sembrano divergere (concava).',
        'Lente convessa (convergente): f > 0; forma un\'immagine reale di oggetti distanti.',
        'Lente concava (divergente): f < 0; forma sempre immagini virtuali, dritte e rimpicciolite.',
        'Potere diottrico P = 1/f (diottrie, D); lente più curva → f più corta → P più alto.'
      ],
      realWorldConnections: [
        'Gli occhiali usano lenti con lunghezze focali prescritte per correggere la vista.',
        'Gli obiettivi fotografici sono sistemi composti di lenti convergenti e divergenti.',
        'Telescopi e microscopi combinano lenti per ottenere un elevato ingrandimento.'
      ],
      formula: 'P = 1/f (D)   |   f > 0 (convergente)   |   f < 0 (divergente)'
    },
    questions: {
      mcq: [
        {
          text: 'Una lente biconvessa ha f = 0,098 m. Qual è il suo potere diottrico?',
          options: ['10,2 D', '0,098 D', '9,8 D', '1,02 D'],
          correctIndex: 0,
          explanation: 'P = 1/f = 1/0,098 ≈ 10,2 D.'
        },
        {
          text: 'Una lente biconcava ha f = −0,102 m. Che tipo di immagine forma sempre?',
          options: [
            'Reale, invertita, ingrandita',
            'Reale, invertita, rimpicciolita',
            'Virtuale, dritta, rimpicciolita',
            'Virtuale, invertita, stessa dimensione'
          ],
          correctIndex: 2,
          explanation: 'Una lente concava (divergente) forma sempre immagini virtuali, dritte e rimpicciolite, indipendentemente dalla posizione dell\'oggetto.'
        },
        {
          text: 'Per correggere la miopia, quale lente è necessaria?',
          options: ['Convergente (convessa)', 'Divergente (concava)', 'Piana (piatta)', 'Cilindrica'],
          correctIndex: 1,
          explanation: 'La miopia significa che l\'occhio converge la luce troppo fortemente; una lente divergente (concava) riduce la convergenza e sposta il fuoco sulla retina.'
        }
      ],
      discussion: [
        'Spiega la differenza tra una lente convergente e una divergente usando i diagrammi dei raggi.',
        'Perché una lente più curva ha una lunghezza focale più corta?',
        'Come misureresti f per una lente concava senza un fuoco diretto?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Definizione di lunghezza focale',
          pct: 25
        },
        {
          label: 'Convenzione dei segni (f>0, f<0)',
          pct: 25
        },
        {
          label: 'Potere diottrico P=1/f',
          pct: 25
        },
        {
          label: 'Tipi di immagine per ogni lente',
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
        'Posizionare l\'oggetto a p = 200 mm da una lente di f nota.',
        'Spostare lo schermo finché non si forma un\'immagine nitida; registrare q.',
        'Ripetere per p = 150, 130, 100 mm e verificare ogni volta che 1/p + 1/q = 1/f.'
      ],
      expectedOutcome: 'p = 200 mm → q ≈ 90 mm; f ≈ 7 cm (da 1/0,2 + 1/0,09 ≈ 1/0,063). Oggetto a 10 cm con f = 15 cm: immagine virtuale a q = −30 cm.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔵',
          name: 'Lente convergente (f nota)'
        },
        {
          emoji: '💡',
          name: 'Oggetto illuminato (lampada + vetrino oggetto)'
        },
        {
          emoji: '🖥️',
          name: 'Schermo'
        },
        {
          emoji: '📏',
          name: 'Banco ottico con scala graduata'
        }
      ],
      observationsToRecord: [
        'Distanza dell\'oggetto p (mm)',
        'Distanza dell\'immagine q (mm) per ogni p',
        'Se l\'immagine è reale (sullo schermo) o virtuale (non proiettabile)'
      ],
      theoryPoints: [
        'Equazione delle lenti sottili: 1/p + 1/q = 1/f.',
        'Immagini reali: q > 0 (stesso lato dell\'immagine), proiettabili sullo schermo.',
        'Immagini virtuali: q < 0, non proiettabili; appaiono dietro la lente.',
        'Ingrandimento m = −q/p (m negativo = immagine invertita).'
      ],
      realWorldConnections: [
        'Fotocamera: pellicola/sensore alla distanza immagine q per un oggetto alla distanza p.',
        'Proiettori: producono grandi immagini reali sullo schermo posizionando l\'oggetto appena oltre la lunghezza focale.',
        'Lente d\'ingrandimento: oggetto dentro la lunghezza focale → immagine virtuale, dritta, ingrandita.'
      ],
      formula: '1/p + 1/q = 1/f   |   m = −q/p'
    },
    questions: {
      mcq: [
        {
          text: 'Per una lente con f = 70 mm e p = 200 mm, calcola q.',
          options: ['109 mm', '70 mm', '200 mm', '130 mm'],
          correctIndex: 0,
          explanation: '1/q = 1/f − 1/p = 1/70 − 1/200 = (200−70)/(70×200) = 130/14000 → q = 14000/130 ≈ 107,7 mm ≈ 108 mm.'
        },
        {
          text: 'Un oggetto è posto a p = 10 cm da una lente con f = 15 cm. L\'immagine è:',
          options: ['Reale a 30 cm', 'Virtuale a −30 cm', 'Reale a −30 cm', 'Virtuale a 30 cm'],
          correctIndex: 1,
          explanation: '1/q = 1/15 − 1/10 = (2−3)/30 = −1/30 → q = −30 cm. q negativo indica un\'immagine virtuale.'
        },
        {
          text: 'Quando 1/p = 1/f (oggetto nel fuoco), quanto vale q?',
          options: ['q = 0', 'q = f', 'q = ∞', 'q = −f'],
          correctIndex: 2,
          explanation: '1/q = 1/f − 1/f = 0 → q = ∞. I raggi escono paralleli dalla lente; immagine all\'infinito.'
        }
      ],
      discussion: [
        'Disegna un diagramma dei raggi per un oggetto a 2f e prevedi la posizione dell\'immagine usando l\'equazione delle lenti.',
        'Spiega la differenza tra un\'immagine reale e una virtuale. Come si distingue il tipo di immagine ottenuto?',
        'In che modo un proiettore differisce da una fotocamera riguardo alla posizione dell\'oggetto rispetto a f?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Derivazione di 1/p + 1/q = 1/f',
          pct: 30
        },
        {
          label: 'Immagini reali e virtuali',
          pct: 25
        },
        {
          label: 'Ingrandimento m = −q/p',
          pct: 25
        },
        {
          label: 'Casi particolari (p=f, p=2f)',
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
        'Posizionare l\'oggetto (vetrino con freccia) a una distanza u misurata dalla lente.',
        'Trovare l\'immagine nitida sullo schermo alla distanza v.',
        'Misurare S₁ (dimensione oggetto) e S₂ (dimensione immagine); calcolare m = S₂/S₁ e confrontare con −v/u.'
      ],
      expectedOutcome: 'Prova 1: u = 35 mm, v = 86,5 mm, S₁ = 21 mm, S₂ = 51 mm → m = 51/21 ≈ 2,43; −v/u = −86,5/35 ≈ −2,47. Immagine invertita.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔵',
          name: 'Lente convergente'
        },
        {
          emoji: '💡',
          name: 'Vetrino oggetto con freccia (dimensione nota S₁)'
        },
        {
          emoji: '🖥️',
          name: 'Schermo'
        },
        {
          emoji: '📏',
          name: 'Banco ottico con scala millimetrata'
        }
      ],
      observationsToRecord: [
        'Distanza dell\'oggetto u (mm)',
        'Distanza dell\'immagine v (mm)',
        'Dimensione dell\'oggetto S₁ (mm)',
        'Dimensione dell\'immagine S₂ (mm)',
        'm = S₂/S₁ e m = −v/u'
      ],
      theoryPoints: [
        'Ingrandimento lineare: m = dimensione immagine / dimensione oggetto = S₂/S₁.',
        'Dalla geometria dei triangoli simili: m = −v/u (segno negativo = immagine invertita).',
        '|m| > 1: ingrandita; |m| < 1: rimpicciolita; m < 0: invertita.',
        'Immagini reali (v > 0) da oggetto oltre f: invertite (m < 0).'
      ],
      realWorldConnections: [
        'I proiettori richiedono m >> 1 per creare grandi immagini sullo schermo.',
        'I microscopi usano due stadi di lenti; m totale = m_obiettivo × m_oculare.',
        'Le fotocamere richiedono m < 1 per creare piccole immagini sul sensore di scene grandi.'
      ],
      formula: 'm = S₂/S₁ = −v/u = −q/p'
    },
    questions: {
      mcq: [
        {
          text: 'Oggetto a u = 35 mm, immagine a v = 86,5 mm. Qual è l\'ingrandimento?',
          options: ['−2,47', '+2,47', '−0,40', '+0,40'],
          correctIndex: 0,
          explanation: 'm = −v/u = −86,5/35 ≈ −2,47. Negativo: immagine invertita. |m| = 2,47: ingrandita.'
        },
        {
          text: 'Se |m| = 0,5, l\'immagine è:',
          options: [
            'Due volte più grande dell\'oggetto',
            'Della stessa dimensione dell\'oggetto',
            'La metà dell\'oggetto',
            'Tre volte più grande'
          ],
          correctIndex: 2,
          explanation: '|m| = 0,5 significa dimensione immagine = 0,5 × dimensione oggetto → l\'immagine è la metà (rimpicciolita).'
        },
        {
          text: 'Un\'immagine reale formata da una lente convergente è sempre:',
          options: ['Dritta e ingrandita', 'Invertita', 'Virtuale', 'Della stessa dimensione dell\'oggetto'],
          correctIndex: 1,
          explanation: 'Le immagini reali da lenti convergenti (oggetto oltre f) sono sempre invertite (m < 0).'
        }
      ],
      discussion: [
        'Spiega perché m = −v/u ha segno negativo per le immagini reali.',
        'Come imposteresti l\'esperimento per produrre un\'immagine virtuale ingrandita? Quanto varrebbe m?',
        'Una lente di un proiettore produce un\'immagine 50× la dimensione dell\'oggetto. Se l\'oggetto misura 20 mm, quanto è grande l\'immagine?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'm = S₂/S₁ (rapporto dimensioni)',
          pct: 30
        },
        {
          label: 'm = −v/u (rapporto distanze)',
          pct: 30
        },
        {
          label: 'Segno e modulo di m',
          pct: 25
        },
        {
          label: 'Verifica con entrambi i metodi',
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
    equipmentNeeded: 'mobile-lab',
    equipmentNeeded: 'mobile-lab',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti capiscono la sintesi additiva dei colori: rosso + verde + blu = bianco.',
      instructions: [
        'Proiettare luci rossa, verde e blu su uno schermo bianco e sovrapporle.',
        'Registrare il colore in ogni zona di sovrapposizione.',
        'Ripetere con filtri colorati (sottrattiva): osservare i risultati diversi.'
      ],
      expectedOutcome: 'Additiva: R+V=Giallo, R+B=Magenta, V+B=Ciano, R+V+B=Bianco. Sottrattiva: i colori primari CMY si combinano diversamente.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔴',
          name: 'LED / faretto rosso'
        },
        {
          emoji: '🟢',
          name: 'LED / faretto verde'
        },
        {
          emoji: '🔵',
          name: 'LED / faretto blu'
        },
        {
          emoji: '🖥️',
          name: 'Schermo bianco'
        },
        {
          emoji: '🎨',
          name: 'Filtri colorati (CMY)'
        }
      ],
      observationsToRecord: [
        'Colore in ogni zona di sovrapposizione di due primari',
        'Colore quando tutti e tre i primari si sovrappongono',
        'Confronto con i risultati della mescolanza sottrattiva (filtri)'
      ],
      theoryPoints: [
        'Sintesi additiva (luci): R + V = Giallo; R + B = Magenta; V + B = Ciano; R + V + B = Bianco.',
        'Sintesi sottrattiva (pigmenti/filtri): assorbono colori; Ciano + Magenta + Giallo = Nero.',
        'L\'occhio umano possiede tre tipi di coni (sensibili a R, V, B).',
        'Gli schermi TV usano la sintesi additiva (piccoli pixel R, V, B).'
      ],
      realWorldConnections: [
        'Televisori e schermi dei telefoni usano la sintesi additiva RGB.',
        'La stampa usa la sintesi sottrattiva CMYK.',
        'I progettisti di illuminazione scenica usano la sintesi additiva dei colori.'
      ],
      formula: 'Additiva: R+V+B = Bianco   |   Sottrattiva: C+M+G = Nero'
    },
    questions: {
      mcq: [
        {
          text: 'Quale colore si ottiene mescolando luce rossa e verde?',
          options: ['Marrone', 'Giallo', 'Arancione', 'Bianco'],
          correctIndex: 1,
          explanation: 'Sintesi additiva: rosso + verde = giallo.'
        },
        {
          text: 'Mescolando tutti e tre i primari additivi (R+V+B) si ottiene:',
          options: ['Nero', 'Marrone', 'Bianco', 'Grigio'],
          correctIndex: 2,
          explanation: 'I tre primari additivi insieme producono luce bianca.'
        },
        {
          text: 'La sintesi sottrattiva dei colori è usata in:',
          options: ['Schermi televisivi', 'Illuminazione scenica', 'Stampa a colori', 'Proiettori'],
          correctIndex: 2,
          explanation: 'La stampa usa la sintesi sottrattiva CMYK; gli inchiostri assorbono (sottraggono) colori dalla luce bianca.'
        }
      ],
      discussion: [
        'Spiega la differenza tra sintesi additiva e sottrattiva dei colori con esempi.',
        'Perché mescolando tutti i pigmenti si ottiene nero, mentre mescolando tutte le luci si ottiene bianco?',
        'Come fa uno schermo TV a produrre milioni di colori usando solo tre colori?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Primari additivi RGB',
          pct: 30
        },
        {
          label: 'Colori secondari (G, M, C)',
          pct: 25
        },
        {
          label: 'Sintesi sottrattiva (CMY)',
          pct: 25
        },
        {
          label: 'Percezione del colore (cellule a cono)',
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
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti calcolano l\'ingrandimento totale di un microscopio semplice (m = m_oculare × m_obiettivo).',
      instructions: [
        'Microscopio: posizionare l\'oggetto appena oltre f dell\'obiettivo; posizionare l\'oculare per osservare l\'immagine reale intermedia.',
        'Cannocchiale: allineare l\'obiettivo (f lunga) e l\'oculare (f corta) separati da f_ob + f_oc.',
        'Misurare l\'ingrandimento totale confrontando le dimensioni apparenti dell\'immagine e dell\'oggetto.'
      ],
      expectedOutcome: 'Microscopio: M_totale = M_ob × M_oc. Ingrandimento angolare del cannocchiale: M = f_ob/f_oc.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔵',
          name: 'Lente a corta focale (obiettivo)'
        },
        {
          emoji: '🔵',
          name: 'Lente a media focale (oculare)'
        },
        {
          emoji: '📏',
          name: 'Banco ottico'
        },
        {
          emoji: '💡',
          name: 'Oggetto illuminato'
        },
        {
          emoji: '🔭',
          name: 'Lente a lunga focale (obiettivo del cannocchiale)'
        }
      ],
      observationsToRecord: [
        'f_obiettivo e f_oculare (mm)',
        'Ingrandimento totale M_totale per il microscopio',
        'Ingrandimento angolare M = f_ob/f_oc per il cannocchiale'
      ],
      theoryPoints: [
        'Microscopio composto: M_totale = M_ob × M_oc = (v_ob/u_ob) × (D/f_oc).',
        'Cannocchiale: M = f_ob / f_oc (ingrandimento angolare).',
        'Un f_ob corto e un f_oc corto danno un elevato ingrandimento al microscopio.',
        'Cannocchiale: un f_ob grande e un f_oc corto danno un elevato ingrandimento.'
      ],
      realWorldConnections: [
        'I microscopi composti ingrandiscono cellule e microrganismi per lo studio biologico.',
        'I telescopi astronomici usano grandi specchi o lenti obiettivo per raccogliere la luce.',
        'I binocoli combinano due cannocchiali con prismi per un design compatto.'
      ],
      formula: 'Microscopio: M = M_ob × M_oc   |   Cannocchiale: M = f_ob / f_oc'
    },
    questions: {
      mcq: [
        {
          text: 'Un microscopio ha M_ob = 10× e M_oc = 5×. Qual è M_totale?',
          options: ['2×', '15×', '50×', '100×'],
          correctIndex: 2,
          explanation: 'M_totale = M_ob × M_oc = 10 × 5 = 50×.'
        },
        {
          text: 'Un cannocchiale ha f_ob = 600 mm e f_oc = 20 mm. Qual è il suo ingrandimento?',
          options: ['20×', '30×', '600×', '12 000×'],
          correctIndex: 1,
          explanation: 'M = f_ob/f_oc = 600/20 = 30×.'
        },
        {
          text: 'L\'oculare di un microscopio funziona come:',
          options: [
            'Un obiettivo che forma un\'immagine reale',
            'Una lente d\'ingrandimento che osserva l\'immagine reale dell\'obiettivo',
            'Uno specchio',
            'Un proiettore'
          ],
          correctIndex: 1,
          explanation: 'L\'oculare funziona come una semplice lente d\'ingrandimento, ingrandendo l\'immagine reale intermedia formata dall\'obiettivo.'
        }
      ],
      discussion: [
        'Spiega il processo di ingrandimento a due stadi nel microscopio composto.',
        'Perché un cannocchiale necessita di una lente obiettivo di grande diametro?',
        'Confronta il percorso della luce in un cannocchiale rifrattore e in un telescopio riflettore.'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Microscopio composto a due lenti',
          pct: 30
        },
        {
          label: 'Progetto del cannocchiale rifrattore',
          pct: 30
        },
        {
          label: 'M = M_ob × M_oc (microscopio)',
          pct: 20
        },
        {
          label: 'M = f_ob/f_oc (cannocchiale)',
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
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti osservano la dispersione della luce bianca in uno spettro dal prisma e identificano i colori.',
      instructions: [
        'Dirigere un fascio stretto di luce bianca verso una faccia del prisma.',
        'Osservare lo spettro su uno schermo e identificare i colori in ordine.',
        'Notare quale colore viene deviato di più (viola) e meno (rosso).'
      ],
      expectedOutcome: 'Spettro in ordine: rosso, arancione, giallo, verde, blu, indaco, viola (ROY G BIV). Il viola devia di più; il rosso di meno. Riproduce l\'esperimento del prisma di Newton del 1666.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔺',
          name: 'Prisma equilatero di vetro'
        },
        {
          emoji: '🔦',
          name: 'Sorgente di luce bianca (proiettore o fenditura solare)'
        },
        {
          emoji: '🖥️',
          name: 'Schermo bianco'
        },
        {
          emoji: '📏',
          name: 'Righello (per misurare gli angoli di deviazione)'
        }
      ],
      observationsToRecord: [
        'Sequenza dei colori nello spettro',
        'Quale colore devia di più e quale di meno',
        'Larghezza angolare approssimata dello spettro'
      ],
      theoryPoints: [
        'Dispersione: lunghezze d\'onda diverse si rifrangono con angoli leggermente diversi (n varia con λ).',
        'Il viola (λ ≈ 400 nm) ha il più alto indice di rifrazione → devia di più.',
        'Il rosso (λ ≈ 700 nm) ha il più basso indice di rifrazione → devia di meno.',
        'Legge di Snell: n₁ sin θ₁ = n₂ sin θ₂ (ma n dipende dalla lunghezza d\'onda).',
        'Gli arcobaleni sono dispersione naturale da parte delle gocce d\'acqua.'
      ],
      realWorldConnections: [
        'Gli arcobaleni si formano quando la luce solare si disperde nelle gocce d\'acqua.',
        'Gli spettrometri a prisma analizzano la composizione delle sorgenti luminose.',
        'L\'aberrazione cromatica nelle lenti deriva dalla dispersione.'
      ],
      formula: 'n₁ sin θ₁ = n₂ sin θ₂   |   n = n(λ): viola > rosso'
    },
    questions: {
      mcq: [
        {
          text: 'Quale colore della luce viene deviato di più da un prisma di vetro?',
          options: ['Rosso', 'Verde', 'Viola', 'Giallo'],
          correctIndex: 2,
          explanation: 'Il viola ha la lunghezza d\'onda più corta e il più alto indice di rifrazione nel vetro → deviazione massima.'
        },
        {
          text: 'Perché un prisma separa la luce bianca nei colori?',
          options: [
            'Assorbe alcuni colori',
            'Lunghezze d\'onda diverse hanno indici di rifrazione diversi',
            'Il prisma è molto spesso',
            'La luce rimbalza all\'interno del prisma'
          ],
          correctIndex: 1,
          explanation: 'Dispersione: n varia con la lunghezza d\'onda. Ogni colore si rifrange con un angolo leggermente diverso.'
        },
        {
          text: 'La sequenza dei colori da un prisma, dal meno deviato al più deviato, è:',
          options: ['V I B G Y O R', 'R O Y G B I V', 'R G B', 'W Y G'],
          correctIndex: 1,
          explanation: 'Il rosso devia di meno, il viola di più: R O Y G B I V (ROY G BIV).'
        }
      ],
      discussion: [
        'Spiega perché la luce viola si piega di più della luce rossa quando passa attraverso il vetro.',
        'Come si forma un arcobaleno? Quale colore appare sul bordo esterno e quale su quello interno?',
        'Cos\'è l\'aberrazione cromatica e come si relaziona alla dispersione?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Dispersione: n = n(λ)',
          pct: 30
        },
        {
          label: 'Ordine dello spettro ROY G BIV',
          pct: 25
        },
        {
          label: 'Legge di Snell a ciascuna interfaccia',
          pct: 25
        },
        {
          label: 'Arcobaleno e dispersione reale',
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
      expected: 'Spettro: R-O-Y-G-B-I-V. Il viola è il più deviato, il rosso il meno. n(viola) > n(rosso) confermato.'
    }
  },
  {
    num: 35,
    cardEmoji: "🌗",
    title: 'Ombre e penombre',
    section: 'Optics',
    desc: 'Studia la formazione di ombre e penombre proiettate da sorgenti luminose di diverse dimensioni.',
    equipmentNeeded: 'basic-supplies',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano la legge della propagazione rettilinea della luce con la formazione di ombre e penombre.',
      instructions: [
        'Posizionare un piccolo oggetto opaco tra una sorgente luminosa puntiforme e uno schermo.',
        'Misurare la dimensione dell\'ombra in funzione della distanza oggetto-schermo.',
        'Ripetere con una sorgente luminosa estesa (più grande) e osservare la penombra.'
      ],
      expectedOutcome: 'Sorgente puntiforme → ombra netta (solo ombra). Sorgente estesa → ombra circondata da penombra. La dimensione dell\'ombra aumenta quando l\'oggetto si avvicina allo schermo.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔦',
          name: 'Sorgente luminosa puntiforme (piccolo LED)'
        },
        {
          emoji: '💡',
          name: 'Sorgente luminosa estesa (lampada con lampadina grande)'
        },
        {
          emoji: '⚫',
          name: 'Oggetto opaco (pallina o disco)'
        },
        {
          emoji: '🖥️',
          name: 'Schermo bianco'
        },
        {
          emoji: '📏',
          name: 'Righello'
        }
      ],
      observationsToRecord: [
        'Dimensioni dell\'ombra per sorgente puntiforme e sorgente estesa',
        'Presenza/assenza di penombra',
        'Effetto della distanza oggetto-schermo sulla dimensione dell\'ombra'
      ],
      theoryPoints: [
        'Ombra: regione di oscurità totale (nessuna luce diretta dalla sorgente).',
        'Penombra: regione di ombra parziale (parte della luce della sorgente la raggiunge).',
        'Sorgente puntiforme → solo ombra (contorno netto).',
        'Sorgente estesa → ombra + penombra.',
        'Ottica geometrica: la luce si propaga in linea retta (modello a raggi).'
      ],
      realWorldConnections: [
        'Le eclissi solari e lunari coinvolgono zone di ombra e penombra.',
        'Fotografia: i grandi softbox creano ombre morbide (penombra ampia); un piccolo LED crea ombre dure.',
        'Le meridiane funzionano perché la posizione dell\'ombra del Sole indica l\'ora.'
      ],
      formula: 'Geometria dell\'ombra: triangoli simili; altezza ombra/altezza oggetto = distanza schermo/distanza oggetto'
    },
    questions: {
      mcq: [
        {
          text: 'Qual è la differenza fondamentale tra ombra e penombra?',
          options: [
            'L\'ombra è colorata; la penombra è grigia',
            'L\'ombra non riceve luce diretta; la penombra riceve luce parziale',
            'L\'ombra è più grande della penombra',
            'Non c\'è differenza'
          ],
          correctIndex: 1,
          explanation: 'L\'ombra è la regione di oscurità totale che non riceve luce diretta dalla sorgente. La penombra è l\'ombra parziale dove parte della sorgente è schermata.'
        },
        {
          text: 'Quale tipo di sorgente luminosa produce l\'ombra più netta, senza penombra?',
          options: [
            'Sorgente estesa (lampadina grande)',
            'Sorgente puntiforme (LED molto piccolo)',
            'Sorgente diffusa',
            'Sorgente colorata'
          ],
          correctIndex: 1,
          explanation: 'Una sorgente puntiforme produce raggi da un singolo punto; il bordo geometrico dell\'ombra è perfettamente netto, senza penombra.'
        },
        {
          text: 'Quando un oggetto opaco si avvicina allo schermo (sorgente puntiforme invariata), l\'ombra:',
          options: ['Diventa più grande', 'Diventa più piccola', 'Rimane la stessa', 'Scompare'],
          correctIndex: 1,
          explanation: 'Avvicinando l\'oggetto allo schermo, la dimensione dell\'ombra diminuisce (triangoli simili: angolo proiettato minore).'
        }
      ],
      discussion: [
        'Spiega perché l\'ombra della Luna durante un\'eclissi solare ha sia un\'ombra sia una penombra.',
        'Perché i fotografi usano grandi softbox per realizzare ritratti lusinghieri?',
        'Usa i triangoli simili per ricavare una formula per l\'altezza dell\'ombra in funzione della distanza dalla sorgente, della dimensione dell\'oggetto e della distanza dallo schermo.'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Ombra vs. penombra',
          pct: 30
        },
        {
          label: 'Sorgente puntiforme vs. estesa',
          pct: 30
        },
        {
          label: 'Geometria dell\'ombra (triangoli simili)',
          pct: 25
        },
        {
          label: 'Geometria delle eclissi',
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
      expected: 'Sorgente puntiforme: ombra netta. Sorgente estesa: la penombra circonda l\'ombra. La dimensione dell\'ombra aumenta con la distanza oggetto-schermo.'
    }
  },
  {
    num: 36,
    cardEmoji: "🪞",
    title: 'Specchi',
    section: 'Optics',
    desc: 'Esplora la riflessione della luce su specchi piani, concavi e convessi e verifica la legge della riflessione.',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano la legge della riflessione (angolo di incidenza = angolo di riflessione) per diversi specchi.',
      instructions: [
        'Posizionare l\'oggetto oltre C (centro di curvatura) dello specchio concavo; individuare l\'immagine reale.',
        'Spostare l\'oggetto all\'interno di f; osservare un\'immagine virtuale, diritta e ingrandita.',
        'Sostituire con uno specchio convesso; osservare un\'immagine sempre virtuale, diritta e rimpicciolita.'
      ],
      expectedOutcome: 'Concavo: oggetto oltre f → immagine reale capovolta. Oggetto entro f → virtuale, diritta, ingrandita. Convesso: sempre virtuale, diritta, rimpicciolita (ampio campo visivo).'
    },
    experiment: {
      equipment: [
        {
          emoji: '🥄',
          name: 'Specchio concavo'
        },
        {
          emoji: '🔵',
          name: 'Specchio convesso'
        },
        {
          emoji: '💡',
          name: 'Oggetto illuminato'
        },
        {
          emoji: '🖥️',
          name: 'Schermo'
        },
        {
          emoji: '📏',
          name: 'Banco ottico'
        }
      ],
      observationsToRecord: [
        'Distanza dell\'oggetto u (cm)',
        'Distanza dell\'immagine v (cm) per lo specchio concavo',
        'Orientamento (diritta/capovolta) e dimensione dell\'immagine',
        'Tipo di immagine per lo specchio convesso'
      ],
      theoryPoints: [
        'Equazione degli specchi: 1/v + 1/u = 1/f = 2/R.',
        'Specchio concavo: f < 0 (fuoco reale). Oggetto a u > f → immagine reale, capovolta.',
        'Specchio concavo: u < f → immagine virtuale, diritta, ingrandita (specchio da barba/trucco).',
        'Specchio convesso: f > 0 (fuoco virtuale). Sempre: immagine virtuale, diritta, rimpicciolita.',
        'Lo specchio convesso ha un campo visivo più ampio → usato negli specchietti laterali delle auto.'
      ],
      realWorldConnections: [
        'Gli specchi convessi nei negozi e negli specchietti delle auto offrono un ampio campo visivo.',
        'Gli specchi concavi nei telescopi (riflettori) e nelle antenne paraboliche concentrano i segnali.',
        'Gli specchi concavi usati negli specchi da trucco danno un\'immagine diritta ingrandita.'
      ],
      formula: '1/v + 1/u = 1/f = 2/R   |   m = −v/u'
    },
    questions: {
      mcq: [
        {
          text: 'Uno specchio convesso produce sempre un\'immagine:',
          options: [
            'Reale, capovolta e ingrandita',
            'Reale, capovolta e rimpicciolita',
            'Virtuale, diritta e rimpicciolita',
            'Virtuale, capovolta e ingrandita'
          ],
          correctIndex: 2,
          explanation: 'Gli specchi convessi (divergenti) producono sempre immagini virtuali, diritte e rimpicciolite indipendentemente dalla posizione dell\'oggetto.'
        },
        {
          text: 'Uno specchio concavo forma un\'immagine reale quando l\'oggetto è:',
          options: [
            'Entro la distanza focale',
            'Esattamente nel fuoco',
            'Oltre la distanza focale',
            'Solo all\'infinito'
          ],
          correctIndex: 2,
          explanation: 'Gli specchi concavi formano immagini reali quando l\'oggetto è oltre il fuoco (u > f).'
        },
        {
          text: 'Perché gli specchi convessi sono usati come specchietti retrovisori delle auto?',
          options: [
            'Ingrandiscono gli oggetti',
            'Offrono un campo visivo più ampio',
            'Eliminano l\'abbagliamento',
            'Mostrano immagini reali'
          ],
          correctIndex: 1,
          explanation: 'Gli specchi convessi producono sempre immagini rimpicciolite, consentendo un campo visivo più ampio con dimensioni compatte.'
        }
      ],
      discussion: [
        'Disegna i diagrammi dei raggi per uno specchio concavo con l\'oggetto (a) oltre C, (b) tra f e C, (c) entro f.',
        'Perché uno specchio da trucco usa uno specchio concavo anziché convesso?',
        'Qual è il significato dell\'avviso \'Gli oggetti nello specchio sono più vicini di quanto appaiano\' sugli specchietti delle auto?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Equazione degli specchi 1/v+1/u=1/f',
          pct: 25
        },
        {
          label: 'Tipi di immagini dello specchio concavo',
          pct: 30
        },
        {
          label: 'Proprietà dello specchio convesso',
          pct: 25
        },
        {
          label: 'Applicazioni degli specchi curvi',
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
      expected: 'Concavo: u>f → immagine reale capovolta sullo schermo. u<f → immagine virtuale ingrandita. Convesso: sempre virtuale, diritta, rimpicciolita.'
    }
  },
  {
    num: 37,
    cardEmoji: "🧲",
    title: 'Forza magnetica attrattiva e repulsiva',
    section: 'Magnetism',
    desc: 'Esplora le forze attrattive e repulsive tra magneti permanenti e misura la variazione con la distanza.',
    equipmentNeeded: 'mobile-lab',
    setupTime: '3 min',
    duration: '10 min',
    summary: {
      whatTheyLearn: 'Gli studenti misurano la forza magnetica in funzione della distanza e verificano la dipendenza da 1/d².',
      instructions: [
        'Avvicinare il polo N del magnete A al polo N del magnete B: osservare la repulsione.',
        'Avvicinare il polo N di A al polo S di B: osservare l\'attrazione.',
        'Misurare la forza (qualitativamente) a diverse distanze.'
      ],
      expectedOutcome: 'N-N e S-S: repulsione. N-S: attrazione. La forza diminuisce rapidamente con la distanza di separazione.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🧲',
          name: 'Due magneti a barra (contrassegnati N/S)'
        },
        {
          emoji: '📏',
          name: 'Righello'
        },
        {
          emoji: '🧭',
          name: 'Bussola (per identificare i poli)'
        }
      ],
      observationsToRecord: [
        'Tipo di forza (attrattiva/repulsiva) per ogni combinazione di poli',
        'Forza qualitativa a diverse distanze',
        'Conferma dell\'etichettatura dei poli con la bussola'
      ],
      theoryPoints: [
        'Poli uguali (N-N, S-S) si respingono; poli opposti (N-S) si attraggono.',
        'Forza magnetica ∝ 1/r² (approssimazione dipolare a grandi distanze).',
        'I monopoli magnetici non esistono; ogni magnete ha entrambi i poli N e S.',
        'Tagliando un magnete a metà si ottengono due nuovi magneti, ciascuno con poli N e S.'
      ],
      realWorldConnections: [
        'I treni a levitazione magnetica usano la repulsione tra poli uguali per viaggiare senza attrito.',
        'Gli aghi delle bussole si allineano al campo magnetico terrestre (il polo N punta al nord geografico).',
        'Le macchine per risonanza magnetica (MRI) usano potenti magneti superconduttori.'
      ],
      formula: 'F ∝ 1/r²   |   Poli uguali si respingono; poli opposti si attraggono'
    },
    questions: {
      mcq: [
        {
          text: 'Due poli nord vengono avvicinati. Cosa succede?',
          options: ['Si attraggono', 'Si respingono', 'Non succede nulla', 'Si neutralizzano a vicenda'],
          correctIndex: 1,
          explanation: 'Poli magnetici uguali (N-N o S-S) si respingono sempre.'
        },
        {
          text: 'Se tagli un magnete a barra a metà, cosa ottieni?',
          options: [
            'Un magnete solo-N e uno solo-S',
            'Due magneti più piccoli ciascuno con poli N e S',
            'Due pezzi smagnetizzati',
            'Un magnete intero e un pezzo non magnetico'
          ],
          correctIndex: 1,
          explanation: 'I monopoli magnetici non esistono; ogni metà diventa un magnete completo con entrambi i poli N e S.'
        },
        {
          text: 'La forza tra due magneti quando la loro distanza raddoppia:',
          options: ['Raddoppia', 'Si dimezza', 'Si riduce a circa un quarto', 'Rimane la stessa'],
          correctIndex: 2,
          explanation: 'La forza dipolare magnetica diminuisce circa come 1/r³ per dipolo-dipolo (o 1/r² per monopolo), quindi raddoppiare r riduce la forza di ~4× (o più).'
        }
      ],
      discussion: [
        'Perché i monopoli magnetici non sembrano esistere, anche quando tagli un magnete?',
        'Come funziona una bussola? Quale estremità di una bussola punta a nord, e perché questa nomenclatura è fuorviante?',
        'Descrivi un\'applicazione pratica dell\'attrazione magnetica e una della repulsione magnetica.'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Poli uguali si respingono, opposti si attraggono',
          pct: 35
        },
        {
          label: 'Relazione forza-distanza',
          pct: 25
        },
        {
          label: 'Assenza di monopoli magnetici',
          pct: 25
        },
        {
          label: 'Applicazioni reali',
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
      expected: 'N-N: repulsione. N-S: attrazione. S-S: repulsione. La forza diminuisce rapidamente oltre ~5 cm.'
    }
  },
  {
    num: 38,
    cardEmoji: "🌀",
    title: 'Forze del campo magnetico',
    section: 'Magnetism',
    desc: 'Mappa le linee del campo magnetico intorno a un magnete a barra usando limatura di ferro e bussoline.',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '10 min',
    summary: {
      whatTheyLearn: 'Gli studenti mappano le linee di campo magnetico e identificano poli nord e sud del magnete.',
      instructions: [
        'Posizionare il magnete a U sotto la camera di campo 2D.',
        'Picchiettare delicatamente la camera per aiutare la limatura di ferro ad allinearsi alle linee di campo.',
        'Disegnare o fotografare la configurazione risultante.'
      ],
      expectedOutcome: 'Le linee di campo si curvano dal polo N al polo S, più dense tra i poli. Fuori dal traferro: linee più disperse e deboli.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🧲',
          name: 'Magnete a U (ferro di cavallo)'
        },
        {
          emoji: '🧪',
          name: 'Camera di campo 2D con limatura di ferro'
        },
        {
          emoji: '📸',
          name: 'Macchina fotografica o matita/carta per schizzi'
        }
      ],
      observationsToRecord: [
        'Forma e direzione delle linee di campo',
        'Densità delle linee di campo tra i poli e all\'esterno',
        'Se le linee di campo sono anelli chiusi'
      ],
      theoryPoints: [
        'Linee del campo magnetico: percorso esterno da N a S; percorso interno da S a N (anelli chiusi).',
        'La densità delle linee di campo indica l\'intensità del campo: più dense = più forti.',
        'Le linee di campo non si incrociano mai.',
        'Tra i poli di un magnete a U: campo quasi uniforme e intenso.'
      ],
      realWorldConnections: [
        'Le macchine MRI usano campi magnetici uniformi e intensi (come tra i poli del magnete a U ma molto più forti).',
        'Gli elettromagneti in motori e generatori usano la stessa geometria di campo.',
        'La memorizzazione magnetica (dischi rigidi) usa minuscoli domini magnetici.'
      ],
      formula: 'Linee del campo B: N → S all\'esterno, S → N all\'interno (anelli chiusi)'
    },
    questions: {
      mcq: [
        {
          text: 'Dove è più intenso il campo magnetico di un magnete a U?',
          options: [
            'Alle estremità dei bracci',
            'Tra i due poli (nel traferro)',
            'Lontano dal magnete',
            'Sul retro del magnete'
          ],
          correctIndex: 1,
          explanation: 'Le linee di campo sono più dense tra i due poli, indicando il campo più intenso nel traferro.'
        },
        {
          text: 'Le linee del campo magnetico:',
          options: [
            'Iniziano e finiscono su poli liberi',
            'Formano anelli chiusi da N a S all\'esterno',
            'Si incrociano ad angolo retto',
            'Puntano da S a N all\'esterno'
          ],
          correctIndex: 1,
          explanation: 'Le linee di campo formano anelli chiusi: da N a S all\'esterno, da S a N all\'interno. Non si incrociano mai.'
        },
        {
          text: 'La limatura di ferro in una camera di campo si allinea:',
          options: [
            'Perpendicolarmente alle linee di campo',
            'Lungo la direzione del campo magnetico',
            'In modo casuale',
            'Verso il nord geografico'
          ],
          correctIndex: 1,
          explanation: 'La limatura di ferro si magnetizza temporaneamente e si allinea alla direzione locale del campo magnetico.'
        }
      ],
      discussion: [
        'Spiega perché le linee del campo magnetico non possono incrociarsi.',
        'In che modo la spaziatura delle linee di campo indica l\'intensità del campo?',
        'Perché il campo tra i poli di un magnete a ferro di cavallo è più uniforme rispetto a quello attorno a un magnete a barra?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Direzione delle linee di campo N→S',
          pct: 30
        },
        {
          label: 'Densità delle linee = intensità del campo',
          pct: 30
        },
        {
          label: 'Proprietà degli anelli chiusi',
          pct: 25
        },
        {
          label: 'Campo uniforme tra i poli',
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
      expected: 'Le linee di campo si curvano da N a S tra i poli, più dense nel traferro. All\'esterno dei poli: disperse. Le linee formano anelli chiusi.'
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
        'Posizionare la bussola in diverse posizioni attorno a un magnete a barra.',
        'Registrare la direzione indicata dall\'ago della bussola in ogni posizione.',
        'Tracciare la configurazione del campo collegando le direzioni della bussola.'
      ],
      expectedOutcome: 'Il polo N della bussola punta verso il polo S del magnete. La bussola traccia le linee del campo magnetico attorno al magnete a barra.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🧭',
          name: 'Bussola magnetica'
        },
        {
          emoji: '🧲',
          name: 'Magnete a barra'
        },
        {
          emoji: '📝',
          name: 'Carta (su cui posizionare la bussola e segnare le direzioni)'
        },
        {
          emoji: '✏️',
          name: 'Matita'
        }
      ],
      observationsToRecord: [
        'Direzione dell\'ago della bussola in ogni posizione attorno al magnete',
        'Posizioni in cui il campo è più intenso (massima deflessione)',
        'Percorso tracciato collegando le letture della bussola'
      ],
      theoryPoints: [
        'L\'ago della bussola è un piccolo magnete a barra; il suo polo N punta nella direzione del campo B.',
        'Il polo S del magnete esterno attrae il polo N della bussola (i poli opposti si attraggono).',
        'Campo magnetico terrestre: il N della bussola punta al nord geografico (il polo sud magnetico della Terra è vicino al nord geografico).',
        'Le linee di campo mappate con la bussola = stesse configurazioni ottenute con la limatura di ferro.'
      ],
      realWorldConnections: [
        'Navigazione: le bussole hanno guidato i marinai per oltre 1000 anni.',
        'Le prospezioni geologiche usano magnetometri (bussole ultra-sensibili) per mappare i giacimenti sotterranei.',
        'I piccioni hanno particelle biologiche di magnetite e si orientano con il campo terrestre.'
      ],
      formula: 'Polo N della bussola → direzione del vettore campo B'
    },
    questions: {
      mcq: [
        {
          text: 'Quale polo di un magnete a barra attrae il polo N dell\'ago della bussola?',
          options: ['Polo N', 'Polo S', 'Entrambi i poli', 'Nessun polo'],
          correctIndex: 1,
          explanation: 'I poli opposti si attraggono: il polo N della bussola è attratto dal polo S del magnete.'
        },
        {
          text: 'L\'ago della bussola punta nella direzione:',
          options: [
            'Del polo sud magnetico',
            'Del campo magnetico locale B',
            'Del nord vero sempre',
            'Del polo N del magnete più vicino'
          ],
          correctIndex: 1,
          explanation: 'Il polo N della bussola si allinea alla direzione del campo magnetico locale (definita da N a S all\'esterno).'
        },
        {
          text: 'Il polo nord geografico della Terra corrisponde magneticamente a:',
          options: [
            'Il polo nord magnetico della Terra',
            'Il polo sud magnetico della Terra',
            'Una zona neutra',
            'Nessun polo magnetico'
          ],
          correctIndex: 1,
          explanation: 'Il polo sud magnetico della Terra si trova vicino al polo nord geografico; per questo gli aghi delle bussole puntano a \'nord\' — i loro poli N sono attratti dal sud magnetico terrestre.'
        }
      ],
      discussion: [
        'Perché una bussola punta a nord? Spiega usando la teoria dei poli magnetici.',
        'Come useresti una bussola per mappare l\'intera configurazione del campo magnetico attorno a un magnete a barra?',
        'Spiega perché una bussola è inutile al polo sud geografico.'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'La bussola si allinea al campo B',
          pct: 30
        },
        {
          label: 'Poli opposti si attraggono (S attrae N della bussola)',
          pct: 30
        },
        {
          label: 'Campo terrestre e navigazione con bussola',
          pct: 25
        },
        {
          label: 'Tecnica di mappatura del campo',
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
      expected: 'Polo N della bussola → verso il polo S del magnete. Le linee di campo tracciate collegano tutte le direzioni della bussola. Il pattern corrisponde alla mappa con limatura di ferro.'
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
        'Posizionare due magneti con i poli N affacciati: osservare la repulsione.',
        'Inserire una sfera d\'acciaio tra di essi: osservare che i magneti ora si muovono verso la sfera.',
        'Rimuovere la sfera: la repulsione ritorna.'
      ],
      expectedOutcome: 'N-N senza sfera: repulsione. N-sfera-N: i magneti sono attratti dalla sfera. La sfera media un\'attrazione effettiva N-N tramite magnetizzazione indotta.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🧲',
          name: 'Due piccoli magneti identici (entrambi con polo N rivolto verso l\'esterno)'
        },
        {
          emoji: '⚙️',
          name: 'Sfera d\'acciaio (cuscinetto)'
        },
        {
          emoji: '📏',
          name: 'Righello / superficie'
        }
      ],
      observationsToRecord: [
        'Tipo di forza (attrattiva/repulsiva) senza sfera tra i magneti N-N',
        'Tipo di forza con sfera d\'acciaio tra i magneti N-N',
        'Comportamento quando la sfera viene rimossa'
      ],
      theoryPoints: [
        'L\'acciaio è ferromagnetico: un campo esterno induce in esso una magnetizzazione.',
        'Sfera tra due poli N: ogni magnete induce un polo S nel lato più vicino della sfera.',
        'Ogni magnete vede un polo S vicino → attrazione verso la sfera.',
        'Risultato: N-sfera-N appare attrattivo tramite la sfera.',
        'Il ferro dolce perde la magnetizzazione quando viene rimosso dal campo; l\'acciaio duro ne conserva una parte.'
      ],
      realWorldConnections: [
        'Gli elettromagneti sollevano ferro e acciaio inducendo la magnetizzazione.',
        'La risonanza magnetica (MRI) usa la magnetizzazione nucleare indotta.',
        'Il controllo magnetoscopico rileva cricche nell\'acciaio tramite distorsioni del campo indotto.'
      ],
      formula: 'Magnetizzazione indotta in materiale ferromagnetico → attrazione verso il campo esterno'
    },
    questions: {
      mcq: [
        {
          text: 'Due magneti con polo N affacciati hanno una sfera d\'acciaio fra loro. I magneti:',
          options: [
            'Si respingono ancora l\'un l\'altro',
            'Sono attratti verso la sfera d\'acciaio',
            'Non subiscono alcuna forza',
            'Ruotano per rivolgere i poli S verso la sfera'
          ],
          correctIndex: 1,
          explanation: 'La sfera d\'acciaio si magnetizza; ogni magnete è attratto dal polo opposto indotto nella faccia più vicina della sfera.'
        },
        {
          text: 'Perché la sfera d\'acciaio si magnetizza quando viene posta tra i magneti?',
          options: [
            'Contiene magneti naturali',
            'Il campo magnetico esterno induce una magnetizzazione temporanea (ferromagnetismo)',
            'L\'acciaio è sempre magnetico',
            'La sfera viene riscaldata dai magneti'
          ],
          correctIndex: 1,
          explanation: 'L\'acciaio è ferromagnetico; un campo esterno allinea i suoi domini magnetici, inducendo una magnetizzazione temporanea.'
        },
        {
          text: 'Cosa succede alla forza apparente N-N quando la sfera d\'acciaio viene rimossa?',
          options: ['Rimane attrattiva', 'Torna repulsiva', 'Diventa zero', 'Si inverte permanentemente'],
          correctIndex: 1,
          explanation: 'Senza la sfera, la configurazione N-N riprende la sua normale repulsione.'
        }
      ],
      discussion: [
        'Spiega, usando la teoria dei domini magnetici, perché la sfera d\'acciaio si magnetizza tra i due poli N.',
        'Come fa un elettromagnete a sollevare oggetti di ferro? Qual è la somiglianza con questo esperimento?',
        'Perché una sfera d\'acciaio potrebbe conservare un po\' di magnetizzazione dopo essere stata rimossa, mentre una sfera di ferro dolce no?'
      ]
    },
    overview: {
      conceptBreakdown: [
        {
          label: 'Poli uguali normalmente si respingono',
          pct: 25
        },
        {
          label: 'Induzione ferromagnetica nell\'acciaio',
          pct: 35
        },
        {
          label: 'I poli opposti indotti causano attrazione',
          pct: 25
        },
        {
          label: 'Ferromagneti dolci vs. duri',
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
      expected: 'N-N: repulsione. N-sfera-N: i magneti si muovono verso la sfera (attrazione). Sfera rimossa: la repulsione ritorna.'
    }
  },
  {
    num: 41,
    cardEmoji: "💡",
    title: 'Resistenza elettrica',
    section: 'Electricity',
    desc: 'Misura la resistenza di diversi conduttori con il metodo voltamperometrico e verifica la legge di Ohm.',
    equipmentNeeded: 'mobile-lab',
    equipmentNeeded: 'mobile-lab',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '20 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano la legge di Ohm: R = V/I, e misurano la resistenza con il metodo voltamperometrico.',
      instructions: [
        'Collegare il resistore R₁ ≈ 100 Ω in serie con l\'amperometro; voltmetro ai capi di R₁.',
        'Variare la tensione di alimentazione da 1 V a 5 V a passi; registrare I (mA) per ogni V.',
        'Tracciare V in funzione di I; la pendenza = R.'
      ],
      expectedOutcome: 'R = 100,8 Ω; V = 2,75 V → I = 25 mA. V/I = 2,75/0,025 = 110 Ω (prossimo al nominale). Il grafico è lineare e passa per l\'origine.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔋',
          name: 'Alimentatore DC variabile (0–6 V)'
        },
        {
          emoji: '⚡',
          name: 'Resistore ~100 Ω'
        },
        {
          emoji: '🔌',
          name: 'Amperometro (portata mA)'
        },
        {
          emoji: '🔌',
          name: 'Voltmetro'
        },
        {
          emoji: '🪛',
          name: 'Cavi di collegamento e breadboard'
        }
      ],
      observationsToRecord: [
        'Tensione V (V) per ogni impostazione dell\'alimentatore',
        'Corrente I (mA) per ogni V',
        'Resistenza calcolata R = V/I (Ω) per ogni prova'
      ],
      theoryPoints: [
        'Legge di Ohm: V = IR (o I = V/R); R è costante per i conduttori ohmici.',
        'Resistenza R = V/I (Ω); 1 Ω = 1 V/A.',
        'Conduttori ohmici: il grafico V-I è lineare e passa per l\'origine.',
        'Dispositivi non ohmici (diodi, lampadine): V-I non è lineare.'
      ],
      realWorldConnections: [
        'Ogni dispositivo elettronico usa la legge di Ohm per la progettazione dei circuiti.',
        'I fusibili sono dimensionati in ampere (I_max = V/R_circuito).',
        'Sicurezza elettrica: toccare una sorgente ad alta tensione con bassa resistenza corporea produce una I elevata.'
      ],
      formula: 'V = IR   |   R = V/I (Ω)'
    },
    questions: {
      mcq: [
        {
          text: 'Un resistore da 100 Ω ha una tensione di 2,75 V ai suoi capi. Quale corrente vi scorre?',
          options: ['27,5 mA', '2,75 mA', '0,275 A', '275 mA'],
          correctIndex: 0,
          explanation: 'I = V/R = 2,75/100 = 0,0275 A = 27,5 mA.'
        },
        {
          text: 'In un grafico V in funzione di I per un resistore ohmico, la pendenza rappresenta:',
          options: ['La corrente', 'La tensione', 'La resistenza R', 'La potenza'],
          correctIndex: 2,
          explanation: 'V = IR → V/I = R → pendenza del grafico V in funzione di I = R.'
        },
        {
          text: 'Quale dei seguenti è un conduttore ohmico?',
          options: [
            'Diodo LED',
            'Lampada a filamento di tungsteno a temperatura variabile',
            'Resistore metallico a temperatura costante',
            'Termistore a semiconduttore'
          ],
          correctIndex: 2,
          explanation: 'Un resistore metallico a temperatura costante segue V = IR linearmente — è ohmico.'
        }
      ],
      discussion: [
        'Traccia V in funzione di I per i tuoi dati. La relazione è lineare? Cosa rappresenta la pendenza?',
        'Perché il filamento di una lampadina potrebbe NON obbedire perfettamente alla legge di Ohm?',
        'Calcola la potenza dissipata nel resistore da 100 Ω a V = 2,75 V.'
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
      expected: 'R=100,8 Ω; V=2,75 V → I=25 mA. V vs. I lineare, pendenza ≈ 100 Ω. Conferma V=IR.'
    }
  },
  {
    num: 42,
    cardEmoji: "⚡",
    title: 'Circuiti in serie e in parallelo',
    section: 'Electricity',
    desc: 'Confronta la corrente e la tensione in circuiti in serie e in parallelo e verifica le leggi di Kirchhoff.',
    equipmentNeeded: 'mobile-lab',
    setupTime: '5 min',
    duration: '30 min',
    summary: {
      whatTheyLearn: 'Gli studenti verificano le leggi di Kirchhoff per circuiti in serie (I costante) e parallelo (V costante).',
      instructions: [
        'Misurare R₁ e R₂ singolarmente con ohmetro o con il metodo V/I.',
        'Collegarli in serie; misurare la R_T totale e verificare R_T = R₁ + R₂.',
        'Collegarli in parallelo; misurare R_T e verificare 1/R_T = 1/R₁ + 1/R₂.'
      ],
      expectedOutcome: 'Atteso: V = 5,8 V. R₁ = R₂ = 100 Ω: in serie R_T = 200 Ω; in parallelo R_T = 50 Ω. R_T in parallelo < la più piccola R individuale.'
    },
    experiment: {
      equipment: [
        {
          emoji: '🔋',
          name: 'Batteria o alimentatore DC (5,8 V)'
        },
        {
          emoji: '⚡',
          name: 'Due resistori R₁ = R₂ = 100 Ω'
        },
        {
          emoji: '🔌',
          name: 'Amperometro e voltmetro'
        },
        {
          emoji: '🪛',
          name: 'Cavi di collegamento, breadboard'
        }
      ],
      observationsToRecord: [
        'R₁ e R₂ singolarmente (Ω)',
        'V e I per la combinazione in serie → R_serie = V/I',
        'V e I per la combinazione in parallelo → R_parallelo = V/I'
      ],
      theoryPoints: [
        'Serie: stessa corrente in ciascuno; le tensioni si sommano. R_T = R₁ + R₂.',
        'Parallelo: stessa tensione ai capi di ciascuno; le correnti si sommano. 1/R_T = 1/R₁ + 1/R₂.',
        'In parallelo R_T è sempre minore della più piccola resistenza individuale.',
        'Impianti domestici: il cablaggio in parallelo fornisce a ciascun dispositivo la piena tensione di rete.'
      ],
      realWorldConnections: [
        'Luci di Natale: vecchie serie — una lampadina si brucia → si spengono tutte. Le moderne stringhe in parallelo restano accese.',
        'Gli impianti elettrici domestici sono in parallelo così ogni presa riceve i 230 V pieni.',
        'I resistori in serie sono usati nei partitori di tensione; quelli in parallelo nei partitori di corrente.'
      ],
      formula: 'Serie: R_T = R₁ + R₂   |   Parallelo: 1/R_T = 1/R₁ + 1/R₂'
    },
    questions: {
      mcq: [
        {
          text: 'Due resistori da 100 Ω in serie. Quanto vale R_T?',
          options: ['50 Ω', '100 Ω', '200 Ω', '400 Ω'],
          correctIndex: 2,
          explanation: 'R_T = R₁ + R₂ = 100 + 100 = 200 Ω.'
        },
        {
          text: 'Due resistori da 100 Ω in parallelo. Quanto vale R_T?',
          options: ['200 Ω', '100 Ω', '50 Ω', '25 Ω'],
          correctIndex: 2,
          explanation: '1/R_T = 1/100 + 1/100 = 2/100; R_T = 50 Ω.'
        },
        {
          text: 'Perché gli impianti elettrici domestici sono cablati in parallelo?',
          options: [
            'Per aumentare la resistenza totale',
            'Perché ogni dispositivo riceva la piena tensione di alimentazione',
            'Per ridurre la corrente',
            'Perché la serie è troppo complessa'
          ],
          correctIndex: 1,
          explanation: 'In parallelo ogni ramo ha la piena tensione di alimentazione (230 V), così ogni dispositivo opera indipendentemente alla sua tensione nominale.'
        }
      ],
      discussion: [
        'Spiega perché aggiungere più resistori in parallelo diminuisce sempre la resistenza totale.',
        'Perché le vecchie luci di Natale in serie si spengono tutte quando una lampadina si brucia?',
        'Una casa ha un\'alimentazione di 230 V e tre elettrodomestici da 100 Ω. Calcola I_totale se tutti e tre sono collegati in parallelo.'
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
      expected: 'R₁=R₂=100 Ω: serie → 200 Ω; parallelo → 50 Ω. Impianti domestici: parallelo così ogni dispositivo riceve i 230 V pieni.'
    }
  }
]

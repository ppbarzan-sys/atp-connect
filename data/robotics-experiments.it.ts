import type { Experiment } from './experiments'
import { roboticsExperiments } from './robotics-experiments'

/* eslint-disable @typescript-eslint/no-explicit-any */
const itTranslations: Record<number, any> = {
  501: {
    title: 'Lampeggio LED — Il Tuo Primo Circuito',
    desc: 'Costruisci il tuo primo circuito collegando un LED ad Arduino e scrivendo il codice per farlo lampeggiare.',
    summary: {
      whatTheyLearn: 'Gli studenti apprendono i fondamenti di un circuito digitale: come la corrente scorre da Arduino attraverso una resistenza e un LED, e come scrivere il primo sketch Arduino usando digitalWrite() e delay().',
      instructions: [
        'Inserisci l\'Arduino Uno nella base della breadboard.',
        'Collega una resistenza da 220Ω dal pin digitale 13 di Arduino a una fila vuota della breadboard.',
        'Collega la gamba lunga (anodo, +) di un LED rosso alla stessa fila della resistenza.',
        'Collega la gamba corta (catodo, −) del LED al rail GND di Arduino.',
        'Carica lo sketch Blink da File > Examples > 01.Basics > Blink.',
      ],
      expectedOutcome: 'Il LED lampeggia acceso per 1 secondo e spento per 1 secondo, ripetendosi indefinitamente. Cambiando delay(1000) a delay(250) lo fa lampeggiare più velocemente.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Breadboard + base in legno' },
        { emoji: '💡', name: '1x LED rosso' },
        { emoji: '🔗', name: '1x Resistenza da 220Ω (rosso-rosso-marrone)' },
        { emoji: '🔌', name: '2x Cavi di collegamento' },
        { emoji: '🔌', name: 'Cavo USB' },
      ],
      observationsToRecord: [
        'Il LED si accende quando lo colleghi?',
        'Cosa succede quando cambi delay(1000) a delay(500)?',
        'Cosa succede se rimuovi la resistenza? (OSSERVA SOLO brevemente)',
        'Cosa succede se inverti le gambe del LED?',
      ],
      theoryPoints: [
        'I LED sono polarizzati — la corrente scorre in una sola direzione (dall\'anodo + al catodo −)',
        'Una resistenza limita la corrente per proteggere il LED. V = IR, quindi R = (5V - 2V) / 0,02A = 150Ω minimo',
        'digitalWrite(pin, HIGH) imposta il pin a 5V; LOW lo imposta a 0V',
        'delay(ms) mette in pausa il programma per i millisecondi specificati',
      ],
      realWorldConnections: [
        'I semafori usano la commutazione temporizzata dei LED',
        'Le luci dei veicoli di emergenza usano schemi di lampeggio rapido',
        'Indicatori di stato nei dispositivi elettronici (LED di accensione, indicatore di carica)',
      ],
      formula: 'R = (V_supply - V_LED) / I_LED = (5V - 2V) / 20mA = 150Ω (si usa 220Ω per sicurezza)',
    },
    questions: {
      mcq: [
        {
          text: 'Qual è lo scopo della resistenza in un circuito LED?',
          options: ['Rendere il LED più luminoso', 'Limitare la corrente e proteggere il LED dalla bruciatura', 'Immagazzinare energia per il LED', 'Invertire la direzione della corrente'],
          correctIndex: 1,
          explanation: 'Una resistenza limita la quantità di corrente che scorre attraverso il LED. Senza di essa, scorrerebbe troppa corrente e il LED si danneggerebbe o distruggerebbe.',
        },
        {
          text: 'Cosa fa la funzione delay(1000) di Arduino?',
          options: ['Accende il LED per 1 secondo', 'Mette in pausa il programma per 1000 millisecondi (1 secondo)', 'Imposta il pin 1000 a HIGH', 'Fa lampeggiare il LED 1000 volte'],
          correctIndex: 1,
          explanation: 'delay(1000) mette in pausa l\'intero programma per 1000 millisecondi (1 secondo). Durante questo tempo, lo stato dei pin rimane invariato.',
        },
        {
          text: 'Quale funzione di Arduino imposta un pin digitale a HIGH (5V) o LOW (0V)?',
          options: ['analogWrite()', 'digitalRead()', 'digitalWrite()', 'pinMode()'],
          correctIndex: 2,
          explanation: 'digitalWrite(pin, value) imposta un pin digitale a HIGH (5V) o LOW (0V). Si usa per accendere e spegnere LED, motori e altri componenti digitali.',
        },
        {
          text: 'Cosa succede se colleghi un LED al contrario (polarità invertita)?',
          options: ['Si accende più luminoso', 'Lampeggia automaticamente', 'Non si accende perché i LED permettono il flusso di corrente in una sola direzione', 'Cambia colore'],
          correctIndex: 2,
          explanation: 'I LED sono diodi — permettono alla corrente di scorrere in una sola direzione (dall\'anodo + al catodo −). Invertire il LED significa che non scorre corrente.',
        },
        {
          text: 'Nello sketch Blink, quali sono le due funzioni richieste in ogni programma Arduino?',
          options: ['start() e stop()', 'begin() e end()', 'setup() e loop()', 'on() e off()'],
          correctIndex: 2,
          explanation: 'Ogni sketch Arduino deve avere setup() — che viene eseguito una volta all\'avvio — e loop() — che viene eseguito ripetutamente all\'infinito.',
        },
      ],
      discussion: [
        'Perché abbiamo bisogno di una resistenza con un LED esterno ma non con il LED integrato del pin 13?',
        'Se volessi far lampeggiare il LED con uno schema (2 veloci, 1 lento), come modificheresti il codice?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Uscita Digitale', pct: 30 },
        { label: 'Fondamenti dei Circuiti', pct: 30 },
        { label: 'Struttura del Codice Arduino', pct: 25 },
        { label: 'Legge di Ohm', pct: 15 },
      ],
      misconceptions: [
        'Gli studenti spesso pensano che rimuovere la resistenza renda il LED più luminoso (lo fa brevemente, ma poi si brucia)',
        'Gli studenti possono pensare che HIGH significhi voltaggio massimo invece di 5V specificamente',
        'Gli studenti a volte confondono l\'anodo e il catodo del LED',
      ],
      hook: 'Ogni dispositivo intelligente che possiedi — dalla luce di notifica del telefono al cruscotto dell\'auto — usa LED controllati dal codice. Oggi scriverai il tuo primo programma per controllarne uno!',
      khanLinks: [
        { title: 'Introduzione ai Circuiti', url: 'https://www.khanacademy.org/science/physics/circuits-topic' },
        { title: 'Legge di Ohm', url: 'https://www.khanacademy.org/science/physics/circuits-topic/circuits-resistance/v/introduction-to-circuits-and-ohms-law' },
      ],
    },
    dataTable: {
      headers: ['Ritardo (ms)', 'Lampeggi al Minuto', 'Tempo LED Acceso', 'Tempo LED Spento', 'Osservazione'],
    },
    observations: [
      'Registra il valore di ritardo e conta quante volte il LED lampeggia in 30 secondi',
      'Calcola i lampeggi al minuto per ogni valore di ritardo',
      'Nota eventuali differenze nella luminosità percepita a velocità di lampeggio molto elevate',
    ],
    conclusion: 'Un circuito LED richiede una resistenza limitatrice di corrente per proteggere il LED. La funzione digitalWrite() di Arduino controlla il voltaggio del pin (5V o 0V), e delay() controlla la temporizzazione.',
    ai: {
      opening: 'Benvenuto al tuo primo esperimento con Arduino! 🤖💡 Faremo lampeggiare un LED usando il codice. Questo è il "Ciao Mondo" dell\'elettronica!',
      keywords: {
        setup: 'Assicurati che la gamba lunga del LED (anodo) sia collegata attraverso la resistenza al pin 13, e la gamba corta (catodo) vada a GND.',
        formula: 'Usa la Legge di Ohm: R = V/I. Arduino produce 5V, il LED consuma circa 2V, quindi servono almeno 150Ω. Usiamo 220Ω per sicurezza.',
        error: 'Se il tuo LED non si accende: 1) Controlla la direzione del LED (gamba lunga = +), 2) Assicurati che la resistenza sia collegata, 3) Conferma il pin 13 nel tuo codice.',
        question: 'Prova a cambiare i valori di delay. Cosa succede con delay(100)? Con delay(50)? A quale velocità il lampeggio sembra una luce fissa?',
        real: 'I semafori, i LED di notifica del telefono, i cruscotti delle auto e gli schermi degli stadi usano tutti il controllo temporizzato dei LED!',
        result: 'Dovresti vedere il LED accendersi per 1 secondo e spegnersi per 1 secondo. Se è sempre acceso o spento, controlla il cablaggio.',
        extend: 'Prova a controllare più LED su pin diversi, o crea SOS in codice Morse (3 corti, 3 lunghi, 3 corti).',
        explain: 'La funzione loop() si ripete all\'infinito. Al suo interno, impostiamo il pin 13 a HIGH (LED acceso), aspettiamo, lo impostiamo a LOW (LED spento), aspettiamo, e ripetiamo.',
        hook: 'Curiosità: far lampeggiare un LED È il "Ciao Mondo" di Arduino!',
        misconception: 'La resistenza non rende il LED meno luminoso in modo negativo — lo protegge! Senza di essa, il LED si brucia in pochi secondi.',
      },
      hint: 'Assicurati che il tuo LED abbia la gamba lunga (anodo) collegata al lato della resistenza, e la gamba corta (catodo) a GND.',
      expected: 'Il LED rosso dovrebbe lampeggiare accendendosi e spegnendosi a un intervallo regolare determinato dai valori di delay().',
    },
  },

  502: {
    title: 'Controllore del Semaforo',
    desc: 'Costruisci un sistema di semaforo con 3 LED e programmalo per ciclare tra rosso, giallo e verde con tempi realistici.',
    summary: {
      whatTheyLearn: 'Gli studenti apprendono la logica sequenziale controllando più LED in una sequenza temporizzata, simulando un sistema di semaforo reale.',
      instructions: [
        'Posiziona tre LED sulla breadboard: rosso, giallo e verde (dall\'alto verso il basso).',
        'Collega ogni LED attraverso una resistenza da 220Ω ai pin di Arduino: rosso=pin 4, giallo=pin 3, verde=pin 2.',
        'Collega tutti i catodi dei LED al rail GND.',
        'Scrivi il codice per ciclare: Verde ACCESO (5s) → Giallo ACCESO (2s) → Rosso ACCESO (5s) → ripeti.',
        'Carica il codice e osserva lo schema del semaforo.',
      ],
      expectedOutcome: 'I tre LED ciclano nella sequenza corretta del semaforo con tempi realistici.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Breadboard' },
        { emoji: '🔴', name: '1x LED rosso' },
        { emoji: '🟡', name: '1x LED giallo' },
        { emoji: '🟢', name: '1x LED verde' },
        { emoji: '🔗', name: '3x Resistenze da 220Ω' },
        { emoji: '🔌', name: 'Cavi di collegamento' },
      ],
      observationsToRecord: [
        'Tutti e tre i LED si accendono singolarmente quando li testi?',
        'La sequenza segue l\'ordine corretto del semaforo?',
        'Quale tempo totale del ciclo misuri?',
        'Cosa succede se aggiungi una fase di attraversamento pedonale?',
      ],
      theoryPoints: [
        'La logica sequenziale esegue passaggi in un ordine fisso',
        'Ogni LED necessita della propria resistenza limitatrice di corrente',
        'I semafori seguono standard internazionali per i tempi delle fasi',
        'Le macchine a stati rappresentano sistemi con stati e transizioni definiti',
      ],
      realWorldConnections: [
        'I semafori reali usano controllori integrati con ingressi da sensori',
        'Gli attraversamenti pedonali aggiungono stati aggiuntivi alla sequenza',
        'I sistemi di priorità dei veicoli di emergenza sovrascrivono le sequenze normali',
      ],
      formula: 'Tempo totale del ciclo = T_verde + T_giallo + T_rosso',
    },
    questions: {
      mcq: [
        {
          text: 'In una sequenza semaforica, quale luce si accende tra il verde e il rosso?',
          options: ['Blu', 'Bianco', 'Giallo (ambra)', 'Nessuna luce — cambiano direttamente'],
          correctIndex: 2,
          explanation: 'La luce gialla (ambra) serve come avvertimento che il segnale sta per diventare rosso, dando tempo ai conducenti di fermarsi in sicurezza.',
        },
        {
          text: 'Quanti pin di uscita digitale servono per controllare un semaforo base a 3 colori?',
          options: ['1', '2', '3', '6'],
          correctIndex: 2,
          explanation: 'Ogni LED necessita del proprio pin digitale per il controllo indipendente: uno per il rosso, uno per il giallo e uno per il verde.',
        },
        {
          text: 'Qual è lo scopo di chiamare digitalWrite(redPin, LOW) prima di accendere il LED verde?',
          options: ['Per risparmiare batteria', 'Per assicurare che solo una luce sia accesa alla volta', 'Per rendere il LED verde più luminoso', 'Non ha alcuno scopo'],
          correctIndex: 1,
          explanation: 'Spegnere il LED rosso prima di accendere il verde assicura che venga mostrato un solo colore del semaforo alla volta, imitando i semafori reali.',
        },
        {
          text: 'Se la luce verde è accesa 5 secondi, la gialla 2 secondi e la rossa 5 secondi, qual è il tempo totale del ciclo?',
          options: ['7 secondi', '10 secondi', '12 secondi', '15 secondi'],
          correctIndex: 2,
          explanation: 'Ciclo totale = 5s (verde) + 2s (giallo) + 5s (rosso) = 12 secondi per un ciclo completo.',
        },
        {
          text: 'Cos\'è una "macchina a stati" nella programmazione?',
          options: ['Una macchina che esegue stati', 'Un modello dove un sistema può trovarsi in uno di diversi stati definiti con regole per la transizione tra di essi', 'Un tipo di scheda Arduino', 'Un generatore di numeri casuali'],
          correctIndex: 1,
          explanation: 'Una macchina a stati è un concetto di programmazione dove un sistema ha stati definiti (verde, giallo, rosso) e regole specifiche per la transizione tra di essi.',
        },
      ],
      discussion: [
        'Come aggiungeresti un pulsante per attraversamento pedonale a questo semaforo?',
        'Perché i semafori reali hanno sensori incorporati nella strada?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Logica Sequenziale', pct: 35 },
        { label: 'Uscite Digitali Multiple', pct: 25 },
        { label: 'Temporizzazione e Ritardi', pct: 25 },
        { label: 'Macchine a Stati', pct: 15 },
      ],
      misconceptions: [
        'Gli studenti possono tentare di accendere tutti i LED contemporaneamente invece di sequenziarli',
        'Gli studenti a volte dimenticano di spegnere il LED precedente prima di accendere il successivo',
      ],
      hook: 'I semafori controllano milioni di incroci in tutto il mondo. Oggi costruirai e programmerai il tuo!',
      khanLinks: [
        { title: 'Introduzione ai Circuiti', url: 'https://www.khanacademy.org/science/physics/circuits-topic' },
      ],
    },
    dataTable: {
      headers: ['Fase', 'Colore del LED', 'Durata (s)', 'Numero di Pin', 'Osservazione'],
    },
    observations: [
      'Registra la temporizzazione di ogni fase del tuo semaforo',
      'Verifica che la sequenza corrisponda al comportamento reale di un semaforo',
      'Osserva cosa succede quando cambi i valori di temporizzazione',
    ],
    conclusion: 'Un controllore di semaforo dimostra la logica sequenziale — eseguire passaggi in un ordine definito con temporizzazione precisa. Ogni stato (verde, giallo, rosso) ha una durata e una regola di transizione specifica.',
    ai: {
      opening: 'Costruiamo un semaforo! 🚦 Controllerai 3 LED in sequenza — proprio come i segnali a un incrocio reale.',
      keywords: {
        setup: 'Collega rosso al pin 4, giallo al pin 3, verde al pin 2. Ogni LED necessita della propria resistenza da 220Ω a GND.',
        formula: 'Tempo totale del ciclo = tempo verde + tempo giallo + tempo rosso. Un ciclo reale tipico è di 60-120 secondi.',
        error: 'Se i LED si accendono fuori ordine, controlla quale cavo va a quale pin. Etichetta i tuoi cavi!',
        question: 'Puoi aggiungere un 4° stato dove tutte le luci sono spente per 1 secondo tra i cicli?',
        real: 'I semafori moderni usano sensori, telecamere e IA per ottimizzare il flusso del traffico in tempo reale.',
        result: 'Dovresti vedere verde → giallo → rosso ciclare continuamente.',
        extend: 'Aggiungi un secondo set di 3 LED per una strada trasversale e coordina entrambe le direzioni!',
        explain: 'Accendiamo e spegniamo ogni LED in sequenza usando digitalWrite() e delay() per creare lo schema di temporizzazione.',
      },
      hint: 'Ricorda di SPEGNERE il LED precedente prima di ACCENDERE il successivo nella sequenza.',
      expected: 'Tre LED che ciclano nell\'ordine del semaforo: verde (5s) → giallo (2s) → rosso (5s) → ripeti.',
    },
  },

  503: {
    title: 'LED Controllato da Pulsante',
    desc: 'Usa un pulsante come ingresso digitale per controllare un LED. Impara sugli ingressi digitali, le resistenze pull-down e la logica condizionale.',
    summary: {
      whatTheyLearn: 'Gli studenti imparano a leggere ingressi digitali usando digitalRead(), comprendono le resistenze pull-down e usano istruzioni condizionali if/else.',
      instructions: [
        'Collega un pulsante attraverso lo spazio centrale della breadboard.',
        'Collega un lato del pulsante a 5V.',
        'Collega l\'altro lato al pin 2 di Arduino E attraverso una resistenza pull-down da 10kΩ a GND.',
        'Collega un LED con una resistenza da 220Ω dal pin 13 a GND.',
        'Scrivi il codice: se digitalRead(2) == HIGH, accendi il LED; altrimenti, spegnilo.',
      ],
      expectedOutcome: 'Il LED si accende quando si preme il pulsante e si spegne al rilascio.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Breadboard' },
        { emoji: '🔘', name: '1x Pulsante' },
        { emoji: '💡', name: '1x LED rosso' },
        { emoji: '🔗', name: '1x Resistenza da 220Ω' },
        { emoji: '🔗', name: '1x Resistenza pull-down da 10kΩ' },
        { emoji: '🔌', name: 'Cavi di collegamento' },
      ],
      observationsToRecord: [
        'Il LED risponde immediatamente alle pressioni?',
        'Cosa succede senza la resistenza pull-down?',
        'Riesci a osservare del "rimbalzo" (sfarfallio) quando premi il pulsante?',
        'Registra lo stato del pulsante e lo stato del LED per 10 pressioni.',
      ],
      theoryPoints: [
        'digitalRead() restituisce HIGH (1) o LOW (0) in base al voltaggio del pin',
        'Una resistenza pull-down assicura che il pin legga LOW quando il pulsante non è premuto',
        'Senza una resistenza pull-down, il pin "fluttua" e dà letture casuali',
        'Le istruzioni if/else permettono al codice di prendere decisioni basate sull\'ingresso',
      ],
      realWorldConnections: [
        'I pulsanti dell\'ascensore, i campanelli e i tasti della tastiera usano tutti lo stesso principio',
        'I pulsanti di arresto di emergenza industriale usano lo stesso concetto di ingresso digitale',
        'I pulsanti touchscreen sono un\'evoluzione moderna dei pulsanti fisici',
      ],
      formula: 'Pull-down: quando il pulsante è aperto, V_pin = 0V (LOW); quando il pulsante è premuto, V_pin = 5V (HIGH)',
    },
    questions: {
      mcq: [
        {
          text: 'Cosa restituisce digitalRead() quando un pulsante collegato con resistenza pull-down NON è premuto?',
          options: ['HIGH', 'LOW', 'NULL', '0.5'],
          correctIndex: 1,
          explanation: 'Con una resistenza pull-down, il pin è collegato a GND (0V) quando il pulsante non è premuto, quindi digitalRead() restituisce LOW.',
        },
        {
          text: 'Qual è lo scopo di una resistenza pull-down in un circuito con pulsante?',
          options: ['Rendere il pulsante più difficile da premere', 'Assicurare che il pin legga un LOW definito quando il pulsante non è premuto', 'Aumentare la luminosità del LED', 'Proteggere Arduino dai danni'],
          correctIndex: 1,
          explanation: 'Una resistenza pull-down collega il pin a GND, assicurando che legga LOW quando il pulsante è aperto. Senza di essa, il pin fluttua e dà letture imprevedibili.',
        },
        {
          text: 'Quale funzione di Arduino si usa per leggere lo stato di un pin digitale?',
          options: ['analogRead()', 'digitalRead()', 'digitalWrite()', 'Serial.read()'],
          correctIndex: 1,
          explanation: 'digitalRead(pin) legge lo stato corrente di un pin digitale e restituisce HIGH o LOW.',
        },
        {
          text: 'Cosa significa "pin fluttuante"?',
          options: ['Un pin collegato all\'acqua', 'Un pin non collegato a un HIGH o LOW definito, che dà letture imprevedibili', 'Un pin che si muove fisicamente', 'Un pin impostato al voltaggio massimo'],
          correctIndex: 1,
          explanation: 'Un pin fluttuante non ha un voltaggio definito — capta rumore elettromagnetico e dà letture HIGH/LOW casuali.',
        },
        {
          text: 'Nel codice "if (buttonState == HIGH) { ... } else { ... }", cosa esegue il blocco else?',
          options: ['Quando il pulsante è premuto', 'Quando il pulsante non è premuto (LOW)', 'Sempre', 'Mai'],
          correctIndex: 1,
          explanation: 'Il blocco else viene eseguito quando la condizione if è falsa — in questo caso, quando buttonState non è HIGH (cioè è LOW).',
        },
      ],
      discussion: [
        'Cos\'è il "debouncing" dei pulsanti e perché potresti averne bisogno?',
        'Come faresti alternare il LED (rimane acceso dopo una pressione, spento dopo la successiva)?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Ingresso Digitale', pct: 30 },
        { label: 'Resistenze Pull-down', pct: 25 },
        { label: 'Logica Condizionale', pct: 30 },
        { label: 'Progettazione dei Circuiti', pct: 15 },
      ],
      misconceptions: [
        'Gli studenti dimenticano la resistenza pull-down e ottengono un comportamento erratico',
        'Gli studenti confondono le modalità pin INPUT e OUTPUT',
      ],
      hook: 'Ogni pulsante che premi — dai pulsanti dell\'ascensore ai controlli dei videogiochi — usa lo stesso principio di ingresso digitale!',
      khanLinks: [
        { title: 'Introduzione ai Circuiti', url: 'https://www.khanacademy.org/science/physics/circuits-topic' },
      ],
    },
    dataTable: {
      headers: ['Pressione #', 'Stato del Pulsante', 'Valore di digitalRead()', 'Stato del LED', 'Tempo di Risposta'],
    },
    observations: [
      'Registra la pressione del pulsante e lo stato del LED per ogni pressione',
      'Prova cosa succede senza la resistenza pull-down',
      'Nota eventuali sfarfallii o risposte ritardate',
    ],
    conclusion: 'L\'ingresso digitale con digitalRead() permette ad Arduino di rispondere a interazioni fisiche. Le resistenze pull-down assicurano letture affidabili, e la logica if/else permette di prendere decisioni nel codice.',
    ai: {
      opening: 'È ora di aggiungere interattività! 🔘 Collegherai un pulsante per controllare un LED — il tuo primo progetto di input/output.',
      keywords: {
        setup: 'Pulsante tra 5V e pin 2. Aggiungi una resistenza pull-down da 10kΩ dal pin 2 a GND.',
        formula: 'Pull-down: V_pin = 0V quando è aperto, 5V quando è premuto. La resistenza da 10kΩ limita la corrente in modo sicuro.',
        error: 'Se il LED si comporta in modo casuale, probabilmente ti manca la resistenza pull-down. Il pin sta "fluttuando".',
        question: 'Puoi aggiungere un secondo pulsante che controlla un secondo LED in modo indipendente?',
        real: 'Ogni tasto della tastiera, pulsante del controller di gioco e pulsante dell\'ascensore usa esattamente questo concetto.',
        result: 'Premi il pulsante: LED acceso. Rilascia: LED spento. Semplice ma potente!',
        extend: 'Aggiungi codice di debouncing o fai in modo che il pulsante alterni lo stato del LED.',
      },
      hint: 'La resistenza pull-down da 10kΩ è essenziale! Senza di essa, il pin fluttuerà e darà letture casuali.',
      expected: 'Il LED si accende quando si preme il pulsante e si spegne al rilascio.',
    },
  },

  504: {
    title: 'Potenziometro — Lettura di Valori Analogici',
    desc: 'Collega un potenziometro all\'ingresso analogico di Arduino e leggi valori di voltaggio variabile da 0 a 1023.',
    summary: {
      whatTheyLearn: 'Gli studenti apprendono l\'ingresso analogico (0-1023), l\'uscita PWM (0-255), la funzione map() e i partitori di tensione.',
      instructions: [
        'Collega il potenziometro: pin sinistro a GND, pin destro a 5V, centrale (cursore) ad A0.',
        'Collega un LED con resistenza da 220Ω dal pin 9 (PWM) a GND.',
        'Scrivi il codice per leggere A0 con analogRead(), mappare a 0-255 e inviare con analogWrite().',
        'Apri il Monitor Seriale per vedere i valori analogici grezzi mentre giri la manopola.',
        'Osserva come cambia la luminosità del LED ruotando il potenziometro.',
      ],
      expectedOutcome: 'Ruotare il potenziometro controlla uniformemente la luminosità del LED da spento a luminosità massima.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Breadboard' },
        { emoji: '🎛️', name: '1x Potenziometro (10kΩ)' },
        { emoji: '💡', name: '1x LED' },
        { emoji: '🔗', name: '1x Resistenza da 220Ω' },
        { emoji: '🔌', name: 'Cavi di collegamento' },
      ],
      observationsToRecord: [
        'Quale valore analogico leggi nella posizione minima?',
        'Quale valore analogico leggi nella posizione massima?',
        'A quale valore analogico il LED sembra avere metà luminosità?',
        'Il cambiamento di luminosità è lineare o non lineare?',
      ],
      theoryPoints: [
        'analogRead() converte il voltaggio (0-5V) in un valore digitale (0-1023) usando un ADC a 10 bit',
        'analogWrite() usa PWM (0-255) per simulare un\'uscita analogica',
        'map(value, fromLow, fromHigh, toLow, toHigh) riscala un intervallo in un altro',
        'Un potenziometro è un partitore di tensione variabile',
      ],
      realWorldConnections: [
        'Manopole del volume su altoparlanti e amplificatori',
        'Interruttori dimmer per l\'illuminazione delle stanze',
        'Controlli joystick nei giochi e nella robotica',
      ],
      formula: 'V_out = V_in × (R2 / (R1 + R2)); Lettura analogica = V_pin × 1023 / 5V',
    },
    questions: {
      mcq: [
        {
          text: 'Quale intervallo di valori restituisce analogRead()?',
          options: ['0 a 100', '0 a 255', '0 a 1023', '0 a 5000'],
          correctIndex: 2,
          explanation: 'L\'ADC (Convertitore Analogico-Digitale) di Arduino ha una risoluzione di 10 bit: 2¹⁰ = 1024 valori, da 0 a 1023.',
        },
        {
          text: 'Cosa fa la funzione map()?',
          options: ['Mostra una mappa geografica', 'Converte un valore da un intervallo a un altro', 'Mappa un pin a un voltaggio specifico', 'Crea un array'],
          correctIndex: 1,
          explanation: 'map(value, fromLow, fromHigh, toLow, toHigh) riscala un numero da un intervallo a un altro. Es: map(512, 0, 1023, 0, 255) restituisce ~127.',
        },
        {
          text: 'A cosa serve PWM con analogWrite()?',
          options: ['Leggere sensori analogici', 'Simulare un\'uscita analogica commutando rapidamente tra acceso/spento digitale', 'Programmare senza errori', 'Connettersi al Wi-Fi'],
          correctIndex: 1,
          explanation: 'PWM (Modulazione a Larghezza di Impulso) commuta rapidamente un pin tra HIGH e LOW. Il duty cycle determina il voltaggio medio, simulando un\'uscita analogica.',
        },
        {
          text: 'Cos\'è un potenziometro?',
          options: ['Un tipo di LED', 'Una resistenza variabile che funziona come partitore di tensione', 'Un sensore di temperatura', 'Un tipo di motore'],
          correctIndex: 1,
          explanation: 'Un potenziometro è una resistenza variabile a tre terminali. Ruotare la manopola cambia il rapporto di resistenza, variando il voltaggio di uscita.',
        },
        {
          text: 'Perché analogWrite() può essere usata solo su certi pin di Arduino (contrassegnati con ~)?',
          options: ['Gli altri pin sono rotti', 'Solo quei pin supportano PWM hardware', 'Quei pin hanno voltaggio maggiore', 'Funziona su tutti i pin'],
          correctIndex: 1,
          explanation: 'Solo i pin con supporto PWM hardware (contrassegnati ~ sulla scheda: 3, 5, 6, 9, 10, 11 su Uno) possono usare analogWrite().',
        },
      ],
      discussion: [
        'Qual è la differenza tra segnali digitali e analogici?',
        'Come potresti usare due potenziometri per controllare un LED RGB?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Ingresso Analogico (ADC)', pct: 30 },
        { label: 'Uscita PWM', pct: 25 },
        { label: 'Funzione map()', pct: 20 },
        { label: 'Partitori di Tensione', pct: 25 },
      ],
      misconceptions: [
        'Gli studenti confondono l\'intervallo di analogRead (0-1023) con l\'intervallo di analogWrite (0-255)',
        'Gli studenti pensano che i pin analogici possano essere solo ingressi (possono anche essere I/O digitali)',
      ],
      hook: 'Le manopole del volume, i dimmer delle luci e i joystick usano tutti potenziometri. Oggi ne controlli uno con un LED!',
      khanLinks: [
        { title: 'Partitori di Tensione', url: 'https://www.khanacademy.org/science/physics/circuits-topic' },
      ],
    },
    dataTable: {
      headers: ['Posizione del Pot (%)', 'Lettura Analogica', 'PWM Mappato (0-255)', 'Luminosità del LED', 'Voltaggio Calcolato'],
    },
    observations: [
      'Registra le letture analogiche in diverse posizioni del potenziometro',
      'Calcola il voltaggio dalla lettura analogica',
      'Confronta la luminosità percepita con il valore PWM (lineare?)',
    ],
    conclusion: 'L\'ingresso analogico (ADC) converte voltaggio continuo in valori digitali. PWM simula un\'uscita analogica. La funzione map() collega diversi intervalli di valori.',
    ai: {
      opening: 'Passiamo all\'analogico! 🎛️ Userai un potenziometro per controllare uniformemente la luminosità del LED — il tuo primo progetto analogico.',
      keywords: {
        setup: 'Pot: sinistra=GND, destra=5V, centro=A0. LED sul pin 9 (PWM) con resistenza da 220Ω.',
        formula: 'ADC: 10 bit = 0-1023. PWM: 8 bit = 0-255. Usa map() per convertire tra di essi.',
        error: 'Se la luminosità salta invece di cambiare uniformemente, assicurati di usare un pin PWM (~) per il LED.',
        question: 'Cosa succede se usi map(val, 0, 1023, 255, 0) invece? Provalo!',
        real: 'Le manopole del volume, i dimmer delle luci e i joystick dei giochi usano tutti potenziometri.',
        result: 'Ruotare il potenziometro dovrebbe cambiare uniformemente la luminosità del LED da spento a massimo.',
      },
      hint: 'Assicurati di usare un pin compatibile con PWM (contrassegnato con ~) per analogWrite().',
      expected: 'La luminosità del LED cambia uniformemente ruotando la manopola del potenziometro.',
    },
  },

  505: {
    title: 'Sensore di Temperatura — Misurare il Calore',
    desc: 'Usa il sensore di temperatura TMP36 per misurare la temperatura ambiente e visualizzare le letture sul Monitor Seriale.',
    summary: {
      whatTheyLearn: 'Gli studenti imparano a leggere sensori analogici, convertire il voltaggio in temperatura, usare il Monitor Seriale per la registrazione dei dati e comprendere la calibrazione dei sensori.',
      instructions: [
        'Identifica i pin del TMP36 (lato piatto verso di te): sinistro=5V, centrale=segnale ad A1, destro=GND.',
        'Collega il TMP36 alla breadboard con il corretto orientamento dei pin.',
        'Scrivi il codice per leggere A1, convertire in voltaggio e poi in temperatura in °C.',
        'Apri il Monitor Seriale a 9600 baud per vedere le letture di temperatura.',
        'Prova toccando il sensore per riscaldarlo e soffiandoci sopra per raffreddarlo.',
      ],
      expectedOutcome: 'Il Monitor Seriale mostra la temperatura ambiente (~20-25°C). Toccare il sensore aumenta la lettura; soffiarci la abbassa.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Breadboard' },
        { emoji: '🌡️', name: '1x Sensore di temperatura TMP36' },
        { emoji: '🔌', name: 'Cavi di collegamento' },
      ],
      observationsToRecord: [
        'Qual è la lettura della temperatura ambiente?',
        'Quanto cambia quando tocchi il sensore?',
        'Quanto velocemente torna alla temperatura ambiente?',
        'Confronta con un termometro — quanto è preciso il TMP36?',
      ],
      theoryPoints: [
        'Il TMP36 produce un voltaggio proporzionale alla temperatura (10mV/°C con offset di 500mV)',
        'L\'ADC converte il voltaggio del sensore in un valore digitale (0-1023)',
        'Temperatura (°C) = (voltaggio - 0,5) × 100',
        'Serial.begin(9600) inizializza la comunicazione seriale a 9600 baud',
      ],
      realWorldConnections: [
        'I termostati domestici usano sensori di temperatura per controllare riscaldamento/raffreddamento',
        'Le stazioni meteorologiche raccolgono dati di temperatura per le previsioni',
        'Le sale server monitorano la temperatura per prevenire il surriscaldamento',
      ],
      formula: 'Temperatura (°C) = (voltaggio - 0,5) × 100; voltaggio = analogRead(A1) × 5,0 / 1024,0',
    },
    questions: {
      mcq: [
        {
          text: 'Cosa produce il sensore TMP36?',
          options: ['Un segnale digitale HIGH/LOW', 'Un voltaggio proporzionale alla temperatura', 'Una resistenza che cambia con la temperatura', 'Un segnale di frequenza'],
          correctIndex: 1,
          explanation: 'Il TMP36 produce un voltaggio analogico che aumenta linearmente con la temperatura: 10mV per grado Celsius, con un offset di 500mV a 0°C.',
        },
        {
          text: 'Se il TMP36 produce 0,75V, qual è la temperatura?',
          options: ['7,5°C', '15°C', '25°C', '75°C'],
          correctIndex: 2,
          explanation: 'T = (0,75 - 0,5) × 100 = 0,25 × 100 = 25°C. Sottrai l\'offset di 500mV e poi moltiplica per 100.',
        },
        {
          text: 'Cosa fa Serial.begin(9600)?',
          options: ['Imposta il pin 9600 a HIGH', 'Inizializza la comunicazione seriale a 9600 bit al secondo', 'Crea 9600 variabili', 'Aspetta 9600 millisecondi'],
          correctIndex: 1,
          explanation: 'Serial.begin(9600) avvia la comunicazione seriale tra Arduino e il computer a 9600 baud (bit al secondo), abilitando il Monitor Seriale.',
        },
        {
          text: 'Perché moltiplichiamo il valore di analogRead per 5,0/1024,0?',
          options: ['Per convertire la lettura digitale di nuovo in voltaggio', 'Per rendere il numero più grande', 'Per convertire Celsius in Fahrenheit', 'Per calibrare il sensore'],
          correctIndex: 0,
          explanation: 'L\'ADC mappa 0-5V a 0-1023. Moltiplicare per 5,0/1024,0 converte la lettura digitale di nuovo nel voltaggio reale sul pin.',
        },
        {
          text: 'Qual è la risoluzione del TMP36 quando viene letto con l\'ADC a 10 bit di Arduino?',
          options: ['1°C', '0,5°C', 'Circa 0,49°C', '0,01°C'],
          correctIndex: 2,
          explanation: 'Ogni passo dell\'ADC = 5V/1024 = 4,88mV. Poiché il TMP36 produce 10mV/°C, la risoluzione = 4,88mV / 10mV/°C ≈ 0,49°C.',
        },
      ],
      discussion: [
        'Come costruiresti un allarme di temperatura che suona sopra i 30°C?',
        'Quali fattori potrebbero causare letture di temperatura imprecise?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Sensori Analogici', pct: 30 },
        { label: 'Conversione Voltaggio-Temperatura', pct: 25 },
        { label: 'Monitor Seriale', pct: 25 },
        { label: 'Registrazione Dati', pct: 20 },
      ],
      misconceptions: [
        'Gli studenti possono collegare il TMP36 al contrario, il che può danneggiarlo',
        'Gli studenti confondono la lettura ADC (0-1023) con il voltaggio (0-5V)',
      ],
      hook: 'Il tuo telefono, la tua auto e persino il tuo frigorifero hanno sensori di temperatura. Oggi costruisci il tuo termometro digitale!',
      khanLinks: [
        { title: 'Temperatura e Calore', url: 'https://www.khanacademy.org/science/physics/thermodynamics' },
      ],
    },
    dataTable: {
      headers: ['Tempo', 'Lettura ADC Grezza', 'Voltaggio (V)', 'Temperatura (°C)', 'Condizione'],
    },
    observations: [
      'Registra le letture di temperatura per 10 minuti',
      'Nota quanto velocemente il sensore risponde ai cambiamenti di temperatura',
      'Confronta le letture con un termometro di riferimento',
    ],
    conclusion: 'I sensori analogici convertono grandezze fisiche in voltaggio. L\'ADC di Arduino converte il voltaggio in valori digitali. Le formule matematiche poi traducono le letture in unità significative.',
    ai: {
      opening: 'Misuriamo la temperatura! 🌡️ Costruirai un termometro digitale usando il sensore TMP36 e imparerai la conversione analogico-digitale.',
      keywords: {
        setup: 'TMP36 con il lato piatto verso di te: sinistra=5V, centro=A1, destra=GND. Verifica l\'orientamento!',
        formula: 'voltage = analogRead(A1) * 5.0 / 1024.0; tempC = (voltage - 0.5) * 100;',
        error: 'Se ottieni letture molto errate (come -40°C), il TMP36 potrebbe essere collegato al contrario. Scollega e verifica!',
        question: 'Prova a registrare i dati ogni 2 secondi per 5 minuti. Riesci a rilevare quando qualcuno entra nella stanza?',
        real: 'I termostati domestici, le stazioni meteorologiche e i sensori industriali usano tutti principi simili.',
        result: 'Dovresti vedere la temperatura ambiente (circa 20-25°C). Tocca il sensore per vederla salire.',
      },
      hint: 'IMPORTANTE: L\'ordine dei pin del TMP36 (lato piatto verso di te) è: 5V | Segnale | GND. Invertirlo può danneggiare il sensore!',
      expected: 'Il Monitor Seriale mostra letture di temperatura intorno a 20-25°C per una stanza tipica.',
    },
  },

  506: {
    title: 'Sensore di Luce — Misurare la Luminosità',
    desc: 'Costruisci un circuito sensore di luce usando un fotoresistore (LDR) e crea una luce notturna automatica.',
    summary: {
      whatTheyLearn: 'Gli studenti apprendono le resistenze dipendenti dalla luce, i partitori di tensione con resistenza variabile, il rilevamento di soglia e i sistemi di controllo automatico.',
      instructions: [
        'Crea un partitore di tensione: LDR da 5V ad A0, e resistenza da 10kΩ da A0 a GND.',
        'Collega un LED con resistenza da 220Ω dal pin 9 (PWM) a GND.',
        'Leggi A0 nel codice e stampa i livelli di luce sul Monitor Seriale.',
        'Aggiungi logica di soglia: se il livello di luce < 300, accendi il LED; altrimenti, spegnilo.',
        'Prova coprendo l\'LDR con la mano (buio) ed esponendolo alla luce.',
      ],
      expectedOutcome: 'Il LED si accende automaticamente al buio e si spegne con luce intensa, come una vera luce notturna.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Breadboard' },
        { emoji: '☀️', name: '1x Fotoresistore (LDR)' },
        { emoji: '🔗', name: '1x Resistenza da 10kΩ' },
        { emoji: '💡', name: '1x LED' },
        { emoji: '🔗', name: '1x Resistenza da 220Ω' },
        { emoji: '🔌', name: 'Cavi di collegamento' },
      ],
      observationsToRecord: [
        'Quale valore analogico leggi al buio?',
        'Quale valore con la luce normale della stanza?',
        'Quale valore con la luce solare diretta?',
        'Con quale valore di soglia la tua luce notturna funziona meglio?',
      ],
      theoryPoints: [
        'Un LDR diminuisce la sua resistenza all\'aumentare della luce',
        'La formula del partitore di tensione determina il voltaggio sul pin analogico',
        'Il rilevamento di soglia confronta una lettura con un valore impostato',
        'PWM può rendere la luminosità proporzionale al livello di oscurità',
      ],
      realWorldConnections: [
        'Lampioni stradali che si accendono al tramonto',
        'Luminosità automatica dello schermo del telefono',
        'Luci solari da giardino',
      ],
      formula: 'V_out = 5V × R_fisso / (R_LDR + R_fisso); R_LDR diminuisce quando la luce aumenta',
    },
    questions: {
      mcq: [
        {
          text: 'Come risponde un LDR (fotoresistore) alla luce?',
          options: ['La resistenza aumenta con più luce', 'La resistenza diminuisce con più luce', 'La resistenza rimane costante', 'Genera voltaggio dalla luce'],
          correctIndex: 1,
          explanation: 'Un LDR (Resistenza Dipendente dalla Luce) ha alta resistenza al buio e bassa resistenza con luce intensa.',
        },
        {
          text: 'Nel circuito del partitore di tensione con LDR, cosa succede alla lettura analogica quando copri il sensore?',
          options: ['Aumenta a 1023', 'Diminuisce verso 0', 'Rimane uguale', 'Diventa negativa'],
          correctIndex: 1,
          explanation: 'Al buio, la resistenza dell\'LDR è molto alta. Più voltaggio cade sull\'LDR, lasciando meno sul pin analogico, quindi la lettura diminuisce.',
        },
        {
          text: 'Cos\'è il "rilevamento di soglia" in un sistema di sensori?',
          options: ['Trovare il valore massimo del sensore', 'Confrontare una lettura del sensore con un valore impostato per attivare un\'azione', 'Calibrare il sensore', 'Calcolare la media di più letture'],
          correctIndex: 1,
          explanation: 'Il rilevamento di soglia verifica se un valore del sensore è sopra o sotto un punto impostato, attivando diverse azioni (come accendere/spegnere una luce).',
        },
        {
          text: 'Perché usare un partitore di tensione con l\'LDR invece di collegarlo direttamente?',
          options: ['Gli LDR sono fragili e necessitano protezione', 'Un partitore di tensione converte i cambiamenti di resistenza in un cambiamento di voltaggio misurabile', 'Il collegamento diretto dà lo stesso risultato', 'Arduino richiede esattamente 2,5V'],
          correctIndex: 1,
          explanation: 'Arduino misura il voltaggio, non la resistenza. Il partitore di tensione converte la resistenza variabile dell\'LDR in un cambiamento di voltaggio proporzionale sul pin analogico.',
        },
        {
          text: 'Come renderesti la luminosità del LED proporzionale all\'oscurità (più tenue con luce, più luminoso al buio)?',
          options: ['Usare una resistenza più grande', 'Usare map() con analogWrite() per impostare PWM basato sull\'inverso del livello di luce', 'Collegare più LED', 'Usare un sensore diverso'],
          correctIndex: 1,
          explanation: 'Mappa la lettura di luce inversamente: map(lightLevel, 0, 1023, 255, 0) o restringi l\'intervallo scuro. Usa analogWrite() su un pin PWM per una regolazione fluida.',
        },
      ],
      discussion: [
        'Come potresti calibrare la soglia per diversi ambienti?',
        'Quali sono i limiti dell\'uso di un LDR per la misurazione precisa della luce?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Sensori di Luce (LDR)', pct: 25 },
        { label: 'Partitori di Tensione', pct: 25 },
        { label: 'Rilevamento di Soglia', pct: 25 },
        { label: 'Controllo Automatico', pct: 25 },
      ],
      misconceptions: [
        'Gli studenti possono pensare che l\'LDR generi elettricità come una cella solare (cambia solo la resistenza)',
        'Gli studenti confondono in quale direzione cambia la lettura analogica con il livello di luce',
      ],
      hook: 'Ti sei mai chiesto come fanno i lampioni a sapere quando accendersi? Stai per costruire lo stesso sistema!',
      khanLinks: [
        { title: 'Introduzione ai Circuiti', url: 'https://www.khanacademy.org/science/physics/circuits-topic' },
      ],
    },
    dataTable: {
      headers: ['Condizione di Luce', 'Lettura Analogica', 'Voltaggio Calcolato', 'Stato del LED', 'Note'],
    },
    observations: [
      'Registra le letture sotto diverse condizioni di luce',
      'Determina la miglior soglia per il tuo ambiente',
      'Prova il comportamento della luce notturna automatica',
    ],
    conclusion: 'I sensori di luce (LDR) in un partitore di tensione convertono i livelli di luce in voltaggi misurabili. Il rilevamento di soglia permette sistemi di controllo automatico come le luci notturne.',
    ai: {
      opening: 'Costruiamo una luce notturna automatica! ☀️ Imparerai come funzionano i sensori di luce e creerai un sistema che risponde all\'oscurità.',
      keywords: {
        setup: 'LDR da 5V ad A0. 10kΩ da A0 a GND. LED sul pin 9 con resistenza da 220Ω.',
        formula: 'Partitore di tensione: V = 5V × 10k / (LDR + 10k). Al buio, l\'LDR è ~100k+, il voltaggio è basso.',
        error: 'Se il LED è sempre acceso o spento, regola la tua soglia. Prima stampa i valori di luce per trovare l\'intervallo corretto.',
        question: 'Quale valore di soglia funziona meglio nella tua aula?',
        real: 'I lampioni, la luminosità automatica del telefono e le luci solari da giardino usano tutti questo concetto.',
        result: 'Copri l\'LDR: LED acceso. Scoprilo: LED spento. La tua luce notturna automatica funziona!',
      },
      hint: 'Inizia stampando i valori analogici grezzi sul Monitor Seriale per trovare la soglia adeguata al tuo ambiente.',
      expected: 'Il LED si accende quando l\'LDR è al buio e si spegne con luce intensa.',
    },
  },

  507: {
    title: 'Sensore di Distanza a Ultrasuoni',
    desc: 'Misura le distanze usando onde sonore con il sensore a ultrasuoni. Calcola la velocità del suono dalle tue misurazioni.',
    summary: {
      whatTheyLearn: 'Gli studenti apprendono la fisica della misurazione di distanza a ultrasuoni, i calcoli del tempo di volo e la velocità del suono.',
      instructions: [
        'Collega il sensore a ultrasuoni alla scheda Science Carrier R3.',
        'Carica lo sketch di misurazione della distanza.',
        'Apri il Monitor Seriale per vedere le letture di distanza in tempo reale.',
        'Posiziona oggetti a distanze note (righello) e confronta con le letture del sensore.',
        'Registra i dati per almeno 8 distanze diverse.',
      ],
      expectedOutcome: 'Misurazioni di distanza precise (entro ±2cm) visualizzate sul Monitor Seriale per oggetti da 2cm a 400cm di distanza.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Nano RP2040 Connect' },
        { emoji: '📡', name: 'Science Carrier R3' },
        { emoji: '📏', name: 'Sensore di Distanza a Ultrasuoni' },
        { emoji: '📏', name: 'Righello o metro a nastro' },
        { emoji: '🔌', name: 'Cavo USB-C' },
      ],
      observationsToRecord: [
        'Quanto è preciso il sensore a distanze corte (< 10cm)?',
        'Quanto è preciso a distanze lunghe (> 100cm)?',
        'Qual è la distanza massima affidabile?',
        'L\'angolo dell\'oggetto influenza la lettura?',
      ],
      theoryPoints: [
        'I sensori a ultrasuoni emettono impulsi sonori (40kHz) e misurano il tempo di ritorno dell\'eco',
        'Velocità del suono a 20°C ≈ 343 m/s (0,0343 cm/μs)',
        'Distanza = (tempo × velocità) / 2 (si divide per 2 perché il suono viaggia all\'oggetto e ritorna)',
        'pulseIn() misura la durata di un impulso su un pin',
      ],
      realWorldConnections: [
        'I sensori di parcheggio delle auto usano la misurazione di distanza a ultrasuoni',
        'Il sonar nei sottomarini per la mappatura sottomarina',
        'Sistemi di evasione degli ostacoli nei robot',
      ],
      formula: 'Distanza (cm) = (tempo_μs × 0,0343) / 2; Velocità del suono = 343 m/s a 20°C',
    },
    questions: {
      mcq: [
        {
          text: 'Come misura la distanza un sensore a ultrasuoni?',
          options: ['Usando un raggio laser', 'Misurando il tempo che un impulso sonoro impiega a tornare come eco', 'Rilevando radiazione infrarossa', 'Misurando campi magnetici'],
          correctIndex: 1,
          explanation: 'I sensori a ultrasuoni inviano un impulso sonoro e misurano il tempo fino al ritorno dell\'eco. Conoscendo la velocità del suono, distanza = (tempo × velocità) / 2.',
        },
        {
          text: 'Perché dividiamo il tempo misurato per 2 nella formula della distanza?',
          options: ['Per convertire le unità', 'Perché il suono viaggia all\'oggetto E ritorna, quindi serve metà del tempo totale', 'Per tenere conto della resistenza dell\'aria', 'Per calcolare la media di due letture'],
          correctIndex: 1,
          explanation: 'Il tempo misurato è il viaggio di andata e ritorno (all\'oggetto e indietro). Vogliamo solo la distanza in un senso, quindi dividiamo per 2.',
        },
        {
          text: 'Qual è la velocità approssimativa del suono nell\'aria a temperatura ambiente?',
          options: ['100 m/s', '343 m/s', '3000 m/s', '300.000 km/s'],
          correctIndex: 1,
          explanation: 'Il suono viaggia a circa 343 metri al secondo nell\'aria a 20°C. Questo è molto più lento della luce (300.000 km/s).',
        },
        {
          text: 'Quale funzione di Arduino misura la durata di un impulso su un pin?',
          options: ['analogRead()', 'digitalRead()', 'pulseIn()', 'millis()'],
          correctIndex: 2,
          explanation: 'pulseIn(pin, value) aspetta che il pin raggiunga il valore specificato, misura quanto tempo rimane così e restituisce la durata in microsecondi.',
        },
        {
          text: 'Quale fattore può influenzare la precisione della misurazione di distanza a ultrasuoni?',
          options: ['Il colore dell\'oggetto', 'La temperatura dell\'aria (cambia la velocità del suono)', 'La luminosità della stanza', 'La dimensione della scheda Arduino'],
          correctIndex: 1,
          explanation: 'La velocità del suono cambia con la temperatura dell\'aria (circa +0,6 m/s per °C). Le superfici morbide o angolate possono anche influenzare la precisione dell\'eco.',
        },
      ],
      discussion: [
        'Come potresti usare questo sensore per costruire un sistema di assistenza al parcheggio?',
        'Perché il sensore potrebbe dare letture imprecise per superfici morbide o angolate?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Velocità del Suono', pct: 25 },
        { label: 'Tempo di Volo', pct: 30 },
        { label: 'Rilevamento dell\'Eco', pct: 25 },
        { label: 'Precisione della Misurazione', pct: 20 },
      ],
      misconceptions: [
        'Gli studenti possono pensare che i sensori a ultrasuoni usino luce o laser',
        'Gli studenti dimenticano di dividere per 2 per il tempo di andata e ritorno',
      ],
      hook: 'I sensori di parcheggio della tua auto usano la stessa fisica che esplorerai oggi — misurare la distanza con il suono!',
      khanLinks: [
        { title: 'Onde Sonore', url: 'https://www.khanacademy.org/science/physics/mechanical-waves-and-sound' },
      ],
    },
    dataTable: {
      headers: ['Distanza Reale (cm)', 'Lettura del Sensore (cm)', 'Errore (cm)', '% Errore', 'Tipo di Superficie'],
    },
    observations: [
      'Confronta le letture del sensore con le misurazioni del righello a 8 distanze diverse',
      'Calcola la percentuale di errore per ogni misurazione',
      'Prova con diversi tipi di superficie (dura, morbida, angolata)',
    ],
    conclusion: 'I sensori a ultrasuoni usano la velocità del suono e il tempo di volo per calcolare la distanza. La precisione dipende dalla temperatura, dal tipo di superficie e dall\'angolo.',
    ai: {
      opening: 'Misuriamo la distanza con il suono! 📏 Imparerai come funziona il sonar — la stessa tecnologia usata nei sottomarini e nei sensori di parcheggio.',
      keywords: {
        setup: 'Collega il sensore a ultrasuoni al Science Carrier R3. Il sensore punta verso l\'esterno.',
        formula: 'distanza = (pulseIn_tempo * 0.0343) / 2. Dividi per 2 per il viaggio di andata e ritorno!',
        error: 'Se le letture sono zero, controlla le connessioni del sensore. Se sono inconsistenti, assicurati che il bersaglio sia piatto e perpendicolare.',
        question: 'A quale distanza il sensore diventa inaffidabile? Perché?',
        real: 'Auto, sottomarini, robot e persino pipistrelli usano lo stesso principio di ecolocalizzazione.',
        result: 'Dovresti vedere distanze precise (±2cm) per oggetti a 2-400cm di distanza.',
      },
      hint: 'Assicurati che il sensore punti direttamente verso una superficie piatta per ottenere le letture più precise.',
      expected: 'Misurazioni di distanza in cm visualizzate sul Monitor Seriale, con precisione di 2cm.',
    },
  },

  508: {
    title: 'Stazione di Monitoraggio Ambientale',
    desc: 'Usa la scheda Science Kit R3 per leggere simultaneamente temperatura, umidità, pressione e luce — costruendo una stazione meteorologica.',
    summary: {
      whatTheyLearn: 'Gli studenti apprendono la raccolta dati multi-sensore, il monitoraggio ambientale, la correlazione dei dati e l\'app Arduino Science Journal.',
      instructions: [
        'Collega l\'Arduino Nano RP2040 Connect al Science Carrier R3.',
        'Collega via USB-C al tuo computer.',
        'Carica lo sketch di monitoraggio ambientale (legge tutti i sensori integrati).',
        'Apri il Monitor Seriale o l\'app Arduino Science Journal.',
        'Registra le letture ogni 2 minuti per 20 minuti.',
      ],
      expectedOutcome: 'Un registro completo di dati ambientali che mostra come cambiano temperatura, umidità, pressione e livelli di luce nel tempo.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Nano RP2040 Connect' },
        { emoji: '📡', name: 'Science Carrier R3 (sensori integrati)' },
        { emoji: '🔌', name: 'Cavo USB-C' },
      ],
      observationsToRecord: [
        'Quali sono le letture di base di ogni sensore?',
        'Come cambiano le letture quando respiri vicino ai sensori?',
        'Aprire una finestra cambia la lettura di pressione?',
        'Come si correlano le quattro misurazioni tra loro?',
      ],
      theoryPoints: [
        'La temperatura influenza la capacità di umidità (l\'aria calda trattiene più umidità)',
        'La pressione atmosferica al livello del mare ≈ 1013,25 hPa',
        'La pressione diminuisce con l\'altitudine (~12 hPa ogni 100m)',
        'I livelli di luce si misurano in lux (0=buio, 100.000=luce solare diretta)',
      ],
      realWorldConnections: [
        'Le stazioni meteorologiche raccolgono esattamente questi dati per le previsioni',
        'Gli edifici intelligenti monitorano la qualità dell\'aria interna',
        'I sensori agricoli ottimizzano le condizioni di coltivazione',
      ],
      formula: 'Formula barometrica: P = P₀ × e^(-Mgh/RT); Umidità relativa = (vapore reale / vapore max. a temp.) × 100%',
    },
    questions: {
      mcq: [
        {
          text: 'Qual è la pressione atmosferica standard al livello del mare?',
          options: ['100 hPa', '500 hPa', '1013,25 hPa', '5000 hPa'],
          correctIndex: 2,
          explanation: 'La pressione atmosferica standard al livello del mare è 1013,25 ettopascal (hPa), anche nota come 1 atmosfera o 101,325 kPa.',
        },
        {
          text: 'Cosa succede alla pressione atmosferica a quote maggiori?',
          options: ['Aumenta', 'Diminuisce', 'Rimane uguale', 'Fluttua casualmente'],
          correctIndex: 1,
          explanation: 'La pressione atmosferica diminuisce con l\'altitudine perché c\'è meno aria sopra che preme verso il basso. Diminuisce di circa 12 hPa ogni 100m.',
        },
        {
          text: 'Cosa misura l\'"umidità relativa"?',
          options: ['La quantità totale di acqua nell\'aria', 'La percentuale di umidità nell\'aria rispetto al massimo che può contenere a quella temperatura', 'La temperatura del vapore acqueo', 'La velocità di evaporazione'],
          correctIndex: 1,
          explanation: 'L\'umidità relativa è il rapporto tra il vapore acqueo effettivo nell\'aria e la quantità massima che potrebbe contenere alla temperatura corrente, espresso in percentuale.',
        },
        {
          text: 'Perché è utile misurare più parametri ambientali simultaneamente?',
          options: ['Rende il progetto più complesso', 'I parametri sono correlati e insieme danno un quadro completo delle condizioni', 'Più sensori sono più economici di uno', 'Non è utile'],
          correctIndex: 1,
          explanation: 'I parametri ambientali sono interconnessi. La temperatura influenza l\'umidità, la pressione indica cambiamenti meteorologici e la luce influisce sui processi biologici. Insieme raccontano una storia completa.',
        },
        {
          text: 'In quale unità si misura tipicamente l\'intensità della luce?',
          options: ['Watt', 'Decibel', 'Lux', 'Ohm'],
          correctIndex: 2,
          explanation: 'L\'intensità della luce si misura in lux. Una stanza buia può essere 10 lux, un ufficio 500 lux e la luce solare diretta 100.000 lux.',
        },
      ],
      discussion: [
        'Come potrebbe questa stazione aiutare un agricoltore a gestire le sue colture?',
        'Quali schemi ti aspetteresti in un periodo di monitoraggio di 24 ore?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Dati Multi-Sensore', pct: 25 },
        { label: 'Scienza dell\'Atmosfera', pct: 25 },
        { label: 'Registrazione Dati', pct: 25 },
        { label: 'Analisi dei Dati', pct: 25 },
      ],
      misconceptions: [
        'Gli studenti possono pensare che tutti i sensori necessitino di cablaggio esterno (la scheda carrier ha sensori integrati)',
        'Gli studenti confondono umidità assoluta e relativa',
      ],
      hook: 'I meteorologi usano gli stessi tipi di sensori. Oggi costruisci la tua stazione meteorologica!',
      khanLinks: [
        { title: 'Clima e Meteorologia', url: 'https://www.khanacademy.org/science/earth-science' },
      ],
    },
    dataTable: {
      headers: ['Tempo', 'Temperatura (°C)', 'Umidità (%)', 'Pressione (hPa)', 'Luce (lux)'],
    },
    observations: [
      'Registra le letture dei quattro sensori ogni 2 minuti per 20 minuti',
      'Cerca correlazioni tra le letture',
      'Prova come respirare vicino al sensore cambia l\'umidità e la temperatura',
    ],
    conclusion: 'Il monitoraggio ambientale multi-sensore rivela come i parametri fisici sono interconnessi. Temperatura, umidità, pressione e luce insieme forniscono un quadro completo delle condizioni ambientali.',
    ai: {
      opening: 'Costruiamo una stazione meteorologica! 🌤️ La scheda Science Kit carrier ha 4 sensori ambientali integrati — nessun cablaggio aggiuntivo necessario.',
      keywords: {
        setup: 'Basta collegare il Nano RP2040 al Science Carrier R3 e inserire l\'USB-C. Tutti i sensori sono sulla scheda!',
        formula: 'Pressione standard: 1013,25 hPa. Umidità: % del massimo di umidità che l\'aria può contenere alla temperatura attuale.',
        error: 'Se le letture sembrano errate, assicurati che la scheda carrier sia correttamente posizionata sul Nano.',
        question: 'Cosa succede alle quattro letture quando respiri sui sensori?',
        real: 'Le stazioni meteorologiche professionali, gli edifici intelligenti e i sistemi agricoli IoT usano questi stessi sensori.',
        result: 'Dovresti vedere i valori di temperatura, umidità, pressione e luce aggiornarsi in tempo reale.',
      },
      hint: 'Il Science Carrier R3 ha tutti i sensori integrati — non serve cablaggio su breadboard per questo esperimento!',
      expected: 'Quattro letture dei sensori: temp (~20-25°C), umidità (30-70%), pressione (~1013 hPa), luce (varia).',
    },
  },

  509: {
    title: 'Servomotore — Controllo Preciso dell\'Angolo',
    desc: 'Controlla un servomotore per ruotare ad angoli precisi (0-180°) usando un potenziometro come ingresso.',
    summary: {
      whatTheyLearn: 'Gli studenti apprendono il controllo dei servomotori usando la libreria Servo, segnali PWM per il posizionamento angolare e la mappatura ingresso-uscita.',
      instructions: [
        'Collega il servomotore: cavo rosso=5V, marrone/nero=GND, arancione/giallo segnale=pin 9.',
        'Collega un potenziometro: sinistra=GND, destra=5V, centro=A0.',
        'Includi la libreria Servo e crea un oggetto Servo.',
        'Leggi il potenziometro (0-1023), mappa all\'angolo (0-180) e scrivi al servo.',
        'Gira la manopola del potenziometro e osserva come il servo la segue.',
      ],
      expectedOutcome: 'Il servomotore segue la posizione del potenziometro, ruotando uniformemente da 0° a 180°.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Breadboard' },
        { emoji: '🦾', name: '1x Servomotore' },
        { emoji: '🎛️', name: '1x Potenziometro (10kΩ)' },
        { emoji: '🔌', name: 'Cavi di collegamento' },
      ],
      observationsToRecord: [
        'Il servo si muove nell\'intero intervallo 0-180°?',
        'Il movimento è fluido o a scatti?',
        'Il servo mantiene la sua posizione quando smetti di ruotare?',
        'Cosa succede agli angoli estremi (0° e 180°)?',
      ],
      theoryPoints: [
        'I servo contengono un motore, un treno di ingranaggi e un circuito di retroazione della posizione',
        'La larghezza del segnale PWM determina l\'angolo: 1ms=0°, 1,5ms=90°, 2ms=180°',
        'La libreria Servo gestisce la temporizzazione PWM automaticamente',
        'Servo.write(angle) imposta la posizione; Servo.attach(pin) collega a un pin',
      ],
      realWorldConnections: [
        'I bracci robotici nella produzione industriale usano servo ad alta precisione',
        'Le auto e gli aerei RC usano servo per lo sterzo',
        'Gli stabilizzatori di telecamere usano servo veloci per stabilizzare il video',
      ],
      formula: 'angle = map(analogRead(A0), 0, 1023, 0, 180); PWM: 1ms=0°, 1,5ms=90°, 2ms=180°',
    },
    questions: {
      mcq: [
        {
          text: 'Qual è la differenza principale tra un servomotore e un motore DC normale?',
          options: ['I servo sono più grandi', 'I servo possono essere controllati ad angoli specifici; i motori DC girano solamente', 'I motori DC sono più potenti', 'Non c\'è differenza'],
          correctIndex: 1,
          explanation: 'Un servo può posizionarsi ad un angolo specifico (0-180°) usando la retroazione di posizione integrata. Un motore DC normale gira solo continuamente.',
        },
        {
          text: 'Quale libreria Arduino è necessaria per controllare un servo?',
          options: ['Motor.h', 'Servo.h', 'PWM.h', 'Non serve nessuna libreria'],
          correctIndex: 1,
          explanation: 'La libreria Servo (Servo.h) fornisce funzioni semplici come attach(), write() e read() per controllare i servomotori.',
        },
        {
          text: 'Cosa fa Servo.write(90)?',
          options: ['Ruota il servo a 90 RPM', 'Muove il servo alla posizione di 90 gradi (centro)', 'Imposta la velocità al 90%', 'Aspetta 90 millisecondi'],
          correctIndex: 1,
          explanation: 'Servo.write(90) muove il servo alla posizione centrale (90° dell\'intervallo 0-180°).',
        },
        {
          text: 'Come fa un servo a conoscere la sua posizione attuale?',
          options: ['Usa il GPS', 'Un potenziometro interno fornisce retroazione della posizione', 'Conta il numero di rotazioni', 'Usa una telecamera'],
          correctIndex: 1,
          explanation: 'I servo hanno un potenziometro interno collegato all\'asse di uscita che fornisce retroazione della posizione al circuito di controllo.',
        },
        {
          text: 'Qual è l\'intervallo angolare tipico di un servo standard hobby?',
          options: ['0-90°', '0-180°', '0-360°', '0-720°'],
          correctIndex: 1,
          explanation: 'I servo standard hobby hanno un intervallo di 0-180°. I servo speciali a rotazione continua possono girare a 360° ma perdono il controllo preciso dell\'angolo.',
        },
      ],
      discussion: [
        'Come costruiresti un braccio robotico a 2 assi usando due servo?',
        'Qual è la differenza tra un servo standard e un servo a rotazione continua?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Controllo del Servo', pct: 30 },
        { label: 'Segnali PWM', pct: 25 },
        { label: 'Mappatura Ingresso-Uscita', pct: 25 },
        { label: 'Accoppiamento Meccanico', pct: 20 },
      ],
      misconceptions: [
        'Gli studenti possono pensare che i servo possano ruotare continuamente come i motori DC',
        'Gli studenti confondono il cavo del segnale del servo con i cavi di alimentazione',
      ],
      hook: 'I bracci robotici, le auto RC e gli stabilizzatori di telecamere usano tutti i servo. Oggi ne controlli uno con una manopola!',
      khanLinks: [],
    },
    dataTable: {
      headers: ['Posizione del Pot (%)', 'Lettura Analogica', 'Angolo Mappato (°)', 'Posizione Reale del Servo', 'Note'],
    },
    observations: [
      'Registra le letture del potenziometro e gli angoli corrispondenti del servo',
      'Prova l\'intero intervallo di movimento (0-180°)',
      'Nota eventuali zone morte o vibrazioni nelle posizioni estreme',
    ],
    conclusion: 'I servo forniscono un controllo preciso dell\'angolo usando segnali PWM. La libreria Servo semplifica il controllo, e map() converte gli intervalli di ingresso in angoli di uscita.',
    ai: {
      opening: 'Controlliamo un servomotore! 🦾 Girerai una manopola del potenziometro e il servo seguirà — proprio come un\'articolazione robotica.',
      keywords: {
        setup: 'Servo: rosso=5V, nero/marrone=GND, segnale=pin 9. Potenziometro: sinistra=GND, destra=5V, centro=A0.',
        formula: 'angle = map(analogRead(A0), 0, 1023, 0, 180). Impulso PWM: 1ms=0°, 2ms=180°.',
        error: 'Se il servo vibra, potrebbe servire più potenza. Prova ad alimentarlo da una fonte esterna da 5V.',
        question: 'Puoi programmare il servo per oscillare automaticamente avanti e indietro senza il potenziometro?',
        real: 'I bracci robotici, i veicoli RC e gli stabilizzatori di telecamere usano tutti servo per il posizionamento preciso.',
        result: 'Gira il pot: il servo segue da 0° a 180°. La mappatura dovrebbe risultare fluida e reattiva.',
      },
      hint: 'Assicurati di includere #include <Servo.h> in cima al tuo sketch e di chiamare myServo.attach(9) in setup().',
      expected: 'Il servo segue uniformemente il potenziometro da 0° a 180°.',
    },
  },

  510: {
    title: 'Controllo della Velocità del Motore DC',
    desc: 'Controlla la velocità e la direzione di un motore DC usando il ponte H (L293D) come driver del motore.',
    summary: {
      whatTheyLearn: 'Gli studenti apprendono i driver del motore a ponte H, il controllo della velocità tramite PWM, l\'inversione della direzione e la protezione con diodo flyback.',
      instructions: [
        'Posiziona il CI L293D sulla breadboard (tacca verso l\'alto).',
        'Cabla il L293D: pin 1 (enable) al pin 3 di Arduino (PWM), pin 2,7 ai pin 4,5 di Arduino, pin 8 a 9V, pin 16 a 5V.',
        'Collega il motore DC ai pin di uscita 3 e 6 del L293D.',
        'Collega un potenziometro ad A0 per il controllo della velocità.',
        'Scrivi il codice: direzione tramite pin 4/5, velocità tramite PWM sul pin 3.',
      ],
      expectedOutcome: 'La velocità del motore DC si controlla con il potenziometro, e la direzione può essere invertita cambiando gli stati dei pin.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Breadboard' },
        { emoji: '🔄', name: '1x Motore DC' },
        { emoji: '📦', name: '1x CI ponte H L293D' },
        { emoji: '🎛️', name: '1x Potenziometro' },
        { emoji: '🔗', name: '1x Diodo 1N4007' },
        { emoji: '🔋', name: 'Connettore batteria 9V' },
        { emoji: '🔌', name: 'Cavi di collegamento' },
      ],
      observationsToRecord: [
        'A quale valore PWM il motore inizia a girare?',
        'La velocità è proporzionale al duty cycle PWM?',
        'L\'inversione di direzione funziona fluidamente?',
        'Cosa succede se provi a invertire mentre gira velocemente?',
      ],
      theoryPoints: [
        'Un ponte H usa 4 interruttori per controllare la direzione del motore',
        'Il duty cycle PWM controlla il voltaggio effettivo e quindi la velocità',
        'I diodi flyback proteggono dalla forza controelettromotrice del motore',
        'Il CI L293D contiene due ponti H per gestire fino a 2 motori',
      ],
      realWorldConnections: [
        'I veicoli elettrici usano ponti H per il controllo del motore',
        'I robot industriali usano driver del motore per il movimento preciso',
        'I droni usano il controllo della velocità del motore per stabilità e direzione',
      ],
      formula: 'Velocità ∝ Duty cycle; Ponte H: IN1=H,IN2=L → Avanti; IN1=L,IN2=H → Indietro',
    },
    questions: {
      mcq: [
        {
          text: 'A cosa serve un ponte H?',
          options: ['Misurare la temperatura', 'Controllare la direzione di un motore DC', 'Leggere sensori analogici', 'Connettersi al Wi-Fi'],
          correctIndex: 1,
          explanation: 'Un ponte H è un circuito che permette di controllare sia la direzione che la velocità di un motore DC cambiando la polarità del voltaggio applicato.',
        },
        {
          text: 'A cosa serve un diodo flyback in un circuito con motore?',
          options: ['Per far girare il motore più velocemente', 'Per proteggere il circuito dai picchi di voltaggio quando il motore si ferma', 'Per misurare la velocità del motore', 'Per collegare più motori'],
          correctIndex: 1,
          explanation: 'Quando un motore si ferma, genera un picco di voltaggio di forza controelettromotrice. Un diodo flyback assorbe questo picco in modo sicuro, proteggendo il ponte H e Arduino.',
        },
        {
          text: 'Come controlla PWM la velocità del motore?',
          options: ['Cambiando il voltaggio', 'Commutando rapidamente l\'alimentazione accesa e spenta, dove la proporzione determina la potenza effettiva', 'Aggiungendo più resistenza', 'Cambiando il cablaggio del motore'],
          correctIndex: 1,
          explanation: 'PWM commuta rapidamente l\'alimentazione del motore accesa e spenta. Un duty cycle del 50% significa che l\'alimentazione è accesa metà del tempo, dando metà velocità. 100% = velocità massima.',
        },
        {
          text: 'Nel L293D, quale pin controlla la velocità del motore?',
          options: ['Pin di ingresso (IN1, IN2)', 'Pin di abilitazione (EN)', 'Pin di uscita (OUT1, OUT2)', 'Pin di massa'],
          correctIndex: 1,
          explanation: 'Il pin di abilitazione (EN) controlla se il motore funziona. Usare PWM su questo pin controlla la velocità, mentre IN1/IN2 controllano la direzione.',
        },
        {
          text: 'Perché il motore necessita di un\'alimentazione separata (9V) da Arduino (5V)?',
          options: ['I motori sono più costosi', 'I motori consumano troppa corrente perché Arduino la fornisca in sicurezza', 'Arduino funziona solo a 5V', '9V rende il motore più silenzioso'],
          correctIndex: 1,
          explanation: 'I motori DC possono consumare centinaia di milliampere o più, superando ciò che Arduino può fornire in sicurezza. Un\'alimentazione separata protegge Arduino e fornisce potenza sufficiente.',
        },
      ],
      discussion: [
        'Come controlleresti due motori indipendentemente per un robot?',
        'Quali precauzioni di sicurezza sono importanti quando si lavora con i motori?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Funzionamento del Ponte H', pct: 30 },
        { label: 'Controllo Velocità PWM', pct: 25 },
        { label: 'Driver del Motore', pct: 25 },
        { label: 'Protezione del Circuito', pct: 20 },
      ],
      misconceptions: [
        'Gli studenti possono tentare di alimentare i motori direttamente dai pin di Arduino (può danneggiare la scheda)',
        'Gli studenti confondono i pin di controllo della direzione con il pin di controllo della velocità',
      ],
      hook: 'Le auto elettriche, i robot e i droni usano tutti driver del motore. Oggi ne costruisci uno da zero!',
      khanLinks: [],
    },
    dataTable: {
      headers: ['Valore del Pot', 'Duty Cycle PWM (%)', 'Direzione', 'Velocità del Motore (stimata)', 'Note'],
    },
    observations: [
      'Registra i valori PWM e le velocità del motore osservate',
      'Trova il valore PWM minimo che fa girare il motore',
      'Prova l\'inversione di direzione e nota eventuali problemi',
    ],
    conclusion: 'I ponti H permettono il controllo bidirezionale dei motori DC. PWM varia la velocità, i pin di direzione controllano il senso di rotazione, e i diodi flyback proteggono il circuito.',
    ai: {
      opening: 'Facciamo girare un motore! 🔄 Userai un ponte H per controllare sia la velocità che la direzione — la base di tutta la robotica.',
      keywords: {
        setup: 'L293D: enable sul pin 3 (PWM), direzione sui pin 4,5, alimentazione del motore dalla batteria 9V. Segui lo schema di cablaggio attentamente!',
        formula: 'Velocità = duty cycle PWM. Direzione: IN1=H,IN2=L avanti; IN1=L,IN2=H indietro; entrambi LOW = stop.',
        error: 'Il motore non gira? Controlla: 1) Batteria 9V collegata, 2) Pin Enable ha PWM, 3) IN1/IN2 sono configurati correttamente.',
        question: 'Quale valore PWM minimo fa iniziare a muovere il motore? Perché non è 0?',
        real: 'I veicoli elettrici, i droni e i robot industriali usano tutti driver del motore a ponte H.',
        result: 'La velocità del motore segue il potenziometro. Puoi invertire la direzione cambiando gli stati di IN1/IN2.',
      },
      hint: 'NON collegare MAI un motore direttamente ai pin di Arduino! Usa sempre un driver del motore come l\'L293D.',
      expected: 'Velocità del motore controllata dal potenziometro, con capacità di invertire la direzione.',
    },
  },

  511: {
    title: 'Cicalino Piezoelettrico — Fare Musica con il Codice',
    desc: 'Genera diversi toni musicali usando un cicalino piezoelettrico e programma una melodia semplice.',
    summary: {
      whatTheyLearn: 'Gli studenti apprendono le onde sonore, la relazione tra frequenza e tono, la funzione tone() e l\'uso degli array per memorizzare melodie.',
      instructions: [
        'Collega una gamba del cicalino piezoelettrico al pin 8 di Arduino.',
        'Collega l\'altra gamba a GND.',
        'Usa tone(8, frequenza, durata) per riprodurre note singole.',
        'Crea array per le note e le durate per riprodurre una melodia.',
        'Carica il codice e ascolta la tua melodia programmata!',
      ],
      expectedOutcome: 'Il cicalino riproduce toni singoli e una melodia riconoscibile (es: "Stella Stellina").',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Breadboard' },
        { emoji: '🎵', name: '1x Cicalino piezoelettrico' },
        { emoji: '🔌', name: 'Cavi di collegamento' },
      ],
      observationsToRecord: [
        'Quale intervallo di frequenze riesci a sentire?',
        'Quali frequenze suonano acute vs. gravi?',
        'Riesci a identificare le note musicali a orecchio?',
        'Come influisce la durata sul ritmo percepito?',
      ],
      theoryPoints: [
        'Il suono è prodotto da vibrazioni a frequenze specifiche',
        'Maggiore frequenza = tono più acuto. A4 = 440 Hz è il riferimento standard di accordatura',
        'tone(pin, frequenza, durata) genera un\'onda quadra alla frequenza data',
        'Le note musicali corrispondono a frequenze specifiche: C4=262Hz, D4=294Hz, E4=330Hz, ecc.',
      ],
      realWorldConnections: [
        'Gli strumenti musicali producono frequenze specifiche per ogni nota',
        'I sistemi di allarme usano toni diversi per allarmi diversi',
        'I biglietti d\'auguri elettronici usano tecnologia di cicalino simile',
      ],
      formula: 'Note musicali: C4=262Hz, D4=294Hz, E4=330Hz, F4=349Hz, G4=392Hz, A4=440Hz, B4=494Hz, C5=523Hz',
    },
    questions: {
      mcq: [
        {
          text: 'Cosa determina il tono di un suono?',
          options: ['Il volume', 'La durata', 'La frequenza', 'Il colore'],
          correctIndex: 2,
          explanation: 'Il tono è determinato dalla frequenza. Maggiore frequenza = tono più acuto. Per esempio, A4 = 440 Hz, e A5 = 880 Hz (un\'ottava più alta = doppia frequenza).',
        },
        {
          text: 'Qual è la frequenza standard di accordatura per la nota A4?',
          options: ['220 Hz', '440 Hz', '880 Hz', '1000 Hz'],
          correctIndex: 1,
          explanation: '440 Hz è lo standard internazionalmente accettato per A4 (La sopra il Do centrale). Si usa come riferimento per accordare gli strumenti musicali.',
        },
        {
          text: 'Cosa fa la funzione tone(8, 440, 500) di Arduino?',
          options: ['Legge il pin 8 per 440ms', 'Riproduce un tono di 440Hz sul pin 8 per 500 millisecondi', 'Imposta il pin 8 a 440 volt', 'Aspetta 500 secondi'],
          correctIndex: 1,
          explanation: 'tone(pin, frequenza, durata) riproduce un\'onda quadra alla frequenza specificata sul pin dato per la durata specificata in millisecondi.',
        },
        {
          text: 'Qual è la relazione tra un\'ottava e la frequenza?',
          options: ['Stessa frequenza', 'Il doppio della frequenza', 'Il triplo della frequenza', 'Metà della frequenza'],
          correctIndex: 1,
          explanation: 'Salire di un\'ottava raddoppia la frequenza. A4=440Hz, A5=880Hz. Scendere di un\'ottava la dimezza: A3=220Hz.',
        },
        {
          text: 'Quale struttura dati è utile per memorizzare una sequenza di note musicali nel codice?',
          options: ['Una variabile semplice', 'Un array', 'Una resistenza', 'Un contatore di ciclo'],
          correctIndex: 1,
          explanation: 'Gli array memorizzano sequenze di valori. Una melodia necessita di un array di frequenze delle note e un array di durate delle note.',
        },
      ],
      discussion: [
        'Perché un\'onda quadra di un cicalino suona diversa dalla stessa nota su un pianoforte?',
        'Come aggiungeresti un pulsante per riprodurre melodie diverse?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Suono e Frequenza', pct: 30 },
        { label: 'Funzione tone()', pct: 25 },
        { label: 'Array e Sequenze', pct: 25 },
        { label: 'Teoria Musicale', pct: 20 },
      ],
      misconceptions: [
        'Gli studenti confondono volume (ampiezza) con tono (frequenza)',
        'Gli studenti possono non rendersi conto che serve noTone() per fermare un tono continuo',
      ],
      hook: 'La musica è matematica! Ogni nota è una frequenza specifica. Oggi programmerai il tuo Arduino per suonare una melodia!',
      khanLinks: [
        { title: 'Onde Sonore', url: 'https://www.khanacademy.org/science/physics/mechanical-waves-and-sound' },
      ],
    },
    dataTable: {
      headers: ['Nome della Nota', 'Frequenza (Hz)', 'Durata (ms)', 'Tono Percepito', 'Note'],
    },
    observations: [
      'Registra diverse frequenze delle note e come suonano',
      'Programma e riproduci una melodia semplice',
      'Sperimenta con diversi ritmi cambiando le durate',
    ],
    conclusion: 'Il suono è prodotto da vibrazioni a frequenze specifiche. La funzione tone() genera queste frequenze, e gli array organizzano le note in melodie.',
    ai: {
      opening: 'Facciamo musica con il codice! 🎵 Programmerai il tuo Arduino per suonare melodie usando un cicalino piezoelettrico.',
      keywords: {
        setup: 'Collega il cicalino tra il pin 8 e GND. Tutto qui — il cablaggio più semplice finora!',
        formula: 'Frequenze delle note: C=262, D=294, E=330, F=349, G=392, A=440, B=494, C5=523 Hz.',
        error: 'Nessun suono? Controlla la polarità del cicalino (alcuni hanno gambe + e -). Prova un pin diverso.',
        question: 'Riesci a programmare "Tanti Auguri" o la tua canzone preferita? Cerca le frequenze delle note!',
        real: 'I campanelli, le sveglie e i giocattoli elettronici usano tutti cicalini piezoelettrici.',
        result: 'Dovresti sentire toni musicali chiari. Diverse frequenze = diverse note!',
      },
      hint: 'Usa noTone(pin) tra le note per creare una separazione netta. Senza di essa, le note si fondono.',
      expected: 'Toni musicali chiari dal cicalino, che alla fine riproducono una melodia riconoscibile.',
    },
  },

  512: {
    title: 'Luce Notturna Intelligente — Combinare Sensori e Attuatori',
    desc: 'Costruisci una luce notturna automatica che si accende al buio, regola la luminosità in base alla luce ambiente e riproduce un tono all\'attivazione.',
    summary: {
      whatTheyLearn: 'Gli studenti combinano tutto ciò che hanno imparato — sensori, attuatori, I/O analogico/digitale — in un sistema interattivo completo.',
      instructions: [
        'Costruisci il partitore di tensione dell\'LDR (A0) e il controllo di sensibilità con potenziometro (A1).',
        'Collega il LED RGB ai pin 9, 10, 11 (PWM) con resistenze da 220Ω.',
        'Collega il cicalino piezoelettrico al pin 8.',
        'Scrivi il codice: leggi l\'LDR, confronta con la soglia (regolata dal pot), controlla luminosità e colore del LED, riproduci tono di attivazione.',
        'Prova in diverse condizioni di illuminazione.',
      ],
      expectedOutcome: 'Una luce notturna completamente automatica: il LED si accende gradualmente al buio (luminosità proporzionale all\'oscurità), riproduce un tono delicato all\'attivazione, con sensibilità regolabile.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Breadboard' },
        { emoji: '☀️', name: '1x Fotoresistore (LDR)' },
        { emoji: '🔗', name: '1x Resistenza da 10kΩ' },
        { emoji: '🌈', name: '1x LED RGB' },
        { emoji: '🔗', name: '3x Resistenze da 220Ω' },
        { emoji: '🎵', name: '1x Cicalino piezoelettrico' },
        { emoji: '🎛️', name: '1x Potenziometro (sensibilità)' },
        { emoji: '🔌', name: 'Cavi di collegamento' },
      ],
      observationsToRecord: [
        'A quale livello di luce si attiva la luce notturna?',
        'La luminosità risponde proporzionalmente all\'oscurità?',
        'Il tono di attivazione si riproduce correttamente?',
        'Riesci a regolare la sensibilità con il potenziometro?',
      ],
      theoryPoints: [
        'L\'integrazione di sistema combina più ingressi e uscite',
        'La soglia con isteresi previene la commutazione rapida acceso/spento',
        'La luminosità PWM permette una regolazione fluida proporzionale all\'oscurità',
        'I parametri regolabili dall\'utente (tramite potenziometro) rendono il sistema adattabile',
      ],
      realWorldConnections: [
        'Le luci notturne commerciali usano lo stesso principio sensore-attuatore',
        'I dispositivi domotici intelligenti combinano più sensori per l\'automazione',
        'I sistemi IoT integrano rilevamento, elaborazione e attuazione',
      ],
      formula: 'luminosità = map(lightLevel, threshold, 0, 0, 255); threshold = map(analogRead(A1), 0, 1023, 100, 900)',
    },
    questions: {
      mcq: [
        {
          text: 'Cos\'è l\'"integrazione di sistema" nell\'ingegneria?',
          options: ['Usare solo un componente', 'Combinare più componenti affinché lavorino insieme come un sistema completo', 'Rendere il sistema il più complesso possibile', 'Testare ogni parte separatamente'],
          correctIndex: 1,
          explanation: 'L\'integrazione di sistema significa combinare sensori, attuatori e codice in un sistema coeso dove tutte le parti lavorano insieme verso un obiettivo comune.',
        },
        {
          text: 'Perché aggiungere un potenziometro per regolare la sensibilità della luce notturna?',
          options: ['Ha un aspetto più professionale', 'Permette all\'utente di adattare la soglia a diversi ambienti', 'I potenziometri sono necessari per tutti i circuiti', 'Aumenta la luminosità del LED'],
          correctIndex: 1,
          explanation: 'Diverse stanze hanno diversi livelli di luce ambientale. Una soglia regolabile dall\'utente permette alla luce notturna di funzionare correttamente in qualsiasi ambiente.',
        },
        {
          text: 'Cos\'è l\'"isteresi" e perché è utile in una luce notturna?',
          options: ['Un tipo di LED', 'Un margine tra le soglie di accensione e spegnimento che previene lo sfarfallio rapido', 'Un effetto sonoro', 'Un tipo di resistenza'],
          correctIndex: 1,
          explanation: 'L\'isteresi aggiunge un margine tra le soglie di attivazione e disattivazione. Questo previene che la luce sfarfalli rapidamente quando i livelli di luce oscillano vicino alla soglia.',
        },
        {
          text: 'Come crea colori diversi il LED RGB?',
          options: ['Usando voltaggi diversi', 'Mescolando luce rossa, verde e blu a diverse intensità usando PWM', 'Cambiando la temperatura del LED', 'Usando filtri colorati'],
          correctIndex: 1,
          explanation: 'Un LED RGB ha tre LED separati (rosso, verde, blu) al suo interno. Controllando la luminosità di ciascuno con PWM, puoi mescolare qualsiasi colore.',
        },
        {
          text: 'Qual è il primo passo più importante nel debug di un circuito complesso che non funziona?',
          options: ['Ricablare tutto da zero', 'Testare ogni componente individualmente per isolare il problema', 'Aggiungere più componenti', 'Cambiare la scheda Arduino'],
          correctIndex: 1,
          explanation: 'Il debug sistematico significa testare ogni componente separatamente: l\'LDR legge correttamente? Il LED si accende? Il cicalino funziona? Isola il problema prima di risolverlo.',
        },
      ],
      discussion: [
        'Come aggiungeresti un sensore di movimento (PIR) per trasformare questa in una luce di sicurezza intelligente?',
        'Quali funzionalità aggiuntive renderebbero questo prodotto commercialmente valido?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Integrazione di Sistema', pct: 30 },
        { label: 'Controllo di I/O Multipli', pct: 25 },
        { label: 'Pensiero Progettuale', pct: 25 },
        { label: 'Strategie di Debug', pct: 20 },
      ],
      misconceptions: [
        'Gli studenti possono tentare di costruire tutto in una volta invece di testare i componenti individualmente',
        'Gli studenti a volte dimenticano che il LED RGB necessita di 3 resistenze separate',
      ],
      hook: 'Questo è il tuo progetto finale! Tutto ciò che hai imparato — LED, sensori, cicalini, codice — si unisce in un dispositivo intelligente.',
      khanLinks: [],
    },
    dataTable: {
      headers: ['Livello di Luce', 'Soglia (pot)', 'Luminosità del LED', 'Colore del LED', 'Cicalino', 'Note'],
    },
    observations: [
      'Prova il sistema completo in diverse condizioni di illuminazione',
      'Regola il potenziometro di soglia per un\'attivazione ottimale',
      'Registra il comportamento del sistema a diversi livelli di luce',
    ],
    conclusion: 'Costruire una luce notturna intelligente dimostra l\'integrazione di sistema — combinare sensori, attuatori e codice in un prodotto funzionale. Questa è la base della tecnologia IoT e della domotica intelligente.',
    ai: {
      opening: 'È ora del progetto finale! 🌙 Combinerai tutto — sensore di luce, LED RGB, cicalino e potenziometro — in una luce notturna intelligente.',
      keywords: {
        setup: 'LDR su A0, Pot su A1, LED RGB sui pin 9/10/11, Cicalino sul pin 8. Il circuito più complesso finora!',
        formula: 'luminosità = map(light, threshold, 0, 0, 255). La soglia è regolabile tramite il pot su A1.',
        error: 'Costruisci e testa un componente alla volta. Prima la lettura dell\'LDR, poi aggiungi il LED, poi il cicalino.',
        question: 'Puoi far cambiare il colore del LED in base a quanto è buio? Blu al tramonto, bianco caldo di notte?',
        real: 'Le luci intelligenti commerciali, l\'automazione domestica e i dispositivi IoT usano questo stesso approccio multi-sensore.',
        result: 'Una luce notturna completamente automatica: si attiva al buio, luminosità proporzionale all\'oscurità, riproduce un tono, sensibilità regolabile.',
      },
      hint: 'Costruisci incrementalmente! Testa prima l\'LDR da solo, poi aggiungi il LED, poi il cicalino, poi combina.',
      expected: 'Luce notturna automatica che risponde all\'oscurità con sensibilità regolabile, colore RGB e tono di attivazione.',
    },
  },
}

export const roboticsExperimentsIt: Experiment[] = roboticsExperiments.map(exp => {
  const t = itTranslations[exp.num]
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

import type { Experiment } from './experiments'
import { roboticsExperiments } from './robotics-experiments'

/* eslint-disable @typescript-eslint/no-explicit-any */
const frTranslations: Record<number, any> = {
  501: {
    title: 'Clignotement LED — Votre premier circuit',
    desc: 'Construisez votre premier circuit en connectant une LED à Arduino et en écrivant du code pour la faire clignoter.',
    summary: {
      whatTheyLearn: 'Les élèves apprennent les bases d\'un circuit numérique — comment le courant circule depuis Arduino à travers une résistance et une LED, et comment écrire leur premier programme Arduino en utilisant digitalWrite() et delay().',
      instructions: [
        'Insérez l\'Arduino Uno dans la base de la platine d\'essai.',
        'Connectez une résistance de 220Ω de la broche numérique 13 de l\'Arduino à une rangée vide de la platine d\'essai.',
        'Connectez la patte longue (anode, +) d\'une LED rouge à la même rangée que la résistance.',
        'Connectez la patte courte (cathode, −) de la LED au rail GND de l\'Arduino.',
        'Téléversez le programme Blink depuis File > Examples > 01.Basics > Blink.',
      ],
      expectedOutcome: 'La LED clignote pendant 1 seconde allumée, puis 1 seconde éteinte, en boucle indéfiniment. Changer delay(1000) en delay(250) la fait clignoter plus vite.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Platine d\'essai + base en bois' },
        { emoji: '💡', name: '1x LED rouge' },
        { emoji: '🔗', name: '1x résistance 220Ω (rouge-rouge-marron)' },
        { emoji: '🔌', name: '2x fils de connexion' },
        { emoji: '🔌', name: 'Câble USB' },
      ],
      observationsToRecord: [
        'La LED s\'allume-t-elle lorsqu\'elle est connectée ?',
        'Que se passe-t-il lorsque vous changez delay(1000) en delay(500) ?',
        'Que se passe-t-il si vous retirez la résistance ? (OBSERVEZ brièvement UNIQUEMENT)',
        'Que se passe-t-il si vous inversez les pattes de la LED ?',
      ],
      theoryPoints: [
        'Les LED sont polarisées — le courant ne circule que dans un sens (de l\'anode + vers la cathode −)',
        'Une résistance limite le courant pour protéger la LED. V = IR, donc R = (5V - 2V) / 0,02A = 150Ω minimum',
        'digitalWrite(pin, HIGH) met la broche à 5V ; LOW la met à 0V',
        'delay(ms) met le programme en pause pendant le nombre de millisecondes spécifié',
      ],
      realWorldConnections: [
        'Les feux de circulation utilisent la commutation temporisée des LED',
        'Les gyrophares des véhicules d\'urgence utilisent des motifs de clignotement rapide',
        'Les indicateurs d\'état sur les appareils électroniques (LED d\'alimentation, indicateur de charge)',
      ],
      formula: 'R = (V_alimentation - V_LED) / I_LED = (5V - 2V) / 20mA = 150Ω (on utilise 220Ω par sécurité)',
    },
    questions: {
      mcq: [
        {
          text: 'Quel est le rôle de la résistance dans un circuit LED ?',
          options: ['Rendre la LED plus lumineuse', 'Limiter le courant et protéger la LED contre la destruction', 'Stocker de l\'énergie pour la LED', 'Inverser le sens du courant'],
          correctIndex: 1,
          explanation: 'Une résistance limite la quantité de courant traversant la LED. Sans elle, un courant trop important circulerait et endommagerait ou détruirait la LED.',
        },
        {
          text: 'Que fait la fonction Arduino delay(1000) ?',
          options: ['Allume la LED pendant 1 seconde', 'Met le programme en pause pendant 1000 millisecondes (1 seconde)', 'Met la broche 1000 à HIGH', 'Fait clignoter la LED 1000 fois'],
          correctIndex: 1,
          explanation: 'delay(1000) met l\'ensemble du programme en pause pendant 1000 millisecondes (1 seconde). Pendant ce temps, l\'état des broches reste inchangé.',
        },
        {
          text: 'Quelle fonction Arduino met une broche numérique à HIGH (5V) ou LOW (0V) ?',
          options: ['analogWrite()', 'digitalRead()', 'digitalWrite()', 'pinMode()'],
          correctIndex: 2,
          explanation: 'digitalWrite(pin, value) met une broche numérique à HIGH (5V) ou LOW (0V). Elle sert à allumer et éteindre les LED, moteurs et autres composants numériques.',
        },
        {
          text: 'Que se passe-t-il si vous connectez une LED à l\'envers (polarité inversée) ?',
          options: ['Elle brille plus fort', 'Elle clignote automatiquement', 'Elle ne s\'allume pas car les LED ne laissent passer le courant que dans un sens', 'Elle change de couleur'],
          correctIndex: 2,
          explanation: 'Les LED sont des diodes — elles ne laissent passer le courant que dans un sens (de l\'anode + vers la cathode −). Inverser la LED empêche le courant de circuler.',
        },
        {
          text: 'Dans le programme Blink, quelles deux fonctions sont requises dans tout programme Arduino ?',
          options: ['start() et stop()', 'begin() et end()', 'setup() et loop()', 'on() et off()'],
          correctIndex: 2,
          explanation: 'Tout programme Arduino doit contenir setup() — qui s\'exécute une fois au démarrage — et loop() — qui s\'exécute en boucle indéfiniment.',
        },
      ],
      discussion: [
        'Pourquoi avons-nous besoin d\'une résistance avec une LED externe mais pas avec la LED intégrée sur la broche 13 ?',
        'Si vous vouliez que la LED clignote selon un motif (2 rapides, 1 lent), comment modifieriez-vous le code ?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Sortie numérique', pct: 30 },
        { label: 'Bases des circuits', pct: 30 },
        { label: 'Structure du code Arduino', pct: 25 },
        { label: 'Loi d\'Ohm', pct: 15 },
      ],
      misconceptions: [
        'Les élèves pensent souvent que retirer la résistance rend la LED plus lumineuse (c\'est vrai brièvement, mais elle grille ensuite)',
        'Les élèves peuvent croire que HIGH signifie la tension maximale plutôt que 5V spécifiquement',
        'Les élèves confondent parfois l\'anode et la cathode de la LED',
      ],
      hook: 'Chaque appareil intelligent que vous possédez — du voyant de notification de votre téléphone au tableau de bord d\'une voiture — utilise des LED contrôlées par du code. Aujourd\'hui, vous allez écrire votre premier programme pour en contrôler une !',
      khanLinks: [
        { title: 'Introduction aux circuits', url: 'https://www.khanacademy.org/science/physics/circuits-topic' },
        { title: 'Loi d\'Ohm', url: 'https://www.khanacademy.org/science/physics/circuits-topic/circuits-resistance/v/introduction-to-circuits-and-ohms-law' },
      ],
    },
    dataTable: {
      headers: ['Délai (ms)', 'Clignotements par minute', 'Temps allumé', 'Temps éteint', 'Observation'],
      rows: 5,
    },
    observations: [
      'Notez la valeur du délai et comptez combien de fois la LED clignote en 30 secondes',
      'Calculez le nombre de clignotements par minute pour chaque valeur de délai',
      'Observez toute différence de luminosité perçue à des vitesses de clignotement très rapides',
    ],
    conclusion: 'Un circuit LED nécessite une résistance de limitation de courant pour protéger la LED. La fonction digitalWrite() de l\'Arduino contrôle la tension de la broche (5V ou 0V), et delay() contrôle la temporisation.',
    ai: {
      opening: 'Bienvenue dans votre première expérience Arduino ! 🤖💡 Nous allons faire clignoter une LED avec du code. C\'est le « Hello World » de l\'électronique !',
      keywords: {
        setup: 'Assurez-vous que la patte longue de la LED (anode) est connectée via la résistance à la broche 13, et la patte courte (cathode) au GND.',
        formula: 'Utilisez la loi d\'Ohm : R = V/I. L\'Arduino fournit 5V, la LED consomme environ 2V, il faut donc au moins 150Ω. On utilise 220Ω par sécurité.',
        error: 'Si votre LED ne s\'allume pas : 1) Vérifiez le sens de la LED (patte longue = +), 2) Assurez-vous que la résistance est connectée, 3) Vérifiez la broche 13 dans votre code.',
        question: 'Essayez de changer les valeurs du délai. Que se passe-t-il avec delay(100) ? Avec delay(50) ? À quelle vitesse le clignotement ressemble-t-il à une lumière continue ?',
        real: 'Les feux de circulation, les LED de notification des téléphones, les tableaux de bord de voitures et les écrans de stade utilisent tous le contrôle temporisé de LED !',
        result: 'Vous devriez voir la LED s\'allumer pendant 1 seconde et s\'éteindre pendant 1 seconde. Si elle reste toujours allumée ou éteinte, vérifiez votre câblage.',
        extend: 'Essayez de contrôler plusieurs LED sur différentes broches, ou créez un SOS en code Morse (3 courts, 3 longs, 3 courts).',
        explain: 'La fonction loop() se répète indéfiniment. À l\'intérieur, on met la broche 13 à HIGH (LED allumée), on attend, on la met à LOW (LED éteinte), on attend, et on recommence.',
        hook: 'Fait amusant : faire clignoter une LED EST le « Hello World » d\'Arduino !',
        misconception: 'La résistance ne rend pas la LED plus faible de manière néfaste — elle la protège ! Sans elle, la LED grille en quelques secondes.',
      },
      hint: 'Assurez-vous que la patte longue de la LED (anode) est connectée du côté de la résistance, et la patte courte (cathode) au GND.',
      expected: 'La LED rouge devrait clignoter à un intervalle régulier déterminé par vos valeurs de delay().',
    },
  },
  502: {
    title: 'Contrôleur de feux de circulation',
    desc: 'Construisez un système de feux de circulation à 3 LED et programmez-le pour cycler entre le rouge, le jaune et le vert avec un timing réaliste.',
    summary: {
      whatTheyLearn: 'Les élèves apprennent la logique séquentielle en contrôlant plusieurs LED dans une séquence temporisée, simulant un vrai système de feux de circulation.',
      instructions: [
        'Placez trois LED sur la platine d\'essai : rouge, jaune et verte (de haut en bas).',
        'Connectez chaque LED via une résistance de 220Ω aux broches Arduino : rouge=broche 4, jaune=broche 3, verte=broche 2.',
        'Connectez toutes les cathodes des LED au rail GND.',
        'Écrivez le code pour cycler : Vert ALLUMÉ (5s) → Jaune ALLUMÉ (2s) → Rouge ALLUMÉ (5s) → répéter.',
        'Téléversez et observez le cycle des feux de circulation.',
      ],
      expectedOutcome: 'Les trois LED cyclent dans la séquence correcte des feux de circulation avec un timing réaliste.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Platine d\'essai' },
        { emoji: '🔴', name: '1x LED rouge' },
        { emoji: '🟡', name: '1x LED jaune' },
        { emoji: '🟢', name: '1x LED verte' },
        { emoji: '🔗', name: '3x résistances 220Ω' },
        { emoji: '🔌', name: 'Fils de connexion' },
      ],
      observationsToRecord: [
        'Les trois LED s\'allument-elles individuellement lors du test ?',
        'La séquence suit-elle le bon ordre des feux de circulation ?',
        'Quel temps de cycle total mesurez-vous ?',
        'Que se passe-t-il si vous ajoutez une phase de passage piéton ?',
      ],
      theoryPoints: [
        'La logique séquentielle exécute les étapes dans un ordre fixe',
        'Chaque LED a besoin de sa propre résistance de limitation de courant',
        'Les feux de circulation suivent des normes internationales pour la durée des phases',
        'Les machines à états représentent des systèmes avec des états et des transitions définis',
      ],
      realWorldConnections: [
        'Les vrais feux de circulation utilisent des contrôleurs embarqués avec des entrées de capteurs',
        'Les passages piétons ajoutent des états supplémentaires à la séquence',
        'Les systèmes de priorité des véhicules d\'urgence outrepassent les séquences normales',
      ],
      formula: 'Temps de cycle total = T_vert + T_jaune + T_rouge',
    },
    questions: {
      mcq: [
        {
          text: 'Dans la séquence d\'un feu de circulation, quelle lumière s\'allume entre le vert et le rouge ?',
          options: ['Bleu', 'Blanc', 'Jaune (ambre)', 'Aucune lumière — ils changent directement'],
          correctIndex: 2,
          explanation: 'Le feu jaune (ambre) sert d\'avertissement que le signal va passer au rouge, laissant aux conducteurs le temps de s\'arrêter en toute sécurité.',
        },
        {
          text: 'Combien de broches de sortie numérique sont nécessaires pour contrôler un feu de circulation basique à 3 couleurs ?',
          options: ['1', '2', '3', '6'],
          correctIndex: 2,
          explanation: 'Chaque LED nécessite sa propre broche numérique pour un contrôle indépendant : une pour le rouge, une pour le jaune et une pour le vert.',
        },
        {
          text: 'Quel est le but d\'appeler digitalWrite(redPin, LOW) avant d\'allumer la LED verte ?',
          options: ['Économiser la batterie', 'S\'assurer qu\'une seule lumière est allumée à la fois', 'Rendre la LED verte plus lumineuse', 'Aucun but'],
          correctIndex: 1,
          explanation: 'Éteindre la LED rouge avant d\'allumer la verte garantit qu\'une seule couleur de feu est affichée à la fois, imitant les vrais feux de circulation.',
        },
        {
          text: 'Si le vert est allumé 5 secondes, le jaune 2 secondes et le rouge 5 secondes, quel est le temps de cycle total ?',
          options: ['7 secondes', '10 secondes', '12 secondes', '15 secondes'],
          correctIndex: 2,
          explanation: 'Cycle total = 5s (vert) + 2s (jaune) + 5s (rouge) = 12 secondes pour un cycle complet.',
        },
        {
          text: 'Qu\'est-ce qu\'une « machine à états » en programmation ?',
          options: ['Une machine qui exécute des états', 'Un modèle où un système peut être dans l\'un de plusieurs états définis avec des règles de transition entre eux', 'Un type de carte Arduino', 'Un générateur de nombres aléatoires'],
          correctIndex: 1,
          explanation: 'Une machine à états est un concept de programmation où un système a des états définis (vert, jaune, rouge) et des règles spécifiques pour passer de l\'un à l\'autre.',
        },
      ],
      discussion: [
        'Comment ajouteriez-vous un bouton de passage piéton à ce feu de circulation ?',
        'Pourquoi les vrais feux de circulation ont-ils des capteurs intégrés dans la chaussée ?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Logique séquentielle', pct: 35 },
        { label: 'Sorties numériques multiples', pct: 25 },
        { label: 'Temporisation et délais', pct: 25 },
        { label: 'Machines à états', pct: 15 },
      ],
      misconceptions: [
        'Les élèves peuvent essayer d\'allumer toutes les LED en même temps au lieu de les séquencer',
        'Les élèves oublient parfois d\'éteindre la LED précédente avant d\'allumer la suivante',
      ],
      hook: 'Les feux de circulation contrôlent des millions d\'intersections dans le monde. Aujourd\'hui, vous allez construire et programmer le vôtre !',
      khanLinks: [
        { title: 'Introduction aux circuits', url: 'https://www.khanacademy.org/science/physics/circuits-topic' },
      ],
    },
    dataTable: {
      headers: ['Phase', 'Couleur LED', 'Durée (s)', 'Numéro de broche', 'Observation'],
      rows: 4,
    },
    observations: [
      'Notez la durée de chaque phase de votre feu de circulation',
      'Vérifiez que la séquence correspond au comportement réel d\'un feu de circulation',
      'Observez ce qui se passe lorsque vous changez les valeurs de temporisation',
    ],
    conclusion: 'Un contrôleur de feux de circulation démontre la logique séquentielle — exécuter des étapes dans un ordre défini avec une temporisation précise. Chaque état (vert, jaune, rouge) a une durée et une règle de transition spécifiques.',
    ai: {
      opening: 'Construisons un feu de circulation ! 🚦 Vous allez contrôler 3 LED en séquence — tout comme les signaux d\'un vrai carrefour.',
      keywords: {
        setup: 'Connectez le rouge à la broche 4, le jaune à la broche 3, le vert à la broche 2. Chaque LED a besoin de sa propre résistance de 220Ω vers GND.',
        formula: 'Temps de cycle total = temps vert + temps jaune + temps rouge. Un cycle réel typique dure 60 à 120 secondes.',
        error: 'Si les LED s\'allument dans le mauvais ordre, vérifiez bien quel fil va à quelle broche. Étiquetez vos fils !',
        question: 'Pouvez-vous ajouter un 4e état où toutes les lumières sont éteintes pendant 1 seconde entre les cycles ?',
        real: 'Les feux de circulation modernes utilisent des capteurs, des caméras et l\'IA pour optimiser la circulation en temps réel.',
        result: 'Vous devriez voir vert → jaune → rouge en boucle continue.',
        extend: 'Ajoutez un second jeu de 3 LED pour une rue transversale et coordonnez les deux directions !',
        explain: 'Nous allumons et éteignons chaque LED en séquence en utilisant digitalWrite() et delay() pour créer le motif de temporisation.',
      },
      hint: 'N\'oubliez pas d\'éteindre la LED précédente avant d\'allumer la suivante dans la séquence.',
      expected: 'Trois LED cyclant dans l\'ordre des feux de circulation : vert (5s) → jaune (2s) → rouge (5s) → répéter.',
    },
  },
  503: {
    title: 'LED contrôlée par bouton',
    desc: 'Utilisez un bouton-poussoir comme entrée numérique pour contrôler une LED. Apprenez l\'entrée numérique, les résistances de tirage et la logique conditionnelle.',
    summary: {
      whatTheyLearn: 'Les élèves apprennent à lire les entrées numériques avec digitalRead(), à comprendre les résistances de tirage vers le bas et à utiliser les instructions conditionnelles if/else.',
      instructions: [
        'Connectez un bouton-poussoir en travers du canal central de la platine d\'essai.',
        'Connectez un côté du bouton au 5V.',
        'Connectez l\'autre côté à la broche Arduino 2 et via une résistance de tirage de 10kΩ au GND.',
        'Connectez une LED avec une résistance de 220Ω de la broche 13 au GND.',
        'Écrivez le code : si digitalRead(2) == HIGH, allumer la LED ; sinon, l\'éteindre.',
      ],
      expectedOutcome: 'La LED s\'allume quand le bouton est pressé et s\'éteint quand il est relâché.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Platine d\'essai' },
        { emoji: '🔘', name: '1x bouton-poussoir' },
        { emoji: '💡', name: '1x LED rouge' },
        { emoji: '🔗', name: '1x résistance 220Ω' },
        { emoji: '🔗', name: '1x résistance de tirage 10kΩ' },
        { emoji: '🔌', name: 'Fils de connexion' },
      ],
      observationsToRecord: [
        'La LED répond-elle instantanément à l\'appui sur le bouton ?',
        'Que se passe-t-il sans la résistance de tirage vers le bas ?',
        'Pouvez-vous observer des « rebonds » (scintillements) lors de l\'appui sur le bouton ?',
        'Notez l\'état du bouton et l\'état de la LED pour 10 appuis.',
      ],
      theoryPoints: [
        'digitalRead() renvoie HIGH (1) ou LOW (0) selon la tension de la broche',
        'Une résistance de tirage vers le bas garantit que la broche lit LOW quand le bouton n\'est pas pressé',
        'Sans résistance de tirage, la broche est « flottante » et donne des lectures aléatoires',
        'Les instructions if/else permettent au code de prendre des décisions basées sur les entrées',
      ],
      realWorldConnections: [
        'Les boutons d\'ascenseur, les sonnettes et les touches de clavier utilisent tous le même principe',
        'Les boutons d\'arrêt d\'urgence industriels utilisent le même concept d\'entrée numérique',
        'Les boutons d\'écran tactile sont une évolution moderne des boutons physiques',
      ],
      formula: 'Tirage vers le bas : quand le bouton est ouvert, V_broche = 0V (LOW) ; quand pressé, V_broche = 5V (HIGH)',
    },
    questions: {
      mcq: [
        {
          text: 'Que renvoie digitalRead() quand le bouton avec résistance de tirage vers le bas n\'est pas pressé ?',
          options: ['HIGH', 'LOW', 'NULL', '0.5'],
          correctIndex: 1,
          explanation: 'Avec une résistance de tirage vers le bas, la broche est connectée au GND (0V) quand le bouton n\'est pas pressé, donc digitalRead() renvoie LOW.',
        },
        {
          text: 'Quel est le rôle de la résistance de tirage vers le bas dans un circuit de bouton ?',
          options: ['Rendre le bouton plus difficile à presser', 'Garantir que la broche lit un LOW défini quand le bouton n\'est pas pressé', 'Augmenter la luminosité de la LED', 'Protéger l\'Arduino contre les dommages'],
          correctIndex: 1,
          explanation: 'La résistance de tirage vers le bas connecte la broche au GND, garantissant une lecture LOW quand le bouton est ouvert. Sans elle, la broche flotte et donne des lectures imprévisibles.',
        },
        {
          text: 'Quelle fonction Arduino est utilisée pour lire l\'état d\'une broche numérique ?',
          options: ['analogRead()', 'digitalRead()', 'digitalWrite()', 'Serial.read()'],
          correctIndex: 1,
          explanation: 'digitalRead(pin) lit l\'état actuel d\'une broche numérique et renvoie soit HIGH soit LOW.',
        },
        {
          text: 'Que signifie une « broche flottante » ?',
          options: ['Une broche connectée à l\'eau', 'Une broche non connectée à un HIGH ou LOW défini, donnant des lectures imprévisibles', 'Une broche qui bouge physiquement', 'Une broche réglée à la tension maximale'],
          correctIndex: 1,
          explanation: 'Une broche flottante n\'a pas de tension définie — elle capte le bruit électromagnétique et donne des lectures HIGH/LOW aléatoires.',
        },
        {
          text: 'Dans le code « if (buttonState == HIGH) { ... } else { ... } », quand le bloc else s\'exécute-t-il ?',
          options: ['Quand le bouton est pressé', 'Quand le bouton n\'est pas pressé (LOW)', 'Toujours', 'Jamais'],
          correctIndex: 1,
          explanation: 'Le bloc else s\'exécute quand la condition if est fausse — dans ce cas, quand buttonState n\'est pas HIGH (c\'est-à-dire LOW).',
        },
      ],
      discussion: [
        'Qu\'est-ce que l\'« anti-rebond » d\'un bouton et pourquoi pourriez-vous en avoir besoin ?',
        'Comment feriez-vous pour que la LED bascule son état (reste allumée après un appui, s\'éteint après l\'appui suivant) ?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Entrée numérique', pct: 30 },
        { label: 'Résistances de tirage', pct: 25 },
        { label: 'Logique conditionnelle', pct: 30 },
        { label: 'Conception de circuits', pct: 15 },
      ],
      misconceptions: [
        'Les élèves oublient la résistance de tirage vers le bas et obtiennent un comportement erratique',
        'Les élèves confondent les modes de broches INPUT et OUTPUT',
      ],
      hook: 'Chaque bouton que vous pressez — des boutons d\'ascenseur aux manettes de jeu — utilise le même principe d\'entrée numérique !',
      khanLinks: [
        { title: 'Introduction aux circuits', url: 'https://www.khanacademy.org/science/physics/circuits-topic' },
      ],
    },
    dataTable: {
      headers: ['N° d\'appui', 'État du bouton', 'Valeur digitalRead()', 'État LED', 'Temps de réponse'],
      rows: 10,
    },
    observations: [
      'Notez l\'état du bouton et l\'état de la LED pour chaque appui',
      'Testez ce qui se passe sans la résistance de tirage vers le bas',
      'Observez tout scintillement ou retard de réponse',
    ],
    conclusion: 'L\'entrée numérique via digitalRead() permet à l\'Arduino de réagir aux interactions physiques. Les résistances de tirage garantissent des lectures fiables, et la logique if/else permet la prise de décision dans le code.',
    ai: {
      opening: 'C\'est l\'heure de l\'interactivité ! 🔘 Vous allez connecter un bouton pour contrôler une LED — votre premier projet entrée/sortie.',
      keywords: {
        setup: 'Le bouton entre 5V et la broche 2. Ajoutez une résistance de tirage de 10kΩ de la broche 2 au GND.',
        formula: 'Tirage vers le bas : V_broche = 0V quand ouvert, 5V quand pressé. La résistance de 10kΩ limite le courant en toute sécurité.',
        error: 'Si le comportement de la LED est aléatoire, il vous manque probablement la résistance de tirage vers le bas. La broche est « flottante ».',
        question: 'Pouvez-vous ajouter un second bouton qui contrôle une seconde LED indépendamment ?',
        real: 'Chaque touche de clavier, bouton de manette et bouton d\'ascenseur utilise exactement ce concept.',
        result: 'Appuyez sur le bouton : la LED s\'allume. Relâchez-le : la LED s\'éteint. Simple mais puissant !',
        extend: 'Ajoutez du code d\'anti-rebond ou faites basculer l\'état de la LED avec le bouton.',
      },
      hint: 'La résistance de tirage de 10kΩ est essentielle ! Sans elle, la broche flottera et donnera des lectures aléatoires.',
      expected: 'La LED s\'allume quand le bouton est pressé et s\'éteint quand il est relâché.',
    },
  },
  504: {
    title: 'Potentiomètre — Lecture de valeurs analogiques',
    desc: 'Connectez un potentiomètre à l\'entrée analogique de l\'Arduino et lisez des valeurs de tension variables de 0 à 1023.',
    summary: {
      whatTheyLearn: 'Les élèves apprennent l\'entrée analogique (0-1023), la sortie PWM (0-255), la fonction map() et les diviseurs de tension.',
      instructions: [
        'Connectez le potentiomètre : broche gauche au GND, droite au 5V, centrale (curseur) à A0.',
        'Connectez une LED avec une résistance de 220Ω de la broche 9 (PWM) au GND.',
        'Écrivez le code pour lire A0 avec analogRead(), convertir en 0-255 et écrire avec analogWrite().',
        'Ouvrez le Serial Monitor pour voir les valeurs analogiques brutes en tournant le bouton.',
        'Observez la luminosité de la LED changer en tournant le potentiomètre.',
      ],
      expectedOutcome: 'Tourner le potentiomètre contrôle progressivement la luminosité de la LED, de éteinte à pleine luminosité.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Platine d\'essai' },
        { emoji: '🎛️', name: '1x potentiomètre (10kΩ)' },
        { emoji: '💡', name: '1x LED' },
        { emoji: '🔗', name: '1x résistance 220Ω' },
        { emoji: '🔌', name: 'Fils de connexion' },
      ],
      observationsToRecord: [
        'Quelle valeur analogique lisez-vous en position minimale ?',
        'Quelle valeur analogique lisez-vous en position maximale ?',
        'À quelle valeur analogique la LED semble-t-elle à mi-luminosité ?',
        'Le changement de luminosité est-il linéaire ou non linéaire ?',
      ],
      theoryPoints: [
        'analogRead() convertit la tension (0-5V) en valeur numérique (0-1023) via un convertisseur ADC 10 bits',
        'analogWrite() utilise le PWM (0-255) pour simuler une sortie analogique',
        'map(value, fromLow, fromHigh, toLow, toHigh) convertit une plage de valeurs en une autre',
        'Un potentiomètre est un diviseur de tension variable',
      ],
      realWorldConnections: [
        'Les boutons de volume sur les haut-parleurs et amplificateurs',
        'Les variateurs d\'éclairage pour les pièces',
        'Les joysticks dans les manettes de jeu et les robots',
      ],
      formula: 'V_out = V_in × (R2 / (R1 + R2)) ; Lecture analogique = V_broche × 1023 / 5V',
    },
    questions: {
      mcq: [
        {
          text: 'Quelle est la plage de valeurs renvoyées par analogRead() ?',
          options: ['0 à 100', '0 à 255', '0 à 1023', '0 à 5000'],
          correctIndex: 2,
          explanation: 'Le convertisseur ADC de l\'Arduino est en 10 bits : 2¹⁰ = 1024 valeurs, de 0 à 1023.',
        },
        {
          text: 'Que fait la fonction map() ?',
          options: ['Affiche une carte géographique', 'Convertit une valeur d\'une plage à une autre', 'Associe une broche à une tension spécifique', 'Crée un tableau'],
          correctIndex: 1,
          explanation: 'map(value, fromLow, fromHigh, toLow, toHigh) recalibre un nombre d\'une plage à une autre. Exemple : map(512, 0, 1023, 0, 255) renvoie ~127.',
        },
        {
          text: 'À quoi sert le PWM avec analogWrite() ?',
          options: ['Lire des capteurs analogiques', 'Simuler une sortie analogique en alternant rapidement entre les états numérique marche et arrêt', 'Programmer sans erreurs', 'Se connecter au Wi-Fi'],
          correctIndex: 1,
          explanation: 'Le PWM (modulation de largeur d\'impulsion) alterne rapidement la broche entre HIGH et LOW. Le rapport cyclique détermine la tension moyenne, simulant une sortie analogique.',
        },
        {
          text: 'Qu\'est-ce qu\'un potentiomètre ?',
          options: ['Un type de LED', 'Une résistance variable qui fonctionne comme un diviseur de tension', 'Un capteur de température', 'Un type de moteur'],
          correctIndex: 1,
          explanation: 'Un potentiomètre est une résistance variable à trois bornes. Tourner le bouton modifie le rapport de résistance, ce qui modifie la tension de sortie.',
        },
        {
          text: 'Pourquoi analogWrite() ne peut-elle être utilisée que sur certaines broches Arduino (marquées ~) ?',
          options: ['Les autres broches sont désactivées', 'Seules ces broches prennent en charge le PWM matériel', 'Ces broches ont une tension plus élevée', 'Cela fonctionne sur toutes les broches'],
          correctIndex: 1,
          explanation: 'Seules les broches avec support PWM matériel (marquées ~ sur la carte : 3, 5, 6, 9, 10, 11 sur l\'Uno) peuvent utiliser analogWrite().',
        },
      ],
      discussion: [
        'Quelle est la différence entre les signaux numériques et analogiques ?',
        'Comment pourriez-vous utiliser deux potentiomètres pour contrôler une LED RGB multicolore ?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Entrée analogique (ADC)', pct: 30 },
        { label: 'Sortie PWM', pct: 25 },
        { label: 'Fonction map()', pct: 20 },
        { label: 'Diviseurs de tension', pct: 25 },
      ],
      misconceptions: [
        'Les élèves confondent la plage d\'analogRead (0-1023) avec celle d\'analogWrite (0-255)',
        'Les élèves pensent que les broches analogiques ne peuvent être que des entrées (elles peuvent aussi être des E/S numériques)',
      ],
      hook: 'Les boutons de volume, les variateurs et les joysticks utilisent tous des potentiomètres. Aujourd\'hui, vous allez contrôler une LED avec un !',
      khanLinks: [
        { title: 'Diviseurs de tension', url: 'https://www.khanacademy.org/science/physics/circuits-topic' },
      ],
    },
    dataTable: {
      headers: ['Position du potentiomètre (%)', 'Lecture analogique', 'PWM converti (0-255)', 'Luminosité LED', 'Tension calculée'],
      rows: 6,
    },
    observations: [
      'Notez les lectures analogiques à différentes positions du potentiomètre',
      'Calculez la tension à partir de la lecture analogique',
      'Comparez la luminosité perçue à la valeur PWM (linéaire ?)',
    ],
    conclusion: 'L\'entrée analogique (ADC) convertit les tensions continues en valeurs numériques. Le PWM simule la sortie analogique. La fonction map() fait le lien entre les différentes plages de valeurs.',
    ai: {
      opening: 'Passons à l\'analogique ! 🎛️ Vous allez utiliser un potentiomètre pour contrôler progressivement la luminosité d\'une LED — votre premier projet analogique.',
      keywords: {
        setup: 'Potentiomètre : gauche=GND, droite=5V, centre=A0. LED sur la broche 9 (PWM) avec résistance de 220Ω.',
        formula: 'ADC : 10 bits = 0-1023. PWM : 8 bits = 0-255. Utilisez map() pour convertir entre les deux.',
        error: 'Si la luminosité saute au lieu de changer progressivement, vérifiez que vous utilisez bien une broche PWM (~) pour la LED.',
        question: 'Que se passe-t-il si vous utilisez map(val, 0, 1023, 255, 0) à la place ? Essayez !',
        real: 'Les boutons de volume, les variateurs d\'éclairage et les joysticks de jeux vidéo utilisent tous des potentiomètres.',
        result: 'Tourner le potentiomètre devrait changer progressivement la luminosité de la LED de éteinte à pleine luminosité.',
      },
      hint: 'Assurez-vous d\'utiliser une broche compatible PWM (marquée ~) pour analogWrite().',
      expected: 'La luminosité de la LED change progressivement en tournant le bouton du potentiomètre.',
    },
  },
  505: {
    title: 'Capteur de température — Mesurer la chaleur',
    desc: 'Utilisez le capteur de température TMP36 pour mesurer la température ambiante et afficher les lectures sur le Serial Monitor.',
    summary: {
      whatTheyLearn: 'Les élèves apprennent à lire des capteurs analogiques, à convertir une tension en température, à utiliser le Serial Monitor pour l\'enregistrement de données et à comprendre l\'étalonnage des capteurs.',
      instructions: [
        'Identifiez les broches du TMP36 (face plate vers vous) : gauche=5V, centre=signal vers A1, droite=GND.',
        'Connectez le TMP36 à la platine d\'essai avec la bonne orientation des broches.',
        'Écrivez le code pour lire A1, convertir en tension, puis en température en degrés Celsius.',
        'Ouvrez le Serial Monitor à 9600 baud pour voir les lectures de température.',
        'Testez en touchant le capteur pour le réchauffer et en soufflant dessus pour le refroidir.',
      ],
      expectedOutcome: 'Le Serial Monitor affiche la température ambiante (~20-25°C). Toucher le capteur augmente la lecture ; souffler dessus la refroidit.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Platine d\'essai' },
        { emoji: '🌡️', name: '1x capteur de température TMP36' },
        { emoji: '🔌', name: 'Fils de connexion' },
      ],
      observationsToRecord: [
        'Quelle est la lecture de température ambiante ?',
        'De combien la lecture change-t-elle quand vous touchez le capteur ?',
        'En combien de temps revient-elle à la température ambiante ?',
        'Comparez avec un thermomètre — quelle est la précision du TMP36 ?',
      ],
      theoryPoints: [
        'Le TMP36 produit une tension proportionnelle à la température (10mV/°C avec un décalage de 500mV)',
        'L\'ADC convertit la tension du capteur en valeur numérique (0-1023)',
        'Température (°C) = (tension - 0,5) × 100',
        'Serial.begin(9600) initialise la communication série à 9600 bauds',
      ],
      realWorldConnections: [
        'Les thermostats domestiques utilisent des capteurs de température pour contrôler le chauffage/la climatisation',
        'Les stations météo collectent des données de température pour les prévisions',
        'Les salles de serveurs surveillent la température pour éviter la surchauffe',
      ],
      formula: 'Température (°C) = (tension - 0,5) × 100 ; tension = analogRead(A1) × 5,0 / 1024,0',
    },
    questions: {
      mcq: [
        {
          text: 'Que produit le capteur TMP36 ?',
          options: ['Un signal numérique HIGH/LOW', 'Une tension proportionnelle à la température', 'Une résistance qui varie avec la température', 'Un signal de fréquence'],
          correctIndex: 1,
          explanation: 'Le TMP36 produit une tension analogique qui augmente linéairement avec la température : 10mV par degré Celsius, avec un décalage de 500mV à 0°C.',
        },
        {
          text: 'Si le TMP36 produit une tension de 0,75V, quelle est la température ?',
          options: ['7,5°C', '15°C', '25°C', '75°C'],
          correctIndex: 2,
          explanation: 'T = (0,75 - 0,5) × 100 = 0,25 × 100 = 25°C. Soustrayez le décalage de 500mV, puis multipliez par 100.',
        },
        {
          text: 'Que fait Serial.begin(9600) ?',
          options: ['Met la broche 9600 à HIGH', 'Initialise la communication série à 9600 bits par seconde', 'Crée 9600 variables', 'Attend 9600 millisecondes'],
          correctIndex: 1,
          explanation: 'Serial.begin(9600) démarre la communication série entre l\'Arduino et l\'ordinateur à 9600 bauds (bits par seconde), activant le Serial Monitor.',
        },
        {
          text: 'Pourquoi multiplions-nous la valeur d\'analogRead par 5,0/1024,0 ?',
          options: ['Pour convertir la lecture numérique en tension', 'Pour agrandir le nombre', 'Pour convertir des Celsius en Fahrenheit', 'Pour étalonner le capteur'],
          correctIndex: 0,
          explanation: 'L\'ADC convertit 0-5V en 0-1023. Multiplier par 5,0/1024,0 reconvertit la lecture numérique en tension réelle sur la broche.',
        },
        {
          text: 'Quelle est la résolution du TMP36 lu avec l\'ADC 10 bits de l\'Arduino ?',
          options: ['1°C', '0,5°C', 'Environ 0,49°C', '0,01°C'],
          correctIndex: 2,
          explanation: 'Chaque pas ADC = 5V/1024 = 4,88mV. Comme le TMP36 produit 10mV/°C, la résolution = 4,88mV / 10mV/°C ≈ 0,49°C.',
        },
      ],
      discussion: [
        'Comment construiriez-vous une alarme de température qui sonne au-dessus de 30°C ?',
        'Quels facteurs pourraient causer des lectures de température imprécises ?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Capteurs analogiques', pct: 30 },
        { label: 'Conversion tension-température', pct: 25 },
        { label: 'Serial Monitor', pct: 25 },
        { label: 'Enregistrement de données', pct: 20 },
      ],
      misconceptions: [
        'Les élèves peuvent connecter le TMP36 à l\'envers, ce qui peut l\'endommager',
        'Les élèves confondent la lecture ADC (0-1023) avec la tension (0-5V)',
      ],
      hook: 'Votre téléphone, votre voiture et même votre réfrigérateur contiennent tous des capteurs de température. Aujourd\'hui, vous allez construire votre propre thermomètre numérique !',
      khanLinks: [
        { title: 'Chaleur et énergie thermique', url: 'https://www.khanacademy.org/science/physics/thermodynamics' },
      ],
    },
    dataTable: {
      headers: ['Heure', 'Lecture ADC brute', 'Tension (V)', 'Température (°C)', 'Condition'],
      rows: 10,
    },
    observations: [
      'Notez les lectures de température sur 10 minutes',
      'Observez la rapidité de réponse du capteur aux changements de température',
      'Comparez les lectures avec un thermomètre de référence',
    ],
    conclusion: 'Les capteurs analogiques convertissent les grandeurs physiques en tensions. Le convertisseur ADC de l\'Arduino transforme la tension en valeurs numériques. Les formules mathématiques traduisent les lectures en unités significatives.',
    ai: {
      opening: 'Mesurons la température ! 🌡️ Vous allez construire un thermomètre numérique avec le capteur TMP36 et apprendre la conversion analogique-numérique.',
      keywords: {
        setup: 'TMP36 face plate vers vous : gauche=5V, centre=A1, droite=GND. Vérifiez bien l\'orientation !',
        formula: 'voltage = analogRead(A1) * 5.0 / 1024.0; tempC = (voltage - 0.5) * 100;',
        error: 'Si vous obtenez des lectures très aberrantes (comme -40°C), le TMP36 est peut-être connecté à l\'envers. Débranchez-le et vérifiez !',
        question: 'Essayez d\'enregistrer des données toutes les 2 secondes pendant 5 minutes. Pouvez-vous détecter quand quelqu\'un entre dans la pièce ?',
        real: 'Les thermostats domestiques, les stations météo et les capteurs industriels utilisent tous des principes similaires.',
        result: 'Vous devriez voir la température ambiante (environ 20-25°C). Touchez le capteur pour voir la lecture augmenter.',
      },
      hint: 'Important : ordre des broches du TMP36 (face plate vers vous) : 5V | Signal | GND. L\'inverser peut endommager le capteur !',
      expected: 'Le Serial Monitor affiche des lectures de température d\'environ 20-25°C pour une pièce normale.',
    },
  },
  506: {
    title: 'Capteur de lumière — Mesurer la luminosité',
    desc: 'Construisez un circuit capteur de lumière avec une photorésistance (LDR) et créez une veilleuse automatique.',
    summary: {
      whatTheyLearn: 'Les élèves apprennent les résistances dépendantes de la lumière, les diviseurs de tension avec résistance variable, la détection de seuil et les systèmes de contrôle automatique.',
      instructions: [
        'Créez un diviseur de tension : LDR du 5V à A0, et résistance de 10kΩ de A0 au GND.',
        'Connectez une LED avec une résistance de 220Ω de la broche 9 (PWM) au GND.',
        'Lisez A0 dans le code et affichez les niveaux de lumière sur le Serial Monitor.',
        'Ajoutez la logique de seuil : si le niveau de lumière < 300, allumer la LED ; sinon, l\'éteindre.',
        'Testez en couvrant la LDR avec votre main (obscurité) et en l\'exposant à la lumière.',
      ],
      expectedOutcome: 'La LED s\'allume automatiquement dans l\'obscurité et s\'éteint en lumière vive, comme une vraie veilleuse.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Platine d\'essai' },
        { emoji: '☀️', name: '1x photorésistance (LDR)' },
        { emoji: '🔗', name: '1x résistance 10kΩ' },
        { emoji: '💡', name: '1x LED' },
        { emoji: '🔗', name: '1x résistance 220Ω' },
        { emoji: '🔌', name: 'Fils de connexion' },
      ],
      observationsToRecord: [
        'Quelle valeur analogique lisez-vous dans l\'obscurité ?',
        'Quelle valeur en lumière ambiante normale ?',
        'Quelle valeur en plein soleil ?',
        'À quelle valeur de seuil votre veilleuse fonctionne-t-elle le mieux ?',
      ],
      theoryPoints: [
        'La résistance d\'une LDR diminue quand la lumière augmente',
        'L\'équation du diviseur de tension détermine la tension sur la broche analogique',
        'La détection de seuil compare la lecture à une valeur prédéfinie',
        'Le PWM peut rendre la luminosité proportionnelle au niveau d\'obscurité',
      ],
      realWorldConnections: [
        'Les lampadaires qui s\'allument au crépuscule',
        'La luminosité automatique de l\'écran de votre téléphone',
        'Les lampes solaires de jardin',
      ],
      formula: 'V_out = 5V × R_fixe / (R_LDR + R_fixe) ; R_LDR diminue quand la lumière augmente',
    },
    questions: {
      mcq: [
        {
          text: 'Comment une LDR (photorésistance) réagit-elle à la lumière ?',
          options: ['La résistance augmente avec la lumière', 'La résistance diminue avec la lumière', 'La résistance reste constante', 'Elle génère une tension à partir de la lumière'],
          correctIndex: 1,
          explanation: 'Une LDR (résistance dépendante de la lumière) a une résistance élevée dans l\'obscurité et une résistance faible en lumière vive.',
        },
        {
          text: 'Dans un circuit diviseur de tension avec une LDR, que se passe-t-il avec la lecture analogique quand on couvre le capteur ?',
          options: ['Elle augmente vers 1023', 'Elle diminue vers 0', 'Elle reste la même', 'Elle devient négative'],
          correctIndex: 1,
          explanation: 'Dans l\'obscurité, la résistance de la LDR est très élevée. Plus de tension chute aux bornes de la LDR, laissant moins de tension sur la broche analogique, donc la lecture diminue.',
        },
        {
          text: 'Qu\'est-ce que la « détection de seuil » dans un système de capteurs ?',
          options: ['Trouver la valeur maximale du capteur', 'Comparer la lecture du capteur à une valeur prédéfinie pour déclencher une action', 'Étalonner le capteur', 'Calculer la moyenne de plusieurs lectures'],
          correctIndex: 1,
          explanation: 'La détection de seuil vérifie si la valeur du capteur est au-dessus ou en dessous d\'un point défini, déclenchant des actions différentes (comme allumer/éteindre une lumière).',
        },
        {
          text: 'Pourquoi utilisons-nous un diviseur de tension avec la LDR plutôt que de la connecter directement ?',
          options: ['Les LDR sont fragiles et ont besoin de protection', 'Le diviseur de tension convertit le changement de résistance en changement de tension mesurable', 'La connexion directe donne le même résultat', 'L\'Arduino nécessite exactement 2,5V'],
          correctIndex: 1,
          explanation: 'L\'Arduino mesure la tension, pas la résistance. Un diviseur de tension convertit le changement de résistance de la LDR en changement de tension proportionnel sur la broche analogique.',
        },
        {
          text: 'Comment rendriez-vous la luminosité de la LED proportionnelle à l\'obscurité (plus faible en lumière, plus forte dans le noir) ?',
          options: ['Utiliser une résistance plus grande', 'Utiliser map() avec analogWrite() pour ajuster le PWM en inversant le niveau de lumière', 'Connecter plus de LED', 'Utiliser un capteur différent'],
          correctIndex: 1,
          explanation: 'Convertissez la lecture de lumière inversement : map(lightLevel, 0, 1023, 255, 0) ou définissez la plage sombre. Utilisez analogWrite() sur une broche PWM pour un assombrissement progressif.',
        },
      ],
      discussion: [
        'Comment pourriez-vous étalonner le seuil pour différents environnements ?',
        'Quelles sont les limites de l\'utilisation d\'une LDR pour mesurer précisément la lumière ?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Capteurs de lumière (LDR)', pct: 25 },
        { label: 'Diviseurs de tension', pct: 25 },
        { label: 'Détection de seuil', pct: 25 },
        { label: 'Contrôle automatique', pct: 25 },
      ],
      misconceptions: [
        'Les élèves peuvent croire que la LDR génère de l\'électricité comme une cellule solaire (elle ne fait que changer de résistance)',
        'Les élèves se trompent sur le sens de variation de la lecture analogique avec le niveau de lumière',
      ],
      hook: 'Vous êtes-vous déjà demandé comment les lampadaires savent quand s\'allumer ? Vous êtes sur le point de construire le même système !',
      khanLinks: [
        { title: 'Introduction aux circuits', url: 'https://www.khanacademy.org/science/physics/circuits-topic' },
      ],
    },
    dataTable: {
      headers: ['Condition d\'éclairage', 'Lecture analogique', 'Tension calculée', 'État LED', 'Remarques'],
      rows: 6,
    },
    observations: [
      'Notez les lectures sous différentes conditions d\'éclairage',
      'Déterminez le meilleur seuil pour votre environnement',
      'Testez le comportement de la veilleuse automatique',
    ],
    conclusion: 'Les capteurs de lumière (LDR) dans un diviseur de tension convertissent les niveaux de lumière en tensions mesurables. La détection de seuil permet des systèmes de contrôle automatique comme les veilleuses.',
    ai: {
      opening: 'Construisons une veilleuse automatique ! ☀️ Vous allez apprendre comment fonctionnent les capteurs de lumière et créer un système qui réagit à l\'obscurité.',
      keywords: {
        setup: 'LDR du 5V à A0. Résistance de 10kΩ de A0 au GND. LED sur la broche 9 avec résistance de 220Ω.',
        formula: 'Diviseur de tension : V = 5V × 10k / (LDR + 10k). Dans l\'obscurité, LDR environ 100k+, tension basse.',
        error: 'Si la LED est toujours allumée ou toujours éteinte, ajustez le seuil. Affichez d\'abord les valeurs de lumière pour trouver la bonne plage.',
        question: 'Quelle valeur de seuil fonctionne le mieux dans votre salle de classe ?',
        real: 'Les lampadaires, la luminosité automatique du téléphone et les lampes solaires de jardin utilisent tous ce concept.',
        result: 'Couvrez la LDR : la LED s\'allume. Découvrez-la : la LED s\'éteint. Votre veilleuse automatique fonctionne !',
      },
      hint: 'Commencez par afficher les valeurs analogiques brutes sur le Serial Monitor pour trouver le bon seuil pour votre environnement.',
      expected: 'La LED s\'allume quand la LDR est dans l\'obscurité et s\'éteint en lumière vive.',
    },
  },
  507: {
    title: 'Capteur de distance à ultrasons',
    desc: 'Mesurez des distances en utilisant des ondes sonores avec le capteur à ultrasons. Calculez la vitesse du son à partir de vos mesures.',
    summary: {
      whatTheyLearn: 'Les élèves apprennent la physique de la mesure de distance par ultrasons, les calculs de temps de vol et la vitesse du son.',
      instructions: [
        'Connectez le capteur à ultrasons à la carte Science Carrier R3.',
        'Téléversez le programme de mesure de distance.',
        'Ouvrez le Serial Monitor pour voir les lectures de distance en temps réel.',
        'Placez des objets à des distances connues (avec une règle) et comparez avec les lectures du capteur.',
        'Enregistrez les données pour au moins 8 distances différentes.',
      ],
      expectedOutcome: 'Des mesures de distance précises (à ±2cm près) affichées sur le Serial Monitor pour des objets de 2cm à 400cm.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Nano RP2040 Connect' },
        { emoji: '📡', name: 'Science Carrier R3' },
        { emoji: '📏', name: 'Capteur de distance à ultrasons' },
        { emoji: '📏', name: 'Règle ou mètre ruban' },
        { emoji: '🔌', name: 'Câble USB-C' },
      ],
      observationsToRecord: [
        'Quelle est la précision du capteur à courte distance (< 10cm) ?',
        'Quelle est sa précision à longue distance (> 100cm) ?',
        'Quelle est la distance maximale fiable ?',
        'L\'angle de l\'objet affecte-t-il la lecture ?',
      ],
      theoryPoints: [
        'Les capteurs à ultrasons émettent des impulsions sonores (40kHz) et mesurent le temps de retour de l\'écho',
        'Vitesse du son à 20°C ≈ 343 m/s (0,0343 cm/μs)',
        'Distance = (temps × vitesse) / 2 (on divise par 2 car le son fait l\'aller-retour)',
        'pulseIn() mesure la durée d\'une impulsion sur une broche',
      ],
      realWorldConnections: [
        'Les capteurs de stationnement des voitures utilisent la mesure de distance par ultrasons',
        'Le sonar des sous-marins pour la cartographie sous-marine',
        'Les systèmes d\'évitement d\'obstacles des robots',
      ],
      formula: 'Distance (cm) = (temps_μs × 0,0343) / 2 ; vitesse du son = 343 m/s à 20°C',
    },
    questions: {
      mcq: [
        {
          text: 'Comment un capteur de distance à ultrasons mesure-t-il la distance ?',
          options: ['En utilisant un faisceau laser', 'En mesurant le temps de retour d\'une impulsion sonore', 'En détectant le rayonnement infrarouge', 'En mesurant les champs magnétiques'],
          correctIndex: 1,
          explanation: 'Les capteurs à ultrasons envoient une impulsion sonore et mesurent le temps jusqu\'au retour de l\'écho. Connaissant la vitesse du son, distance = (temps × vitesse) / 2.',
        },
        {
          text: 'Pourquoi divise-t-on le temps mesuré par 2 dans la formule de distance ?',
          options: ['Pour convertir les unités', 'Parce que le son fait l\'aller-retour vers l\'objet, on ne prend que la moitié du temps total', 'Pour tenir compte de la résistance de l\'air', 'Pour faire la moyenne de deux lectures'],
          correctIndex: 1,
          explanation: 'Le temps mesuré est celui de l\'aller-retour (vers l\'objet puis retour). On ne veut que la distance dans un sens, donc on divise par 2.',
        },
        {
          text: 'Quelle est la vitesse approximative du son dans l\'air à température ambiante ?',
          options: ['100 m/s', '343 m/s', '3000 m/s', '300 000 km/s'],
          correctIndex: 1,
          explanation: 'Le son se propage à environ 343 mètres par seconde dans l\'air à 20°C. C\'est bien plus lent que la lumière (300 000 km/s).',
        },
        {
          text: 'Quelle fonction Arduino mesure la durée d\'une impulsion sur une broche ?',
          options: ['analogRead()', 'digitalRead()', 'pulseIn()', 'millis()'],
          correctIndex: 2,
          explanation: 'pulseIn(pin, value) attend que la broche atteigne la valeur spécifiée, mesure la durée pendant laquelle elle y reste et renvoie la durée en microsecondes.',
        },
        {
          text: 'Quel facteur peut affecter la précision de la mesure de distance par ultrasons ?',
          options: ['La couleur de l\'objet', 'La température de l\'air (qui modifie la vitesse du son)', 'La luminosité de la pièce', 'La taille de la carte Arduino'],
          correctIndex: 1,
          explanation: 'La vitesse du son varie avec la température de l\'air (environ +0,6 m/s par °C). Les surfaces lisses ou inclinées peuvent aussi affecter la précision de l\'écho.',
        },
      ],
      discussion: [
        'Comment pourriez-vous utiliser ce capteur pour construire un système d\'aide au stationnement ?',
        'Pourquoi le capteur pourrait-il donner des lectures imprécises pour les surfaces lisses ou inclinées ?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Vitesse du son', pct: 25 },
        { label: 'Temps de vol', pct: 30 },
        { label: 'Détection d\'écho', pct: 25 },
        { label: 'Précision de mesure', pct: 20 },
      ],
      misconceptions: [
        'Les élèves peuvent croire que les capteurs à ultrasons utilisent la lumière ou le laser',
        'Les élèves oublient de diviser par 2 pour le temps de vol aller-retour',
      ],
      hook: 'Les capteurs de stationnement de votre voiture utilisent la même physique que vous allez explorer aujourd\'hui — mesurer la distance avec le son !',
      khanLinks: [
        { title: 'Ondes sonores', url: 'https://www.khanacademy.org/science/physics/mechanical-waves-and-sound' },
      ],
    },
    dataTable: {
      headers: ['Distance réelle (cm)', 'Lecture capteur (cm)', 'Erreur (cm)', 'Erreur %', 'Type de surface'],
      rows: 8,
    },
    observations: [
      'Comparez les lectures du capteur avec les mesures à la règle pour 8 distances différentes',
      'Calculez le pourcentage d\'erreur pour chaque mesure',
      'Testez avec différents types de surfaces (dure, molle, inclinée)',
    ],
    conclusion: 'Les capteurs à ultrasons utilisent la vitesse du son et le temps de vol pour calculer la distance. La précision dépend de la température, du type de surface et de l\'angle.',
    ai: {
      opening: 'Mesurons la distance avec le son ! 📏 Vous allez apprendre comment fonctionne le sonar — la même technologie utilisée dans les sous-marins et les capteurs de stationnement.',
      keywords: {
        setup: 'Connectez le capteur à ultrasons au Science Carrier R3. Le capteur doit être orienté vers l\'extérieur.',
        formula: 'distance = (pulseIn_time * 0.0343) / 2. Divisez par 2 pour l\'aller-retour !',
        error: 'Si les lectures sont à zéro, vérifiez les connexions du capteur. Si elles sont instables, assurez-vous que la cible est plate et perpendiculaire.',
        question: 'À quelle distance le capteur devient-il peu fiable ? Pourquoi ?',
        real: 'Les voitures, les sous-marins, les robots et même les chauves-souris utilisent le même principe d\'écholocalisation.',
        result: 'Vous devriez voir des distances précises (±2cm) pour des objets entre 2 et 400cm.',
      },
      hint: 'Assurez-vous que le capteur est orienté directement vers une surface plate pour obtenir les lectures les plus précises.',
      expected: 'Des mesures de distance en centimètres affichées sur le Serial Monitor, précises à 2cm près.',
    },
  },
  508: {
    title: 'Station de surveillance environnementale',
    desc: 'Utilisez la carte Science Kit R3 pour lire simultanément la température, l\'humidité, la pression et la lumière — construisant une station météo.',
    summary: {
      whatTheyLearn: 'Les élèves apprennent la collecte de données multi-capteurs, la surveillance environnementale, la corrélation des données et l\'application Arduino Science Journal.',
      instructions: [
        'Connectez l\'Arduino Nano RP2040 Connect au Science Carrier R3.',
        'Connectez via USB-C à votre ordinateur.',
        'Téléversez le programme de surveillance environnementale (qui lit tous les capteurs intégrés).',
        'Ouvrez le Serial Monitor ou l\'application Arduino Science Journal.',
        'Enregistrez les lectures toutes les 2 minutes pendant 20 minutes.',
      ],
      expectedOutcome: 'Un journal de données environnementales complet montrant la température, l\'humidité, la pression et les niveaux de lumière évoluant dans le temps.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Nano RP2040 Connect' },
        { emoji: '📡', name: 'Science Carrier R3 (capteurs intégrés)' },
        { emoji: '🔌', name: 'Câble USB-C' },
      ],
      observationsToRecord: [
        'Quelles sont les lectures de référence de chaque capteur ?',
        'Comment les lectures changent-elles quand vous soufflez près des capteurs ?',
        'L\'ouverture d\'une fenêtre change-t-elle la lecture de pression ?',
        'Comment les quatre mesures sont-elles corrélées entre elles ?',
      ],
      theoryPoints: [
        'La température affecte la capacité d\'humidité (l\'air chaud contient plus d\'humidité)',
        'La pression atmosphérique au niveau de la mer ≈ 1013,25 hPa',
        'La pression diminue avec l\'altitude (~12 hPa pour 100m)',
        'Les niveaux de lumière se mesurent en lux (0=obscurité, 100 000=plein soleil)',
      ],
      realWorldConnections: [
        'Les stations météo collectent exactement ces mêmes données pour les prévisions',
        'Les bâtiments intelligents surveillent la qualité de l\'air intérieur',
        'Les capteurs agricoles optimisent les conditions de croissance',
      ],
      formula: 'Formule barométrique : P = P₀ × e^(-Mgh/RT) ; Humidité relative = (vapeur réelle / vapeur max à cette température) × 100%',
    },
    questions: {
      mcq: [
        {
          text: 'Quelle est la pression atmosphérique standard au niveau de la mer ?',
          options: ['100 hPa', '500 hPa', '1013,25 hPa', '5000 hPa'],
          correctIndex: 2,
          explanation: 'La pression atmosphérique standard au niveau de la mer est de 1013,25 hectopascals (hPa), aussi connue comme une atmosphère ou 101,325 kPa.',
        },
        {
          text: 'Que se passe-t-il avec la pression atmosphérique quand on monte en altitude ?',
          options: ['Elle augmente', 'Elle diminue', 'Elle reste constante', 'Elle fluctue aléatoirement'],
          correctIndex: 1,
          explanation: 'La pression atmosphérique diminue avec l\'altitude car la quantité d\'air au-dessus qui exerce une pression vers le bas diminue. Elle baisse d\'environ 12 hPa pour 100m.',
        },
        {
          text: 'Que mesure l\'« humidité relative » ?',
          options: ['La quantité totale d\'eau dans l\'air', 'Le pourcentage d\'humidité dans l\'air par rapport au maximum qu\'il peut contenir à cette température', 'La température de la vapeur d\'eau', 'La vitesse d\'évaporation'],
          correctIndex: 1,
          explanation: 'L\'humidité relative est le rapport entre la vapeur d\'eau réelle dans l\'air et la quantité maximale qu\'il peut contenir à la température actuelle, exprimé en pourcentage.',
        },
        {
          text: 'Pourquoi est-il utile de mesurer plusieurs paramètres environnementaux simultanément ?',
          options: ['Cela rend le projet plus impressionnant', 'Les paramètres sont liés et ensemble donnent une image complète des conditions', 'Plusieurs capteurs sont moins chers qu\'un seul', 'Ce n\'est pas utile'],
          correctIndex: 1,
          explanation: 'Les paramètres environnementaux sont interconnectés. La température affecte l\'humidité, la pression indique les changements météo et la lumière influence les processus biologiques. Ensemble, ils racontent une histoire complète.',
        },
        {
          text: 'En quelle unité l\'intensité lumineuse est-elle généralement mesurée ?',
          options: ['Watt', 'Décibel', 'Lux', 'Ohm'],
          correctIndex: 2,
          explanation: 'L\'intensité lumineuse se mesure en lux. Une pièce sombre peut être à 10 lux, un bureau à 500 lux et le plein soleil à 100 000 lux.',
        },
      ],
      discussion: [
        'Comment cette station pourrait-elle aider un agriculteur à gérer ses cultures ?',
        'Quels schémas attendriez-vous sur une période de surveillance de 24 heures ?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Données multi-capteurs', pct: 25 },
        { label: 'Sciences atmosphériques', pct: 25 },
        { label: 'Enregistrement de données', pct: 25 },
        { label: 'Analyse de données', pct: 25 },
      ],
      misconceptions: [
        'Les élèves peuvent croire que tous les capteurs nécessitent des connexions externes (la carte porteuse a des capteurs intégrés)',
        'Les élèves confondent humidité absolue et humidité relative',
      ],
      hook: 'Les météorologues utilisent exactement les mêmes types de capteurs. Aujourd\'hui, vous construisez votre propre station météo !',
      khanLinks: [
        { title: 'Météo et climat', url: 'https://www.khanacademy.org/science/earth-science' },
      ],
    },
    dataTable: {
      headers: ['Heure', 'Température (°C)', 'Humidité (%)', 'Pression (hPa)', 'Lumière (lux)'],
      rows: 10,
    },
    observations: [
      'Enregistrez les lectures des quatre capteurs toutes les 2 minutes pendant 20 minutes',
      'Recherchez des corrélations entre les lectures',
      'Testez comment souffler près du capteur modifie l\'humidité et la température',
    ],
    conclusion: 'La surveillance environnementale multi-capteurs révèle comment les paramètres physiques sont liés entre eux. La température, l\'humidité, la pression et la lumière ensemble offrent une image complète des conditions environnementales.',
    ai: {
      opening: 'Construisons une station météo ! 🌤️ La carte Science Kit contient 4 capteurs environnementaux intégrés — aucune connexion supplémentaire nécessaire.',
      keywords: {
        setup: 'Connectez simplement le Nano RP2040 au Science Carrier R3 et branchez l\'USB-C. Tous les capteurs sont sur la carte !',
        formula: 'Pression standard : 1013,25 hPa. Humidité : % de l\'humidité maximale que l\'air peut contenir à la température actuelle.',
        error: 'Si les lectures semblent erronées, vérifiez que la carte porteuse est correctement montée sur le Nano.',
        question: 'Que se passe-t-il pour les quatre lectures quand vous soufflez sur les capteurs ?',
        real: 'Les stations météo professionnelles, les bâtiments intelligents et les systèmes IoT agricoles utilisent exactement ces capteurs.',
        result: 'Vous devriez voir les valeurs de température, humidité, pression et lumière se mettre à jour en temps réel.',
      },
      hint: 'Le Science Carrier R3 a tous les capteurs intégrés — pas besoin de câblage sur la platine d\'essai pour cette expérience !',
      expected: 'Quatre lectures de capteurs affichées : température (~20-25°C), humidité (30-70%), pression (~1013 hPa), lumière (variable).',
    },
  },
  509: {
    title: 'Servomoteur — Contrôle précis de l\'angle',
    desc: 'Contrôlez un servomoteur pour qu\'il tourne à des angles précis (0-180°) en utilisant un potentiomètre comme entrée.',
    summary: {
      whatTheyLearn: 'Les élèves apprennent le contrôle de servomoteur avec la bibliothèque Servo, les signaux PWM pour la position angulaire et la conversion entrée-sortie.',
      instructions: [
        'Connectez le servomoteur : fil rouge=5V, marron/noir=GND, orange/jaune signal=broche 9.',
        'Connectez le potentiomètre : gauche=GND, droite=5V, centre=A0.',
        'Incluez la bibliothèque Servo et créez un objet Servo.',
        'Lisez le potentiomètre (0-1023), convertissez en angle (0-180), écrivez au servo.',
        'Tournez le bouton du potentiomètre et regardez le servo suivre.',
      ],
      expectedOutcome: 'Le servomoteur suit la position du potentiomètre, tournant progressivement de 0° à 180°.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Platine d\'essai' },
        { emoji: '🦾', name: '1x servomoteur' },
        { emoji: '🎛️', name: '1x potentiomètre (10kΩ)' },
        { emoji: '🔌', name: 'Fils de connexion' },
      ],
      observationsToRecord: [
        'Le servo parcourt-il la plage complète de 0-180° ?',
        'Le mouvement est-il fluide ou saccadé ?',
        'Le servo maintient-il sa position quand vous arrêtez de tourner ?',
        'Que se passe-t-il aux angles extrêmes (0° et 180°) ?',
      ],
      theoryPoints: [
        'Un servo contient un moteur, des engrenages et un circuit de rétroaction de position',
        'La largeur du signal PWM détermine l\'angle : 1ms=0°, 1,5ms=90°, 2ms=180°',
        'La bibliothèque Servo gère automatiquement le timing PWM',
        'Servo.write(angle) définit la position ; Servo.attach(pin) l\'associe à une broche',
      ],
      realWorldConnections: [
        'Les bras robotiques industriels utilisent des servos de haute précision',
        'Les voitures et avions télécommandés utilisent des servos pour la direction',
        'Les stabilisateurs de caméra utilisent des servos rapides pour stabiliser la vidéo',
      ],
      formula: 'angle = map(analogRead(A0), 0, 1023, 0, 180) ; PWM : 1ms=0°, 1,5ms=90°, 2ms=180°',
    },
    questions: {
      mcq: [
        {
          text: 'Quelle est la différence principale entre un servomoteur et un moteur DC classique ?',
          options: ['Le servo est plus gros', 'Le servo peut être contrôlé à un angle précis ; le moteur DC ne fait que tourner', 'Les moteurs DC sont plus puissants', 'Il n\'y a pas de différence'],
          correctIndex: 1,
          explanation: 'Un servo peut être positionné à un angle précis (0-180°) grâce à sa rétroaction intégrée. Un moteur DC classique ne fait que tourner en continu.',
        },
        {
          text: 'Quelle bibliothèque Arduino est nécessaire pour contrôler un servo ?',
          options: ['Motor.h', 'Servo.h', 'PWM.h', 'Aucune bibliothèque nécessaire'],
          correctIndex: 1,
          explanation: 'La bibliothèque Servo (Servo.h) fournit des fonctions simples comme attach(), write() et read() pour contrôler les servomoteurs.',
        },
        {
          text: 'Que fait Servo.write(90) ?',
          options: ['Fait tourner le servo à 90 RPM', 'Déplace le servo à la position 90 degrés (milieu)', 'Règle la vitesse à 90%', 'Attend 90 millisecondes'],
          correctIndex: 1,
          explanation: 'Servo.write(90) déplace le servo à la position centrale (90° sur une plage de 0-180°).',
        },
        {
          text: 'Comment le servo connaît-il sa position actuelle ?',
          options: ['Il utilise le GPS', 'Un potentiomètre interne fournit une rétroaction de position', 'Il compte le nombre de rotations', 'Il utilise une caméra'],
          correctIndex: 1,
          explanation: 'Le servo contient un potentiomètre interne relié à l\'axe de sortie qui fournit une rétroaction de position au circuit de contrôle.',
        },
        {
          text: 'Quelle est la plage angulaire typique d\'un servo de loisir standard ?',
          options: ['0-90°', '0-180°', '0-360°', '0-720°'],
          correctIndex: 1,
          explanation: 'Un servo de loisir standard a une plage de 0-180°. Les servos à rotation continue spéciaux peuvent tourner à 360° mais perdent le contrôle précis de l\'angle.',
        },
      ],
      discussion: [
        'Comment construiriez-vous un bras robotique à deux axes avec deux servos ?',
        'Quelle est la différence entre un servo standard et un servo à rotation continue ?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Contrôle de servo', pct: 30 },
        { label: 'Signaux PWM', pct: 25 },
        { label: 'Conversion entrée-sortie', pct: 25 },
        { label: 'Liaison mécanique', pct: 20 },
      ],
      misconceptions: [
        'Les élèves peuvent croire que le servo peut tourner en continu comme les moteurs DC',
        'Les élèves confondent le fil signal du servo avec les fils d\'alimentation',
      ],
      hook: 'Les bras robotiques, les voitures télécommandées et les stabilisateurs de caméra utilisent tous des servos. Aujourd\'hui, vous en contrôlerez un avec un bouton !',
      khanLinks: [],
    },
    dataTable: {
      headers: ['Position du potentiomètre (%)', 'Lecture analogique', 'Angle converti (°)', 'Position réelle du servo', 'Remarques'],
      rows: 6,
    },
    observations: [
      'Notez les lectures du potentiomètre et les angles de servo correspondants',
      'Testez la plage complète de mouvement (0-180°)',
      'Observez toute zone morte ou vibration aux positions extrêmes',
    ],
    conclusion: 'Les servos offrent un contrôle angulaire précis via des signaux PWM. La bibliothèque Servo simplifie le contrôle et map() convertit les plages d\'entrée en angles de sortie.',
    ai: {
      opening: 'Contrôlons un servomoteur ! 🦾 Vous allez tourner un bouton de potentiomètre et le servo suivra — comme une articulation robotique.',
      keywords: {
        setup: 'Servo : rouge=5V, noir/marron=GND, signal=broche 9. Potentiomètre : gauche=GND, droite=5V, centre=A0.',
        formula: 'angle = map(analogRead(A0), 0, 1023, 0, 180). Impulsion PWM : 1ms=0°, 2ms=180°.',
        error: 'Si le servo vibre, il a peut-être besoin de plus de puissance. Essayez de l\'alimenter depuis une source 5V externe.',
        question: 'Pouvez-vous programmer le servo pour qu\'il oscille automatiquement sans le potentiomètre ?',
        real: 'Les bras robotiques, les véhicules télécommandés et les stabilisateurs de caméra utilisent tous des servos pour un positionnement précis.',
        result: 'Tournez le potentiomètre : le servo suit de 0° à 180°. La conversion devrait être fluide et réactive.',
      },
      hint: 'Assurez-vous d\'ajouter #include <Servo.h> en haut du programme et d\'appeler myServo.attach(9) dans setup().',
      expected: 'Le servo suit le potentiomètre progressivement de 0° à 180°.',
    },
  },
  510: {
    title: 'Contrôle de vitesse d\'un moteur DC',
    desc: 'Contrôlez la vitesse et la direction d\'un moteur DC en utilisant le pont en H (L293D) comme pilote de moteur.',
    summary: {
      whatTheyLearn: 'Les élèves apprennent les pilotes de moteur à pont en H, le contrôle de vitesse par PWM, l\'inversion de direction et la protection par diode de roue libre.',
      instructions: [
        'Placez le CI L293D sur la platine d\'essai (encoche vers le haut).',
        'Connectez le L293D : broche 1 (enable) à la broche Arduino 3 (PWM), broches 2 et 7 aux broches Arduino 4 et 5, broche 8 au 9V, broche 16 au 5V.',
        'Connectez le moteur DC aux broches de sortie 3 et 6 du L293D.',
        'Connectez un potentiomètre à A0 pour le contrôle de vitesse.',
        'Écrivez le code : direction via les broches 4/5, vitesse via PWM sur la broche 3.',
      ],
      expectedOutcome: 'La vitesse du moteur DC est contrôlée par le potentiomètre et la direction peut être inversée en changeant l\'état des broches.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Platine d\'essai' },
        { emoji: '🔄', name: '1x moteur DC' },
        { emoji: '📦', name: '1x CI pont en H L293D' },
        { emoji: '🎛️', name: '1x potentiomètre' },
        { emoji: '🔗', name: '1x diode 1N4007' },
        { emoji: '🔋', name: 'Connecteur de pile 9V' },
        { emoji: '🔌', name: 'Fils de connexion' },
      ],
      observationsToRecord: [
        'À quelle valeur PWM le moteur commence-t-il à tourner ?',
        'La vitesse est-elle proportionnelle au rapport cyclique PWM ?',
        'L\'inversion de direction fonctionne-t-elle correctement ?',
        'Que se passe-t-il si vous essayez d\'inverser pendant une rotation rapide ?',
      ],
      theoryPoints: [
        'Un pont en H utilise 4 interrupteurs pour contrôler la direction du moteur',
        'Le rapport cyclique PWM contrôle la tension effective et donc la vitesse',
        'Les diodes de roue libre protègent contre la force contre-électromotrice du moteur',
        'Le CI L293D contient deux ponts en H pour piloter jusqu\'à deux moteurs',
      ],
      realWorldConnections: [
        'Les voitures électriques utilisent des ponts en H pour le contrôle moteur',
        'Les robots industriels utilisent des pilotes de moteur pour un mouvement précis',
        'Les drones utilisent le contrôle de vitesse moteur pour la stabilité et la direction',
      ],
      formula: 'Vitesse ∝ rapport cyclique ; Pont en H : IN1=H,IN2=L → avant ; IN1=L,IN2=H → arrière',
    },
    questions: {
      mcq: [
        {
          text: 'À quoi sert un pont en H ?',
          options: ['Mesurer la température', 'Contrôler la direction d\'un moteur DC', 'Lire des capteurs analogiques', 'Se connecter au Wi-Fi'],
          correctIndex: 1,
          explanation: 'Un pont en H est un circuit qui permet de contrôler la direction et la vitesse d\'un moteur DC en inversant la polarité de la tension appliquée.',
        },
        {
          text: 'À quoi sert la diode de roue libre dans un circuit moteur ?',
          options: ['Faire tourner le moteur plus vite', 'Protéger le circuit contre les pics de tension quand le moteur s\'arrête', 'Mesurer la vitesse du moteur', 'Connecter plusieurs moteurs'],
          correctIndex: 1,
          explanation: 'Quand le moteur s\'arrête, il génère un pic de tension (force contre-électromotrice). La diode absorbe ce pic en toute sécurité, protégeant le pont en H et l\'Arduino.',
        },
        {
          text: 'Comment le PWM contrôle-t-il la vitesse du moteur ?',
          options: ['En changeant la tension', 'En alternant rapidement l\'alimentation entre marche et arrêt, le rapport déterminant la puissance effective', 'En ajoutant plus de résistance', 'En changeant les connexions du moteur'],
          correctIndex: 1,
          explanation: 'Le PWM alterne rapidement l\'alimentation du moteur entre marche et arrêt. Un rapport de 50% signifie que le moteur est alimenté la moitié du temps, donnant environ la moitié de la vitesse. 100% = pleine vitesse.',
        },
        {
          text: 'Sur le L293D, quelle broche contrôle la vitesse du moteur ?',
          options: ['Les broches d\'entrée (IN1, IN2)', 'La broche d\'activation (EN)', 'Les broches de sortie (OUT1, OUT2)', 'La broche de masse'],
          correctIndex: 1,
          explanation: 'La broche d\'activation (EN) contrôle si le moteur tourne. Utiliser le PWM sur cette broche contrôle la vitesse, tandis qu\'IN1/IN2 contrôlent la direction.',
        },
        {
          text: 'Pourquoi le moteur a-t-il besoin d\'une alimentation séparée (9V) de l\'Arduino (5V) ?',
          options: ['Les moteurs sont plus chers', 'Les moteurs consomment trop de courant pour que l\'Arduino le fournisse en toute sécurité', 'L\'Arduino ne fonctionne qu\'en 5V', 'Le 9V rend le moteur plus silencieux'],
          correctIndex: 1,
          explanation: 'Les moteurs DC peuvent consommer des centaines de milliampères ou plus, dépassant ce que l\'Arduino peut fournir en toute sécurité. L\'alimentation séparée protège l\'Arduino et fournit assez de puissance.',
        },
      ],
      discussion: [
        'Comment contrôleriez-vous deux moteurs indépendamment pour un robot ?',
        'Quelles précautions de sécurité sont importantes lors du travail avec des moteurs ?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Fonctionnement du pont en H', pct: 30 },
        { label: 'Contrôle de vitesse par PWM', pct: 25 },
        { label: 'Pilotes de moteur', pct: 25 },
        { label: 'Protection du circuit', pct: 20 },
      ],
      misconceptions: [
        'Les élèves peuvent essayer d\'alimenter les moteurs directement depuis les broches Arduino (risque d\'endommager la carte)',
        'Les élèves confondent les broches de contrôle de direction avec la broche de contrôle de vitesse',
      ],
      hook: 'Les voitures électriques, les robots et les drones utilisent tous des contrôleurs de moteur. Aujourd\'hui, vous en construisez un à partir de zéro !',
      khanLinks: [],
    },
    dataTable: {
      headers: ['Valeur potentiomètre', 'Rapport PWM (%)', 'Direction', 'Vitesse moteur (estimation)', 'Remarques'],
      rows: 8,
    },
    observations: [
      'Notez les valeurs PWM et les vitesses de moteur observées',
      'Trouvez la valeur PWM minimale qui fait tourner le moteur',
      'Testez l\'inversion de direction et notez tout problème',
    ],
    conclusion: 'Les ponts en H permettent le contrôle bidirectionnel des moteurs DC. Le PWM modifie la vitesse, les broches de direction contrôlent le sens de rotation et les diodes protègent le circuit.',
    ai: {
      opening: 'Faisons tourner un moteur ! 🔄 Vous allez utiliser un pont en H pour contrôler la vitesse et la direction — la base de toute la robotique.',
      keywords: {
        setup: 'L293D : activation sur la broche 3 (PWM), direction sur les broches 4 et 5, alimentation moteur depuis la pile 9V. Suivez bien le schéma de câblage !',
        formula: 'Vitesse = rapport PWM. Direction : IN1=H,IN2=L avant ; IN1=L,IN2=H arrière ; les deux LOW = arrêt.',
        error: 'Le moteur ne tourne pas ? Vérifiez : 1) pile 9V connectée, 2) la broche enable a du PWM, 3) IN1/IN2 correctement configurés.',
        question: 'Quelle est la valeur PWM minimale qui fait bouger le moteur ? Pourquoi n\'est-ce pas 0 ?',
        real: 'Les voitures électriques, les drones et les robots industriels utilisent tous des pilotes à pont en H.',
        result: 'La vitesse du moteur suit le potentiomètre. Vous pouvez inverser la direction en changeant l\'état d\'IN1/IN2.',
      },
      hint: 'Ne connectez jamais un moteur directement aux broches Arduino ! Utilisez toujours un pilote de moteur comme le L293D.',
      expected: 'La vitesse du moteur est contrôlée par le potentiomètre, avec possibilité d\'inversion de direction.',
    },
  },
  511: {
    title: 'Buzzer piézoélectrique — Faire de la musique avec du code',
    desc: 'Générez différentes tonalités musicales avec un buzzer piézoélectrique et programmez une mélodie simple.',
    summary: {
      whatTheyLearn: 'Les élèves apprennent les ondes sonores, la relation entre fréquence et hauteur de son, la fonction tone() et l\'utilisation de tableaux pour stocker des mélodies.',
      instructions: [
        'Connectez une patte du buzzer à la broche Arduino 8.',
        'Connectez l\'autre patte au GND.',
        'Utilisez tone(8, frequency, duration) pour jouer des notes individuelles.',
        'Créez des tableaux pour les notes et les durées afin de jouer une mélodie.',
        'Téléversez le programme et écoutez votre mélodie programmée !',
      ],
      expectedOutcome: 'Le buzzer joue des notes individuelles et une mélodie reconnaissable.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Platine d\'essai' },
        { emoji: '🎵', name: '1x buzzer piézoélectrique' },
        { emoji: '🔌', name: 'Fils de connexion' },
      ],
      observationsToRecord: [
        'Quelle plage de fréquences pouvez-vous entendre ?',
        'Quelles fréquences semblent aiguës par rapport aux graves ?',
        'Pouvez-vous reconnaître les notes musicales à l\'oreille ?',
        'Comment la durée affecte-t-elle le rythme perçu ?',
      ],
      theoryPoints: [
        'Le son est produit par des vibrations à des fréquences spécifiques',
        'Fréquence plus élevée = son plus aigu. A4 = 440 Hz est la référence d\'accordage standard',
        'tone(pin, frequency, duration) génère une onde carrée à la fréquence spécifiée',
        'Les notes musicales correspondent à des fréquences spécifiques : C4=262Hz, D4=294Hz, E4=330Hz, etc.',
      ],
      realWorldConnections: [
        'Les instruments de musique produisent des fréquences spécifiques pour chaque note',
        'Les systèmes d\'alarme utilisent différentes tonalités pour différentes alertes',
        'Les cartes de vœux électroniques utilisent une technologie de buzzer similaire',
      ],
      formula: 'Notes musicales : C4=262Hz, D4=294Hz, E4=330Hz, F4=349Hz, G4=392Hz, A4=440Hz, B4=494Hz, C5=523Hz',
    },
    questions: {
      mcq: [
        {
          text: 'Qu\'est-ce qui détermine la hauteur d\'un son ?',
          options: ['Le volume', 'La durée', 'La fréquence', 'La couleur'],
          correctIndex: 2,
          explanation: 'La hauteur d\'un son est déterminée par la fréquence. Fréquence plus élevée = son plus aigu. Par exemple A4 = 440 Hz, et A5 = 880 Hz (une octave plus haut = double de la fréquence).',
        },
        {
          text: 'Quelle est la fréquence d\'accordage standard de la note A4 ?',
          options: ['220 Hz', '440 Hz', '880 Hz', '1000 Hz'],
          correctIndex: 1,
          explanation: '440 Hz est la norme internationale acceptée pour le A4 (le la au-dessus du do central). C\'est utilisé comme référence pour accorder les instruments de musique.',
        },
        {
          text: 'Que fait la fonction Arduino tone(8, 440, 500) ?',
          options: ['Lit la broche 8 pendant 440ms', 'Joue une tonalité de 440Hz sur la broche 8 pendant 500 millisecondes', 'Met la broche 8 à 440 volts', 'Attend 500 secondes'],
          correctIndex: 1,
          explanation: 'tone(pin, frequency, duration) joue une onde carrée à la fréquence spécifiée sur la broche spécifiée pendant la durée spécifiée en millisecondes.',
        },
        {
          text: 'Quelle est la relation entre une octave et la fréquence ?',
          options: ['Même fréquence', 'Double de la fréquence', 'Triple de la fréquence', 'Moitié de la fréquence'],
          correctIndex: 1,
          explanation: 'Monter d\'une octave double la fréquence. A4=440Hz, A5=880Hz. Descendre d\'une octave la divise par deux : A3=220Hz.',
        },
        {
          text: 'Quelle structure de données est utile pour stocker une séquence de notes musicales dans le code ?',
          options: ['Une seule variable', 'Un tableau', 'Une résistance', 'Un compteur de boucle'],
          correctIndex: 1,
          explanation: 'Les tableaux stockent des séquences de valeurs. Une mélodie nécessite un tableau de fréquences de notes et un tableau de durées de notes.',
        },
      ],
      discussion: [
        'Pourquoi l\'onde carrée du buzzer sonne-t-elle différemment de la même note sur un piano ?',
        'Comment ajouteriez-vous un bouton pour jouer différentes mélodies ?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Son et fréquence', pct: 30 },
        { label: 'Fonction tone()', pct: 25 },
        { label: 'Tableaux et séquences', pct: 25 },
        { label: 'Théorie musicale', pct: 20 },
      ],
      misconceptions: [
        'Les élèves confondent le volume (amplitude) avec la hauteur (fréquence)',
        'Les élèves peuvent ne pas réaliser que noTone() est nécessaire pour arrêter une tonalité continue',
      ],
      hook: 'La musique, c\'est des mathématiques ! Chaque note est une fréquence spécifique. Aujourd\'hui, vous allez programmer Arduino pour jouer une mélodie !',
      khanLinks: [
        { title: 'Ondes sonores', url: 'https://www.khanacademy.org/science/physics/mechanical-waves-and-sound' },
      ],
    },
    dataTable: {
      headers: ['Nom de la note', 'Fréquence (Hz)', 'Durée (ms)', 'Hauteur perçue', 'Remarques'],
      rows: 8,
    },
    observations: [
      'Notez les fréquences de différentes notes et comment elles sonnent',
      'Programmez et jouez une mélodie simple',
      'Essayez différents rythmes en modifiant les durées',
    ],
    conclusion: 'Le son est produit par des vibrations à des fréquences spécifiques. La fonction tone() génère ces fréquences et les tableaux organisent les notes en mélodies.',
    ai: {
      opening: 'Faisons de la musique avec du code ! 🎵 Vous allez programmer Arduino pour jouer des mélodies avec un buzzer piézoélectrique.',
      keywords: {
        setup: 'Connectez le buzzer entre la broche 8 et GND. C\'est tout — le câblage le plus simple jusqu\'ici !',
        formula: 'Fréquences des notes : C=262, D=294, E=330, F=349, G=392, A=440, B=494, C5=523 Hz.',
        error: 'Pas de son ? Vérifiez la polarité du buzzer (certains ont des pattes + et −). Essayez une broche différente.',
        question: 'Pouvez-vous programmer votre chanson préférée ? Recherchez les fréquences des notes !',
        real: 'Les sonnettes, les réveils et les jouets électroniques utilisent tous des buzzers piézoélectriques.',
        result: 'Vous devriez entendre des tonalités musicales claires. Différentes fréquences = différentes notes !',
      },
      hint: 'Utilisez noTone(pin) entre les notes pour créer une séparation nette. Sans cela, les notes se mélangent.',
      expected: 'Des tonalités musicales claires provenant du buzzer, aboutissant finalement à une mélodie reconnaissable.',
    },
  },
  512: {
    title: 'Veilleuse intelligente — Combiner capteurs et actionneurs',
    desc: 'Construisez une veilleuse automatique qui s\'allume dans l\'obscurité, ajuste sa luminosité en fonction de la lumière ambiante et joue une tonalité lors de l\'activation.',
    summary: {
      whatTheyLearn: 'Les élèves intègrent tout ce qu\'ils ont appris — capteurs, actionneurs, entrées/sorties analogiques et numériques — dans un système interactif complet.',
      instructions: [
        'Construisez un diviseur de tension LDR (A0) et un potentiomètre pour le contrôle de sensibilité (A1).',
        'Connectez une LED RGB aux broches 9, 10 et 11 (PWM) avec des résistances de 220Ω.',
        'Connectez le buzzer piézoélectrique à la broche 8.',
        'Écrivez le code : lisez la LDR, comparez au seuil (défini par le potentiomètre), contrôlez la luminosité et la couleur de la LED, jouez la tonalité d\'activation.',
        'Testez dans différentes conditions d\'éclairage.',
      ],
      expectedOutcome: 'Une veilleuse entièrement automatique : la LED s\'allume progressivement dans l\'obscurité (luminosité proportionnelle à l\'obscurité), joue une tonalité douce à l\'activation, avec une sensibilité réglable.',
    },
    experiment: {
      equipment: [
        { emoji: '🔌', name: 'Arduino Uno R3' },
        { emoji: '🍞', name: 'Platine d\'essai' },
        { emoji: '☀️', name: '1x photorésistance (LDR)' },
        { emoji: '🔗', name: '1x résistance 10kΩ' },
        { emoji: '🌈', name: '1x LED RGB' },
        { emoji: '🔗', name: '3x résistances 220Ω' },
        { emoji: '🎵', name: '1x buzzer piézoélectrique' },
        { emoji: '🎛️', name: '1x potentiomètre (sensibilité)' },
        { emoji: '🔌', name: 'Fils de connexion' },
      ],
      observationsToRecord: [
        'À quel niveau de lumière la veilleuse s\'active-t-elle ?',
        'La luminosité répond-elle proportionnellement à l\'obscurité ?',
        'La tonalité d\'activation fonctionne-t-elle correctement ?',
        'Pouvez-vous régler la sensibilité avec le potentiomètre ?',
      ],
      theoryPoints: [
        'L\'intégration système combine plusieurs entrées et sorties',
        'Le seuil avec hystérésis empêche le basculement rapide entre allumé et éteint',
        'La luminosité PWM permet un assombrissement progressif proportionnel à l\'obscurité',
        'Les paramètres réglables par l\'utilisateur (via le potentiomètre) rendent le système adaptable',
      ],
      realWorldConnections: [
        'Les veilleuses commerciales utilisent le même principe capteur-actionneur',
        'Les appareils de maison intelligente intègrent plusieurs capteurs pour l\'automatisation',
        'Les systèmes IoT combinent détection, traitement et actionnement',
      ],
      formula: 'brightness = map(lightLevel, threshold, 0, 0, 255) ; threshold = map(analogRead(A1), 0, 1023, 100, 900)',
    },
    questions: {
      mcq: [
        {
          text: 'Qu\'est-ce que l\'« intégration système » en ingénierie ?',
          options: ['N\'utiliser qu\'un seul composant', 'Combiner plusieurs composants pour qu\'ils fonctionnent ensemble comme un système cohérent', 'Rendre le système aussi complexe que possible', 'Tester chaque partie séparément'],
          correctIndex: 1,
          explanation: 'L\'intégration système signifie combiner des capteurs, des actionneurs et du code en un système cohérent où toutes les parties travaillent ensemble vers un objectif commun.',
        },
        {
          text: 'Pourquoi ajoutons-nous un potentiomètre pour régler la sensibilité de la veilleuse ?',
          options: ['Ça a l\'air plus professionnel', 'Il permet à l\'utilisateur d\'adapter le seuil à différents environnements', 'Les potentiomètres sont nécessaires pour tous les circuits', 'Il augmente la luminosité de la LED'],
          correctIndex: 1,
          explanation: 'Différentes pièces ont différents niveaux de lumière ambiante. Un seuil réglable fait fonctionner correctement la veilleuse dans n\'importe quel environnement.',
        },
        {
          text: 'Qu\'est-ce que l\'« hystérésis » et pourquoi est-elle utile pour une veilleuse ?',
          options: ['Un type de LED', 'Un écart entre les seuils d\'activation et de désactivation qui empêche le scintillement rapide', 'Un effet sonore', 'Un type de résistance'],
          correctIndex: 1,
          explanation: 'L\'hystérésis ajoute un écart entre les seuils d\'activation et de désactivation. Cela empêche la lumière de basculer rapidement entre allumée et éteinte quand les niveaux de lumière oscillent près du seuil.',
        },
        {
          text: 'Comment une LED RGB crée-t-elle différentes couleurs ?',
          options: ['En utilisant différentes tensions', 'En mélangeant la lumière rouge, verte et bleue à différentes intensités avec le PWM', 'En changeant la température de la LED', 'En utilisant des filtres de couleur'],
          correctIndex: 1,
          explanation: 'Une LED RGB contient trois LED séparées (rouge, verte, bleue) à l\'intérieur. En contrôlant la luminosité de chacune avec le PWM, vous pouvez mélanger n\'importe quelle couleur.',
        },
        {
          text: 'Quelle est la première étape la plus importante pour diagnostiquer un circuit complexe qui ne fonctionne pas ?',
          options: ['Tout recâbler à partir de zéro', 'Tester chaque composant séparément pour isoler le problème', 'Ajouter plus de composants', 'Changer la carte Arduino'],
          correctIndex: 1,
          explanation: 'Le diagnostic méthodique consiste à tester chaque composant séparément : la LDR lit-elle correctement ? La LED s\'allume-t-elle ? Le buzzer fonctionne-t-il ? Isolez le problème avant de le résoudre.',
        },
      ],
      discussion: [
        'Comment ajouteriez-vous un capteur de mouvement (PIR) pour en faire une lumière de sécurité intelligente ?',
        'Quelles fonctionnalités supplémentaires rendraient ce produit commercialisable ?',
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: 'Intégration système', pct: 30 },
        { label: 'Contrôle multi-entrées/sorties', pct: 25 },
        { label: 'Réflexion de conception', pct: 25 },
        { label: 'Stratégies de diagnostic', pct: 20 },
      ],
      misconceptions: [
        'Les élèves peuvent essayer de tout construire d\'un coup au lieu de tester les composants individuellement',
        'Les élèves oublient parfois que la LED RGB nécessite 3 résistances séparées',
      ],
      hook: 'C\'est votre projet final ! Tout ce que vous avez appris — LED, capteurs, buzzers, code — se réunit dans un appareil intelligent.',
      khanLinks: [],
    },
    dataTable: {
      headers: ['Niveau de lumière', 'Seuil (potentiomètre)', 'Luminosité LED', 'Couleur LED', 'Buzzer', 'Remarques'],
      rows: 6,
    },
    observations: [
      'Testez le système complet dans différentes conditions d\'éclairage',
      'Ajustez le potentiomètre pour le seuil d\'activation optimal',
      'Notez le comportement du système à différents niveaux de lumière',
    ],
    conclusion: 'Construire une veilleuse intelligente illustre l\'intégration système — combiner des capteurs, des actionneurs et du code en un produit fonctionnel. C\'est la base de l\'IoT et de la technologie de la maison intelligente.',
    ai: {
      opening: 'C\'est l\'heure du projet final ! 🌙 Vous allez combiner tout — capteur de lumière, LED RGB, buzzer et potentiomètre — en une veilleuse intelligente.',
      keywords: {
        setup: 'LDR sur A0, potentiomètre sur A1, LED RGB sur les broches 9/10/11, buzzer sur la broche 8. Le circuit le plus complexe jusqu\'ici !',
        formula: 'brightness = map(light, threshold, 0, 0, 255). Le seuil est réglable via le potentiomètre sur A1.',
        error: 'Construisez et testez un composant à la fois. Obtenez d\'abord la lecture de la LDR, puis ajoutez la LED, puis le buzzer.',
        question: 'Pouvez-vous faire changer la couleur de la LED selon le degré d\'obscurité ? Bleu au crépuscule, blanc chaud la nuit ?',
        real: 'Les éclairages intelligents commerciaux, la domotique et les appareils IoT utilisent la même approche multi-capteurs.',
        result: 'Une veilleuse entièrement automatique : s\'active dans l\'obscurité, luminosité proportionnelle à l\'obscurité, joue une tonalité, sensibilité réglable.',
      },
      hint: 'Construisez progressivement ! Testez d\'abord la LDR seule, puis ajoutez la LED, puis le buzzer, puis combinez le tout.',
      expected: 'Une veilleuse automatique qui réagit à l\'obscurité avec une sensibilité réglable, une couleur RGB et une tonalité d\'activation.',
    },
  },
}

export const roboticsExperimentsFr: Experiment[] = roboticsExperiments.map(exp => {
  const t = frTranslations[exp.num]
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

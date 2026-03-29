#!/usr/bin/env python3
"""Patch Italian chemistry file: experiments 133, 138, 143, 148."""
import re, os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DST = os.path.join(BASE, "data", "chemistry.it.ts")

IT_133 = '''  {
    num: 133,
    title: "Cella Galvanica Zinco-Rame",
    section: "Elettrochimica",
    desc: "Gli studenti costruiscono una cella voltaica zinco-rame usando un ponte salino e misurano la tensione della cella, osservando la dissoluzione dell'anodo e la deposizione al catodo.",
    setupTime: "8 min",
    duration: "25 min",
    summary: {
      whatTheyLearn: "Gli studenti imparano come le reazioni redox spontanee generano energia elettrica in una cella galvanica e comprendono i ruoli di anodo, catodo e ponte salino.",
      instructions: [
        "Mettere un elettrodo di zinco in 50 mL di soluzione ZnSO₄ 1 mol/L e un elettrodo di rame in 50 mL di soluzione CuSO₄ 1 mol/L.",
        "Collegare le due soluzioni con un ponte salino (carta da filtro immersa in KNO₃).",
        "Collegare gli elettrodi a un voltmetro e misurare la tensione della cella.",
        "Osservare gli elettrodi per 10 minuti; annotare eventuali cambiamenti di colore o depositi.",
        "Calcolare il potenziale teorico della cella usando i potenziali standard degli elettrodi.",
      ],
      expectedOutcome: "Si misura una tensione della cella di circa 1,1 V. L'anodo di zinco si dissolve gradualmente (perde massa) e il rame si deposita sul catodo di rame (guadagna massa), confermando la redox spontanea.",
    },
    experiment: {
      equipment: [
        { emoji: "🔋", name: "Elettrodi di zinco e rame (strisce)" },
        { emoji: "⚡", name: "Voltmetro (digitale, 0–2 V)" },
        { emoji: "🧪", name: "Soluzioni ZnSO₄ 1 mol/L e CuSO₄ 1 mol/L" },
        { emoji: "💧", name: "Ponte salino: carta da filtro immersa in KNO₃ saturo" },
        { emoji: "⚖️", name: "Bilancia per pesare gli elettrodi prima e dopo" },
      ],
      observationsToRecord: [
        "Tensione della cella misurata (V)",
        "Cambiamento dell'aspetto dell'anodo di zinco (dissoluzione)",
        "Cambiamento dell'aspetto del catodo di rame (deposizione)",
        "Variazione di massa di ciascun elettrodo dopo 10 min di funzionamento",
      ],
      theoryPoints: [
        "Anodo (Zn, −): Zn → Zn²⁺ + 2e⁻ (ossidazione, spontanea).",
        "Catodo (Cu, +): Cu²⁺ + 2e⁻ → Cu (riduzione, spontanea).",
        "Potenziale della cella: E°cella = E°catodo − E°anodo = +0,34 − (−0,76) = +1,10 V.",
        "Il ponte salino mantiene la neutralità della carica consentendo il flusso di ioni tra le semicelle senza mescolare le soluzioni.",
      ],
      realWorldConnections: [
        "La cella di Daniell (cella galvanica zinco-rame) fu la prima batteria pratica, inventata nel 1836 da John Frederic Daniell per i primi sistemi telegrafici.",
        "Le batterie moderne (AA, batterie auto) si basano sullo stesso principio della cella galvanica con diversi materiali per gli elettrodi.",
        "La corrosione dei tetti di zinco a contatto con tubi di rame è una cella galvanica indesiderata — lo zinco agisce come anodo sacrificale.",
      ],
      formula: "Anodo: Zn → Zn²⁺ + 2e⁻  |  Catodo: Cu²⁺ + 2e⁻ → Cu  |  E°cella = E°catodo − E°anodo = +1,10 V",
    },
    questions: {
      mcq: [
        {
          text: "Qual è la funzione del ponte salino nella cella galvanica?",
          options: [
            "Trasportare elettroni dall'anodo al catodo",
            "Consentire il flusso di ioni tra le semicelle per mantenere la neutralità della carica senza mescolare le soluzioni",
            "Aumentare la tensione della cella",
            "Impedire allo zinco di dissolversi",
          ],
          correctIndex: 1,
          explanation: "Senza il ponte salino, si accumulerebbe uno squilibrio di carica (eccesso di carica positiva in ZnSO₄ mentre si forma Zn²⁺; eccesso di carica negativa in CuSO₄ mentre viene rimosso Cu²⁺), bloccando la cella. Il ponte salino consente agli ioni di fluire e neutralizzare questo squilibrio.",
        },
        {
          text: "Quale elettrodo guadagna massa durante il funzionamento della cella galvanica Zn-Cu?",
          options: ["L'anodo di zinco", "Il catodo di rame", "Entrambi gli elettrodi in egual misura", "Nessun elettrodo cambia massa"],
          correctIndex: 1,
          explanation: "Gli ioni Cu²⁺ in soluzione vengono ridotti e depositati come rame solido sul catodo: Cu²⁺ + 2e⁻ → Cu. Il catodo guadagna massa man mano che il rame si deposita su di esso.",
        },
        {
          text: "Il potenziale standard della cella Zn-Cu è approssimativamente:",
          options: ["0,34 V", "0,76 V", "1,10 V", "−1,10 V"],
          correctIndex: 2,
          explanation: "E°cella = E°catodo − E°anodo = (+0,34) − (−0,76) = +1,10 V. Un valore positivo conferma che la reazione è spontanea.",
        },
      ],
      discussion: [
        "Spiega perché un E°cella positivo indica che la reazione della cella è spontanea.",
        "Cosa succederebbe alla tensione della cella se sostituissi la soluzione ZnSO₄ con MgSO₄ e usassi un anodo di magnesio?",
        "Progetta un esperimento per determinare come la tensione della cella cambia man mano che la concentrazione di Cu²⁺ diminuisce nel tempo.",
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: "Funzionamento della cella galvanica (anodo/catodo)", pct: 35 },
        { label: "Potenziali standard degli elettrodi ed E°cella", pct: 30 },
        { label: "Funzione del ponte salino", pct: 20 },
        { label: "Applicazioni storiche e moderne delle batterie", pct: 15 },
      ],
      misconceptions: [
        "Gli studenti dicono spesso che gli elettroni fluiscono dal terminale positivo a quello negativo — in una cella galvanica, gli elettroni fluiscono dall'anodo negativo al catodo positivo attraverso il circuito esterno.",
        "Molti pensano che il ponte salino trasporti elettroni — trasporta solo ioni. Gli elettroni viaggiano attraverso il filo esterno.",
      ],
      hook: "La prima batteria del mondo — la pila voltaica (1800) — era fatta di dischi di zinco e rame sovrapposti separati da panno imbevuto di salamoia. Alessandro Volta la inventò e il volt è nominato in suo onore. Stai costruendo la stessa cella di base oggi!",
      khanLinks: [
        { title: "Celle Galvaniche", url: "https://www.khanacademy.org/science/chemistry/oxidation-reduction/galvanic-cells/v/galvanic-cells" },
        { title: "Potenziale Standard della Cella", url: "https://www.khanacademy.org/science/chemistry/oxidation-reduction/standard-electrode-potential/v/standard-cell-potential" },
      ],
    },
    dataTable: {
      headers: ["Tempo (min)", "Tensione cella (V)", "Aspetto elettrodo Zn", "Aspetto elettrodo Cu", "Note"],
      rows: 5,
    },
    observations: [
      "Registrare la tensione della cella immediatamente dopo la connessione e ogni 2 minuti",
      "Descrivere i cambiamenti nelle superfici degli elettrodi di zinco e rame",
      "Pesare entrambi gli elettrodi prima e dopo per calcolare la variazione di massa",
    ],
    conclusion: "Scrivere le semi-equazioni e la reazione complessiva della cella. Calcolare E°cella e confrontare con il valore misurato. Spiegare i ruoli di anodo, catodo e ponte salino nel mantenimento del flusso di corrente.",
    ai: {
      opening: "Ciao! Sono Gali, il tuo assistente di laboratorio. Stai per costruire una batteria da zero — lo stesso design della prima batteria pratica mai realizzata, che alimentava le reti telegrafiche del 1800!",
      keywords: {
        setup: "Pulire gli elettrodi con carta vetrata prima dell'uso. Usare soluzioni fresche di CuSO₄ e ZnSO₄ di uguale concentrazione. Rinnovare il ponte salino per ogni prova — un ponte asciutto blocca il flusso di ioni.",
        formula: "Anodo: Zn → Zn²⁺ + 2e⁻ (ossidazione). Catodo: Cu²⁺ + 2e⁻ → Cu (riduzione). E°cella = 0,34 − (−0,76) = +1,10 V.",
        error: "Errori comuni: il ponte salino si secca durante l'esperimento (la tensione scende a zero), gli elettrodi si toccano (cortocircuito) e la misurazione con un voltmetro AC invece di DC.",
        result: "Tensione attesa della cella: ~1,0–1,1 V (vicina al teorico 1,10 V). La superficie dell'anodo di zinco diventa irregolare/corrosa. Il rame si deposita visibilmente sul catodo. Massa: l'anodo perde, il catodo guadagna.",
        real: "Le moderne batterie alcaline AA usano zinco (anodo) e MnO₂ (catodo) — stesso principio galvanico. Le batterie per auto usano celle piombo-acido. Le batterie agli ioni di litio nei telefoni usano anodo di litio e catodo a ossido metallico.",
        explain: "Lo zinco vuole perdere elettroni più di quanto il rame voglia tenerli. Quando collegati, gli elettroni fluiscono dallo zinco al rame attraverso il filo. Gli ioni Zn²⁺ si formano in soluzione; gli ioni Cu²⁺ dalla soluzione si depositano sul rame. Il ponte salino consente agli ioni di migrare per mantenere entrambe le soluzioni elettricamente neutre.",
        hook: "Alessandro Volta inventò la batteria nel 1800. Napoleone ne sentì parlare e chiese una dimostrazione privata. L'unità di tensione — il volt — è nominata in onore di Volta. Stai facendo quello che ha impressionato Napoleone!",
        misconception: "Il ponte salino non collega le due soluzioni — consente agli ioni di passare tra di esse mantenendo le soluzioni separate. Se mescolassi le soluzioni, l'energia chimica sarebbe rilasciata come calore, non come elettricità.",
      },
      hint: "Se la tensione legge vicino allo zero, controlla che il ponte salino sia umido e faccia buon contatto con entrambe le soluzioni. Assicurati anche che la polarità del voltmetro sia corretta (terminale positivo all'elettrodo di rame).",
      expected: "Tensione della cella: 0,9–1,1 V (qualche variazione da concentrazioni non standard). Anodo di zinco: la superficie diventa granulare/irregolare (si dissolve). Catodo di rame: deposito di rame brillante visibile. La variazione di massa conferma il trasferimento.",
    },
  }'''

IT_138 = '''  {
    num: 138,
    title: "Batteria di Frutta",
    section: "Elettrochimica",
    desc: "Gli studenti creano celle galvaniche usando frutta e diverse coppie di metalli per generare tensioni misurabili e comprendere il potenziale elettrochimico.",
    setupTime: "5 min",
    duration: "20 min",
    summary: {
      whatTheyLearn: "Gli studenti imparano che qualsiasi soluzione elettrolitica combinata con due metalli diversi crea una cella galvanica e che la tensione dipende dalla differenza di reattività dei metalli usati.",
      instructions: [
        "Inserire un chiodo di zinco e una moneta di rame in un limone a circa 2 cm di distanza (senza toccarsi).",
        "Collegare i metalli a un voltmetro; registrare la tensione.",
        "Ripetere usando diverse coppie di metalli: zinco-ferro, rame-ferro, magnesio-rame.",
        "Provare con diversi frutti (limone, arancia, mela, banana) con la stessa coppia di metalli.",
        "Collegare 3–4 limoni in serie per aumentare la tensione e accendere un LED.",
      ],
      expectedOutcome: "La coppia zinco-rame nel succo di limone produce circa 0,9 V. I metalli più distanti nella serie di reattività danno tensioni più elevate. Più celle in serie sommano le tensioni.",
    },
    experiment: {
      equipment: [
        { emoji: "🍋", name: "Limoni, arance, mele, banane" },
        { emoji: "⚡", name: "Voltmetro digitale (0–2 V)" },
        { emoji: "🔩", name: "Chiodi di zinco, monete di rame, chiodi di ferro, nastro di magnesio" },
        { emoji: "💡", name: "LED (bassa tensione, soglia 1,5–2 V)" },
        { emoji: "📏", name: "Fili di connessione con clip a coccodrillo" },
      ],
      observationsToRecord: [
        "Tensione prodotta da ogni coppia di metalli nel succo di limone",
        "Tensione prodotta dalla coppia zinco-rame in diversi frutti",
        "Tensione di 3–4 limoni in serie (additiva?)",
        "Se il LED si accende con i limoni collegati",
      ],
      theoryPoints: [
        "Il metallo più reattivo agisce come anodo (si ossida, perde elettroni); il metallo meno reattivo è il catodo.",
        "Tensione della cella ∝ differenza nei potenziali standard degli elettrodi dei due metalli.",
        "L'acido citrico nella frutta agisce come elettrolita, consentendo il flusso di ioni tra gli elettrodi metallici.",
        "Celle in serie: tensione totale = somma delle tensioni delle singole celle.",
      ],
      realWorldConnections: [
        "La Batteria di Baghdad (c. 250 a.C.) consisteva di un cilindro di rame, un'asta di ferro e aceto — probabilmente la prima cella galvanica conosciuta.",
        "Tutte le batterie sono celle galvaniche; la chimica è la stessa che in uno smartphone o in un limone.",
        "I segnali bioelettrici nel corpo umano sono generati da gradienti ionici attraverso le membrane cellulari — celle galvaniche biologiche.",
      ],
      formula: "E°cella = E°catodo − E°anodo  |  Celle in serie: V_totale = V₁ + V₂ + V₃...",
    },
    questions: {
      mcq: [
        {
          text: "Quale coppia di metalli produrrebbe la tensione più elevata in una batteria di frutta?",
          options: ["Rame-ferro", "Zinco-rame", "Ferro-rame", "Magnesio-zinco"],
          correctIndex: 3,
          explanation: "La tensione dipende dalla differenza di reattività (potenziale dell'elettrodo). Il magnesio (E° = −2,37 V) e lo zinco (E° = −0,76 V) sono più distanti nella serie di attività rispetto allo zinco e al rame (+0,34 V), dando una differenza di potenziale maggiore.",
        },
        {
          text: "Perché la batteria di frutta smette di produrre corrente se i due elettrodi metallici si toccano all'interno della frutta?",
          options: [
            "L'acido della frutta reagisce con entrambi i metalli simultaneamente",
            "Si forma un cortocircuito — gli elettroni bypassano il circuito esterno e fluiscono direttamente tra i metalli",
            "Gli elettrodi a contatto aumentano la resistenza interna",
            "I metalli formano una nuova lega senza potenziale d'elettrodo",
          ],
          correctIndex: 1,
          explanation: "Quando gli elettrodi si toccano, si forma un cortocircuito. Gli elettroni prendono il percorso di minima resistenza (contatto diretto del metallo) invece che attraverso il circuito esterno. Nessuna corrente scorre attraverso il voltmetro.",
        },
        {
          text: "Se una singola cella al limone dà 0,9 V, quale tensione danno quattro celle al limone in serie?",
          options: ["0,9 V", "2,25 V", "3,6 V", "9,0 V"],
          correctIndex: 2,
          explanation: "Le celle in serie sommano le loro tensioni: 4 × 0,9 V = 3,6 V. È così che funzionano le batterie delle torce — due celle da 1,5 V in serie danno 3 V.",
        },
      ],
      discussion: [
        "Perché il succo di limone funziona meglio come elettrolita per la batteria di frutta rispetto al succo di mela? (Suggerimento: considera il pH e la concentrazione di ioni)",
        "Spiega perché aumentare la superficie degli elettrodi inseriti nella frutta aumenta la corrente ma non la tensione.",
        "Se sostituissi il chiodo di zinco con una striscia di magnesio puro, prevedi l'effetto sulla tensione e spiega usando i potenziali standard degli elettrodi.",
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: "Principio della cella galvanica in materiali quotidiani", pct: 35 },
        { label: "Potenziale d'elettrodo e reattività dei metalli", pct: 30 },
        { label: "Addizione di tensione in circuito serie", pct: 20 },
        { label: "Ruolo dell'elettrolita nella frutta", pct: 15 },
      ],
      misconceptions: [
        "Gli studenti spesso pensano che la frutta fornisca l'energia — l'energia proviene dalla reazione chimica tra i metalli e l'elettrolita, non dalla frutta stessa.",
        "Molti assumono che qualsiasi liquido funzioni come elettrolita — acqua pura, olio e liquidi non conduttori non supporteranno una batteria di frutta.",
      ],
      hook: "Nel 2011, degli scienziati hanno usato 800 limoni collegati in serie per alimentare uno smartphone per 30 secondi — al costo di circa 400 euro in limoni. Non pratico, ma una grande dimostrazione che la chimica alimenta l'elettronica!",
      khanLinks: [
        { title: "Celle Galvaniche", url: "https://www.khanacademy.org/science/chemistry/oxidation-reduction/galvanic-cells/v/galvanic-cells" },
        { title: "Potenziale Standard della Cella", url: "https://www.khanacademy.org/science/chemistry/oxidation-reduction/standard-electrode-potential/v/standard-cell-potential" },
      ],
    },
    dataTable: {
      headers: ["Coppia di Metalli", "Frutto/Elettrolita", "Tensione (V)", "Anodo (−)", "Catodo (+)"],
      rows: 6,
    },
    observations: [
      "Registrare la tensione per ogni coppia di metalli nel succo di limone",
      "Registrare la tensione per zinco-rame in diversi frutti",
      "Registrare la tensione totale di 4 limoni in serie e se accende il LED",
    ],
    conclusion: "Spiegare quali fattori (coppia di metalli e tipo di elettrolita) influenzano maggiormente la tensione della cella. Collegare i risultati ai potenziali standard degli elettrodi. Descrivere come le celle in serie sommano le tensioni.",
    ai: {
      opening: "Ciao! Sono Gali, il tuo assistente di laboratorio. Stai per fare una batteria con la frutta — e se colleghi abbastanza limoni insieme, potresti alimentare un LED con il tuo pranzo!",
      keywords: {
        setup: "Inserire i metalli ad almeno 2 cm di distanza e verificare che non si tocchino all'interno della frutta. Rotolare il frutto con fermezza prima di inserire i metalli — questo rilascia più succo e migliora la conduttività.",
        formula: "E°cella = E°catodo − E°anodo. Metalli più diversi = tensione maggiore. Serie: V_totale = ΣV. Zinco (−0,76 V) + Rame (+0,34 V) → E° = 0,34 − (−0,76) = 1,10 V teorico.",
        error: "Errori comuni: gli elettrodi si toccano all'interno della frutta (cortocircuito, la tensione scende a zero), uso di metalli ossidati (tensione inferiore) e mancato collegamento corretto delle celle in serie.",
        result: "Zn-Cu in limone: ~0,9 V. Mg-Cu: ~2,0 V. Zn-Fe: ~0,3 V. 4 limoni in serie: ~3,6 V — abbastanza per accendere un LED a bassa tensione. Limone > arancia > mela per tensione (più acido citrico).",
        real: "La batteria del tuo telefono è una cella galvanica agli ioni di litio. Il principio è identico alla tua batteria al limone — due materiali diversi separati da un elettrolita, che generano tensione da reazioni redox spontanee.",
        explain: "Il chiodo di zinco vuole perdere elettroni più di quanto il rame voglia perderli. Quindi lo zinco diventa l'anodo (Zn → Zn²⁺ + 2e⁻) e il rame è il catodo (H⁺ + e⁻ → ½H₂ in acido). L'acido citrico nel limone fornisce l'elettrolita per il flusso di ioni. Più i metalli sono distanti nella serie di reattività, maggiore è la tensione.",
        hook: "Uno studente nepalese nel 2022 ha vinto un premio scientifico dimostrando che gli scarti di pomodoro delle fabbriche di ketchup possono alimentare piccole luci LED nei villaggi rurali — batterie di frutta come illuminazione sostenibile del villaggio!",
        misconception: "L'energia proviene dal METALLO che si dissolve nell'elettrolita — NON dalla frutta. La frutta fornisce solo la soluzione acida conduttrice. Se usassi lo stesso zinco e rame con aceto o succo di limone in una provetta, otterresti la stessa tensione.",
      },
      hint: "Se la tensione legge vicino allo zero, controlla che i metalli non si tocchino all'interno della frutta. Inserire un coltello tra di loro se necessario per confermare che sono separati.",
      expected: "Zn-Cu in limone: ~0,9 V. Mg-Cu: ~1,8–2,0 V. 4 limoni in serie: ~3,2–3,6 V. Il LED si accende con 4 limoni. Classificazione tensione: Mg-Cu > Zn-Cu > Fe-Cu > Zn-Fe. Conferma la previsione della serie di reattività.",
    },
  }'''

IT_143 = '''  {
    num: 143,
    title: "Osmosi nelle Cellule Vegetali",
    section: "Fisiologia Vegetale",
    desc: "Gli studenti tagliano strisce di patate, le pesano, le mettono in soluzioni di NaCl 0, 0,25, 0,5 e 1,0 mol/L per 30 minuti e ripesano per trovare la variazione percentuale di massa — determinando la concentrazione di soluto delle cellule della patata.",
    setupTime: "10 min",
    duration: "40 min",
    summary: {
      whatTheyLearn: "Gli studenti imparano che l'osmosi sposta l'acqua attraverso una membrana semipermeabile da bassa a alta concentrazione di soluto. Determinano la concentrazione di soluto delle cellule della patata dal punto di variazione zero della massa.",
      instructions: [
        "Tagliare 16 strisce di patata di dimensioni uguali (circa 5 cm × 1 cm × 0,5 cm). Pesare 4 strisce per concentrazione.",
        "Preparare i beaker con soluzioni di NaCl 0, 0,25, 0,5 e 1,0 mol/L.",
        "Mettere le strisce nelle soluzioni e lasciare per 30 minuti.",
        "Rimuovere le strisce, tamponare con carta assorbente e ripesare.",
        "Calcolare la variazione percentuale di massa per ogni concentrazione: % variazione = (finale−iniziale)/iniziale × 100.",
      ],
      expectedOutcome: "Le strisce in acqua distillata guadagnano massa (l'acqua entra per osmosi). Le strisce in 1,0 mol/L perdono massa (l'acqua fuoriesce). C'è una concentrazione in cui la massa non cambia — questa è la concentrazione di soluto delle cellule della patata (circa 0,3–0,4 mol/L per la patata).",
    },
    experiment: {
      equipment: [
        { emoji: "🥔", name: "Patata grande (sbucciata)" },
        { emoji: "🧂", name: "Soluzioni di NaCl: 0, 0,25, 0,5, 1,0 mol/L" },
        { emoji: "⚖️", name: "Bilancia (±0,01 g)" },
        { emoji: "🔪", name: "Bisturi e tagliere" },
        { emoji: "📋", name: "Carta assorbente e pinzette" },
      ],
      observationsToRecord: [
        "Massa iniziale e finale di ogni serie di strisce",
        "Variazione percentuale di massa a ogni concentrazione di NaCl",
        "Aspetto fisico delle strisce dopo il trattamento (dure/molli/turgide)",
        "Concentrazione di NaCl a cui la variazione di massa = 0",
      ],
      theoryPoints: [
        "Osmosi: movimento netto di molecole d'acqua attraverso una membrana semipermeabile dalla bassa alla alta concentrazione di soluto.",
        "Se la soluzione esterna è ipotonica rispetto alle cellule: l'acqua entra → le cellule diventano turgide → la massa aumenta.",
        "Se la soluzione esterna è ipertonica rispetto alle cellule: l'acqua fuoriesce → le cellule diventano flaccide → la massa diminuisce.",
        "Punto isotonico (nessuna variazione di massa) = concentrazione di soluto del contenuto delle cellule della patata (~0,3–0,4 mol/L).",
      ],
      realWorldConnections: [
        "Salare le verdure estrae l'acqua per osmosi (alta concentrazione di sale all'esterno crea una soluzione ipertonica) — usato nella conservazione degli alimenti.",
        "Le soluzioni per flebo endovenosa devono essere isotoniche con le cellule del sangue (~0,9% NaCl, 0,154 mol/L) per prevenire danni osmotici ai globuli rossi.",
        "Le bevande sportive sono formulate per essere isotoniche con le cellule del corpo per consentire un rapido assorbimento.",
      ],
      formula: "% variazione di massa = (m_finale − m_iniziale) / m_iniziale × 100  |  Variazione zero = punto isotonico",
    },
    questions: {
      mcq: [
        {
          text: "Una striscia di patata posta in soluzione di NaCl 1,0 mol/L perde massa. Cosa indica questo?",
          options: [
            "Le cellule della patata hanno una concentrazione di soluto maggiore di 1,0 mol/L",
            "La soluzione esterna è ipertonica — l'acqua fuoriesce dalle cellule per osmosi",
            "La patata si dissolve nella soluzione salina",
            "Il sale sta entrando nelle cellule della patata",
          ],
          correctIndex: 1,
          explanation: "Se la soluzione esterna (NaCl 1,0 mol/L) è più concentrata del contenuto cellulare, è ipertonica. L'acqua fuoriesce dalle cellule per osmosi lungo il gradiente del potenziale idrico, facendo perdere massa alle cellule che diventano flaccide.",
        },
        {
          text: "A quale concentrazione di NaCl una striscia di patata non mostrerebbe variazione di massa?",
          options: [
            "0 mol/L (acqua distillata)",
            "0,5 mol/L (se le cellule della patata sono circa 0,5 mol/L)",
            "La striscia guadagna sempre massa in qualsiasi soluzione di NaCl",
            "1,0 mol/L",
          ],
          correctIndex: 1,
          explanation: "Quando la soluzione esterna è isotonica con il contenuto cellulare, non c'è osmosi netta e la massa rimane costante. La concentrazione effettiva dipende dalla patata usata (tipicamente 0,3–0,4 mol/L per la patata standard).",
        },
        {
          text: "Perché le strisce devono essere tamponate prima di pesare?",
          options: [
            "Per fermare il proseguimento dell'osmosi",
            "Per rimuovere l'acqua superficiale che si aggiungerebbe alla massa misurata ma non fa parte del contenuto cellulare",
            "Per pulire il sale dalla superficie",
            "Il tamponamento non è necessario",
          ],
          correctIndex: 1,
          explanation: "L'acqua superficiale dalla soluzione aderisce alla striscia e verrebbe misurata come parte della massa, dando una lettura falsa. Il tamponamento rimuove questa acqua superficiale in modo che venga misurata solo la massa del tessuto della patata.",
        },
      ],
      discussion: [
        "Spiega perché una striscia in acqua distillata diventa turgida e dura mentre una in NaCl concentrato diventa flaccida e morbida, usando i concetti di potenziale idrico.",
        "In un esperimento con globuli rossi, le cellule scoppiano in acqua distillata e si restringono in NaCl concentrato. Spiega queste osservazioni e indica perché il punto isotonico per il sangue è 0,9% NaCl.",
        "Uno studente dimentica di tamponare una serie di strisce prima di pesarle. Prevedi se questo causerebbe una sovrastima o una sottostima della % variazione di massa e spiega.",
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: "Meccanismo dell'osmosi e membrane semipermeabili", pct: 35 },
        { label: "Soluzioni isotoniche, ipertoniche, ipotoniche", pct: 30 },
        { label: "Calcolo della variazione percentuale di massa", pct: 25 },
        { label: "Applicazioni mediche e in scienza alimentare", pct: 10 },
      ],
      misconceptions: [
        "Gli studenti spesso dicono che il sale entra invece che l'acqua fuoriesce — l'osmosi è sempre descritta in termini di movimento dell'acqua, non del soluto.",
        "Molti pensano che la membrana cellulare sia completamente impermeabile a tutto — lascia passare liberamente l'acqua ma limita la maggior parte dei soluti.",
      ],
      hook: "Le sacche per flebo ospedaliere devono essere precisamente isotoniche con il sangue — se fossero acqua pura, ogni globulo rosso scoppierebbe in pochi secondi (emolisi). Se fossero troppo concentrate, le cellule del sangue si restringerebbero e diventerebbero non funzionali. Un piccolo errore chimico in una sacca per flebo può essere fatale. L'osmosi ti mantiene in vita!",
      khanLinks: [
        { title: "Osmosi", url: "https://www.khanacademy.org/science/biology/membranes-and-transport/osmosis/v/osmosis" },
        { title: "Introduzione agli Enzimi", url: "https://www.khanacademy.org/science/biology/energy-and-enzymes/introduction-to-enzymes/v/introduction-to-enzymes" },
      ],
    },
    dataTable: {
      headers: ["Concentrazione NaCl (mol/L)", "Massa iniziale (g)", "Massa finale (g)", "Variazione di massa (g)", "% Variazione di massa"],
      rows: 5,
    },
    observations: [
      "Registrare la massa iniziale e finale delle strisce a ogni concentrazione di NaCl",
      "Calcolare la variazione percentuale di massa per ogni concentrazione",
      "Tracciare il grafico % variazione di massa vs concentrazione NaCl e identificare il punto isotonico",
    ],
    conclusion: "Tracciare il grafico % variazione di massa vs concentrazione e disegnare la migliore linea di adattamento. Leggere la concentrazione di NaCl a cui % variazione = 0 — questa è la concentrazione di soluto delle cellule della patata. Spiegare i risultati per le soluzioni ipotoniche e ipertoniche.",
    ai: {
      opening: "Ciao! Sono Gali, il tuo assistente di laboratorio. Oggi scoprirai quanto sono concentrate le cellule della patata — usando l'osmosi per pesare ciò che c'è dentro di loro, senza tagliarle!",
      keywords: {
        setup: "Taglia tutte le strisce dalla stessa patata per minimizzare la variazione. Usa un bisturi affilato e un modello per dimensioni identiche. Pesa ogni striscia individualmente prima e dopo. Tampona le strisce per un tempo uguale (5 s).",
        formula: "% variazione di massa = (m_f − m_i)/m_i × 100. Traccia questo vs [NaCl]. Il punto isotonico (% variazione = 0) dà la concentrazione di soluto cellulare. Per la patata: tipicamente 0,3–0,4 mol/L NaCl.",
        error: "Errori comuni: tempo di tamponamento disuguale, strisce di diverse dimensioni e lasciare le strisce in soluzione per tempi diversi. Usa un timer per rimuovere tutte le strisce simultaneamente.",
        result: "Risultati tipici: 0 mol/L: +8–12% (guadagno di acqua). 0,25 mol/L: +2–5%. 0,5 mol/L: −2 a −5%. 1,0 mol/L: −10 a −15%. Punto isotonico ≈ 0,3–0,4 mol/L.",
        real: "Le patatine fritte si fanno friggendo sottili fette di patata nell'olio. La frittura rimuove quasi tutta l'acqua (osmosi attraverso calore ed evaporazione). Una patata cruda è ~80% acqua; una patatina fritta è <5% acqua. Stessa chimica, scala diversa.",
        explain: "Le cellule della patata contengono una soluzione di zuccheri, sali e altre molecole all'interno di un vacuolo circondato da una membrana cellulare semipermeabile. Le molecole d'acqua passano liberamente attraverso questa membrana, spostandosi dal lato più diluito a quello più concentrato (movimento netto lungo il gradiente del potenziale idrico). In acqua distillata (nessun soluto), l'acqua entra rapidamente; in sale concentrato (molti soluti), l'acqua fuoriesce rapidamente.",
        hook: "Gli antichi Egizi conservavano pesce e carne impacchettandoli nel sale — l'alta concentrazione di sale estrae l'acqua dai batteri per osmosi, uccidendoli e conservando il cibo. La moderna conservazione degli alimenti (salagione, salamoia, sottaceto) usa ancora questa chimica di 4.000 anni fa!",
        misconception: "L'osmosi è passiva — non richiede energia dalla cellula. L'acqua si sposta spontaneamente lungo il suo gradiente di potenziale idrico (da bassa concentrazione di soluto ad alta concentrazione di soluto). Il trasporto attivo di soluti richiede energia, ma l'osmosi stessa no.",
      },
      hint: "Se tutte le strisce mostrano un guadagno di massa, le tue soluzioni di NaCl potrebbero essere troppo diluite. Prepara soluzioni fresche con cura. Se tutte perdono massa, controlla se la tua acqua distillata è stata accidentalmente mescolata con sale.",
      expected: "% variazione di massa chiaramente positiva in acqua distillata, zero a ~0,3–0,4 mol/L, negativa a 1,0 mol/L. Buon adattamento lineare attraverso i punti dati. Punto isotonico identificabile dal grafico.",
    },
  }'''

IT_148 = '''  {
    num: 148,
    title: "Condizioni di Germinazione dei Semi",
    section: "Fisiologia Vegetale",
    desc: "Gli studenti preparano semi di crescione o ravanello in quattro condizioni — caldo+acqua, freddo+acqua, caldo+senza acqua, buio+caldo+acqua — registrano la percentuale di germinazione dopo 5 giorni e identificano i requisiti essenziali per la germinazione.",
    setupTime: "10 min",
    duration: "10 min di preparazione + osservazioni nell'arco di 5 giorni",
    summary: {
      whatTheyLearn: "Gli studenti imparano che i semi richiedono acqua, calore e ossigeno per germinare — ma non luce. Identificano quali condizioni sono essenziali e quali sono semplicemente benefiche confrontando le percentuali di germinazione.",
      instructions: [
        "Preparare quattro piastre Petri ciascuna con 10 semi su ovatta umida.",
        "Piastra A: caldo (20°C) + acqua (ovatta umida). Piastra B: freddo (4°C in frigorifero) + acqua.",
        "Piastra C: caldo (20°C) + ovatta asciutta (senza acqua). Piastra D: caldo (20°C) + acqua + scatola buia.",
        "Lasciare per 5 giorni; controllare quotidianamente e contare i semi germinati (radichetta visibile ≥ 2 mm).",
        "Calcolare la % di germinazione per ogni condizione.",
      ],
      expectedOutcome: "Piastra A: ~90% di germinazione. Piastra B (freddo): bassa germinazione (~10%). Piastra C (asciutta): 0% di germinazione. Piastra D (buio): ~90% di germinazione — confermando che la luce non è necessaria.",
    },
    experiment: {
      equipment: [
        { emoji: "🌱", name: "Semi di crescione o ravanello (10 per piastra)" },
        { emoji: "📋", name: "4 piastre Petri con coperchi" },
        { emoji: "🧶", name: "Ovatta (per ogni piastra)" },
        { emoji: "💧", name: "Acqua distillata (per le condizioni umide)" },
        { emoji: "📦", name: "Scatola di cartone nera (per la piastra D)" },
      ],
      observationsToRecord: [
        "Numero di semi germinati al giorno (periodo di 5 giorni)",
        "Percentuale di germinazione dopo 5 giorni per ogni condizione",
        "Aspetto delle plantule (lunghezza della radichetta, lunghezza del germoglio)",
        "Eventuale crescita di muffa (annotare e considerare come fattore)",
      ],
      theoryPoints: [
        "La germinazione richiede: acqua (attiva gli enzimi, idrata le cellule), calore (attività enzimatica) e O₂ (respirazione aerobica per la crescita).",
        "La luce NON è necessaria per la germinazione — il seme usa le riserve alimentari immagazzinate (endosperma) per la crescita iniziale.",
        "L'acqua attiva gli enzimi idrolitici (amilasi, proteasi) che scompongono le riserve di amido e proteine nell'endosperma.",
        "La temperatura influisce sui tassi di reazione enzimatica — il freddo rallenta la germinazione; l'optimum è tipicamente 15–25°C per la maggior parte delle specie.",
      ],
      realWorldConnections: [
        "Gli agricoltori pianificano la semina in base alla temperatura del suolo — molte colture richiedono una temperatura del suolo >10°C per una germinazione affidabile.",
        "Le banche del seme (es. Svalbard Global Seed Vault) conservano i semi in condizioni fredde e asciutte — l'opposto dei requisiti di germinazione — per massimizzare la longevità.",
        "La stratificazione (trattamento a freddo dei semi prima della semina) simula le condizioni invernali e rompe la dormienza in molte specie di piante temperate.",
      ],
      formula: "% germinazione = (numero germinati / semi totali) × 100  |  Requisiti: acqua + calore (15–25°C) + O₂",
    },
    questions: {
      mcq: [
        {
          text: "Quali condizioni sono ESSENZIALI per la germinazione dei semi?",
          options: [
            "Luce, acqua e calore",
            "Acqua, calore e ossigeno",
            "Terra, acqua e luce",
            "Azoto, CO₂ e acqua",
          ],
          correctIndex: 1,
          explanation: "I semi hanno bisogno di acqua (per attivare gli enzimi e idratare le cellule), calore (per l'attività enzimatica) e ossigeno (per la respirazione aerobica che fornisce energia per la crescita). La luce NON è necessaria per la germinazione — i semi germinano nel buio sottoterra.",
        },
        {
          text: "Perché i semi posti in condizioni fredde (4°C) germinano male?",
          options: [
            "L'acqua fredda non può entrare nel seme",
            "La bassa temperatura riduce l'attività enzimatica, rallentando i processi metabolici necessari per la germinazione",
            "I semi si gelano a 4°C",
            "L'ossigeno è meno disponibile nell'acqua fredda",
          ],
          correctIndex: 1,
          explanation: "La germinazione richiede reazioni catalizzate da enzimi (amilasi, proteasi, ecc.) per mobilitare le riserve alimentari. Questi enzimi lavorano molto più lentamente a 4°C rispetto alla temperatura ottimale (~20°C), quindi la germinazione è notevolmente ritardata o impedita.",
        },
        {
          text: "I semi in una scatola buia (Piastra D) germinano alla stessa velocità dei semi alla luce (Piastra A). Cosa dimostra questo?",
          options: [
            "I semi hanno bisogno dell'oscurità per germinare",
            "La luce non è un requisito per la germinazione — i semi usano le riserve alimentari immagazzinate",
            "La fotosintesi avviene all'interno del seme durante la germinazione",
            "La scatola buia manteneva una temperatura più elevata",
          ],
          correctIndex: 1,
          explanation: "I semi contengono riserve alimentari immagazzinate (amido, proteine, grassi nell'endosperma e nei cotiledoni). Non hanno bisogno di luce per l'energia durante la germinazione — scompongono queste riserve aerobicamente. La luce diventa importante solo quando emergono le prime foglie della plantula e inizia la fotosintesi.",
        },
      ],
      discussion: [
        "Spiega a livello molecolare perché l'acqua è essenziale per la germinazione — quali processi l'acqua consente all'interno del seme?",
        "Molti semi nelle zone temperate sono in dormienza e richiedono un periodo di freddo prima di germinare. Spiega il vantaggio ecologico di questo meccanismo di dormienza.",
        "Un agricoltore ha piantato semi a marzo e ha trovato una scarsa germinazione. Suggerisci e spiega due possibili fattori abiotici che avrebbero potuto causarlo e come potrebbero essere rimediati.",
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: "Condizioni essenziali per la germinazione (acqua, calore, O₂)", pct: 40 },
        { label: "Ruolo degli enzimi nel mobilitare le riserve alimentari", pct: 30 },
        { label: "La luce non è necessaria per la germinazione", pct: 20 },
        { label: "Applicazioni agricole e nelle banche del seme", pct: 10 },
      ],
      misconceptions: [
        "Gli studenti spesso pensano che la luce sia necessaria per la germinazione — non lo è. La luce è necessaria per la fotosintesi, che inizia solo dopo che la plantula emerge e sviluppa le foglie.",
        "Molti pensano che la terra sia necessaria per la germinazione — i semi germinano perfettamente bene su ovatta umida o carta da filtro in condizioni di laboratorio.",
      ],
      hook: "Il Svalbard Global Seed Vault in Norvegia conserva 1,3 milioni di varietà di semi in tunnel congelati all'interno di una montagna artica — condizioni perfettamente opposte a quelle necessarie per la germinazione (freddo e asciutto). È la polizza assicurativa più importante della storia dell'umanità: se le colture vengono eliminate da malattie o cambiamenti climatici, possiamo ricominciare l'agricoltura da questi semi.",
      khanLinks: [
        { title: "Risposte di Crescita delle Piante", url: "https://www.khanacademy.org/science/biology/plant-biology/plant-responses/v/plant-growth-responses" },
        { title: "Introduzione alla Respirazione Cellulare", url: "https://www.khanacademy.org/science/biology/cellular-respiration-and-fermentation/intro-to-cellular-respiration/v/steps-of-aerobic-respiration" },
      ],
    },
    dataTable: {
      headers: ["Condizione", "Giorno 1", "Giorno 2", "Giorno 3", "Giorno 5", "% Germinazione (Giorno 5)"],
      rows: 5,
    },
    observations: [
      "Contare i semi germinati quotidianamente per 5 giorni in ogni piastra Petri",
      "Registrare la % di germinazione cumulativa per ogni condizione",
      "Annotare la lunghezza e l'aspetto delle radichette nei semi germinati",
    ],
    conclusion: "Indicare i tre requisiti essenziali per la germinazione basandosi sui risultati. Spiegare il risultato per la Piastra D (buio) e cosa dimostra. Descrivere un'implicazione agricola dei tuoi risultati.",
    ai: {
      opening: "Ciao! Sono Gali, il tuo assistente di laboratorio. Oggi scoprirai di cosa hanno davvero bisogno i semi per germinare — e verificherai se hanno davvero bisogno della luce. La risposta potrebbe sorprenderti!",
      keywords: {
        setup: "Usa lo stesso numero di semi dallo stesso pacchetto. Pre-immergere i semi per 1 ora in acqua prima della preparazione per migliorare i tassi di germinazione. Tieni la Piastra D veramente al buio — sigilla la scatola con nastro adesivo.",
        formula: "% germinazione = (germinati/totale) × 100. Condizioni essenziali: H₂O (attivazione degli enzimi, idratazione cellulare), T (attività enzimatica; 15–25°C ottimale), O₂ (respirazione aerobica per la crescita).",
        error: "Errori comuni: la Piastra C (asciutta) ha condensa all'interno della piastra Petri (segretamente umida), muffa che cresce nelle piastre troppo bagnate e mancato controllo quotidiano (perdita del momento in cui è avvenuta la germinazione).",
        result: "Risultati del Giorno 5: Piastra A (caldo + acqua): ~90%. Piastra B (freddo + acqua): ~10–20%. Piastra C (caldo + asciutto): 0%. Piastra D (buio + caldo + acqua): ~85–90%.",
        real: "Gli agricoltori nell'Africa orientale usano semplici termometri del suolo per decidere quando piantare il mais. Il mais ha bisogno di una temperatura del suolo >12°C. Piantare troppo presto significa che i semi marciscono invece di germinare — capire i requisiti di germinazione è scienza delle colture di base.",
        explain: "All'interno di un seme secco, tutto il metabolismo è quasi completamente fermato — il seme può sopravvivere per anni in questo stato di dormienza. Quando entra l'acqua, attiva gli enzimi dormienti nel seme. Le amilasi scompongono l'amido in glucosio, le proteasi scompongono le proteine di riserva in amminoacidi. Questi forniscono energia (tramite respirazione aerobica usando O₂) e mattoni costruttivi per l'embrione in crescita. Il calore accelera tutte queste reazioni catalizzate da enzimi.",
        hook: "Nel 2012, gli scienziati in Russia hanno fatto crescere una pianta fertile da un seme trovato in una tana di scoiattolo di 32.000 anni fa congelata nel permafrost siberiano. Il seme germinato con più successo noto era un dattero della Giudea trovato a Masada — 2.000 anni di età. I semi sono capsule del tempo biologiche che solo la chimica può sbloccare!",
        misconception: "La luce è per la fotosintesi, non per la germinazione. I semi contengono abbastanza energia immagazzinata (amido, oli, proteine) per supportare l'intero processo di germinazione e la crescita iniziale senza alcuna fotosintesi. Solo quando si dispiegano le prime vere foglie della plantula la luce diventa essenziale.",
      },
      hint: "Se la Piastra A mostra una bassa germinazione, controlla che i semi non siano troppo vecchi (testa la vitalità facendoli galleggiare in acqua — quelli che affondano sono vitali, quelli che galleggiano potrebbero non esserlo). Sostituisci con semi freschi se necessario.",
      expected: "Piastra A: ~90% di germinazione. Piastra B (freddo): ~10%. Piastra C (asciutta): 0%. Piastra D (buio): ~90%. Conferma che acqua e calore sono essenziali; luce non necessaria. Ossigeno confermato dalla respirazione aerobica nelle plantule.",
    },
  }'''


def read_file(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()

def split_experiments(content):
    pattern = re.compile(r'\n  \{\n    num: (\d+),')
    positions = [(m.start(), int(m.group(1))) for m in pattern.finditer(content)]
    result = {}
    for i, (pos, num) in enumerate(positions):
        end = positions[i+1][0] if i+1 < len(positions) else len(content)
        result[num] = content[pos:end]
    return result

def main():
    print("Reading chemistry.it.ts...")
    content = read_file(DST)
    experiments = split_experiments(content)
    print(f"Found {len(experiments)} experiments")
    patches = {133: IT_133, 138: IT_138, 143: IT_143, 148: IT_148}
    for num, it_text in patches.items():
        experiments[num] = '\n' + it_text
        print(f"  Patched exp {num}")
    first_exp_pos = content.find('\n  {\n    num:')
    header = content[:first_exp_pos].rstrip()
    print("Rebuilding file...")
    final = header + '\n'
    for num in sorted(experiments.keys()):
        exp = experiments[num]
        clean = exp.strip()
        if not clean.startswith('{'):
            clean = '{' + clean
        while clean and clean[-1] in ',]\n\r ':
            clean = clean.rstrip(',]\n\r ')
        if not clean.endswith('}'):
            clean = clean.rstrip() + '\n  }'
        opens = clean.count('{')
        closes = clean.count('}')
        diff = opens - closes
        if diff > 0:
            for _ in range(diff):
                clean += '\n  }'
        final += '  ' + clean + ',\n'
    final += ']\n'
    exp_count = len(re.findall(r'num: \d+,', final))
    print(f"Experiments: {exp_count}")
    with open(DST, 'w', encoding='utf-8') as f:
        f.write(final)
    print("Done — 133, 138, 143, 148 patched.")

if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Patch Italian chemistry file: experiments 103 and 108."""
import re, os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DST = os.path.join(BASE, "data", "chemistry.it.ts")

IT_103 = '''  {
    num: 103,
    title: "Colloidi",
    section: "Materia e Soluzioni",
    desc: "Sciogliere zolfo in etanolo, aggiungerlo all'acqua per creare un colloide, poi confrontarlo con una vera soluzione usando un filtro.",
    setupTime: "10 min",
    duration: "25 min",
    summary: {
      whatTheyLearn: "Gli studenti distinguono tra soluzioni vere, colloidi e sospensioni preparando un colloide di zolfo e testando la filtrazione.",
      instructions: [
        "Sciogliere una piccola quantità di polvere di zolfo in 5 mL di etanolo in una provetta.",
        "Aggiungere lentamente la soluzione zolfo-etanolo a 50 mL di acqua distillata mescolando.",
        "Osservare l'aspetto lattiginoso del colloide che si forma.",
        "Filtrare il colloide attraverso carta da filtro e confrontare il filtrato con l'originale.",
        "Confrontare l'aspetto del colloide con una vera soluzione di NaCl e una sospensione di gesso.",
      ],
      expectedOutcome: "Il colloide di zolfo appare lattiginoso e opalescente. A differenza di una sospensione, passa attraverso la carta da filtro. A differenza di una vera soluzione, diffonde visibilmente la luce.",
    },
    experiment: {
      equipment: [
        { emoji: "🧪", name: "Provette e portaprovette" },
        { emoji: "🔆", name: "Polvere di zolfo (0,1 g)" },
        { emoji: "🍶", name: "Etanolo (5 mL)" },
        { emoji: "💧", name: "Acqua distillata (100 mL)" },
        { emoji: "📄", name: "Carta da filtro e imbuto" },
        { emoji: "🥛", name: "Beaker (100 mL)" },
      ],
      observationsToRecord: [
        "Aspetto della soluzione zolfo-etanolo (limpida o torbida?)",
        "Aspetto dopo l'aggiunta all'acqua (colore, torbidità)",
        "Se il colloide passa attraverso la carta da filtro",
        "Confronto con vera soluzione di NaCl e sospensione di gesso",
      ],
      theoryPoints: [
        "Un colloide contiene particelle di diametro 1–1000 nm disperse in un mezzo — troppo piccole per essere filtrate ma abbastanza grandi da diffondere la luce.",
        "Le soluzioni vere hanno particelle <1 nm e sono trasparenti; le sospensioni hanno particelle >1000 nm che sedimentano e possono essere filtrate.",
        "Quando lo zolfo (insolubile in acqua) viene aggiunto tramite etanolo, precipita come particelle colloidali stabilizzate in acqua.",
        "I colloidi sono termodinamicamente metastabili: sembrano stabili ma possono essere destabilizzati da variazioni di temperatura o concentrazione di elettroliti.",
      ],
      realWorldConnections: [
        "Il latte è un colloide di goccioline di grasso disperse in acqua — appare bianco perché le particelle colloidali diffondono la luce.",
        "Il plasma sanguigno è un colloide; il comportamento colloidale è essenziale per il trasporto di ossigeno e nutrienti.",
        "La nebbia è un colloide di goccioline d'acqua in aria; gli spray aerosol sono colloidi di liquido in gas.",
      ],
      formula: "Diametro delle particelle: 1 nm < d < 1000 nm (intervallo colloidale)",
    },
    questions: {
      mcq: [
        {
          text: "Cosa distingue un colloide da una vera soluzione?",
          options: [
            "I colloidi contengono ioni; le soluzioni contengono molecole",
            "Le particelle colloidali sono 1–1000 nm e diffondono la luce; le particelle in soluzione sono <1 nm e non lo fanno",
            "I colloidi possono essere filtrati; le soluzioni no",
            "I colloidi appaiono sempre limpidi; le soluzioni appaiono lattiginose",
          ],
          correctIndex: 1,
          explanation: "Le particelle colloidali (1–1000 nm) sono abbastanza grandi da diffondere la luce (effetto Tyndall) ma abbastanza piccole da passare attraverso la carta da filtro. Le particelle di soluzione vera (<1 nm) sono troppo piccole per diffondere la luce e la soluzione appare limpida.",
        },
        {
          text: "Perché lo zolfo forma un colloide quando la soluzione etanolica viene aggiunta all'acqua?",
          options: [
            "Lo zolfo si dissolve in acqua formando ioni",
            "L'etanolo reagisce con l'acqua rilasciando gas zolfo",
            "Lo zolfo è insolubile in acqua e precipita come minuscole particelle colloidali stabilizzate dal cambiamento di solvente",
            "L'acqua ossida lo zolfo in un nuovo composto",
          ],
          correctIndex: 2,
          explanation: "Lo zolfo si dissolve in etanolo ma non in acqua. Quando la soluzione etanolica viene aggiunta all'acqua, lo zolfo precipita come particelle molto fini (dimensione colloidale) invece di un precipitato grossolano, perché il cambiamento improvviso di solvente impedisce la formazione di grandi cristalli.",
        },
        {
          text: "Cosa succede quando filtri un colloide attraverso normale carta da filtro?",
          options: [
            "Il colloide viene completamente trattenuto dalla carta da filtro",
            "Il colloide passa attraverso perché le particelle colloidali sono più piccole dei pori della carta",
            "La filtrazione converte il colloide in una vera soluzione",
            "La carta da filtro cambia colore permanentemente",
          ],
          correctIndex: 1,
          explanation: "La carta da filtro ordinaria ha pori molto più grandi delle particelle colloidali (1–1000 nm), quindi il colloide passa attraverso invariato. Ecco perché i colloidi non possono essere separati mediante semplice filtrazione — a differenza delle sospensioni.",
        },
      ],
      discussion: [
        "Come distingueresti tra colloide, vera soluzione e sospensione senza usare un filtro? Quali test eseguiresti?",
        "Perché il latte appare bianco? Usa la tua conoscenza dei colloidi per spiegare.",
        "I colloidi sono descritti come metastabili. Cosa significa e cosa potrebbe destabilizzare un colloide?",
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: "Colloide vs. Soluzione vs. Sospensione", pct: 40 },
        { label: "Dimensione delle particelle e proprietà", pct: 30 },
        { label: "Diffusione della luce (Effetto Tyndall)", pct: 20 },
        { label: "Filtrazione e separazione", pct: 10 },
      ],
      misconceptions: [
        "Gli studenti spesso pensano che i colloidi siano uguali alle sospensioni — ma le sospensioni sedimentano e possono essere filtrate, mentre i colloidi non fanno né l'uno né l'altro.",
        "Molti studenti assumono che se un liquido appare torbido deve essere una sospensione — in realtà molti colloidi appaiono torbidi o lattiginosi.",
      ],
      hook: "Il latte, la nebbia, il sangue e persino la gelatina sono tutti colloidi — uno dei tipi di miscela più importanti in natura e nell'industria!",
      khanLinks: [
        { title: "Introduzione alle Soluzioni", url: "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/mixtures-and-solutions/v/introduction-to-solutions" },
      ],
    },
    dataTable: {
      headers: ["Campione", "Aspetto", "Passa il filtro?", "Diffonde la luce?", "Classificazione"],
      rows: 4,
    },
    observations: [
      "Registrare l'aspetto (colore, chiarezza) di ogni miscela",
      "Annotare se ogni campione passa attraverso la carta da filtro",
      "Osservare quali campioni diffondono il fascio di una torcia (effetto Tyndall)",
    ],
    conclusion: "Riassumere le differenze chiave tra i tre tipi di miscela basandosi sulle osservazioni e collegare alla teoria delle dimensioni delle particelle.",
    ai: {
      opening: "Ciao! Sono Gali. Oggi stai preparando un colloide — un tipo misterioso di miscela che non è né una vera soluzione né una sospensione. Roba affascinante!",
      keywords: {
        setup: "Aggiungi la soluzione zolfo-etanolo goccia a goccia all'acqua mescolando delicatamente. Aggiungerla troppo velocemente può creare particelle più grandi che sedimentano.",
        formula: "Diametro delle particelle colloidali: da 1 nm a 1000 nm. Questo intervallo di dimensioni conferisce ai colloidi le loro uniche proprietà ottiche.",
        error: "Non usare troppo zolfo — lo zolfo in eccesso crea una sospensione visibile che sedimenta, invece di un vero colloide.",
        result: "Aspettati un liquido opalescente bianco-lattiginoso che passa attraverso la carta da filtro ma diffonde un fascio di luce (effetto Tyndall).",
        real: "Il latte è un colloide di grassi in acqua; il colore bianco deriva dalla diffusione della luce da parte delle goccioline di grasso colloidali — la stessa fisica del tuo colloide di zolfo!",
        explain: "Le particelle colloidali sono abbastanza grandi da diffondere la luce ma abbastanza piccole da rimanere sospese indefinitamente grazie al moto browniano.",
        hook: "Il cielo è blu perché l'aria si comporta come un colloide — minuscole particelle di polvere e molecole di gas diffondono la luce blu a corta lunghezza d'onda più della luce rossa!",
        misconception: "Un colloide NON è una soluzione — lo zolfo non è disciolto a livello atomico. Ma NON è nemmeno una sospensione — non sedimenta.",
      },
      hint: "Se il tuo colloide si deposita dopo pochi minuti, le particelle sono troppo grandi. Diluisci di più la soluzione originale di zolfo-etanolo prima di aggiungerla all'acqua.",
      expected: "Un colloide opalescente lattiginoso che passa attraverso la carta da filtro e mostra l'effetto Tyndall quando viene proiettato un fascio di luce.",
    },
  }'''

IT_108 = '''  {
    num: 108,
    title: "Acqua di Cristallizzazione",
    section: "Materia e Soluzioni",
    desc: "Riscaldare il CuSO₄·5H₂O blu finché non diventa bianco, poi aggiungere acqua per ripristinare il colore blu.",
    setupTime: "10 min",
    duration: "25 min",
    summary: {
      whatTheyLearn: "Gli studenti scoprono che alcuni composti ionici contengono molecole d'acqua nella loro struttura cristallina e che il riscaldamento rimuove quest'acqua in modo reversibile.",
      instructions: [
        "Pesare 2 g di cristalli blu di CuSO₄·5H₂O e metterli in una capsula da evaporazione.",
        "Riscaldare delicatamente su un bruciatore Bunsen, osservando il cambio di colore da blu a bianco.",
        "Continuare a riscaldare finché non si osservano ulteriori cambiamenti di colore; lasciare raffreddare.",
        "Pesare il CuSO₄ anidro bianco e calcolare la massa d'acqua persa.",
        "Aggiungere 2–3 gocce di acqua distillata sulla polvere bianca e osservare il ritorno del colore blu.",
      ],
      expectedOutcome: "Il CuSO₄·5H₂O blu diventa bianco (CuSO₄ anidro) riscaldandolo. L'aggiunta di acqua ripristina il colore blu, confermando la natura reversibile dell'idratazione.",
    },
    experiment: {
      equipment: [
        { emoji: "🔵", name: "Cristalli blu di CuSO₄·5H₂O (2 g)" },
        { emoji: "🍳", name: "Capsula da evaporazione" },
        { emoji: "🔥", name: "Bruciatore Bunsen o piastra riscaldante" },
        { emoji: "⚖️", name: "Bilancia elettronica (±0,01 g)" },
        { emoji: "💧", name: "Contagocce con acqua distillata" },
      ],
      observationsToRecord: [
        "Colore del CuSO₄·5H₂O prima del riscaldamento (blu)",
        "Colore durante e dopo il riscaldamento (blu → bianco)",
        "Massa prima e dopo il riscaldamento (calcolare la massa d'acqua persa)",
        "Cambio di colore quando l'acqua viene aggiunta al CuSO₄ anidro (bianco → blu)",
      ],
      theoryPoints: [
        "L'acqua di cristallizzazione è composta da molecole d'acqua incorporate nel reticolo cristallino di un composto ionico.",
        "Il CuSO₄·5H₂O contiene cinque molecole d'acqua per unità formula; il colore è dovuto ai complessi [Cu(H₂O)₄]²⁺.",
        "Il riscaldamento elimina le molecole d'acqua: CuSO₄·5H₂O → CuSO₄ + 5H₂O; il sale anidro è bianco perché Cu²⁺ non ha ligandi acqua.",
        "La reazione è reversibile: l'aggiunta di acqua reidrata il sale e ripristina il complesso di coordinazione blu.",
      ],
      realWorldConnections: [
        "Il CaCl₂ anidro e il gel di silice sono usati come essiccanti perché assorbono facilmente l'acqua di cristallizzazione dall'aria.",
        "Il gesso (CaSO₄·2H₂O) viene riscaldato per formare il gesso da costruzione (CaSO₄·½H₂O), che si reidrata e indurisce mescolato con acqua.",
        "Il CuSO₄ anidro è usato come test per l'acqua perché diventa visibilmente blu anche in presenza di tracce d'acqua.",
      ],
      formula: "CuSO₄·5H₂O → CuSO₄ + 5H₂O  (ΔH > 0, endotermico)",
    },
    questions: {
      mcq: [
        {
          text: "Cos'è l'acqua di cristallizzazione?",
          options: [
            "Molecole d'acqua intrappolate sulla superficie dei cristalli",
            "Molecole d'acqua che formano il reticolo cristallino del ghiaccio",
            "Molecole d'acqua chimicamente incorporate nella struttura cristallina di un composto ionico",
            "Acqua prodotta quando un cristallo si dissolve in un solvente",
          ],
          correctIndex: 2,
          explanation: "L'acqua di cristallizzazione è composta da molecole d'acqua chimicamente legate all'interno della struttura cristallina di un sale ionico, facendo parte dell'unità cellulare ripetente. Non è semplice acqua superficiale — fa parte della formula chimica.",
        },
        {
          text: "Perché il CuSO₄·5H₂O diventa bianco quando viene riscaldato?",
          options: [
            "Il calore decompone il CuSO₄ in rame metallico e gas SO₃",
            "Le molecole d'acqua vengono eliminate, rimuovendo i ligandi acqua da Cu²⁺, il che elimina il colore blu",
            "L'alta temperatura ossida Cu²⁺ a Cu³⁺, che è bianco",
            "La struttura cristallina collassa e Cu²⁺ diventa incolore",
          ],
          correctIndex: 1,
          explanation: "Il colore blu del CuSO₄·5H₂O è dovuto ai complessi di coordinazione [Cu(H₂O)₄]²⁺. Il riscaldamento elimina le molecole d'acqua; senza ligandi acqua, Cu²⁺ si trova in un ambiente elettronico diverso e appare bianco.",
        },
        {
          text: "Il CuSO₄·5H₂O ha una massa molare di 249,7 g/mol e il CuSO₄ è 159,6 g/mol. Qual è la percentuale di massa dovuta all'acqua?",
          options: [
            "36,1%",
            "15,2%",
            "49,3%",
            "22,5%",
          ],
          correctIndex: 0,
          explanation: "Massa dell'acqua = 249,7 − 159,6 = 90,1 g/mol. Percentuale = (90,1/249,7) × 100 = 36,1%. Questo conferma che circa un terzo della massa del solfato di rame blu è acqua.",
        },
      ],
      discussion: [
        "Perché il CuSO₄ anidro è usato per testare la presenza di acqua? Cosa osserveresti e cosa dimostra?",
        "Il gesso (CaSO₄·2H₂O) viene riscaldato per fare il gesso da costruzione, che poi indurisce quando viene aggiunta acqua. Come si collega questo processo a ciò che hai osservato con il CuSO₄?",
        "Se lasciassi il CuSO₄ anidro bianco in una stanza umida per una notte, cosa ti aspetteresti di trovare al mattino e perché?",
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: "Acqua di cristallizzazione", pct: 40 },
        { label: "Chimica di coordinazione (colore Cu²⁺)", pct: 30 },
        { label: "Reazioni reversibili", pct: 20 },
        { label: "Stechiometria (% acqua)", pct: 10 },
      ],
      misconceptions: [
        "Gli studenti spesso pensano che il colore del CuSO₄ sia una proprietà intrinseca del rame — ma dipende interamente dai ligandi attorno a Cu²⁺.",
        "Molti pensano che l'acqua di cristallizzazione significhi che il cristallo è bagnato — ma l'acqua è chimicamente legata all'interno della struttura cristallina.",
      ],
      hook: "Il solfato di rame anidro è il test dell'acqua più semplice al mondo — metti una goccia di qualsiasi liquido sopra: se diventa blu, è presente acqua!",
      khanLinks: [
        { title: "Stati della Materia", url: "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/states-of-matter/v/states-of-matter" },
      ],
    },
    dataTable: {
      headers: ["Fase", "Massa (g)", "Colore", "Note"],
      rows: 4,
    },
    observations: [
      "Colore dei cristalli in ogni fase (prima del riscaldamento, durante, dopo il raffreddamento, dopo l'aggiunta d'acqua)",
      "Massa del campione prima e dopo il riscaldamento",
      "Massa calcolata e percentuale d'acqua persa",
    ],
    conclusion: "Indicare la massa d'acqua persa per grammo di CuSO₄·5H₂O, confrontare con il valore teorico (36,1%) e spiegare il cambio di colore reversibile.",
    ai: {
      opening: "Ciao! Sono Gali. Oggi esplori una bellissima reazione reversibile — guarda i cristalli blu diventare bianchi, poi tornare blu con l'aggiunta di acqua. Come la magia, ma è chimica!",
      keywords: {
        setup: "Riscalda delicatamente e uniformemente. Troppo calore può decomporre il CuSO₄ in CuO (nero), che non è reversibile.",
        formula: "CuSO₄·5H₂O → CuSO₄ + 5H₂O. Masse molari: 249,7 → 159,6 + 90,1. Quindi il 36,1% della massa è acqua.",
        error: "Non surriscaldare — se la capsula diventa nera, hai decomposto il CuSO₄ in CuO, non hai solo rimosso l'acqua. Usa calore delicato.",
        result: "Cristalli blu → polvere bianca riscaldando. Polvere bianca → blu aggiungendo acqua. Perdita di massa ≈ 36% della massa originale.",
        real: "Il gesso da costruzione (CaSO₄·½H₂O) indurisce mescolato con acqua perché si reidrata in gesso (CaSO₄·2H₂O) — stesso principio di questo esperimento.",
        explain: "Il colore blu proviene dalle molecole d'acqua che agiscono come ligandi attorno a Cu²⁺. Rimuovi i ligandi acqua e Cu²⁺ si trova in un ambiente diverso — nessun colore blu.",
        hook: "Il gel di silice (le bustine nelle scarpe nuove) è un essiccante — assorbe l'acqua di cristallizzazione dall'aria per mantenere i prodotti asciutti, proprio come il CuSO₄ anidro!",
        misconception: "L'acqua nel CuSO₄·5H₂O NON è umidità superficiale — fa chimicamente parte del cristallo e rimuoverla cambia completamente le proprietà del composto.",
      },
      hint: "Se la perdita di massa è inferiore al 30%, il riscaldamento potrebbe non essere completo. Continua a riscaldare finché la massa rimane costante tra le misurazioni.",
      expected: "Perdita di massa ~36% (acqua). Cambio di colore blu→bianco riscaldando. Ritorno istantaneo del colore blu quando l'acqua viene aggiunta alla polvere anidra.",
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

    patches = {103: IT_103, 108: IT_108}
    for num, it_text in patches.items():
        experiments[num] = '\n' + it_text
        print(f"  Patched exp {num}")

    # Get header
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
    print("Done — 103 and 108 patched.")

if __name__ == "__main__":
    main()

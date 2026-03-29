#!/usr/bin/env python3
"""Patch Italian chemistry file: experiments 123 and 128."""
import re, os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DST = os.path.join(BASE, "data", "chemistry.it.ts")

IT_123 = '''  {
    num: 123,
    title: "Produzione e Proprietà dell'Idrogeno",
    section: "Chimica dei Gas",
    desc: "Gli studenti fanno reagire granuli di zinco con acido cloridrico per produrre gas idrogeno, lo raccolgono per spostamento verso l'alto dell'aria e ne confermano l'identità con il test del pop cigolante.",
    setupTime: "8 min",
    duration: "20 min",
    summary: {
      whatTheyLearn: "Gli studenti imparano che i metalli sopra l'idrogeno nella serie di reattività spostano H₂ dall'acido e confermano l'idrogeno con il caratteristico pop cigolante con una fiamma.",
      instructions: [
        "Mettere granuli di zinco in un matraccio conico dotato di tappo e tubo di raccolta.",
        "Aggiungere HCl 2 mol/L e riposizionare rapidamente il tappo.",
        "Raccogliere H₂ in una provetta invertita per spostamento verso l'alto (H₂ è più leggero dell'aria).",
        "Coprire il tubo con il pollice, avvicinare a una fiamma accesa e rimuovere il pollice.",
        "Registrare il risultato del test del pop cigolante.",
      ],
      expectedOutcome: "L'idrogeno viene prodotto in modo costante. Il pop cigolante conferma che il gas è H₂. La soluzione si scalda man mano che la reazione esotermica procede.",
    },
    experiment: {
      equipment: [
        { emoji: "⚙️", name: "Granuli di zinco" },
        { emoji: "🧪", name: "Acido cloridrico (2 mol/L)" },
        { emoji: "⚗️", name: "Matraccio conico con tappo e tubo di raccolta" },
        { emoji: "🪵", name: "Stecca di legno e fiammiferi" },
        { emoji: "🌡️", name: "Termometro" },
      ],
      observationsToRecord: [
        "Velocità di produzione delle bolle dai granuli di zinco",
        "Risultato del test del pop cigolante",
        "Variazione di temperatura durante la reazione",
        "Aspetto dei granuli di zinco nel tempo",
      ],
      theoryPoints: [
        "Zn + 2HCl → ZnCl₂ + H₂ (lo zinco sposta l'idrogeno dall'acido — reazione di spostamento singolo).",
        "Lo zinco è sopra l'idrogeno nella serie di reattività e quindi può spostare H₂.",
        "H₂ è il gas meno denso (M = 2 g/mol) — deve essere raccolto per spostamento verso l'alto (tubo invertito).",
        "Pop cigolante: H₂ brucia esplosivamente con O₂ nell'aria: 2H₂ + O₂ → 2H₂O.",
      ],
      realWorldConnections: [
        "L'idrogeno verde prodotto dall'elettrolisi dell'acqua è un obiettivo principale delle politiche di energia netta zero.",
        "Le celle a combustibile a idrogeno nelle auto e negli autobus combinano H₂ con O₂ per produrre elettricità e acqua — zero emissioni allo scarico.",
        "Il disastro dell'Hindenburg (1937) fu causato dall'accensione di H₂ in un dirigibile — dimostrando le proprietà di infiammabilità dell'idrogeno.",
      ],
      formula: "Zn + 2HCl → ZnCl₂ + H₂",
    },
    questions: {
      mcq: [
        {
          text: "Perché l'idrogeno viene raccolto per spostamento verso l'alto dell'aria invece che verso il basso?",
          options: [
            "L'idrogeno reagisce con l'acqua e non può essere raccolto sull'acqua",
            "L'idrogeno è meno denso dell'aria e sale in cima a un tubo invertito",
            "L'idrogeno si dissolve in acqua e non può essere raccolto",
            "Lo spostamento verso il basso mescolerebb l'idrogeno con l'ossigeno",
          ],
          correctIndex: 1,
          explanation: "L'idrogeno (M = 2 g/mol) è molto meno denso dell'aria (M ≈ 29 g/mol). Sale e si raccoglie in cima a un tubo invertito. CO₂ (M = 44) affonda e viene raccolta per spostamento verso il basso.",
        },
        {
          text: "Cosa si osserva quando una fiamma accesa viene avvicinata a una provetta di idrogeno?",
          options: [
            "La fiamma si spegne immediatamente",
            "Brucia una fiamma blu tranquillamente",
            "Si sente un pop cigolante mentre l'idrogeno brucia rapidamente",
            "La fiamma si riaccende se stava ardendo lentamente",
          ],
          correctIndex: 2,
          explanation: "Quando H₂ si accende nell'aria, brucia rapidamente con l'O₂ circostante (2H₂ + O₂ → 2H₂O), producendo un caratteristico pop cigolante. Questo è il test di conferma standard per il gas idrogeno.",
        },
        {
          text: "Quale metallo NON reagirebbe con HCl diluito per produrre idrogeno?",
          options: ["Magnesio", "Zinco", "Ferro", "Rame"],
          correctIndex: 3,
          explanation: "Il rame è sotto l'idrogeno nella serie di reattività e non può spostare H₂ dall'acido. Solo i metalli sopra l'idrogeno (Mg, Zn, Fe, Na, ecc.) possono spostare l'idrogeno dagli acidi diluiti.",
        },
      ],
      discussion: [
        "Scrivi l'equazione ionica per la reazione dello zinco con l'acido cloridrico e identifica la variazione del numero di ossidazione dello zinco.",
        "Spiega perché il magnesio reagisce con HCl molto più velocemente dello zinco, usando la serie di reattività e la teoria delle collisioni.",
        "Discuti i vantaggi e i rischi di sicurezza dell'uso dell'idrogeno come combustibile nei trasporti, confrontandolo con la benzina e i veicoli elettrici a batteria.",
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: "Reazione metallo-acido e spostamento", pct: 35 },
        { label: "Test del pop cigolante per l'idrogeno", pct: 30 },
        { label: "Serie di reattività e posizione dell'idrogeno", pct: 25 },
        { label: "Idrogeno verde e celle a combustibile", pct: 10 },
      ],
      misconceptions: [
        "Gli studenti spesso pensano che tutti i metalli reagiscano con l'acido per produrre idrogeno — solo i metalli sopra l'idrogeno nella serie di reattività lo fanno.",
        "Molti pensano che il pop cigolante sia causato dall'ossigeno — è causato dall'idrogeno che brucia rapidamente nell'aria: 2H₂ + O₂ → 2H₂O.",
      ],
      hook: "Un'auto a celle a combustibile a idrogeno emette solo vapore acqueo dallo scarico — e il 'carburante' può essere prodotto dividendo l'acqua con energia rinnovabile. Stai producendo il carburante del futuro in un matraccio oggi!",
      khanLinks: [
        { title: "Numeri di Ossidazione", url: "https://www.khanacademy.org/science/chemistry/oxidation-reduction/oxidation-states-2/v/introduction-to-oxidation-states" },
        { title: "Tipi di Reazioni Chimiche", url: "https://www.khanacademy.org/science/chemistry/chemical-reactions-stoichiometry/types-of-chemical-reactions/v/types-of-chemical-reactions" },
      ],
    },
    dataTable: {
      headers: ["Metallo", "Concentrazione Acido (mol/L)", "Velocità Bolle", "Pop Cigolante", "Variazione Temperatura (°C)"],
      rows: 4,
    },
    observations: [
      "Registrare la velocità di produzione delle bolle dai granuli di zinco",
      "Registrare se il test del pop cigolante è positivo",
      "Registrare la temperatura all'inizio e dopo 5 minuti di reazione",
    ],
    conclusion: "Scrivere l'equazione bilanciata per la reazione di Zn con HCl. Confermare che il gas è H₂ usando il risultato del test del pop cigolante. Spiegare perché il rame non reagirebbe con HCl usando la serie di reattività.",
    ai: {
      opening: "Ciao! Sono Gali, il tuo assistente di laboratorio. Oggi produrrai gas idrogeno — l'elemento più leggero dell'universo — e lo darai fuoco con un soddisfacente pop cigolante!",
      keywords: {
        setup: "Raccogli l'idrogeno per spostamento verso l'alto (provetta invertita, senza acqua necessaria — H₂ sale). Lascia almeno 30 s di produzione di bolle prima di testare per eliminare l'aria. Testa con una fiamma accesa immediatamente dopo aver coperto il tubo con il pollice.",
        formula: "Zn + 2HCl → ZnCl₂ + H₂. Ionica: Zn(s) + 2H⁺(aq) → Zn²⁺(aq) + H₂(g). Zn è ossidato (0 → +2); H è ridotto (+1 → 0).",
        error: "Errori comuni: tubo non correttamente invertito (H₂ sfugge), test troppo rapido prima che l'aria sia eliminata, e uso del rame invece dello zinco (nessuna reazione).",
        result: "Produzione costante e vigorosa di bolle dallo zinco. Pop cigolante confermato. La soluzione si scalda durante la reazione (esotermica). I granuli di zinco si dissolvono gradualmente e la soluzione diventa incolore (ZnCl₂).",
        real: "L'auto a celle a combustibile a idrogeno Toyota Mirai si rifornisce di H₂ in 3 minuti e ha un'autonomia di 650 km. Lo scarico è pura acqua. H₂ reagisce con O₂ nella cella a combustibile per produrre elettricità — l'inverso dell'elettrolisi che produce H₂.",
        explain: "Gli atomi di zinco nel reticolo metallico hanno elettroni pronti a donare. Gli ioni H⁺ nell'HCl accettano quegli elettroni e si accoppiano per formare gas H₂. Lo zinco è ossidato (perde elettroni), gli ioni idrogeno sono ridotti (guadagnano elettroni). È una reazione redox travestita!",
        hook: "Il dirigibile Hindenburg era riempito con 200.000 m³ di idrogeno. Nel 1937 prese fuoco e bruciò in 37 secondi — ripreso dalla telecamera. Il disastro pose fine all'era dei dirigibili ad idrogeno. I moderni sistemi di sicurezza dell'idrogeno sono molto più sofisticati, rendendo H₂ non più pericoloso della benzina.",
        misconception: "Non tutti i metalli reagiscono con l'acido per produrre H₂. Rame, argento e oro sono sotto l'idrogeno nella serie di reattività — non reagiranno con acidi diluiti. Solo i metalli sopra H nella serie possono spostarlo.",
      },
      hint: "Se il pop cigolante è troppo debole, potresti avere troppa aria mescolata con l'idrogeno. Lascia la reazione andare avanti per 30 secondi per eliminare l'aria, raccogli un tubo fresco e testa di nuovo immediatamente.",
      expected: "Produzione vigorosa di bolle da zinco + HCl. Pop cigolante chiaro conferma H₂. La soluzione si scalda leggermente (esotermica). Il matraccio contiene soluzione di ZnCl₂ alla fine. Nessuna reazione se si usa rame invece di zinco.",
    },
  }'''

IT_128 = '''  {
    num: 128,
    title: "Volume Molare dell'Idrogeno",
    section: "Chimica dei Gas",
    desc: "Gli studenti raccolgono gas idrogeno sull'acqua dalla reazione di zinco con HCl, misurano il volume a temperatura e pressione ambiente e calcolano il volume molare di un gas.",
    setupTime: "10 min",
    duration: "25 min",
    summary: {
      whatTheyLearn: "Gli studenti misurano il volume di H₂ prodotto da una massa nota di zinco e usano PV = nRT per calcolare il volume molare (il volume di 1 mole di gas nelle loro condizioni di laboratorio, circa 24 L/mol a 25°C).",
      instructions: [
        "Pesare con precisione circa 0,10 g di nastro di zinco su una bilancia analitica.",
        "Far reagire lo zinco con HCl 2 mol/L in eccesso in un matraccio collegato tramite un tubo di raccolta a una siringa per gas o a un cilindro graduato invertito sull'acqua.",
        "Raccogliere tutto H₂ prodotto e registrarne il volume.",
        "Registrare la temperatura ambiente e la pressione atmosferica.",
        "Calcolare le moli di H₂ dalla massa di Zn, poi calcolare il volume molare = V/n.",
      ],
      expectedOutcome: "Volume molare ≈ 24,0 L/mol a 25°C e 1 atm. Gli studenti confrontano il loro valore sperimentale con il valore teorico calcolato da PV = nRT.",
    },
    experiment: {
      equipment: [
        { emoji: "⚙️", name: "Nastro di zinco" },
        { emoji: "🧪", name: "Acido cloridrico (2 mol/L, in eccesso)" },
        { emoji: "⚖️", name: "Bilancia analitica (±0,001 g)" },
        { emoji: "💉", name: "Siringa per gas o cilindro graduato invertito su vasca d'acqua" },
        { emoji: "📊", name: "Barometro (o valore noto di pressione atmosferica)" },
      ],
      observationsToRecord: [
        "Massa di zinco usata (g)",
        "Volume di H₂ raccolto (cm³)",
        "Temperatura ambiente (°C e K)",
        "Pressione atmosferica (kPa)",
      ],
      theoryPoints: [
        "Zn + 2HCl → ZnCl₂ + H₂: 1 mol Zn produce 1 mol H₂.",
        "n(Zn) = massa/M(Zn) = massa/65,4; n(H₂) = n(Zn).",
        "Volume molare Vm = V/n (L/mol). Teorico: Vm = RT/P = (8,314 × 298)/101325 ≈ 24,5 L/mol.",
        "PV = nRT dà Vm = RT/P; a 25°C e 1 atm, Vm ≈ 24,5 L/mol.",
      ],
      realWorldConnections: [
        "La stechiometria dei gas viene usata nei processi industriali per calcolare quanta gas viene prodotta per chilogrammo di reagente.",
        "Il processo Haber usa i volumi molari per calcolare i rapporti di alimentazione di N₂ e H₂ per la sintesi dell'ammoniaca.",
        "Il volume molare di Avogadro (22,4 L/mol a STP, 0°C) è alla base di tutti i calcoli stechiometrici in fase gassosa.",
      ],
      formula: "Zn + 2HCl → ZnCl₂ + H₂  |  Vm = RT/P  |  PV = nRT",
    },
    questions: {
      mcq: [
        {
          text: "Il volume molare di un gas a 25°C e 1 atm è approssimativamente:",
          options: ["22,4 L/mol", "24,5 L/mol", "44,8 L/mol", "11,2 L/mol"],
          correctIndex: 1,
          explanation: "A 0°C (STP), Vm = 22,4 L/mol. A 25°C (RTP), Vm = RT/P = (8,314 × 298)/101325 ≈ 24,5 L/mol. Gli studenti confondono spesso 22,4 (STP, 0°C) con il valore a temperatura ambiente di 24,5 L/mol.",
        },
        {
          text: "0,10 g di zinco reagisce completamente con HCl in eccesso. Quale volume di H₂ viene prodotto a 25°C? (M(Zn) = 65,4, Vm = 24,5 L/mol)",
          options: ["12,0 cm³", "24,5 cm³", "37,5 cm³", "49,0 cm³"],
          correctIndex: 2,
          explanation: "n(Zn) = 0,10/65,4 = 0,00153 mol. n(H₂) = 0,00153 mol. V = 0,00153 × 24,5 × 1000 = 37,5 cm³.",
        },
        {
          text: "Perché il volume misurato di H₂ è leggermente inferiore a quello previsto teoricamente quando si raccoglie sull'acqua?",
          options: [
            "Una parte dell'H₂ si dissolve nell'acqua",
            "La pressione del vapore acqueo riduce la pressione parziale di H₂ e una parte si dissolve",
            "Lo zinco non reagisce completamente",
            "L'HCl assorbe l'H₂ prima che possa essere raccolto",
          ],
          correctIndex: 1,
          explanation: "Il vapore acqueo esercita una pressione parziale nello spazio del gas raccolto, riducendo la pressione parziale di H₂. Una piccola quantità di H₂ si dissolve anche nell'acqua. Entrambi gli effetti causano un volume misurato leggermente inferiore a quello teorico.",
        },
      ],
      discussion: [
        "Spiega la differenza tra il volume molare a STP (0°C, 1 atm) e RTP (25°C, 1 atm) e calcola il rapporto tra loro.",
        "Perché è importante correggere per la pressione del vapore acqueo quando si raccoglie gas sull'acqua? Come si applicherebbe la correzione della pressione del vapore?",
        "Calcola il volume teorico di H₂ prodotto quando 1,00 g di magnesio reagisce con HCl in eccesso a 25°C. (M(Mg) = 24,3)",
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: "Volume molare da PV = nRT", pct: 35 },
        { label: "Raccolta del gas e misurazione del volume", pct: 30 },
        { label: "Calcolo stechiometrico dalla massa di Zn", pct: 25 },
        { label: "Fonti di errore (vapore acqueo)", pct: 10 },
      ],
      misconceptions: [
        "Gli studenti usano frequentemente 22,4 L/mol a temperatura ambiente — questo è corretto solo esattamente a 0°C (STP). A 25°C, il valore corretto è circa 24,5 L/mol.",
        "Molti pensano che tutti i gas abbiano diversi volumi molari — alla stessa T e P, TUTTI i gas ideali hanno lo stesso volume molare (Legge di Avogadro).",
      ],
      hook: "L'ipotesi di Avogadro (1811) — che volumi uguali di gas alla stessa T e P contengano lo stesso numero di molecole — fu ignorata per 50 anni prima di essere accettata. Ora è alla base di tutta la stechiometria dei gas. Un'idea semplice, decenni di controversia, e ora è in ogni libro di chimica!",
      khanLinks: [
        { title: "Stechiometria", url: "https://www.khanacademy.org/science/chemistry/chemical-reactions-stoichiometry/stoichiometry-tutorial/v/stoichiometry" },
        { title: "Il Numero di Avogadro", url: "https://www.khanacademy.org/science/chemistry/atomic-structure-and-properties/the-mole-and-avogadro-s-number/v/the-mole-and-avogadro-s-number" },
      ],
    },
    dataTable: {
      headers: ["Massa Zn (g)", "n(Zn) (mol)", "n(H₂) (mol)", "Volume H₂ (cm³)", "Volume Molare (L/mol)"],
      rows: 3,
    },
    observations: [
      "Registrare con precisione la massa di zinco usata",
      "Registrare il volume di H₂ raccolto alla fine della reazione",
      "Registrare la temperatura e la pressione atmosferica",
    ],
    conclusion: "Calcolare il volume molare dai tuoi dati e confrontarlo con il valore teorico di 24,5 L/mol a 25°C. Calcolare l'errore percentuale e identificare le principali fonti di discrepanza.",
    ai: {
      opening: "Ciao! Sono Gali, il tuo assistente di laboratorio. Oggi raccoglierai gas idrogeno reale e lo userai per verificare una delle costanti più fondamentali della chimica — il volume molare!",
      keywords: {
        setup: "Pesa con precisione lo zinco — è il reagente limitante. Usa HCl in eccesso (2 mol/L, 20 mL). Assicurati che non sfugga gas prima che inizi la raccolta. Lascia la reazione andare a completamento (nessun'altra bolla).",
        formula: "n(Zn) = massa/65,4. n(H₂) = n(Zn) (rapporto 1:1). Vm = V(cm³)/n × 1/1000 L/mol. Teorico: Vm = RT/P = 8,314 × T(K)/101325.",
        error: "Errori comuni: gas che sfugge prima che il tubo di raccolta sia in posizione, lettura del volume del gas prima che la reazione sia completa, e mancata correzione per la pressione del vapore acqueo nel gas raccolto.",
        result: "Volume molare sperimentale tipicamente 23–26 L/mol (±10% di 24,5). Fonti di errore: pressione del vapore acqueo, perdite di gas, temperatura del gas non esattamente a temperatura ambiente.",
        real: "L'industria del gas naturale (metano) usa i volumi molari per misurare il gas nelle condutture. Un metro cubo di metano a condizioni standard contiene un numero specifico di moli — usato per la fatturazione e i calcoli di combustione.",
        explain: "La Legge di Avogadro dice che volumi uguali di gas (alla stessa T e P) contengono lo stesso numero di molecole — indipendentemente dal tipo di gas! Quindi una volta che conosci il volume e le condizioni, conosci le moli. Ecco perché il volume molare è uno strumento così potente: tutti i gas ideali condividono lo stesso valore.",
        hook: "Una mole di qualsiasi gas a temperatura ambiente occupa circa 24,5 litri — all'incirca il volume di un grande pallone da spiaggia. Che sia idrogeno (il gas più leggero) o xenon (un gas nobile pesante), il volume molare è lo stesso. La Legge di Avogadro è una delle uguaglianze più eleganti della chimica.",
        misconception: "Non usare 22,4 L/mol per i calcoli a temperatura ambiente — è valido solo a 0°C (273 K). A 25°C (298 K), usa 24,5 L/mol. La differenza è del 9%, abbastanza per fare un errore significativo nella stechiometria dei gas.",
      },
      hint: "Se il tuo volume molare è significativamente inferiore a 24,5 L/mol, controlla le perdite di gas. Se significativamente superiore, potresti aver avuto aria nel tubo di raccolta all'inizio — purga con H₂ per 30 secondi prima di iniziare a registrare.",
      expected: "Volume molare 23–26 L/mol (±5–10% di 24,5). n(H₂) calcolato accuratamente dalla massa di Zn. Errori principali: vapore acqueo, perdite di gas, temperatura del gas raccolto.",
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
    patches = {123: IT_123, 128: IT_128}
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
    print("Done — 123 and 128 patched.")

if __name__ == "__main__":
    main()

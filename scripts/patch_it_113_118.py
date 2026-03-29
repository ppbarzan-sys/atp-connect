#!/usr/bin/env python3
"""Patch Italian chemistry file: experiments 113 and 118."""
import re, os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DST = os.path.join(BASE, "data", "chemistry.it.ts")

IT_113 = '''  {
    num: 113,
    title: "Neutralizzazione e Variazione di Temperatura",
    section: "Acidi e Basi",
    desc: "Mescolare soluzioni di HCl e NaOH e misurare l'aumento di temperatura per dimostrare che la neutralizzazione è esotermica.",
    setupTime: "5 min",
    duration: "20 min",
    summary: {
      whatTheyLearn: "Gli studenti imparano che la neutralizzazione acido-base rilascia energia termica e possono calcolare l'entalpia di neutralizzazione dai dati di variazione di temperatura.",
      instructions: [
        "Misurare 25 mL di HCl 1,0 mol/L in un bicchiere di polistirolo e registrare la temperatura iniziale.",
        "Misurare 25 mL di NaOH 1,0 mol/L e registrare la sua temperatura iniziale.",
        "Versare il NaOH nell'HCl, mescolare e registrare la temperatura massima raggiunta.",
        "Calcolare la variazione di temperatura (ΔT) e il calore rilasciato (q = mcΔT).",
        "Calcolare l'entalpia molare di neutralizzazione (ΔH).",
      ],
      expectedOutcome: "La temperatura aumenta di circa 6–7 °C, dando un'entalpia sperimentale di neutralizzazione vicina a −57 kJ/mol per una coppia acido forte–base forte.",
    },
    experiment: {
      equipment: [
        { emoji: "🧪", name: "HCl 1,0 mol/L (25 mL)" },
        { emoji: "🧪", name: "NaOH 1,0 mol/L (25 mL)" },
        { emoji: "☕", name: "Bicchiere di polistirolo (calorimetro)" },
        { emoji: "🌡️", name: "Termometro (±0,5 °C)" },
        { emoji: "📏", name: "Cilindro graduato (25 mL)" },
      ],
      observationsToRecord: [
        "Temperatura iniziale di HCl (°C)",
        "Temperatura iniziale di NaOH (°C)",
        "Temperatura massima dopo la miscelazione (°C)",
        "Variazione di temperatura ΔT (°C)",
      ],
      theoryPoints: [
        "Neutralizzazione: HCl + NaOH → NaCl + H₂O (esotermica).",
        "L'equazione ionica è: H⁺(aq) + OH⁻(aq) → H₂O(l), ΔH = −57,1 kJ/mol.",
        "Tutte le neutralizzazioni acido forte–base forte danno circa lo stesso ΔH perché la reazione netta è sempre H⁺ + OH⁻ → H₂O.",
        "Energia termica: q = mcΔT, dove m = massa totale della soluzione (g), c = 4,18 J/g/°C, ΔT = aumento di temperatura.",
      ],
      realWorldConnections: [
        "Le compresse antiacide neutralizzano l'eccesso di acido gastrico — la reazione rilascia una piccola quantità di calore nello stomaco.",
        "La neutralizzazione industriale delle acque di scarico acide deve tenere conto del rilascio di calore per evitare l'ebollizione o danni termici alle apparecchiature.",
        "La calce (Ca(OH)₂) viene aggiunta all'acqua acida dei laghi per neutralizzare gli effetti delle piogge acide — l'aumento di temperatura è trascurabile in grandi masse d'acqua.",
      ],
      formula: "q = mcΔT  |  ΔH = −q/n  |  H⁺(aq) + OH⁻(aq) → H₂O(l), ΔH = −57,1 kJ/mol",
    },
    questions: {
      mcq: [
        {
          text: "La neutralizzazione di un acido forte con una base forte è:",
          options: ["Endotermica", "Esotermica", "Né l'una né l'altra — nessuna variazione di energia", "A volte endotermica, a volte esotermica"],
          correctIndex: 1,
          explanation: "La neutralizzazione acido forte–base forte è sempre esotermica (ΔH ≈ −57 kJ/mol) perché la formazione del forte legame O–H nell'acqua rilascia energia.",
        },
        {
          text: "Se 50 mL di soluzione mista aumentano di 6,5 °C, qual è q? (c = 4,18 J/g/°C, densità = 1 g/mL)",
          options: ["209 J", "1.359 J", "2.717 J", "13.585 J"],
          correctIndex: 1,
          explanation: "q = mcΔT = 50 × 4,18 × 6,5 = 1.358,5 J ≈ 1.359 J.",
        },
        {
          text: "Perché tutte le neutralizzazioni acido forte–base forte danno circa lo stesso ΔH?",
          options: ["Producono tutte NaCl", "La reazione ionica netta è sempre H⁺ + OH⁻ → H₂O", "Tutti gli acidi forti sono uguali", "La temperatura non varia"],
          correctIndex: 1,
          explanation: "Indipendentemente dall'acido forte e dalla base specifica, gli ioni spettatori non partecipano. La reazione effettiva è sempre H⁺ + OH⁻ → H₂O, che ha un ΔH fisso di −57,1 kJ/mol.",
        },
      ],
      discussion: [
        "Perché la neutralizzazione di un acido debole con una base forte darebbe un ΔH leggermente diverso rispetto alla coppia acido forte–base forte?",
        "Quali sono le principali fonti di dispersione del calore in questo esperimento e come potresti ridurle?",
        "Spiega perché usare un bicchiere di polistirolo è meglio di un beaker di vetro per questo esperimento di calorimetria.",
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: "Reazione di neutralizzazione", pct: 35 },
        { label: "Calorimetria (q = mcΔT)", pct: 30 },
        { label: "Entalpia di neutralizzazione", pct: 25 },
        { label: "Variazioni di energia nelle reazioni", pct: 10 },
      ],
      misconceptions: [
        "Gli studenti spesso pensano che mescolare qualsiasi acido e base produca sempre una soluzione neutra — questo è vero solo quando si usano quantità stechiometriche esatte.",
        "Molti dimenticano che ΔH per la neutralizzazione è negativo (esotermica) e riportano un valore positivo.",
      ],
      hook: "Quando l'acido solforico concentrato viene mescolato con acqua, si rilascia così tanto calore che l'acqua può bollire violentemente — ecco perché si aggiunge sempre l'acido all'acqua, mai l'acqua all'acido!",
      khanLinks: [
        { title: "Titolazione Acido-Base", url: "https://www.khanacademy.org/science/chemistry/acids-and-bases-topic/titrations/v/acid-base-titration" },
        { title: "Acidi e Basi Coniugati", url: "https://www.khanacademy.org/science/chemistry/acids-and-bases-topic/acids-and-bases/v/conjugate-acids-and-bases" },
      ],
    },
    dataTable: {
      headers: ["Misurazione", "Prova 1", "Prova 2", "Prova 3", "Media"],
      rows: 5,
    },
    observations: [
      "Registrare le temperature iniziali e finali per ogni prova",
      "Annotare eventuali cambiamenti visibili (es. la soluzione risulta calda al tatto)",
      "Calcolare ΔT e q per ogni prova",
    ],
    conclusion: "Calcolare l'entalpia sperimentale di neutralizzazione e confrontarla con il valore accettato di −57,1 kJ/mol. Discutere le fonti di errore e suggerire miglioramenti.",
    ai: {
      opening: "Ciao! Sono Gali. Oggi misuri il calore rilasciato quando un acido incontra una base — la neutralizzazione è una delle reazioni più fondamentalmente importanti di tutta la chimica!",
      keywords: {
        setup: "Usa un bicchiere di polistirolo come calorimetro per ridurre al minimo la perdita di calore. Assicurati che entrambe le soluzioni partano dalla stessa temperatura. Mescola continuamente dopo la miscelazione.",
        formula: "q = mcΔT. ΔH = −q/n. Per 25 mL di 1,0 mol/L ciascuno: n = 0,025 mol. ΔT atteso ≈ 6,8 °C → q ≈ 1.423 J → ΔH ≈ −56,9 kJ/mol.",
        error: "La perdita di calore verso l'ambiente è la principale fonte di errore. Usare un coperchio sul bicchiere e mescolare rapidamente lo riduce al minimo.",
        result: "Aumento di temperatura di ~6–7 °C. ΔH calcolato ≈ −55 a −58 kJ/mol. Valore accettato: −57,1 kJ/mol.",
        real: "Le fuoriuscite di acido nei laboratori vengono neutralizzate con bicarbonato di sodio — la neutralizzazione è esotermica, quindi grandi fuoriuscite richiedono un'aggiunta attenta per evitare l'ebollizione.",
        explain: "Quando H⁺ incontra OH⁻, formano un legame O–H molto stabile nell'acqua. La formazione di questo legame rilascia 57 kJ di energia per mole — questa energia riscalda la soluzione.",
        hook: "Mescolare H₂SO₄ concentrato con acqua rilascia così tanto calore che può far bollire. Aggiungi sempre l'acido all'acqua (non l'acqua all'acido) per evitare schizzi violenti!",
        misconception: "La neutralizzazione non produce sempre pH 7. Acido forte + base debole dà un sale leggermente acido (pH < 7). Solo acido forte + base forte dà pH 7.",
      },
      hint: "Se il tuo ΔH è significativamente inferiore a 57 kJ/mol, la perdita di calore è probabilmente la causa. Prova ad aggiungere un coperchio con un foro per il termometro per ridurre il raffreddamento evaporativo.",
      expected: "ΔT ≈ 6,5–7,0 °C. ΔH calcolato ≈ −55 a −58 kJ/mol. Buon accordo con il valore accettato di −57,1 kJ/mol conferma la natura esotermica della neutralizzazione.",
    },
  }'''

IT_118 = '''  {
    num: 118,
    title: "Efficacia degli Antiacidi",
    section: "Acidi e Basi",
    desc: "Confrontare la quantità di acido che diverse compresse antiacide commerciali possono neutralizzare per determinare quale è più efficace.",
    setupTime: "5 min",
    duration: "25 min",
    summary: {
      whatTheyLearn: "Gli studenti applicano la chimica della neutralizzazione per confrontare la capacità di neutralizzazione acida di diverse marche di antiacidi usando la retrotitolazione.",
      instructions: [
        "Tritare una compressa antiacida e aggiungerla a 50 mL di HCl 0,5 mol/L (acido in eccesso).",
        "Mescolare finché l'antiacido non si sia completamente disciolto (5–10 minuti).",
        "Titolare il HCl rimanente (non reagito) con NaOH 0,1 mol/L usando l'indicatore arancio di metile.",
        "Calcolare le moli di HCl neutralizzate dall'antiacido.",
        "Ripetere per altre due marche di antiacidi e confrontare l'efficacia per grammo.",
      ],
      expectedOutcome: "Diversi antiacidi neutralizzano quantità diverse di acido. Gli antiacidi a base di carbonato di calcio tipicamente neutralizzano più acido per grammo rispetto a quelli a base di idrossido di magnesio.",
    },
    experiment: {
      equipment: [
        { emoji: "💊", name: "3 diverse marche di compresse antiacide" },
        { emoji: "🧪", name: "HCl 0,5 mol/L (50 mL per prova)" },
        { emoji: "⚗️", name: "Buretta con NaOH 0,1 mol/L" },
        { emoji: "🟠", name: "Indicatore arancio di metile" },
        { emoji: "⚖️", name: "Mortaio e pestello, bilancia elettronica" },
      ],
      observationsToRecord: [
        "Massa di ogni compressa antiacida (g)",
        "Volume di NaOH usato per neutralizzare l'HCl in eccesso (mL)",
        "Moli di HCl neutralizzate dall'antiacido",
        "Acido neutralizzato per grammo di antiacido",
      ],
      theoryPoints: [
        "CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂ — il carbonato di calcio neutralizza 2 moli di HCl per mole.",
        "Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O — l'idrossido di magnesio neutralizza anch'esso 2 moli di HCl per mole.",
        "La retrotitolazione viene usata perché le compresse antiacide si dissolvono lentamente e incompletamente con acido stechiometrico.",
        "Efficacia = moli di acido neutralizzate per grammo di compressa antiacida.",
      ],
      realWorldConnections: [
        "Gli antiacidi sono un settore multimiliardario — le formulazioni sono ottimizzate per la massima neutralizzazione con minimi effetti collaterali.",
        "Gli antiacidi all'idrossido di alluminio possono causare stitichezza; quelli all'idrossido di magnesio possono causare diarrea — molte formulazioni combinano entrambi.",
        "Gli inibitori della pompa protonica (PPI) funzionano diversamente dagli antiacidi — riducono la produzione di acido invece di neutralizzare l'acido esistente.",
      ],
      formula: "n(HCl neutralizzato) = n(HCl aggiunto) − n(HCl rimanente)  |  n(HCl rimanente) = C(NaOH) × V(NaOH)",
    },
    questions: {
      mcq: [
        {
          text: "Perché si usa la retrotitolazione invece della titolazione diretta dell'antiacido?",
          options: [
            "La titolazione diretta è troppo veloce",
            "Le compresse antiacide sono insolubili in acqua e si dissolvono lentamente — l'acido in eccesso garantisce la reazione completa",
            "Il NaOH non può neutralizzare gli antiacidi",
            "La retrotitolazione è più colorata",
          ],
          correctIndex: 1,
          explanation: "Le compresse antiacide contengono composti insolubili (CaCO₃, Mg(OH)₂) che si dissolvono lentamente. L'aggiunta di acido in eccesso garantisce la reazione completa; l'acido non reagito viene poi titolato con NaOH.",
        },
        {
          text: "Quale principio attivo antiacido neutralizza più acido per mole?",
          options: [
            "NaHCO₃ (1 mol HCl/mol)",
            "CaCO₃ (2 mol HCl/mol)",
            "Al(OH)₃ (3 mol HCl/mol)",
            "Neutralizzano tutti la stessa quantità",
          ],
          correctIndex: 2,
          explanation: "Al(OH)₃ ha 3 gruppi OH, quindi neutralizza 3 moli di HCl per mole: Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O. Il CaCO₃ ne neutralizza 2 e il NaHCO₃ solo 1.",
        },
        {
          text: "Se si aggiungono 50 mL di HCl 0,5 mol/L a un antiacido e occorrono 15 mL di NaOH 0,1 mol/L per neutralizzare l'eccesso, quante moli di HCl ha neutralizzato l'antiacido?",
          options: ["0,0015 mol", "0,0235 mol", "0,025 mol", "0,0265 mol"],
          correctIndex: 1,
          explanation: "n(HCl aggiunto) = 0,5 × 0,050 = 0,025 mol. n(HCl rimanente) = 0,1 × 0,015 = 0,0015 mol. n(HCl neutralizzato) = 0,025 − 0,0015 = 0,0235 mol.",
        },
      ],
      discussion: [
        "Perché alcuni antiacidi contengono anche simeticone (un agente antischiuma)?",
        "Spiega perché assumere troppo carbonato di calcio antiacido può effettivamente aumentare la produzione di acido gastrico (rimbalzo acido).",
        "Progetta un esperimento per verificare se gli antiacidi liquidi agiscono più velocemente delle compresse.",
      ],
    },
    overview: {
      conceptBreakdown: [
        { label: "Metodo della retrotitolazione", pct: 35 },
        { label: "Stechiometria della neutralizzazione", pct: 30 },
        { label: "Confronto di prodotti commerciali", pct: 20 },
        { label: "Chimica farmaceutica", pct: 15 },
      ],
      misconceptions: [
        "Gli studenti spesso pensano che tutti gli antiacidi siano uguali — diversi principi attivi hanno capacità di neutralizzazione molto diverse per grammo.",
        "Molti dimenticano che la retrotitolazione misura l'acido IN ECCESSO, non l'acido neutralizzato dall'antiacido — il calcolo richiede una sottrazione.",
      ],
      hook: "Gli antichi Egizi usavano pietra calcarea tritata (CaCO₃) per trattare il bruciore di stomaco oltre 4.000 anni fa — lo stesso principio attivo presente in molte compresse antiacide moderne!",
      khanLinks: [
        { title: "Acidi e Basi Coniugati", url: "https://www.khanacademy.org/science/chemistry/acids-and-bases-topic/acids-and-bases/v/conjugate-acids-and-bases" },
        { title: "Equazioni Ioniche Molecolari, Complete e Nette", url: "https://www.khanacademy.org/science/chemistry/chemical-reactions-stoichiometry/net-ionic-equations/v/molecular-complete-and-net-ionic-equations" },
      ],
    },
    dataTable: {
      headers: ["Marca Antiacido", "Massa (g)", "Titolo NaOH (mL)", "HCl Neutralizzato (mol)", "mol HCl / g antiacido"],
      rows: 4,
    },
    observations: [
      "Registrare la massa e il principio attivo di ogni antiacido",
      "Registrare il titolo NaOH per ogni retrotitolazione",
      "Calcolare l'acido neutralizzato per grammo per il confronto",
    ],
    conclusion: "Classificare gli antiacidi per efficacia (moli di acido neutralizzate per grammo). Collegare i risultati al principio attivo e alla sua stechiometria. Discutere il rapporto qualità-prezzo.",
    ai: {
      opening: "Ciao! Sono Gali. Oggi metti alla prova le compresse antiacide — quale marca neutralizza davvero più acido? La chimica incontra la scienza dei consumi!",
      keywords: {
        setup: "Trita la compressa finemente in un mortaio per accelerare la dissoluzione. Mescola la miscela acido-antiacido per almeno 5 minuti per garantire la reazione completa.",
        formula: "n(HCl neutralizzato) = n(HCl aggiunto) − n(HCl in eccesso). n(eccesso) = C(NaOH) × V(titolo NaOH).",
        error: "Assicurati che l'antiacido si sia completamente dissolto prima di titolare l'acido in eccesso. L'antiacido non dissolto dà un risultato falsamente basso.",
        result: "Tipicamente: antiacidi a base di CaCO₃ neutralizzano ~0,020 mol HCl/g. A base di Mg(OH)₂: ~0,017 mol/g. A base di NaHCO₃: ~0,012 mol/g.",
        real: "I farmacisti confrontano gli antiacidi in base alla \"capacità di neutralizzazione acida\" (ANC) — esattamente la misurazione che stai facendo oggi.",
        explain: "Più ioni idrossido o carbonato per grammo, più HCl può essere neutralizzato. Il CaCO₃ fornisce 2 mol H⁺ neutralizzati per 100 g; Mg(OH)₂ fornisce 2 mol per 58 g.",
        hook: "Rennie, Tums e Gaviscon contengono tutti carbonato di calcio — ma a dosi molto diverse. Il tuo esperimento rivela quale offre la migliore neutralizzazione per compressa.",
        misconception: "Più costoso non significa più efficace. Una compressa generica di CaCO₃ a basso costo può neutralizzare la stessa quantità di acido di una di marca premium.",
      },
      hint: "Se l'antiacido non si dissolve completamente nell'acido, riscalda la miscela delicatamente o mescola più a lungo. La dissoluzione incompleta dà risultati inaffidabili.",
      expected: "Classifica chiara degli antiacidi per efficacia per grammo. Il CaCO₃ tipicamente più efficace per grammo. Risultati di retrotitolazione entro il 5% dai valori teorici.",
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

    patches = {113: IT_113, 118: IT_118}
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
    print("Done — 113 and 118 patched.")

if __name__ == "__main__":
    main()

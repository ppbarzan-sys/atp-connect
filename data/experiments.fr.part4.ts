import { Experiment } from './experiments'

export const experimentsFrPart4: Experiment[] = [
  {
    "num": 22,
    "cardEmoji": "🤚",
    "title": "Sensibilité thermique",
    "section": "Heat",
    "desc": "Démontrer la subjectivité de la perception de la température grâce à l'expérience des trois bassines de Locke.",
    "setupTime": "3 min",
    "duration": "10 min",
    "summary": {
      "whatTheyLearn": "Les élèves constatent que la sensation thermique dépend de l'état préalable de la main et non de la température absolue — ce qui montre pourquoi nous avons besoin de thermomètres pour une mesure objective.",
      "instructions": [
        "Remplir trois bassines : gauche = eau froide (~10 °C), milieu = eau tiède (~35 °C), droite = eau chaude (~50 °C).",
        "Plonger la main gauche dans la bassine froide et la main droite dans la bassine chaude pendant 1 minute.",
        "Déplacer les deux mains dans la bassine du milieu et noter les sensations différentes."
      ],
      "expectedOutcome": "La main gauche (préalablement froide) perçoit la bassine du milieu comme chaude. La main droite (préalablement chaude) perçoit la même bassine comme froide. Les deux mains sont dans la même eau — illustrant l'adaptation sensorielle."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🫙",
          "name": "Trois bassines"
        },
        {
          "emoji": "🧊",
          "name": "Eau froide (~10 °C) et eau chaude (~50 °C)"
        },
        {
          "emoji": "💧",
          "name": "Eau tiède (~35 °C)"
        },
        {
          "emoji": "🌡️",
          "name": "Thermomètre"
        },
        {
          "emoji": "⏱️",
          "name": "Minuterie (1 min d'adaptation)"
        }
      ],
      "observationsToRecord": [
        "Sensation initiale de la main gauche dans la bassine du milieu (chaude ou froide ?)",
        "Sensation initiale de la main droite dans la bassine du milieu (chaude ou froide ?)",
        "Température de la bassine du milieu confirmée par le thermomètre"
      ],
      "theoryPoints": [
        "Les thermorécepteurs de la peau signalent la variation de température par rapport à leur état actuel.",
        "Après adaptation au froid, la même température paraît plus chaude ; après adaptation à la chaleur, elle paraît plus froide.",
        "Les thermorécepteurs s'adaptent aux stimuli prolongés — ils signalent le changement, pas la température absolue.",
        "La mesure objective de la température requiert un instrument (thermomètre) et non la sensation humaine."
      ],
      "realWorldConnections": [
        "Les piscines semblent froides à l'entrée, puis confortables après quelques minutes (adaptation).",
        "Manger des aliments très épicés désensibilise aux épices suivantes.",
        "John Locke (1689) a utilisé cette expérience pour soutenir que les qualités secondaires ne résident pas dans les objets mais dans le percepteur."
      ],
      "formula": "Qualitatif uniquement — pas de formule. T_perçue ≠ T_réelle (perception subjective)."
    },
    "questions": {
      "mcq": [
        {
          "text": "Pourquoi la bassine du milieu semble-t-elle chaude pour une main et froide pour l'autre simultanément ?",
          "options": [
            "Les températures de l'eau sont différentes pour chaque main",
            "Les thermorécepteurs signalent le changement relatif, pas la température absolue",
            "L'une des mains est plus sèche",
            "La bassine n'est pas bien mélangée"
          ],
          "correctIndex": 1,
          "explanation": "Les thermorécepteurs répondent à la variation de température par rapport à leur état adapté. La main préalablement refroidie perçoit un réchauffement ; la main préalablement chauffée perçoit un refroidissement."
        },
        {
          "text": "Que démontre cette expérience sur la perception humaine de la température ?",
          "options": [
            "Les humains peuvent mesurer la température avec précision",
            "La perception de la température est subjective et relative",
            "L'eau tiède est ressentie de la même façon par tout le monde",
            "L'eau froide semble toujours plus chaude qu'elle ne l'est"
          ],
          "correctIndex": 1,
          "explanation": "L'expérience montre que la sensation thermique est relative (dépend de l'adaptation préalable) et non absolue — d'où la nécessité des thermomètres."
        },
        {
          "text": "Cette expérience a été décrite par quel philosophe ?",
          "options": [
            "Isaac Newton",
            "Galileo Galilei",
            "John Locke",
            "René Descartes"
          ],
          "correctIndex": 2,
          "explanation": "John Locke a décrit cette expérience dans son « Essai sur l'entendement humain » (1689) pour illustrer la subjectivité de la perception sensorielle."
        }
      ],
      "discussion": [
        "Pourquoi le toucher humain est-il une méthode peu fiable pour mesurer la température ?",
        "Que signifie « adaptation sensorielle » et comment explique-t-elle les résultats ?",
        "Comment cette expérience justifie-t-elle le recours aux thermomètres en science ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Adaptation sensorielle des thermorécepteurs",
          "pct": 35
        },
        {
          "label": "Mesure subjective vs. objective",
          "pct": 35
        },
        {
          "label": "Contexte historique (Locke)",
          "pct": 15
        },
        {
          "label": "Nécessité des thermomètres",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves pensent que les deux bassines sont à des températures différentes ; l'illusion provient des mains, pas de l'eau.",
        "Beaucoup croient que le toucher est un indicateur de température fiable ; cette expérience le réfute.",
        "Confondre adaptation et désensibilisation ; les thermorécepteurs fonctionnent toujours, ils déplacent simplement leur référence."
      ],
      "hook": "Pouvez-vous faire confiance à vos mains pour indiquer la température ? Plongez l'une dans de l'eau glacée et l'autre dans de l'eau chaude pendant une minute — puis mettez les deux dans la même eau tiède. L'une vous semble chaude, l'autre froide. Vos sens vous mentent !",
      "khanLinks": [
        {
          "title": "Température et thermomètres",
          "url": "https://www.khanacademy.org/science/physics/thermodynamics"
        },
        {
          "title": "Thermodynamique",
          "url": "https://www.khanacademy.org/science/physics/thermodynamics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Main",
        "Bassine de pré-adaptation",
        "Sensation dans la bassine du milieu",
        "T réelle (°C)"
      ],
      "rows": 2
    },
    "observations": [
      "Décrire la sensation ressentie par chaque main indépendamment.",
      "Confirmer la température de la bassine du milieu avec un thermomètre.",
      "Noter combien de temps persiste la différence de perception."
    ],
    "conclusion": "L'expérience de Locke confirmée : les deux mains dans la même eau (35 °C) ont ressenti des températures différentes en raison de l'adaptation thermique préalable. La main préalablement refroidie a perçu de la chaleur ; la main préalablement chauffée a perçu du froid. Cela démontre que le toucher humain n'est pas un thermomètre fiable.",
    "ai": {
      "opening": "Vos mains sont de piètres thermomètres ! Interrogez-moi sur l'adaptation sensorielle, l'expérience de Locke ou pourquoi nous avons besoin de vrais thermomètres.",
      "keywords": {
        "setup": "trois bassines|froid|tiède|chaud|adaptation",
        "formula": "qualitatif|pas de formule|perception subjective",
        "error": "adaptation trop courte|bassines trop proches en température",
        "question": "sensation|adaptation|thermorécepteur|Locke|subjectif|objectif",
        "real": "piscine|nourriture épicée|nécessité du thermomètre"
      },
      "hint": "Les deux mains sont dans la MÊME eau mais ressentent des températures différentes. Les thermorécepteurs signalent le CHANGEMENT par rapport à l'état adapté, pas la température absolue.",
      "expected": "Main gauche (adaptée au froid) : la bassine du milieu semble chaude. Main droite (adaptée au chaud) : la bassine du milieu semble froide. Même eau, sensations différentes."
    }
  },
  {
    "num": 23,
    "cardEmoji": "🫧",
    "title": "Vase de Franklin",
    "section": "Heat",
    "desc": "Observer le vase de Franklin (jouet de Franklin) pour comprendre comment la pression réduite abaisse le point d'ébullition d'un liquide.",
    "setupTime": "3 min",
    "duration": "10 min",
    "summary": {
      "whatTheyLearn": "Les élèves observent un liquide coloré bouillir à température ambiante à l'intérieur d'un récipient en verre scellé à basse pression, établissant le lien entre pression réduite et point d'ébullition plus bas.",
      "instructions": [
        "Tenir l'un des bulbes du vase de Franklin dans la main pour le réchauffer légèrement.",
        "Observer le liquide qui bouillonne et se déplace vers l'autre bulbe (plus froid).",
        "Enregistrer les observations et expliquer en utilisant les concepts de pression de vapeur."
      ],
      "expectedOutcome": "Le réchauffement d'un bulbe provoque l'ébullition du liquide à température ambiante (grâce à la pression réduite à l'intérieur), envoyant des bulles et du liquide vers le bulbe froid. En lâchant le bulbe, l'ébullition s'arrête."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔬",
          "name": "Vase de Franklin (jouet de Franklin)"
        },
        {
          "emoji": "🤲",
          "name": "Mains (source de chaleur)"
        },
        {
          "emoji": "🌡️",
          "name": "Thermomètre (optionnel, pour confirmer la température ambiante)"
        }
      ],
      "observationsToRecord": [
        "Comportement du liquide lorsque le bulbe est tenu chaud",
        "Direction du déplacement du liquide",
        "Si l'ébullition s'arrête lorsque le bulbe est relâché"
      ],
      "theoryPoints": [
        "L'ébullition se produit lorsque la pression de vapeur est égale à la pression ambiante.",
        "Le vase de Franklin scellé contient un quasi-vide ; très faible pression interne.",
        "Une légère augmentation de température → la pression de vapeur dépasse la pression ambiante réduite → ébullition à basse température.",
        "Benjamin Franklin a inventé cet objet comme démonstration des principes de pression de vapeur."
      ],
      "realWorldConnections": [
        "Les autocuiseurs cuisent plus vite en augmentant la pression → point d'ébullition plus élevé.",
        "En haute altitude (pression plus faible), l'eau bout en dessous de 100 °C — les aliments cuisent plus lentement.",
        "La distillation sous vide purifie les substances sensibles à la chaleur en les faisant bouillir à basse pression."
      ],
      "formula": "Le point d'ébullition diminue lorsque la pression diminue (relation de Clausius-Clapeyron)."
    },
    "questions": {
      "mcq": [
        {
          "text": "Pourquoi le liquide du vase de Franklin bout-il à température ambiante ?",
          "options": [
            "Le liquide a une très haute pression de vapeur",
            "La pression interne est bien inférieure à la pression atmosphérique",
            "Le verre conduit la chaleur très efficacement",
            "Le colorant abaisse le point d'ébullition"
          ],
          "correctIndex": 1,
          "explanation": "Le vase de Franklin contient un quasi-vide. Même une légère augmentation de température élève la pression de vapeur au-dessus de la très faible pression interne, provoquant l'ébullition."
        },
        {
          "text": "Au sommet de l'Everest (pression ~33 kPa), l'eau bout approximativement à :",
          "options": [
            "100 °C",
            "80 °C",
            "70 °C",
            "50 °C"
          ],
          "correctIndex": 2,
          "explanation": "À ~33 kPa (1/3 de la pression atmosphérique), l'eau bout à environ 70 °C."
        },
        {
          "text": "Un autocuiseur élève le point d'ébullition de l'eau à 120 °C. Cela signifie que les aliments cuisent :",
          "options": [
            "Plus lentement qu'à la normale",
            "À la même vitesse",
            "Plus vite qu'à la normale",
            "Seulement lorsque le couvercle est retiré"
          ],
          "correctIndex": 2,
          "explanation": "Une température plus élevée accélère les réactions chimiques (cuisson), donc les aliments cuisent plus vite dans un autocuiseur."
        }
      ],
      "discussion": [
        "Expliquer pourquoi l'eau bout à une température plus basse en montagne qu'au niveau de la mer.",
        "Comment un autocuiseur utilise-t-il le principe inverse de celui du vase de Franklin ?",
        "Pourquoi la distillation sous vide est-elle utile pour purifier des composés sensibles à la chaleur ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Concept de pression de vapeur",
          "pct": 30
        },
        {
          "label": "Relation point d'ébullition / pression",
          "pct": 35
        },
        {
          "label": "Mécanisme du vase de Franklin",
          "pct": 20
        },
        {
          "label": "Liens réels pression-ébullition",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves pensent que l'ébullition nécessite toujours 100 °C ; elle dépend de la pression.",
        "Beaucoup croient que le liquide du vase de Franklin est spécial ; c'est de l'eau colorée ordinaire sous quasi-vide.",
        "Confondre évaporation (processus de surface) et ébullition (processus en volume dans tout le liquide)."
      ],
      "hook": "Benjamin Franklin possédait un jouet qui faisait bouillir de l'eau rien qu'avec la chaleur de sa main. Pas de feu, pas de plaque chauffante — juste une basse pression. Ce même principe explique pourquoi cuisiner en altitude est si frustrant !",
      "khanLinks": [
        {
          "title": "États de la matière",
          "url": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/states-of-matter/v/states-of-matter"
        },
        {
          "title": "Changements de phase",
          "url": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Observation",
        "Description"
      ],
      "rows": 4
    },
    "observations": [
      "Décrire ce qui se passe immédiatement lorsque vous tenez le bulbe.",
      "Noter la direction du déplacement du liquide et des bulles.",
      "Observer ce qui se passe lorsque vous lâchez le bulbe."
    ],
    "conclusion": "Le vase de Franklin démontre que le point d'ébullition diminue avec la pression. Le quasi-vide intérieur permet qu'un réchauffement à température ambiante (~5 °C au-dessus de l'ambiant) déclenche l'ébullition. Cela confirme la relation entre pression de vapeur et point d'ébullition.",
    "ai": {
      "opening": "Bouillir à température ambiante ? C'est possible avec une pression suffisamment basse ! Interrogez-moi sur la pression de vapeur, le vase de Franklin ou les autocuiseurs.",
      "keywords": {
        "setup": "vase de Franklin|Franklin|vide|bulbe chaud",
        "formula": "ébullition quand P_vapeur = P_ambiante|Clausius-Clapeyron",
        "error": "casser le verre|appuyer trop fort|trop réchauffer",
        "question": "point d'ébullition|pression|pression de vapeur|vase de Franklin|altitude",
        "real": "autocuiseur|cuisson en altitude|distillation sous vide"
      },
      "hint": "L'ébullition survient lorsque la pression de vapeur est égale à la pression ambiante. Basse pression (vase de Franklin) → point d'ébullition bas. Haute pression (autocuiseur) → point d'ébullition élevé.",
      "expected": "Tenir le bulbe → le liquide bouillonne et s'écoule vers le côté froid. Relâcher → l'ébullition s'arrête. Ébullition à ~25 °C grâce au quasi-vide intérieur."
    }
  },
  {
    "num": 24,
    "cardEmoji": "⏱️",
    "title": "Constante de temps du thermomètre",
    "section": "Heat",
    "desc": "Mesurer la rapidité avec laquelle un thermomètre répond à un échelon de température et déterminer sa constante de temps τ.",
    "setupTime": "3 min",
    "duration": "10 min",
    "summary": {
      "whatTheyLearn": "Les élèves observent l'approche exponentielle vers la température d'équilibre et comprennent qu'un thermomètre présente un retard de réponse caractérisé par la constante de temps τ.",
      "instructions": [
        "Relever la valeur du thermomètre dans l'air (T₀ ≈ 25 °C).",
        "Le plonger dans de l'eau chaude (~60 °C) et relever T toutes les 2–5 secondes.",
        "Tracer T en fonction de t et identifier τ (temps pour atteindre 63 % de l'échelon)."
      ],
      "expectedOutcome": "T = [25, 39, 51, 60] °C aux instants t = [0, 5, 8, 10] s. Montée exponentielle : T(t) = T_f − (T_f − T₀)e^(−t/τ)."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🌡️",
          "name": "Thermomètre à mercure ou à alcool"
        },
        {
          "emoji": "☕",
          "name": "Bécher d'eau chaude (~60 °C)"
        },
        {
          "emoji": "⏱️",
          "name": "Chronomètre"
        },
        {
          "emoji": "📝",
          "name": "Papier millimétré"
        }
      ],
      "observationsToRecord": [
        "T₀ initial (température de l'air)",
        "Température T à t = 0, 5, 8, 10 s après la plongée",
        "Température d'équilibre finale T_f"
      ],
      "theoryPoints": [
        "T(t) = T_f − (T_f − T₀)e^(−t/τ) : approche exponentielle vers l'équilibre.",
        "Constante de temps τ : temps pour atteindre (1 − 1/e) ≈ 63 % de l'échelon final.",
        "τ plus petit → réponse plus rapide → thermomètre plus réactif.",
        "La masse thermique du bulbe du thermomètre détermine τ."
      ],
      "realWorldConnections": [
        "Les thermomètres médicaux doivent avoir un τ faible pour donner des lectures rapides.",
        "Les capteurs de température industriels sont conçus avec un τ court pour le contrôle de processus.",
        "Les thermomètres des stations météo utilisent des écrans contre le rayonnement solaire pour éviter les artéfacts de chauffage."
      ],
      "formula": "T(t) = T_f − (T_f − T₀)e^(−t/τ)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Un thermomètre a T₀ = 25 °C et T_f = 65 °C. Après la constante de temps τ, il indique approximativement :",
          "options": [
            "65 °C",
            "50 °C",
            "50,2 °C",
            "45 °C"
          ],
          "correctIndex": 2,
          "explanation": "À t = τ : T = T_f − (T_f − T₀)/e = 65 − 40/2,718 = 65 − 14,7 = 50,3 °C."
        },
        {
          "text": "Un thermomètre à réponse plus rapide possède une :",
          "options": [
            "Constante de temps τ plus grande",
            "Constante de temps τ plus petite",
            "Masse thermique plus élevée",
            "Paroi de bulbe plus épaisse"
          ],
          "correctIndex": 1,
          "explanation": "Un τ plus petit signifie que le thermomètre atteint l'équilibre plus rapidement."
        },
        {
          "text": "La montée en température d'un thermomètre plongé dans de l'eau chaude suit :",
          "options": [
            "Une augmentation linéaire",
            "Une approche exponentielle vers la température finale",
            "Un saut soudain en échelon",
            "Une oscillation sinusoïdale"
          ],
          "correctIndex": 1,
          "explanation": "La réponse suit T(t) = T_f − (T_f − T₀)e^(−t/τ), une approche exponentielle."
        }
      ],
      "discussion": [
        "Pourquoi un thermomètre avec un bulbe plus grand répond-il plus lentement ?",
        "Comment détermineriez-vous la constante de temps τ à partir d'un graphe T en fonction de t ?",
        "Pourquoi une constante de temps courte est-elle importante pour les thermomètres médicaux ou industriels ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Réponse exponentielle T(t)",
          "pct": 35
        },
        {
          "label": "Définition de la constante de temps τ",
          "pct": 30
        },
        {
          "label": "Effet de la masse thermique",
          "pct": 20
        },
        {
          "label": "Implications pratiques",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves s'attendent à une lecture instantanée ; tous les thermomètres ont un retard dû à leur masse thermique.",
        "Beaucoup pensent que τ est le temps pour atteindre la température finale ; c'est le temps pour atteindre 63 % de l'échelon.",
        "Supposer que tous les thermomètres ont le même τ ; les thermomètres numériques et à mercure diffèrent significativement."
      ],
      "hook": "Pourquoi le thermomètre d'un médecin prend-il 60 secondes sous votre langue ? Parce que le bulbe en verre et le mercure ont une masse thermique — ils ont besoin de temps pour s'équilibrer avec la température de votre corps !",
      "khanLinks": [
        {
          "title": "Chaleur spécifique et transfert de chaleur",
          "url": "https://www.khanacademy.org/science/chemistry/thermodynamics-chemistry/internal-energy-sal/v/specific-heat-heat-of-fusion-and-vaporization"
        },
        {
          "title": "Thermodynamique (Physique)",
          "url": "https://www.khanacademy.org/science/physics/thermodynamics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Temps t (s)",
        "Température T (°C)",
        "T_f − T (°C)",
        "ln(T_f − T)"
      ],
      "rows": 6
    },
    "observations": [
      "Relever T à t = 0, 5, 8, 10 s après la plongée.",
      "Tracer T en fonction de t et identifier la forme exponentielle.",
      "Estimer τ comme le temps auquel ΔT atteint 63 % de l'échelon total."
    ],
    "conclusion": "La réponse du thermomètre a suivi T(t) = T_f − (T_f − T₀)e^(−t/τ). Données : T = [25, 39, 51, 60] °C à t = [0, 5, 8, 10] s. Constante de temps τ ≈ 5–8 s. Les thermomètres à bulbe plus petit répondent plus rapidement.",
    "ai": {
      "opening": "Tout thermomètre a un retard ! Interrogez-moi sur la constante de temps, la réponse exponentielle ou comment mesurer τ à partir de votre graphe.",
      "keywords": {
        "setup": "thermomètre|eau chaude|chronomètre|plonger|constante de temps",
        "formula": "T(t) = T_f − (T_f−T₀)e^(−t/τ)|τ = constante de temps",
        "error": "retard de lecture|déplacement du thermomètre|courants d'air",
        "question": "constante de temps|exponentiel|masse thermique|réponse|τ",
        "real": "thermomètre médical|capteur industriel|station météo"
      },
      "hint": "T(t) = T_f − (T_f − T₀)e^(−t/τ). À t=τ, le thermomètre atteint 63 % de l'échelon. τ sur le graphe : quand ΔT = 0,63×(T_f − T₀).",
      "expected": "T = [25, 39, 51, 60] °C à t = [0, 5, 8, 10] s. Montée exponentielle. τ ≈ 5–8 s."
    }
  },
  {
    "num": 25,
    "cardEmoji": "🌡️",
    "title": "Le manomètre",
    "section": "Mechanics",
    "desc": "Utiliser un manomètre en U pour mesurer qualitativement les différences de pression des gaz en observant les différences de niveau de liquide.",
    "setupTime": "5 min",
    "duration": "10 min",
    "summary": {
      "whatTheyLearn": "Les élèves constatent qu'un manomètre convertit une différence de pression en une différence de hauteur de liquide mesurable Δh, via p = ρgΔh.",
      "instructions": [
        "Remplir le tube en U d'eau colorée jusqu'au milieu des deux branches.",
        "Connecter une branche à une source de gaz (poumons, pompe ou flacon scellé).",
        "Appliquer une pression et enregistrer la différence de hauteur Δh entre les deux branches."
      ],
      "expectedOutcome": "Une pression de gaz plus élevée pousse le liquide vers le bas dans la branche connectée et vers le haut dans la branche ouverte. Δh est proportionnel à la différence de pression : Δp = ρgΔh."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🧪",
          "name": "Manomètre en tube en U"
        },
        {
          "emoji": "💧",
          "name": "Eau colorée"
        },
        {
          "emoji": "📏",
          "name": "Règle"
        },
        {
          "emoji": "🫁",
          "name": "Tube en caoutchouc (connecté au souffle ou à la pompe)"
        },
        {
          "emoji": "🖐️",
          "name": "Pompe à main ou seringue"
        }
      ],
      "observationsToRecord": [
        "Niveau initial dans les deux branches (égal)",
        "Hauteur dans la branche connectée h₁ (cm) lors de l'application de la pression",
        "Hauteur dans la branche ouverte h₂ (cm)",
        "Différence de hauteur Δh = h₂ − h₁ (cm)"
      ],
      "theoryPoints": [
        "Le manomètre en U mesure la pression relative (pression au-dessus de l'atmosphérique).",
        "Δp = ρ_liquide × g × Δh.",
        "Souffler dedans augmente la pression → le liquide descend dans cette branche, monte dans l'autre.",
        "Aspirer réduit la pression → le liquide monte dans la branche connectée."
      ],
      "realWorldConnections": [
        "Les tensiomètres sont des manomètres électroniques mesurant la pression au-dessus de l'atmosphérique.",
        "Les manomètres différentiels dans les systèmes de climatisation utilisent les principes du manomètre.",
        "Les baromètres météorologiques sont un type de manomètre utilisant le mercure."
      ],
      "formula": "Δp = ρ g Δh"
    },
    "questions": {
      "mcq": [
        {
          "text": "Un manomètre en U indique Δh = 10 cm d'eau. Quelle est la pression relative ?",
          "options": [
            "98 Pa",
            "980 Pa",
            "9800 Pa",
            "9,8 Pa"
          ],
          "correctIndex": 1,
          "explanation": "Δp = ρgΔh = 1000 × 9,81 × 0,10 = 981 Pa ≈ 980 Pa."
        },
        {
          "text": "Lorsque vous soufflez dans une branche du tube en U, le liquide dans cette branche :",
          "options": [
            "Monte",
            "Reste au même niveau",
            "Descend",
            "Déborde"
          ],
          "correctIndex": 2,
          "explanation": "Souffler augmente la pression dans cette branche, poussant le liquide vers le bas du côté de l'entrée et vers le haut du côté ouvert."
        },
        {
          "text": "Un manomètre mesure :",
          "options": [
            "La pression absolue",
            "La pression relative (par rapport à l'atmosphère)",
            "La température",
            "Le débit"
          ],
          "correctIndex": 1,
          "explanation": "Un manomètre avec une branche ouverte à l'atmosphère mesure la pression relative : la différence par rapport à la pression atmosphérique."
        }
      ],
      "discussion": [
        "Expliquer pourquoi le liquide monte dans la branche ouverte lorsqu'on souffle dans la branche connectée.",
        "Comment la densité du liquide manométrique affecte-t-elle la sensibilité de la lecture ?",
        "Quel liquide utiliseriez-vous pour mesurer de très faibles différences de pression, et pourquoi ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Définition de la pression relative",
          "pct": 30
        },
        {
          "label": "Dérivation de Δp = ρgΔh",
          "pct": 35
        },
        {
          "label": "Fonctionnement du tube en U",
          "pct": 25
        },
        {
          "label": "Choix du liquide manométrique",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Les élèves pensent que le manomètre lit la pression absolue ; il lit la pression relative (par rapport à l'atmosphère).",
        "Beaucoup supposent que souffler fait monter le liquide dans la branche connectée ; en réalité, cela le fait descendre.",
        "Penser qu'un liquide plus dense est toujours meilleur ; un liquide plus dense est moins sensible aux petites pressions."
      ],
      "hook": "Soufflez doucement dans un tube en U d'eau colorée et regardez une branche descendre tandis que l'autre monte. Votre souffle peut être mesuré en pascals !",
      "khanLinks": [
        {
          "title": "Introduction à la pression",
          "url": "https://www.khanacademy.org/science/physics/fluids/fluid-statics/v/introduction-to-pressure"
        },
        {
          "title": "Statique des fluides",
          "url": "https://www.khanacademy.org/science/physics/fluids/fluid-statics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Source",
        "h₁ branche connectée (cm)",
        "h₂ branche ouverte (cm)",
        "Δh (cm)",
        "Pression relative (Pa)"
      ],
      "rows": 4
    },
    "observations": [
      "Noter la direction du déplacement du liquide lorsque la pression est appliquée puis relâchée.",
      "Mesurer Δh avec précision à l'aide de la règle.",
      "Observer comment différentes pressions de souffle donnent différentes valeurs de Δh."
    ],
    "conclusion": "Le manomètre en U convertit la différence de pression en différence de hauteur : Δp = ρgΔh. Pour Δh = 10 cm d'eau : Δp ≈ 980 Pa. Souffler pousse le liquide vers le bas dans la branche connectée, vers le haut dans la branche ouverte.",
    "ai": {
      "opening": "Les manomètres transforment la pression en différences de hauteur visibles ! Interrogez-moi sur Δp = ρgΔh, la pression relative ou comment lire l'appareil.",
      "keywords": {
        "setup": "tube en U|manomètre|eau colorée|souffler|pompe",
        "formula": "Δp = ρgΔh|pression relative",
        "error": "bulles d'air|lecture depuis la mauvaise référence|densité du liquide incorrecte",
        "question": "manomètre|pression relative|différence de hauteur|tube en U",
        "real": "tension artérielle|climatisation|baromètre"
      },
      "hint": "Δp = ρgΔh. Pour l'eau (ρ=1000 kg/m³) : Δp(Pa) = 9810 × Δh(m). Le manomètre mesure la pression RELATIVE.",
      "expected": "Δh = 10 cm → Δp ≈ 980 Pa. Souffler → branche connectée descend, branche ouverte monte."
    }
  },
  {
    "num": 26,
    "cardEmoji": "🎵",
    "title": "Utilisation des diapasons",
    "section": "Acoustics",
    "desc": "Trouver la longueur de résonance d'une colonne d'air pour un diapason de 440 Hz et déterminer la vitesse du son.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves localisent le premier point de résonance d'une colonne d'air (tube fermé) et utilisent v = fλ pour calculer la vitesse du son.",
      "instructions": [
        "Frapper le diapason de 440 Hz (La₃) et le tenir au-dessus de l'extrémité ouverte d'un tube dans l'eau.",
        "Faire coulisser le tube vers le haut et monter le niveau d'eau jusqu'à trouver la résonance la plus forte.",
        "Enregistrer la longueur de résonance L_res et calculer λ = 4L_res, puis v = fλ."
      ],
      "expectedOutcome": "f = 440 Hz, λ ≈ 78 cm → longueur de tube à la résonance L ≈ 78/4 ≈ 19,5 cm (mesurée ≈ 17,3 cm). v = 440 × 0,78 ≈ 343 m/s."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🎵",
          "name": "Diapason 440 Hz (La₃)"
        },
        {
          "emoji": "🧪",
          "name": "Tube à résonance (longueur réglable)"
        },
        {
          "emoji": "💧",
          "name": "Réservoir d'eau"
        },
        {
          "emoji": "📏",
          "name": "Règle"
        },
        {
          "emoji": "🔨",
          "name": "Marteau en caoutchouc (pour frapper le diapason)"
        }
      ],
      "observationsToRecord": [
        "Fréquence du diapason f (Hz)",
        "Longueur de résonance L_res (m)",
        "Longueur d'onde λ = 4L_res (m)",
        "Vitesse du son v = fλ (m/s)"
      ],
      "theoryPoints": [
        "Dans un tube fermé, la résonance se produit lorsque L = λ/4 (premier harmonique : nœud à l'extrémité fermée, ventre à l'extrémité ouverte).",
        "Vitesse du son : v = fλ.",
        "v ≈ 331 + 0,6T m/s (T en °C) ; à 20 °C, v ≈ 343 m/s.",
        "La correction d'embouchure : le ventre se situe légèrement au-delà de l'extrémité du tube ; L_réelle < λ/4."
      ],
      "realWorldConnections": [
        "Les instruments à vent (flûte, trompette) utilisent des colonnes d'air en résonance.",
        "Les tuyaux d'orgue sont accordés en ajustant leur longueur de résonance.",
        "Le sonar et l'imagerie ultrasonore utilisent la propagation des ondes sonores."
      ],
      "formula": "v = fλ   |   Première résonance (tube fermé) : L = λ/4   |   v ≈ 331 + 0,6T (m/s)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Un diapason de 440 Hz résonne avec une colonne d'air de 17,3 cm (extrémité fermée). Quelle est λ ?",
          "options": [
            "34,6 cm",
            "69,2 cm",
            "17,3 cm",
            "8,65 cm"
          ],
          "correctIndex": 1,
          "explanation": "Pour la première résonance dans un tube fermé : L = λ/4 → λ = 4L = 4 × 0,173 = 0,692 m = 69,2 cm. (Note : λ théorique ≈ 78 cm ; 17,3 cm est mesuré avec correction d'embouchure.)"
        },
        {
          "text": "La vitesse du son à 20 °C est approximativement :",
          "options": [
            "200 m/s",
            "343 m/s",
            "500 m/s",
            "1500 m/s"
          ],
          "correctIndex": 1,
          "explanation": "v ≈ 331 + 0,6 × 20 = 331 + 12 = 343 m/s."
        },
        {
          "text": "Pourquoi la longueur de résonance mesurée est-elle légèrement inférieure à λ/4 ?",
          "options": [
            "La règle est incorrecte",
            "Correction d'embouchure : le ventre s'étend légèrement au-delà de l'ouverture du tube",
            "Le niveau d'eau est trop élevé",
            "Frottement dans le tube"
          ],
          "correctIndex": 1,
          "explanation": "Le ventre de déplacement ne se trouve pas exactement à l'extrémité ouverte du tube mais légèrement au-delà — la « correction d'embouchure » rend la longueur effective légèrement plus grande que la longueur mesurée."
        }
      ],
      "discussion": [
        "Expliquer pourquoi la condition de résonance dans un tube fermé est L = λ/4 et non λ/2.",
        "Comment mesureriez-vous v à une température ambiante différente ? Quelle correction appliquez-vous ?",
        "Pourquoi les instruments de musique se désaccordent-ils légèrement par temps froid ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "v = fλ",
          "pct": 30
        },
        {
          "label": "Résonance tube fermé L=λ/4",
          "pct": 30
        },
        {
          "label": "Correction d'embouchure",
          "pct": 20
        },
        {
          "label": "Dépendance de v en température",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Les élèves s'attendent à ce que la longueur de résonance soit égale à λ/2 (condition tube ouvert) ; le tube fermé utilise λ/4.",
        "Beaucoup oublient la correction d'embouchure, prédisant λ/4 = 19,5 cm alors qu'ils mesurent 17,3 cm.",
        "Supposer que la vitesse du son est toujours 340 m/s quelle que soit la température."
      ],
      "hook": "Frappez un diapason et tenez-le au-dessus d'un tube rempli d'eau. Montez le tube lentement — soudain, le son RETENTIT par résonance ! Vous venez de mesurer la vitesse du son grâce à une colonne d'air chantante.",
      "khanLinks": [
        {
          "title": "Introduction au son",
          "url": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/sound-topic/v/introduction-to-sound"
        },
        {
          "title": "Ondes mécaniques et son",
          "url": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Fréquence f (Hz)",
        "Longueur de résonance L (m)",
        "Longueur d'onde λ = 4L (m)",
        "v = fλ (m/s)"
      ],
      "rows": 3
    },
    "observations": [
      "Enregistrer la longueur du tube au maximum de sonorité (résonance).",
      "Répéter pour deux ou trois essais et calculer la moyenne de L_res.",
      "Calculer v = f × 4L et comparer avec la valeur attendue de 343 m/s."
    ],
    "conclusion": "Diapason f = 440 Hz : résonance à L ≈ 17,3 cm → λ = 4 × 0,173 = 0,692 m (avec correction d'embouchure). λ théorique = v/f = 343/440 ≈ 0,780 m → L_théorique = 0,195 m. Vitesse du son v ≈ 340 m/s confirmée.",
    "ai": {
      "opening": "La résonance sonore, c'est de la physique magnifique ! Interrogez-moi sur v=fλ, la résonance du tube fermé, la correction d'embouchure ou la vitesse du son.",
      "keywords": {
        "setup": "diapason|tube à résonance|eau|440 Hz|colonne d'air",
        "formula": "v = fλ|L = λ/4|v = 331 + 0,6T",
        "error": "correction d'embouchure|ne pas frapper le diapason assez fort|niveau d'eau incorrect",
        "question": "résonance|tube fermé|longueur d'onde|vitesse du son|fréquence",
        "real": "instrument à vent|tuyau d'orgue|sonar"
      },
      "hint": "Première résonance du tube fermé : L = λ/4. Donc λ = 4L. Puis v = fλ. v attendue ≈ 343 m/s à 20 °C.",
      "expected": "f=440 Hz, L_mesuré=17,3 cm → λ=4×0,173=0,692 m → v=440×0,78≈343 m/s (en utilisant λ théorique)."
    }
  },
  {
    "num": 27,
    "cardEmoji": "🔔",
    "title": "Le phénomène de résonance",
    "section": "Acoustics",
    "desc": "Démontrer la résonance sympathique entre deux diapasons identiques sur des caisses de résonance se faisant face.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves observent que frapper un diapason provoque la vibration d'un diapason identique et son émission de son, confirmant que la résonance ne se produit qu'entre oscillateurs de même fréquence.",
      "instructions": [
        "Placer deux diapasons identiques de 440 Hz sur des caisses de résonance se faisant face.",
        "Frapper le diapason A puis l'amortir immédiatement ; observer si le diapason B vibre.",
        "Répéter avec un diapason B de fréquence différente — observer l'absence de résonance."
      ],
      "expectedOutcome": "Deux diapasons identiques : frapper A puis amortir → B produit un son audible. Fréquences différentes → pas de résonance. Un cavalier en papier sur B confirme la vibration."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🎵",
          "name": "Deux diapasons identiques de 440 Hz"
        },
        {
          "emoji": "📦",
          "name": "Deux caisses de résonance (accordées aux diapasons)"
        },
        {
          "emoji": "📄",
          "name": "Petit cavalier en papier (placé sur le diapason B)"
        },
        {
          "emoji": "🔨",
          "name": "Marteau en caoutchouc"
        }
      ],
      "observationsToRecord": [
        "Si le diapason B vibre après que A a été frappé et amorti",
        "Si le cavalier en papier sur B est éjecté",
        "Résultat lorsqu'un diapason non identique est utilisé à la place"
      ],
      "theoryPoints": [
        "Résonance : un système absorbe l'énergie le plus efficacement lorsque la fréquence d'excitation correspond à sa fréquence propre.",
        "Les ondes sonores du diapason A se propagent dans l'air et excitent le diapason B à la même fréquence.",
        "Les caisses de résonance amplifient le son en agissant comme résonateurs couplés.",
        "Pas de résonance avec des fréquences différentes car le transfert d'énergie est hors résonance et minimal."
      ],
      "realWorldConnections": [
        "Les chanteurs d'opéra peuvent briser des verres en cristal en chantant à la fréquence de résonance du verre.",
        "L'accord des radios utilise la résonance électrique pour sélectionner une fréquence d'émission spécifique.",
        "Le pont de Tacoma Narrows s'est effondré en raison d'une résonance entretenue par le vent."
      ],
      "formula": "Condition de résonance : f_excitation = f_propre"
    },
    "questions": {
      "mcq": [
        {
          "text": "Le diapason B résonne lorsque le diapason A est frappé. Quelle condition doit être satisfaite ?",
          "options": [
            "Le diapason B doit être plus grand",
            "Les deux diapasons doivent avoir la même fréquence propre",
            "Les caisses doivent être de la même taille",
            "Les diapasons doivent se toucher"
          ],
          "correctIndex": 1,
          "explanation": "La résonance exige que la fréquence d'excitation (A) corresponde à la fréquence propre de B."
        },
        {
          "text": "Un cavalier en papier est placé sur le diapason B. Après que le diapason A a été frappé et amorti, le cavalier :",
          "options": [
            "Tombe immédiatement",
            "Est éjecté lorsque B résonne",
            "Ne bouge pas",
            "Se déplace vers le diapason A"
          ],
          "correctIndex": 1,
          "explanation": "Si B résonne, il vibre avec une amplitude suffisante pour éjecter le cavalier en papier, confirmant la résonance."
        },
        {
          "text": "Pourquoi les caisses de résonance amplifient-elles le son du diapason ?",
          "options": [
            "Elles génèrent leurs propres ondes sonores",
            "Elles sont accordées à la même fréquence et couplées efficacement",
            "Elles réfléchissent le son sur les murs",
            "Elles sont plus lourdes"
          ],
          "correctIndex": 1,
          "explanation": "La caisse de résonance est accordée pour correspondre à la fréquence du diapason ; elle agit comme un résonateur couplé qui amplifie le son."
        }
      ],
      "discussion": [
        "Expliquer pourquoi seuls les diapasons de fréquence identique résonnent entre eux.",
        "Comment la résonance sympathique est-elle liée au concept de fréquence propre ?",
        "Donner un exemple réel de résonance pouvant être destructrice."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Condition de résonance f_excitation = f_propre",
          "pct": 35
        },
        {
          "label": "Transfert d'énergie à la résonance",
          "pct": 30
        },
        {
          "label": "Amplification par la caisse de résonance",
          "pct": 20
        },
        {
          "label": "Exemples de résonance destructrice",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves pensent que n'importe quel son fera vibrer un diapason ; seules les fréquences correspondantes fonctionnent.",
        "Beaucoup croient que les caisses servent uniquement à amplifier le son ; elles sont en réalité des résonateurs accordés.",
        "Confondre résonance sympathique et écho ; la résonance requiert une correspondance de fréquence, l'écho non."
      ],
      "hook": "Frappez un diapason, amortissez-le, et entendez l'autre chanter tout seul — de l'énergie transférée à travers l'air ! C'est le même phénomène qui a effondré un pont.",
      "khanLinks": [
        {
          "title": "Propriétés des ondes",
          "url": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound"
        },
        {
          "title": "Ondes mécaniques et son",
          "url": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Fréquence diapason A (Hz)",
        "Fréquence diapason B (Hz)",
        "Résonance ? (O/N)",
        "Cavalier éjecté ? (O/N)"
      ],
      "rows": 3
    },
    "observations": [
      "Frapper fermement le diapason A, puis le saisir immédiatement pour arrêter sa vibration.",
      "Écouter le son émis par le diapason B et surveiller le cavalier en papier.",
      "Répéter avec un diapason de fréquence différente pour confirmer l'absence de résonance."
    ],
    "conclusion": "Résonance sympathique confirmée : diapasons identiques à 440 Hz — le diapason B a vibré et éjecté le cavalier en papier après que le diapason A a été frappé et amorti. Diapason de fréquence différente : pas de vibration. La résonance exige f_excitation = f_propre.",
    "ai": {
      "opening": "La résonance relie les oscillateurs à travers l'air ! Interrogez-moi sur la résonance sympathique, la fréquence propre ou le test du cavalier en papier.",
      "keywords": {
        "setup": "diapason|caisse de résonance|cavalier en papier|résonance sympathique",
        "formula": "résonance : f_excitation = f_propre",
        "error": "trop de bruit ambiant|diapasons pas vraiment identiques|amortissement trop lent",
        "question": "résonance|fréquence propre|sympathique|diapason|transfert d'énergie",
        "real": "effondrement de pont|chanteuse d'opéra|accord de radio"
      },
      "hint": "La résonance se produit UNIQUEMENT quand f_excitation = f_propre. Fréquence différente → pas de transfert d'énergie → pas de vibration du diapason B.",
      "expected": "Diapasons identiques : B vibre, cavalier éjecté. Diapasons différents : pas de résonance. Confirme que f_excitation doit être égale à f_propre."
    }
  },
  {
    "num": 28,
    "cardEmoji": "🎶",
    "title": "Battements et interférence en acoustique",
    "section": "Acoustics",
    "desc": "Produire des battements en faisant résonner deux diapasons de fréquences légèrement différentes et mesurer la fréquence de battement.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves mesurent f_battement = |f₁ − f₂| en comptant les battements par seconde à partir de deux diapasons à 440 Hz et 437 Hz.",
      "instructions": [
        "Frapper les deux diapasons (440 Hz et 437 Hz) simultanément.",
        "Compter le nombre de battements (pulsations de sonorité) entendus en 10 secondes.",
        "Calculer f_battement = battements / 10 s et comparer avec |440 − 437| = 3 Hz."
      ],
      "expectedOutcome": "440 Hz + 437 Hz → 3 battements/s → 30 battements en 10 s. Le son oscille entre fort et faible 3 fois par seconde."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🎵",
          "name": "Diapason 440 Hz"
        },
        {
          "emoji": "🎵",
          "name": "Diapason 437 Hz (ou 440 Hz avec de la cire ajoutée)"
        },
        {
          "emoji": "⏱️",
          "name": "Chronomètre"
        },
        {
          "emoji": "🔨",
          "name": "Marteau en caoutchouc"
        }
      ],
      "observationsToRecord": [
        "Nombre de battements entendus en 10 secondes",
        "Fréquence de battement f_battement = n/t (Hz)",
        "Comparaison avec |f₁ − f₂|"
      ],
      "theoryPoints": [
        "Battements : variation périodique d'amplitude lorsque deux ondes de fréquences proches se superposent.",
        "f_battement = |f₁ − f₂|.",
        "La période de battement T_battement = 1/f_battement.",
        "Interférence constructive (fort) lorsque les ondes sont en phase ; destructive (faible) lorsqu'elles sont en opposition de phase."
      ],
      "realWorldConnections": [
        "Les accordeurs de piano utilisent les battements pour accorder les cordes à l'unisson parfait.",
        "Les musiciens utilisent les battements pour accorder leurs instruments par rapport à un son de référence.",
        "Les récepteurs radio à hétérodyne utilisent la détection de fréquence de battement."
      ],
      "formula": "f_battement = |f₁ − f₂|"
    },
    "questions": {
      "mcq": [
        {
          "text": "Un diapason de 440 Hz et un de 437 Hz sont joués ensemble. Combien de battements se produisent en 10 s ?",
          "options": [
            "30",
            "440",
            "3",
            "877"
          ],
          "correctIndex": 0,
          "explanation": "f_battement = |440 − 437| = 3 Hz → 3 × 10 = 30 battements en 10 s."
        },
        {
          "text": "Si deux diapasons produisent 5 battements par seconde et l'un est à 500 Hz, l'autre peut être :",
          "options": [
            "505 Hz uniquement",
            "495 Hz uniquement",
            "495 Hz ou 505 Hz",
            "500 Hz"
          ],
          "correctIndex": 2,
          "explanation": "f_battement = |f₁ − f₂| = 5 → f₂ = 500 ± 5 = 495 ou 505 Hz."
        },
        {
          "text": "Les battements résultent de :",
          "options": [
            "Deux ondes à la même fréquence en phase",
            "Deux ondes à des fréquences différentes se superposant",
            "Des échos sur les murs",
            "L'effet Doppler"
          ],
          "correctIndex": 1,
          "explanation": "Les battements proviennent de la superposition de deux ondes de fréquences légèrement différentes, créant des interférences constructives et destructives périodiques."
        }
      ],
      "discussion": [
        "Expliquer comment les battements découlent du principe de superposition.",
        "Comment les accordeurs de piano utilisent-ils les battements pour obtenir un accord parfait ?",
        "Si vous ajoutez de la cire sur un diapason de 440 Hz, que se passe-t-il avec la fréquence de battement lorsqu'il est combiné avec un autre diapason de 440 Hz ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "f_battement = |f₁ − f₂|",
          "pct": 35
        },
        {
          "label": "Principe de superposition",
          "pct": 30
        },
        {
          "label": "Interférence constructive/destructive",
          "pct": 25
        },
        {
          "label": "Application à l'accord musical",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Les élèves pensent que les battements produisent une nouvelle fréquence ; ce sont des variations périodiques d'amplitude, pas une nouvelle fréquence.",
        "Beaucoup confondent la fréquence de battement avec la fréquence moyenne (f₁+f₂)/2.",
        "Croire que deux diapasons doivent être identiques pour toute interaction sonore ; les battements requièrent précisément des fréquences différentes."
      ],
      "hook": "Deux guitares légèrement désaccordées produisent un son « wah-wah » oscillant — ce sont des battements ! Les accordeurs professionnels comptent ces oscillations par seconde pour amener les instruments à l'accord parfait.",
      "khanLinks": [
        {
          "title": "Son et interférence des ondes",
          "url": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound"
        },
        {
          "title": "Interférence des ondes",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-mechanical-waves-and-sound/wave-interference-ap/v/wave-interference"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "f₁ (Hz)",
        "f₂ (Hz)",
        "f_battement prédit (Hz)",
        "Battements en 10 s",
        "f_battement mesuré (Hz)"
      ],
      "rows": 3
    },
    "observations": [
      "Frapper les deux diapasons simultanément et écouter attentivement le motif de battements.",
      "Compter les cycles de battement (fort-faible-fort = un battement) en 10 secondes.",
      "Vérifier que f_battement mesuré ≈ |f₁ − f₂| = 3 Hz."
    ],
    "conclusion": "Battements confirmés : 440 Hz + 437 Hz → 30 battements en 10 s → f_battement = 3 Hz = |440 − 437|. L'amplitude sonore a pulsé 3 fois par seconde. Cela vérifie f_battement = |f₁ − f₂|.",
    "ai": {
      "opening": "Les battements, c'est l'interférence rendue audible ! Interrogez-moi sur f_battement = |f₁ − f₂|, comment compter les battements ou comment les accordeurs de piano les utilisent.",
      "keywords": {
        "setup": "deux diapasons|fréquences légèrement différentes|chronomètre|compter les battements",
        "formula": "f_battement = |f₁ − f₂|",
        "error": "mauvais comptage des battements|environnement trop bruyant|diapasons pas frappés simultanément",
        "question": "battements|f_battement|interférence|superposition|accord",
        "real": "accord de piano|accord de guitare|radio hétérodyne"
      },
      "hint": "f_battement = |f₁ − f₂|. Compter les pulsations sonores par seconde. 440 Hz + 437 Hz → 3 battements/s → 30 en 10 s.",
      "expected": "f₁=440 Hz, f₂=437 Hz → 30 battements en 10 s → f_battement = 3 Hz = |440−437|."
    }
  }
]

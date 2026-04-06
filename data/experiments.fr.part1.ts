import { Experiment } from './experiments'

export const experimentsFrPart1: Experiment[] = [
  {
    "num": 1,
    "cardEmoji": "⚖️",
    "title": "Leviers du premier genre",
    "section": "Mécanique",
    "desc": "Étudier l'équilibre d'un levier du premier genre en équilibrant des masses connues de part et d'autre d'un pivot central.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves découvrent que l'équilibre nécessite des moments égaux des deux côtés du pivot, en vérifiant W = mg et l'équation des moments M = F × d.",
      "instructions": [
        "Mettre la balance à zéro (tare) avant d'ajouter toute masse.",
        "Suspendre une masse d'un côté, noter son poids en newtons, puis trouver la masse d'équilibre de l'autre côté.",
        "Varier la distance par rapport au pivot et observer comment la force nécessaire change."
      ],
      "expectedOutcome": "m = 10 g → W ≈ 0,10 N ; m = 25 g → W ≈ 0,25 N ; m = 50 g → W ≈ 0,50 N. Équilibre : M₁ = M₂."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚖️",
          "name": "Barre de levier (bras de balance)"
        },
        {
          "emoji": "🔩",
          "name": "Pivot central (fulcrum)"
        },
        {
          "emoji": "🏋️",
          "name": "Masses cylindriques (10 g, 25 g, 50 g)"
        },
        {
          "emoji": "🪝",
          "name": "Crochets en S"
        },
        {
          "emoji": "📏",
          "name": "Règle millimétrique"
        }
      ],
      "observationsToRecord": [
        "Masse m (g) et poids calculé W = mg (N) pour chaque essai",
        "Position de la masse de chaque côté du pivot (mm)",
        "Si le bras atteint l'équilibre"
      ],
      "theoryPoints": [
        "Le poids est la force gravitationnelle exercée sur une masse : W = mg, où g ≈ 9,81 m/s².",
        "Un moment (couple) est l'effet de rotation d'une force : M = F × d.",
        "Un levier du premier genre a le pivot entre les deux forces.",
        "Condition d'équilibre : M₁ = M₂, c'est-à-dire F₁·d₁ = F₂·d₂.",
        "L'opération de « tare » annule le poids propre du levier avant la mesure."
      ],
      "realWorldConnections": [
        "Les balances utilisent des moments équilibrés pour mesurer des masses inconnues.",
        "Les leviers et les balançoires sont des leviers du premier genre courants.",
        "Les chirurgiens utilisent les principes du levier du premier genre dans les instruments de laparoscopie."
      ],
      "formula": "W = mg   |   M = F × d   |   Équilibre : F₁d₁ = F₂d₂"
    },
    "questions": {
      "mcq": [
        {
          "text": "Une masse de 25 g est suspendue à 8 cm du pivot. Quelle force unique à 10 cm du pivot permettra d'équilibrer le levier ?",
          "options": [
            "0,20 N",
            "0,25 N",
            "0,196 N",
            "0,245 N"
          ],
          "correctIndex": 0,
          "explanation": "M₁ = 0,025 × 9,81 × 0,08 = 0,01962 N·m. F = 0,01962 / 0,10 = 0,196 N ≈ 0,20 N."
        },
        {
          "text": "Que signifie « tarer » le bras de balance ?",
          "options": [
            "Ajouter une masse connue",
            "Mettre la lecture à zéro avant la mesure",
            "Mesurer la longueur du bras",
            "Retirer le pivot"
          ],
          "correctIndex": 1,
          "explanation": "La tare remet la balance à zéro afin que seule la masse ajoutée soit mesurée, en éliminant l'effet du poids propre du bras."
        },
        {
          "text": "Si l'on éloigne une masse du pivot, le moment :",
          "options": [
            "Diminue",
            "Reste identique",
            "Augmente",
            "Devient nul"
          ],
          "correctIndex": 2,
          "explanation": "M = F × d ; à F constante, augmenter d accroît le moment."
        }
      ],
      "discussion": [
        "Pourquoi faut-il tarer (mettre à zéro) le bras de balance avant de placer des masses dessus ?",
        "Si F₁d₁ = F₂d₂, expliquez comment une petite force à grande distance peut équilibrer une grande force à petite distance.",
        "Donnez deux exemples réels de leviers du premier genre et identifiez le pivot dans chaque cas."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Poids et gravité (W=mg)",
          "pct": 25
        },
        {
          "label": "Moments et couple",
          "pct": 30
        },
        {
          "label": "Condition d'équilibre",
          "pct": 30
        },
        {
          "label": "Mesure et tare",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves confondent souvent la masse (kg) et le poids (N) ; le poids est la force gravitationnelle, pas la quantité de matière.",
        "Beaucoup pensent que l'équilibre exige des masses égales des deux côtés, et non des moments égaux.",
        "Les élèves peuvent oublier de tarer, introduisant une erreur systématique liée au poids propre du bras."
      ],
      "hook": "Comment un enfant peut-il équilibrer un adulte sur une balançoire ? Le secret n'est pas l'égalité des poids — c'est l'égalité des moments. Rapprochez l'adulte du pivot et soudain l'enfant l'emporte !",
      "khanLinks": [
        {
          "title": "Introduction au couple (Torque)",
          "url": "https://www.khanacademy.org/science/physics/torque-angular-momentum/torque-tutorial/v/introduction-to-torque"
        },
        {
          "title": "Couple et moment cinétique",
          "url": "https://www.khanacademy.org/science/physics/torque-angular-momentum"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Masse m (g)",
        "Poids W = mg (N)",
        "Distance d₁ (cm)",
        "Masse d'équilibre (g)",
        "Distance d'équilibre d₂ (cm)",
        "M₁ (N·m)",
        "M₂ (N·m)"
      ],
      "rows": 4
    },
    "observations": [
      "Consigner le poids calculé pour chaque masse et le comparer à la lecture du pèse-ressort.",
      "Noter si le levier est en équilibre et à quelles positions.",
      "Observer comment doubler la distance diminue de moitié la force nécessaire à l'équilibre."
    ],
    "conclusion": "Le levier atteint l'équilibre lorsque le moment à gauche est égal au moment à droite (F₁d₁ = F₂d₂). Le poids W = mg a été confirmé pour chaque masse testée.",
    "ai": {
      "opening": "Prêt à explorer les leviers ? Posez-moi toutes vos questions sur les moments, l'équilibre ou la mise en place de l'expérience !",
      "keywords": {
        "setup": "barre de levier|pivot|tare|bras de balance",
        "formula": "M = F × d|W = mg|équilibre",
        "error": "oubli de la tare|longueurs de bras inégales|frottement au pivot",
        "question": "moment|couple|équilibre|poids|masse",
        "real": "balançoire|levier|balance"
      },
      "hint": "N'oubliez pas : l'équilibre signifie que les moments sont égaux, pas les masses. M = F × d des deux côtés.",
      "expected": "m = 10 g → W = 0,098 N ; m = 25 g → W = 0,245 N ; m = 50 g → W = 0,490 N. Équilibre quand F₁d₁ = F₂d₂."
    }
  },
  {
    "num": 2,
    "cardEmoji": "🏗️",
    "title": "Leviers du premier genre et positions d'équilibre",
    "section": "Mécanique",
    "desc": "Mesurer les moments par rapport à un pivot et vérifier le principe des moments à l'aide d'un levier avec des charges à des distances connues.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves calculent les moments horaires et antihoraires et confirment que l'équilibre exige leur égalité : M = F × d.",
      "instructions": [
        "Placer une masse connue à une distance mesurée du pivot d'un côté.",
        "Trouver la position ou l'intensité d'une deuxième force qui rétablit l'équilibre.",
        "Consigner toutes les distances et forces, puis calculer les deux moments."
      ],
      "expectedOutcome": "Essai 1 : m₁ = 65 g à 8 cm → M₁ = 0,052 N·m ; ajuster m₂ ou d₂ jusqu'à ce que M₂ ≈ 0,052 N·m."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚖️",
          "name": "Barre de levier"
        },
        {
          "emoji": "🔩",
          "name": "Pivot (fulcrum)"
        },
        {
          "emoji": "🏋️",
          "name": "Masses (65 g, 100 g, 150 g)"
        },
        {
          "emoji": "📏",
          "name": "Règle millimétrique"
        },
        {
          "emoji": "🪝",
          "name": "Crochets en S"
        }
      ],
      "observationsToRecord": [
        "Force F₁ (N) et longueur de bras d₁ (m) pour la première charge",
        "Force F₂ (N) et longueur de bras d₂ (m) pour la charge d'équilibre",
        "Moments calculés M₁ et M₂ (N·m)"
      ],
      "theoryPoints": [
        "Moment M = F × d, où d est la distance perpendiculaire au pivot.",
        "Moment horaire = Moment antihoraire à l'équilibre.",
        "Le principe des moments s'applique à tout corps rigide en équilibre de rotation.",
        "Augmenter la longueur de bras d amplifie l'effet de rotation d'une force donnée."
      ],
      "realWorldConnections": [
        "Les brouettes sont des leviers du deuxième genre ; la charge est entre la roue (pivot) et les poignées.",
        "Les casse-noix multiplient la force grâce au principe des moments.",
        "Les ingénieurs utilisent les calculs de moments pour concevoir des ponts et des grues."
      ],
      "formula": "M = F × d   |   Équilibre : ΣM_horaire = ΣM_antihoraire"
    },
    "questions": {
      "mcq": [
        {
          "text": "Une masse de 65 g est placée à 8 cm du pivot. Quel moment crée-t-elle ?",
          "options": [
            "0,052 N·m",
            "0,065 N·m",
            "0,080 N·m",
            "0,520 N·m"
          ],
          "correctIndex": 0,
          "explanation": "F = 0,065 kg × 9,81 m/s² ≈ 0,638 N ; M = 0,638 × 0,08 ≈ 0,051 N·m ≈ 0,052 N·m."
        },
        {
          "text": "Si M₁ = 0,052 N·m et d₂ = 0,10 m, quelle force F₂ est nécessaire pour l'équilibre ?",
          "options": [
            "0,52 N",
            "0,052 N",
            "5,2 N",
            "0,52 mN"
          ],
          "correctIndex": 0,
          "explanation": "F₂ = M₁ / d₂ = 0,052 / 0,10 = 0,52 N."
        },
        {
          "text": "Lequel de ces exemples n'est PAS un levier du deuxième genre ?",
          "options": [
            "Brouette",
            "Casse-noix",
            "Balançoire",
            "Ouvre-bouteille"
          ],
          "correctIndex": 2,
          "explanation": "Une balançoire est un levier du premier genre (pivot au milieu). Dans les leviers du deuxième genre, la charge est entre le pivot et la force motrice."
        }
      ],
      "discussion": [
        "Expliquez pourquoi augmenter la longueur de bras d permet à une force plus petite de produire le même moment.",
        "Un mécanicien utilise une clé plus longue pour desserrer un boulon serré. Quel principe est exploité ?",
        "Comment le principe des moments s'applique-t-il à la conception d'une brouette ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Définition du moment M = F×d",
          "pct": 30
        },
        {
          "label": "Condition d'équilibre",
          "pct": 30
        },
        {
          "label": "Classes de leviers",
          "pct": 20
        },
        {
          "label": "Technique de mesure",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Les élèves confondent « moment » et « force » ; le moment inclut la distance, pas seulement la force.",
        "Beaucoup supposent que l'équilibre nécessite des forces égales plutôt que des moments égaux.",
        "Certains mesurent la mauvaise distance (pas la distance perpendiculaire au pivot)."
      ],
      "hook": "Avez-vous déjà utilisé une longue clé pour débloquer un boulon coincé ? Vous appliquiez le principe des moments — un bras plus long produit un plus grand effet de rotation avec la même force !",
      "khanLinks": [
        {
          "title": "Introduction au couple (Torque)",
          "url": "https://www.khanacademy.org/science/physics/torque-angular-momentum/torque-tutorial/v/introduction-to-torque"
        },
        {
          "title": "Couple et moments",
          "url": "https://www.khanacademy.org/science/physics/torque-angular-momentum"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "F₁ (N)",
        "d₁ (m)",
        "M₁ (N·m)",
        "F₂ (N)",
        "d₂ (m)",
        "M₂ (N·m)",
        "Équilibre ?"
      ],
      "rows": 4
    },
    "observations": [
      "Pour chaque essai, vérifier que M₁ est égal à M₂ dans les limites de l'incertitude expérimentale.",
      "Noter toute asymétrie de la barre de levier et son effet sur les résultats.",
      "Observer comment le même moment peut être produit par différentes combinaisons force-distance."
    ],
    "conclusion": "Le principe des moments a été vérifié : l'équilibre se produit lorsque M₁ = M₂. Les valeurs mesurées de M₁ (ex. 0,052 N·m) correspondaient aux valeurs calculées de M₂ à ±5 % d'erreur expérimentale.",
    "ai": {
      "opening": "Explorons les moments et l'équilibre ! Posez-moi des questions sur le calcul des moments, les classes de leviers ou la mise en place de l'expérience.",
      "keywords": {
        "setup": "barre de levier|pivot|masses|distances",
        "formula": "M = F×d|équilibre|moments",
        "error": "asymétrie du bras|frottement|mesure incorrecte de la distance",
        "question": "moment|effet de rotation|équilibre|classe de levier",
        "real": "brouette|clé|casse-noix"
      },
      "hint": "M = F × d. Assurez-vous de mesurer d perpendiculairement au pivot. Pour l'équilibre, M₁ doit être égal à M₂.",
      "expected": "m₁ = 65 g à 8 cm → M₁ = 0,052 N·m ; m₁ à 8 cm, m₂ à la position telle que M₂ ≈ 0,057 N·m à l'essai 2."
    }
  },
  {
    "num": 3,
    "cardEmoji": "📏",
    "title": "Sensibilité d'une balance",
    "section": "Mécanique",
    "desc": "Déterminer la sensibilité d'une balance à fléau en mesurant combien de divisions correspondent à une masse ajoutée connue.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves apprennent que la sensibilité σ = déviation / masse ajoutée (div/mg) et découvrent que la sensibilité n'est pas constante sur toute la plage.",
      "instructions": [
        "Équilibrer le fléau avec une masse de tare de 310 mg ; noter la position de repos du pointeur.",
        "Ajouter une charge de 10 g (10 000 mg) et lire la nouvelle déviation du pointeur en divisions.",
        "Répéter avec différentes charges pour tracer un graphique déviation en fonction de la masse."
      ],
      "expectedOutcome": "Tare 310 mg + charge 10 g → ~3 divisions → σ ≈ 0,01 div/mg pour les petites charges. La sensibilité diminue pour les charges plus lourdes."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚖️",
          "name": "Balance à fléau avec pointeur"
        },
        {
          "emoji": "🏋️",
          "name": "Masse de tare (310 mg)"
        },
        {
          "emoji": "🏋️",
          "name": "Masses de test (10 g, 25 g, 50 g)"
        },
        {
          "emoji": "📐",
          "name": "Échelle graduée en millimètres"
        },
        {
          "emoji": "📝",
          "name": "Papier millimétré"
        }
      ],
      "observationsToRecord": [
        "Position zéro du pointeur avec la masse de tare uniquement",
        "Déviation du pointeur (divisions) pour chaque masse ajoutée",
        "Sensibilité calculée σ = déviation / masse ajoutée pour chaque essai"
      ],
      "theoryPoints": [
        "Sensibilité d'une balance : σ = déviation du pointeur (div) / masse ajoutée (mg).",
        "Une balance plus sensible dévie davantage pour la même masse ajoutée.",
        "La sensibilité n'est pas constante : elle diminue à mesure que la charge augmente (réponse non linéaire).",
        "La masse de tare compense l'asymétrie propre du fléau."
      ],
      "realWorldConnections": [
        "Les balances analytiques en laboratoire de chimie sont très sensibles mais ont une faible capacité.",
        "Les balances de salle de bain sacrifient la sensibilité pour une plage de masse plus large.",
        "Le compromis sensibilité/plage se retrouve dans tous les instruments de mesure."
      ],
      "formula": "σ = Δ (divisions) / Δm (mg)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Si l'ajout de 10 g provoque une déviation de 3 divisions, quelle est la sensibilité en div/g ?",
          "options": [
            "0,3 div/g",
            "3 div/g",
            "30 div/g",
            "0,03 div/g"
          ],
          "correctIndex": 0,
          "explanation": "σ = 3 divisions / 10 g = 0,3 div/g."
        },
        {
          "text": "Pourquoi place-t-on une masse de tare de 310 mg sur la balance avant les tests ?",
          "options": [
            "Pour augmenter la sensibilité",
            "Pour compenser l'asymétrie du fléau et mettre le pointeur à zéro",
            "Pour surcharger la balance",
            "Pour mesurer le poids du fléau"
          ],
          "correctIndex": 1,
          "explanation": "La masse de tare équilibre le pointeur à une position de référence, supprimant l'effet de toute asymétrie du bras de balance."
        },
        {
          "text": "Lorsque la charge sur une balance augmente, sa sensibilité :",
          "options": [
            "Augmente linéairement",
            "Reste constante",
            "Diminue",
            "Augmente puis diminue"
          ],
          "correctIndex": 2,
          "explanation": "La sensibilité diminue à des charges plus élevées car le moment de rappel par unité de masse diminue à mesure que le fléau dévie davantage."
        }
      ],
      "discussion": [
        "Expliquez la différence entre sensibilité et précision dans un instrument de mesure.",
        "Pourquoi une balance analytique de chimie peut-elle avoir une sensibilité bien plus élevée qu'une balance de salle de bain ?",
        "Dessinez la forme attendue d'un graphique déviation-en-fonction-de-la-masse et expliquez toute non-linéarité."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Définition de la sensibilité",
          "pct": 30
        },
        {
          "label": "Tare de la balance",
          "pct": 20
        },
        {
          "label": "Non-linéarité de la réponse",
          "pct": 30
        },
        {
          "label": "Analyse graphique",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Les élèves pensent souvent qu'une balance plus sensible est toujours meilleure ; en réalité, une haute sensibilité limite la masse maximale mesurable.",
        "Beaucoup supposent que la sensibilité est constante pour toutes les charges, mais elle diminue aux grandes déviations.",
        "Confondre « sensibilité » avec « précision » ou « exactitude » est courant."
      ],
      "hook": "Pourquoi les laboratoires de chimie ont-ils de minuscules balances mesurant au 0,001 g, tandis que les stations de pesage pour camions utilisent d'énormes plateformes ? Tout est question de compromis entre sensibilité et plage de mesure !",
      "khanLinks": [
        {
          "title": "Forces et lois de Newton",
          "url": "https://www.khanacademy.org/science/physics/forces-newtons-laws"
        },
        {
          "title": "Couple et équilibre",
          "url": "https://www.khanacademy.org/science/physics/torque-angular-momentum"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Masse ajoutée Δm (mg)",
        "Déviation du pointeur (div)",
        "Sensibilité σ (div/mg)"
      ],
      "rows": 5
    },
    "observations": [
      "Observer comment le pointeur dévie davantage pour des masses ajoutées plus grandes.",
      "Noter si la sensibilité (div par mg) reste constante ou change.",
      "Consigner la position de repos à chaque retrait d'une masse pour vérifier l'hystérésis."
    ],
    "conclusion": "La sensibilité de la balance était d'environ 0,01 div/mg pour les petites charges (ex. 3 divisions pour une charge de 10 g). La sensibilité a diminué pour les charges plus importantes, confirmant la réponse non linéaire de la balance.",
    "ai": {
      "opening": "Curieux au sujet de la sensibilité des balances ? Demandez-moi comment elle se calcule, pourquoi elle varie ou comment améliorer votre expérience !",
      "keywords": {
        "setup": "balance à fléau|tare|pointeur|divisions",
        "formula": "sensibilité = déviation / masse|σ = Δdiv / Δm",
        "error": "oubli de la tare|erreur de lecture|zone non linéaire",
        "question": "sensibilité|divisions|tare|précision",
        "real": "balance analytique|balance de salle de bain|instrument de laboratoire"
      },
      "hint": "Sensibilité σ = divisions déviées ÷ masse ajoutée (en mg ou g). Elle n'est pas constante — tracez la déviation en fonction de la masse pour voir la courbe.",
      "expected": "Tare 310 mg + 10 g → ~3 div → σ ≈ 0,3 div/g. La sensibilité diminue avec l'augmentation de la charge."
    }
  },
  {
    "num": 4,
    "cardEmoji": "🔧",
    "title": "Leviers des deuxième et troisième genres",
    "section": "Mécanique",
    "desc": "Étudier un levier du deuxième genre avec le pivot à une extrémité et vérifier le principe des moments pour des pivots non centraux.",
    "setupTime": "5 min",
    "duration": "30 min",
    "summary": {
      "whatTheyLearn": "Les élèves vérifient que les moments autour du pivot s'équilibrent même lorsque celui-ci est en bout de levier, et calculent la réaction au pivot.",
      "instructions": [
        "Placer le pivot à une extrémité de la barre de levier.",
        "Suspendre une charge connue à une distance mesurée du pivot.",
        "Appliquer un effort vers le haut à l'autre extrémité et trouver la position d'équilibre.",
        "Calculer les deux moments et la réaction au pivot."
      ],
      "expectedOutcome": "m₁ = 65 g à 8 cm : M₁ = 0,052 N·m. Un effort de 100 g à ~5,5 cm donne M₂ ≈ 0,054 N·m ≈ M₁."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚖️",
          "name": "Barre de levier"
        },
        {
          "emoji": "🔩",
          "name": "Pivot en bout (fulcrum)"
        },
        {
          "emoji": "🏋️",
          "name": "Masses (65 g, 100 g, 150 g)"
        },
        {
          "emoji": "📏",
          "name": "Règle millimétrique"
        },
        {
          "emoji": "🔧",
          "name": "Support"
        }
      ],
      "observationsToRecord": [
        "Charge F_L (N) et sa distance au pivot d_L (m)",
        "Effort F_E (N) et sa distance au pivot d_E (m)",
        "Force de réaction R au pivot (calculée : R = F_L + F_E)"
      ],
      "theoryPoints": [
        "Dans un levier du deuxième genre, la charge est entre le pivot et l'effort.",
        "Moments par rapport au pivot : F_E × d_E = F_L × d_L à l'équilibre.",
        "Avantage mécanique MA = d_E / d_L > 1 ; effort < charge.",
        "La réaction R au pivot supporte la force nette vers le bas : R = F_L − F_E.",
        "Contrairement aux leviers du premier genre, effort et charge agissent dans le même sens (tous deux vers le bas)."
      ],
      "realWorldConnections": [
        "Les brouettes utilisent le principe du levier du deuxième genre : charge entre la roue et les poignées.",
        "Un casse-noix est un double levier du deuxième genre.",
        "Les portes à charnières : la charnière est le pivot, votre poussée est l'effort, le poids de la porte est la charge."
      ],
      "formula": "F_E × d_E = F_L × d_L   |   MA = d_E / d_L   |   R = F_L − F_E"
    },
    "questions": {
      "mcq": [
        {
          "text": "Dans un levier du deuxième genre, où se trouve la charge par rapport au pivot et à l'effort ?",
          "options": [
            "Entre le pivot et l'effort",
            "À la même position que l'effort",
            "De l'autre côté du pivot",
            "Au pivot"
          ],
          "correctIndex": 0,
          "explanation": "Les leviers du deuxième genre ont la charge entre le pivot et l'effort, donnant un avantage mécanique MA > 1."
        },
        {
          "text": "Une charge de 65 g à 8 cm du pivot est équilibrée par un effort à 10 cm. Quel effort est nécessaire ?",
          "options": [
            "0,51 N",
            "0,64 N",
            "0,80 N",
            "0,39 N"
          ],
          "correctIndex": 0,
          "explanation": "F_E = F_L × d_L / d_E = (0,065×9,81×0,08) / 0,10 = 0,052 / 0,10 = 0,52 N ≈ 0,51 N."
        },
        {
          "text": "Quel est l'avantage mécanique d'un levier dont le bras d'effort est deux fois plus long que le bras de charge ?",
          "options": [
            "0,5",
            "1,0",
            "2,0",
            "4,0"
          ],
          "correctIndex": 2,
          "explanation": "MA = d_E / d_L = 2d / d = 2."
        }
      ],
      "discussion": [
        "Expliquez pourquoi une brouette facilite le soulèvement d'une lourde charge.",
        "Comparez les leviers du premier et du deuxième genre : comment leurs avantages mécaniques diffèrent-ils ?",
        "Comment la position de la charge par rapport au pivot affecte-t-elle l'effort nécessaire ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Définition du levier du deuxième genre",
          "pct": 25
        },
        {
          "label": "Calcul des moments",
          "pct": 30
        },
        {
          "label": "Avantage mécanique",
          "pct": 25
        },
        {
          "label": "Réaction au pivot",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Les élèves confondent souvent les leviers du premier et du deuxième genre ; la distinction clé est la position de la charge.",
        "Certains pensent que l'effort doit toujours être plus grand que la charge ; dans les leviers du deuxième genre, l'effort est plus petit.",
        "Oublier de tenir compte de la force de réaction au pivot conduit à des diagrammes de forces incorrects."
      ],
      "hook": "Pourquoi peut-on soulever une lourde charge de brouette avec bien moins d'effort qu'en la soulevant directement ? Le principe du levier du deuxième genre signifie que votre bras d'effort est plus long que le bras de charge !",
      "khanLinks": [
        {
          "title": "Couple et moment cinétique",
          "url": "https://www.khanacademy.org/science/physics/torque-angular-momentum"
        },
        {
          "title": "Physique AP 1 : Forces",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Charge F_L (N)",
        "Distance de charge d_L (m)",
        "M_L (N·m)",
        "Effort F_E (N)",
        "Distance d'effort d_E (m)",
        "M_E (N·m)",
        "MA"
      ],
      "rows": 4
    },
    "observations": [
      "Vérifier que M_E ≈ M_L à l'équilibre dans les limites de l'erreur expérimentale.",
      "Noter comment l'effort requis est inférieur à la charge (MA > 1).",
      "Observer la direction de la force de réaction au pivot en bout."
    ],
    "conclusion": "L'équilibre a été confirmé pour un levier du deuxième genre : M_L = M_E. Avec le pivot en bout, la charge à 8 cm et l'effort à 10 cm, l'effort requis (≈0,52 N) était inférieur à la charge (≈0,64 N), donnant MA ≈ 1,25.",
    "ai": {
      "opening": "Les leviers du deuxième genre, c'est avant tout l'avantage mécanique ! Demandez-moi comment ils fonctionnent, comment calculer le MA, ou toute question sur l'expérience.",
      "keywords": {
        "setup": "pivot en bout|levier du deuxième genre|charge entre pivot et effort",
        "formula": "F_E × d_E = F_L × d_L|MA = d_E/d_L",
        "error": "position du pivot|bras de moment incorrect|poids du fléau négligé",
        "question": "avantage mécanique|deuxième genre|moment|réaction",
        "real": "brouette|casse-noix|charnière de porte"
      },
      "hint": "Pour un levier du deuxième genre : F_E × d_E = F_L × d_L. MA = d_E / d_L — toujours supérieur à 1 pour les leviers du deuxième genre.",
      "expected": "m₁ = 65 g à 8 cm → M₁ = 0,052 N·m ; effort à 10 cm → F_E ≈ 0,52 N, M₂ ≈ 0,052 N·m. MA ≈ 1,25."
    }
  },
  {
    "num": 5,
    "cardEmoji": "📐",
    "title": "Mesure d'une longueur",
    "section": "Mécanique",
    "desc": "Mesurer le diamètre et la hauteur de cylindres métalliques à l'aide d'un pied à coulisse et calculer leurs volumes.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves utilisent un pied à coulisse (précision ±0,05 mm) pour mesurer les dimensions des cylindres et appliquent V = πr²h pour trouver le volume.",
      "instructions": [
        "Lire le pied à coulisse : lecture principale + division Vernier × 0,05 mm.",
        "Mesurer le diamètre extérieur d et la hauteur h de chaque cylindre au moins deux fois.",
        "Calculer r = d/2, puis V = πr²h pour chaque matériau."
      ],
      "expectedOutcome": "Cuivre : h = 36 mm, d = 20 mm → V ≈ 11,30 cm³. Fer → V ≈ 9,73 cm³. Acier → V ≈ 12,87 cm³. Laiton → V ≈ 11,93 cm³."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "📏",
          "name": "Pied à coulisse (±0,05 mm)"
        },
        {
          "emoji": "🔵",
          "name": "Cylindre en cuivre"
        },
        {
          "emoji": "⚫",
          "name": "Cylindre en fer"
        },
        {
          "emoji": "⚙️",
          "name": "Cylindre en acier"
        },
        {
          "emoji": "🟡",
          "name": "Cylindre en laiton"
        }
      ],
      "observationsToRecord": [
        "Diamètre d (mm) — au moins 2 mesures par cylindre",
        "Hauteur h (mm) — au moins 2 mesures par cylindre",
        "Volume calculé V = πr²h (cm³)"
      ],
      "theoryPoints": [
        "Un pied à coulisse se lit : lecture principale + (division Vernier coïncidente × 0,05 mm).",
        "Volume d'un cylindre : V = πr²h = π(d/2)²h.",
        "Toujours prendre plusieurs mesures et faire la moyenne pour réduire l'erreur aléatoire.",
        "La plus petite graduation du pied à coulisse est 0,05 mm — noter avec cette précision."
      ],
      "realWorldConnections": [
        "Les usineurs utilisent des pieds à coulisse quotidiennement pour vérifier que les pièces usinées respectent les tolérances.",
        "Le contrôle qualité en fabrication utilise les mesures de volume et de dimensions pour vérifier les produits.",
        "Les dispositifs médicaux tels que les stents exigent une précision inférieure au millimètre."
      ],
      "formula": "V = πr²h = π(d/2)²h   |   Lecture Vernier = lecture principale + (division Vernier × 0,05 mm)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Un pied à coulisse affiche une lecture principale de 20,0 mm et la 7e division Vernier coïncide. Quelle est la lecture ?",
          "options": [
            "20,35 mm",
            "20,07 mm",
            "20,70 mm",
            "20,50 mm"
          ],
          "correctIndex": 0,
          "explanation": "Lecture = 20,0 + (7 × 0,05) = 20,0 + 0,35 = 20,35 mm."
        },
        {
          "text": "Un cylindre en cuivre a d = 20 mm et h = 36 mm. Quel est son volume ?",
          "options": [
            "11,31 cm³",
            "1131 mm³",
            "1,131 cm³",
            "113,1 cm³"
          ],
          "correctIndex": 0,
          "explanation": "V = π(10)²(36) mm³ = 3600π ≈ 11 310 mm³ = 11,31 cm³."
        },
        {
          "text": "Pourquoi faut-il mesurer le diamètre dans deux orientations différentes ?",
          "options": [
            "Pour s'entraîner à utiliser le pied à coulisse",
            "Pour détecter si la section transversale n'est pas parfaitement circulaire",
            "Pour augmenter la valeur lue",
            "Le pied à coulisse exige deux lectures"
          ],
          "correctIndex": 1,
          "explanation": "Les cylindres réels peuvent être légèrement elliptiques ; deux mesures de diamètre perpendiculaires le révèlent et permettent une meilleure moyenne."
        }
      ],
      "discussion": [
        "Expliquez comment lire un pied à coulisse. Pourquoi la plus petite graduation est-elle 0,05 mm plutôt que 0,1 mm ?",
        "Quelles erreurs systématiques peuvent affecter les mesures de volume avec un pied à coulisse ?",
        "Comment modifieriez-vous la procédure si le cylindre avait une section transversale irrégulière ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Lecture d'un pied à coulisse",
          "pct": 30
        },
        {
          "label": "Formule du volume V = πr²h",
          "pct": 30
        },
        {
          "label": "Incertitude de mesure",
          "pct": 25
        },
        {
          "label": "Conversion d'unités (mm→cm)",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves lisent souvent mal l'échelle Vernier, oubliant de multiplier la division coïncidente par 0,05 mm.",
        "Beaucoup oublient de convertir les mm en cm avant de calculer le volume en cm³.",
        "Supposer qu'une seule mesure suffit ; plusieurs lectures sont nécessaires pour réduire l'erreur aléatoire."
      ],
      "hook": "Un pied à coulisse lit jusqu'à 0,05 mm — soit 50 micromètres, plus fin qu'un cheveu humain ! Comment l'ajout d'une deuxième petite échelle coulissante rend-il une telle précision possible ?",
      "khanLinks": [
        {
          "title": "Chiffres significatifs",
          "url": "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/x2f8bb11595b61c86:sig-figs/v/significant-figures"
        },
        {
          "title": "Physique : Unités et mesures",
          "url": "https://www.khanacademy.org/science/physics/one-dimensional-motion"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Matériau",
        "d₁ (mm)",
        "d₂ (mm)",
        "d_moy (mm)",
        "h₁ (mm)",
        "h₂ (mm)",
        "h_moy (mm)",
        "V (cm³)"
      ],
      "rows": 4
    },
    "observations": [
      "Consigner chaque mesure de diamètre et de hauteur avec une précision de 0,05 mm.",
      "Noter toute différence entre deux mesures de diamètre pour le même cylindre.",
      "Comparer les volumes calculés pour le cuivre, le fer, l'acier et le laiton."
    ],
    "conclusion": "Les volumes ont été calculés en utilisant V = π(d/2)²h. Résultats : cuivre ≈ 11,30 cm³, fer ≈ 9,73 cm³, acier ≈ 12,87 cm³, laiton ≈ 11,93 cm³. Le pied à coulisse a fourni des mesures avec une précision de ±0,05 mm.",
    "ai": {
      "opening": "Maîtrisons le pied à coulisse ! Demandez-moi comment le lire, comment calculer le volume ou comment gérer les erreurs de mesure.",
      "keywords": {
        "setup": "pied à coulisse|lecture principale|division Vernier|plus petite graduation",
        "formula": "V = πr²h|lecture Vernier = principale + div×0,05",
        "error": "mauvaise lecture Vernier|conversion d'unités|section non circulaire",
        "question": "Vernier|volume|cylindre|diamètre|précision",
        "real": "usineur|fabrication|contrôle qualité"
      },
      "hint": "Lecture Vernier = lecture principale + (division coïncidente × 0,05 mm). Puis V = π(d/2)²h. Convertir les mm en cm avant de calculer en cm³.",
      "expected": "Cuivre : d=20 mm, h=36 mm → V=11,30 cm³. Fer → 9,73 cm³. Acier → 12,87 cm³. Laiton → 11,93 cm³."
    }
  },
  {
    "num": 6,
    "cardEmoji": "🧊",
    "title": "Mesure de la densité",
    "section": "Mécanique",
    "desc": "Déterminer la densité de cylindres métalliques par deux méthodes : masse/volume et par un vase à débordement.",
    "setupTime": "5 min",
    "duration": "40 min",
    "summary": {
      "whatTheyLearn": "Les élèves appliquent ρ = m/V en utilisant la masse mesurée par une balance et le volume obtenu par mesures au pied à coulisse ou par déplacement d'eau, puis comparent les deux méthodes.",
      "instructions": [
        "Méthode 1 : Mesurer la masse m avec une balance et le volume V au pied à coulisse, puis ρ = m/V.",
        "Méthode 2 : Immerger le cylindre dans le vase à débordement, collecter l'eau déversée et mesurer son volume.",
        "Comparer les densités obtenues par les deux méthodes avec les valeurs de référence."
      ],
      "expectedOutcome": "Cuivre : m = 100,28 g, V = 11,30 cm³ → ρ ≈ 8,87 g/cm³ (valeur acceptée 8,96). Aluminium → ρ ≈ 2,70 g/cm³. Acier → ρ ≈ 7,72 g/cm³. Laiton → ρ ≈ 8,37 g/cm³."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚖️",
          "name": "Balance (±0,01 g)"
        },
        {
          "emoji": "📏",
          "name": "Pied à coulisse"
        },
        {
          "emoji": "🫙",
          "name": "Vase à débordement (vase d'Eureka)"
        },
        {
          "emoji": "🧪",
          "name": "Éprouvette graduée (50 mL)"
        },
        {
          "emoji": "🔵",
          "name": "Cylindres métalliques (Cu, Al, Fe, Laiton)"
        },
        {
          "emoji": "💧",
          "name": "Eau"
        }
      ],
      "observationsToRecord": [
        "Masse m (g) de la balance pour chaque cylindre",
        "Volume V (cm³) obtenu par les mesures au pied à coulisse : V = π(d/2)²h",
        "Volume V (mL) par déplacement d'eau",
        "Densité ρ = m/V pour les deux méthodes"
      ],
      "theoryPoints": [
        "Densité : ρ = m/V, unité SI kg/m³ ; souvent exprimée en g/cm³.",
        "Méthode par déplacement : un objet immergé déplace son propre volume d'eau.",
        "1 mL d'eau déplacée = 1 cm³ de volume de l'objet.",
        "La densité est une propriété intrinsèque — elle ne change pas avec la taille de l'échantillon."
      ],
      "realWorldConnections": [
        "Les géologues identifient les minéraux par leur densité (gravité spécifique).",
        "Les navires flottent parce que leur densité moyenne (coque + air) est inférieure à celle de l'eau (1,0 g/cm³).",
        "Les chercheurs en alimentation mesurent la densité pour contrôler la concentration en sucre des boissons."
      ],
      "formula": "ρ = m / V   (g/cm³ ou kg/m³)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Un cylindre en cuivre a une masse de 100,28 g et un volume de 11,30 cm³. Quelle est sa densité ?",
          "options": [
            "8,87 g/cm³",
            "9,11 g/cm³",
            "8,00 g/cm³",
            "11,30 g/cm³"
          ],
          "correctIndex": 0,
          "explanation": "ρ = m/V = 100,28 / 11,30 ≈ 8,87 g/cm³."
        },
        {
          "text": "Lequel de ces métaux a la densité la plus élevée ?",
          "options": [
            "Aluminium (~2,70 g/cm³)",
            "Acier (~7,7 g/cm³)",
            "Cuivre (~8,9 g/cm³)",
            "Laiton (~8,4 g/cm³)"
          ],
          "correctIndex": 2,
          "explanation": "Le cuivre a une densité de ~8,9 g/cm³, plus élevée que le laiton (~8,4), l'acier (~7,7) et l'aluminium (~2,7)."
        },
        {
          "text": "Dans la méthode par déplacement, quel volume est collecté dans l'éprouvette graduée ?",
          "options": [
            "Le volume d'eau dans le vase",
            "Le volume de l'objet immergé",
            "La masse de l'objet",
            "La densité de l'eau"
          ],
          "correctIndex": 1,
          "explanation": "Le débordement est égal au volume de l'objet immergé (principe d'Archimède)."
        }
      ],
      "discussion": [
        "Pourquoi la densité mesurée par les deux méthodes peut-elle légèrement différer ?",
        "Un échantillon de matériau inconnu a ρ = 7,87 g/cm³. De quel matériau pourrait-il s'agir ?",
        "Comment la densité de l'eau de mer se compare-t-elle à celle de l'eau douce, et quelles en sont les conséquences pratiques ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Définition ρ = m/V",
          "pct": 25
        },
        {
          "label": "Méthode au pied à coulisse (V par géométrie)",
          "pct": 25
        },
        {
          "label": "Méthode par déplacement",
          "pct": 30
        },
        {
          "label": "Comparaison avec les valeurs de référence",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Les élèves confondent densité et lourdeur ; un petit morceau de plomb est plus dense qu'un grand morceau de bois même si le bois est plus lourd.",
        "Beaucoup pensent que la densité change quand on coupe l'objet en deux ; ce n'est pas le cas.",
        "Confondre le volume déplacé avec la masse d'eau déplacée conduit à des erreurs d'unités."
      ],
      "hook": "Comment un énorme navire en acier peut-il flotter sur l'eau alors qu'un petit boulon en acier coule ? Tout est question de densité moyenne — le navire emprisonne un énorme volume d'air, réduisant sa densité globale en dessous de 1,0 g/cm³.",
      "khanLinks": [
        {
          "title": "La densité : un concept fondamental",
          "url": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/density/v/density-a-fundamental-concept"
        },
        {
          "title": "États de la matière et densité",
          "url": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/density"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Matériau",
        "Masse m (g)",
        "V_calc (cm³)",
        "V_dépl (mL)",
        "ρ_calc (g/cm³)",
        "ρ_dépl (g/cm³)",
        "ρ_acceptée (g/cm³)"
      ],
      "rows": 4
    },
    "observations": [
      "Consigner les masses à ±0,01 g et les volumes à ±0,1 cm³.",
      "Comparer ρ obtenu par les deux méthodes et calculer la différence en pourcentage.",
      "Noter quelle méthode est la plus précise et expliquer pourquoi."
    ],
    "conclusion": "La densité a été déterminée par deux méthodes. Cuivre : ρ ≈ 8,87 g/cm³ (valeur acceptée 8,96 g/cm³). Les résultats confirment ρ = m/V et le principe du déplacement d'Archimède. L'écart < 5 % est dû à la précision des mesures.",
    "ai": {
      "opening": "La densité est l'une des propriétés les plus fondamentales des matériaux ! Posez-moi des questions sur ρ = m/V, les deux méthodes ou la réduction des erreurs.",
      "keywords": {
        "setup": "balance|pied à coulisse|vase à débordement|vase d'Eureka",
        "formula": "ρ = m/V|déplacement",
        "error": "bulles d'air dans le déplacement|lecture du pied à coulisse|dérive de la balance",
        "question": "densité|déplacement|identification du matériau",
        "real": "flottabilité des navires|identification des minéraux|science alimentaire"
      },
      "hint": "ρ = m/V. Méthode 1 : V = πr²h. Méthode 2 : V = volume d'eau déplacée. Comparer les deux résultats aux valeurs de référence.",
      "expected": "Cu : ρ ≈ 8,87 g/cm³ (acceptée ~8,96). Al ≈ 2,70. Acier ≈ 7,72. Laiton ≈ 8,37 g/cm³."
    }
  }
]

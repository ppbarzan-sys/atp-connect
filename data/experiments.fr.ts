import { Experiment } from './experiments'

export const experimentsFr: Experiment[] = [
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
  },
{
    "num": 8,
    "cardEmoji": "➡️",
    "title": "Composition et décomposition des forces",
    "section": "Mécanique",
    "desc": "Trouver la résultante de deux forces concourantes à l'aide de la règle du parallélogramme et la vérifier avec une troisième force d'équilibre.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves appliquent la règle du parallélogramme pour additionner graphiquement des vecteurs forces et vérifient le résultat par mesure avec un cercle goniométrique et trois dynamomètres.",
      "instructions": [
        "Monter trois dynamomètres sur le cercle goniométrique à des angles connus.",
        "Régler F₁ = 40 g (0,39 N) et F₂ = 20 g (0,20 N) à un angle θ connu entre elles.",
        "Trouver expérimentalement la troisième force (force d'équilibre) ; la résultante R lui est égale et opposée.",
        "Tracer le parallélogramme graphiquement et comparer avec la résultante mesurée."
      ],
      "expectedOutcome": "F₁ = 40 g, F₂ = 20 g → R mesurée ≈ 0,50 N ; la règle du parallélogramme donne ≈ 0,56 N. L'écart est dû au frottement et à la lecture des angles."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔵",
          "name": "Cercle goniométrique (0–360°)"
        },
        {
          "emoji": "🔧",
          "name": "Trois dynamomètres à ressort"
        },
        {
          "emoji": "📐",
          "name": "Rapporteur"
        },
        {
          "emoji": "📏",
          "name": "Règle"
        },
        {
          "emoji": "📝",
          "name": "Papier millimétré"
        }
      ],
      "observationsToRecord": [
        "Intensités F₁ et F₂ (N) et l'angle θ entre elles",
        "Intensité de la force d'équilibre F₃ (N) et sa direction",
        "Intensité et direction de la résultante construite graphiquement"
      ],
      "theoryPoints": [
        "Les forces sont des vecteurs : elles ont à la fois une intensité et une direction.",
        "La résultante R de deux forces est obtenue par la règle du parallélogramme : R² = F₁² + F₂² + 2F₁F₂cos θ.",
        "La force d'équilibre est égale en intensité mais opposée en direction à la résultante.",
        "Pour trois forces concourantes en équilibre : ΣF = 0."
      ],
      "realWorldConnections": [
        "Les ingénieurs décomposent les forces dans les treillis de ponts en composantes horizontales et verticales.",
        "Les pilotes utilisent l'addition vectorielle pour tenir compte du vent lors de la navigation.",
        "La biomécanique utilise des vecteurs forces pour analyser les charges articulaires dans le corps humain."
      ],
      "formula": "R = √(F₁² + F₂² + 2F₁F₂cos θ)   |   Équilibre : ΣF = 0"
    },
    "questions": {
      "mcq": [
        {
          "text": "Deux forces de 40 g et 20 g agissent à 90° l'une de l'autre. Quelle est la résultante approximative ?",
          "options": [
            "0,44 N",
            "0,60 N",
            "0,20 N",
            "0,59 N"
          ],
          "correctIndex": 0,
          "explanation": "R = √(0,39² + 0,20²) = √(0,152 + 0,040) = √0,192 ≈ 0,44 N."
        },
        {
          "text": "La force d'équilibre est :",
          "options": [
            "Égale à la résultante en intensité et en direction",
            "Égale en intensité mais opposée en direction à la résultante",
            "Deux fois la résultante",
            "À 90° de la résultante"
          ],
          "correctIndex": 1,
          "explanation": "La force d'équilibre annule la résultante, elle lui est donc égale en intensité et opposée en direction."
        },
        {
          "text": "Si θ = 0° (forces parallèles dans la même direction), l'intensité de la résultante est égale à :",
          "options": [
            "F₁ − F₂",
            "F₁ + F₂",
            "√(F₁² + F₂²)",
            "F₁ × F₂"
          ],
          "correctIndex": 1,
          "explanation": "Quand θ = 0°, cos 0° = 1, donc R = √(F₁² + F₂² + 2F₁F₂) = F₁ + F₂."
        }
      ],
      "discussion": [
        "Expliquer pourquoi la résultante mesurée peut différer de la prédiction par la règle du parallélogramme.",
        "Comment la résultante changerait-elle si l'angle entre F₁ et F₂ passait de 90° à 180° ?",
        "Donner un exemple pratique où connaître la résultante de deux forces est important."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "La force comme vecteur",
          "pct": 25
        },
        {
          "label": "Règle du parallélogramme",
          "pct": 35
        },
        {
          "label": "Concept de force d'équilibre",
          "pct": 25
        },
        {
          "label": "Méthode graphique vs. analytique",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves additionnent souvent les intensités des forces sans tenir compte de la direction, traitant les forces comme des scalaires.",
        "Beaucoup pensent que la force d'équilibre est identique à la résultante ; elle lui est égale mais opposée.",
        "Oublier que le parallélogramme doit avoir les deux forces comme côtés adjacents, et non opposés."
      ],
      "hook": "Trois personnes tirent des cordes attachées à un anneau. Si vous connaissez deux des forces, pouvez-vous prédire la troisième nécessaire pour garder l'anneau immobile ? L'addition vectorielle donne la réponse !",
      "khanLinks": [
        {
          "title": "Introduction aux vecteurs",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-two-dimensional-motion/representing-vectors/v/introduction-to-vectors-and-scalars"
        },
        {
          "title": "Forces et lois de Newton",
          "url": "https://www.khanacademy.org/science/physics/forces-newtons-laws"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "F₁ (N)",
        "F₂ (N)",
        "Angle θ (°)",
        "R_mesurée (N)",
        "R_calculée (N)",
        "Différence (%)"
      ],
      "rows": 4
    },
    "observations": [
      "Relever les angles de chaque dynamomètre sur le cercle goniométrique.",
      "Noter tout effet de frottement empêchant l'anneau de rester centré.",
      "Comparer les valeurs de la résultante graphique et calculée."
    ],
    "conclusion": "La règle du parallélogramme a été vérifiée : pour F₁ = 0,39 N et F₂ = 0,20 N, la résultante calculée était ~0,56 N et la force d'équilibre mesurée donnait R ≈ 0,50 N. L'écart de ~12 % est attribué au frottement et à l'erreur de lecture des angles.",
    "ai": {
      "opening": "Prêt à additionner des forces comme un physicien ? Posez-moi des questions sur la règle du parallélogramme, les forces d'équilibre ou les composantes vectorielles !",
      "keywords": {
        "setup": "cercle goniométrique|dynamomètre|règle du parallélogramme|angle",
        "formula": "R = √(F₁²+F₂²+2F₁F₂cosθ)|force d'équilibre",
        "error": "frottement|lecture d'angle|erreur d'échelle graphique",
        "question": "résultante|force d'équilibre|vecteur|parallélogramme",
        "real": "génie civil ponts|navigation|biomécanique"
      },
      "hint": "R = √(F₁² + F₂² + 2F₁F₂cosθ). La force d'équilibre est égale et opposée à R. À 90°, R = √(F₁² + F₂²).",
      "expected": "F₁=0,39 N, F₂=0,20 N à ~90° : R_calc ≈ 0,56 N, R_mesurée ≈ 0,50 N."
    }
  },
  {
    "num": 9,
    "cardEmoji": "🪝",
    "title": "Poulies fixes",
    "section": "Mécanique",
    "desc": "Montrer qu'une poulie fixe simple change la direction de la force mais pas son intensité ; avantage mécanique = 1.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves vérifient qu'une poulie fixe a un AM = 1 (effort = charge) et confirment que son seul avantage est de changer la direction de la force.",
      "instructions": [
        "Suspendre une charge de 50 g d'un côté de la corde de la poulie.",
        "Appliquer une force de l'autre côté et la mesurer avec un dynamomètre.",
        "Faire varier la charge et enregistrer l'effort requis à chaque fois."
      ],
      "expectedOutcome": "Pour chaque charge, effort ≈ charge. Deux masses de 50 g (une de chaque côté) : les deux dynamomètres indiquent ~0,49 N. AM = 1."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔵",
          "name": "Poulie fixe sur support"
        },
        {
          "emoji": "🪢",
          "name": "Corde inextensible"
        },
        {
          "emoji": "🏋️",
          "name": "Masses (50 g, 100 g)"
        },
        {
          "emoji": "🔧",
          "name": "Dynamomètre à ressort"
        }
      ],
      "observationsToRecord": [
        "Charge W (N) suspendue d'un côté",
        "Effort F (N) mesuré de l'autre côté",
        "Avantage mécanique AM = W/F"
      ],
      "theoryPoints": [
        "Une poulie fixe (simple) : l'axe est fixe ; seule la roue tourne.",
        "La tension est la même partout dans une corde idéale (sans masse, sans frottement).",
        "Avantage mécanique AM = Charge / Effort = 1 pour une poulie fixe.",
        "Avantage de la poulie fixe : elle permet de tirer vers le bas pour soulever une charge vers le haut."
      ],
      "realWorldConnections": [
        "Les mâts de drapeaux utilisent une poulie fixe — on tire vers le bas pour hisser le drapeau.",
        "Les gréements de scène de théâtre utilisent des poulies fixes pour rediriger les forces de levage.",
        "Les grues combinent poulies fixes et mobiles pour obtenir un grand avantage mécanique."
      ],
      "formula": "AM = Charge / Effort = 1   (poulie fixe)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Quel est l'avantage mécanique d'une poulie fixe simple ?",
          "options": [
            "0,5",
            "1",
            "2",
            "4"
          ],
          "correctIndex": 1,
          "explanation": "Une poulie fixe redirige seulement la force ; l'effort est égal à la charge, donc AM = Charge/Effort = 1."
        },
        {
          "text": "Une masse de 100 g est suspendue à une poulie fixe. Quel effort est nécessaire pour la maintenir en équilibre ?",
          "options": [
            "0,49 N",
            "0,98 N",
            "1,96 N",
            "0,25 N"
          ],
          "correctIndex": 0,
          "explanation": "Charge = 0,1 × 9,81 = 0,981 N. Effort = Charge / AM = 0,981 / 1 = 0,981 N ≈ 0,98 N. Attention — 100 g = 0,981 N donc effort = 0,981 N ≈ 0,98 N."
        },
        {
          "text": "Pourquoi une poulie fixe ne réduit-elle PAS l'effort nécessaire ?",
          "options": [
            "Parce que la corde n'est pas idéale",
            "Parce qu'un seul segment de corde supporte la charge",
            "Parce qu'il y a trop de frottement",
            "Parce que la masse est trop petite"
          ],
          "correctIndex": 1,
          "explanation": "Un seul segment de corde supporte la charge ; tout le poids doit être égalé par l'effort."
        }
      ],
      "discussion": [
        "Si une poulie fixe a un AM = 1, quel avantage pratique offre-t-elle ?",
        "En quoi une poulie fixe diffère-t-elle d'une poulie mobile en termes d'avantage mécanique ?",
        "Décrire une situation réelle où rediriger une force (même sans la multiplier) est utile."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "AM = 1 pour la poulie fixe",
          "pct": 30
        },
        {
          "label": "Avantage de la redirection de la force",
          "pct": 30
        },
        {
          "label": "Concept de tension dans la corde",
          "pct": 25
        },
        {
          "label": "Poulie idéale vs. réelle",
          "pct": 15
        }
      ],
      "misconceptions": [
        "De nombreux élèves s'attendent à ce qu'une poulie réduise toujours l'effort nécessaire ; une poulie fixe simple ne le fait pas.",
        "Confondre l'« avantage mécanique » avec le « rapport de vitesse » — pour les machines idéales ils sont égaux.",
        "Ignorer la masse de la corde et de la poulie peut donner des résultats idéalisés différents de la réalité."
      ],
      "hook": "Pourquoi les maçons utilisent-ils une poulie simple au sommet d'un échafaudage pour soulever des briques ? Non pour réduire l'effort — mais pour tirer vers le bas plutôt que de pousser vers le haut. La direction compte !",
      "khanLinks": [
        {
          "title": "Travail et énergie",
          "url": "https://www.khanacademy.org/science/physics/work-and-energy/work-and-energy-tutorial/v/introduction-to-work-and-energy"
        },
        {
          "title": "Forces et lois de Newton",
          "url": "https://www.khanacademy.org/science/physics/forces-newtons-laws"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Charge (g)",
        "Charge W (N)",
        "Effort F (N)",
        "AM = W/F"
      ],
      "rows": 4
    },
    "observations": [
      "Comparer les lectures d'effort et de charge pour chaque essai.",
      "Noter tout effet de frottement rendant l'effort légèrement supérieur à la charge.",
      "Observer que la poulie ne change que la direction de la force."
    ],
    "conclusion": "La poulie fixe a un AM ≈ 1 : l'effort est égal à la charge (compte tenu du frottement). Pour une charge de 50 g : W = 0,49 N, effort ≈ 0,49 N. Le seul avantage est l'inversion de la direction de la force.",
    "ai": {
      "opening": "Les poulies sont des machines simples ! Posez-moi des questions sur l'avantage mécanique, la tension dans la corde ou l'importance de la direction.",
      "keywords": {
        "setup": "poulie fixe|corde|dynamomètre|support",
        "formula": "AM = Charge/Effort = 1|tension",
        "error": "frottement|masse de la corde|masse de la poulie",
        "question": "avantage mécanique|poulie fixe|direction|tension",
        "real": "mât de drapeau|grue|gréement de théâtre"
      },
      "hint": "AM = Charge/Effort = 1 pour une poulie fixe. L'effort est égal à la charge. L'avantage est le changement de direction, pas la réduction de force.",
      "expected": "Charge 50 g : W = 0,49 N, effort ≈ 0,49 N. AM ≈ 1 pour toutes les charges."
    }
  },
  {
    "num": 10,
    "cardEmoji": "🔄",
    "title": "Poulie mobile",
    "section": "Mécanique",
    "desc": "Démontrer qu'une poulie mobile simple procure un avantage mécanique de 2, réduisant de moitié l'effort requis.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves vérifient que P = R/2 (effort = moitié de la charge) pour une poulie mobile, confirmant AM = 2.",
      "instructions": [
        "Monter la poulie mobile avec les deux segments de corde soutenant la charge.",
        "Attacher un dynamomètre à l'extrémité libre de la corde (côté effort).",
        "Charger la poulie avec des masses de 50 g à 200 g et enregistrer l'effort à chaque fois."
      ],
      "expectedOutcome": "M = [50, 100, 150, 200] g → Charge R = [0,49 ; 0,98 ; 1,47 ; 1,96] N → Effort P ≈ [0,20 ; 0,50 ; 0,80 ; 1,10] N (≈ R/2 avec frottement)."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔵",
          "name": "Poulie mobile"
        },
        {
          "emoji": "🔵",
          "name": "Poulie fixe (pour guidage)"
        },
        {
          "emoji": "🪢",
          "name": "Corde"
        },
        {
          "emoji": "🏋️",
          "name": "Masses (50 g, 100 g, 150 g, 200 g)"
        },
        {
          "emoji": "🔧",
          "name": "Dynamomètre à ressort"
        }
      ],
      "observationsToRecord": [
        "Charge R (N) pour chaque masse",
        "Effort P (N) mesuré par le dynamomètre",
        "AM = R/P pour chaque essai"
      ],
      "theoryPoints": [
        "Une poulie mobile se déplace avec la charge ; deux segments de corde la soutiennent.",
        "AM idéal = 2 : Effort P = Charge R / 2.",
        "AM réel < 2 en raison du frottement et du poids de la poulie.",
        "Le déplacement : quand l'effort se déplace de 2× la distance, la charge se déplace de 1× (rapport de vitesse = 2)."
      ],
      "realWorldConnections": [
        "Les systèmes de palan en voile utilisent plusieurs poulies mobiles pour obtenir de grands avantages mécaniques.",
        "Les grues de construction utilisent des poulies mobiles pour soulever de lourdes poutres en acier.",
        "Les machines à câbles de salle de sport utilisent des systèmes de poulies pour ajuster la résistance effective."
      ],
      "formula": "P = R / 2   |   AM = R/P = 2   (poulie mobile idéale)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Une poulie mobile supporte une charge de 200 g. Quel est l'effort idéal requis ?",
          "options": [
            "0,49 N",
            "0,98 N",
            "1,96 N",
            "0,25 N"
          ],
          "correctIndex": 1,
          "explanation": "Charge = 0,2 × 9,81 = 1,962 N. P = R/2 = 1,962/2 = 0,981 N ≈ 0,98 N."
        },
        {
          "text": "Pourquoi l'AM réel d'une poulie mobile est-il légèrement inférieur à 2 ?",
          "options": [
            "La corde est trop courte",
            "Le frottement et le poids de la poulie elle-même réduisent l'AM",
            "La charge est trop lourde",
            "La corde est élastique"
          ],
          "correctIndex": 1,
          "explanation": "Le frottement et le poids propre de la poulie nécessitent tous deux un effort supplémentaire, réduisant l'AM réel en dessous de la valeur idéale de 2."
        },
        {
          "text": "Si l'effort se déplace de 20 cm, de combien la charge se déplace-t-elle dans une poulie mobile idéale ?",
          "options": [
            "20 cm",
            "40 cm",
            "10 cm",
            "5 cm"
          ],
          "correctIndex": 2,
          "explanation": "Rapport de vitesse = 2, donc la charge se déplace de la distance d'effort / 2 = 20/2 = 10 cm."
        }
      ],
      "discussion": [
        "Pourquoi une poulie mobile exige-t-elle que la corde d'effort se déplace deux fois plus loin que la charge ?",
        "Comment le frottement affecte-t-il l'avantage mécanique d'un système de poulie réel ?",
        "Concevoir un système de poulie pour obtenir un AM = 4. Combien de poulies mobiles sont nécessaires ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Dérivation de AM = 2",
          "pct": 30
        },
        {
          "label": "Deux segments de corde soutenant la charge",
          "pct": 25
        },
        {
          "label": "Concept de rapport de vitesse",
          "pct": 25
        },
        {
          "label": "AM réel vs. idéal",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Les élèves pensent qu'une poulie mobile et une poulie fixe ont le même AM ; la poulie mobile a AM = 2.",
        "Beaucoup oublient que la corde d'effort doit se déplacer deux fois plus loin que la charge (conservation de l'énergie).",
        "Ignorer le poids de la poulie conduit à surestimer l'AM théorique."
      ],
      "hook": "Une poulie mobile signifie qu'il suffit d'exercer la moitié de la force pour soulever une charge ! Mais il y a un inconvénient — votre main doit se déplacer deux fois plus loin. L'énergie est toujours conservée !",
      "khanLinks": [
        {
          "title": "Travail et avantage mécanique",
          "url": "https://www.khanacademy.org/science/physics/work-and-energy/work-and-energy-tutorial/v/introduction-to-work-and-energy"
        },
        {
          "title": "AP Physique 1 : Travail et énergie",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-work-and-energy"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Masse (g)",
        "Charge R (N)",
        "Effort P (N)",
        "AM = R/P",
        "AM idéal"
      ],
      "rows": 4
    },
    "observations": [
      "Enregistrer P et R pour chaque charge et calculer l'AM.",
      "Comparer l'AM réel avec la valeur idéale de 2.",
      "Mesurer de combien la corde d'effort se déplace pour un déplacement de charge fixe."
    ],
    "conclusion": "La poulie mobile a donné AM ≈ 1,8–2,0 (idéal = 2). Pour une charge de 100 g : R = 0,98 N, P ≈ 0,50 N, AM ≈ 1,96. Le léger écart par rapport à AM = 2 est dû au frottement et au poids de la poulie.",
    "ai": {
      "opening": "Les poulies mobiles sont des multiplicateurs de force ! Demandez-moi comment AM = 2 est dérivé, ou comment le frottement affecte le résultat.",
      "keywords": {
        "setup": "poulie mobile|deux segments de corde|dynamomètre",
        "formula": "P = R/2|AM = 2|rapport de vitesse",
        "error": "frottement|poids de la poulie|allongement de la corde",
        "question": "avantage mécanique|poulie mobile|rapport de vitesse|effort",
        "real": "grue|palan|voile"
      },
      "hint": "AM = 2 pour une poulie mobile idéale : P = R/2. En pratique, le frottement rend P légèrement supérieur à R/2.",
      "expected": "Charge 100 g : R = 0,98 N, P ≈ 0,50 N, AM ≈ 1,96. 200 g : R = 1,96 N, P ≈ 1,10 N, AM ≈ 1,78."
    }
  },
  {
    "num": 11,
    "cardEmoji": "⛓️",
    "title": "Poulies fixe et mobile",
    "section": "Mécanique",
    "desc": "Combiner une poulie fixe et une poulie mobile et montrer que le système donne toujours AM ≈ 2 avec l'avantage du changement de direction.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves constatent que la combinaison d'une poulie fixe (guide) avec une poulie mobile maintient AM = 2 tout en permettant d'appliquer l'effort vers le bas.",
      "instructions": [
        "Montage : poulie mobile sous la charge + poulie fixe en haut pour rediriger l'effort.",
        "Tirer le dynamomètre vers le bas et enregistrer l'effort pour chaque charge.",
        "Vérifier que P = R/2 est toujours valable et que la corde d'effort se déplace de 2× le déplacement de la charge."
      ],
      "expectedOutcome": "P = R/2 comme avec une poulie mobile simple. Tirer 2 cm de corde soulève la charge de 1 cm."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔵",
          "name": "Poulie mobile"
        },
        {
          "emoji": "🔵",
          "name": "Poulie fixe (guide)"
        },
        {
          "emoji": "🪢",
          "name": "Corde"
        },
        {
          "emoji": "🏋️",
          "name": "Masses (50 g, 100 g, 150 g)"
        },
        {
          "emoji": "🔧",
          "name": "Dynamomètre à ressort"
        }
      ],
      "observationsToRecord": [
        "Charge R (N) pour chaque masse",
        "Effort P (N) avec le système combiné",
        "Distance parcourue par la corde d'effort vs. distance de montée de la charge"
      ],
      "theoryPoints": [
        "Poulie fixe : change seulement la direction, AM = 1.",
        "Poulie mobile : AM = 2, effort = R/2.",
        "Système combiné : la poulie fixe redirige l'effort vers le bas ; la poulie mobile donne toujours AM = 2.",
        "Déplacement de la corde : la corde d'effort se déplace de 2× le déplacement de la charge (rapport de vitesse = 2)."
      ],
      "realWorldConnections": [
        "Les ascenseurs utilisent des systèmes de poulies combinés à la fois pour l'AM et la direction de commande pratique.",
        "Les poulies de puits combinent poulies fixes et mobiles pour le pompage pratique de l'eau.",
        "Les câbles de dérailleur de vélo utilisent de petites poulies pour rediriger et tendre la chaîne."
      ],
      "formula": "P = R/2   |   AM = 2   |   s_effort = 2 × s_charge"
    },
    "questions": {
      "mcq": [
        {
          "text": "Dans un système de poulies combinées (fixe + mobile), quel est l'avantage mécanique ?",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "correctIndex": 1,
          "explanation": "La poulie fixe ne fait que rediriger ; la poulie mobile fournit AM = 2."
        },
        {
          "text": "Si la charge monte de 5 cm, de combien la corde d'effort se déplace-t-elle ?",
          "options": [
            "5 cm",
            "10 cm",
            "2,5 cm",
            "20 cm"
          ],
          "correctIndex": 1,
          "explanation": "Rapport de vitesse = 2 ; la corde d'effort se déplace de 2 × 5 cm = 10 cm."
        },
        {
          "text": "Quel est le principal avantage d'ajouter une poulie fixe au système ?",
          "options": [
            "Elle double l'AM",
            "Elle réduit la charge de moitié",
            "Elle permet d'appliquer l'effort dans une direction plus pratique",
            "Elle élimine le frottement"
          ],
          "correctIndex": 2,
          "explanation": "La poulie fixe (guide) redirige la corde d'effort pour permettre de tirer vers le bas plutôt que vers le haut."
        }
      ],
      "discussion": [
        "Pourquoi l'ajout de la poulie fixe guide ne modifie-t-il PAS l'avantage mécanique du système ?",
        "Comparer le déplacement de la corde d'effort avec celui de la charge. Quel principe explique cela ?",
        "Comment augmenter l'AM au-delà de 2 en utilisant plus de poulies ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Rôle de la poulie fixe (direction seulement)",
          "pct": 25
        },
        {
          "label": "La poulie mobile fournit AM = 2",
          "pct": 35
        },
        {
          "label": "Rapport de vitesse s_effort = 2s_charge",
          "pct": 25
        },
        {
          "label": "Commodité pratique du système combiné",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves s'attendent à ce que le système combiné ait AM = 3 (1+2) ; la poulie fixe ne contribue pas à l'AM.",
        "Confondre le nombre total de segments de corde avec l'avantage mécanique dans les systèmes combinés.",
        "Supposer que le frottement est négligeable ; les systèmes réels ont toujours des pertes par frottement."
      ],
      "hook": "Un puits utilise une poignée pour tirer un seau vers le haut. Mais imaginez un système de poulies qui réduit de moitié votre effort ET vous permet de tirer dans une direction naturelle ? Les poulies combinées font exactement cela !",
      "khanLinks": [
        {
          "title": "Introduction au travail et à l'énergie",
          "url": "https://www.khanacademy.org/science/physics/work-and-energy/work-and-energy-tutorial/v/introduction-to-work-and-energy"
        },
        {
          "title": "AP Physique 1 : Travail et énergie",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-work-and-energy"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Masse (g)",
        "Charge R (N)",
        "Effort P (N)",
        "AM = R/P",
        "s_effort (cm)",
        "s_charge (cm)"
      ],
      "rows": 4
    },
    "observations": [
      "Vérifier que P ≈ R/2 pour le système combiné comme pour la poulie mobile simple.",
      "Mesurer s_effort et s_charge et confirmer le rapport 2:1.",
      "Observer la direction de la force d'effort (vers le bas) par rapport à la charge (vers le haut)."
    ],
    "conclusion": "Le système de poulies combinées (fixe + mobile) maintient AM = 2 (P = R/2) tout en permettant d'appliquer l'effort vers le bas. Le déplacement de la corde d'effort était 2× le déplacement de la charge dans tous les essais.",
    "ai": {
      "opening": "Les poulies combinées vous donnent direction ET avantage mécanique ! Demandez-moi comment AM = 2 est maintenu et comment les distances des cordes sont liées.",
      "keywords": {
        "setup": "poulie fixe|poulie mobile|système combiné|guide",
        "formula": "P = R/2|AM=2|s_effort = 2×s_charge",
        "error": "frottement|masse de la corde|comptage incorrect des poulies",
        "question": "AM|poulie combinée|rapport de vitesse|direction",
        "real": "ascenseur|puits|grue"
      },
      "hint": "La poulie fixe ne fait que rediriger. La poulie mobile donne AM = 2. Ensemble : P = R/2 et l'effort se déplace 2× plus loin que la charge.",
      "expected": "P ≈ R/2 pour toutes les charges. s_effort = 2 × s_charge confirmé. AM ≈ 2."
    }
  },
  {
    "num": 12,
    "cardEmoji": "📐",
    "title": "Plan incliné",
    "section": "Mécanique",
    "desc": "Mesurer la force nécessaire pour faire glisser une masse sur un plan incliné et la comparer à la composante théorique de la pesanteur le long de la pente.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves vérifient que F = mg sin θ (la composante de la pesanteur le long de la pente) et mesurent l'avantage mécanique AM = 1/sin θ.",
      "instructions": [
        "Régler le plan incliné à un angle θ mesuré (par ex. 23,16°).",
        "Attacher un dynamomètre à une masse sur la pente ; tirer parallèlement à la surface.",
        "Enregistrer la force F pour des masses de 50 g, 100 g et 150 g."
      ],
      "expectedOutcome": "À θ = 23,16° : M = [50, 100, 150] g → F ≈ [0,7 ; 0,9 ; 1,1] N. Théorique : mg sin 23,16° = [0,19 ; 0,39 ; 0,58] N. La différence est due au frottement."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "📐",
          "name": "Plan incliné avec échelle d'angles"
        },
        {
          "emoji": "🏋️",
          "name": "Masses (50 g, 100 g, 150 g)"
        },
        {
          "emoji": "🔧",
          "name": "Dynamomètre à ressort"
        },
        {
          "emoji": "📏",
          "name": "Rapporteur / règle"
        },
        {
          "emoji": "🪢",
          "name": "Corde"
        }
      ],
      "observationsToRecord": [
        "Angle de la pente θ (degrés)",
        "Masse m (g) et poids mg (N)",
        "Force F (N) pour tirer la masse le long de la pente"
      ],
      "theoryPoints": [
        "Composante de la pesanteur le long de la pente : F_parallèle = mg sin θ.",
        "Avantage mécanique du plan incliné sans frottement : AM = 1/sin θ = l/h.",
        "Force de frottement f = μN = μ mg cos θ s'ajoute à l'effort requis.",
        "Effort total (avec frottement) : F = mg sin θ + μ mg cos θ.",
        "Un plan incliné échange la distance contre la force : faible angle → grand AM mais chemin long."
      ],
      "realWorldConnections": [
        "Les routes et les rampes sont des plans inclinés qui réduisent la force nécessaire pour monter.",
        "Les rampes pour fauteuils roulants doivent légalement avoir un angle suffisamment faible pour un accès sûr.",
        "Les vis et les coins sont des plans inclinés enroulés autour d'un cylindre."
      ],
      "formula": "F = mg sin θ   (sans frottement)   |   AM = 1/sin θ = l/h"
    },
    "questions": {
      "mcq": [
        {
          "text": "Une masse de 100 g est sur une pente sans frottement à 30°. Quelle force est nécessaire pour la tirer le long de la pente ?",
          "options": [
            "0,49 N",
            "0,85 N",
            "0,98 N",
            "0,57 N"
          ],
          "correctIndex": 0,
          "explanation": "F = mg sin 30° = 0,1 × 9,81 × 0,5 = 0,49 N."
        },
        {
          "text": "À θ = 23°, l'AM d'un plan incliné sans frottement est approximativement :",
          "options": [
            "2,56",
            "0,39",
            "1,00",
            "4,35"
          ],
          "correctIndex": 0,
          "explanation": "AM = 1/sin 23° = 1/0,391 ≈ 2,56."
        },
        {
          "text": "Pourquoi la force mesurée est-elle supérieure à mg sin θ ?",
          "options": [
            "Erreur de mesure uniquement",
            "Frottement entre la masse et la surface",
            "Le dynamomètre à ressort est défectueux",
            "L'angle est incorrect"
          ],
          "correctIndex": 1,
          "explanation": "Le frottement ajoute μ mg cos θ à l'effort requis, rendant la force réelle supérieure à la valeur théorique sans frottement."
        }
      ],
      "discussion": [
        "Expliquer pourquoi une pente douce est plus facile à gravir qu'une pente raide, en utilisant les forces.",
        "Une rampe fait 3 m de long et monte de 1 m. Quel est son AM ? Quel effort est nécessaire pour pousser une caisse de 60 kg dessus ?",
        "Comment le frottement affecte-t-il l'avantage mécanique d'un plan incliné réel ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Force sur la pente F = mg sinθ",
          "pct": 30
        },
        {
          "label": "Force normale N = mg cosθ",
          "pct": 20
        },
        {
          "label": "Frottement f = μN",
          "pct": 25
        },
        {
          "label": "AM = l/h = 1/sinθ",
          "pct": 25
        }
      ],
      "misconceptions": [
        "Les élèves pensent souvent que le frottement diminue sur des pentes plus raides ; en fait la force normale (et le frottement) diminue mais la force requise augmente quand même.",
        "Confondre la longueur de la pente avec la hauteur atteinte conduit à des erreurs de calcul de l'AM.",
        "Beaucoup oublient que le frottement est toujours dirigé à l'opposé du mouvement, augmentant l'effort requis."
      ],
      "hook": "Les Égyptiens anciens déplaçaient des blocs pesant des tonnes le long d'énormes rampes pour construire les pyramides. Ils avaient compris le plan incliné : avec une pente suffisamment douce, n'importe quelle force peut déplacer n'importe quelle charge !",
      "khanLinks": [
        {
          "title": "Composantes de la force sur un plan incliné",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/inclined-planes-ap/v/inclined-plane-force-components"
        },
        {
          "title": "Force normale et force de contact",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/normal-force-ap/v/normal-force-and-contact-force"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Masse (g)",
        "Poids mg (N)",
        "Angle θ (°)",
        "F_mesurée (N)",
        "mg·sinθ (N)",
        "Frottement f (N)"
      ],
      "rows": 4
    },
    "observations": [
      "Enregistrer la force nécessaire pour tirer chaque masse le long de la pente à vitesse constante.",
      "Calculer mg sin θ et comparer avec la force mesurée.",
      "La différence (F − mg sin θ) estime la force de frottement."
    ],
    "conclusion": "À θ = 23,16° : forces mesurées F ≈ 0,7 ; 0,9 ; 1,1 N pour 50, 100, 150 g. Théorique mg sin θ ≈ 0,19 ; 0,39 ; 0,58 N. La différence confirme une force de frottement significative sur la pente.",
    "ai": {
      "opening": "Les plans inclinés transforment les montées raides en poussées douces ! Posez-moi des questions sur F = mg sinθ, l'AM, ou comment le frottement change les choses.",
      "keywords": {
        "setup": "plan incliné|angle|dynamomètre|pente",
        "formula": "F = mg sinθ|AM = 1/sinθ|frottement = μN",
        "error": "frottement négligé|mesure d'angle|dynamomètre au mauvais angle",
        "question": "plan incliné|pente|avantage mécanique|frottement|angle",
        "real": "rampe|route|pyramide|vis"
      },
      "hint": "F = mg sinθ (sans frottement). F réelle = mg sinθ + μ mg cosθ. AM = l/h = 1/sinθ.",
      "expected": "θ = 23° : F_théorie = mg×0,392. M = 50 g : F_théorie ≈ 0,19 N mais F_mesurée ≈ 0,7 N. Le frottement est important."
    }
  },
  {
    "num": 13,
    "cardEmoji": "🪃",
    "title": "Loi de Hooke",
    "section": "Mécanique",
    "desc": "Vérifier la loi de Hooke en mesurant l'allongement d'un ressort en fonction de la force appliquée et déterminer la constante de raideur k.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves tracent F en fonction de x et vérifient F = kx. La pente de la droite est égale à la constante de raideur k (N/m).",
      "instructions": [
        "Suspendre le ressort verticalement ; enregistrer la longueur naturelle (sans charge).",
        "Ajouter des masses de 10 g, 25 g, 50 g ; mesurer la longueur totale et calculer l'allongement x.",
        "Tracer F = mg (axe y) en fonction de x (axe x) ; la pente est k."
      ],
      "expectedOutcome": "m = 10 g → x = 0,016 m ; m = 25 g → x = 0,040 m ; m = 50 g → x = 0,081 m. k = pente du graphe F en fonction de x."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🌀",
          "name": "Ressort hélicoïdal"
        },
        {
          "emoji": "📏",
          "name": "Règle ou mètre ruban"
        },
        {
          "emoji": "🏋️",
          "name": "Masses (10 g, 25 g, 50 g)"
        },
        {
          "emoji": "🪝",
          "name": "Porte-masse"
        },
        {
          "emoji": "📝",
          "name": "Papier millimétré"
        }
      ],
      "observationsToRecord": [
        "Longueur naturelle L₀ (m)",
        "Longueur totale L (m) avec chaque masse",
        "Allongement x = L − L₀ (m)",
        "Force appliquée F = mg (N)"
      ],
      "theoryPoints": [
        "Loi de Hooke : F = kx (force de rappel proportionnelle à l'allongement, dans la limite élastique).",
        "Constante de raideur k = F/x (N/m) : rigidité du ressort.",
        "La limite élastique est l'allongement maximum au-delà duquel le ressort est déformé de façon permanente.",
        "Graphe F en fonction de x : droite passant par l'origine avec pente = k.",
        "Le signe négatif dans F = −kx indique que la force de rappel s'oppose à l'allongement."
      ],
      "realWorldConnections": [
        "Les ressorts de suspension des voitures et des vélos absorbent les chocs grâce à la loi de Hooke.",
        "L'énergie potentielle élastique stockée dans un ressort comprimé fait fonctionner les mécanismes d'horlogerie.",
        "Les sismographes utilisent des systèmes masse-ressort pour détecter les vibrations du sol."
      ],
      "formula": "F = kx   |   k = F/x (N/m)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Un ressort s'allonge de 0,040 m quand une masse de 25 g est suspendue. Quelle est la valeur de k ?",
          "options": [
            "6,1 N/m",
            "0,61 N/m",
            "61 N/m",
            "0,245 N/m"
          ],
          "correctIndex": 0,
          "explanation": "F = 0,025 × 9,81 = 0,245 N ; k = F/x = 0,245/0,040 = 6,1 N/m."
        },
        {
          "text": "Que représente la pente d'un graphe F en fonction de x ?",
          "options": [
            "L'intensité du champ gravitationnel",
            "La constante de raideur k",
            "La masse du ressort",
            "La limite élastique"
          ],
          "correctIndex": 1,
          "explanation": "F = kx donc pente = ΔF/Δx = k."
        },
        {
          "text": "La loi de Hooke cesse d'être valable lorsque :",
          "options": [
            "La température augmente",
            "L'allongement dépasse la limite élastique",
            "La masse est retirée",
            "Le ressort est horizontal"
          ],
          "correctIndex": 1,
          "explanation": "Au-delà de la limite élastique, le ressort est déformé de façon permanente et la relation linéaire F = kx n'est plus valable."
        }
      ],
      "discussion": [
        "Comment déterminer la limite élastique du ressort à partir de votre graphe F en fonction de x ?",
        "Deux ressorts ont k₁ = 5 N/m et k₂ = 10 N/m. Lequel est le plus rigide ? Pourquoi ?",
        "Expliquer pourquoi un ressort obéit à la loi de Hooke seulement jusqu'à un certain allongement."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Loi de Hooke F = kx",
          "pct": 35
        },
        {
          "label": "Constante de raideur k à partir de la pente du graphe",
          "pct": 30
        },
        {
          "label": "Limite élastique",
          "pct": 20
        },
        {
          "label": "Analyse graphique",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves pensent parfois que k dépend de la charge ; c'est une propriété du ressort, constante dans la région élastique.",
        "Oublier de mesurer à partir de la longueur naturelle : allongement x = L − L₀, pas la longueur totale L.",
        "Supposer que le graphe doit passer par (0,0) ; en pratique une petite erreur de zéro peut le décaler."
      ],
      "hook": "Un pèse-lettre fonctionne grâce à la loi de Hooke — l'allongement est exactement proportionnel à la force. Sans cette règle simple, les balances de salle de bain seraient inutiles !",
      "khanLinks": [
        {
          "title": "Introduction aux ressorts et à la loi de Hooke",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/spring-forces-ap/v/intro-to-springs-and-hookers-law"
        },
        {
          "title": "Énergie potentielle élastique",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-work-and-energy/spring-potential-energy-ap/v/elastic-potential-energy-stored-in-a-spring"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Masse m (g)",
        "Force F = mg (N)",
        "Longueur totale L (m)",
        "Allongement x = L−L₀ (m)",
        "k = F/x (N/m)"
      ],
      "rows": 5
    },
    "observations": [
      "Enregistrer soigneusement la longueur naturelle L₀ sans aucune masse attachée.",
      "S'assurer que chaque masse est ajoutée doucement pour éviter les oscillations pendant la mesure.",
      "Tracer F en fonction de x et tracer la droite de meilleur ajustement passant par l'origine."
    ],
    "conclusion": "Loi de Hooke vérifiée : F = kx. Données : m = 10 g → x = 1,6 cm, m = 25 g → x = 4,0 cm, m = 50 g → x = 8,1 cm. Constante de raideur k ≈ 6,0 N/m d'après la pente du graphe. Relation linéaire confirmée dans la limite élastique.",
    "ai": {
      "opening": "Ressorts et loi de Hooke ! Demandez-moi comment trouver k, ce que signifie la limite élastique, ou comment tracer le graphe.",
      "keywords": {
        "setup": "ressort hélicoïdal|longueur naturelle|allongement|porte-masse",
        "formula": "F = kx|k = F/x|limite élastique",
        "error": "erreur de zéro|mesure à partir d'une mauvaise référence|au-delà de la limite élastique",
        "question": "loi de Hooke|constante de raideur|allongement|limite élastique",
        "real": "ressort de suspension|horlogerie|sismographe"
      },
      "hint": "x = L − L₀ (allongement, pas la longueur totale). Tracer F en fonction de x ; pente = k. F = kx seulement dans la limite élastique.",
      "expected": "10 g → x = 0,016 m ; 25 g → x = 0,040 m ; 50 g → x = 0,081 m. k ≈ 6 N/m d'après la pente de meilleur ajustement."
    }
  },
  {
    "num": 14,
    "cardEmoji": "🔗",
    "title": "Ressorts en série et en parallèle",
    "section": "Mécanique",
    "desc": "Mesurer la constante de raideur effective pour des ressorts montés en série et en parallèle, et explorer le surprenant « paradoxe des ressorts ».",
    "setupTime": "5 min",
    "duration": "30 min",
    "summary": {
      "whatTheyLearn": "Les élèves dérivent et vérifient 1/k_série = 1/k₁ + 1/k₂ et k_parallèle = k₁ + k₂, et observent le paradoxe où la coupe de la corde centrale de deux ressorts chargés fait monter une masse.",
      "instructions": [
        "Connecter deux ressorts en série : mesurer l'allongement pour chaque charge ; calculer 1/k_s.",
        "Connecter les mêmes ressorts en parallèle : mesurer l'allongement pour les mêmes charges ; calculer k_p.",
        "Mettre en place le paradoxe : deux ressorts comprimés contre une masse ; couper la corde centrale."
      ],
      "expectedOutcome": "Série : 1/k_s = 1/k₁ + 1/k₂ → k_s < k₁ ou k₂. Parallèle : k_p = k₁ + k₂ → plus rigide. Paradoxe : couper la corde centrale fait monter la masse connectée."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🌀",
          "name": "Deux ressorts hélicoïdaux identiques"
        },
        {
          "emoji": "📏",
          "name": "Règle"
        },
        {
          "emoji": "🏋️",
          "name": "Masses (50 g, 100 g)"
        },
        {
          "emoji": "✂️",
          "name": "Ciseaux (pour le paradoxe)"
        },
        {
          "emoji": "🧵",
          "name": "Corde"
        }
      ],
      "observationsToRecord": [
        "Allongement de la combinaison série pour chaque charge → k_série",
        "Allongement de la combinaison parallèle pour chaque charge → k_parallèle",
        "Direction du mouvement de la masse quand la corde centrale est coupée (paradoxe)"
      ],
      "theoryPoints": [
        "Ressorts en série : même tension dans chacun ; allongement total = x₁ + x₂ ; 1/k_s = 1/k₁ + 1/k₂.",
        "Ressorts en parallèle : partagent la charge ; même allongement ; k_p = k₁ + k₂.",
        "Les ressorts en série sont plus souples (k plus petit) ; les ressorts en parallèle sont plus rigides (k plus grand).",
        "Le paradoxe des ressorts : un ressort est comprimé et l'autre allongé par une corde. Couper la corde libère l'énergie stockée, provoquant une impulsion nette vers le haut sur la masse attachée."
      ],
      "realWorldConnections": [
        "Les suspensions de véhicules utilisent des combinaisons de ressorts réglées pour le confort (série, plus souple) ou la tenue de route (parallèle, plus rigide).",
        "Les ressorts de matelas sont en parallèle — de nombreux ressorts partagent la charge, donnant un k_p élevé.",
        "Les cordes de saut à l'élastique sont effectivement des ressorts en série (plus long → plus souple)."
      ],
      "formula": "Série : 1/k_s = 1/k₁ + 1/k₂   |   Parallèle : k_p = k₁ + k₂"
    },
    "questions": {
      "mcq": [
        {
          "text": "Deux ressorts chacun avec k = 10 N/m sont connectés en série. Quelle est la constante de ressort combinée ?",
          "options": [
            "20 N/m",
            "10 N/m",
            "5 N/m",
            "1 N/m"
          ],
          "correctIndex": 2,
          "explanation": "1/k_s = 1/10 + 1/10 = 2/10 ; k_s = 5 N/m."
        },
        {
          "text": "Deux ressorts chacun avec k = 10 N/m sont connectés en parallèle. Quelle est k_p ?",
          "options": [
            "5 N/m",
            "10 N/m",
            "20 N/m",
            "100 N/m"
          ],
          "correctIndex": 2,
          "explanation": "k_p = k₁ + k₂ = 10 + 10 = 20 N/m."
        },
        {
          "text": "Dans le paradoxe des ressorts, qu'est-ce qui fait monter la masse quand la corde est coupée ?",
          "options": [
            "La gravité s'inverse",
            "Le ressort comprimé libère son énergie élastique stockée",
            "La corde supportait un poids supplémentaire",
            "La pression atmosphérique augmente"
          ],
          "correctIndex": 1,
          "explanation": "Le ressort comprimé stockait de l'énergie potentielle élastique. Quand la contrainte (corde) est supprimée, cette énergie est libérée sous forme d'impulsion vers le haut."
        }
      ],
      "discussion": [
        "Pourquoi k_série < k₁ et k₂, tandis que k_parallèle > k₁ et k₂ ?",
        "Expliquer le paradoxe des ressorts en termes d'énergie potentielle élastique stockée.",
        "Un matelas a 100 ressorts en parallèle chacun avec k = 200 N/m. Quelle est la valeur totale de k ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Formule série 1/k_s = Σ1/kᵢ",
          "pct": 30
        },
        {
          "label": "Formule parallèle k_p = Σkᵢ",
          "pct": 30
        },
        {
          "label": "Vérification graphique",
          "pct": 20
        },
        {
          "label": "Paradoxe des ressorts (énergie élastique)",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Les élèves appliquent souvent la formule série (1/k_total) quand ils pensent parallèle et vice versa — rappel : série → plus souple ; parallèle → plus rigide.",
        "Beaucoup supposent que les ressorts en série s'allongent deux fois moins qu'un seul ressort ; en réalité ils s'allongent deux fois plus par unité de charge.",
        "Le paradoxe des ressorts surprend tout le monde : les élèves s'attendent à ce que la masse tombe ou reste immobile quand la corde est coupée."
      ],
      "hook": "Coupez la corde reliant deux ressorts chargés et observez ce qui se passe — une masse jaillit vers le haut ! Les ressorts peuvent stocker et libérer de l'énergie de façon inattendue.",
      "khanLinks": [
        {
          "title": "Forces des ressorts (AP Physique 1)",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/spring-forces-ap"
        },
        {
          "title": "Introduction aux ressorts et à la loi de Hooke",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/spring-forces-ap/v/intro-to-springs-and-hookers-law"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Configuration",
        "Masse (g)",
        "Charge F (N)",
        "Allongement x (m)",
        "k_eff (N/m)"
      ],
      "rows": 6
    },
    "observations": [
      "Enregistrer l'allongement en série et en parallèle pour les mêmes charges.",
      "Confirmer que la série s'allonge plus qu'un seul ressort et que le parallèle s'allonge moins.",
      "Observer la direction du mouvement quand la corde du paradoxe est coupée."
    ],
    "conclusion": "Série : k_s = k/2 pour des ressorts égaux (plus souple). Parallèle : k_p = 2k (plus rigide). Formules vérifiées avec une erreur inférieure à 5 %. Paradoxe : la masse est montée quand la corde centrale a été coupée — la libération d'énergie élastique l'a expliqué.",
    "ai": {
      "opening": "Ressorts en série ou en parallèle — lequel est le plus rigide ? Et c'est quoi le paradoxe des ressorts ? Posez-moi toutes vos questions sur les combinaisons de ressorts !",
      "keywords": {
        "setup": "ressorts en série|ressorts en parallèle|corde|masses",
        "formula": "1/k_s = 1/k₁+1/k₂|k_p = k₁+k₂|paradoxe",
        "error": "lecture de l'allongement|frottement|corde non coupée proprement",
        "question": "série|parallèle|constante de raideur|paradoxe|énergie élastique",
        "real": "suspension de véhicule|matelas|saut à l'élastique"
      },
      "hint": "Série : 1/k_s = 1/k₁+1/k₂ (plus souple). Parallèle : k_p = k₁+k₂ (plus rigide). Paradoxe : le ressort comprimé stocke de l'énergie → libère une impulsion vers le haut quand la corde est coupée.",
      "expected": "Ressorts égaux k = 6 N/m : série k_s = 3 N/m ; parallèle k_p = 12 N/m. Paradoxe : la masse monte quand la corde est coupée."
    }
  },
{
    "num": 15,
    "cardEmoji": "🕰️",
    "title": "Pendule simple",
    "section": "Mécanique",
    "desc": "Mesurer la période d'un pendule simple pour différentes longueurs et vérifier T = 2π√(L/g).",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves mesurent T pour des longueurs L = 0,25 m et L = 1,0 m et confirment T² ∝ L, permettant le calcul de g.",
      "instructions": [
        "Régler la longueur du pendule L = 0,25 m ; écarter de moins de 5° de la verticale et relâcher.",
        "Chronométrer 50 oscillations complètes (50T) avec un chronomètre.",
        "Répéter pour L = 1,0 m. Calculer T et comparer avec T = 2π√(L/g)."
      ],
      "expectedOutcome": "L = 0,25 m → T ≈ 1,0 s ; L = 1,0 m → T ≈ 2,0 s. Rapport T(1m)/T(0,25m) = 2 = √(1/0,25)."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚫",
          "name": "Masse (petite sphère dense)"
        },
        {
          "emoji": "🧵",
          "name": "Fil inextensible (réglable 0,25–1,0 m)"
        },
        {
          "emoji": "⏱️",
          "name": "Chronomètre"
        },
        {
          "emoji": "📏",
          "name": "Règle"
        },
        {
          "emoji": "🔩",
          "name": "Pince et support"
        }
      ],
      "observationsToRecord": [
        "Longueur L (m) du pivot au centre de la masse",
        "Temps pour 50 oscillations t₅₀ (s)",
        "Période T = t₅₀/50 (s)",
        "T² (s²)"
      ],
      "theoryPoints": [
        "T = 2π√(L/g) : la période dépend uniquement de la longueur et de g, pas de la masse ni de l'amplitude (< 10°).",
        "En élevant au carré : T² = (4π²/g) L — relation linéaire entre T² et L.",
        "La pente du graphe T² en fonction de L = 4π²/g → g = 4π²/pente.",
        "Chronométrer 50 oscillations réduit l'erreur relative sur T."
      ],
      "realWorldConnections": [
        "Les horloges à pendule ont utilisé ce principe pendant 300 ans pour mesurer le temps avec précision.",
        "Le pendule de Foucault démontre la rotation de la Terre.",
        "Les gravimètres utilisent des pendules de précision pour cartographier le champ gravitationnel terrestre."
      ],
      "formula": "T = 2π√(L/g)   |   T² = (4π²/g) × L"
    },
    "questions": {
      "mcq": [
        {
          "text": "Un pendule de longueur 1,0 m. Quelle est sa période ? (g = 9,81 m/s²)",
          "options": [
            "2,01 s",
            "1,00 s",
            "3,14 s",
            "0,50 s"
          ],
          "correctIndex": 0,
          "explanation": "T = 2π√(1,0/9,81) = 2π × 0,319 = 2,006 s ≈ 2,01 s."
        },
        {
          "text": "Si L est multiplié par 4, T :",
          "options": [
            "Double",
            "Est multiplié par 4",
            "Est divisé par 2",
            "Reste identique"
          ],
          "correctIndex": 0,
          "explanation": "T ∝ √L. Multiplier L par 4 multiplie √L par 2, donc T double."
        },
        {
          "text": "Pourquoi mesurer 50 oscillations plutôt qu'une seule ?",
          "options": [
            "Pour faire osciller le pendule plus vite",
            "Pour réduire l'erreur relative sur T",
            "Pour augmenter l'amplitude",
            "Pour changer la fréquence"
          ],
          "correctIndex": 1,
          "explanation": "L'erreur de temps de réaction est ~0,2 s quelle que soit la mesure ; pour 50 oscillations, cela ne représente que 0,2/50T ≈ 0,2 % d'erreur au lieu de 20 % pour 1 oscillation."
        }
      ],
      "discussion": [
        "Comment utiliser votre graphe T² en fonction de L pour déterminer g ?",
        "La masse de la boule affecte-t-elle la période ? Justifiez votre réponse en utilisant la formule.",
        "Une horloge grand-père retarde. Faut-il raccourcir ou allonger son pendule pour la corriger ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "T = 2π√(L/g)",
          "pct": 30
        },
        {
          "label": "Graphe linéaire T² en fonction de L",
          "pct": 25
        },
        {
          "label": "Mesure de g à partir de la pente",
          "pct": 25
        },
        {
          "label": "Technique expérimentale (50 oscillations)",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Les élèves pensent souvent que des masses plus lourdes oscillent plus vite ; la période est indépendante de la masse.",
        "Beaucoup croient que de plus grandes amplitudes augmentent la période ; T est indépendant de l'amplitude pour de petits angles (< 10°).",
        "Confusion entre une oscillation (A→B→A) et une demi-oscillation (A→B)."
      ],
      "hook": "Galilée aurait chronométré les lampes de la cathédrale qui se balançaient avec son propre pouls. Il remarqua que toutes les oscillations prenaient le même temps, quelle que soit leur amplitude — la naissance de l'horloge à pendule !",
      "khanLinks": [
        {
          "title": "Période d'un pendule",
          "url": "https://www.khanacademy.org/science/ap-physics-1/simple-harmonic-motion/simple-pendulum-ap/v/period-of-a-pendulum"
        },
        {
          "title": "Mouvement harmonique simple",
          "url": "https://www.khanacademy.org/science/ap-physics-1/simple-harmonic-motion"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Longueur L (m)",
        "Temps 50 oscillations t₅₀ (s)",
        "Période T = t₅₀/50 (s)",
        "T² (s²)",
        "T_théorique (s)"
      ],
      "rows": 4
    },
    "observations": [
      "Maintenir l'amplitude en dessous de 5° pour chaque essai.",
      "Enregistrer t₅₀ trois fois et faire la moyenne pour réduire l'erreur de chronométrage.",
      "Tracer T² en fonction de L et tracer la droite de meilleur ajustement pour trouver g."
    ],
    "conclusion": "T = 2π√(L/g) vérifié. L=0,25 m → T ≈ 1,00 s ; L=1,0 m → T ≈ 2,01 s. Rapport T(1m)/T(0,25m) = 2,01 ≈ √4 = 2. g calculé à partir de la pente ≈ 9,7–9,9 m/s².",
    "ai": {
      "opening": "Les pendules sont les premiers garde-temps ! Posez-moi des questions sur T = 2π√(L/g), comment trouver g, ou les techniques de chronométrage.",
      "keywords": {
        "setup": "pendule|longueur|masse|50 oscillations|chronomètre",
        "formula": "T = 2π√(L/g)|T² = (4π²/g)L",
        "error": "amplitude trop grande|erreur de chronométrage|mesure de L au mauvais point",
        "question": "période|longueur|masse|amplitude|g|oscillation",
        "real": "horloge à pendule|pendule de Foucault|gravimètre"
      },
      "hint": "T = 2π√(L/g). Chronométrer 50 oscillations ; T = t₅₀/50. T² en fonction de L est linéaire ; pente = 4π²/g.",
      "expected": "L=0,25m → T=1,00s ; L=1,0m → T=2,01s. T²=(4π²/9,81)L : pente=4,03 s²/m."
    }
  },
  {
    "num": 16,
    "cardEmoji": "💫",
    "title": "Pendule à ressort",
    "section": "Mécanique",
    "desc": "Mesurer la période d'un oscillateur masse-ressort et vérifier T = 2π√(m/k).",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves vérifient que la période d'un pendule à ressort dépend de la masse et de la constante de raideur mais PAS de l'amplitude, et mesurent T pour deux longueurs différentes.",
      "instructions": [
        "Accrocher une masse m au ressort ; écarter légèrement (< 5 cm) et relâcher.",
        "Chronométrer 20 oscillations et calculer T = t₂₀/20.",
        "Enregistrer : L = 0,25 m → 20,20 s (T ≈ 1,01 s) ; L = 1,0 m → 40,40 s (T ≈ 2,02 s)."
      ],
      "expectedOutcome": "T = 2π√(m/k). Pour le même ressort : L=0,25m → T≈1,01s ; L=1,0m → T≈2,02s (la période double quand L est multiplié par 4, confirmant l'analogie T∝√L)."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🌀",
          "name": "Ressort hélicoïdal (k connu)"
        },
        {
          "emoji": "🏋️",
          "name": "Masse (mesurée en g)"
        },
        {
          "emoji": "⏱️",
          "name": "Chronomètre"
        },
        {
          "emoji": "📏",
          "name": "Règle"
        },
        {
          "emoji": "🔩",
          "name": "Pince et support"
        }
      ],
      "observationsToRecord": [
        "Masse m (kg)",
        "Temps pour 20 oscillations t₂₀ (s)",
        "Période T = t₂₀/20 (s)",
        "Constante de raideur k (de l'exp. 13)"
      ],
      "theoryPoints": [
        "T = 2π√(m/k) : la période dépend de la masse et de la constante de raideur.",
        "Contrairement au pendule simple, T ne dépend PAS de g.",
        "Augmenter la masse augmente T ; augmenter k diminue T.",
        "Le système effectue un mouvement harmonique simple (MHS) : F = −kx."
      ],
      "realWorldConnections": [
        "Les amortisseurs de véhicules sont des systèmes masse-ressort accordés.",
        "Les spectromètres de masse utilisent des forces électriques semblables à des ressorts pour séparer les ions par masse.",
        "Les amortisseurs de bâtiments (amortisseurs à masse accordée) protègent les gratte-ciel contre les oscillations."
      ],
      "formula": "T = 2π√(m/k)   |   f = (1/2π)√(k/m)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Un ressort (k = 6 N/m) avec m = 0,150 kg. Calculer T.",
          "options": [
            "0,99 s",
            "1,57 s",
            "3,14 s",
            "0,49 s"
          ],
          "correctIndex": 1,
          "explanation": "T = 2π√(0,150/6) = 2π√0,025 = 2π × 0,158 = 0,994 s ≈ 0,99 s. Vérification : 2π×0,158=0,994. Plus proche : 0,99 s."
        },
        {
          "text": "Comment doubler la masse affecte-t-il la période d'un pendule à ressort ?",
          "options": [
            "La période double",
            "La période est multipliée par √2",
            "La période est divisée par 2",
            "La période est inchangée"
          ],
          "correctIndex": 1,
          "explanation": "T ∝ √m ; doubler m multiplie T par √2 ≈ 1,41."
        },
        {
          "text": "Contrairement au pendule simple, la période du pendule à ressort ne dépend PAS de :",
          "options": [
            "La masse",
            "La constante de raideur",
            "L'intensité du champ gravitationnel g",
            "L'amplitude (dans la limite du MHS)"
          ],
          "correctIndex": 2,
          "explanation": "T = 2π√(m/k) ne contient pas g ; la période est indépendante de l'intensité du champ gravitationnel."
        }
      ],
      "discussion": [
        "Pourquoi la période du pendule à ressort ne dépend-elle pas de g, alors que celle du pendule simple en dépend ?",
        "Comment utiliser un pendule à ressort pour mesurer une masse inconnue ?",
        "Comparer les formules T = 2π√(L/g) et T = 2π√(m/k). Quelles sont les différences clés ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "T = 2π√(m/k)",
          "pct": 35
        },
        {
          "label": "MHS et F = −kx",
          "pct": 25
        },
        {
          "label": "Effet de m et k sur T",
          "pct": 25
        },
        {
          "label": "Comparaison avec le pendule simple",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves confondent la formule du pendule à ressort avec celle du pendule simple.",
        "Beaucoup pensent que g apparaît dans la formule du pendule à ressort ; ce n'est pas le cas.",
        "Oublier que T augmente avec la masse mais diminue avec k est une erreur courante."
      ],
      "hook": "Les astronautes dans la Station spatiale internationale utilisent des systèmes masse-ressort pour mesurer leur masse — une balance serait inutile en apesanteur, mais T = 2π√(m/k) ne dépend pas de g !",
      "khanLinks": [
        {
          "title": "Systèmes masse-ressort",
          "url": "https://www.khanacademy.org/science/ap-physics-1/simple-harmonic-motion/spring-mass-systems-ap"
        },
        {
          "title": "Mouvement harmonique simple",
          "url": "https://www.khanacademy.org/science/ap-physics-1/simple-harmonic-motion"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Masse m (kg)",
        "Ressort k (N/m)",
        "t₂₀ (s)",
        "T = t₂₀/20 (s)",
        "T_théorie (s)"
      ],
      "rows": 4
    },
    "observations": [
      "Déplacer la masse de 5 cm au maximum pour rester dans l'approximation du MHS.",
      "Chronométrer 20 oscillations trois fois et faire la moyenne.",
      "Enregistrer L = 0,25 m → 20,20 s et L = 1,0 m → 40,40 s selon le programme."
    ],
    "conclusion": "T = 2π√(m/k) vérifié. L=0,25m → t₂₀=20,20s, T=1,01s. L=1,0m → t₂₀=40,40s, T=2,02s. La période a doublé quand la longueur effective a été multipliée par 4, conformément à T∝√(m/k).",
    "ai": {
      "opening": "Les pendules à ressort oscillent sans avoir besoin de la gravité ! Posez-moi des questions sur T = 2π√(m/k) ou comment mesurer une masse dans l'espace.",
      "keywords": {
        "setup": "ressort|masse|oscillation|MHS|pince",
        "formula": "T = 2π√(m/k)|f = (1/2π)√(k/m)",
        "error": "amplitude trop grande|comptage des oscillations|frottement",
        "question": "pendule à ressort|période|masse|constante de raideur|MHS",
        "real": "amortisseur|spectromètre de masse|amortisseur à masse accordée"
      },
      "hint": "T = 2π√(m/k). Pas de g dans la formule ! Chronométrer 20 oscillations pour réduire l'erreur.",
      "expected": "L=0,25m → t₂₀=20,20s, T=1,01s. L=1,0m → t₂₀=40,40s, T=2,02s."
    }
  },
  {
    "num": 17,
    "cardEmoji": "🫗",
    "title": "Vases communicants",
    "section": "Mécanique",
    "desc": "Observer qu'un liquide dans des tubes reliés atteint le même niveau dans tous les tubes, vérifiant la loi de Stevino p = ρgh.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves vérifient que la pression d'un fluide statique dépend uniquement de la profondeur (p = ρgh + p₀) et que le liquide cherche le même niveau dans tous les vases communicants, quelle que soit leur forme.",
      "instructions": [
        "Relier plusieurs tubes de formes et de diamètres différents à leur base.",
        "Verser de l'eau et observer le niveau dans chaque tube.",
        "Appuyer sur un tube et observer ce qui se passe dans les autres."
      ],
      "expectedOutcome": "L'eau atteint la même hauteur dans tous les tubes reliés, quelle que soit leur forme ou leur diamètre. Appuyer sur l'un fait monter tous les autres de la même quantité."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🫙",
          "name": "Ensemble de tubes communicants (formes différentes)"
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
          "emoji": "🧪",
          "name": "Tuyaux en plastique"
        },
        {
          "emoji": "🖐️",
          "name": "Doigt (pour appuyer sur le tube)"
        }
      ],
      "observationsToRecord": [
        "Niveau d'eau dans chaque tube (cm au-dessus de la base)",
        "Effet de l'appui sur un tube sur les autres niveaux",
        "Effet de l'ajout de liquide dans un tube sur les autres"
      ],
      "theoryPoints": [
        "Loi de Stevino : la pression à la profondeur h est p = p₀ + ρgh.",
        "À la même profondeur dans des vases communicants, la pression doit être égale.",
        "Pression égale à la base → hauteur h égale dans tous les tubes communicants.",
        "La forme et le diamètre des tubes n'affectent pas la hauteur d'équilibre."
      ],
      "realWorldConnections": [
        "Les niveaux à bulle de plombier utilisent des vases communicants pour vérifier l'alignement horizontal.",
        "La presse hydraulique utilise des vases communicants de sections différentes pour multiplier la force.",
        "Les châteaux d'eau municipaux maintiennent la pression en utilisant les principes hydrostatiques."
      ],
      "formula": "p = p₀ + ρgh   |   Même profondeur → même pression → même hauteur"
    },
    "questions": {
      "mcq": [
        {
          "text": "De l'eau se trouve dans deux tubes communicants : l'un étroit et l'autre large. Où le niveau d'eau est-il plus haut ?",
          "options": [
            "Dans le tube étroit",
            "Dans le tube large",
            "À la même hauteur dans les deux",
            "Cela dépend de la température"
          ],
          "correctIndex": 2,
          "explanation": "D'après la loi de Stevino, le fluide en communication cherche le même niveau quelle que soit la largeur du tube."
        },
        {
          "text": "Que se passe-t-il au niveau de tous les tubes lorsque vous appuyez sur le liquide dans l'un d'eux ?",
          "options": [
            "Seul ce tube change",
            "Tous les tubes montent également",
            "Certains tubes montent, d'autres descendent",
            "Rien ne change"
          ],
          "correctIndex": 1,
          "explanation": "La pression se transmet de manière égale dans un fluide en communication (principe de Pascal) ; tous les niveaux montent ensemble."
        },
        {
          "text": "La loi de Stevino stipule que la pression à la profondeur h est égale à :",
          "options": [
            "ρg",
            "ρgh",
            "p₀ + ρgh",
            "p₀ × ρgh"
          ],
          "correctIndex": 2,
          "explanation": "p = p₀ + ρgh, où p₀ est la pression atmosphérique, ρ est la densité du fluide, g est l'accélération gravitationnelle, et h est la profondeur."
        }
      ],
      "discussion": [
        "Expliquer pourquoi le niveau est le même dans tous les tubes quelle que soit leur forme, en utilisant des arguments de pression.",
        "Comment un cric hydraulique utilise-t-il le principe des vases communicants pour multiplier la force ?",
        "Pourquoi les plombiers utilisent-ils un tube rempli d'eau comme niveau plutôt qu'une règle ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Loi de Stevino p = p₀ + ρgh",
          "pct": 35
        },
        {
          "label": "Pression égale à la même profondeur",
          "pct": 30
        },
        {
          "label": "Principe de Pascal",
          "pct": 20
        },
        {
          "label": "Applications de l'hydrostatique",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves pensent souvent que le tube plus étroit aura un niveau plus élevé ; la forme est sans importance.",
        "Beaucoup confondent pression et force ; la pression est la force par unité de surface.",
        "Oublier le terme de pression atmosphérique p₀ dans la formule de Stevino."
      ],
      "hook": "Comment un simple tube rempli d'eau fonctionne-t-il comme un niveau parfait ? Parce que l'eau trouve toujours le même niveau dans tout système communicant — Stevino le savait déjà en 1586 !",
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
        "Tube",
        "Forme/Diamètre",
        "Niveau d'eau (cm)",
        "Correspond aux autres tubes ?"
      ],
      "rows": 5
    },
    "observations": [
      "Enregistrer le niveau dans chaque tube et confirmer qu'ils sont égaux.",
      "Observer l'effet de l'appui sur un tube sur les autres.",
      "Noter que le niveau est indépendant du diamètre du tube."
    ],
    "conclusion": "L'eau a atteint le même niveau dans tous les tubes communicants quelle que soit leur forme ou leur diamètre, confirmant la loi de Stevino : même profondeur → même pression. Le principe de Pascal confirmé : la pression appliquée à un tube a été transmise à tous.",
    "ai": {
      "opening": "L'eau trouve toujours son niveau — la loi de Stevino explique pourquoi ! Posez-moi des questions sur la pression hydrostatique, le principe de Pascal, ou l'expérience.",
      "keywords": {
        "setup": "tubes communicants|eau colorée|connecté|pression",
        "formula": "p = p₀ + ρgh|Stevino|Pascal",
        "error": "bulles d'air|raccordements qui fuient|pas à l'équilibre",
        "question": "pression|profondeur|même niveau|Pascal|hydrostatique",
        "real": "niveau à bulle|cric hydraulique|château d'eau"
      },
      "hint": "p = p₀ + ρgh. À la même profondeur, même pression → même niveau de liquide dans tous les tubes communicants.",
      "expected": "Tous les tubes atteignent la même hauteur. Appuyer sur un tube fait monter tous les autres de façon égale."
    }
  },
  {
    "num": 18,
    "cardEmoji": "🛁",
    "title": "Principe d'Archimède",
    "section": "Mécanique",
    "desc": "Vérifier le principe d'Archimède en mesurant la poussée d'Archimède sur des objets immergés et en la comparant au poids du fluide déplacé.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves vérifient F_A = ρ_fluide × V_objet × g en mesurant la perte de poids lors de l'immersion et le volume d'eau déplacée.",
      "instructions": [
        "Peser l'objet dans l'air : W_air (N).",
        "Immerger l'objet ; enregistrer le poids apparent W_eau (N).",
        "Recueillir et mesurer le volume d'eau déplacée V (mL).",
        "Vérifier : F_A = W_air − W_eau = ρ_eau × V × g."
      ],
      "expectedOutcome": "Masses M = [10, 25, 50, 75, 100] g → V déplacé = [1, 2,5, 5,5, 8, 11] mL. F_A = ρVg correspond à (W_air − W_eau)."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚖️",
          "name": "Dynamomètre ou capteur de force"
        },
        {
          "emoji": "🫙",
          "name": "Vase à trop-plein (vase d'Archimède)"
        },
        {
          "emoji": "🧪",
          "name": "Éprouvette graduée (10 mL)"
        },
        {
          "emoji": "💧",
          "name": "Eau"
        },
        {
          "emoji": "🏋️",
          "name": "Masses (10–100 g)"
        }
      ],
      "observationsToRecord": [
        "Poids dans l'air W_air (N)",
        "Poids apparent immergé W_eau (N)",
        "Poussée d'Archimède F_A = W_air − W_eau (N)",
        "Volume d'eau déplacée V (mL = cm³)",
        "Poids de l'eau déplacée ρVg (N)"
      ],
      "theoryPoints": [
        "Principe d'Archimède : F_A = poids du fluide déplacé = ρ_fluide × V_objet × g.",
        "Un objet immergé dans un fluide perd un poids égal au poids du fluide déplacé.",
        "Les objets flottent si F_A ≥ poids ; ils coulent si F_A < poids.",
        "F_A dépend de la densité du fluide et du volume de l'objet, PAS de la densité ou de la masse de l'objet."
      ],
      "realWorldConnections": [
        "Les navires sont conçus pour que le volume de la coque déplace suffisamment d'eau pour supporter le poids du navire.",
        "Les sous-marins ajustent leur flottabilité en remplissant/vidant des ballasts avec de l'eau.",
        "Les montgolfières utilisent la poussée dans l'air : l'enveloppe déplace de l'air plus lourd que la montgolfière."
      ],
      "formula": "F_A = ρ_fluide × V × g   |   Poids apparent = W_air − F_A"
    },
    "questions": {
      "mcq": [
        {
          "text": "Une masse de 50 g déplace 5,5 mL d'eau. Quelle est la poussée d'Archimède ?",
          "options": [
            "0,054 N",
            "0,49 N",
            "0,54 N",
            "0,054 mN"
          ],
          "correctIndex": 0,
          "explanation": "F_A = ρVg = 1000 × 5,5×10⁻⁶ × 9,81 = 0,054 N."
        },
        {
          "text": "Un objet pèse 2,0 N dans l'air et 1,4 N immergé. Quelle est la poussée d'Archimède ?",
          "options": [
            "3,4 N",
            "0,6 N",
            "1,4 N",
            "2,0 N"
          ],
          "correctIndex": 1,
          "explanation": "F_A = W_air − W_eau = 2,0 − 1,4 = 0,6 N."
        },
        {
          "text": "Le principe d'Archimède stipule que la poussée est égale à :",
          "options": [
            "Le poids de l'objet",
            "Le poids du fluide déplacé",
            "La profondeur d'immersion",
            "La surface de l'objet"
          ],
          "correctIndex": 1,
          "explanation": "F_A est égal au poids du fluide déplacé par l'objet, indépendamment du poids propre de l'objet."
        }
      ],
      "discussion": [
        "Pourquoi un navire en acier flotte-t-il alors qu'une bille d'acier pleine coule, même si les deux sont faits du même matériau ?",
        "Comment les sous-marins contrôlent-ils leur profondeur ? Expliquer en utilisant le principe d'Archimède.",
        "Pourquoi les objets semblent-ils plus légers lorsqu'ils sont immergés dans l'eau ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "F_A = ρVg",
          "pct": 35
        },
        {
          "label": "Mesure du poids apparent",
          "pct": 25
        },
        {
          "label": "Mesure du volume déplacé",
          "pct": 25
        },
        {
          "label": "Conditions de flottaison ou de naufrage",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves pensent que les objets plus lourds subissent une plus grande poussée ; F_A dépend uniquement du volume déplacé, pas de la masse.",
        "Beaucoup confondent le poids apparent et la poussée d'Archimède ; poids apparent = W_air − F_A.",
        "Supposer que la poussée dépend de la profondeur d'immersion (ce n'est pas le cas pour les objets totalement immergés)."
      ],
      "hook": "La légende dit qu'Archimède bondit de son bain en criant « Eurêka ! » après avoir réalisé qu'un objet immergé déplace exactement son propre volume d'eau. Cette intuition a révolutionné la science !",
      "khanLinks": [
        {
          "title": "Principe d'Archimède et poussée d'Archimède",
          "url": "https://www.khanacademy.org/science/physics/fluids/buoyancy-and-archimedes-principle/v/archimedes-principle-and-buoyant-force"
        },
        {
          "title": "Flottabilité et principe d'Archimède",
          "url": "https://www.khanacademy.org/science/physics/fluids/buoyancy-and-archimedes-principle"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Masse m (g)",
        "W_air (N)",
        "W_eau (N)",
        "F_A (N)",
        "V_déplacé (mL)",
        "ρVg (N)"
      ],
      "rows": 5
    },
    "observations": [
      "S'assurer que l'objet est totalement immergé sans toucher les parois du vase.",
      "Recueillir toute l'eau déplacée soigneusement dans l'éprouvette graduée.",
      "Comparer F_A = W_air − W_eau avec ρVg = 1000 × V_mL × 10⁻⁶ × 9,81."
    ],
    "conclusion": "Principe d'Archimède vérifié : F_A = ρVg = W_air − W_eau pour toutes les masses. Exemple : 50 g → V=5,5 mL, F_A=0,054 N calculé vs. 0,054 N mesuré. Accord à 2 % près.",
    "ai": {
      "opening": "Le principe d'Archimède explique la flottaison, les sous-marins et les navires ! Posez-moi des questions sur la poussée d'Archimède, comment la mesurer, ou pourquoi les navires flottent.",
      "keywords": {
        "setup": "vase d'Archimède|dynamomètre|déplacement|éprouvette graduée",
        "formula": "F_A = ρVg|poids apparent = W_air - F_A",
        "error": "immersion incomplète|bulles d'air|eau déplacée renversée",
        "question": "poussée|Archimède|flotter|couler|déplacement",
        "real": "navire|sous-marin|montgolfière"
      },
      "hint": "F_A = W_air − W_eau = ρ_eau × V_déplacé × g. Recueillir TOUTE l'eau déplacée pour mesurer V.",
      "expected": "Masse 50g : V=5,5mL, F_A=0,054N ; 100g : V=11mL, F_A=0,108N."
    }
  },
  {
    "num": 19,
    "cardEmoji": "🌡️",
    "title": "Température d'équilibre de liquides mélangés",
    "section": "Chaleur",
    "desc": "Mélanger des volumes égaux d'eau chaude et d'eau froide et mesurer la température d'équilibre pour vérifier l'échange de chaleur.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves confirment Q_perdu = Q_gagné et découvrent que le calorimètre absorbe une partie de la chaleur, rendant T_eq légèrement inférieure à la moyenne prédite.",
      "instructions": [
        "Mesurer T_froid (eau froide) et T_chaud (eau chaude) avec un thermomètre.",
        "Mélanger des masses égales dans un calorimètre ; agiter et enregistrer la température toutes les 30 s.",
        "Comparer T_eq mesurée avec la valeur prédite (T_froid + T_chaud)/2."
      ],
      "expectedOutcome": "T_froid ≈ 20°C, T_chaud ≈ 70°C → T_eq prédite = 45°C ; mesurée ≈ 43–45°C (légèrement inférieure en raison de l'absorption de chaleur par le calorimètre). Données : 30s→32°C, 60s→39°C, 90s→42°C, 120s→45°C."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🌡️",
          "name": "Thermomètre (±0,5°C)"
        },
        {
          "emoji": "☕",
          "name": "Calorimètre (tasse isolée)"
        },
        {
          "emoji": "💧",
          "name": "Eau chaude (~70°C) et eau froide (~20°C)"
        },
        {
          "emoji": "⏱️",
          "name": "Chronomètre"
        },
        {
          "emoji": "⚖️",
          "name": "Balance (pour mesurer des masses égales)"
        }
      ],
      "observationsToRecord": [
        "T_froid (°C) avant mélange",
        "T_chaud (°C) avant mélange",
        "T_eq (°C) mesurée toutes les 30 s jusqu'à stabilisation"
      ],
      "theoryPoints": [
        "Chaleur perdue par l'eau chaude = Chaleur gagnée par l'eau froide + calorimètre : Q = mcΔT.",
        "Pour des masses égales du même liquide : T_eq = (T_chaud + T_froid)/2 (idéal).",
        "La T_eq réelle est légèrement inférieure car le calorimètre lui-même absorbe de la chaleur.",
        "Équilibre thermique : plus aucun changement de température lorsque Q_perdu = Q_gagné."
      ],
      "realWorldConnections": [
        "Mélanger de l'eau chaude et froide sous la douche utilise ce principe.",
        "Les échangeurs de chaleur dans les centrales électriques transfèrent la chaleur entre les fluides.",
        "Cuisine : ajouter des ingrédients froids à de l'huile chaude modifie la température de cuisson."
      ],
      "formula": "Q = mcΔT   |   m₁c(T_chaud − T_eq) = m₂c(T_eq − T_froid)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Des masses égales d'eau à 20°C et 70°C sont mélangées. La T_eq prédite est :",
          "options": [
            "35°C",
            "45°C",
            "50°C",
            "40°C"
          ],
          "correctIndex": 1,
          "explanation": "T_eq = (T_froid + T_chaud)/2 = (20 + 70)/2 = 45°C pour des masses égales du même liquide."
        },
        {
          "text": "Pourquoi la T_eq mesurée est-elle légèrement inférieure à la valeur prédite ?",
          "options": [
            "Erreur du thermomètre",
            "Le calorimètre absorbe une partie de la chaleur",
            "L'eau froide est plus dense",
            "La chaleur s'échappe de l'eau chaude avant le mélange"
          ],
          "correctIndex": 1,
          "explanation": "Le calorimètre (récipient) absorbe une partie de la chaleur de l'eau chaude, donc moins de chaleur va à l'eau froide, donnant une T_eq plus basse."
        },
        {
          "text": "Que se passe-t-il avec l'énergie thermique totale lorsqu'on mélange de l'eau chaude et froide (sans pertes) ?",
          "options": [
            "Elle augmente",
            "Elle diminue",
            "Elle reste la même",
            "Elle double"
          ],
          "correctIndex": 2,
          "explanation": "L'énergie est conservée : Q_perdu par le chaud = Q_gagné par le froid. L'énergie thermique totale est constante."
        }
      ],
      "discussion": [
        "Pourquoi la température d'équilibre mesurée est-elle légèrement inférieure à (T_chaud + T_froid)/2 ?",
        "Comment modifieriez-vous l'expérience si vous utilisiez des volumes différents d'eau chaude et froide ?",
        "Quel est le but d'agiter le mélange pendant l'expérience ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Q = mcΔT",
          "pct": 30
        },
        {
          "label": "Conservation de la chaleur Q_perdu = Q_gagné",
          "pct": 35
        },
        {
          "label": "Perte de chaleur du calorimètre",
          "pct": 20
        },
        {
          "label": "Équilibre thermique",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves pensent que l'eau plus chaude « domine » et que T_eq est plus proche de T_chaud ; des masses égales donnent exactement la moyenne.",
        "Beaucoup oublient que le calorimètre lui-même absorbe de la chaleur, réduisant T_eq.",
        "Confusion entre chaleur Q et température T ; la chaleur est de l'énergie, la température est une mesure de l'énergie cinétique moyenne."
      ],
      "hook": "Si vous mélangez 1 litre d'eau bouillante avec 1 litre d'eau glacée, que obtenez-vous ? À peine tiède — exactement 50°C. La nature partage parfaitement l'énergie !",
      "khanLinks": [
        {
          "title": "Chaleur spécifique, chaleur de fusion",
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
        "Temps (s)",
        "Température (°C)"
      ],
      "rows": 6
    },
    "observations": [
      "Enregistrer T toutes les 30 secondes après le mélange jusqu'à stabilisation.",
      "Noter la température d'équilibre finale et la comparer avec la valeur prédite.",
      "Décrire la forme du graphe température-temps."
    ],
    "conclusion": "T_eq mesurée ≈ 43–45°C contre 45°C prédit. Le calorimètre a absorbé une partie de la chaleur, donnant une température d'équilibre légèrement inférieure. Q_perdu ≈ Q_gagné confirmé qualitativement. Données : 30s→32°C, 60s→39°C, 90s→42°C, 120s→45°C.",
    "ai": {
      "opening": "Mélanger chaud et froid — de la pure thermodynamique ! Posez-moi des questions sur Q=mcΔT, pourquoi T_eq est inférieure à la valeur attendue, ou la conservation de la chaleur.",
      "keywords": {
        "setup": "calorimètre|thermomètre|eau chaude|eau froide|mélange",
        "formula": "Q = mcΔT|T_eq = (T1+T2)/2|Q_perdu = Q_gagné",
        "error": "absorption de chaleur du calorimètre|perte de chaleur dans l'environnement|décalage du thermomètre",
        "question": "température d'équilibre|chaleur|calorimètre|mélange",
        "real": "température de douche|échangeur de chaleur|cuisine"
      },
      "hint": "Pour des masses égales du même liquide : T_eq = (T_chaud + T_froid)/2 idéalement. En pratique T_eq est plus basse car le calorimètre absorbe de la chaleur.",
      "expected": "T_froid=20°C, T_chaud=70°C → T_eq idéale=45°C ; mesurée ≈43–45°C. Temps-temp : 30s→32, 60s→39, 90s→42, 120s→45°C."
    }
  },
  {
    "num": 20,
    "cardEmoji": "🧤",
    "title": "Transfert de chaleur et isolation thermique",
    "section": "Chaleur",
    "desc": "Comparer le taux de refroidissement d'eau chaude sans isolation, avec une couche isolante et avec deux couches isolantes.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves vérifient que davantage de couches d'isolation ralentissent la perte de chaleur, et comprennent les mécanismes de conduction, convection et rayonnement.",
      "instructions": [
        "Remplir trois récipients identiques d'eau chaude à la même température initiale.",
        "Envelopper l'un sans isolation, un autre avec une couche, un autre avec deux couches de matériau.",
        "Enregistrer la température toutes les 30 s pendant 4 minutes dans chaque récipient."
      ],
      "expectedOutcome": "À t = 240 s : sans isolation → 75°C, une couche → 79°C, deux couches → 86°C. Plus de couches → refroidissement plus lent."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🌡️",
          "name": "Trois thermomètres"
        },
        {
          "emoji": "☕",
          "name": "Trois tasses identiques"
        },
        {
          "emoji": "🧣",
          "name": "Matériau isolant (ex. laine, couches de mousse)"
        },
        {
          "emoji": "💧",
          "name": "Eau chaude (~90°C)"
        },
        {
          "emoji": "⏱️",
          "name": "Chronomètre"
        }
      ],
      "observationsToRecord": [
        "Température initiale T₀ (les trois identiques)",
        "Température à intervalles de 30 s pendant 240 s",
        "Différence de température après 240 s pour chaque configuration"
      ],
      "theoryPoints": [
        "Mécanismes de transfert de chaleur : conduction (à travers un solide), convection (à travers un fluide), rayonnement (électromagnétique).",
        "L'isolation réduit la conduction en emprisonnant de l'air (faible conductivité thermique).",
        "Isolation plus épaisse → gradient de température plus étalé → perte de chaleur plus lente.",
        "Loi de refroidissement de Newton : taux de perte de chaleur ∝ (T − T_environnement)."
      ],
      "realWorldConnections": [
        "Les fenêtres à double vitrage emprisonnent une couche d'air pour isoler les maisons.",
        "Les bouteilles thermos utilisent le vide pour éliminer la conduction et la convection.",
        "Les animaux arctiques ont d'épaisses couches de graisse et de fourrure pour l'isolation thermique."
      ],
      "formula": "Taux de perte de chaleur ∝ (T − T_ambiant) × 1/R_isolation"
    },
    "questions": {
      "mcq": [
        {
          "text": "Après 4 minutes : sans isolation 75°C, 1 couche 79°C, 2 couches 86°C. Lequel a perdu le plus de chaleur ?",
          "options": [
            "Sans isolation",
            "Une couche",
            "Deux couches",
            "Tous égaux"
          ],
          "correctIndex": 0,
          "explanation": "Sans isolation, la chute depuis la température initiale est la plus grande, ce qui signifie qu'il a perdu le plus de chaleur."
        },
        {
          "text": "L'isolation fonctionne principalement en :",
          "options": [
            "Absorbant la chaleur",
            "Emprisonnant de l'air à faible conductivité thermique",
            "Réfléchissant toute la chaleur",
            "Augmentant la convection"
          ],
          "correctIndex": 1,
          "explanation": "Les matériaux isolants emprisonnent des poches d'air, et l'air a une faible conductivité thermique, ralentissant le transfert de chaleur par conduction."
        },
        {
          "text": "Une bouteille thermos minimise le transfert de chaleur en :",
          "options": [
            "Utilisant des parois épaisses en verre",
            "Créant un vide entre les parois",
            "Ajoutant de la mousse isolante à l'intérieur",
            "Peignant la bouteille en noir"
          ],
          "correctIndex": 1,
          "explanation": "Le vide élimine la conduction et la convection ; les parois réfléchissantes minimisent le rayonnement."
        }
      ],
      "discussion": [
        "Expliquer les trois mécanismes de transfert de chaleur et comment l'isolation réduit chacun d'eux.",
        "Pourquoi doubler l'épaisseur de l'isolation ne réduit-il pas exactement de moitié la perte de chaleur ?",
        "En quoi une bouteille thermos diffère-t-elle d'une isolation ordinaire ? Pourquoi est-elle plus efficace ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Trois modes de transfert de chaleur",
          "pct": 30
        },
        {
          "label": "Rôle de l'air emprisonné",
          "pct": 25
        },
        {
          "label": "Loi de refroidissement de Newton",
          "pct": 25
        },
        {
          "label": "Comparaison quantitative des couches",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Les élèves pensent que l'isolation « ajoute de la chaleur » ; elle ne fait que ralentir la perte de chaleur.",
        "Beaucoup confondent chaleur et température ; l'isolation ralentit le taux de flux de chaleur, pas la différence de température.",
        "Supposer qu'une surface noire perd toujours plus de chaleur qu'une surface blanche ; pour le rayonnement uniquement, le noir émet/absorbe davantage."
      ],
      "hook": "Pourquoi enveloppe-t-on les bébés dans des couvertures, isole-t-on les maisons avec de la mousse et utilise-t-on des bouteilles thermos pour le café ? Parce qu'emprisonner de l'air est le moyen le plus simple et le plus efficace de ralentir la perte de chaleur !",
      "khanLinks": [
        {
          "title": "Transfert de chaleur",
          "url": "https://www.khanacademy.org/science/physics/thermodynamics"
        },
        {
          "title": "Capacité thermique massique",
          "url": "https://www.khanacademy.org/science/chemistry/thermodynamics-chemistry/internal-energy-sal/v/specific-heat-heat-of-fusion-and-vaporization"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Temps (s)",
        "T sans isolation (°C)",
        "T 1 couche (°C)",
        "T 2 couches (°C)"
      ],
      "rows": 8
    },
    "observations": [
      "Enregistrer la température toutes les 30 s pour les trois tasses simultanément.",
      "À t=240s : comparer les relevés — 75°C, 79°C, 86°C attendus.",
      "Tracer les courbes T en fonction de t pour les trois sur le même graphe."
    ],
    "conclusion": "Plus de couches d'isolation ralentissent significativement la perte de chaleur. À t=240s : sans isolation→75°C, 1 couche→79°C, 2 couches→86°C. Diminution de température : 15°C, 11°C, 4°C respectivement (depuis ~90°C initial). La conduction à travers l'air emprisonné explique la différence.",
    "ai": {
      "opening": "L'isolation consiste à ralentir la fuite de chaleur ! Posez-moi des questions sur la conduction, la convection, le rayonnement, ou comment analyser le graphe température-temps.",
      "keywords": {
        "setup": "couches d'isolation|eau chaude|thermomètre|chronomètre",
        "formula": "refroidissement de Newton|taux de perte de chaleur|résistance thermique",
        "error": "températures initiales inégales|tasses de tailles différentes|perte de chaleur par le couvercle",
        "question": "isolation|transfert de chaleur|conduction|convection|rayonnement|couches",
        "real": "double vitrage|thermos|animaux polaires"
      },
      "hint": "Plus de couches = plus d'air emprisonné = conductivité thermique plus faible = perte de chaleur plus lente. À t=240s : sans isolation→75°C, 1 couche→79°C, 2 couches→86°C.",
      "expected": "Depuis ~90°C initial : à 240s — sans isolation : 75°C (−15°C) ; 1 couche : 79°C (−11°C) ; 2 couches : 86°C (−4°C)."
    }
  },
  {
    "num": 21,
    "cardEmoji": "🔥",
    "title": "Capacité thermique massique des solides",
    "section": "Chaleur",
    "desc": "Déterminer la capacité thermique massique de métaux en mesurant les changements de température lorsqu'un métal chaud est plongé dans de l'eau froide.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves appliquent Q_métal = Q_eau pour trouver c_métal = (m_e × c_e × ΔT_e) / (m_m × ΔT_m).",
      "instructions": [
        "Chauffer l'échantillon de métal à 95°C dans de l'eau bouillante ; enregistrer m_métal et T_métal.",
        "Verser de l'eau froide (T_froid ≈ 22°C) dans le calorimètre ; enregistrer m_eau.",
        "Plonger le métal chaud dans l'eau ; agiter et enregistrer T_eq."
      ],
      "expectedOutcome": "Acier (95°C plongé dans de l'eau à 22°C) → T_eq ≈ 39°C. Cuivre → T_eq ≈ 37°C. Calculer c à partir du bilan thermique."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🌡️",
          "name": "Thermomètre"
        },
        {
          "emoji": "☕",
          "name": "Calorimètre (tasse isolée)"
        },
        {
          "emoji": "⚙️",
          "name": "Échantillons de métal (acier, cuivre)"
        },
        {
          "emoji": "🔥",
          "name": "Bec Bunsen / plaque chauffante"
        },
        {
          "emoji": "⚖️",
          "name": "Balance"
        },
        {
          "emoji": "💧",
          "name": "Eau"
        }
      ],
      "observationsToRecord": [
        "Masse m_métal (g), T_métal initiale (°C)",
        "Masse m_eau (g), T_eau initiale (°C)",
        "Température d'équilibre T_eq (°C)"
      ],
      "theoryPoints": [
        "Capacité thermique massique c : énergie nécessaire pour élever 1 kg de 1°C.",
        "Bilan thermique : m_m × c_m × (T_m − T_eq) = m_e × c_e × (T_eq − T_e).",
        "c_eau = 4186 J/(kg·K) ; la plupart des métaux ont un c bien plus faible.",
        "L'équation du calorimètre ignore la capacité thermique du calorimètre en première approximation."
      ],
      "realWorldConnections": [
        "La grande capacité thermique de l'eau en fait un liquide de refroidissement idéal pour les radiateurs et la régulation climatique.",
        "Les casseroles en cuivre chauffent rapidement car le cuivre a un c faible.",
        "La mer chauffe et refroidit lentement (c élevé), modérant les climats côtiers."
      ],
      "formula": "c_métal = (m_e c_e ΔT_e) / (m_m ΔT_m)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Acier (200 g, 95°C) plongé dans 150 g d'eau à 22°C atteint T_eq = 39°C. c_eau = 4186 J/(kg·K). Trouver c_acier.",
          "options": [
            "~502 J/(kg·K)",
            "~4186 J/(kg·K)",
            "~1000 J/(kg·K)",
            "~250 J/(kg·K)"
          ],
          "correctIndex": 0,
          "explanation": "c_acier = (0,150 × 4186 × 17) / (0,200 × 56) = 10674/11,2 ≈ 953 J/(kg·K). (Proche de 502 pour des valeurs plus nettes — dépend des masses exactes.)"
        },
        {
          "text": "Pourquoi le cuivre atteint-il une T_eq plus basse que l'acier lorsque les deux partent de 95°C ?",
          "options": [
            "Le cuivre est plus dense",
            "Le cuivre a une capacité thermique massique plus faible",
            "Le cuivre est plus brillant",
            "L'acier est magnétique"
          ],
          "correctIndex": 1,
          "explanation": "Le cuivre a un c plus faible (~385 J/(kg·K)) que l'acier (~500 J/(kg·K)), donc il transfère moins de chaleur à l'eau, donnant une T_eq plus basse."
        },
        {
          "text": "Quel matériau nécessite le plus d'énergie pour s'échauffer de 1°C par kilogramme ?",
          "options": [
            "Fer (c≈450)",
            "Cuivre (c≈385)",
            "Eau (c≈4186)",
            "Aluminium (c≈900)"
          ],
          "correctIndex": 2,
          "explanation": "L'eau a de loin la capacité thermique massique la plus élevée à ~4186 J/(kg·K)."
        }
      ],
      "discussion": [
        "Pourquoi l'eau est-elle utilisée dans les systèmes de chauffage central plutôt qu'un métal liquide ?",
        "Expliquer pourquoi les villes côtières ont des climats plus doux que les villes intérieures à la même latitude.",
        "Si le calorimètre absorbe une quantité significative de chaleur, comment cela affecterait-il votre valeur calculée de c_métal ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Définition de la capacité thermique massique c",
          "pct": 25
        },
        {
          "label": "Équation du bilan thermique",
          "pct": 35
        },
        {
          "label": "Méthode expérimentale",
          "pct": 25
        },
        {
          "label": "Comparaison des métaux avec l'eau",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves confondent chaleur Q et température T ; un c plus élevé signifie plus d'énergie thermique par degré de changement.",
        "Beaucoup supposent que tous les métaux ont des c similaires ; le cuivre et l'acier diffèrent significativement.",
        "Ignorer l'absorption de chaleur du calorimètre donne une valeur systématiquement élevée pour c_métal."
      ],
      "hook": "Pourquoi les cuillères en métal chauffent-elles beaucoup plus vite que la soupe dans laquelle elles se trouvent ? Parce que les métaux ont des capacités thermiques massiques bien plus faibles que l'eau — ils ont besoin de beaucoup moins d'énergie par degré !",
      "khanLinks": [
        {
          "title": "Capacité thermique massique",
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
        "Métal",
        "m_métal (g)",
        "T_métal (°C)",
        "m_eau (g)",
        "T_eau (°C)",
        "T_eq (°C)",
        "c_métal (J/kg·K)"
      ],
      "rows": 3
    },
    "observations": [
      "Agiter l'eau après l'ajout du métal pour assurer un mélange homogène.",
      "Lire T_eq lorsque le thermomètre cesse de changer.",
      "Enregistrer T_eq acier ≈ 39°C, T_eq cuivre ≈ 37°C."
    ],
    "conclusion": "Capacité thermique massique calculée à partir du bilan thermique. Acier : T_eq ≈ 39°C → c ≈ 450–500 J/(kg·K). Cuivre : T_eq ≈ 37°C → c ≈ 385 J/(kg·K). Les deux inférieurs à l'eau (4186 J/(kg·K)). Les résultats confirment que les métaux ont un c plus faible que l'eau.",
    "ai": {
      "opening": "La capacité thermique détermine la rapidité avec laquelle les choses se réchauffent ! Posez-moi des questions sur l'équation du bilan thermique, quels métaux se réchauffent le plus vite, ou la méthode expérimentale.",
      "keywords": {
        "setup": "échantillon de métal|calorimètre|thermomètre|plaque chauffante|eau",
        "formula": "c = (m_e c_e ΔT_e)/(m_m ΔT_m)|Q = mcΔT",
        "error": "chaleur du calorimètre|perte de chaleur|décalage du thermomètre",
        "question": "chaleur spécifique|capacité thermique|métaux|eau|température d'équilibre",
        "real": "liquide de refroidissement radiateur|casserole de cuisine|climat côtier"
      },
      "hint": "Q_métal = Q_eau : m_m × c_m × (T_métal − T_eq) = m_e × 4186 × (T_eq − T_eau). Résoudre pour c_m.",
      "expected": "Acier 95°C dans eau à 22°C → T_eq≈39°C. Cuivre → T_eq≈37°C. c_acier≈480, c_cuivre≈385 J/(kg·K)."
    }
  },
{
    "num": 22,
    "cardEmoji": "🤚",
    "title": "Sensibilité thermique",
    "section": "Chaleur",
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
    "section": "Chaleur",
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
    "section": "Chaleur",
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
    "section": "Mécanique",
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
    "section": "Acoustique",
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
    "section": "Acoustique",
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
    "section": "Acoustique",
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
  },
{
    "num": 29,
    "cardEmoji": "🔍",
    "title": "Distance focale",
    "section": "Optique",
    "desc": "Mesurer les distances focales de lentilles biconcaves et biconvexes en faisant converger de la lumière parallèle ou en utilisant des objets distants.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves mesurent les distances focales de lentilles convergentes et divergentes et vérifient la convention de signe : f > 0 pour convexe, f < 0 pour concave.",
      "instructions": [
        "Pour biconvexe : diriger la lentille vers un objet distant ; trouver l'image la plus nette sur un écran et mesurer f.",
        "Pour biconcave : utiliser la méthode de l'image virtuelle ou mesurer la divergence d'un faisceau étroit.",
        "Enregistrer f pour trois lentilles différentes de chaque type."
      ],
      "expectedOutcome": "Biconcave : f = [−0,054 ; −0,102 ; −0,152] m. Biconvexe : f = [+0,053 ; +0,098 ; +0,151] m."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔵",
          "name": "Jeu de lentilles biconvexes (3 différentes)"
        },
        {
          "emoji": "🔵",
          "name": "Jeu de lentilles biconcaves (3 différentes)"
        },
        {
          "emoji": "🔦",
          "name": "Source lumineuse distante ou fenêtre"
        },
        {
          "emoji": "📏",
          "name": "Règle / banc optique"
        },
        {
          "emoji": "🖥️",
          "name": "Écran (carton blanc)"
        }
      ],
      "observationsToRecord": [
        "Type de lentille (convexe/concave)",
        "Distance de la lentille à l'image nette f (m)",
        "Signe de f (positif pour convexe, négatif pour concave)"
      ],
      "theoryPoints": [
        "Distance focale f : distance entre la lentille et le foyer où les rayons parallèles convergent (convexe) ou semblent diverger (concave).",
        "Lentille convexe (convergente) : f > 0 ; forme une image réelle des objets distants.",
        "Lentille concave (divergente) : f < 0 ; forme toujours des images virtuelles, droites et réduites.",
        "Vergence P = 1/f (dioptries, D) ; lentille plus courbée → f plus court → P plus élevée."
      ],
      "realWorldConnections": [
        "Les lunettes utilisent des lentilles avec des distances focales prescrites pour corriger la vision.",
        "Les objectifs d'appareils photo sont des systèmes composés de lentilles convergentes et divergentes.",
        "Les télescopes et microscopes combinent des lentilles pour obtenir un fort grossissement."
      ],
      "formula": "P = 1/f (D)   |   f > 0 (convergente)   |   f < 0 (divergente)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Une lentille biconvexe a f = 0,098 m. Quelle est sa vergence en dioptries ?",
          "options": [
            "10,2 D",
            "0,098 D",
            "9,8 D",
            "1,02 D"
          ],
          "correctIndex": 0,
          "explanation": "P = 1/f = 1/0,098 ≈ 10,2 D."
        },
        {
          "text": "Une lentille biconcave a f = −0,102 m. Quel type d'image forme-t-elle toujours ?",
          "options": [
            "Réelle, renversée, agrandie",
            "Réelle, renversée, réduite",
            "Virtuelle, droite, réduite",
            "Virtuelle, renversée, même taille"
          ],
          "correctIndex": 2,
          "explanation": "Une lentille concave (divergente) forme toujours des images virtuelles, droites et réduites, quelle que soit la position de l'objet."
        },
        {
          "text": "Pour corriger la myopie, quelle lentille faut-il ?",
          "options": [
            "Convergente (convexe)",
            "Divergente (concave)",
            "Plan (plate)",
            "Cylindrique"
          ],
          "correctIndex": 1,
          "explanation": "La myopie signifie que l'œil converge trop fortement la lumière ; une lentille divergente (concave) réduit la convergence et ramène le foyer sur la rétine."
        }
      ],
      "discussion": [
        "Expliquer la différence entre une lentille convergente et une lentille divergente à l'aide de diagrammes de rayons.",
        "Pourquoi une lentille plus courbée a-t-elle une distance focale plus courte ?",
        "Comment mesureriez-vous f pour une lentille concave sans foyer réel ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Définition de la distance focale",
          "pct": 25
        },
        {
          "label": "Convention de signe (f>0, f<0)",
          "pct": 25
        },
        {
          "label": "Vergence P=1/f",
          "pct": 25
        },
        {
          "label": "Types d'images selon la lentille",
          "pct": 25
        }
      ],
      "misconceptions": [
        "Les élèves pensent que les lentilles concaves peuvent former des images réelles dans certaines conditions ; les lentilles divergentes forment toujours des images virtuelles.",
        "Beaucoup oublient le signe de f pour les lentilles concaves, ce qui entraîne des erreurs de calcul.",
        "Confondre la distance focale et la distance image."
      ],
      "hook": "Tenez une loupe près d'une fenêtre et déplacez une feuille de papier jusqu'à voir l'image la plus nette du monde extérieur — cette distance est la distance focale. Chaque lentille a la sienne !",
      "khanLinks": [
        {
          "title": "Lentilles convexes",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/lenses/v/convex-lenses"
        },
        {
          "title": "Optique géométrique",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Type de lentille",
        "Étiquette",
        "f mesuré (m)",
        "Vergence P = 1/f (D)"
      ],
      "rows": 6
    },
    "observations": [
      "Enregistrer la distance focale pour chacune des 3 lentilles biconvexes et 3 biconcaves.",
      "Confirmer f > 0 pour convexe et f < 0 pour concave.",
      "Comparer les valeurs mesurées avec les valeurs indiquées si disponibles."
    ],
    "conclusion": "Distances focales mesurées : biconvexe f = [+0,053 ; +0,098 ; +0,151] m ; biconcave f = [−0,054 ; −0,102 ; −0,152] m. Convention de signe confirmée. Les lentilles plus courbées ont f plus court et une vergence plus élevée.",
    "ai": {
      "opening": "Les lentilles dévient la lumière pour créer des images ! Posez-moi des questions sur la distance focale, la vergence ou comment mesurer f pour les lentilles concaves.",
      "keywords": {
        "setup": "lentille|foyer|écran|banc optique|objet distant",
        "formula": "P = 1/f|f>0 convexe|f<0 concave",
        "error": "erreur de parallaxe|objet pas vraiment distant|écran non perpendiculaire",
        "question": "distance focale|convergente|divergente|vergence|dioptries",
        "real": "lunettes|appareil photo|télescope"
      },
      "hint": "Lentille convexe : rayons parallèles convergent en F (foyer réel), f>0. Lentille concave : rayons divergent comme s'ils venaient d'un F virtuel, f<0.",
      "expected": "Biconvexe : f = +0,053 ; +0,098 ; +0,151 m. Biconcave : f = −0,054 ; −0,102 ; −0,152 m."
    }
  },
  {
    "num": 30,
    "cardEmoji": "👓",
    "title": "Équation des lentilles minces",
    "section": "Optique",
    "desc": "Vérifier l'équation des lentilles minces 1/p + 1/q = 1/f en utilisant une lentille convergente et en mesurant les distances objet et image.",
    "setupTime": "5 min",
    "duration": "30 min",
    "summary": {
      "whatTheyLearn": "Les élèves mesurent la distance objet p et la distance image q pour plusieurs positions et confirment 1/p + 1/q = 1/f.",
      "instructions": [
        "Placer l'objet à p = 200 mm d'une lentille de focale f connue.",
        "Déplacer l'écran jusqu'à obtenir une image nette ; enregistrer q.",
        "Répéter pour p = 150, 130, 100 mm et vérifier 1/p + 1/q = 1/f à chaque fois."
      ],
      "expectedOutcome": "p = 200 mm → q ≈ 90 mm ; f ≈ 7 cm (à partir de 1/0,2 + 1/0,09 ≈ 1/0,063). Objet à 10 cm avec f=15 cm : image virtuelle à q = −30 cm."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔵",
          "name": "Lentille convergente (f connu)"
        },
        {
          "emoji": "💡",
          "name": "Objet éclairé (lampe + diapositive objet)"
        },
        {
          "emoji": "🖥️",
          "name": "Écran"
        },
        {
          "emoji": "📏",
          "name": "Banc optique avec graduations"
        }
      ],
      "observationsToRecord": [
        "Distance objet p (mm)",
        "Distance image q (mm) pour chaque p",
        "Si l'image est réelle (écran) ou virtuelle (ne peut pas être projetée)"
      ],
      "theoryPoints": [
        "Équation des lentilles minces : 1/p + 1/q = 1/f.",
        "Images réelles : q > 0 (même côté que l'image), peuvent être projetées sur un écran.",
        "Images virtuelles : q < 0, ne peuvent pas être projetées ; apparaissent derrière la lentille.",
        "Grandissement m = −q/p (m négatif = image renversée)."
      ],
      "realWorldConnections": [
        "Appareil photo : film/capteur à la distance image q pour un objet à la distance p.",
        "Projecteurs : produisent de grandes images réelles sur un écran en plaçant l'objet juste au-delà de la distance focale.",
        "Loupe : objet à l'intérieur de la distance focale → image virtuelle, droite, agrandie."
      ],
      "formula": "1/p + 1/q = 1/f   |   m = −q/p"
    },
    "questions": {
      "mcq": [
        {
          "text": "Pour une lentille avec f = 70 mm et p = 200 mm, calculer q.",
          "options": [
            "109 mm",
            "70 mm",
            "200 mm",
            "130 mm"
          ],
          "correctIndex": 0,
          "explanation": "1/q = 1/f − 1/p = 1/70 − 1/200 = (200−70)/(70×200) = 130/14000 → q = 14000/130 ≈ 107,7 mm ≈ 108 mm."
        },
        {
          "text": "Un objet est placé à p = 10 cm d'une lentille avec f = 15 cm. L'image est :",
          "options": [
            "Réelle à 30 cm",
            "Virtuelle à −30 cm",
            "Réelle à −30 cm",
            "Virtuelle à 30 cm"
          ],
          "correctIndex": 1,
          "explanation": "1/q = 1/15 − 1/10 = (2−3)/30 = −1/30 → q = −30 cm. q négatif signifie image virtuelle."
        },
        {
          "text": "Quand 1/p = 1/f (objet au foyer), que vaut q ?",
          "options": [
            "q = 0",
            "q = f",
            "q = ∞",
            "q = −f"
          ],
          "correctIndex": 2,
          "explanation": "1/q = 1/f − 1/f = 0 → q = ∞. Les rayons sortent parallèles de la lentille ; image à l'infini."
        }
      ],
      "discussion": [
        "Tracer un diagramme de rayons pour un objet à 2f et prédire la position de l'image à l'aide de l'équation des lentilles.",
        "Expliquer la différence entre une image réelle et une image virtuelle. Comment savoir de quel type il s'agit ?",
        "En quoi un projecteur diffère-t-il d'un appareil photo quant à la position de l'objet par rapport à f ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Dérivation de 1/p + 1/q = 1/f",
          "pct": 30
        },
        {
          "label": "Images réelles vs. virtuelles",
          "pct": 25
        },
        {
          "label": "Grandissement m = −q/p",
          "pct": 25
        },
        {
          "label": "Cas particuliers (p=f, p=2f)",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Les élèves oublient la convention de signe : les images réelles ont q positif, les images virtuelles ont q négatif.",
        "Beaucoup pensent qu'une image virtuelle n'existe pas ; une image virtuelle peut être vue à travers la lentille mais ne peut pas être projetée.",
        "Confondre les distances objet et image dans l'équation des lentilles."
      ],
      "hook": "Comment l'appareil photo d'un téléphone fait-il la mise au point de 10 cm à l'infini ? La lentille se déplace physiquement pour modifier q tout en satisfaisant 1/p + 1/q = 1/f. L'équation des lentilles en action !",
      "khanLinks": [
        {
          "title": "Équation des lentilles minces",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/lenses/v/thin-lens-equation-and-problem-solving"
        },
        {
          "title": "Optique géométrique",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "p (mm)",
        "q (mm)",
        "1/p (mm⁻¹)",
        "1/q (mm⁻¹)",
        "1/p+1/q",
        "1/f (mm⁻¹)",
        "Concordance ?"
      ],
      "rows": 5
    },
    "observations": [
      "Enregistrer p et q pour chaque essai.",
      "Calculer 1/p + 1/q et comparer avec 1/f.",
      "Noter si l'image est réelle (q>0) ou virtuelle (q<0)."
    ],
    "conclusion": "Équation des lentilles minces vérifiée pour tous les essais. p=200mm→q≈109mm : 1/200+1/109=0,005+0,0092=0,0142≈1/70 mm⁻¹. Objet à p=10cm, f=15cm→q=−30cm (virtuelle). Tous les résultats cohérents avec 1/p+1/q=1/f.",
    "ai": {
      "opening": "L'équation des lentilles minces régit chaque appareil photo, projecteur et œil ! Posez-moi des questions sur 1/p+1/q=1/f, les images réelles vs. virtuelles, ou le grandissement.",
      "keywords": {
        "setup": "banc optique|lentille convergente|objet|écran|distance image",
        "formula": "1/p+1/q=1/f|m=-q/p",
        "error": "parallaxe|écran pas à la mise au point nette|p mesuré depuis la mauvaise référence",
        "question": "lentille mince|distance objet|distance image|réelle|virtuelle|grandissement",
        "real": "appareil photo|projecteur|loupe"
      },
      "hint": "1/q = 1/f − 1/p. Si le résultat est négatif, q est négatif → image virtuelle. m = −q/p donne le signe et la taille de l'image.",
      "expected": "p=200mm, f=70mm : q≈108mm. p=10cm, f=15cm : q=−30cm (virtuelle). 1/p+1/q=1/f confirmé."
    }
  },
  {
    "num": 31,
    "cardEmoji": "🔬",
    "title": "Grandissement",
    "section": "Optique",
    "desc": "Mesurer le grandissement linéaire d'une lentille convergente en comparant les tailles de l'image et de l'objet et en vérifiant m = −v/u.",
    "setupTime": "5 min",
    "duration": "40 min",
    "summary": {
      "whatTheyLearn": "Les élèves mesurent la taille de l'image S₂ et la taille de l'objet S₁ et vérifient m = S₂/S₁ = −v/u = −q/p.",
      "instructions": [
        "Placer l'objet (diapositive flèche) à une distance u mesurée de la lentille.",
        "Trouver l'image nette sur l'écran à la distance v.",
        "Mesurer S₁ (taille de l'objet) et S₂ (taille de l'image) ; calculer m = S₂/S₁ et comparer avec −v/u."
      ],
      "expectedOutcome": "Essai 1 : u = 35 mm, v = 86,5 mm, S₁ = 21 mm, S₂ = 51 mm → m = 51/21 ≈ 2,43 ; −v/u = −86,5/35 ≈ −2,47. Image renversée."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔵",
          "name": "Lentille convergente"
        },
        {
          "emoji": "💡",
          "name": "Diapositive objet avec flèche (taille S₁ connue)"
        },
        {
          "emoji": "🖥️",
          "name": "Écran"
        },
        {
          "emoji": "📏",
          "name": "Banc optique avec graduations en millimètres"
        }
      ],
      "observationsToRecord": [
        "Distance objet u (mm)",
        "Distance image v (mm)",
        "Taille de l'objet S₁ (mm)",
        "Taille de l'image S₂ (mm)",
        "m = S₂/S₁ et m = −v/u"
      ],
      "theoryPoints": [
        "Grandissement linéaire : m = taille de l'image / taille de l'objet = S₂/S₁.",
        "D'après la géométrie des triangles semblables : m = −v/u (signe négatif = renversé).",
        "|m| > 1 : agrandie ; |m| < 1 : réduite ; m < 0 : renversée.",
        "Les images réelles (v > 0) d'un objet au-delà de f : renversées (m < 0)."
      ],
      "realWorldConnections": [
        "Les projecteurs nécessitent m >> 1 pour créer de grandes images sur écran.",
        "Les microscopes utilisent deux étages de lentilles ; m total = m_obj × m_ocu.",
        "Les appareils photo nécessitent m < 1 pour créer de petites images sur capteur de grandes scènes."
      ],
      "formula": "m = S₂/S₁ = −v/u = −q/p"
    },
    "questions": {
      "mcq": [
        {
          "text": "Objet à u = 35 mm, image à v = 86,5 mm. Quel est le grandissement ?",
          "options": [
            "−2,47",
            "+2,47",
            "−0,40",
            "+0,40"
          ],
          "correctIndex": 0,
          "explanation": "m = −v/u = −86,5/35 ≈ −2,47. Négatif : image renversée. |m| = 2,47 : agrandie."
        },
        {
          "text": "Si |m| = 0,5, l'image est :",
          "options": [
            "Deux fois plus grande que l'objet",
            "De même taille que l'objet",
            "La moitié de la taille de l'objet",
            "Trois fois plus grande"
          ],
          "correctIndex": 2,
          "explanation": "|m| = 0,5 signifie taille de l'image = 0,5 × taille de l'objet → l'image est deux fois plus petite (réduite)."
        },
        {
          "text": "Une image réelle formée par une lentille convergente est toujours :",
          "options": [
            "Droite et agrandie",
            "Renversée",
            "Virtuelle",
            "De même taille que l'objet"
          ],
          "correctIndex": 1,
          "explanation": "Les images réelles formées par des lentilles convergentes (objet au-delà de f) sont toujours renversées (m < 0)."
        }
      ],
      "discussion": [
        "Expliquer pourquoi m = −v/u est négatif pour les images réelles.",
        "Comment disposer l'expérience pour produire une image virtuelle agrandie ? Que vaudrait m ?",
        "L'objectif d'un projecteur produit une image 50 fois plus grande que l'objet. Si l'objet mesure 20 mm, quelle est la taille de l'image ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "m = S₂/S₁ (rapport de tailles)",
          "pct": 30
        },
        {
          "label": "m = −v/u (rapport de distances)",
          "pct": 30
        },
        {
          "label": "Signe et valeur absolue de m",
          "pct": 25
        },
        {
          "label": "Vérification des deux méthodes",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves pensent que le grandissement est toujours > 1 ; les appareils photo et les yeux produisent m < 1.",
        "Oublier le signe négatif : m < 0 signifie renversé, pas plus petit.",
        "Mesurer S₂ et S₁ du même côté de la lentille confond objet et image."
      ],
      "hook": "Comment un projecteur de cinéma agrandit-il un cadre de film de la taille d'un timbre-poste pour remplir tout un écran de cinéma ? Grandissement linéaire de plusieurs centaines — tout ça grâce à l'équation des lentilles minces !",
      "khanLinks": [
        {
          "title": "Hauteur et distance de l'image",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/lenses/v/object-image-height-and-distance-relationship"
        },
        {
          "title": "Équation des lentilles minces",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/lenses/v/thin-lens-equation-and-problem-solving"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "u (mm)",
        "v (mm)",
        "S₁ (mm)",
        "S₂ (mm)",
        "m = S₂/S₁",
        "m = −v/u",
        "Concordance ?"
      ],
      "rows": 4
    },
    "observations": [
      "Mesurer S₁ de l'objet avec une règle avant l'expérience.",
      "Mesurer S₂ de l'image sur l'écran avec soin.",
      "Comparer m calculé des deux manières pour chaque essai."
    ],
    "conclusion": "Essai 1 : u=35mm, v=86,5mm → m_taille=51/21≈2,43, m_rapport=−86,5/35≈−2,47. Accord à 2 % près. L'image réelle est renversée (m<0). m = S₂/S₁ = −v/u vérifié.",
    "ai": {
      "opening": "Le grandissement relie les tailles de l'objet et de l'image ! Posez-moi des questions sur m = S₂/S₁, pourquoi les images réelles sont renversées, ou le fonctionnement des projecteurs.",
      "keywords": {
        "setup": "banc optique|diapositive objet|écran|lentille convergente|taille de l'image",
        "formula": "m = S₂/S₁ = −v/u",
        "error": "mesure depuis la mauvaise référence|image floue|parallaxe",
        "question": "grandissement|taille de l'image|taille de l'objet|renversée|image réelle",
        "real": "projecteur|microscope|appareil photo"
      },
      "hint": "m = S₂/S₁ = −v/u. m négatif signifie renversé. |m|>1 signifie agrandi. Les images réelles sont toujours renversées.",
      "expected": "u=35mm, v=86,5mm, S₁=21mm, S₂=51mm → m_taille≈2,43, m_rapport≈−2,47. L'accord confirme la formule."
    }
  },
  {
    "num": 32,
    "cardEmoji": "🌈",
    "title": "Mélange des couleurs",
    "section": "Optique",
    "desc": "Mélanger des lumières colorées (synthèse additive) et des filtres colorés (synthèse soustractive) pour comprendre la perception des couleurs.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves découvrent les couleurs primaires additives (R, V, B) et leurs mélanges, et comparent avec le mélange soustractif de pigments.",
      "instructions": [
        "Projeter des lumières rouge, verte et bleue sur un écran blanc et les superposer.",
        "Enregistrer la couleur dans chaque zone de superposition.",
        "Répéter avec des filtres colorés (soustractif) : observer des résultats différents."
      ],
      "expectedOutcome": "Additif : R+V=Jaune, R+B=Magenta, V+B=Cyan, R+V+B=Blanc. Soustractif : les couleurs primaires CMJ se combinent différemment."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔴",
          "name": "LED rouge / projecteur"
        },
        {
          "emoji": "🟢",
          "name": "LED verte / projecteur"
        },
        {
          "emoji": "🔵",
          "name": "LED bleue / projecteur"
        },
        {
          "emoji": "🖥️",
          "name": "Écran blanc"
        },
        {
          "emoji": "🎨",
          "name": "Filtres colorés (CMJ)"
        }
      ],
      "observationsToRecord": [
        "Couleur à chaque superposition de deux primaires",
        "Couleur quand les trois primaires se superposent",
        "Comparaison avec les résultats du mélange soustractif (filtres)"
      ],
      "theoryPoints": [
        "Mélange additif (lumières) : R + V = Jaune ; R + B = Magenta ; V + B = Cyan ; R + V + B = Blanc.",
        "Mélange soustractif (pigments/filtres) : absorbent des couleurs ; Cyan + Magenta + Jaune = Noir.",
        "L'œil humain possède trois types de cônes (sensibles à R, V, B).",
        "Les écrans TV utilisent le mélange additif (petits pixels R, V, B)."
      ],
      "realWorldConnections": [
        "Les écrans de télévision et de téléphone utilisent le mélange additif RVB.",
        "L'impression utilise le mélange soustractif CMJN.",
        "Les concepteurs d'éclairage de scène utilisent le mélange additif des couleurs."
      ],
      "formula": "Additif : R+V+B = Blanc   |   Soustractif : C+M+J = Noir"
    },
    "questions": {
      "mcq": [
        {
          "text": "Quelle couleur est produite par le mélange de lumières rouge et verte ?",
          "options": [
            "Marron",
            "Jaune",
            "Orange",
            "Blanc"
          ],
          "correctIndex": 1,
          "explanation": "Mélange additif : rouge + vert = jaune."
        },
        {
          "text": "Le mélange des trois primaires additives (R+V+B) donne :",
          "options": [
            "Noir",
            "Marron",
            "Blanc",
            "Gris"
          ],
          "correctIndex": 2,
          "explanation": "Les trois primaires additives ensemble produisent de la lumière blanche."
        },
        {
          "text": "Le mélange soustractif des couleurs est utilisé dans :",
          "options": [
            "Les écrans de télévision",
            "L'éclairage de scène",
            "L'impression en couleur",
            "Les projecteurs"
          ],
          "correctIndex": 2,
          "explanation": "L'impression utilise le mélange soustractif CMJN ; les encres absorbent (soustraient) des couleurs de la lumière blanche."
        }
      ],
      "discussion": [
        "Expliquer la différence entre le mélange additif et soustractif des couleurs avec des exemples.",
        "Pourquoi le mélange de tous les pigments donne-t-il du noir tandis que le mélange de toutes les lumières donne du blanc ?",
        "Comment un écran TV produit-il des millions de couleurs en n'utilisant que trois couleurs ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Primaires additives RVB",
          "pct": 30
        },
        {
          "label": "Couleurs secondaires (J, M, C)",
          "pct": 25
        },
        {
          "label": "Mélange soustractif (CMJ)",
          "pct": 25
        },
        {
          "label": "Perception des couleurs (cellules cônes)",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Les élèves confondent le mélange additif (lumière) et soustractif (pigment) ; ils suivent des règles différentes.",
        "Beaucoup pensent que R+V devrait donner de l'orange (règle de mélange des peintures) ; en lumière, R+V = Jaune.",
        "Supposer que le blanc est l'absence de couleur ; en mélange additif, le blanc est toutes les couleurs ensemble."
      ],
      "hook": "L'écran de votre téléphone n'a pas de pixels jaunes, oranges ou violets — seulement rouge, vert et bleu. Pourtant il affiche des milliards de couleurs ! Le mélange additif en est le secret.",
      "khanLinks": [
        {
          "title": "Lumière visible et spectre électromagnétique",
          "url": "https://www.khanacademy.org/science/physics/light-waves/introduction-to-light-waves/v/visible-light-and-the-electromagnetic-spectrum"
        },
        {
          "title": "Ondes lumineuses",
          "url": "https://www.khanacademy.org/science/physics/light-waves"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Combinaison",
        "Résultat additif",
        "Résultat soustractif"
      ],
      "rows": 7
    },
    "observations": [
      "Enregistrer la couleur dans chaque zone de superposition sur l'écran blanc.",
      "Confirmer R+V+B = Blanc dans la superposition centrale.",
      "Comparer avec les superpositions de filtres et noter les différences."
    ],
    "conclusion": "Mélange additif des couleurs vérifié : R+V=Jaune, R+B=Magenta, V+B=Cyan, R+V+B=Blanc. Le mélange soustractif avec des filtres donne des résultats différents (CMJ → Noir). Les écrans TV utilisent le RVB additif ; les imprimantes utilisent le CMJ soustractif.",
    "ai": {
      "opening": "Le mélange des couleurs est différent pour les lumières et les peintures ! Posez-moi des questions sur le RVB additif, le CMJ soustractif, ou comment les écrans créent toutes les couleurs.",
      "keywords": {
        "setup": "lumières colorées|RVB|écran blanc|filtres|superposition",
        "formula": "R+V=J|R+B=M|V+B=C|R+V+B=Blanc|C+M+J=Noir",
        "error": "pièce pas assez sombre|projecteurs pas vraiment RVB|écran pas blanc",
        "question": "additif|soustractif|RVB|CMJ|mélange des couleurs|couleurs primaires",
        "real": "écran TV|impression|éclairage de scène"
      },
      "hint": "Additif (lumières) : R+V=Jaune, R+B=Magenta, V+B=Cyan, toutes les trois=Blanc. Soustractif (pigments) : inverse — toutes absorbent pour donner Noir.",
      "expected": "R+V=Jaune, R+B=Magenta, V+B=Cyan, R+V+B=Blanc. Soustractif : C+M+J=Noir."
    }
  },
  {
    "num": 33,
    "cardEmoji": "🔭",
    "title": "Microscope – Télescope",
    "section": "Optique",
    "desc": "Construire un microscope simple et un télescope avec les lentilles disponibles et mesurer leurs grossissements.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves comprennent qu'un microscope composé utilise deux lentilles convergentes (G_total = G_obj × G_ocu) et qu'un télescope utilise un grand objectif et un oculaire.",
      "instructions": [
        "Microscope : placer l'objet juste au-delà de f de l'objectif ; positionner l'oculaire pour observer l'image réelle intermédiaire.",
        "Télescope : aligner l'objectif (longue f) et l'oculaire (courte f) séparés par f_obj + f_ocu.",
        "Mesurer le grossissement total en comparant les tailles apparentes de l'image et de l'objet."
      ],
      "expectedOutcome": "Microscope : G_total = G_obj × G_ocu. Grossissement angulaire du télescope : G = f_obj/f_ocu."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔵",
          "name": "Lentille à courte focale (objectif)"
        },
        {
          "emoji": "🔵",
          "name": "Lentille à focale moyenne (oculaire)"
        },
        {
          "emoji": "📏",
          "name": "Banc optique"
        },
        {
          "emoji": "💡",
          "name": "Objet éclairé"
        },
        {
          "emoji": "🔭",
          "name": "Lentille à longue focale (objectif de télescope)"
        }
      ],
      "observationsToRecord": [
        "f_objectif et f_oculaire (mm)",
        "Grossissement total G_total pour le microscope",
        "Grossissement angulaire G = f_obj/f_ocu pour le télescope"
      ],
      "theoryPoints": [
        "Microscope composé : G_total = G_obj × G_ocu = (v_obj/u_obj) × (D/f_ocu).",
        "Télescope : G = f_obj / f_ocu (grossissement angulaire).",
        "Utiliser un f_obj court et un f_ocu court donne un fort grossissement pour le microscope.",
        "Télescope : un grand f_obj et un f_ocu court donne un fort grossissement."
      ],
      "realWorldConnections": [
        "Les microscopes composés grossissent les cellules et les micro-organismes pour l'étude biologique.",
        "Les télescopes astronomiques utilisent de grands miroirs ou lentilles objectifs pour collecter la lumière.",
        "Les jumelles combinent deux télescopes avec des prismes pour une conception compacte."
      ],
      "formula": "Microscope : G = G_obj × G_ocu   |   Télescope : G = f_obj / f_ocu"
    },
    "questions": {
      "mcq": [
        {
          "text": "Un microscope a G_obj = 10× et G_ocu = 5×. Quel est G_total ?",
          "options": [
            "2×",
            "15×",
            "50×",
            "100×"
          ],
          "correctIndex": 2,
          "explanation": "G_total = G_obj × G_ocu = 10 × 5 = 50×."
        },
        {
          "text": "Un télescope a f_obj = 600 mm et f_ocu = 20 mm. Quel est son grossissement ?",
          "options": [
            "20×",
            "30×",
            "600×",
            "12 000×"
          ],
          "correctIndex": 1,
          "explanation": "G = f_obj/f_ocu = 600/20 = 30×."
        },
        {
          "text": "L'oculaire d'un microscope joue le rôle de :",
          "options": [
            "Un objectif formant une image réelle",
            "Une loupe observant l'image réelle formée par l'objectif",
            "Un miroir",
            "Un projecteur"
          ],
          "correctIndex": 1,
          "explanation": "L'oculaire fonctionne comme une simple loupe, agrandissant l'image réelle intermédiaire formée par l'objectif."
        }
      ],
      "discussion": [
        "Expliquer le processus de grossissement en deux étapes dans un microscope composé.",
        "Pourquoi un télescope a-t-il besoin d'un grand objectif de grand diamètre ?",
        "Comparer le trajet de la lumière dans un télescope réfracteur et un télescope réflecteur."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Microscope composé à deux lentilles",
          "pct": 30
        },
        {
          "label": "Conception du télescope réfracteur",
          "pct": 30
        },
        {
          "label": "G = G_obj × G_ocu (microscope)",
          "pct": 20
        },
        {
          "label": "G = f_obj/f_ocu (télescope)",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Les élèves pensent que plus de lentilles signifie toujours plus de grossissement ; l'alignement est critique.",
        "Confondre les rôles de l'objectif et de l'oculaire dans un microscope.",
        "Supposer que tous les instruments optiques fonctionnent de la même manière."
      ],
      "hook": "Un microscope composé utilise deux lentilles dont les grossissements se multiplient — pas s'additionnent ! Un objectif 40× et un oculaire 10× donnent 400× au total. C'est suffisant pour voir des cellules individuelles !",
      "khanLinks": [
        {
          "title": "Lentilles (Optique géométrique)",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/lenses"
        },
        {
          "title": "Optique géométrique",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Instrument",
        "f_obj (mm)",
        "f_ocu (mm)",
        "G_obj",
        "G_ocu",
        "G_total"
      ],
      "rows": 3
    },
    "observations": [
      "Enregistrer les distances focales des lentilles et mesurer le grossissement pour le montage microscope.",
      "Calculer G = f_obj/f_ocu pour le télescope et vérifier par observation.",
      "Décrire l'orientation de l'image finale dans chaque instrument."
    ],
    "conclusion": "Microscope composé : G_total = G_obj × G_ocu. Télescope : G = f_obj/f_ocu. Les deux vérifiés expérimentalement. L'image du microscope est renversée ; l'image du télescope est renversée (réfracteur). G_total se multiplie à chaque étage.",
    "ai": {
      "opening": "Les microscopes et télescopes dévient la lumière de façon ingénieuse ! Posez-moi des questions sur le microscope à deux étages, le grossissement du télescope, ou comment en construire un.",
      "keywords": {
        "setup": "objectif|oculaire|banc optique|focale|microscope|télescope",
        "formula": "G_total = G_obj × G_ocu|G_telescope = f_obj/f_ocu",
        "error": "alignement|distance oculaire|mauvais choix de lentille",
        "question": "microscope|télescope|grossissement|objectif|oculaire",
        "real": "microscope biologique|télescope astronomique|jumelles"
      },
      "hint": "Microscope : G_total = G_obj × G_ocu. Télescope : G = f_obj / f_ocu. Pour le télescope, utiliser un long f_obj et un court f_ocu.",
      "expected": "Télescope avec f_obj=600mm, f_ocu=20mm → G=30×. Microscope : G_obj×G_ocu donne le grossissement total."
    }
  },
  {
    "num": 34,
    "cardEmoji": "🔺",
    "title": "Prisme : Composition de la lumière",
    "section": "Optique",
    "desc": "Faire passer de la lumière blanche à travers un prisme en verre pour produire un spectre visible et observer la réfraction dépendante de la longueur d'onde (dispersion).",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves observent que la lumière blanche se décompose en ROUGE-ORANGE-JAUNE-VERT-BLEU-INDIGO-VIOLET et comprennent que le violet se courbe le plus et le rouge le moins.",
      "instructions": [
        "Diriger un faisceau étroit de lumière blanche sur la face du prisme.",
        "Observer le spectre sur un écran et identifier les couleurs dans l'ordre.",
        "Noter quelle couleur est déviée le plus (violet) et le moins (rouge)."
      ],
      "expectedOutcome": "Spectre dans l'ordre : Rouge, Orange, Jaune, Vert, Bleu, Indigo, Violet. Le violet dévie le plus ; le rouge le moins. Reproduit l'expérience de Newton de 1666."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔺",
          "name": "Prisme équilatéral en verre"
        },
        {
          "emoji": "🔦",
          "name": "Source de lumière blanche (projecteur ou fente avec lumière du soleil)"
        },
        {
          "emoji": "🖥️",
          "name": "Écran blanc"
        },
        {
          "emoji": "📏",
          "name": "Règle (pour mesurer les angles de déviation)"
        }
      ],
      "observationsToRecord": [
        "Séquence des couleurs dans le spectre",
        "Quelle couleur dévie le plus et le moins",
        "Largeur angulaire approximative du spectre"
      ],
      "theoryPoints": [
        "Dispersion : différentes longueurs d'onde réfractent à des angles légèrement différents (n varie avec λ).",
        "Violet (λ ≈ 400 nm) a l'indice de réfraction le plus élevé → se courbe le plus.",
        "Rouge (λ ≈ 700 nm) a l'indice de réfraction le plus faible → se courbe le moins.",
        "Loi de Snell : n₁ sin θ₁ = n₂ sin θ₂ (mais n dépend de la longueur d'onde).",
        "Les arcs-en-ciel sont une dispersion naturelle par les gouttes d'eau."
      ],
      "realWorldConnections": [
        "Les arcs-en-ciel se forment quand la lumière du soleil se disperse dans les gouttes d'eau.",
        "Les spectromètres à prisme analysent la composition des sources lumineuses.",
        "L'aberration chromatique dans les lentilles découle de la dispersion."
      ],
      "formula": "n₁ sin θ₁ = n₂ sin θ₂   |   n = n(λ) : violet > rouge"
    },
    "questions": {
      "mcq": [
        {
          "text": "Quelle couleur de lumière est déviée le plus par un prisme en verre ?",
          "options": [
            "Rouge",
            "Vert",
            "Violet",
            "Jaune"
          ],
          "correctIndex": 2,
          "explanation": "Le violet a la longueur d'onde la plus courte et l'indice de réfraction le plus élevé dans le verre → déviation maximale."
        },
        {
          "text": "Pourquoi un prisme sépare-t-il la lumière blanche en couleurs ?",
          "options": [
            "Il absorbe certaines couleurs",
            "Différentes longueurs d'onde ont des indices de réfraction différents",
            "Le prisme est très épais",
            "La lumière rebondit à l'intérieur du prisme"
          ],
          "correctIndex": 1,
          "explanation": "Dispersion : n varie avec la longueur d'onde. Chaque couleur réfracte à un angle légèrement différent."
        },
        {
          "text": "La séquence des couleurs d'un prisme de la moins à la plus déviée est :",
          "options": [
            "V I B V J O R",
            "R O J V B I V",
            "R V B",
            "B J V"
          ],
          "correctIndex": 1,
          "explanation": "Le rouge dévie le moins, le violet le plus : R O J V B I V."
        }
      ],
      "discussion": [
        "Expliquer pourquoi la lumière violette se courbe plus que la lumière rouge en passant dans le verre.",
        "Comment se forme un arc-en-ciel ? Quelle couleur apparaît sur le bord extérieur et laquelle sur le bord intérieur ?",
        "Qu'est-ce que l'aberration chromatique et comment est-elle liée à la dispersion ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Dispersion : n = n(λ)",
          "pct": 30
        },
        {
          "label": "Ordre du spectre R-O-J-V-B-I-V",
          "pct": 25
        },
        {
          "label": "Loi de Snell à chaque interface",
          "pct": 25
        },
        {
          "label": "Arc-en-ciel et dispersion dans la vie courante",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Les élèves pensent que le prisme ajoute de la couleur à la lumière blanche ; il ne fait que séparer les couleurs déjà présentes.",
        "Beaucoup pensent que le rouge se courbe plus que le violet ; c'est le contraire.",
        "Supposer que tous les matériaux transparents dispersent la lumière de la même manière."
      ],
      "hook": "Isaac Newton fut le premier à montrer que la lumière blanche est un mélange de toutes les couleurs, et non une lumière pure contaminée par un prisme. Il le prouva en recombinant le spectre en blanc avec un second prisme !",
      "khanLinks": [
        {
          "title": "Réfraction et loi de Snell",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/reflection-refraction/v/refraction-and-snell-s-law"
        },
        {
          "title": "Lumière visible et spectre électromagnétique",
          "url": "https://www.khanacademy.org/science/physics/light-waves/introduction-to-light-waves/v/visible-light-and-the-electromagnetic-spectrum"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Couleur",
        "Longueur d'onde approx. (nm)",
        "Déviation (relative)",
        "Position dans le spectre"
      ],
      "rows": 7
    },
    "observations": [
      "Lister les couleurs observées dans l'ordre de la moins à la plus déviée.",
      "Confirmer que le violet est du côté le plus dévié.",
      "Estimer l'étalement angulaire total du spectre."
    ],
    "conclusion": "La lumière blanche dispersée en spectre R-O-J-V-B-I-V. Le violet dévie le plus, le rouge le moins. Cela confirme n(violet) > n(rouge) dans le verre et la loi de Snell avec indice de réfraction dépendant de la longueur d'onde. Reproduit l'expérience de Newton de 1666.",
    "ai": {
      "opening": "La lumière blanche est un arc-en-ciel en attente ! Posez-moi des questions sur la dispersion, la loi de Snell, ou pourquoi le violet se courbe plus que le rouge.",
      "keywords": {
        "setup": "prisme|lumière blanche|spectre|écran|fente",
        "formula": "n₁sinθ₁=n₂sinθ₂|n = n(λ)|dispersion",
        "error": "pièce pas sombre|mauvais angle du prisme|fente trop large",
        "question": "dispersion|spectre|ROJVBIV|violet|rouge|réfraction|arc-en-ciel",
        "real": "arc-en-ciel|spectromètre|aberration chromatique"
      },
      "hint": "Le violet a le n le plus élevé → dévie le plus. Le rouge a le n le plus faible → dévie le moins. Séquence : R O J V B I V.",
      "expected": "Spectre : R-O-J-V-B-I-V. Violet le plus dévié, rouge le moins. n(violet)>n(rouge) confirmé."
    }
  },
  {
    "num": 35,
    "cardEmoji": "🌗",
    "title": "Ombres et pénombre",
    "section": "Optique",
    "desc": "Étudier comment la taille et la netteté de l'ombre dépendent de la taille de la source et des positions relatives de la source, de l'objet et de l'écran.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves observent l'ombre (ombre totale) et la pénombre (ombre partielle) et découvrent que les sources ponctuelles donnent des ombres nettes tandis que les sources étendues donnent des pénombres.",
      "instructions": [
        "Placer un petit objet opaque entre une source lumineuse ponctuelle et un écran.",
        "Mesurer la taille de l'ombre en fonction de la distance objet-écran.",
        "Répéter avec une source lumineuse étendue (plus grande) et observer la pénombre."
      ],
      "expectedOutcome": "Source ponctuelle → ombre nette (umbra seulement). Source étendue → umbra entourée de pénombre. La taille de l'ombre augmente quand l'objet se rapproche de l'écran."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔦",
          "name": "Source lumineuse ponctuelle (petite LED)"
        },
        {
          "emoji": "💡",
          "name": "Source lumineuse étendue (lampe avec grande ampoule)"
        },
        {
          "emoji": "⚫",
          "name": "Objet opaque (balle ou disque)"
        },
        {
          "emoji": "🖥️",
          "name": "Écran blanc"
        },
        {
          "emoji": "📏",
          "name": "Règle"
        }
      ],
      "observationsToRecord": [
        "Dimensions de l'ombre pour source ponctuelle vs. source étendue",
        "Présence ou absence de pénombre",
        "Effet de la distance objet-écran sur la taille de l'ombre"
      ],
      "theoryPoints": [
        "Umbra : zone d'ombre totale (aucune lumière directe de la source).",
        "Pénombre : zone d'ombre partielle (une partie de la lumière de la source l'atteint).",
        "Source ponctuelle → uniquement umbra (ombre nette).",
        "Source étendue → umbra + pénombre.",
        "Optique géométrique : la lumière se propage en ligne droite (modèle des rayons)."
      ],
      "realWorldConnections": [
        "Les éclipses solaires et lunaires impliquent des zones d'umbra et de pénombre.",
        "Photographie : les grandes softboxes créent des ombres douces (grande pénombre) ; une petite LED crée des ombres dures.",
        "Les cadrans solaires fonctionnent parce que la position de l'ombre du soleil indique l'heure."
      ],
      "formula": "Géométrie des ombres : triangles semblables ; hauteur ombre/hauteur objet = distance image/distance objet"
    },
    "questions": {
      "mcq": [
        {
          "text": "Quelle est la différence essentielle entre umbra et pénombre ?",
          "options": [
            "L'umbra est colorée ; la pénombre est grise",
            "L'umbra ne reçoit aucune lumière directe ; la pénombre reçoit une lumière partielle",
            "L'umbra est plus grande que la pénombre",
            "Il n'y a pas de différence"
          ],
          "correctIndex": 1,
          "explanation": "L'umbra est la zone d'ombre totale ne recevant aucune lumière directe de la source. La pénombre est l'ombre partielle où une partie de la source est occultée."
        },
        {
          "text": "Quel type de source lumineuse produit l'ombre la plus nette sans pénombre ?",
          "options": [
            "Source étendue (grande ampoule)",
            "Source ponctuelle (très petite LED)",
            "Source diffuse",
            "Source colorée"
          ],
          "correctIndex": 1,
          "explanation": "Une source ponctuelle produit des rayons depuis un seul point ; le bord de l'ombre géométrique est parfaitement net sans pénombre."
        },
        {
          "text": "Quand un objet opaque se rapproche de l'écran (source ponctuelle inchangée), l'ombre :",
          "options": [
            "Devient plus grande",
            "Devient plus petite",
            "Reste identique",
            "Disparaît"
          ],
          "correctIndex": 1,
          "explanation": "Rapprocher l'objet de l'écran le rapproche de sa propre ombre, réduisant la taille de l'ombre (triangles semblables : angle projeté plus petit)."
        }
      ],
      "discussion": [
        "Expliquer pourquoi l'ombre de la Lune lors d'une éclipse solaire comporte à la fois une umbra et une pénombre.",
        "Pourquoi les photographes utilisent-ils de grandes softboxes pour des portraits flatteurs ?",
        "Utiliser des triangles semblables pour dériver une formule pour la hauteur de l'ombre en fonction de la distance source, de la taille de l'objet et de la distance écran."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Umbra vs. pénombre",
          "pct": 30
        },
        {
          "label": "Source ponctuelle vs. source étendue",
          "pct": 30
        },
        {
          "label": "Géométrie des ombres (triangles semblables)",
          "pct": 25
        },
        {
          "label": "Géométrie des éclipses",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves pensent qu'une source ponctuelle crée une pénombre ; seules les sources étendues en créent.",
        "Beaucoup confondent les tailles de l'umbra et de la pénombre avec la taille de l'objet.",
        "Supposer que la lumière contourne les coins pour remplir les ombres (ce n'est pas le cas en optique géométrique)."
      ],
      "hook": "Mettez-vous au soleil et regardez votre ombre. Elle a un bord flou — c'est la pénombre ! Le Soleil n'est pas une source ponctuelle ; il mesure 1,4 million de km de large, donc sa lumière provient de directions légèrement différentes.",
      "khanLinks": [
        {
          "title": "Introduction à la lumière",
          "url": "https://www.khanacademy.org/science/physics/light-waves/introduction-to-light-waves/v/introduction-to-light"
        },
        {
          "title": "Optique géométrique",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Type de source",
        "Distance source-objet (cm)",
        "Distance objet-écran (cm)",
        "Largeur ombre (cm)",
        "Largeur pénombre (cm)"
      ],
      "rows": 5
    },
    "observations": [
      "Enregistrer les dimensions de l'ombre pour les sources ponctuelle et étendue.",
      "Observer et schématiser les zones d'umbra et de pénombre.",
      "Noter comment la taille de l'ombre change quand la distance objet-écran varie."
    ],
    "conclusion": "Source ponctuelle → umbra nette, pas de pénombre. Source étendue → umbra + pénombre. Taille de l'ombre prédite par les triangles semblables. La largeur de la pénombre augmente avec la taille de la source. La géométrie des éclipses expliquée par les mêmes principes.",
    "ai": {
      "opening": "Les ombres révèlent comment la lumière se propage ! Posez-moi des questions sur l'umbra, la pénombre, pourquoi les sources ponctuelles sont différentes, ou la géométrie des éclipses.",
      "keywords": {
        "setup": "source ponctuelle|source étendue|objet opaque|écran|ombre",
        "formula": "triangles semblables|h_ombre/h_objet = d_écran/d_objet",
        "error": "sources lumineuses multiples|réflexions sur les murs|objet translucide",
        "question": "ombre|umbra|pénombre|source ponctuelle|éclipse",
        "real": "éclipse solaire|photographie|cadran solaire"
      },
      "hint": "Source ponctuelle → uniquement umbra nette. Source étendue → umbra + pénombre. Géométrie des ombres : utiliser les triangles semblables.",
      "expected": "Source ponctuelle : ombre nette. Source étendue : pénombre entoure l'umbra. La taille de l'ombre augmente avec la distance objet-écran."
    }
  },
{
    "num": 36,
    "cardEmoji": "🪞",
    "title": "Miroirs",
    "section": "Optique",
    "desc": "Étudier la formation d'images par des miroirs concaves et convexes pour des objets à différentes distances.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves observent que les miroirs concaves forment des images réelles ou virtuelles selon la position de l'objet, tandis que les miroirs convexes forment toujours des images virtuelles, droites et réduites.",
      "instructions": [
        "Placer l'objet au-delà de C (centre de courbure) du miroir concave ; localiser l'image réelle.",
        "Déplacer l'objet à l'intérieur de f ; observer une image virtuelle, droite et agrandie.",
        "Remplacer par un miroir convexe ; observer une image toujours virtuelle, droite et réduite."
      ],
      "expectedOutcome": "Concave : objet au-delà de f → image réelle, inversée. Objet à l'intérieur de f → virtuelle, droite, agrandie. Convexe : toujours virtuelle, droite, réduite (grand champ de vision)."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🥄",
          "name": "Miroir concave"
        },
        {
          "emoji": "🔵",
          "name": "Miroir convexe"
        },
        {
          "emoji": "💡",
          "name": "Objet éclairé"
        },
        {
          "emoji": "🖥️",
          "name": "Écran"
        },
        {
          "emoji": "📏",
          "name": "Banc optique"
        }
      ],
      "observationsToRecord": [
        "Distance objet u (cm)",
        "Distance image v (cm) pour le miroir concave",
        "Orientation de l'image (droite/inversée) et taille",
        "Type d'image pour le miroir convexe"
      ],
      "theoryPoints": [
        "Équation des miroirs : 1/v + 1/u = 1/f = 2/R.",
        "Miroir concave : f < 0 (foyer réel). Objet à u > f → image réelle, inversée.",
        "Miroir concave : u < f → image virtuelle, droite, agrandie (miroir de rasage/maquillage).",
        "Miroir convexe : f > 0 (foyer virtuel). Toujours : image virtuelle, droite, réduite.",
        "Le miroir convexe offre un plus grand champ de vision → utilisé pour les rétroviseurs latéraux de voiture."
      ],
      "realWorldConnections": [
        "Les miroirs convexes dans les magasins et les rétroviseurs de voiture offrent un grand champ de vision.",
        "Les miroirs concaves dans les télescopes (réflecteurs) et les antennes paraboliques concentrent les signaux.",
        "Les miroirs concaves utilisés comme miroirs de maquillage donnent une image droite agrandie."
      ],
      "formula": "1/v + 1/u = 1/f = 2/R   |   m = −v/u"
    },
    "questions": {
      "mcq": [
        {
          "text": "Un miroir convexe produit toujours une image qui est :",
          "options": [
            "Réelle, inversée et agrandie",
            "Réelle, inversée et réduite",
            "Virtuelle, droite et réduite",
            "Virtuelle, inversée et agrandie"
          ],
          "correctIndex": 2,
          "explanation": "Les miroirs convexes (divergents) produisent toujours des images virtuelles, droites et réduites, quelle que soit la position de l'objet."
        },
        {
          "text": "Un miroir concave forme une image réelle lorsque l'objet est :",
          "options": [
            "À l'intérieur de la distance focale",
            "Exactement au foyer",
            "Au-delà de la distance focale",
            "À l'infini uniquement"
          ],
          "correctIndex": 2,
          "explanation": "Les miroirs concaves forment des images réelles lorsque l'objet est au-delà du foyer (u > f)."
        },
        {
          "text": "Pourquoi les miroirs convexes sont-ils utilisés comme rétroviseurs de voiture ?",
          "options": [
            "Ils agrandissent les objets",
            "Ils offrent un plus grand champ de vision",
            "Ils éliminent les reflets éblouissants",
            "Ils montrent des images réelles"
          ],
          "correctIndex": 1,
          "explanation": "Les miroirs convexes produisent toujours des images réduites, permettant un plus grand champ de vision dans un miroir de petite taille."
        }
      ],
      "discussion": [
        "Tracer les diagrammes de rayons pour un miroir concave avec l'objet (a) au-delà de C, (b) entre f et C, (c) à l'intérieur de f.",
        "Pourquoi un miroir de maquillage utilise-t-il un miroir concave plutôt que convexe ?",
        "Quelle est la signification de l'avertissement « Les objets dans le miroir sont plus proches qu'ils n'y paraissent » sur les rétroviseurs de voiture ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Équation des miroirs 1/v+1/u=1/f",
          "pct": 25
        },
        {
          "label": "Types d'images du miroir concave",
          "pct": 30
        },
        {
          "label": "Propriétés du miroir convexe",
          "pct": 25
        },
        {
          "label": "Applications des miroirs courbes",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Les élèves pensent que les miroirs concaves agrandissent toujours ; ils ne le font que lorsque l'objet est à l'intérieur de f.",
        "Beaucoup oublient que la convention de signes pour les miroirs diffère de celle des lentilles.",
        "Supposer que les miroirs convexes sont dangereux car ils déforment ; ils sont plus sûrs pour la conduite grâce à leur grand champ de vision."
      ],
      "hook": "Regardez dans le dos d'une cuillère — vous vous voyez à l'envers. Regardez dans le creux — vous vous voyez agrandi. La même physique s'applique aux antennes paraboliques et au rétroviseur latéral de votre voiture !",
      "khanLinks": [
        {
          "title": "Réflexion sur un miroir concave",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/mirrors/v/concave-mirrors"
        },
        {
          "title": "Miroirs (Optique géométrique)",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/mirrors"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Type de miroir",
        "u (cm)",
        "v (cm)",
        "Réelle/Virtuelle",
        "Droite/Inversée",
        "Agrandie/Réduite"
      ],
      "rows": 5
    },
    "observations": [
      "Pour le miroir concave : placer l'objet à 3 distances différentes (au-delà de C, entre f et C, à l'intérieur de f).",
      "Pour le miroir convexe : noter que l'image est toujours virtuelle, droite, réduite.",
      "Mesurer et comparer f en utilisant 1/v + 1/u = 1/f."
    ],
    "conclusion": "Miroir concave : objet au-delà de f → image réelle, inversée. Objet à l'intérieur de f → virtuelle, droite, agrandie. Miroir convexe : toujours virtuelle, droite, réduite avec grand champ de vision. Équation des miroirs vérifiée : 1/v+1/u=1/f.",
    "ai": {
      "opening": "Les miroirs courbes créent des images fascinantes ! Posez-moi des questions sur l'équation des miroirs, quand les miroirs concaves agrandissent, ou pourquoi les rétroviseurs de voiture sont convexes.",
      "keywords": {
        "setup": "miroir concave|miroir convexe|banc optique|écran|distance objet",
        "formula": "1/v+1/u=1/f=2/R|m=-v/u",
        "error": "convention de signes|mesure depuis le mauvais repère|placement de l'écran",
        "question": "concave|convexe|image réelle|image virtuelle|équation des miroirs|champ de vision",
        "real": "rétroviseur|miroir de maquillage|télescope|antenne parabolique"
      },
      "hint": "Concave : images réelles si u>f (inversées). Virtuelles si u<f (droites, agrandies). Convexe : toujours virtuelle, droite, réduite.",
      "expected": "Concave : u>f → image réelle inversée sur l'écran. u<f → image virtuelle agrandie. Convexe : toujours virtuelle, droite, réduite."
    }
  },
  {
    "num": 37,
    "cardEmoji": "🧲",
    "title": "Force magnétique d'attraction et de répulsion",
    "section": "Magnétisme",
    "desc": "Étudier les forces entre des aimants droits et cartographier les régions d'attraction et de répulsion.",
    "setupTime": "3 min",
    "duration": "10 min",
    "summary": {
      "whatTheyLearn": "Les élèves confirment que les pôles identiques se repoussent et les pôles opposés s'attirent, et observent que la force magnétique décroît rapidement avec la distance.",
      "instructions": [
        "Approcher le pôle N de l'aimant A vers le pôle N de l'aimant B : observer la répulsion.",
        "Approcher le pôle N de A vers le pôle S de B : observer l'attraction.",
        "Mesurer la force (qualitativement) à plusieurs distances."
      ],
      "expectedOutcome": "N-N et S-S : répulsion. N-S : attraction. La force décroît rapidement avec la distance de séparation."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🧲",
          "name": "Deux aimants droits (étiquetés N/S)"
        },
        {
          "emoji": "📏",
          "name": "Règle"
        },
        {
          "emoji": "🧭",
          "name": "Boussole (pour identifier les pôles)"
        }
      ],
      "observationsToRecord": [
        "Type de force (attraction/répulsion) pour chaque combinaison de pôles",
        "Force qualitative à différentes distances",
        "Confirmation du marquage des pôles avec la boussole"
      ],
      "theoryPoints": [
        "Les pôles identiques (N-N, S-S) se repoussent ; les pôles opposés (N-S) s'attirent.",
        "Force magnétique ∝ 1/r² (approximation dipolaire à grande distance).",
        "Les monopôles magnétiques n'existent pas ; chaque aimant a un pôle N et un pôle S.",
        "Couper un aimant en deux crée deux nouveaux aimants, chacun avec un pôle N et un pôle S."
      ],
      "realWorldConnections": [
        "Les trains à lévitation magnétique utilisent la répulsion entre pôles identiques pour un déplacement sans frottement.",
        "Les aiguilles de boussole s'alignent avec le champ magnétique terrestre (le pôle N pointe vers le nord géographique).",
        "Les appareils IRM utilisent de puissants aimants supraconducteurs."
      ],
      "formula": "F ∝ 1/r²   |   Les pôles identiques se repoussent ; les pôles opposés s'attirent"
    },
    "questions": {
      "mcq": [
        {
          "text": "Deux pôles nord sont rapprochés. Que se passe-t-il ?",
          "options": [
            "Ils s'attirent",
            "Ils se repoussent",
            "Rien ne se passe",
            "Ils se neutralisent"
          ],
          "correctIndex": 1,
          "explanation": "Les pôles magnétiques identiques (N-N ou S-S) se repoussent toujours."
        },
        {
          "text": "Si vous coupez un aimant droit en deux, que obtenez-vous ?",
          "options": [
            "Un aimant avec seulement N et un avec seulement S",
            "Deux aimants plus petits chacun avec un pôle N et un pôle S",
            "Deux morceaux non magnétisés",
            "Un aimant complet et une pièce non magnétique"
          ],
          "correctIndex": 1,
          "explanation": "Les monopôles magnétiques n'existent pas ; chaque moitié devient un aimant complet avec un pôle N et un pôle S."
        },
        {
          "text": "La force entre deux aimants lorsque leur séparation double :",
          "options": [
            "Double",
            "Est divisée par deux",
            "Est divisée par quatre environ",
            "Reste la même"
          ],
          "correctIndex": 2,
          "explanation": "La force dipolaire magnétique diminue approximativement en 1/r³ pour dipôle-dipôle (ou 1/r² pour un monopôle), donc doubler r réduit la force d'environ 4× (ou plus)."
        }
      ],
      "discussion": [
        "Pourquoi les monopôles magnétiques ne semblent-ils pas exister, même lorsqu'on coupe un aimant ?",
        "Comment fonctionne une boussole ? Quelle extrémité d'une boussole pointe vers le nord, et pourquoi cette nomenclature est-elle déroutante ?",
        "Décrire une application pratique de l'attraction magnétique et une de la répulsion magnétique."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Les pôles identiques se repoussent, les pôles opposés s'attirent",
          "pct": 35
        },
        {
          "label": "Relation force/distance",
          "pct": 25
        },
        {
          "label": "Absence de monopôles magnétiques",
          "pct": 25
        },
        {
          "label": "Applications dans le monde réel",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves pensent que le pôle N d'une boussole pointe vers le pôle Nord géographique ; géographiquement, le pôle magnétique sud est près du pôle nord géographique.",
        "Beaucoup croient qu'on peut isoler un pôle nord ou sud en coupant un aimant ; c'est impossible.",
        "Supposer que la force magnétique est constante avec la distance ; elle décroît rapidement."
      ],
      "hook": "Les trains à maglev flottent à quelques centimètres au-dessus du rail grâce à la répulsion entre pôles magnétiques identiques. Zéro frottement : ils peuvent rouler à 600 km/h — avec de simples aimants !",
      "khanLinks": [
        {
          "title": "Aimants et force magnétique",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/magnets-magnetic"
        },
        {
          "title": "Forces et champs magnétiques",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Pôle de l'aimant A",
        "Pôle de l'aimant B",
        "Type de force",
        "Distance (cm)",
        "Force (forte/moyenne/faible)"
      ],
      "rows": 4
    },
    "observations": [
      "Tester les quatre combinaisons de pôles et noter attraction/répulsion.",
      "Décrire comment la force évolue lorsque la distance augmente.",
      "Vérifier les étiquettes N-S à l'aide de la boussole."
    ],
    "conclusion": "Les pôles identiques (N-N, S-S) se repoussent ; les pôles opposés (N-S) s'attirent. La force décroît rapidement avec la distance. Couper un aimant crée deux nouveaux aimants complets. Les résultats confirment les interactions magnétiques fondamentales.",
    "ai": {
      "opening": "Les aimants sont fascinants — ils poussent et tirent sans toucher ! Posez-moi des questions sur les interactions entre pôles, la force en fonction de la distance, ou pourquoi couper un aimant n'isole pas un pôle.",
      "keywords": {
        "setup": "aimants droits|pôles|boussole|séparation|attraction|répulsion",
        "formula": "F ∝ 1/r²|identiques repoussent|opposés attirent",
        "error": "mauvais marquage des pôles|interférence ferromagnétique|aimants trop faibles",
        "question": "pôles|répulsion|attraction|monopôle|force distance|boussole",
        "real": "maglev|boussole|IRM"
      },
      "hint": "N-N ou S-S → répulsion. N-S → attraction. La force diminue avec la distance. Pas de monopôles magnétiques — couper un aimant donne deux nouveaux aimants.",
      "expected": "N-N : répulsion. N-S : attraction. S-S : répulsion. La force diminue rapidement au-delà de ~5 cm."
    }
  },
  {
    "num": 38,
    "cardEmoji": "🌀",
    "title": "Forces de champ magnétique",
    "section": "Magnétisme",
    "desc": "Cartographier le champ magnétique d'un aimant en U à l'aide d'une chambre de champ 2D avec de la limaille de fer.",
    "setupTime": "5 min",
    "duration": "10 min",
    "summary": {
      "whatTheyLearn": "Les élèves visualisent les lignes de champ magnétique à l'aide de limaille de fer dans une chambre 2D et confirment que les lignes de champ partent de N, entrent en S, et sont plus denses là où le champ est plus fort.",
      "instructions": [
        "Placer l'aimant en U sous la chambre de champ 2D.",
        "Tapoter doucement la chambre pour aider la limaille de fer à s'aligner avec les lignes de champ.",
        "Dessiner ou photographier le motif obtenu."
      ],
      "expectedOutcome": "Les lignes de champ s'incurvent du pôle N vers le pôle S, plus denses entre les pôles. À l'extérieur de l'entrefer : les lignes de champ sont plus espacées et plus faibles."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🧲",
          "name": "Aimant en U (fer à cheval)"
        },
        {
          "emoji": "🧪",
          "name": "Chambre de champ 2D avec limaille de fer"
        },
        {
          "emoji": "📸",
          "name": "Appareil photo ou crayon/papier pour le croquis"
        }
      ],
      "observationsToRecord": [
        "Forme et direction des lignes de champ",
        "Densité des lignes de champ entre les pôles par rapport à l'extérieur",
        "Si les lignes de champ forment des boucles fermées"
      ],
      "theoryPoints": [
        "Lignes de champ magnétique : trajet externe de N à S ; trajet interne de S à N (boucles fermées).",
        "La densité des lignes de champ indique l'intensité du champ : plus dense = plus fort.",
        "Les lignes de champ ne se croisent jamais.",
        "Entre les pôles d'un aimant en U : champ quasi uniforme et intense."
      ],
      "realWorldConnections": [
        "Les appareils IRM utilisent de forts champs magnétiques uniformes (comme entre les pôles d'un aimant en U mais bien plus intenses).",
        "Les électroaimants dans les moteurs et les générateurs utilisent la même géométrie de champ.",
        "Le stockage magnétique (disques durs) utilise de minuscules domaines magnétiques."
      ],
      "formula": "Lignes de champ B : N → S à l'extérieur, S → N à l'intérieur (boucles fermées)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Où le champ magnétique d'un aimant en U est-il le plus fort ?",
          "options": [
            "Aux extrémités des bras",
            "Entre les deux pôles (dans l'entrefer)",
            "Loin de l'aimant",
            "À l'arrière de l'aimant"
          ],
          "correctIndex": 1,
          "explanation": "Les lignes de champ sont les plus denses entre les deux pôles, indiquant le champ le plus fort dans l'entrefer."
        },
        {
          "text": "Les lignes de champ magnétique :",
          "options": [
            "Partent et s'arrêtent aux pôles libres",
            "Forment des boucles fermées de N à S à l'extérieur",
            "Se croisent à angle droit",
            "Vont de S à N à l'extérieur"
          ],
          "correctIndex": 1,
          "explanation": "Les lignes de champ forment des boucles fermées : à l'extérieur de N à S, à l'intérieur de S à N. Elles ne se croisent jamais."
        },
        {
          "text": "La limaille de fer dans une chambre de champ s'aligne :",
          "options": [
            "Perpendiculairement aux lignes de champ",
            "Dans la direction du champ magnétique",
            "Aléatoirement",
            "Vers le nord géographique"
          ],
          "correctIndex": 1,
          "explanation": "La limaille de fer est temporairement magnétisée et s'aligne avec la direction du champ magnétique local."
        }
      ],
      "discussion": [
        "Expliquer pourquoi les lignes de champ magnétique ne peuvent pas se croiser.",
        "Comment l'espacement des lignes de champ indique-t-il l'intensité du champ ?",
        "Pourquoi le champ entre les pôles d'un aimant en fer à cheval est-il plus uniforme que celui autour d'un aimant droit ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Direction des lignes de champ N→S",
          "pct": 30
        },
        {
          "label": "Densité des lignes = intensité du champ",
          "pct": 30
        },
        {
          "label": "Propriété de boucle fermée",
          "pct": 25
        },
        {
          "label": "Champ uniforme entre les pôles",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves pensent que les lignes de champ partent et s'arrêtent aux pôles ; elles forment des boucles fermées continues.",
        "Beaucoup croient que les lignes de champ peuvent se croiser ; elles ne le peuvent pas — en chaque point il n'y a qu'une seule direction de champ.",
        "Supposer que le champ est uniforme partout autour de l'aimant."
      ],
      "hook": "La limaille de fer révèle instantanément l'invisible — elle cartographie le champ magnétique en quelques secondes ! Le motif montre des boucles fermées, des variations de densité et une région uniforme et forte entre les pôles.",
      "khanLinks": [
        {
          "title": "Force sur un fil parcouru par un courant",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/electric-motors/v/the-magnetic-force-on-a-current-carrying-wire"
        },
        {
          "title": "Forces et champs magnétiques",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Région",
        "Densité des lignes de champ",
        "Direction du champ",
        "Intensité du champ (relative)"
      ],
      "rows": 4
    },
    "observations": [
      "Dessiner le motif des lignes de champ observé avec la limaille de fer.",
      "Décrire la densité des lignes entre les pôles par rapport à l'extérieur.",
      "Noter que les lignes ne se croisent jamais."
    ],
    "conclusion": "Lignes de champ de l'aimant en U cartographiées avec de la limaille de fer : les lignes s'incurvent de N à S à l'extérieur, plus denses entre les pôles (champ fort, quasi uniforme). Les lignes ne se sont pas croisées. Confirme les propriétés du champ B.",
    "ai": {
      "opening": "La limaille de fer rend l'invisible visible ! Posez-moi des questions sur les propriétés des lignes de champ, pourquoi elles forment des boucles fermées, ou ce que signifie la densité des lignes.",
      "keywords": {
        "setup": "aimant en U|chambre de champ 2D|limaille de fer|pôles",
        "formula": "lignes de champ N→S à l'extérieur|boucles fermées|densité = intensité",
        "error": "trop de limaille|aimant trop faible|champ ambiant",
        "question": "lignes de champ|champ magnétique|N→S|boucle fermée|densité|intensité",
        "real": "IRM|moteur électrique|disque dur"
      },
      "hint": "Les lignes de champ vont N→S à l'extérieur de l'aimant, S→N à l'intérieur (boucles fermées). Lignes denses = champ fort. Ne se croisent jamais.",
      "expected": "Les lignes de champ s'incurvent de N à S entre les pôles, plus denses dans l'entrefer. À l'extérieur des pôles : dispersées. Les lignes forment des boucles fermées."
    }
  },
  {
    "num": 39,
    "cardEmoji": "🧭",
    "title": "Boussole et magnétisme",
    "section": "Magnétisme",
    "desc": "Utiliser une boussole pour cartographier la direction d'un champ magnétique et observer comment une boussole s'aligne avec un champ externe.",
    "setupTime": "3 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves vérifient qu'une aiguille de boussole s'aligne avec la direction du champ magnétique local et que le pôle S d'un aimant droit attire le pôle N de l'aiguille de la boussole.",
      "instructions": [
        "Placer la boussole à différentes positions autour d'un aimant droit.",
        "Enregistrer la direction que pointe l'aiguille de la boussole à chaque emplacement.",
        "Dessiner le motif de champ en reliant les directions de la boussole."
      ],
      "expectedOutcome": "Le pôle N de la boussole pointe vers le pôle S de l'aimant. La boussole trace les lignes de champ magnétique autour de l'aimant droit."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🧭",
          "name": "Boussole magnétique"
        },
        {
          "emoji": "🧲",
          "name": "Aimant droit"
        },
        {
          "emoji": "📝",
          "name": "Papier (pour poser la boussole et marquer les directions)"
        },
        {
          "emoji": "✏️",
          "name": "Crayon"
        }
      ],
      "observationsToRecord": [
        "Direction de l'aiguille de la boussole à chaque position autour de l'aimant",
        "Positions où le champ est le plus fort (plus grande déviation)",
        "Trajet tracé en reliant les lectures de la boussole"
      ],
      "theoryPoints": [
        "Une aiguille de boussole est un petit aimant droit ; son pôle N pointe dans la direction du champ B.",
        "Le pôle S de l'aimant externe attire le pôle N de la boussole (les pôles opposés s'attirent).",
        "Champ magnétique terrestre : le pôle N de la boussole pointe vers le nord géographique (le pôle magnétique sud de la Terre est près du pôle nord géographique).",
        "Les lignes de champ cartographiées par la boussole = mêmes motifs que la limaille de fer."
      ],
      "realWorldConnections": [
        "Navigation : les boussoles guident les marins depuis plus de 1000 ans.",
        "Les relevés géologiques utilisent des magnétomètres (boussoles ultra-sensibles) pour cartographier les minerais souterrains.",
        "Les pigeons ont des particules biologiques de magnétite et naviguent grâce au champ terrestre."
      ],
      "formula": "Pôle N de la boussole → direction du vecteur champ B"
    },
    "questions": {
      "mcq": [
        {
          "text": "Quel pôle d'un aimant droit attire le pôle N d'une aiguille de boussole ?",
          "options": [
            "Pôle N",
            "Pôle S",
            "L'un ou l'autre pôle",
            "Aucun des deux pôles"
          ],
          "correctIndex": 1,
          "explanation": "Les pôles opposés s'attirent : le pôle N de la boussole est attiré par le pôle S de l'aimant."
        },
        {
          "text": "Une aiguille de boussole pointe dans la direction :",
          "options": [
            "Du pôle magnétique sud",
            "Du champ magnétique local B",
            "Toujours du nord géographique",
            "Du pôle N de l'aimant le plus proche"
          ],
          "correctIndex": 1,
          "explanation": "Le pôle N d'une boussole s'aligne avec la direction du champ magnétique local (défini de N à S à l'extérieur)."
        },
        {
          "text": "Le pôle nord géographique de la Terre correspond magnétiquement à :",
          "options": [
            "Le pôle magnétique nord de la Terre",
            "Le pôle magnétique sud de la Terre",
            "Une zone neutre",
            "Aucun pôle magnétique"
          ],
          "correctIndex": 1,
          "explanation": "Le pôle magnétique sud de la Terre est situé près du pôle nord géographique, c'est pourquoi les aiguilles de boussole pointent vers le « nord » — leurs pôles N sont attirés par le sud magnétique terrestre."
        }
      ],
      "discussion": [
        "Pourquoi une boussole pointe-t-elle vers le nord ? Expliquer en utilisant la théorie des pôles magnétiques.",
        "Comment utiliseriez-vous une boussole pour cartographier le motif de champ complet autour d'un aimant droit ?",
        "Expliquer pourquoi une boussole est inutile au pôle sud géographique."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "La boussole s'aligne avec le champ B",
          "pct": 30
        },
        {
          "label": "Les pôles opposés s'attirent (S attire le N de la boussole)",
          "pct": 30
        },
        {
          "label": "Champ terrestre et navigation par boussole",
          "pct": 25
        },
        {
          "label": "Technique de cartographie du champ",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves pensent que le pôle N de la boussole pointe vers le nord géographique terrestre ; techniquement, il pointe vers le pôle magnétique sud de la Terre (qui se trouve près du nord géographique).",
        "Beaucoup supposent qu'une boussole pointe toujours exactement vers le nord ; la déclinaison magnétique provoque des écarts par rapport au nord vrai.",
        "Confondre la direction du pôle N de la boussole avec le pôle S de l'aimant le plus proche."
      ],
      "hook": "Les Vikings naviguaient à travers les océans à l'aide d'une « pierre solaire » en magnétite avant que les vraies boussoles ne soient inventées. La Terre elle-même est un énorme aimant — et votre téléphone possède trois capteurs magnétiques !",
      "khanLinks": [
        {
          "title": "Aimants et champs magnétiques",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/magnets-magnetic"
        },
        {
          "title": "Forces et champs magnétiques",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Position autour de l'aimant",
        "Direction du pôle N de la boussole",
        "Direction de la ligne de champ"
      ],
      "rows": 8
    },
    "observations": [
      "Marquer les directions de la boussole à 8 positions autour de l'aimant droit.",
      "Relier les lectures pour tracer les lignes de champ.",
      "Noter que le pôle N de la boussole pointe toujours de N à S le long du champ."
    ],
    "conclusion": "L'aiguille de la boussole s'est alignée avec le champ B local à chaque position. Le pôle N de la boussole pointait vers le pôle S de l'aimant (les pôles opposés s'attirent). Le nord géographique terrestre = pôle magnétique sud terrestre. La carte du champ correspondait au motif de la limaille de fer.",
    "ai": {
      "opening": "Les aiguilles de boussole sont de petits aimants qui dansent dans un champ ! Demandez-moi comment fonctionne une boussole, la cartographie du champ, ou pourquoi le nord géographique est le sud magnétique de la Terre.",
      "keywords": {
        "setup": "boussole|aimant droit|lignes de champ|cartographie|direction",
        "formula": "N boussole → direction B|pôles opposés s'attirent",
        "error": "objets métalliques proches|plusieurs aimants|interférence du champ terrestre",
        "question": "boussole|champ magnétique|nord|sud|attraction|cartographie du champ",
        "real": "navigation|relevé géologique|migration animale"
      },
      "hint": "Le pôle N de la boussole pointe dans la direction de B (de N à S à l'extérieur). Le pôle S de l'aimant attire le N de la boussole. Le nord géo terrestre est magnétiquement sud.",
      "expected": "Pôle N de la boussole → vers le pôle S de l'aimant. Lignes de champ tracées reliant toutes les directions de la boussole. Motif correspondant à la carte de la limaille de fer."
    }
  },
  {
    "num": 40,
    "cardEmoji": "🎯",
    "title": "Un jouet magnétique assez courant",
    "section": "Magnétisme",
    "desc": "Explorer comment une bille d'acier placée entre deux aimants à pôles identiques inverse l'interaction apparente de la répulsion à l'attraction.",
    "setupTime": "3 min",
    "duration": "10 min",
    "summary": {
      "whatTheyLearn": "Les élèves observent que deux aimants avec pôles N se repoussent normalement, mais l'insertion d'une bille d'acier ferromagnétique entre eux provoque une attraction apparente — la bille est magnétisée et crée une force attractive indirecte.",
      "instructions": [
        "Placer deux aimants N-N face à face : observer la répulsion.",
        "Placer une bille d'acier entre eux : observer que les aimants se déplacent maintenant vers la bille.",
        "Retirer la bille : la répulsion revient."
      ],
      "expectedOutcome": "N-N sans bille : répulsion. N-bille-N : aimants attirés vers la bille. La bille assure une attraction N-N effective via la magnétisation induite."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🧲",
          "name": "Deux aimants identiques petits (les deux pôles N orientés vers l'extérieur)"
        },
        {
          "emoji": "⚙️",
          "name": "Bille d'acier"
        },
        {
          "emoji": "📏",
          "name": "Règle / surface"
        }
      ],
      "observationsToRecord": [
        "Type de force (attraction/répulsion) sans bille entre les aimants N-N",
        "Type de force avec bille d'acier entre les aimants N-N",
        "Comportement lorsque la bille est retirée"
      ],
      "theoryPoints": [
        "L'acier est ferromagnétique : un champ externe induit une magnétisation en lui.",
        "Bille entre deux pôles N : chaque aimant induit un pôle S sur le côté de la bille le plus proche.",
        "Chaque aimant voit un pôle S proche → attraction vers la bille.",
        "Résultat : N-bille-N semble attractif à travers la bille.",
        "Le fer doux perd sa magnétisation lorsqu'il est retiré du champ ; l'acier dur en conserve une partie."
      ],
      "realWorldConnections": [
        "Les électroaimants soulèvent le fer et l'acier en induisant une magnétisation.",
        "L'imagerie par résonance magnétique (IRM) utilise la magnétisation nucléaire induite.",
        "Le contrôle par particules magnétiques détecte les fissures dans l'acier par distorsions de champ induites."
      ],
      "formula": "Magnétisation induite dans un matériau ferromagnétique → attraction vers le champ externe"
    },
    "questions": {
      "mcq": [
        {
          "text": "Deux aimants à pôles N face à face avec une bille d'acier entre eux. Les aimants :",
          "options": [
            "Se repoussent toujours",
            "Sont attirés vers la bille d'acier",
            "Ne subissent aucune force",
            "Pivotent pour orienter les pôles S vers la bille"
          ],
          "correctIndex": 1,
          "explanation": "La bille d'acier se magnétise ; chaque aimant est attiré par le pôle opposé induit dans la face la plus proche de la bille."
        },
        {
          "text": "Pourquoi la bille d'acier se magnétise-t-elle lorsqu'elle est placée entre les aimants ?",
          "options": [
            "Elle contient des aimants naturels",
            "Le champ magnétique externe induit une magnétisation temporaire (ferromagnétisme)",
            "L'acier est toujours magnétique",
            "La bille est chauffée par les aimants"
          ],
          "correctIndex": 1,
          "explanation": "L'acier est ferromagnétique ; un champ externe aligne ses domaines magnétiques, induisant une magnétisation temporaire."
        },
        {
          "text": "Que se passe-t-il avec la force N-N apparente lorsque la bille d'acier est retirée ?",
          "options": [
            "Reste attractive",
            "Revient à la répulsion",
            "Devient nulle",
            "S'inverse définitivement"
          ],
          "correctIndex": 1,
          "explanation": "Sans la bille, la configuration N-N reprend sa répulsion normale."
        }
      ],
      "discussion": [
        "Expliquer en utilisant la théorie des domaines magnétiques pourquoi la bille d'acier se magnétise entre les deux pôles N.",
        "Comment un électroaimant soulève-t-il des objets en fer ? Quelle est la similitude avec cette expérience ?",
        "Pourquoi une bille d'acier pourrait-elle conserver une certaine magnétisation après avoir été retirée, mais pas une bille de fer doux ?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Les pôles identiques se repoussent normalement",
          "pct": 25
        },
        {
          "label": "Induction ferromagnétique dans l'acier",
          "pct": 35
        },
        {
          "label": "Les pôles opposés induits causent l'attraction",
          "pct": 25
        },
        {
          "label": "Ferromagnétiques doux vs. durs",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves s'attendent à ce que les pôles identiques se repoussent même avec un médiateur ferromagnétique ; la bille change tout.",
        "Beaucoup pensent que les aimants s'attirent directement ; ils sont attirés vers la bille.",
        "Confondre le comportement paramagnétique (faible, temporaire) avec le comportement ferromagnétique (fort, persistant)."
      ],
      "hook": "Placez une bille d'acier entre deux aimants orientés dans le même sens — et ils « s'attirent » soudainement ! La bille inverse secrètement l'interaction en devenant elle-même un aimant.",
      "khanLinks": [
        {
          "title": "Forces et champs magnétiques",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields"
        },
        {
          "title": "Aimants et champs magnétiques",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/magnets-magnetic"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Configuration",
        "Force observée",
        "Explication"
      ],
      "rows": 3
    },
    "observations": [
      "Enregistrer le type de force pour : N-N (sans bille), N-bille-N, après retrait de la bille.",
      "Noter la direction dans laquelle les aimants se déplacent vers la bille.",
      "Observer si la bille conserve son magnétisme après le retrait."
    ],
    "conclusion": "N-N sans bille : répulsion. N-bille-N : attraction apparente — chaque aimant attire le pôle S induit de la bille. Bille retirée : la répulsion revient. Confirme que l'induction ferromagnétique assure l'interaction.",
    "ai": {
      "opening": "Le jouet magnétique défie les attentes ! Posez-moi des questions sur l'induction ferromagnétique, pourquoi la bille inverse la force, ou comment fonctionnent les électroaimants.",
      "keywords": {
        "setup": "deux aimants pôle N|bille d'acier|répulsion|attraction|ferromagnétique",
        "formula": "magnétisation induite|pôle opposé induit dans la bille",
        "error": "bille non ferromagnétique|aimants trop faibles|bille non centrée",
        "question": "ferromagnétique|magnétisation induite|pôles identiques|bille d'acier|domaines",
        "real": "électroaimant|IRM|contrôle par particules magnétiques"
      },
      "hint": "La bille d'acier se magnétise : ses surfaces face à chaque aimant deviennent des pôles S (attirées). N-bille-N = N attiré par S(bille) + S(bille) attiré par N. Résultat : attraction à travers la bille.",
      "expected": "N-N : répulsion. N-bille-N : les aimants se déplacent vers la bille (attraction). Bille retirée : la répulsion revient."
    }
  },
  {
    "num": 41,
    "cardEmoji": "💡",
    "title": "Résistance électrique",
    "section": "Électricité",
    "desc": "Vérifier la loi d'Ohm en mesurant le courant traversant une résistance à différentes tensions et en déterminant la résistance.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Les élèves vérifient I = V/R en traçant V en fonction de I et en confirmant la linéarité ; la pente donne R.",
      "instructions": [
        "Connecter la résistance R₁ ≈ 100 Ω en série avec un ampèremètre ; voltmètre aux bornes de R₁.",
        "Faire varier la tension d'alimentation de 1 V à 5 V par paliers ; enregistrer I (mA) pour chaque V.",
        "Tracer V en fonction de I ; pente = R."
      ],
      "expectedOutcome": "R = 100,8 Ω ; V = 2,75 V → I = 25 mA. V/I = 2,75/0,025 = 110 Ω (proche de la valeur nominale). Le graphe est linéaire en passant par l'origine."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔋",
          "name": "Alimentation CC variable (0–6 V)"
        },
        {
          "emoji": "⚡",
          "name": "Résistance ~100 Ω"
        },
        {
          "emoji": "🔌",
          "name": "Ampèremètre (gamme mA)"
        },
        {
          "emoji": "🔌",
          "name": "Voltmètre"
        },
        {
          "emoji": "🪛",
          "name": "Fils de connexion et plaque d'essai"
        }
      ],
      "observationsToRecord": [
        "Tension V (V) pour chaque réglage d'alimentation",
        "Courant I (mA) pour chaque V",
        "R = V/I (Ω) calculée pour chaque essai"
      ],
      "theoryPoints": [
        "Loi d'Ohm : V = IR (ou I = V/R) ; R est constante pour les conducteurs ohmiques.",
        "Résistance R = V/I (Ω) ; 1 Ω = 1 V/A.",
        "Conducteurs ohmiques : le graphe V-I est linéaire en passant par l'origine.",
        "Dispositifs non ohmiques (diodes, ampoules) : le graphe V-I est non linéaire."
      ],
      "realWorldConnections": [
        "Chaque appareil électronique utilise la loi d'Ohm pour la conception de circuits.",
        "Les fusibles sont calibrés en ampères (I_max = V/R_circuit).",
        "Sécurité électrique : toucher une source haute tension avec une faible résistance corporelle donne un grand I."
      ],
      "formula": "V = IR   |   R = V/I (Ω)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Une résistance de 100 Ω a 2,75 V à ses bornes. Quel courant circule ?",
          "options": [
            "27,5 mA",
            "2,75 mA",
            "0,275 A",
            "275 mA"
          ],
          "correctIndex": 0,
          "explanation": "I = V/R = 2,75/100 = 0,0275 A = 27,5 mA."
        },
        {
          "text": "Sur un graphe V en fonction de I pour une résistance ohmique, la pente représente :",
          "options": [
            "Le courant",
            "La tension",
            "La résistance R",
            "La puissance"
          ],
          "correctIndex": 2,
          "explanation": "V = IR → V/I = R → la pente du graphe V en fonction de I = R."
        },
        {
          "text": "Lequel de ces éléments est un conducteur ohmique ?",
          "options": [
            "Diode LED",
            "Lampe à filament de tungstène à température variable",
            "Résistance métallique à température constante",
            "Thermistance semiconductrice"
          ],
          "correctIndex": 2,
          "explanation": "Une résistance métallique à température constante suit V = IR de façon linéaire — elle est ohmique."
        }
      ],
      "discussion": [
        "Tracer V en fonction de I pour vos données. La relation est-elle linéaire ? Que représente la pente ?",
        "Pourquoi le filament d'une ampoule électrique pourrait-il ne pas obéir parfaitement à la loi d'Ohm ?",
        "Calculer la puissance dissipée dans la résistance de 100 Ω à V = 2,75 V."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "V = IR (loi d'Ohm)",
          "pct": 35
        },
        {
          "label": "R = pente du graphe V en fonction de I",
          "pct": 30
        },
        {
          "label": "Ohmique vs. non ohmique",
          "pct": 20
        },
        {
          "label": "Connexions de circuit sécurisées",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves pensent que la loi d'Ohm s'applique toujours ; elle n'est valable que pour les conducteurs ohmiques à température constante.",
        "Beaucoup confondent la pente de I en fonction de V (= 1/R) avec la pente de V en fonction de I (= R).",
        "Penser que la résistance change quand V change ; pour les composants ohmiques, R est constante."
      ],
      "hook": "Chaque application sur votre téléphone, chaque LED, chaque moteur — tous conçus à l'aide de la loi d'Ohm. V = IR est sans doute l'équation la plus utile en ingénierie !",
      "khanLinks": [
        {
          "title": "Circuits et loi d'Ohm",
          "url": "https://www.khanacademy.org/science/physics/circuits-topic/circuits-resistance/v/circuits-part-1"
        },
        {
          "title": "Électricité et circuits",
          "url": "https://www.khanacademy.org/science/physics/circuits-topic"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Tension V (V)",
        "Courant I (mA)",
        "R = V/I (Ω)"
      ],
      "rows": 6
    },
    "observations": [
      "Enregistrer V et I pour au moins 5 tensions d'alimentation différentes.",
      "Tracer V (axe y) en fonction de I (axe x) et vérifier la linéarité.",
      "Calculer R à partir de la pente et comparer avec la valeur nominale de 100 Ω."
    ],
    "conclusion": "Loi d'Ohm vérifiée : V = IR. R = 100,8 Ω mesurée. À V = 2,75 V : I = 25 mA → R = 110 Ω (dans les 10 % de la valeur nominale). Le graphe V en fonction de I était linéaire en passant par l'origine, confirmant le comportement ohmique.",
    "ai": {
      "opening": "V = IR est le fondement de toute conception de circuit ! Posez-moi des questions sur la loi d'Ohm, comment trouver R à partir d'un graphe, ou le comportement ohmique par rapport au non ohmique.",
      "keywords": {
        "setup": "résistance|ampèremètre|voltmètre|alimentation|circuit",
        "formula": "V = IR|R = V/I|pente de V en fonction de I = R",
        "error": "ampèremètre en parallèle|voltmètre en série|résistance de contact",
        "question": "loi d'Ohm|résistance|ohmique|courant|tension|pente",
        "real": "électronique|fusible|sécurité électrique"
      },
      "hint": "I = V/R. Tracer V en fonction de I ; pente = R. Ohmique : linéaire en passant par l'origine. Non ohmique : graphe courbe.",
      "expected": "R=100,8Ω ; V=2,75V→I=25mA. V en fonction de I linéaire, pente≈100Ω. Confirme V=IR."
    }
  },
  {
    "num": 42,
    "cardEmoji": "⚡",
    "title": "Circuits en série et en parallèle",
    "section": "Électricité",
    "desc": "Mesurer la résistance totale pour des combinaisons de résistances en série et en parallèle et vérifier les formules de combinaison.",
    "setupTime": "5 min",
    "duration": "30 min",
    "summary": {
      "whatTheyLearn": "Les élèves vérifient R_série = R₁ + R₂ et 1/R_parallèle = 1/R₁ + 1/R₂, puis font le lien avec la raison pour laquelle les circuits domestiques utilisent le câblage en parallèle.",
      "instructions": [
        "Mesurer R₁ et R₂ individuellement avec un ohmmètre ou la méthode V/I.",
        "Connecter en série ; mesurer R_T total et vérifier R_T = R₁ + R₂.",
        "Connecter en parallèle ; mesurer R_T et vérifier 1/R_T = 1/R₁ + 1/R₂."
      ],
      "expectedOutcome": "Attendu : V = 5,8 V. R₁ = R₂ = 100 Ω : Série R_T = 200 Ω ; Parallèle R_T = 50 Ω. R_T en parallèle < plus petite résistance individuelle."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔋",
          "name": "Batterie ou alimentation CC (5,8 V)"
        },
        {
          "emoji": "⚡",
          "name": "Deux résistances R₁ = R₂ = 100 Ω"
        },
        {
          "emoji": "🔌",
          "name": "Ampèremètre et voltmètre"
        },
        {
          "emoji": "🪛",
          "name": "Fils de connexion, plaque d'essai"
        }
      ],
      "observationsToRecord": [
        "R₁ et R₂ individuelles (Ω)",
        "V et I pour la combinaison en série → R_série = V/I",
        "V et I pour la combinaison en parallèle → R_parallèle = V/I"
      ],
      "theoryPoints": [
        "Série : même courant dans chaque élément ; les tensions s'additionnent. R_T = R₁ + R₂.",
        "Parallèle : même tension aux bornes de chaque élément ; les courants s'additionnent. 1/R_T = 1/R₁ + 1/R₂.",
        "R_T en parallèle toujours inférieure à la plus petite résistance individuelle.",
        "Circuits domestiques : le câblage en parallèle donne à chaque appareil la pleine tension secteur."
      ],
      "realWorldConnections": [
        "Guirlandes de Noël : les vieilles guirlandes en série — une ampoule grillée → toutes s'éteignent. Les guirlandes modernes en parallèle restent allumées.",
        "Le câblage électrique domestique est en parallèle afin que chaque prise reçoive 230 V complets.",
        "Les résistances en série sont utilisées dans les diviseurs de tension ; en parallèle dans les diviseurs de courant."
      ],
      "formula": "Série : R_T = R₁ + R₂   |   Parallèle : 1/R_T = 1/R₁ + 1/R₂"
    },
    "questions": {
      "mcq": [
        {
          "text": "Deux résistances de 100 Ω en série. Quelle est R_T ?",
          "options": [
            "50 Ω",
            "100 Ω",
            "200 Ω",
            "400 Ω"
          ],
          "correctIndex": 2,
          "explanation": "R_T = R₁ + R₂ = 100 + 100 = 200 Ω."
        },
        {
          "text": "Deux résistances de 100 Ω en parallèle. Quelle est R_T ?",
          "options": [
            "200 Ω",
            "100 Ω",
            "50 Ω",
            "25 Ω"
          ],
          "correctIndex": 2,
          "explanation": "1/R_T = 1/100 + 1/100 = 2/100 ; R_T = 50 Ω."
        },
        {
          "text": "Pourquoi les circuits électriques domestiques sont-ils câblés en parallèle ?",
          "options": [
            "Pour augmenter la résistance totale",
            "Afin que chaque appareil reçoive la pleine tension d'alimentation",
            "Pour réduire le courant",
            "Parce que la série est trop complexe"
          ],
          "correctIndex": 1,
          "explanation": "En parallèle, chaque branche dispose de la pleine tension d'alimentation (230 V), de sorte que chaque appareil fonctionne à sa tension de conception de manière indépendante."
        }
      ],
      "discussion": [
        "Expliquer pourquoi ajouter davantage de résistances en parallèle diminue toujours la résistance totale.",
        "Pourquoi les vieilles guirlandes de Noël en série s'éteignent-elles toutes quand une ampoule grille ?",
        "Une maison dispose d'une alimentation de 230 V et de trois appareils de 100 Ω. Calculer I_total si les trois sont connectés en parallèle."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Série : R_T = R₁+R₂",
          "pct": 30
        },
        {
          "label": "Parallèle : 1/R_T = 1/R₁+1/R₂",
          "pct": 30
        },
        {
          "label": "Répartition du courant et de la tension",
          "pct": 25
        },
        {
          "label": "Conception des circuits domestiques",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Les élèves appliquent la formule série quand ils pensent parallèle et vice versa.",
        "Beaucoup pensent que R_T en parallèle est la moyenne ; elle est toujours inférieure à la plus petite R.",
        "Supposer qu'ajouter plus de branches augmente la résistance ; cela la diminue toujours (plus de chemins pour le courant)."
      ],
      "hook": "Les vieilles guirlandes de sapin de Noël étaient câblées en série — une ampoule grillée et toute la guirlande s'éteignait ! Les guirlandes modernes utilisent le câblage en parallèle. La physique fait toute la différence.",
      "khanLinks": [
        {
          "title": "Résistances en série et en parallèle",
          "url": "https://www.khanacademy.org/science/physics/circuits-topic/circuits-resistance/v/series-resistors"
        },
        {
          "title": "Électricité et circuits",
          "url": "https://www.khanacademy.org/science/physics/circuits-topic"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Configuration",
        "V (V)",
        "I (mA)",
        "R_T = V/I (Ω)",
        "R_attendue (Ω)"
      ],
      "rows": 4
    },
    "observations": [
      "Enregistrer V et I pour R₁, R₂ individuellement, puis les combinaisons en série et en parallèle.",
      "Comparer R_T mesurée avec les prévisions des formules.",
      "Confirmer que R_T en parallèle < les deux valeurs individuelles."
    ],
    "conclusion": "Série : R_T = 200 Ω = R₁+R₂ confirmé. Parallèle : R_T = 50 Ω = R₁R₂/(R₁+R₂) confirmé. R_T en parallèle (50 Ω) < chaque R individuelle (100 Ω). Les circuits domestiques utilisent le parallèle : chaque appareil reçoit la pleine tension.",
    "ai": {
      "opening": "Série ou parallèle — le choix change tout ! Posez-moi des questions sur les formules R_T, la répartition du courant/tension, ou pourquoi les maisons utilisent le câblage en parallèle.",
      "keywords": {
        "setup": "résistances|série|parallèle|ampèremètre|voltmètre|circuit",
        "formula": "R_T = R₁+R₂|1/R_T = 1/R₁+1/R₂",
        "error": "placement de l'ampèremètre|résistance de contact|mauvaise formule utilisée",
        "question": "série|parallèle|résistance totale|circuit domestique|diviseur de tension",
        "real": "guirlandes de Noël|câblage domestique|diviseur de tension"
      },
      "hint": "Série : R_T = R₁+R₂. Parallèle : 1/R_T = 1/R₁+1/R₂. R_T en parallèle < plus petite R. Circuits domestiques : parallèle afin que chaque appareil reçoive 230V complets.",
      "expected": "R₁=R₂=100Ω : Série→200Ω ; Parallèle→50Ω. Circuits domestiques : parallèle afin que chaque appareil reçoive 230V complets."
    }
  }
]

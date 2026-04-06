import { Experiment } from './experiments'

export const experimentsFrPart2: Experiment[] = [
  {
    "num": 8,
    "cardEmoji": "➡️",
    "title": "Composition et décomposition des forces",
    "section": "Mechanics",
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
    "section": "Mechanics",
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
    "section": "Mechanics",
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
    "section": "Mechanics",
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
    "section": "Mechanics",
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
    "section": "Mechanics",
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
    "section": "Mechanics",
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
  }
]

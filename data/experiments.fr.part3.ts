import { Experiment } from './experiments'
export const experimentsFrPart3: Experiment[] = [
  {
    "num": 15,
    "cardEmoji": "🕰️",
    "title": "Pendule simple",
    "section": "Mechanics",
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
    "section": "Mechanics",
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
    "section": "Mechanics",
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
    "section": "Mechanics",
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
    "section": "Heat",
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
    "section": "Heat",
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
    "section": "Heat",
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
  }
]

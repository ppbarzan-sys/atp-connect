import { Experiment } from './experiments'
export const experimentsFrPart5: Experiment[] = [
  {
    "num": 29,
    "cardEmoji": "🔍",
    "title": "Distance focale",
    "section": "Optics",
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
    "section": "Optics",
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
    "section": "Optics",
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
    "section": "Optics",
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
    "section": "Optics",
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
    "section": "Optics",
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
    "section": "Optics",
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
  }
]

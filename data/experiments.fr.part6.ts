import { Experiment } from './experiments'
export const experimentsFrPart6: Experiment[] = [
  {
    "num": 36,
    "cardEmoji": "🪞",
    "title": "Miroirs",
    "section": "Optics",
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
    "section": "Magnetism",
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
    "section": "Magnetism",
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
    "section": "Magnetism",
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
    "section": "Magnetism",
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
    "section": "Electricity",
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
    "section": "Electricity",
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
];

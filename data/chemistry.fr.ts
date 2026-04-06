// French translation of chemistry experiments
// Assembled from 6 part files covering experiments 101–150
import type { Experiment } from './experiments'
import { chemistryFrPart1 } from './chemistry.fr.part1'
import { chemistryFrPart2 } from './chemistry.fr.part2'
import { chemistryFrPart3 } from './chemistry.fr.part3'
import { chemistryFrPart4 } from './chemistry.fr.part4'
import { chemistryFrPart5 } from './chemistry.fr.part5'
import { chemistryFrPart6 } from './chemistry.fr.part6'

export const chemistryExperimentsFr: Experiment[] = [
  ...chemistryFrPart1,   // 101–109  (Matière et Solutions)
  ...chemistryFrPart2,   // 110–118  (Acides et Bases)
  ...chemistryFrPart3,   // 119–127  (Acides et Bases / Chimie des Gaz)
  ...chemistryFrPart4,   // 128–136  (Chimie des Gaz / Électrochimie)
  ...chemistryFrPart5,   // 137–144  (Électrochimie)
  ...chemistryFrPart6,   // 145–150  (Cinétique Chimique / Thermochimie)
]

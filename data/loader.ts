import { experiments as experimentsEn, type Experiment } from './experiments'
import { experiments as experimentsIt } from './experiments.it'
import { experimentsFr } from './experiments.fr'
import { chemistryExperiments as chemistryEn } from './chemistry'
import { chemistryExperiments as chemistryIt } from './chemistry.it'
import { chemistryExperimentsFr } from './chemistry.fr'
import { experimentsEs } from './experiments.es'
import { chemistryExperimentsEs } from './chemistry.es'
import { experimentsAr } from './experiments.ar'
import { chemistryExperimentsAr } from './chemistry.ar'
import { roboticsExperiments as roboticsEn } from './robotics-experiments'

export function getExperiments(locale: string): Experiment[] {
  if (locale === 'it') return experimentsIt
  if (locale === 'fr') return experimentsFr.length > 0 ? experimentsFr : experimentsEn
  if (locale === 'es') return experimentsEs.length > 0 ? experimentsEs : experimentsEn
  if (locale === 'ar') return experimentsAr.length > 0 ? experimentsAr : experimentsEn
  return experimentsEn
}

export function getChemistryExperiments(locale: string): Experiment[] {
  if (locale === 'it') return chemistryIt
  if (locale === 'fr') return chemistryExperimentsFr.length > 0 ? chemistryExperimentsFr : chemistryEn
  if (locale === 'es') return chemistryExperimentsEs.length > 0 ? chemistryExperimentsEs : chemistryEn
  if (locale === 'ar') return chemistryExperimentsAr.length > 0 ? chemistryExperimentsAr : chemistryEn
  return chemistryEn
}

export function getRoboticsExperiments(locale: string): Experiment[] {
  // For now, return English for all locales — translation files can be added later
  return roboticsEn
}

export type { Experiment }

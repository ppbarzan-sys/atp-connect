import type { Experiment } from './experiments'

const physicsCache = new Map<string, Promise<Experiment[]>>()
const chemistryCache = new Map<string, Promise<Experiment[]>>()
const roboticsCache = new Map<string, Promise<Experiment[]>>()

function memoize(
  cache: Map<string, Promise<Experiment[]>>,
  locale: string,
  loader: () => Promise<Experiment[]>
): Promise<Experiment[]> {
  const cached = cache.get(locale)
  if (cached) return cached
  const p = loader()
  cache.set(locale, p)
  p.catch(() => cache.delete(locale))
  return p
}

export function getExperiments(locale: string): Promise<Experiment[]> {
  return memoize(physicsCache, locale, async () => {
    if (locale === 'it') {
      const { experiments } = await import('./experiments.it')
      return experiments
    }
    if (locale === 'fr') {
      const { experimentsFr } = await import('./experiments.fr')
      return experimentsFr.length > 0 ? experimentsFr : (await import('./experiments')).experiments
    }
    if (locale === 'es') {
      const { experimentsEs } = await import('./experiments.es')
      return experimentsEs.length > 0 ? experimentsEs : (await import('./experiments')).experiments
    }
    if (locale === 'ar') {
      const { experimentsAr } = await import('./experiments.ar')
      return experimentsAr.length > 0 ? experimentsAr : (await import('./experiments')).experiments
    }
    const { experiments } = await import('./experiments')
    return experiments
  })
}

export function getChemistryExperiments(locale: string): Promise<Experiment[]> {
  return memoize(chemistryCache, locale, async () => {
    if (locale === 'it') {
      const { chemistryExperiments } = await import('./chemistry.it')
      return chemistryExperiments
    }
    if (locale === 'fr') {
      const { chemistryExperimentsFr } = await import('./chemistry.fr')
      const fallback = async () => (await import('./chemistry')).chemistryExperiments
      return chemistryExperimentsFr.length > 0 ? chemistryExperimentsFr : await fallback()
    }
    if (locale === 'es') {
      const { chemistryExperimentsEs } = await import('./chemistry.es')
      const fallback = async () => (await import('./chemistry')).chemistryExperiments
      return chemistryExperimentsEs.length > 0 ? chemistryExperimentsEs : await fallback()
    }
    if (locale === 'ar') {
      const { chemistryExperimentsAr } = await import('./chemistry.ar')
      const fallback = async () => (await import('./chemistry')).chemistryExperiments
      return chemistryExperimentsAr.length > 0 ? chemistryExperimentsAr : await fallback()
    }
    const { chemistryExperiments } = await import('./chemistry')
    return chemistryExperiments
  })
}

export function getRoboticsExperiments(locale: string): Promise<Experiment[]> {
  return memoize(roboticsCache, locale, async () => {
    const fallback = async () => (await import('./robotics-experiments')).roboticsExperiments
    if (locale === 'fr') {
      const { roboticsExperimentsFr } = await import('./robotics-experiments.fr')
      return roboticsExperimentsFr.length > 0 ? roboticsExperimentsFr : await fallback()
    }
    if (locale === 'es') {
      const { roboticsExperimentsEs } = await import('./robotics-experiments.es')
      return roboticsExperimentsEs.length > 0 ? roboticsExperimentsEs : await fallback()
    }
    if (locale === 'it') {
      const { roboticsExperimentsIt } = await import('./robotics-experiments.it')
      return roboticsExperimentsIt.length > 0 ? roboticsExperimentsIt : await fallback()
    }
    if (locale === 'ar') {
      const { roboticsExperimentsAr } = await import('./robotics-experiments.ar')
      return roboticsExperimentsAr.length > 0 ? roboticsExperimentsAr : await fallback()
    }
    const { roboticsExperiments } = await import('./robotics-experiments')
    return roboticsExperiments
  })
}

export type { Experiment }

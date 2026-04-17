/**
 * ATP Connect — learner passions
 *
 * One-time student onboarding capture. Persisted in localStorage so Gali can
 * pull analogies from things the student already cares about.
 */

export type PassionLocale = 'en' | 'it' | 'fr' | 'es' | 'ar'

export interface PassionOption {
  id: string
  labels: Record<PassionLocale, string>
}

export const PASSION_OPTIONS: PassionOption[] = [
  {
    id: 'soccer',
    labels: {
      en: 'Soccer',
      it: 'Calcio',
      fr: 'Football',
      es: 'Fútbol',
      ar: 'كرة القدم',
    },
  },
  {
    id: 'basketball',
    labels: {
      en: 'Basketball',
      it: 'Pallacanestro',
      fr: 'Basket',
      es: 'Baloncesto',
      ar: 'كرة السلة',
    },
  },
  {
    id: 'videogames',
    labels: {
      en: 'Video games',
      it: 'Videogiochi',
      fr: 'Jeux vidéo',
      es: 'Videojuegos',
      ar: 'ألعاب الفيديو',
    },
  },
  {
    id: 'music',
    labels: {
      en: 'Music',
      it: 'Musica',
      fr: 'Musique',
      es: 'Música',
      ar: 'الموسيقى',
    },
  },
  {
    id: 'cars',
    labels: {
      en: 'Cars',
      it: 'Automobili',
      fr: 'Voitures',
      es: 'Coches',
      ar: 'السيارات',
    },
  },
  {
    id: 'art',
    labels: {
      en: 'Art & drawing',
      it: 'Arte e disegno',
      fr: 'Art et dessin',
      es: 'Arte y dibujo',
      ar: 'الفن والرسم',
    },
  },
  {
    id: 'cooking',
    labels: {
      en: 'Cooking',
      it: 'Cucina',
      fr: 'Cuisine',
      es: 'Cocina',
      ar: 'الطبخ',
    },
  },
  {
    id: 'reading',
    labels: {
      en: 'Reading',
      it: 'Lettura',
      fr: 'Lecture',
      es: 'Lectura',
      ar: 'القراءة',
    },
  },
  {
    id: 'outdoors',
    labels: {
      en: 'Outdoors & nature',
      it: 'Natura e aria aperta',
      fr: 'Plein air et nature',
      es: 'Aire libre y naturaleza',
      ar: 'الطبيعة والهواء الطلق',
    },
  },
  {
    id: 'animals',
    labels: {
      en: 'Animals',
      it: 'Animali',
      fr: 'Animaux',
      es: 'Animales',
      ar: 'الحيوانات',
    },
  },
]

const STORAGE_KEY = 'atp.learner.passions.v1'
const COMPLETE_KEY = 'atp.learner.passions.completed.v1'
export const MAX_PASSIONS = 3
export const MAX_CUSTOM_LENGTH = 30

export function loadPassions(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((p) => typeof p === 'string') : []
  } catch {
    return []
  }
}

export function savePassions(passions: string[]): void {
  if (typeof window === 'undefined') return
  const clean = passions
    .map((p) => p.trim())
    .filter(Boolean)
    .slice(0, MAX_PASSIONS + 1) // up to 3 chips + 1 free-text
  localStorage.setItem(STORAGE_KEY, JSON.stringify(clean))
  localStorage.setItem(COMPLETE_KEY, '1')
}

export function hasCompletedPassionOnboarding(): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(COMPLETE_KEY) === '1'
}

export function resetPassionOnboarding(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEY)
  localStorage.removeItem(COMPLETE_KEY)
}

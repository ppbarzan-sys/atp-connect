export function saveResults(num: number, data: Record<string, string>) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`atp-results-${num}`, JSON.stringify(data));
}

export function loadResults(num: number): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const saved = localStorage.getItem(`atp-results-${num}`);
  if (!saved) return {};
  try { return JSON.parse(saved); } catch { return {}; }
}

export function saveNote(num: number, value: string) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`atp-note-${num}`, value);
}

export function loadNote(num: number): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(`atp-note-${num}`) || '';
}

export function saveTeacherMode(on: boolean) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('atp-teacher-mode', on ? '1' : '0');
}

export function loadTeacherMode(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('atp-teacher-mode') === '1';
}

export function saveTeacherNote(num: number, value: string) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`atp-teacher-note-${num}`, value);
}

export function loadTeacherNote(num: number): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(`atp-teacher-note-${num}`) || '';
}

// ── Experiment progress ──────────────────────────────────────────────────────

export interface ExperimentProgress {
  num: number
  correct: number
  total: number
  completedAt: string
}

export function saveProgress(num: number, correct: number, total: number) {
  if (typeof window === 'undefined') return;
  const progress: ExperimentProgress = {
    num,
    correct,
    total,
    completedAt: new Date().toISOString(),
  };
  localStorage.setItem(`atp-progress-${num}`, JSON.stringify(progress));
}

export function loadProgress(num: number): ExperimentProgress | null {
  if (typeof window === 'undefined') return null;
  const saved = localStorage.getItem(`atp-progress-${num}`);
  if (!saved) return null;
  try { return JSON.parse(saved); } catch { return null; }
}

export function getCompletedExperiments(): number[] {
  if (typeof window === 'undefined') return [];
  const completed: number[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith('atp-progress-')) {
      const num = parseInt(key.replace('atp-progress-', ''));
      if (!isNaN(num)) completed.push(num);
    }
  }
  return completed;
}

export function getProgressSummary(experimentNums: number[]): { completed: number; total: number } {
  if (typeof window === 'undefined') return { completed: 0, total: experimentNums.length };
  const completed = experimentNums.filter(
    num => localStorage.getItem(`atp-progress-${num}`) !== null
  ).length;
  return { completed, total: experimentNums.length };
}

/** Delete progress for a single experiment */
export function deleteProgress(num: number): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(`atp-progress-${num}`)
  localStorage.removeItem(`atp-results-${num}`)
  localStorage.removeItem(`atp-note-${num}`)
}

/** Delete ALL experiment progress, results, and notes */
export function deleteAllProgress(): void {
  if (typeof window === 'undefined') return
  const keysToRemove: string[] = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key && (key.startsWith('atp-progress-') || key.startsWith('atp-results-') || key.startsWith('atp-note-'))) {
      keysToRemove.push(key)
    }
  }
  keysToRemove.forEach(key => localStorage.removeItem(key))
}

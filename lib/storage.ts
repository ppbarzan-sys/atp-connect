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

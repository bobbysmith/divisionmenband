import type { Locale } from './types';

const VALID_LOCALES: Set<string> = new Set([
  'en',
  'hr',
  'cs',
  'nl',
  'fr',
  'de',
  'it',
  'lb',
  'pl',
  'pt',
  'es',
  'sl',
]);

const STORAGE_KEY = 'tdm-locale';

function isValidLocale(code: string): code is Locale {
  return VALID_LOCALES.has(code);
}

export function detectLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && isValidLocale(stored)) return stored;

  for (const lang of navigator.languages) {
    const code = lang.split('-')[0].toLowerCase();
    if (isValidLocale(code)) return code;
  }

  return 'en';
}

export function persistLocale(locale: Locale): void {
  localStorage.setItem(STORAGE_KEY, locale);
}

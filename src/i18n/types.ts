export type Locale =
  | 'en'
  | 'hr'
  | 'cs'
  | 'nl'
  | 'fr'
  | 'de'
  | 'it'
  | 'lb'
  | 'pl'
  | 'pt'
  | 'es'
  | 'sl';

export interface TranslationStrings {
  // Navigation
  'nav.about': string;
  'nav.musicians': string;
  'nav.albums': string;
  'nav.photos': string;
  'nav.bio': string;
  'nav.videos': string;
  'nav.reviews': string;
  'nav.social': string;

  // Hero
  'hero.label': string;
  'hero.pressKit': string;

  // About
  'about.heading': string;
  'about.text': string;

  // Musicians
  'musicians.heading': string;
  'musicians.featuring': string;

  // Albums
  'albums.heading': string;
  'albums.released': string;

  // Photos
  'photos.heading': string;
  'photos.credit': string;

  // Bio
  'bio.heading': string;
  'bio.p1': string;
  'bio.p2': string;
  'bio.p3': string;
  'bio.p4': string;

  // Videos
  'videos.heading': string;

  // Reviews
  'reviews.heading': string;

  // Social
  'social.heading': string;

  // Footer
  'footer.pressKit': string;

  // Theme
  'theme.light': string;
  'theme.dark': string;
  'theme.system': string;

  // Language
  'language.label': string;
}

export type TranslationKey = keyof TranslationStrings;

export interface LocaleInfo {
  code: Locale;
  name: string;
  nativeName: string;
}

export const LOCALES: LocaleInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hr', name: 'Croatian', nativeName: 'Hrvatski' },
  { code: 'cs', name: 'Czech', nativeName: '\u010Ce\u0161tina' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
  { code: 'fr', name: 'French', nativeName: 'Fran\u00E7ais' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' },
  { code: 'lb', name: 'Luxembourgish', nativeName: 'L\u00EBtzebuergesch' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Portugu\u00EAs' },
  { code: 'es', name: 'Spanish', nativeName: 'Espa\u00F1ol' },
  { code: 'sl', name: 'Slovenian', nativeName: 'Sloven\u0161\u010Dina' },
];

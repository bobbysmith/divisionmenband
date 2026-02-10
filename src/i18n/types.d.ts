export type Locale = 'en' | 'hr' | 'cs' | 'nl' | 'fr' | 'de' | 'it' | 'lb' | 'pl' | 'pt' | 'es' | 'sl';
export interface TranslationStrings {
    'nav.about': string;
    'nav.musicians': string;
    'nav.albums': string;
    'nav.photos': string;
    'nav.bio': string;
    'nav.videos': string;
    'nav.reviews': string;
    'nav.social': string;
    'hero.label': string;
    'hero.pressKit': string;
    'about.heading': string;
    'about.text': string;
    'musicians.heading': string;
    'musicians.featuring': string;
    'albums.heading': string;
    'albums.released': string;
    'photos.heading': string;
    'photos.credit': string;
    'bio.heading': string;
    'bio.p1': string;
    'bio.p2': string;
    'bio.p3': string;
    'bio.p4': string;
    'videos.heading': string;
    'reviews.heading': string;
    'social.heading': string;
    'footer.pressKit': string;
    'theme.light': string;
    'theme.dark': string;
    'theme.system': string;
    'language.label': string;
}
export type TranslationKey = keyof TranslationStrings;
export interface LocaleInfo {
    code: Locale;
    name: string;
    nativeName: string;
}
export declare const LOCALES: LocaleInfo[];
//# sourceMappingURL=types.d.ts.map
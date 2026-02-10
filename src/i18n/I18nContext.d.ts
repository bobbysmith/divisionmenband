import type { Locale, TranslationKey } from './types';
export interface I18nContextValue {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: TranslationKey) => string;
}
export declare const I18nContext: import("react").Context<I18nContextValue | null>;
//# sourceMappingURL=I18nContext.d.ts.map
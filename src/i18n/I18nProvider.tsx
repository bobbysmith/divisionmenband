import { type ReactNode, useCallback, useEffect, useState } from 'react';

import { detectLocale, persistLocale } from './detectLocale';
import { I18nContext } from './I18nContext';
import { translations } from './translations';
import type { Locale, TranslationKey, TranslationStrings } from './types';

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    persistLocale(newLocale);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useCallback(
    (key: TranslationKey): string => {
      const strings: TranslationStrings = translations[locale] ?? translations.en;
      return strings[key] ?? translations.en[key] ?? key;
    },
    [locale],
  );

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>;
}

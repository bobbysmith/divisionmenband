import { type ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

import { ThemeContext } from './ThemeContext';
import type { ResolvedTheme, ThemePreference } from './types';

const STORAGE_KEY = 'tdm-theme';

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function resolveTheme(pref: ThemePreference): ResolvedTheme {
  return pref === 'system' ? getSystemTheme() : pref;
}

function readStoredPreference(): ThemePreference {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>(readStoredPreference);

  const resolved = useMemo(() => resolveTheme(preference), [preference]);

  useEffect(() => {
    document.documentElement.dataset.theme = resolved;
  }, [resolved]);

  const setPreference = useCallback((pref: ThemePreference) => {
    setPreferenceState(pref);
    localStorage.setItem(STORAGE_KEY, pref);
  }, []);

  const cycle = useCallback(() => {
    switch (preference) {
      case 'system':
        setPreference('light');
        break;
      case 'light':
        setPreference('dark');
        break;
      case 'dark':
        setPreference('system');
        break;
    }
  }, [preference, setPreference]);

  useEffect(() => {
    if (preference !== 'system') return;

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      document.documentElement.dataset.theme = getSystemTheme();
    };

    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [preference]);

  return (
    <ThemeContext.Provider value={{ preference, resolved, setPreference, cycle }}>
      {children}
    </ThemeContext.Provider>
  );
}

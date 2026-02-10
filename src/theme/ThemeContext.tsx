import { createContext } from 'react';

import type { ResolvedTheme, ThemePreference } from './types';

export interface ThemeContextValue {
  preference: ThemePreference;
  resolved: ResolvedTheme;
  setPreference: (pref: ThemePreference) => void;
  cycle: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

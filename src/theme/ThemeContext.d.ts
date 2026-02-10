import type { ResolvedTheme, ThemePreference } from './types';
export interface ThemeContextValue {
    preference: ThemePreference;
    resolved: ResolvedTheme;
    setPreference: (pref: ThemePreference) => void;
    cycle: () => void;
}
export declare const ThemeContext: import("react").Context<ThemeContextValue | null>;
//# sourceMappingURL=ThemeContext.d.ts.map
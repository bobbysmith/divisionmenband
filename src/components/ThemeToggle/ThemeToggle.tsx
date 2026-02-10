import { IconMonitor, IconMoon, IconSun } from '../../assets/icons';
import { useDropdown } from '../../hooks/useDropdown';
import type { TranslationKey } from '../../i18n/types';
import { useT } from '../../i18n/useT';
import { useTheme } from '../../theme/useTheme';
import styles from './ThemeToggle.module.css';

type ThemeOption = 'system' | 'light' | 'dark';

const ICONS: Record<ThemeOption, typeof IconSun> = {
  system: IconMonitor,
  light: IconSun,
  dark: IconMoon,
};

const OPTIONS: ThemeOption[] = ['system', 'light', 'dark'];

export default function ThemeToggle() {
  const { preference, setPreference } = useTheme();
  const t = useT();
  const { open, toggle, close, ref } = useDropdown();

  const LABELS: Record<ThemeOption, TranslationKey> = {
    system: 'theme.system',
    light: 'theme.light',
    dark: 'theme.dark',
  };
  const labelFor = (opt: ThemeOption) => t(LABELS[opt]);

  const CurrentIcon = ICONS[preference];

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        className={styles.trigger}
        onClick={toggle}
        aria-haspopup='listbox'
        aria-expanded={open}
        aria-label={labelFor(preference)}
        title={labelFor(preference)}
      >
        <CurrentIcon width={16} height={16} />
      </button>
      {open && (
        <div className={styles.dropdown} role='listbox' aria-label='Theme'>
          {OPTIONS.map(opt => {
            const Icon = ICONS[opt];
            const active = preference === opt;
            return (
              <button
                key={opt}
                role='option'
                aria-selected={active}
                className={`${styles.option} ${active ? styles.optionActive : ''}`}
                onClick={() => {
                  setPreference(opt);
                  close();
                }}
              >
                <Icon width={16} height={16} />
                <span>{labelFor(opt)}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

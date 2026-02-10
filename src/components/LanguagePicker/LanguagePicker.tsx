import { IconGlobe } from '../../assets/icons';
import { useDropdown } from '../../hooks/useDropdown';
import { LOCALES } from '../../i18n/types';
import { useI18n } from '../../i18n/useI18n';
import styles from './LanguagePicker.module.css';

export default function LanguagePicker() {
  const { locale, setLocale } = useI18n();
  const { open, toggle, close, ref } = useDropdown();

  const current = LOCALES.find(l => l.code === locale);

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        className={styles.trigger}
        onClick={toggle}
        aria-haspopup='listbox'
        aria-expanded={open}
        aria-label='Language'
      >
        <IconGlobe width={16} height={16} />
        <span className={styles.label}>{current?.nativeName ?? locale}</span>
      </button>
      {open && (
        <div className={styles.dropdown} role='listbox' aria-label='Language'>
          {LOCALES.map(loc => {
            const active = locale === loc.code;
            return (
              <button
                key={loc.code}
                role='option'
                aria-selected={active}
                className={`${styles.option} ${active ? styles.optionActive : ''}`}
                onClick={() => {
                  setLocale(loc.code);
                  close();
                }}
              >
                {loc.nativeName}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

import { useState } from 'react';

import type { TranslationKey } from '../../i18n/types';
import { useT } from '../../i18n/useT';
import LanguagePicker from '../LanguagePicker/LanguagePicker';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.css';

const NAV_ITEMS: { key: TranslationKey; href: string }[] = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.musicians', href: '#musicians' },
  { key: 'nav.albums', href: '#albums' },
  { key: 'nav.bio', href: '#bio' },
  { key: 'nav.videos', href: '#videos' },
  { key: 'nav.reviews', href: '#reviews' },
];

export default function Header() {
  const t = useT();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.inner}`}>
          <a href='#' className={styles.wordmark} onClick={() => setMenuOpen(false)}>
            The Division Men
          </a>

          <nav className={styles.desktopNav}>
            {NAV_ITEMS.map(({ key, href }) => (
              <a key={key} href={href} className={styles.navLink}>
                {t(key)}
              </a>
            ))}
          </nav>

          <div className={styles.desktopControls}>
            <LanguagePicker />
            <ThemeToggle />
          </div>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Menu'
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {menuOpen && <div className={styles.backdrop} onClick={() => setMenuOpen(false)} />}

      <nav className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ''}`}>
        <div className={styles.mobileControls}>
          <LanguagePicker />
          <ThemeToggle />
        </div>
        {NAV_ITEMS.map(({ key, href }) => (
          <a key={key} href={href} className={styles.navLink} onClick={() => setMenuOpen(false)}>
            {t(key)}
          </a>
        ))}
      </nav>
    </>
  );
}

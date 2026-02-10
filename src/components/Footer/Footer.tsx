import { useT } from '../../i18n/useT';
import styles from './Footer.module.css';

export default function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.brand}>The Division Men</p>
        <p className={styles.meta}>
          {t('footer.pressKit')} &middot; {t('hero.label')}
        </p>
        <p className={styles.copyright}>&copy; {year} The Division Men</p>
      </div>
    </footer>
  );
}

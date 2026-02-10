import { musicians } from '../../data/musicians';
import { useT } from '../../i18n/useT';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './Musicians.module.css';

export default function Musicians() {
  const t = useT();

  return (
    <section id='musicians' className={styles.section}>
      <div className='container'>
        <SectionHeading titleKey='musicians.heading' />
        <p className={styles.subtitle}>{t('musicians.featuring')}</p>
        <div className={styles.grid}>
          {musicians.map(m => (
            <div key={m.name} className={styles.card}>
              <span className={styles.name}>{m.name}</span>
              <span className={styles.credit}>{m.knownFrom}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

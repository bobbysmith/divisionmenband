import { useT } from '../../i18n/useT';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './Bio.module.css';

export default function Bio() {
  const t = useT();

  return (
    <section id='bio' className={styles.section}>
      <div className='container'>
        <SectionHeading titleKey='bio.heading' />
        <div className={styles.content}>
          <p>{t('bio.p1')}</p>
          <p>{t('bio.p2')}</p>
          <p>{t('bio.p3')}</p>
          <p>{t('bio.p4')}</p>
        </div>
      </div>
    </section>
  );
}

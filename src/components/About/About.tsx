import { useT } from '../../i18n/useT';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './About.module.css';

export default function About() {
  const t = useT();

  return (
    <section id='about' className={styles.section}>
      <div className='container'>
        <SectionHeading titleKey='about.heading' />
        <p className={styles.text}>{t('about.text')}</p>
      </div>
    </section>
  );
}

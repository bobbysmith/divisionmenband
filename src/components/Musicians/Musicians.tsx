import { PhotoPlaceholder } from '../../assets/icons';
import { musicianPhotos } from '../../assets/images';
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
          {musicians.map(m => {
            const photo = musicianPhotos[m.slug];
            return (
              <a
                key={m.slug}
                href={m.url || undefined}
                className={styles.card}
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className={styles.photoWrap}>
                  {photo ? (
                    <img className={styles.photo} src={photo.src} alt={photo.alt} />
                  ) : (
                    <PhotoPlaceholder className={styles.placeholder} />
                  )}
                </div>
                <div className={styles.info}>
                  <span className={styles.name}>{m.name}</span>
                  {m.knownFrom && <span className={styles.credit}>{m.knownFrom}</span>}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { type ImageAsset, pressPhotos } from '../../assets/images';
import { useModal } from '../../hooks/useModal';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './Photos.module.css';

export default function Photos() {
  const { active: activePhoto, open: openPhoto, close } = useModal<ImageAsset>();

  return (
    <section id='photos' className={styles.section}>
      <div className='container'>
        <SectionHeading titleKey='photos.heading' />
        <div className={styles.grid}>
          {pressPhotos.map((photo, i) => (
            <figure key={i} className={styles.figure}>
              <button
                type='button'
                className={styles.imageBtn}
                onClick={() => openPhoto(photo)}
                aria-label={`View ${photo.alt}`}
              >
                <img src={photo.src} alt={photo.alt} className={styles.image} loading='lazy' />
              </button>
              {(photo.description || photo.credit) && (
                <figcaption className={styles.caption}>
                  {photo.description && (
                    <span className={styles.captionDesc}>{photo.description}</span>
                  )}
                  {photo.credit && <span className={styles.captionCredit}>{photo.credit}</span>}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>

      {activePhoto && (
        <div className={styles.overlay} onClick={close}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button type='button' className={styles.closeBtn} onClick={close} aria-label='Close'>
              &times;
            </button>
            <img src={activePhoto.src} alt={activePhoto.alt} className={styles.modalImage} />
            {activePhoto.credit && <p className={styles.modalCredit}>{activePhoto.credit}</p>}
          </div>
        </div>
      )}
    </section>
  );
}

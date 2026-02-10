import { IconPlay } from '../../assets/icons';
import { type VideoLink, videoLinks } from '../../data/links';
import { useModal } from '../../hooks/useModal';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './Videos.module.css';

function getYouTubeId(embedUrl: string): string | null {
  const match = embedUrl.match(/\/embed\/([^?]+)/);
  return match ? match[1] : null;
}

export default function Videos() {
  const { active: modalVideo, open: openVideo, close } = useModal<VideoLink>();

  return (
    <section id='videos' className={styles.section}>
      <div className='container'>
        <SectionHeading titleKey='videos.heading' />
        <div className={styles.grid}>
          {videoLinks.map(video => {
            const videoId = video.embedUrl ? getYouTubeId(video.embedUrl) : null;
            return (
              <div key={video.title} className={styles.card}>
                <div className={styles.embed}>
                  {videoId ? (
                    <button
                      type='button'
                      className={styles.facade}
                      onClick={() => openVideo(video)}
                      aria-label={`Play ${video.title}`}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt={video.title}
                        className={styles.thumbnail}
                        loading='lazy'
                      />
                      <IconPlay className={styles.playIcon} aria-hidden='true' />
                    </button>
                  ) : (
                    <div className={styles.placeholder}>
                      <IconPlay width={48} height={48} aria-hidden='true' />
                    </div>
                  )}
                </div>
                <h3 className={styles.title}>{video.title}</h3>
              </div>
            );
          })}
        </div>
      </div>

      {modalVideo?.embedUrl && (
        <div className={styles.overlay} onClick={close}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button type='button' className={styles.closeBtn} onClick={close} aria-label='Close'>
              &times;
            </button>
            <div className={styles.modalEmbed}>
              <iframe
                src={`${modalVideo.embedUrl}&autoplay=1`}
                title={modalVideo.title}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                className={styles.iframe}
              />
            </div>
            <p className={styles.modalTitle}>{modalVideo.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}

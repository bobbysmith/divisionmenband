import type { ComponentType, SVGProps } from 'react';

import { AlbumPlaceholder, AppleMusic, Bandcamp, Spotify } from '../../assets/icons';
import { albumCovers } from '../../assets/images';
import { albums } from '../../data/albums';
import { type AlbumLinks, albumLinks } from '../../data/links';
import { useI18n } from '../../i18n/useI18n';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './Albums.module.css';

const PLATFORMS: {
  key: keyof AlbumLinks;
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}[] = [
  { key: 'spotify', label: 'Spotify', Icon: Spotify },
  { key: 'bandcamp', label: 'Bandcamp', Icon: Bandcamp },
  { key: 'apple', label: 'Apple Music', Icon: AppleMusic },
];

export default function Albums() {
  const { locale, t } = useI18n();

  const formatDate = (iso: string) => {
    const date = new Date(iso + 'T00:00:00');
    try {
      return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(date);
    } catch {
      return new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(date);
    }
  };

  return (
    <section id='albums' className={styles.section}>
      <div className='container'>
        <SectionHeading titleKey='albums.heading' />
        <div className={styles.grid}>
          {albums.map(album => {
            const cover = albumCovers[album.slug];
            const links = albumLinks[album.slug];

            return (
              <div key={album.slug} className={styles.card}>
                <div className={styles.artwork}>
                  {cover ? (
                    <img src={cover.src} alt={cover.alt} className={styles.artworkImage} />
                  ) : (
                    <AlbumPlaceholder className={styles.artworkPlaceholder} />
                  )}
                </div>
                <h3 className={styles.title}>{album.title}</h3>
                <p className={styles.label}>{album.label}</p>
                <p className={styles.date}>
                  {t('albums.released')}: {formatDate(album.releaseDate)}
                </p>
                {links && (
                  <div className={styles.links}>
                    {PLATFORMS.map(({ key, label, Icon }) => {
                      const url = links[key];
                      if (!url) return null;
                      return (
                        <a
                          key={key}
                          href={url}
                          className={styles.linkBtn}
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={label}
                          title={label}
                        >
                          <Icon width={16} height={16} aria-hidden='true' />
                          <span>{label}</span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { IconExternalLink } from '../../assets/icons';
import { socialLinks } from '../../data/links';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './Social.module.css';

export default function Social() {
  const activeLinks = socialLinks.filter(link => link.url);

  return (
    <section id='social' className={styles.section}>
      <div className='container'>
        <SectionHeading titleKey='social.heading' />

        <div className={styles.links}>
          {activeLinks.map(link => {
            const Icon = link.icon ?? IconExternalLink;
            return (
              <a
                key={link.platform}
                href={link.url!}
                className={styles.link}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={link.platform}
              >
                <Icon width={24} height={24} />
                <span className={styles.tooltip}>{link.platform}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

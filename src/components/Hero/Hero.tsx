import { useState } from 'react';

import { IconArrowDown, MotorMusic } from '../../assets/icons';
import { heroImage } from '../../assets/images';
import logo from '../../assets/images/logo/logo.png';
import { useT } from '../../i18n/useT';
import { generatePressKit } from '../../utils/pressKit';
import styles from './Hero.module.css';

export default function Hero() {
  const t = useT();
  const [generating, setGenerating] = useState(false);

  const handleDownload = async () => {
    if (generating) return;
    setGenerating(true);
    try {
      const blob = await generatePressKit();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'the-division-men-press-kit.zip';
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <section className={styles.hero}>
      {heroImage && <img className={styles.bg} src={heroImage.src} alt={heroImage.alt} />}
      <div className={styles.overlay} aria-hidden='true' />
      <div className={styles.content}>
        <img src={logo} alt='the division men' style={{ width: '700px', marginBottom: '1em' }} />
        <p className={styles.label}>{t('hero.label')}</p>
        <MotorMusic width={50} height={50} style={{ color: 'var(--color-accent)' }} />
        <button
          type='button'
          className={styles.pressKit}
          onClick={handleDownload}
          disabled={generating}
        >
          {generating ? '...' : t('hero.pressKit')}
        </button>
        <a href={'#about'} className={styles.scroll} aria-label='Scroll down'>
          <IconArrowDown width={24} height={24} />
        </a>
      </div>
    </section>
  );
}

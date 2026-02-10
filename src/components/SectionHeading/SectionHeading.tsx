import type { TranslationKey } from '../../i18n/types';
import { useT } from '../../i18n/useT';
import styles from './SectionHeading.module.css';

interface Props {
  titleKey: TranslationKey;
}

export default function SectionHeading({ titleKey }: Props) {
  const t = useT();
  return (
    <div className={styles.wrapper}>
      <span className={styles.line} aria-hidden='true' />
      <h2 className={styles.heading}>{t(titleKey)}</h2>
      <span className={styles.line} aria-hidden='true' />
    </div>
  );
}

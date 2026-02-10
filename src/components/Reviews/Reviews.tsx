import { reviews } from '../../data/reviews';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './Reviews.module.css';

export default function Reviews() {
  return (
    <section id='reviews' className={styles.section}>
      <div className='container'>
        <SectionHeading titleKey='reviews.heading' />
        <div className={styles.grid}>
          {reviews.map((review, i) => (
            <blockquote key={i} className={styles.card}>
              <span className={styles.quoteGlyph} aria-hidden='true'>
                &ldquo;
              </span>
              <p className={styles.quote}>{review.quote}</p>
              <footer className={styles.attribution}>
                <cite className={styles.publication}>{review.publication}</cite>
                {review.author && <span className={styles.author}>{review.author}</span>}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

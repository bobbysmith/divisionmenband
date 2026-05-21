import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { type Review, reviews } from '../../data/reviews';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './Reviews.module.css';

function ReviewCard({ review, onOpen }: { review: Review; onOpen: () => void }) {
  const [clamped, setClamped] = useState(false);
  const quoteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (quoteRef.current) {
      setClamped(quoteRef.current.scrollHeight > quoteRef.current.clientHeight);
    }
  }, []);

  return (
    <blockquote className={styles.card}>
      <span className={styles.quoteGlyph} aria-hidden='true'>
        &ldquo;
      </span>
      <p ref={quoteRef} className={styles.quote}>
        {review.quote}
      </p>
      {clamped && (
        <button className={styles.toggle} onClick={onOpen}>
          Read more
        </button>
      )}
      <footer className={styles.attribution}>
        <cite className={styles.publication}>{review.publication}</cite>
        {review.author && <span className={styles.author}>{review.author}</span>}
      </footer>
    </blockquote>
  );
}

function ReviewModal({ review, onClose }: { review: Review; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        role='dialog'
        aria-modal='true'
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.close} onClick={onClose} aria-label='Close'>
          &#x2715;
        </button>
        <blockquote className={styles.modalContent}>
          <span className={styles.quoteGlyph} aria-hidden='true'>
            &ldquo;
          </span>
          <p className={styles.modalQuote}>{review.quote}</p>
          <footer className={styles.attribution}>
            <cite className={styles.publication}>{review.publication}</cite>
            {review.author && <span className={styles.author}>{review.author}</span>}
          </footer>
        </blockquote>
      </div>
    </div>,
    document.body,
  );
}

export default function Reviews() {
  const [activeReview, setActiveReview] = useState<Review | null>(null);

  return (
    <>
      <section id='reviews' className={styles.section}>
        <div className='container'>
          <SectionHeading titleKey='reviews.heading' />
          <div className={styles.grid}>
            {reviews.map((review, i) => (
              <ReviewCard key={i} review={review} onOpen={() => setActiveReview(review)} />
            ))}
          </div>
        </div>
      </section>
      {activeReview && <ReviewModal review={activeReview} onClose={() => setActiveReview(null)} />}
    </>
  );
}

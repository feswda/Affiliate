import styles from './TrustStrip.module.css';

export default function TrustStrip() {
  return (
    <div className={styles.trustStrip}>
      <div className={`container ${styles.stripContainer}`}>
        <div className={styles.item}>
          <span className={styles.icon}>✅</span>
          <span className={styles.text}>100% Money-Back Guarantee</span>
        </div>
        <div className={styles.item}>
          <span className={styles.icon}>⭐️</span>
          <span className={styles.text}>Trustpilot: 4.8/5</span>
        </div>
        <div className={styles.item}>
          <span className={styles.icon}>🔒</span>
          <span className={styles.text}>Secure Checkout via Partners</span>
        </div>
        <div className={styles.item}>
          <span className={styles.icon}>⚡️</span>
          <span className={styles.text}>Instant Ticket Transfer Available</span>
        </div>
      </div>
    </div>
  );
}

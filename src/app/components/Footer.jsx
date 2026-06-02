import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>vipticketsfinder.com</h2>
          <p className={styles.tagline}>The leading ticket search engine online.</p>
        </div>
        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h3 className={styles.linkTitle}>Company</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          <div className={styles.linkGroup}>
            <h3 className={styles.linkTitle}>Support</h3>
            <ul>
              <li><a href="/help">Help Center</a></li>
              <li><a href="/guarantee">100% Guarantee</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} vipticketsfinder.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

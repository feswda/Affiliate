import Link from 'next/link';
import styles from './Navbar.module.css';
import GlobalSearch from './GlobalSearch';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Helios
        </Link>
        <div className={styles.searchWrapper}>
          <GlobalSearch />
        </div>
        <div className={styles.controls}>
          <button className={styles.localeBtn}>
            <span className={styles.flag}>🇬🇧</span> EN / GBP
          </button>
          <button className={styles.userBtn}>Log In</button>
        </div>
      </div>
    </header>
  );
}

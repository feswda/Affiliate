import styles from './page.module.css';
import GlobalSearch from './components/GlobalSearch';
import TrustStrip from './components/TrustStrip';
import { trendingEvents } from './lib/mockData';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <h1 className={styles.heroTitle}>
            Find the Best Live Event Tickets
          </h1>
          <p className={styles.heroSubtitle}>
            We search dozens of trusted ticket sites so you don't have to. Every ticket guaranteed.
          </p>
          <div className={styles.heroSearch}>
            <GlobalSearch />
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className={`container ${styles.verticals}`}>
        <h2 className="text-h2">Browse by Category</h2>
        <div className={styles.verticalGrid}>
          <Link href="/football-soccer-tickets" className={styles.verticalCard}>
            <span className={styles.verticalIcon}>⚽️</span>
            <h3>Football</h3>
          </Link>
          <Link href="/concerts-tickets" className={styles.verticalCard}>
            <span className={styles.verticalIcon}>🎸</span>
            <h3>Concerts</h3>
          </Link>
          <Link href="/theatre-tickets" className={styles.verticalCard}>
            <span className={styles.verticalIcon}>🎭</span>
            <h3>Theatre</h3>
          </Link>
          <Link href="/nfl-tickets" className={styles.verticalCard}>
            <span className={styles.verticalIcon}>🏈</span>
            <h3>NFL</h3>
          </Link>
          <Link href="/nba-tickets" className={styles.verticalCard}>
            <span className={styles.verticalIcon}>🏀</span>
            <h3>NBA</h3>
          </Link>
        </div>
      </section>

      <section className={`container ${styles.trending}`}>
        <h2 className="text-h2">Trending Events</h2>
        <div className={styles.eventGrid}>
          {trendingEvents.map(event => (
            <Link href={`/${event.slug}`} key={event.id} className={styles.eventCard}>
              <div 
                className={styles.eventImage} 
                style={{ backgroundImage: `url(${event.image})` }}
              />
              <div className={styles.eventContent}>
                <div className={styles.eventDate}>
                  {new Date(event.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                </div>
                <h3 className={styles.eventName}>{event.name}</h3>
                <p className={styles.eventVenue}>{event.venue} • {event.city}</p>
                <div className={styles.eventFooter}>
                  <span className={styles.priceLabel}>From</span>
                  <span className={styles.eventPrice}>£{event.minPrice}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

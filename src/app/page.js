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

      <section className={`container ${styles.trending}`}>
        <div className={styles.sectionHeader}>
          <h2 className="text-h2">Top Tournaments</h2>
          <Link href="/football-soccer-tickets" className={styles.viewAll}>View all tournaments &rarr;</Link>
        </div>
        <div className={styles.eventGrid}>
          <Link href="/fifa-world-cup-2026" className={styles.eventCard}>
            <div className={styles.eventImage} style={{backgroundImage: `url(https://images.unsplash.com/photo-1518605368461-1e1e114092b7?auto=format&fit=crop&q=80&w=800)`}} />
            <div className={styles.eventContent}>
              <div className={styles.eventDate}>11 Jun - 19 Jul 2026</div>
              <h3 className={styles.eventName}>FIFA World Cup 2026™</h3>
              <p className={styles.eventVenue}>USA, Canada, Mexico</p>
              <div className={styles.eventFooter}>
                <span className={styles.priceLabel}>104 Matches</span>
                <span className={styles.eventPrice} style={{fontSize: '1rem'}}>Tickets soon</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

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

import { trendingEvents, eventListings, venueData } from '../lib/mockData';
import EventClient from './EventClient';
import TrustStrip from '../components/TrustStrip';
import styles from './page.module.css';

export default function EventPage({ params }) {
  const { slug } = params;
  
  const event = trendingEvents.find(e => e.slug === slug) || trendingEvents[0];
  
  return (
    <div className={styles.eventPage}>
      {/* HERO SECTION */}
      <div className={styles.eventHeader}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroImage} style={{backgroundImage: `url(${event.image})`}} />
            <div className={styles.heroText}>
              <h1 className="text-h1">{event.name}</h1>
              <p className={styles.eventMeta}>
                <span>📅 {new Date(event.date).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                <span>📍 {event.venue}, {event.city}</span>
              </p>
              {!event.tba_status && event.minPrice && (
                <div className={styles.heroDeal}>
                  <span className={styles.heroPrice}>Cheapest: £{event.minPrice}</span>
                  <span className={styles.heroBadge}>Deal Score: GREAT</span>
                  <button className={styles.heroBtn}>View Tickets &darr;</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className={`container ${styles.mainLayout}`}>
        {/* §1 & §2: LISTINGS & SEAT MAP (Handled by EventClient) */}
        <EventClient event={event} listings={eventListings} venue={venueData} />

        {/* §3: EDITORIAL */}
        {event.editorial && (
          <section className={styles.contentSection}>
            <h2 className="text-h2">About this match</h2>
            <div className={styles.editorialContent}>
              <p>{event.editorial}</p>
            </div>
          </section>
        )}

        {/* §4 & §5: VENUE & PRICE TRENDS */}
        <div className={styles.twoColSection}>
          <section className={styles.contentSection}>
            <h2 className="text-h2">Venue Information</h2>
            <div className={styles.venueCard}>
              <h3>{venueData.name}</h3>
              <p>Capacity: {venueData.capacity.toLocaleString()}</p>
              <p>Opened: {venueData.opened}</p>
              <p className="text-small" style={{marginTop: '0.5rem'}}>{venueData.description}</p>
            </div>
          </section>

          <section className={styles.contentSection}>
            <h2 className="text-h2">Price Trends</h2>
            <div className={styles.trendCard}>
              <div className={styles.sparkline}>📈 [Price Trend Graph Placeholder]</div>
              <p className={styles.trendPrediction}>
                <span style={{color: 'var(--color-danger)', fontWeight: 600}}>Prices likely to ↑</span> before kickoff based on historical data.
              </p>
            </div>
          </section>
        </div>

        {/* §6: FAQ */}
        {event.faqs && event.faqs.length > 0 && (
          <section className={styles.contentSection}>
            <h2 className="text-h2">Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              {event.faqs.map((faq, idx) => (
                <details key={idx} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.q}</summary>
                  <div className={styles.faqAnswer}>{faq.a}</div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* §7: RELATED EVENTS */}
        <section className={styles.contentSection}>
          <h2 className="text-h2">Related Events</h2>
          <div className={styles.relatedGrid}>
            <div className={styles.relatedCard}>
              <h4>Similar Match</h4>
              <p>View Tickets &rarr;</p>
            </div>
            <div className={styles.relatedCard}>
              <h4>Events at {event.venue}</h4>
              <p>View Tickets &rarr;</p>
            </div>
          </div>
        </section>
      </div>

      {/* §8: TRUST & SAFETY STRIP */}
      <div style={{marginTop: 'var(--spacing-3xl)'}}>
        <TrustStrip />
      </div>
    </div>
  );
}

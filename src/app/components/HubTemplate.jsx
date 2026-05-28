import Link from 'next/link';
import styles from './HubTemplate.module.css';

export default function HubTemplate({ title, subtitle, description, entitiesTitle, entities, eventsTitle, events }) {
  return (
    <div className={styles.hubPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className="text-h1">{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </section>

      <div className="container">
        <div className={styles.contentLayout}>
          {/* Main Content Area */}
          <div className={styles.mainCol}>
            {/* Editorial Narrative */}
            {description && (
              <section className={styles.editorial}>
                <h2 className="text-h2">About {title}</h2>
                <p className="text-body">{description}</p>
              </section>
            )}

            {/* Upcoming Events */}
            {events && events.length > 0 && (
              <section className={styles.section}>
                <h2 className="text-h2">{eventsTitle || 'Upcoming Events'}</h2>
                <div className={styles.eventList}>
                  {events.map((evt, idx) => (
                    <Link href={`/${evt.slug}`} key={idx} className={styles.eventRow}>
                      <div className={styles.eventDate}>
                        <div className={styles.month}>{new Date(evt.date).toLocaleString('en-US', {month: 'short'})}</div>
                        <div className={styles.day}>{new Date(evt.date).getDate()}</div>
                      </div>
                      <div className={styles.eventInfo}>
                        <h3 className={styles.eventName}>{evt.name || evt.opponent}</h3>
                        <p className={styles.eventVenue}>{evt.competition || evt.venue}</p>
                      </div>
                      <div className={styles.eventAction}>
                        <span className={styles.price}>From £{evt.minPrice}</span>
                        <button className={styles.btn}>Tickets</button>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Child Entities (Teams, Venues, etc.) */}
            {entities && entities.length > 0 && (
              <section className={styles.section}>
                <h2 className="text-h2">{entitiesTitle || 'Featured'}</h2>
                <div className={styles.entityGrid}>
                  {entities.map((ent, idx) => (
                    <Link href={`/${ent.slug}`} key={idx} className={styles.entityCard}>
                      <h3>{ent.name}</h3>
                      <p className="text-small">View tickets &rarr;</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Area (e.g. Price tracker, facts) */}
          <aside className={styles.sidebar}>
            <div className={styles.widget}>
              <h3 className="text-h3">Price Insights</h3>
              <div className={styles.chartPlaceholder}>
                📈 Historical Price Chart
              </div>
              <p className="text-small" style={{marginTop: '1rem'}}>
                Average ticket price is currently trending down by 5% this month.
              </p>
            </div>
            
            <div className={styles.widget}>
              <h3 className="text-h3">Did You Know?</h3>
              <p className="text-small">
                Helios compares tickets from over 15+ verified secondary marketplaces to find you the best deal without hidden fees.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

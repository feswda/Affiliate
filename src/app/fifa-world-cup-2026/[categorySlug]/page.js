import Link from 'next/link';
import { tournaments, wcMatches } from '../../lib/mockData';
import styles from '../page.module.css';

export default function CategoryPage({ params }) {
  const { categorySlug } = params;
  
  // Format slug to readable name
  const categoryName = categorySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Filter 10 dummy matches for this category page
  const categoryMatches = wcMatches.slice(10, 20);

  return (
    <div className={styles.hub}>
      <section className={styles.hero} style={{ background: 'linear-gradient(135deg, rgba(31, 64, 55, 0.9) 0%, rgba(153, 242, 200, 0.9) 100%)' }}>
        <div className="container">
          <Link href="/fifa-world-cup-2026" style={{ color: '#fff', textDecoration: 'underline', marginBottom: '1rem', display: 'inline-block' }}>
            &larr; Back to World Cup Hub
          </Link>
          <h1 className="text-h1">{categoryName}</h1>
          <p className={styles.heroSubtitle}>FIFA World Cup 2026™</p>
        </div>
      </section>

      <div className={`container ${styles.contentLayout}`} style={{ marginTop: '2rem' }}>
        <div className={styles.mainCol}>
          <section className={styles.section}>
            <h2 className="text-h2">Matches in {categoryName}</h2>
            <div className={styles.matchList}>
              {categoryMatches.map(match => (
                <Link href={`/${match.slug}`} key={match.id} className={styles.matchRow}>
                  <div className={styles.matchDate}>
                    {new Date(match.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </div>
                  <div className={styles.matchTeams}>
                    <strong>{match.name}</strong>
                    <span className={styles.matchVenue}>{match.venue}, {match.city}</span>
                  </div>
                  <div className={styles.matchAction}>
                    <button className={styles.btnOutline}>Tickets Soon</button>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className={styles.editorial}>
            <h2 className="text-h2">About {categoryName}</h2>
            <p>
              This is the official portal for all fixtures and ticketing information related to {categoryName} for the 2026 FIFA World Cup.
              The matches scheduled here will be vital in determining the ultimate champion of the tournament. 
              Be sure to sign up for alerts as ticket demand for {categoryName} matches is expected to be unprecedented.
            </p>
          </section>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.widget}>
            <h3 className="text-h3">Quick Links</h3>
            <ul className={styles.quickLinks}>
              <li><Link href="/fifa-world-cup-2026">Tournament Hub</Link></li>
              <li><Link href="/fifa-world-cup-2026/final-tickets">World Cup Final Tickets</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

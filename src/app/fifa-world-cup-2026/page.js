import Link from 'next/link';
import { tournaments, wcMatches } from '../lib/mockData';
import styles from './page.module.css';

export default function TournamentHub() {
  const tourney = tournaments["fifa-world-cup-2026"];

  return (
    <div className={styles.hub}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className="text-h1">{tourney.name}</h1>
          <p className={styles.heroSubtitle}>
            11 Jun – 19 Jul 2026 · {tourney.host_countries.join(", ")}
          </p>
          <p className="text-body">
            {tourney.match_count} matches · {tourney.host_cities.length} host cities · {tourney.team_count} teams
          </p>
          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Browse Tickets</button>
            <button className={styles.btnSecondary}>Set Alerts</button>
          </div>
        </div>
      </section>

      {/* Key Dates Strip */}
      <div className={styles.keyDates}>
        <div className={`container ${styles.dateStripContainer}`}>
          {tourney.keyDates.map((kd, i) => (
            <div key={i} className={styles.dateBadge}>
              <span className={styles.dateLabel}>{kd.label}</span>
              <strong className={styles.dateValue}>{kd.date}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className={`container ${styles.contentLayout}`}>
        <div className={styles.mainCol}>
          {/* Group Stage Grid */}
          <section className={styles.section}>
            <h2 className="text-h2">Group Stage</h2>
            <div className={styles.gridCards}>
              {tourney.groups.map(g => (
                <Link href={`/${g.slug}`} key={g.slug} className={styles.card}>
                  <h3>{g.name}</h3>
                  <p className="text-small">View Fixtures &rarr;</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Host City Grid */}
          <section className={styles.section}>
            <h2 className="text-h2">Host Cities</h2>
            <div className={styles.gridCards}>
              {tourney.host_cities.map(c => (
                <Link href={`/${c.slug}`} key={c.slug} className={styles.card}>
                  <h3>{c.name}</h3>
                  <p className="text-small">Explore City &rarr;</p>
                </Link>
              ))}
            </div>
          </section>
          
          {/* Match Schedule List */}
          <section className={styles.section}>
            <h2 className="text-h2">Match Schedule</h2>
            <div className={styles.matchList}>
              {wcMatches.slice(0, 10).map(match => (
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
              <div className={styles.matchRow} style={{justifyContent: 'center', cursor: 'default'}}>
                <span className="text-muted">... and 94 more matches</span>
              </div>
            </div>
          </section>

          {/* Placeholder Knockout Bracket */}
          <section className={styles.section}>
             <h2 className="text-h2">Knockout Bracket</h2>
             <div className={styles.bracketPlaceholder}>
               [ Interactive SVG Bracket Renders Here ]
             </div>
          </section>

          {/* Editorial Tournament Guide */}
          <section className={styles.editorial}>
            <h2 className="text-h2">Tournament Guide</h2>
            <p>
              The 2026 FIFA World Cup will be the 23rd FIFA World Cup, the quadrennial international men's football championship. 
              The tournament will be jointly hosted by 16 cities in three North American countries: Canada, Mexico, and the United States. 
              The tournament will be the first hosted by three nations and the first North American World Cup since 1994.
            </p>
            <h3 className="text-h3" style={{marginTop: '1.5rem', marginBottom: '0.5rem'}}>How to Buy Tickets</h3>
            <p>
              Tickets will be incredibly difficult to secure via the primary official ballot. Secondary marketplaces provide a guaranteed 
              alternative with buyer protection. Sign up for vipticketsfinder.com alerts to be notified the moment tickets go on sale for any stage of the tournament.
            </p>
          </section>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.widget}>
            <h3 className="text-h3">Price Guide</h3>
            <ul className={styles.priceList}>
              <li><span>Group Stage</span> <strong>from $250</strong></li>
              <li><span>Round of 32</span> <strong>from $400</strong></li>
              <li><span>Quarter Finals</span> <strong>from $800</strong></li>
              <li><span>Final</span> <strong>from $2,500</strong></li>
            </ul>
          </div>
          
          <div className={styles.widget}>
            <h3 className="text-h3">Quick Links</h3>
            <ul className={styles.quickLinks}>
              <li><Link href="/fifa-world-cup-2026/final-tickets">World Cup Final Tickets</Link></li>
              <li><Link href="/usa-tickets">USA National Team Tickets</Link></li>
              <li><Link href="/mexico-tickets">Mexico National Team Tickets</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

import { trendingEvents, eventListings, venueData } from '../lib/mockData';
import EventClient from './EventClient';
import styles from './page.module.css';

export default function EventPage({ params }) {
  const { slug } = params;
  
  // Find event from mock data (in reality, query DB by slug)
  const event = trendingEvents.find(e => e.slug === slug) || trendingEvents[0];
  
  return (
    <div className={styles.eventPage}>
      <div className={styles.eventHeader}>
        <div className="container">
          <h1 className="text-h1">{event.name} Tickets</h1>
          <p className={styles.eventMeta}>
            <span>📍 {event.venue}, {event.city}</span>
            <span>📅 {new Date(event.date).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </p>
        </div>
      </div>
      
      <div className={`container ${styles.mainLayout}`}>
        <EventClient event={event} listings={eventListings} venue={venueData} />
      </div>
    </div>
  );
}

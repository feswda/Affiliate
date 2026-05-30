'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function EventClient({ event, listings, venue }) {
  const [allInPricing, setAllInPricing] = useState(false);
  const [quantity, setQuantity] = useState(2);
  const [emailAlert, setEmailAlert] = useState('');
  
  if (event.tba_status || !event.minPrice) {
    return (
      <div className={styles.tbaState}>
        <div className={styles.tbaIcon}>⏳</div>
        <h2 className="text-h2">Tickets on sale soon</h2>
        <p className="text-body">
          Listings are not yet available for this event because the exact teams or details are still to be confirmed.
        </p>
        <form className={styles.alertForm} onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={emailAlert}
            onChange={(e) => setEmailAlert(e.target.value)}
            className={styles.alertInput}
            required
          />
          <button type="submit" className={styles.alertBtn}>Set Alert</button>
        </form>
        <p className="text-small" style={{marginTop: '1rem'}}>
          We'll notify you the moment secondary market tickets drop.
        </p>
      </div>
    );
  }

  const calculatePrice = (basePrice) => {
    return allInPricing ? Math.round(basePrice * 1.25) : basePrice;
  };

  const getDealScoreColor = (score) => {
    switch(score) {
      case 'Great Deal': return '#0C9E45';
      case 'Good': return '#8BC34A'; 
      case 'Fair': return '#FFB020';
      case 'High': return '#FF4F00';
      case 'Overpriced': return '#D82C20';
      default: return '#8792A2';
    }
  };

  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <div className={styles.filterGroup}>
          <h3 className="text-h3">Tickets</h3>
          <select 
            value={quantity} 
            onChange={(e) => setQuantity(Number(e.target.value))}
            className={styles.select}
          >
            {[1,2,3,4,5,6].map(q => (
              <option key={q} value={q}>{q} {q === 1 ? 'Ticket' : 'Tickets'}</option>
            ))}
          </select>
        </div>
        
        <div className={styles.filterGroup}>
          <label className={styles.toggleLabel}>
            <span>All-in Pricing (incl. fees)</span>
            <input 
              type="checkbox" 
              checked={allInPricing} 
              onChange={(e) => setAllInPricing(e.target.checked)} 
              className={styles.toggleInput}
            />
          </label>
          <p className="text-small">Compare final checkout prices</p>
        </div>
      </aside>

      <div className={styles.mainContent}>
        <div className={styles.venueMapWrapper}>
          <div className={styles.mapPlaceholder} style={{backgroundImage: `url(${venue.mapUrl})`}}>
            <div className="glass" style={{padding: '1rem', borderRadius: '8px', display: 'inline-block', position: 'absolute', top: '20px', left: '20px'}}>
              <h3 style={{margin: 0}}>{venue.name} Interactive Map</h3>
            </div>
          </div>
        </div>

        <div className={styles.listingHeader}>
          <h2>{listings.length} tickets found</h2>
          <select className={styles.sortSelect}>
            <option>Sort by Deal Score</option>
            <option>Sort by Price</option>
          </select>
        </div>

        <div className={styles.listingsGrid}>
          {listings.map(listing => (
            <div key={listing.id} className={styles.listingCard}>
              <div className={styles.listingInfo}>
                <div className={styles.sectionRow}>
                  <strong>Sec {listing.section}</strong> • Row {listing.row}
                </div>
                <div className={styles.listingFeatures}>
                  {listing.seatsTogether && <span className={styles.featureBadge}>🪑 Seats Together</span>}
                  <span className={styles.partnerBadge}>via {listing.partner}</span>
                </div>
              </div>
              
              <div className={styles.listingDeal}>
                <div 
                  className={styles.dealBadge}
                  style={{ backgroundColor: `${getDealScoreColor(listing.dealScore)}20`, color: getDealScoreColor(listing.dealScore) }}
                >
                  {listing.dealScore}
                </div>
              </div>
              
              <div className={styles.listingPriceArea}>
                <div className={styles.priceValue}>
                  {event.currency === 'GBP' ? '£' : '$'}{calculatePrice(listing.price)}
                  <span className={styles.pricePer}>/ea</span>
                </div>
                <button className={styles.buyBtn}>View Tickets</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

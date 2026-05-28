'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function EventClient({ event, listings, venue }) {
  const [allInPricing, setAllInPricing] = useState(false);
  const [quantity, setQuantity] = useState(2);
  
  // Fake calculation for all-in pricing (base + 25% fees)
  const calculatePrice = (basePrice) => {
    return allInPricing ? Math.round(basePrice * 1.25) : basePrice;
  };

  const getDealScoreColor = (score) => {
    switch(score) {
      case 'Great Deal': return '#0C9E45'; // success
      case 'Good': return '#8BC34A'; 
      case 'Fair': return '#FFB020'; // warning
      case 'High': return '#FF4F00';
      case 'Overpriced': return '#D82C20'; // danger
      default: return '#8792A2';
    }
  };

  return (
    <div className={styles.dashboard}>
      {/* Sidebar Filters */}
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

      {/* Main Content - Venue Map & Listings */}
      <div className={styles.mainContent}>
        
        <div className={styles.venueMapWrapper}>
          <div className={styles.mapPlaceholder} style={{backgroundImage: `url(${venue.mapUrl})`}}>
            <div className="glass" style={{padding: '1rem', borderRadius: '8px', display: 'inline-block', position: 'absolute', top: '20px', left: '20px'}}>
              <h3 style={{margin: 0}}>{venue.name} Interactive Map</h3>
              <p className="text-small" style={{margin: 0}}>Select a section to filter listings</p>
            </div>
          </div>
        </div>

        <div className={styles.listingHeader}>
          <h2>{listings.length} tickets found</h2>
          <select className={styles.sortSelect}>
            <option>Sort by Deal Score (Best first)</option>
            <option>Sort by Price (Lowest first)</option>
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

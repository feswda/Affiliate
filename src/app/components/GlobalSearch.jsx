'use client';

import { useState } from 'react';
import styles from './GlobalSearch.module.css';

export default function GlobalSearch() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      console.log('Searching for:', query);
    }
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input 
        type="text" 
        className={styles.searchInput} 
        placeholder="Search for events, artists, teams, or venues..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

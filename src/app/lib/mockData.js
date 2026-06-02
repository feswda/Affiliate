export const wcMatches = Array.from({ length: 104 }).map((_, i) => {
  const matchNum = i + 1;
  const isFinal = matchNum === 104;
  const isOpening = matchNum === 1;
  const dateStr = isOpening ? "2026-06-11T12:00:00Z" : isFinal ? "2026-07-19T15:00:00Z" : `2026-06-${(11 + Math.floor(i / 3)).toString().padStart(2, '0')}T15:00:00Z`;
  
  return {
    id: `evt_wc_${matchNum}`,
    name: isFinal ? "FIFA World Cup 2026™ Final" : isOpening ? "Opening Match: Mexico vs TBA" : `Match ${matchNum}: TBA vs TBA`,
    date: dateStr,
    venue: isFinal ? "MetLife Stadium" : isOpening ? "Estadio Azteca" : "Host Stadium",
    city: isFinal ? "New York / New Jersey, USA" : isOpening ? "Mexico City, Mexico" : "TBA",
    minPrice: null, // No listings yet
    currency: "USD",
    vertical: "football",
    slug: `fifa-world-cup-2026-match-${matchNum}-tickets`,
    image: "https://images.unsplash.com/photo-1518605368461-1e1e114092b7?auto=format&fit=crop&q=80&w=800",
    tournament_id: "tour_wc26",
    stage_id: isFinal ? "stage_final" : matchNum <= 72 ? "stage_group" : "stage_knockout",
    event_status: "Scheduled",
    tba_status: true,
    editorial: "The FIFA World Cup 2026™ is the pinnacle of international football. While teams are yet to be determined, anticipation is already reaching fever pitch.",
    faqs: [
      { q: "When do tickets go on sale?", a: "The Last-Minute Sales Phase will open closer to the tournament. Sign up for alerts." }
    ]
  };
});

export const trendingEvents = [
  {
    id: "evt_1",
    name: "Real Madrid vs Barcelona",
    date: "2026-10-15T20:00:00Z",
    venue: "Santiago Bernabéu",
    city: "Madrid, Spain",
    minPrice: 150,
    currency: "GBP",
    vertical: "football",
    slug: "real-madrid-vs-barcelona-tickets",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=800",
    event_status: "OnSale",
    tba_status: false,
    editorial: "El Clásico is the biggest domestic match in world football. With both teams competing for the La Liga title, stakes are incredibly high. Expect a tense, thrilling encounter filled with world-class talent and historic rivalry.",
    faqs: [
      { q: "When is Real Madrid vs Barcelona?", a: "The match is scheduled for October 15, 2026 at 20:00 CET." },
      { q: "Where is the match played?", a: "At the Santiago Bernabéu stadium in Madrid." }
    ]
  },
  {
    id: "evt_2",
    name: "Taylor Swift: The Eras Tour",
    date: "2026-08-20T19:00:00Z",
    venue: "Wembley Stadium",
    city: "London, UK",
    minPrice: 320,
    currency: "GBP",
    vertical: "concerts",
    slug: "taylor-swift-wembley-tickets",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=800",
    event_status: "OnSale",
    tba_status: false,
    editorial: "Taylor Swift's record-breaking Eras Tour returns to Wembley Stadium. Spanning her entire musical journey, the 3-hour spectacular is a must-see for Swifties. Tickets are in extremely high demand.",
    faqs: [
      { q: "What time do doors open?", a: "Doors typically open at 16:30 for VIP and 17:00 for general admission." }
    ]
  },
  {
    id: "evt_3",
    name: "Asian Games 2026 Opening Ceremony",
    date: "2026-09-19T19:00:00Z",
    venue: "Aichi-Nagoya Stadium",
    city: "Nagoya, Japan",
    minPrice: 200,
    currency: "USD",
    vertical: "multi-sport",
    slug: "asian-games-2026-opening-ceremony-tickets",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800",
    event_status: "Scheduled",
    tba_status: false,
    editorial: "The 2026 Asian Games, also known as XX Asiad, will be a multi-sport event celebrated in Aichi Prefecture and its capital Nagoya in Japan.",
    faqs: [
      { q: "Where will the Asian Games be held?", a: "In Aichi and Nagoya, Japan." }
    ]
  },
  {
    id: "evt_4",
    name: "Heavyweight Championship: Fury vs Usyk II",
    date: "2026-12-21T22:00:00Z",
    venue: "Kingdom Arena",
    city: "Riyadh, Saudi Arabia",
    minPrice: 500,
    currency: "USD",
    vertical: "boxing",
    slug: "fury-vs-usyk-riyadh-tickets",
    image: "https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?auto=format&fit=crop&q=80&w=800",
    event_status: "OnSale",
    tba_status: false,
    editorial: "The highly anticipated heavyweight boxing rematch taking place in Riyadh Season. Witness history in the Middle East as two titans clash for the unified championship.",
    faqs: [
      { q: "Where is the fight taking place?", a: "At the Kingdom Arena in Riyadh, Saudi Arabia." }
    ]
  }
];

export const tournaments = {
  "fifa-world-cup-2026": {
    id: "tour_wc26",
    slug: "fifa-world-cup-2026",
    name: "FIFA World Cup 2026™",
    governing_body: "FIFA",
    sport: "football",
    start_date: "2026-06-11",
    end_date: "2026-07-19",
    host_countries: ["USA", "CAN", "MEX"],
    team_count: 48,
    match_count: 104,
    status: "OnSale",
    groups: [
      { name: "Group A", slug: "fifa-world-cup-2026/group-a" },
      { name: "Group B", slug: "fifa-world-cup-2026/group-b" },
      { name: "Group C", slug: "fifa-world-cup-2026/group-c" }
    ],
    host_cities: [
      { name: "New York / New Jersey", slug: "fifa-world-cup-2026/new-york-new-jersey" },
      { name: "Los Angeles", slug: "fifa-world-cup-2026/los-angeles" },
      { name: "Mexico City", slug: "fifa-world-cup-2026/mexico-city" },
      { name: "Toronto", slug: "fifa-world-cup-2026/toronto" }
    ],
    keyDates: [
      { label: "Opening Match", date: "11 Jun" },
      { label: "Round of 32", date: "28 Jun" },
      { label: "Quarter Finals", date: "9 Jul" },
      { label: "Final", date: "19 Jul" }
    ]
  }
};

export const teamData = {
  id: "team_rm",
  name: "Real Madrid",
  league: "La Liga",
  stadium: "Santiago Bernabéu",
  description: "Real Madrid Club de Fútbol, commonly referred to as Real Madrid, is a Spanish professional football club based in Madrid. Known as one of the most widely supported teams in the world.",
  heroImage: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=1200",
  upcomingMatches: [
    {
      id: "evt_1",
      opponent: "Barcelona",
      date: "2026-10-15T20:00:00Z",
      competition: "La Liga",
      isHome: true,
      minPrice: 150,
      slug: "real-madrid-vs-barcelona-tickets"
    }
  ]
};

export const eventListings = [
  {
    id: "lst_1",
    section: "Category 1",
    row: "12",
    quantity: 2,
    price: 180,
    currency: "GBP",
    dealScore: "Great Deal", 
    partner: "StubHub",
    seatsTogether: true
  },
  {
    id: "lst_2",
    section: "VIP Hospitality",
    row: "A",
    quantity: 4,
    price: 450,
    currency: "GBP",
    dealScore: "Overpriced",
    partner: "Viagogo",
    seatsTogether: true
  },
  {
    id: "lst_3",
    section: "Category 3 - Away",
    row: "45",
    quantity: 1,
    price: 95,
    currency: "GBP",
    dealScore: "Good",
    partner: "LiveFootballTickets",
    seatsTogether: false
  }
];

export const venueData = {
  id: "ven_1",
  name: "Old Trafford",
  city: "Manchester",
  capacity: 74310,
  opened: 1910,
  team: "Manchester United",
  description: "Old Trafford is a football stadium in Old Trafford, Greater Manchester, England, and the home of Manchester United.",
  mapUrl: "https://images.unsplash.com/photo-1508344928928-7137b29de216?auto=format&fit=crop&q=80&w=1200", 
  upcomingEvents: []
};

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
    id: "evt_wc_final",
    name: "FIFA World Cup 2026™ Final",
    date: "2026-07-19T15:00:00Z",
    venue: "MetLife Stadium",
    city: "New York / New Jersey, USA",
    minPrice: null, // No listings yet
    currency: "USD",
    vertical: "football",
    slug: "fifa-world-cup-2026-final-tickets",
    image: "https://images.unsplash.com/photo-1518605368461-1e1e114092b7?auto=format&fit=crop&q=80&w=800",
    tournament_id: "tour_wc26",
    stage_id: "stage_final",
    event_status: "Scheduled",
    tba_status: true, // Teams not announced yet
    editorial: "The FIFA World Cup 2026™ Final is the pinnacle of international football. Hosted at the iconic MetLife Stadium in New Jersey, this match will crown the world champions in front of a global audience of billions. While teams are yet to be determined, anticipation is already reaching fever pitch.",
    faqs: [
      { q: "When do World Cup 2026 Final tickets go on sale?", a: "The Last-Minute Sales Phase will open closer to the tournament. Sign up for alerts to be notified immediately when secondary market tickets appear." },
      { q: "Which teams will play in the Final?", a: "The finalists will be determined after the semi-finals on July 14 and 15, 2026." }
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

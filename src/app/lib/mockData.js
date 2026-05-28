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
  },
  {
    id: "evt_3",
    name: "Arsenal vs Chelsea",
    date: "2026-09-02T15:00:00Z",
    venue: "Emirates Stadium",
    city: "London, UK",
    minPrice: 95,
    currency: "GBP",
    vertical: "football",
    slug: "arsenal-vs-chelsea-tickets",
    image: "https://images.unsplash.com/photo-1518605368461-1e1e114092b7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "evt_4",
    name: "Hamilton",
    date: "2026-06-15T19:30:00Z",
    venue: "Victoria Palace Theatre",
    city: "London, UK",
    minPrice: 45,
    currency: "GBP",
    vertical: "theatre",
    slug: "hamilton-london-tickets",
    image: "https://images.unsplash.com/photo-1507676184212-d0330a15233c?auto=format&fit=crop&q=80&w=800",
  }
];

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
    },
    {
      id: "evt_5",
      opponent: "Atletico Madrid",
      date: "2026-10-22T21:00:00Z",
      competition: "La Liga",
      isHome: false,
      minPrice: 120,
      slug: "atletico-madrid-vs-real-madrid-tickets"
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
    dealScore: "Great Deal", // "Great Deal", "Good", "Fair", "High", "Overpriced"
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
  },
  {
    id: "lst_4",
    section: "Category 1",
    row: "15",
    quantity: 2,
    price: 210,
    currency: "GBP",
    dealScore: "Fair",
    partner: "TicketNetwork",
    seatsTogether: true
  }
];

export const venueData = {
  id: "ven_1",
  name: "Old Trafford",
  city: "Manchester",
  capacity: 74310,
  opened: 1910,
  team: "Manchester United",
  description: "Old Trafford is a football stadium in Old Trafford, Greater Manchester, England, and the home of Manchester United. With a capacity of 74,310 it is the largest club football stadium in the United Kingdom.",
  mapUrl: "https://images.unsplash.com/photo-1508344928928-7137b29de216?auto=format&fit=crop&q=80&w=1200", // Placeholder for interactive map
  upcomingEvents: [
    {
      id: "evt_mu1",
      name: "Manchester United vs Liverpool",
      date: "2026-11-05T15:00:00Z",
      minPrice: 140,
      slug: "manchester-united-vs-liverpool-tickets"
    }
  ]
};

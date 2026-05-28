import HubTemplate from '../components/HubTemplate';

export default function FootballHub() {
  const leagues = [
    { name: "English Premier League", slug: "english-premier-league-tickets" },
    { name: "La Liga", slug: "spanish-la-liga-tickets" },
    { name: "Champions League", slug: "uefa-champions-league-tickets" },
    { name: "Serie A", slug: "italian-serie-a-tickets" }
  ];

  return (
    <HubTemplate
      title="Football Tickets"
      subtitle="Compare prices for the biggest matches across Europe."
      description="Football is the world's most popular sport, and securing tickets to major matches can be a challenge. Helios aggregates inventory from dozens of verified secondary marketplaces to bring you the best deals for the Premier League, Champions League, La Liga, and more."
      entitiesTitle="Top Leagues"
      entities={leagues}
    />
  );
}

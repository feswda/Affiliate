import HubTemplate from '../components/HubTemplate';

export default function LeagueHub() {
  const teams = [
    { name: "Arsenal", slug: "arsenal-tickets" },
    { name: "Chelsea", slug: "chelsea-tickets" },
    { name: "Liverpool", slug: "liverpool-tickets" },
    { name: "Manchester City", slug: "manchester-city-tickets" },
    { name: "Manchester United", slug: "manchester-united-tickets" }
  ];

  return (
    <HubTemplate
      title="English Premier League Tickets"
      subtitle="The most-watched sports league in the world."
      description="The English Premier League (EPL) features 20 clubs competing in 380 matches from August to May. Finding tickets for big six clashes is highly competitive, but Helios guarantees you access to 100% verified tickets."
      entitiesTitle="Featured Teams"
      entities={teams}
    />
  );
}

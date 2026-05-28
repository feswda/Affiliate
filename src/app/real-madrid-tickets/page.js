import HubTemplate from '../components/HubTemplate';
import { teamData } from '../lib/mockData';

export default function TeamHub() {
  return (
    <HubTemplate
      title={`${teamData.name} Tickets`}
      subtitle={`Home Venue: ${teamData.stadium}`}
      description={teamData.description}
      eventsTitle="Upcoming Matches"
      events={teamData.upcomingMatches}
    />
  );
}

import HubTemplate from '../components/HubTemplate';
import { venueData } from '../lib/mockData';

export default function VenueHub() {
  return (
    <HubTemplate
      title={`${venueData.name} Tickets`}
      subtitle={`Capacity: ${venueData.capacity.toLocaleString()} | Opened: ${venueData.opened}`}
      description={venueData.description}
      eventsTitle="Upcoming Events at Old Trafford"
      events={venueData.upcomingEvents}
    />
  );
}

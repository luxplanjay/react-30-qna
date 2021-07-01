import { Event } from 'components/Event/Event';
import { Container } from './EventBoard.styled';

export const EventBoard = ({ events }) => {
  return (
    <Container>
      {events.map(event => (
        <Event
          key={event.name}
          name={event.name}
          location={event.location}
          speaker={event.speaker}
          start={event.time.start}
          end={event.time.end}
          type={event.type}
        />
      ))}
    </Container>
  );
};

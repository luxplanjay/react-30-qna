import { Event } from '../Event/Event';
import css from './EventBoard.module.css';

export const EventBoard = ({ events }) => {
  return (
    <div className={css.eventBoard}>
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
    </div>
  );
};

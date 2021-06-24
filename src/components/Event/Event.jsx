import { FaMapMarkerAlt, FaUserAlt, FaClock } from 'react-icons/fa';
import { GiDuration } from 'react-icons/gi';
import { formatEventStart, formatEventDuration } from 'utils';
import { EventInfo } from '../EventInfo/EventInfo';
import css from './Event.module.css';

export const Event = ({ name, location, speaker, start, end, type }) => {
  const startDate = formatEventStart(start);
  const duration = formatEventDuration(start, end);

  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <EventInfo text={location}>
        <FaMapMarkerAlt className={css.icon} size="16" />
      </EventInfo>
      <EventInfo text={speaker}>
        <FaUserAlt className={css.icon} size="16" />
      </EventInfo>
      <EventInfo text={startDate}>
        <FaClock className={css.icon} size="16" />
      </EventInfo>
      <EventInfo text={` Duration: ${duration}`}>
        <GiDuration className={css.icon} size="16" />
      </EventInfo>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
  );
};

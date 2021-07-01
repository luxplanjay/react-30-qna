import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { formatEventStart, formatEventDuration } from 'utils';
import { iconSize } from 'constants/index';
import { Card, Title, Info, Chip } from './Event.styled';

export const Event = ({ name, location, speaker, start, end, type }) => {
  const startDate = formatEventStart(start);
  const duration = formatEventDuration(start, end);

  return (
    <Card>
      <Title>{name}</Title>
      <Info>
        <FaMapMarkerAlt size={iconSize.small} />
        {location}
      </Info>
      <Info>
        <FaUserAlt size={iconSize.small} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt size={iconSize.small} />
        {startDate}
      </Info>
      <Info>
        <FaClock size={iconSize.small} />
        Duration: {duration}
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
};

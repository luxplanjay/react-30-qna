import styled from '@emotion/styled/macro';

const List = styled.div`
  padding: 12px;
`;

const Item = styled.div`
  padding: 4px;
  color: ${({ selected, theme }) => {
    return selected ? theme.colors.red : theme.colors.black;
  }};
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const VideoList = ({ videos, selectedVideo, onSelect }) => {
  return (
    <List>
      {videos.map(video => (
        <Item
          key={video.id}
          selected={selectedVideo === video.link}
          onClick={() => onSelect(video.link)}
        >
          {video.link}
        </Item>
      ))}
    </List>
  );
};

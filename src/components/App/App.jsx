import { Component } from 'react';
import styled from '@emotion/styled/macro';
// import { PageTitle } from 'components/PageTitle/PageTitle';
// import { EventBoard } from 'components/EventBoard/EventBoard';
// import upcomingEvents from 'mock-data/upcoming-events.json';
import { VideoList } from 'components/VideoList/VideoList';
import { VimeoPlayer } from 'components/VimeoPlayer/VimeoPlayer';
import videos from 'mock-data/videos.json';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 24px;
`;

export class App extends Component {
  state = {
    selectedVideo: null,
  };

  selectVideo = link => {
    this.setState({
      selectedVideo: link,
    });
  };

  render() {
    const { selectedVideo } = this.state;
    return (
      <AppContainer>
        {/* <PageTitle>24th Core Worlds Coalition Conference</PageTitle> */}
        {/* <EventBoard events={upcomingEvents} /> */}
        <VimeoPlayer url={selectedVideo} />
        <VideoList
          videos={videos}
          selectedVideo={selectedVideo}
          onSelect={this.selectVideo}
        />
      </AppContainer>
    );
  }
}

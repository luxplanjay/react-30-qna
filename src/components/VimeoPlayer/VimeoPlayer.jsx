import { Component } from 'react';
import styled from '@emotion/styled/macro';
import Player from 'react-player/vimeo';
import { Spinner } from 'components/Spinner/Spinner';

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

const StyledPlayer = styled(Player)`
  position: absolute;
  top: 0;
  left: 0;
`;

const FullSectionSpinner = styled(Spinner)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export class VimeoPlayer extends Component {
  state = {
    videoLoaded: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({ videoLoaded: false });
    }
  }

  render() {
    const { videoLoaded } = this.state;
    const { url } = this.props;
    const playerSize = videoLoaded ? '100%' : 0;
    const showSpinner = !videoLoaded && url;
    return (
      <PlayerWrapper>
        {showSpinner && <FullSectionSpinner size={80} />}
        <StyledPlayer
          url={url}
          width={playerSize}
          height={playerSize}
          controls
          onReady={() => this.setState({ videoLoaded: true })}
        />
      </PlayerWrapper>
    );
  }
}

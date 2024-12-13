import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const VideoBackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const VideoBackground = () => {
  return (
    <VideoBackgroundWrapper>
      <ReactPlayer
        url="https://www.example.com/video.mp4"
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
    </VideoBackgroundWrapper>
  );
};

export default VideoBackground;

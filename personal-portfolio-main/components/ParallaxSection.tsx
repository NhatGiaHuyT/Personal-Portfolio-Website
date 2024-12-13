import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';

const ParallaxWrapper = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #C6426E;
  color: #fff;
`;

const ParallaxText = styled.h2`
  font-size: 48px;
`;

const ParallaxSection = () => {
  return (
    <ParallaxProvider>
      <ParallaxWrapper>
        <Parallax speed={-10}>
          <img src="public/images/textured-background-1.png" alt="Parallax Image" />
        </Parallax>
      </ParallaxWrapper>
    </ParallaxProvider>
  );
};

export default ParallaxSection;

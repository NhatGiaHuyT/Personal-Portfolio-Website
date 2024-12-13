import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #642B73, #C6426E);
  text-align: center;
`;

const Title = styled(animated.h1)`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Subtitle = styled(animated.p)`
  font-size: 24px;
  margin-bottom: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled(animated.button)`
  padding: 10px 20px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid #fff;
  color: inherit;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    transform: scale(1.05);
  }
`;

const Hero = () => {
  const titleProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  const subtitleProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 400 });
  const buttonProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 600 });

  return (
    <HeroWrapper>
      <Title style={titleProps}>Welcome to My Portfolio</Title>
      <Subtitle style={subtitleProps}>I'm a passionate Computer Scientist</Subtitle>
      <ButtonWrapper>
        <Button style={buttonProps} onClick={() => window.scrollTo({ top: document.getElementById('about')?.offsetTop, behavior: 'smooth' })}>
          About Me
        </Button>
        <Button style={buttonProps} onClick={() => window.scrollTo({ top: document.getElementById('projects')?.offsetTop, behavior: 'smooth' })}>
          My Projects
        </Button>
        <Button style={buttonProps} onClick={() => window.scrollTo({ top: document.getElementById('contact')?.offsetTop, behavior: 'smooth' })}>
          Contact Me
        </Button>
      </ButtonWrapper>
    </HeroWrapper>
  );
};

export default Hero;

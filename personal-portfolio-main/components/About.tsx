import React, { useState } from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 60px 20px;
  background-color: inherit;
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 10px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.primary};
  color: #9f9f9;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
`;

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <AboutSection>
      <Title>About Me</Title>
      <Content>
        Hello! I'm a passionate Computer Scientist with a love for creating innovative solutions to complex problems.
        {/* Default content here */}
      </Content>
      {isExpanded && (
        <Content>
          {/* Additional content here */}
          I have a strong background in various programming languages and technologies, and I continuously strive to learn and grow in my field. In my spare time, I enjoy contributing to open source projects and exploring the latest advancements in technology.
        </Content>
      )}
      <Button onClick={handleToggle}>
        {isExpanded ? 'Show Less' : 'Learn More'}
      </Button>
    </AboutSection>
  );
};

export default About;

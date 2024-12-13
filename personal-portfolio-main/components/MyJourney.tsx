import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const JourneyWrapper = styled.section`
  padding: 60px 20px;
  background: #f9f9f9;
`;

const JourneyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s ease-in-out;
`;

const JourneyItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const Date = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #0070f3;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  max-width: 600px;
  color: #666;
`;

const journeyData = [
  { date: '2021', title: 'Started my Bachelor’s in Computer Science', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.' },
  { date: '2022', title: 'Internship at XYZ Company', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.' },
  { date: '2023', title: 'Graduated with Bachelor’s Degree', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.' },
  { date: '2024', title: 'Started my Master’s in Computer Science', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.' },
];

const MyJourney = () => {
  return (
    <JourneyWrapper>
      <JourneyContainer>
        {journeyData.map((item) => (
          <JourneyItem key={item.date}>
            <Date>{item.date}</Date>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
          </JourneyItem>
        ))}
      </JourneyContainer>
    </JourneyWrapper>
  );
};

export default MyJourney;

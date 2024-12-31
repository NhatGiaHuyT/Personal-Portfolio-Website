import React from 'react';
import styled from 'styled-components';

const SkillsWrapper = styled.section`
  padding: 60px 20px;
  background: inherit;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`;

const SkillName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ProgressBar = styled.div`
  width: 100%;
  background: #808080;
  border-radius: 10px;
  overflow: hidden;
`;

const Progress = styled.div<{ width: number }>`
  width: ${({ width }) => width}%;
  background: #C6426E;
  height: 20px;
  border-radius: 10px;
  transition: width 0.3s ease;
`;

const skillsData = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'CSS', level: 70 },
];

const Skills = () => {
  return (
    <SkillsWrapper>
      <SkillsContainer>
        {skillsData.map((skill) => (
          <Skill key={skill.name}>
            <SkillName>{skill.name}</SkillName>
            <ProgressBar>
              <Progress width={skill.level} />
            </ProgressBar>
          </Skill>
        ))}
      </SkillsContainer>
    </SkillsWrapper>
  );
};

export default Skills;

import Image from 'next/image';
import styled from 'styled-components';

const ProjectsWrapper = styled.section`
  padding: 60px 20px;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const ProjectImage = styled(Image)`
  border-radius: 8px;
`;

const Projects = () => {
  return (
    <ProjectsWrapper>
      <Title>My Projects</Title>
      <ProjectsGrid>
        <ProjectCard>
          <ProjectImage src="/images/project1.jpg" alt="Project 1" width={500} height={300} loading="lazy" />
          <ProjectTitle>Project 1</ProjectTitle>
          <ProjectDescription>
            Description of Project 1.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="/images/project2.jpg" alt="Project 2" width={500} height={300} loading="lazy" />
          <ProjectTitle>Project 2</ProjectTitle>
          <ProjectDescription>
            Description of Project 2.
          </ProjectDescription>
        </ProjectCard>
        {/* Add more ProjectCards as needed */}
      </ProjectsGrid>
    </ProjectsWrapper>
  );
};

export default Projects;

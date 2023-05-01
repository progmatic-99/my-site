import { Heading, SimpleGrid, GridItem, VStack } from '@chakra-ui/react';
import { Project } from '@/types/project';
import ProjectCard from 'components/project-card';

type Props = {
  projects: Project[]
}

const ProjectsSection = ({ projects }: Props) => {
  return (
    <VStack as="section" alignItems="flex-start" w="full" spacing={4}>
      <Heading size="md">Recent projects.</Heading>
      <SimpleGrid
        rowGap={8}
        columnGap={12}
        w="full"
        columns={{ base: 1, md: 2 }}
        spacing={6}
      >
        {projects.map((project) => (
          <GridItem key={project.url} as="article">
            <ProjectCard {...project} />
          </GridItem>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default ProjectsSection;
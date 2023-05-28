import * as React from 'react';
import { Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import OsCard from 'components/os-card';
import { Repository } from '@/types/repository'

type Props = {
  repositories: Repository[]
}

function OsSection({ repositories }: Props) {
  return (
    <VStack as="section" alignItems="flex-start" w="full" spacing={4}>
      <Heading size="md">Open Source Contributions.</Heading>
      <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
        {repositories.map((repo, index) => (
          <OsCard
            key={index}
            title={repo.repoName}
            description={repo.description}
            url={`https://github.com/${repo.repoName}`}
            commits={repo.commits}
            pullRequests={repo.pullRequests}
            language={repo.language}
            issues={repo.issues}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default OsSection;
import { Heading, SimpleGrid, GridItem, VStack, Spinner } from '@chakra-ui/react';
import { Suspense } from 'react'

import { Video } from '@/types/video';
import VideoCard from '../video-card';

type Props = {
  videos: Video[];
};

const VideosSection = ({ videos }: Props) => {
  return (
    <VStack as="section" alignItems="flex-start" w="full" spacing={4}>
      <Heading size="md">Recent videos.</Heading>
      <Suspense fallback={<Spinner color="purple.600" />}>
        <SimpleGrid
          rowGap={8}
          columnGap={12}
          w="full"
          columns={{ base: 1, md: 2 }}
          spacing={6}
        >
          {videos.map((video) => (
            <GridItem key={video.url} as="article">
              <VideoCard {...video} />
            </GridItem>
          ))}
        </SimpleGrid>
      </Suspense>
    </VStack >
  );
};

export default VideosSection;
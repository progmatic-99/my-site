import Link from 'next/link';
import {
  LinkBox,
  LinkOverlay,
  Heading,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { format } from 'timeago.js';

import { BlogPost } from '@/types/blog-post';

const BlogPostCard = ({
  title,
  brief,
  slug,
  dateAdded,
  totalReactions,
}: BlogPost) => {
  return (
    <LinkBox as='article'>
      <VStack
        alignItems='stretch'
        w='full'
        p={{ base: 0, md: 4 }}
        _hover={{
          bg: 'gray.100',
          transform: 'scale(1.025, 1.025)',
        }}
        _dark={{
          _hover: {
            bg: 'gray.700',
          },
        }}
        rounded='md'
        transitionDuration='slow'
        transitionProperty='all'
        transitionTimingFunction='ease-out'
      >
        <VStack alignItems='flex-start'>
          <Heading size='md'>
            <LinkOverlay as={Link} href={`https://blog.progmatic99.xyz/${slug}`}>
              {title}
            </LinkOverlay>
          </Heading>
          <HStack
            divider={
              <Text mx={2} color='gray.500'>
                •
              </Text>
            }
          >
            <Text color='gray.500' fontSize='sm'>
              {format(dateAdded)}
            </Text>
            <Text color='gray.500' fontSize='sm'>
              {totalReactions}👋 🤙 💪
            </Text>
          </HStack>
        </VStack>
        <Text color='gray.500' fontSize='sm'>
          {brief}
        </Text>
      </VStack>
    </LinkBox>
  );
};

export default BlogPostCard;
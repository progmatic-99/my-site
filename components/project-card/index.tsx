import {
  AspectRatio,
  Button,
  Flex,
  Icon,
  Image,
  LinkBox,
  LinkOverlay,
  Heading,
  Text,
  VStack,
  HStack,
  useColorMode as mode,
} from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi'
import { HiPlay } from 'react-icons/hi';
import Link from '../link';
import { Project } from '@/types/project';


const ProjectCard = ({
  title,
  url,
  description,
  repoUrl,
  img
}: Project) => {
  return (
    <LinkBox zIndex='dropdown'>
      <VStack alignItems='flex-start' spacing={4}>
        <AspectRatio
          position='relative'
          overflow='hidden'
          w='full'
          ratio={16 / 9}
          role='group'
          rounded='lg'
        >
          <>
            <LinkOverlay href={url} target='_blank'>
              <Flex
                position='absolute'
                zIndex='docked'
                align='center'
                justify='center'
                bg='transparent'
                _groupHover={{ bg: 'blackAlpha.500' }}
                inset={0}
                transitionDuration='slow'
                transitionProperty='background'
                transitionTimingFunction='ease-out'
              >
                <Icon
                  as={HiPlay}
                  w={{ base: 12, md: 8 }}
                  h={{ base: 12, md: 8 }}
                  color='white'
                  opacity={0}
                  _groupHover={{ opacity: 1 }}
                  transitionDuration='slow'
                  transitionProperty='opacity'
                  transitionTimingFunction='ease-out'
                />
              </Flex>
            </LinkOverlay>
            <Image
              alt={`Thumbnail of ${title}`}
              src={img}
              width={360}
              height={202}
              objectFit='cover'
            />
          </>
        </AspectRatio>
        <VStack alignItems='flex-start' spacing={2}>
          <Link href={url} isExternal>
            <Heading size='md'>{title}</Heading>
          </Link>
          <Text color='gray.500' fontSize='sm'>
            {description}
          </Text>

          <HStack spacing={3}>
            <Button
              variant='ghost'
              key="Live Site"
              as={Link}
              color={"purple.600" || mode('black', 'white')}
              href={url}
              rightIcon={<Icon as={FiArrowUpRight} />}
            >
              Live Site
            </Button>

            <Button
              variant='ghost'
              key="Live Site"
              as={Link}
              color={"blue.300" || mode('black', 'white')}
              href={repoUrl}
              rightIcon={<Icon as={FiArrowUpRight} />}
            >
              Github repo
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </LinkBox>
  );
};

export default ProjectCard;
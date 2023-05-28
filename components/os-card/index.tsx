import * as React from 'react';
import {
  Box,
  useColorMode as mode,
  useColorModeValue,
  VStack,
  Text,
  HStack,
  Tag,
  Icon,
  Flex,
  Tooltip,
  Stat,
  StatLabel,
  Heading,
  StatNumber,
  StatGroup,
} from '@chakra-ui/react';
import { BiGitPullRequest, BiGitCommit } from 'react-icons/bi';
import { AiOutlineIssuesClose } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

interface RepositoryCardProps {
  title: string;
  description: string;
  url: string;
  issues: number;
  commits: number;
  pullRequests: number;
  language: string
}

function OsCard(props: RepositoryCardProps) {
  const { title, description, issues, url, commits, pullRequests, language } = props;

  const handleLinkClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>, link: string) => {
    window.open(link);
    e.stopPropagation();
  };

  return (
    <Box
      size="xl"
      py={2}
      px={[2, 4]}
      mt={2}
      rounded="xl"
      borderWidth="1px"
      bg={useColorModeValue('white', 'gray.800')}
      borderColor={useColorModeValue('gray.100', 'gray.700')}
      _hover={{
        shadow: 'lg',
        textDecoration: 'none'
      }}
    >
      <VStack overflow="hidden" spacing={2}>
        <VStack spacing={4} align="start" w="100%">
          <Flex
            justifyContent="space-between"
            width="100%"
            onClick={(e) => handleLinkClick(e, url)}
          >
            <Tooltip hasArrow label="Open Github repo in new tab" placement="top">
              <HStack cursor="pointer">
                <Icon as={FiGithub} fontSize="md" mt="2px" />
                <Heading size="sm">
                  {title}
                </Heading>
              </HStack>
            </Tooltip>
          </Flex>
          <Flex justifyContent="space-between" width="100%">
            <Box>
              <HStack spacing="1">
                <Tag size="sm" colorScheme="blue">
                  <Text fontSize={['0.55rem', 'inherit', 'inherit']}>{language}</Text>
                </Tag>
              </HStack>
            </Box>
          </Flex>
        </VStack>
        <Box>
          <Text color="gray.500" fontSize="sm" noOfLines={2} textAlign="left">
            {description}
          </Text>
        </Box>
        <HStack spacing="2">
          <VStack spacing="2">
            <Heading size="sm">PRs Merged</Heading>
            <Heading size="md" color={"purple.600"}>{pullRequests} <Icon as={BiGitPullRequest} /></Heading>
          </VStack>
          <VStack spacing="2">
            <Heading size="sm">Issues Opened</Heading>
            <Heading size="md" color={"purple.600"}>{issues} <Icon as={AiOutlineIssuesClose} /></Heading>
          </VStack>
          <VStack spacing="2">
            <Heading size="sm">Commits Made</Heading>
            <Heading size="md" color={"purple.600"}>{commits} <Icon as={BiGitCommit} /></Heading>
          </VStack>
        </HStack>
      </VStack>
    </Box >
  );
};

export default OsCard;
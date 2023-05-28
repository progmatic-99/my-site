import { Link, Heading, HStack, Icon, Stack, Text, VStack, Button, useColorModeValue as mode } from '@chakra-ui/react'
import { readData } from '@/utils/read-data'
import { FiArrowUpRight } from 'react-icons/fi'
import { TWITTER, LKDN, GH } from '../constants'
import { Video } from '@/types/video'
import { BlogPost } from '@/types/blog-post'
import { Project } from '@/types/project'
import { Repository } from '@/types/repository'
import HeroImage from 'components/hero-image'
import HeroPlay from 'components/hero-play'
import VideosSection from 'components/video-section'
import BlogpostsSection from 'components/blogposts-section'
import ProjectsSection from 'components/projects-section'
import OsSection from 'components/os-section'
import { getBlogPosts } from '@/utils/get-blog-posts'
import { getGithubStats } from '@/utils/get-gh-stats'


type SocialLink = {
  href: string
  label: string
  color?: string
}

type Props = {
  videos: Video[]
  posts: BlogPost[]
  projects: Project[]
  repositories: Repository[]
}

const socialLinks: SocialLink[] = [
  {
    href: TWITTER,
    label: 'Twitter',
    color: 'blue.300'
  },
  {
    href: GH,
    label: 'GitHub'
  },
  {
    href: LKDN,
    label: 'LinkedIn',
    color: 'purple.600'
  }
]

export default function Home({ videos, posts, projects, repositories }: Props) {
  return (
    <VStack spacing={20}>
      <Stack className="check-hydration" alignItems="center" as='section' w='full' spacing={12} direction={{ base: 'column-reverse', md: 'row' }}>
        <VStack spacing={3} alignItems="flex-start" justifyItems="flex-start" w='full'>
          <HStack spacing={3}>
            <Heading size="lg">Hi, this is progmatic99.</Heading>
            <HeroPlay />
          </HStack>
          <Text lineHeight='175%'>
            I am a fullstack developer, <strong>Open Source contributor.</strong>
            {' '}Active volunteer at PyDelhi community.
            Sometimes, I write blogs too.
          </Text>
          <HStack spacing={3}>
            {socialLinks.map(({ href, label, color }) => {
              return (
                <Button
                  variant='ghost'
                  key={label}
                  as={Link}
                  color={color || mode('black', 'white')}
                  href={href}
                  rightIcon={<Icon as={FiArrowUpRight} />}
                >
                  {label}
                </Button>)
            })
            }
          </HStack>
        </VStack>
        <HeroImage />
      </Stack>
      <OsSection repositories={repositories} />
      <ProjectsSection projects={projects} />
      <BlogpostsSection posts={posts} />
      <VideosSection videos={videos} />
    </VStack>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { videos } = await readData<{ videos: Video[] }>('data/videos.json');
  const { projects } = await readData<{ projects: Project[] }>('data/projects.json');

  const data = await getBlogPosts();
  const stats = await getGithubStats()

  const posts = data?.data?.user?.publication?.posts;

  const props: Props = {
    videos: videos.slice(0, 4),
    projects: projects,
    posts: posts,
    repositories: stats.repositories
  };

  return {
    props,
  };
};
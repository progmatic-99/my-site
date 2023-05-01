import { Heading, VStack, List, ListItem, Icon, Box } from "@chakra-ui/react";
import { CgArrowRight } from "react-icons/cg";

import { BlogPost } from "@/types/blog-post";
import BlogPostCard from "components/blog-post-card";
import Link from "components/link";
import { BLOG } from '../../constants';

type Props = {
  posts: BlogPost[];
};

const BlogpostsSection = ({ posts }: Props) => {
  return (
    <VStack as="section" alignItems="flex-start" w="full" spacing={4}>
      <Heading size="md">Recent blog posts...</Heading>
      <List w="full" spacing={{ base: 8, md: 2 }}>
        {posts.map((post) => (
          <ListItem key={post.slug}>
            <BlogPostCard {...post} />
          </ListItem>
        ))}
      </List>
      <Box>
        <Link
          display="flex"
          alignItems="center"
          href={BLOG}
          target="_blank"
          ml={{ base: 0, md: 4 }}
          role="group"
          isExternal
        >
          Read all articles
          <Icon
            as={CgArrowRight}
            ml={1}
            color="purple.500"
            _groupHover={{ ml: 3 }}
            transitionDuration="slow"
            transitionProperty="margin-left"
            transitionTimingFunction="ease-out"
          />
        </Link>
      </Box>
    </VStack>
  );
};

export default BlogpostsSection;
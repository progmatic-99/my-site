import { AspectRatio, Box, Image, Flex } from "@chakra-ui/react";

const HeroImage = () => {
  return (
    // <AspectRatio flexShrink={0} ratio={1} w={56} h={56}>
    //   <Image src="/my-site-gif.gif" alt="A gif of progmatic99" rounded="full" />
    // </AspectRatio>
    <Flex position='relative' justify='center' pb={4}>
      <AspectRatio as='figure' flexShrink={0} w={56} h={56}>
        <Box overflow='hidden' rounded='full'>
          <Image
            alt='A photo of progmatic99'
            src='/new-gif.gif'
            objectFit='contain'
          />
        </Box>
      </AspectRatio>
    </Flex>
  )
}

export default HeroImage;
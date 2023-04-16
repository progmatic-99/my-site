import { Link, Heading, HStack, Icon, IconButton, Stack, Text, VStack, Button, useColorModeValue as mode } from '@chakra-ui/react'
import { HiPlay } from 'react-icons/hi'
import { FiArrowUpRight } from 'react-icons/fi'
import { TWITTER, YT, LKDN, GH } from '../constants'
import HeroImage from 'components/hero-image'

type SocialLink = {
  href: string
  label: string
  color?: string
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

export default function Home() {
  return (
    <VStack spacing={20}>
      <Stack alignItems="center" as='section' w='full' spacing={12} direction={{ base: 'column-reverse', md: 'row' }}>
        <VStack spacing={3} alignItems="flex-start" justifyItems="flex-start" w='full'>
          <HStack spacing={3}>
            <Heading size="lg">Hi, this is progmatic99.</Heading>
            <IconButton
              aria-label='Play intro song'
              icon={<Icon color="purple.500" as={HiPlay} p={0} w={6} h={6} />}
              variant="unstyled"
              rounded="full"
              size="xs"
            />
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
    </VStack>
  )
}

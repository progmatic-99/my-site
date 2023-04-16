import { chakra, Divider, Link, Stack, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import { useRouter } from "next/router"

import {
  TWITTER,
  GH,
  LKDN,
  YT,
} from "../../constants"

const firstGroup = [{
  href: "/",
  label: "Home"
},
{
  href: "/blog",
  label: "Blog"
}]

const secondGroup = [
  {
    "href": TWITTER,
    "label": "Twitter"
  },
  {
    "href": GH,
    "label": "Github"
  },
  {
    "href": YT,
    "label": "YouTube"
  },
  {
    "href": LKDN,
    "label": "LinkedIn"
  }
]

const Footer = () => {
  const { pathname } = useRouter()

  return (
    <VStack pt={16} pb={8} spacing={8}>
      <Divider />
      <Stack direction={{ base: "column", md: "row" }} justifyContent="space-between" w="full" spacing={8}>
        <VStack alignItems="flex-start">
          {firstGroup.map(({ href, label }) => {
            return (
              <NextLink key={label} href={href} passHref>
                <Link color={pathname === href ? "purple.500" : "gray.500"}>{label}</Link>
              </NextLink>
            )
          })}
        </VStack>
        <VStack alignItems="flex-start">
          {secondGroup.map(({ href, label }) => {
            return (
              <NextLink key={label} href={href} passHref>
                <Link isExternal target="_blank" color={pathname === href ? "purple.500" : "gray.500"}>{label}</Link>
              </NextLink>
            )
          })}
        </VStack>
      </Stack>
      <Stack
        alignItems='center'
        justifyContent={{ base: 'center' }}
        direction={{ base: 'column', md: 'row' }}
        gridRowGap={4}
        w='full'
        spacing={0}
      >
        <Text color='gray.500' fontSize='sm'>
          ©progmatic99{' '}
          <chakra.span as='time' color='purple.500'>
            {new Date().getFullYear()}
          </chakra.span>
        </Text>
      </Stack>
    </VStack>
  )
}

export default Footer
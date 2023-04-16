import { Button, Heading, HStack, IconButton, useColorMode } from "@chakra-ui/react"
import { IoMoon, IoSunny } from "react-icons/io5"
import NextLink from "next/link"
import { Link } from "@chakra-ui/react"

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack as="nav" justifyContent="space-between" w="full" alignItems="center" py="4">
      <NextLink href="/" passHref>
        <Link>
          <Heading size="sm">
            progmatic99.
          </Heading>
        </Link>
      </NextLink>
      <HStack alignItems="center" spacing={{ base: 0, md: 2 }}>
        <NextLink href="/" passHref>
          <Button _hover={{ textDecoration: "none" }} as={Link} size="md" variant="ghost">Talks</Button>
        </NextLink>
        <NextLink href="/" passHref>
          <Button as={Link} _hover={{ textDecoration: "none" }} size="md" variant="ghost">Blog</Button>
        </NextLink>
        <IconButton aria-label="toggle theme" icon={colorMode === "dark" ? <IoMoon /> : <IoSunny />} variant="ghost" onClick={toggleColorMode} />
      </HStack>
    </HStack>
  )
}

export default Header
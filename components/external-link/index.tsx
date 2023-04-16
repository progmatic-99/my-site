import { Link, LinkProps, Icon, useColorModeValue as mode } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'

const ExternalLink = ({ children, ...linkProps }: LinkProps) => {
  return (
    <Link {...linkProps} color="purple.500" display="inline-flex" target="_blank" isExternal>
      {children}
      <Icon as={FiArrowUpRight} color=mode("gray.700", "white") display="inline" />
    </Link>
  )
}

export default ExternalLink
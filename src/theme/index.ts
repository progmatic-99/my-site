import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  global: {
    Heading: {
      baseStyle: {
        color: 'gray.700'
      },
      Text: {
        baseStyle: {
          color: 'gray.700'
        }
      }
    }
  },
  font: {
    heading: `Poppins, ${base.fonts.heading}`,
    body: `Inter, ${base.fonts.body}`
  }
})

export default theme
import { ChakraProvider } from '@chakra-ui/react'
import Layout from 'components/layout'
import type { AppProps } from 'next/app'

import theme from "../src/theme"
import "../style.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

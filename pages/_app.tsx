import { ChakraProvider, Spinner } from '@chakra-ui/react'
import Layout from 'components/layout'
import type { AppProps } from 'next/app'
import { Suspense } from 'react'


import theme from "../src/theme"
import "../style.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<Spinner color="purple.600" />}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Suspense>
  )
}

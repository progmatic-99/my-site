import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Container } from '@chakra-ui/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>progmatic99.xyz</title>
        <meta name="description" content="This is progmatic99's personal website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container pt={6}>

      </Container>
    </>
  )
}

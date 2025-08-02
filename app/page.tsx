import Head from 'next/head'
import { Box } from '@mui/material'

import Footer from '@components/Footer'
import Navigation from '@components/Navigation'
import History from '@features/History'
import Introduction from '@features/Introduction'
import Tools from '@features/Tools'
import Connect from '@features/Connect'

const Home = () => {
  return (
    <main>
      <Head>
        <title>Kendrick De La Pena</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Navigation />
        <Introduction />
        <Tools />
        <History />
        <Connect />
      </Box>
      <Footer />
    </main>
  )
}

export default Home

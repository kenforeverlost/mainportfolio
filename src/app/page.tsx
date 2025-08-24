import Head from 'next/head'

import Hero from '@features/Hero'
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
      <Hero />
      <Introduction />
      <Tools />
      <History />
      <Connect />
    </main>
  )
}

export default Home

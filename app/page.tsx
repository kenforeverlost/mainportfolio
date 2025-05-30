'use client'

import Head from 'next/head'

import Footer from '@components/Footer'
import Navigation from '@components/Navigation'
import History from '@features/History'
import Introduction from '@features/Introduction'
import Tools from '@features/Tools'
import Connect from '@features/Connect'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Kendrick De La Pena</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-gray-100 min-h-screen">
        <Navigation />
        <div className="w-full">
          <Introduction />
          <Tools />
          <History />
          <Connect />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home

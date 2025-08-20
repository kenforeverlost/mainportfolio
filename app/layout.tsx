import type { Metadata } from 'next'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import './globals.css'

import Footer from '@components/Footer'
import Navigation from '@components/Navigation'
import defaultTheme from '@lib/theme'

// TODO: Fix metadata and how to change on subsequent pages

export const metadata: Metadata = {
  title: 'Kendrick De La Pena',
  description: 'Portfolio Website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

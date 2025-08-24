import type { Metadata } from 'next'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import './globals.css'

import Footer from '@components/Footer'
import Navigation from '@components/Navigation'
import defaultTheme from '@lib/theme'

export const metadata: Metadata = {
  title: 'Kendrick De La Pena',
  description:
    'Portfolio of Kendrick De La Pena, a full stack software engineer specializing in JavaScript, React, Next.js, and database-driven applications. Over 10 years of experience delivering scalable, client-focused solutions.',
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

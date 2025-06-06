import type { Metadata } from 'next'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import './globals.css'

import defaultTheme from '@lib/theme'

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

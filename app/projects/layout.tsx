import React, { ReactNode } from 'react'
import type { Metadata } from 'next'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import '../globals.css'

import defaultTheme from '@lib/theme'

type ProjectsLayoutProps = {
  modal: ReactNode
  all: ReactNode
  children?: ReactNode
}

const metadata: Metadata = {
  title: 'KDLP Projects',
  description: 'Project Hub',
}

export default function ProjectsLayout({
  modal,
  all,
  children,
}: ProjectsLayoutProps) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          {modal}
          {children}
          {all}
        </ThemeProvider>
      </body>
    </html>
  )
}

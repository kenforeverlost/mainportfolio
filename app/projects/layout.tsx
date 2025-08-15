import React, { ReactNode } from 'react'
import type { Metadata } from 'next'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import '../globals.css'

import defaultTheme from '@lib/theme'
import Section from '@components/container/Section'

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
          <Section id="projects-home">
            {children}
            {all}
          </Section>
        </ThemeProvider>
      </body>
    </html>
  )
}

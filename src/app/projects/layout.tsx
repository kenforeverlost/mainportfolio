import React, { ReactNode } from 'react'
import type { Metadata } from 'next'
import '../globals.css'

import Section from '@components/container/Section'

type ProjectsLayoutProps = {
  modal: ReactNode
  all: ReactNode
  children?: ReactNode
}

export const metadata: Metadata = {
  title: 'KDLP Projects',
  description:
    'A showcase of projects by Kendrick De La Pena, highlighting skills in full stack development, JavaScript, React, Next.js, and more.',
}

export default function ProjectsLayout({
  modal,
  all,
  children,
}: ProjectsLayoutProps) {
  return (
    <>
      {modal}
      <Section id="projects-home">
        {children}
        {all}
      </Section>
    </>
  )
}

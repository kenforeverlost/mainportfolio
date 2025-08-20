import React, { ReactNode } from 'react'
import type { Metadata } from 'next'
import '../globals.css'

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
    <>
      {modal}
      <Section id="projects-home">
        {children}
        {all}
      </Section>
    </>
  )
}

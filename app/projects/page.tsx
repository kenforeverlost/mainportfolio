import React from 'react'
import { Box, Typography } from '@mui/material'

import Section from '@components/container/Section'
import MainBreadcrumbs from '@components/MainBreadcrumbs'

export default function ProjectsHome() {
  // TODO: Create hero section

  return (
    <Section id={'projects-home'}>
      <MainBreadcrumbs crumbs={[{ label: 'Projects' }]} />
      <Box>
        <Typography variant="h1" sx={{ marginBottom: 2 }}>
          Projects Hub
        </Typography>
      </Box>
    </Section>
  )
}

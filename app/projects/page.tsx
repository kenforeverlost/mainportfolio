import React from 'react'
import { Box, Typography } from '@mui/material'

import Section from '@components/container/Section'

export default function ProjectsHome() {
  // TODO: Create hero section

  return (
    <Section id={'projects-home'}>
      <Box>
        <Typography variant="h1" sx={{ marginBottom: 2 }}>
          Projects Hub
        </Typography>
      </Box>
    </Section>
  )
}

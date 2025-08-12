import React from 'react'
import Link from 'next/link'
import { Box, Typography, Button } from '@mui/material'

import Section from '@components/container/Section'

export default function ProjectsSlug() {
  // TODO: Format and style
  return (
    <Section id={'projects-slug'}>
      <Box>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Project: slug
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          Full project details would be displayed here.
        </Typography>
        <Button variant="contained" component={Link} href="/projects">
          Back to Projects
        </Button>
      </Box>
    </Section>
  )
}

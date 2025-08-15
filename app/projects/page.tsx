import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import MainBreadcrumbs from '@components/MainBreadcrumbs'

export default function ProjectsHome() {
  return (
    <>
      <MainBreadcrumbs crumbs={[{ label: 'Projects' }]} />
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4,
            maxWidth: 'md',
            textAlign: 'center',
          }}
        >
          <Typography variant="h1">From Challenges to Solutions</Typography>
          <Typography variant="body1">
            Every project here began with a clear need or an opportunity to fill
            a gap. Drawing on my experience and technical skill, I built
            applications that are efficient and carefully designed.
          </Typography>
        </Box>
      </Stack>
    </>
  )
}

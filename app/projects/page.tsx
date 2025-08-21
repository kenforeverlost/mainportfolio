import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import MainBreadcrumbs from '@components/MainBreadcrumbs'
import { firaCode } from '@lib/fonts'

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
          <Typography variant="h1" fontFamily={firaCode.style.fontFamily}>
            From Challenges to Solutions
          </Typography>
          <Typography variant="body1">
            Every project I completed began with a clear need or an opportunity
            to fill a gap. Using my experience and technical skills, I built
            applications that are thoughtfully designed.
          </Typography>
        </Box>
      </Stack>
    </>
  )
}

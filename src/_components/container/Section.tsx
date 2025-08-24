import React from 'react'
import { Box, Container, Stack } from '@mui/material'

import { SectionProps } from '@lib/types'

const Section = (props: SectionProps) => {
  return (
    <Box
      {...props}
      sx={{
        scrollMarginTop: '64px',
        position: 'relative',
        width: 1,
        ...props.sx,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          paddingX: 4,
          paddingY: 8,
        }}
      >
        <Stack sx={{ direction: 'column', gap: 4 }}>{props.children}</Stack>
      </Container>
    </Box>
  )
}

export default Section

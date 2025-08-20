import React from 'react'
import { Box, Container, Stack } from '@mui/material'

import { SectionProps } from '@lib/types'

const Section = ({
  id,
  backgroundColor,
  wholeScreen,
  children,
}: SectionProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: backgroundColor ?? 'transparent',
        width: 1,
        ...(wholeScreen && {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100dvh - 80px)',
        }),
      }}
    >
      <Container
        id={id}
        maxWidth="lg"
        sx={{
          scrollMarginTop: '64px',
          paddingX: 4,
          paddingY: 8,
        }}
      >
        <Stack sx={{ direction: 'column', gap: 4 }}>{children}</Stack>
      </Container>
    </Box>
  )
}

export default Section

'use client'

import React from 'react'
import { Container, Stack, Typography } from '@mui/material'

interface Props {
  id: string
  title: string
  caption?: string
  backgroundColor?: string
  children: React.ReactNode
}

const ProfileSection = ({
  id,
  title,
  caption,
  backgroundColor,
  children,
}: Props) => {
  return (
    <Stack
      sx={{
        background: backgroundColor ?? 'transparent',
        width: 1,
      }}
    >
      <Container
        id={id}
        maxWidth="lg"
        sx={{
          paddingX: 3,
          paddingY: 7,
        }}
      >
        <Stack sx={{ direction: 'column', gap: 5 }}>
          <Stack sx={{ direction: 'column', gap: 2 }}>
            <Typography variant="h4" fontWeight={'bold'}>
              {title}
            </Typography>
            {caption && <Typography variant="body1">{caption}</Typography>}
          </Stack>
          {children}
        </Stack>
      </Container>
    </Stack>
  )
}

export default ProfileSection

import React from 'react'
import { Stack, Typography } from '@mui/material'

import Section from '@components/container/Section'
import { ProfileSectionProps } from '@lib/types'

const ProfileSection = ({
  id,
  title,
  subtitle,
  description,
  backgroundColor,
  children,
}: ProfileSectionProps) => {
  return (
    <Section id={id} backgroundColor={backgroundColor}>
      <Stack sx={{ direction: 'column', gap: 2 }}>
        <Typography variant="h2">{title}</Typography>
        {subtitle && (
          <Typography variant="h3" color="secondary">
            {subtitle}
          </Typography>
        )}
        {description && <Typography variant="body1">{description}</Typography>}
      </Stack>
      {children}
    </Section>
  )
}

export default ProfileSection

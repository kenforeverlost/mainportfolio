import React from 'react'
import { Stack, Typography } from '@mui/material'

import AnimatedBox from '@components/AnimatedBox'
import Section from '@components/container/Section'
import { ProfileSectionProps } from '@lib/types'

//TODO: Remove this and just have Section. It's messing up scroll

const ProfileSection = (props: ProfileSectionProps) => {
  const { title, subtitle, description } = props
  return (
    <Section {...props}>
      <AnimatedBox duration={'text'} direction="up">
        <Stack sx={{ direction: 'column', gap: 2 }}>
          <Typography variant="h2">{title}</Typography>
          {subtitle && (
            <Typography variant="h3" color="secondary">
              {subtitle}
            </Typography>
          )}
          {description && (
            <Typography variant="body1">{description}</Typography>
          )}
        </Stack>
      </AnimatedBox>
      {props.children}
    </Section>
  )
}

export default ProfileSection

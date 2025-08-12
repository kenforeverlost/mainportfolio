'use client'

import React, { useState } from 'react'
import { Box, Grid, Stack } from '@mui/material'

import ProjectWrap from '@components/ProjectWrap'
import Section from '@components/container/Section'
import SegmentedButton from '@components/SegmentedButton'
import { PROJECTS } from '@lib/constants'
import { ProjectsType } from '@lib/types'

export default function ProjectsAll() {
  const [filter, setFilter] = useState<string>('All')

  const handleChange = (newFilter: string) => {
    setFilter(newFilter)
  }

  return (
    <Section id={'projects-all'} backgroundColor="background.secondary">
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          maxWidth: 'md',
          margin: '0 auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SegmentedButton
            label={['All', 'Work', 'Personal']}
            onChange={handleChange}
          />
        </Box>
        <Grid container spacing={4} sx={{}}>
          {PROJECTS.map((project: ProjectsType, index) => {
            if (filter && filter !== 'All' && project.category !== filter) {
              return
            } else {
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <ProjectWrap project={project} />
                </Grid>
              )
            }
          })}
        </Grid>
      </Stack>
    </Section>
  )
}

import React from 'react'
import Link from 'next/link'
import { Typography, Paper, Box, Stack, ButtonBase } from '@mui/material'

import StyledPaper from '@components/StyledPaper'
import { ProjectsType } from '@lib/types'

const ProjectWrap = ({ project }: { project: ProjectsType }) => {
  const {
    title,
    subtitle,
    timeframe,
    category,
    description,
    highlights,
    impact,
    tools,
  } = project
  const slug = title.toLocaleLowerCase().replaceAll(' ', '-')

  return (
    <StyledPaper
      sx={{
        width: 1,
        height: 1,
        borderRadius: '24px',
        overflow: 'hidden',
      }}
    >
      <ButtonBase
        href={`/projects/${slug}`}
        component={Link}
        sx={{
          height: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: 1,
          }}
        >
          <img
            src="https://placehold.co/800x600"
            alt="project-photo"
            width={800}
            height={600}
            style={{ width: '100%', height: 'auto' }}
          />
          <Stack spacing={2} sx={{ padding: 4, paddingTop: 2 }}>
            <Typography
              variant="h4"
              color="primary.main"
              fontWeight="bold"
              textAlign={'center'}
            >
              {title}
            </Typography>
            <Typography variant="body1">{subtitle}</Typography>
          </Stack>
        </Box>
      </ButtonBase>
    </StyledPaper>
  )
}

export default ProjectWrap

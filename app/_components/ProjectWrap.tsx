import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Typography, Box, Stack, ButtonBase } from '@mui/material'

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
    image,
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
          <Box
            sx={{
              overflow: 'hidden',
              aspectRatio: '3/2',
              width: '100%',
              height: 'auto',
              maxHeight: '300px',
            }}
          >
            <Image
              src={image[0]}
              alt="Project Thumbnail"
              width={450}
              height={450}
            />
          </Box>
          <Stack spacing={1} sx={{ paddingX: 4, paddingY: 2 }}>
            <Typography
              variant="h4"
              color="primary.main"
              fontWeight="bold"
              textAlign={'center'}
            >
              {title}
            </Typography>
            <Typography variant="body1">
              {subtitle}.{' '}
              <Typography component={'span'} color="tertiary.main">
                #{category}
              </Typography>
            </Typography>
          </Stack>
        </Box>
      </ButtonBase>
    </StyledPaper>
  )
}

export default ProjectWrap

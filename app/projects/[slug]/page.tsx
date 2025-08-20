import React, { use } from 'react'
import { Typography, Stack } from '@mui/material'

import MainBreadcrumbs from '@components/MainBreadcrumbs'
import ProjectDetailsWrap from '@components/ProjectDetailsWrap'
import StyledPaper from '@components/StyledPaper'
import { PROJECTS } from '@lib/constants'

interface ProjectsSlugProps {
  params: Promise<{ slug: string }>
}

const ProjectsSlug = ({ params }: ProjectsSlugProps) => {
  const { slug } = use(params)

  const projectData = PROJECTS.find(
    (item) => item.title.toLocaleLowerCase().replaceAll(' ', '-') === slug,
  )

  const currentCrumb = projectData
    ? { label: projectData.title }
    : { label: 'Unknown' }

  return (
    <>
      <MainBreadcrumbs
        crumbs={[{ label: 'Projects', href: '/projects' }, currentCrumb]}
      />
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginY: 4,
        }}
      >
        {projectData ? (
          <StyledPaper
            sx={{
              paddingY: 4,
              width: 1,
            }}
          >
            <Stack>
              <ProjectDetailsWrap projectData={projectData} />
            </Stack>
          </StyledPaper>
        ) : (
          <Typography variant="h4">
            Project details could not be found!
          </Typography>
        )}
      </Stack>
    </>
  )
}

export default ProjectsSlug

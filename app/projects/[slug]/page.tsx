import React, { use } from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import { Typography, Stack } from '@mui/material'

import MainBreadcrumbs from '@components/MainBreadcrumbs'
import ProjectDetailsWrap from '@components/ProjectDetailsWrap'
import StyledPaper from '@components/StyledPaper'
import { PROJECTS } from '@lib/constants'

interface ProjectsSlugProps {
  params: Promise<{ slug: string }>
}

export const generateMetadata = async (
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { slug } = params

  const projectData = PROJECTS.find(
    (item) => item.title.toLocaleLowerCase().replaceAll(' ', '-') === slug,
  )

  return {
    title: projectData?.title
      ? `KDLP Projects - ${projectData.title}`
      : 'KDLP Projects',
  }
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
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginY: 4,
        minHeight: 'calc(100dvh - 225px)',
      }}
    >
      <MainBreadcrumbs
        crumbs={[{ label: 'Projects', href: '/projects' }, currentCrumb]}
      />
      {projectData ? (
        <StyledPaper
          sx={{
            paddingY: 4,
            width: 1,
          }}
        >
          <ProjectDetailsWrap projectData={projectData} />
        </StyledPaper>
      ) : (
        <Typography variant="h4">
          Project details could not be found!
        </Typography>
      )}
    </Stack>
  )
}

export default ProjectsSlug

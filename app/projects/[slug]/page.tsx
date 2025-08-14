import React, { use } from 'react'
import Link from 'next/link'
import { Box, Typography, Divider, Stack, ListItem } from '@mui/material'

import Section from '@components/container/Section'
import MainBreadcrumbs from '@components/MainBreadcrumbs'
import StyledChip from '@components/StyledChip'
import StyledList from '@components/StyledList'
import StyledPaper from '@components/StyledPaper'
import ToolsChipWrap from '@components/ToolsChipWrap'
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
    <Section id="projects-slug">
      <MainBreadcrumbs
        crumbs={[{ label: 'Projects', href: '/projects' }, currentCrumb]}
      />
      {projectData ? (
        <StyledPaper
          sx={{
            paddingX: 4,
            paddingY: 4,
            width: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <Stack spacing={1}>
              <Typography variant="h2">{projectData.title}</Typography>
              <Typography variant="h5">{projectData.subtitle}</Typography>
            </Stack>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <StyledChip
                variant="filled"
                color="secondary"
                label={projectData.category}
              />
              <Typography variant="h6" fontStyle={'italic'}>
                {projectData.timeframe}
              </Typography>
            </Box>
            <Typography variant="body1">{projectData.description}</Typography>
          </Box>
          <Divider sx={{ marginY: 4 }} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <Box>
              <Typography variant="h5">Highlights</Typography>
              <StyledList>
                {projectData.highlights.map((highlight, index) => (
                  <ListItem
                    key={index}
                    disableGutters
                    sx={{
                      color: 'secondary',
                      display: 'list-item',
                      listStylePosition: 'inside',
                    }}
                  >
                    {highlight}
                  </ListItem>
                ))}
              </StyledList>
            </Box>
            {projectData.impact && (
              <Stack spacing={1}>
                <Typography variant="h5">Impact</Typography>
                <Typography variant="body1">{projectData.impact}</Typography>
              </Stack>
            )}
            {projectData.url && (
              <Stack spacing={1}>
                <Typography variant="h5">Site</Typography>
                <Link href={projectData.url} target="_blank">
                  {projectData.url}
                </Link>
              </Stack>
            )}
          </Box>
          <Divider sx={{ marginY: 4 }} />
          <ToolsChipWrap
            sx={{
              color: 'primary.main',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 1,
            }}
          >
            {projectData.tools.map((tool, index) => {
              return (
                <StyledChip
                  key={index}
                  variant="outlined"
                  color="secondary"
                  label={tool}
                />
              )
            })}
          </ToolsChipWrap>
        </StyledPaper>
      ) : (
        <Typography variant="h4">
          Project details could not be found!
        </Typography>
      )}
    </Section>
  )
}

export default ProjectsSlug

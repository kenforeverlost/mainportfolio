'use client'

import React from 'react'
import { Box, Divider, Link, ListItem, Stack, Typography } from '@mui/material'

import StyledChip from '@components/StyledChip'
import StyledList from '@components/StyledList'
import ToolsChipWrap from '@components/ToolsChipWrap'
import { ProjectsType } from '@type/general'

interface ProjectsSlugModalProps {
  projectData: ProjectsType
}

const ProjectDetailsWrap = ({ projectData }: ProjectsSlugModalProps) => {
  return (
    <>
      <Stack
        spacing={1}
        sx={{
          paddingX: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'top',
            gap: 2,
          }}
        >
          <Typography variant="h2" color="secondary.dark">
            {projectData.title}
          </Typography>
          <Box sx={{ marginTop: 0.5 }}>
            <StyledChip
              variant="filled"
              color="tertiary"
              label={projectData.category}
            />
          </Box>
        </Box>
        <Typography variant="h6">{projectData.subtitle}</Typography>
        <Typography variant="body1">{projectData.timeframe}</Typography>
      </Stack>
      <Divider sx={{ marginY: 4 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          paddingX: 4,
        }}
      >
        <Stack spacing={1}>
          <Typography variant="h5">Overview</Typography>
          <Typography variant="body1">{projectData.description}</Typography>
        </Stack>
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
            <Link
              href={projectData.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {projectData.url}
            </Link>
          </Stack>
        )}
      </Box>
      <Divider sx={{ marginY: 4 }} />
      <ToolsChipWrap
        sx={{
          color: 'secondary.dark',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 1,
          paddingX: 4,
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
    </>
  )
}

export default ProjectDetailsWrap

'use client'

import React, { use } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { VscChromeClose } from 'react-icons/vsc'
import {
  Box,
  Divider,
  IconButton,
  ListItem,
  Portal,
  Stack,
  Typography,
} from '@mui/material'

import StyledChip from '@components/StyledChip'
import StyledList from '@components/StyledList'
import StyledModal from '@components/StyledModal'
import ToolsChipWrap from '@components/ToolsChipWrap'
import { PROJECTS } from '@lib/constants'

interface ProjectsSlugModalProps {
  params: Promise<{ slug: string }>
}

const ProjectsSlugModal = ({ params }: ProjectsSlugModalProps) => {
  const { slug } = use(params)

  const projectData = PROJECTS.find(
    (item) => item.title.toLocaleLowerCase().replaceAll(' ', '-') === slug,
  )

  const router = useRouter()
  const handleClose = () => {
    router.back()
  }

  return (
    <Portal>
      <StyledModal
        open
        onClose={handleClose}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            backgroundColor: 'white',
            paddingY: 4,
            maxWidth: 600,
            maxHeight: '100dvh',
            margin: '0 auto',
            borderRadius: 2,
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 0, right: 0, padding: 2 }}
          >
            <VscChromeClose />
          </IconButton>
          {projectData ? (
            <Stack sx={{ height: 1, overflow: 'auto' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  paddingX: 4,
                }}
              >
                <Stack spacing={1}>
                  <Typography variant="h2">{projectData.title}</Typography>
                  <Typography variant="h6">{projectData.subtitle}</Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column-reverse', md: 'row' },
                      justifyContent: { xs: 'flex-start', md: 'space-between' },
                      alignItems: { xs: 'left', md: 'center' },
                      gap: 2,
                    }}
                  >
                    <StyledChip
                      variant="filled"
                      color="secondary"
                      label={projectData.category}
                    />
                    <Typography variant="body1" fontStyle={'italic'}>
                      {projectData.timeframe}
                    </Typography>
                  </Box>
                </Stack>
                <Typography variant="body1">
                  {projectData.description}
                </Typography>
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  paddingX: 4,
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
                    <Typography variant="body1">
                      {projectData.impact}
                    </Typography>
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
              <Divider sx={{ marginY: 2 }} />
              <ToolsChipWrap
                sx={{
                  color: 'primary.main',
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
            </Stack>
          ) : (
            <Typography variant="h4">
              Project details could not be found!
            </Typography>
          )}
        </Box>
      </StyledModal>
    </Portal>
  )
}

export default ProjectsSlugModal

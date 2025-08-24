'use client'

import React, { use } from 'react'
import { useRouter } from 'next/navigation'
import { VscChromeClose } from 'react-icons/vsc'
import { Box, IconButton, Portal, Stack, Typography } from '@mui/material'

import ProjectDetailsWrap from '@components/ProjectDetailsWrap'
import StyledModal from '@components/StyledModal'
import StyledPaper from '@components/StyledPaper'
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
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            maxWidth: 'md',
            height: 'fit-content',
            maxHeight: 1,
            margin: '0 auto',
            borderRadius: 2,
          }}
        >
          <StyledPaper
            sx={{
              position: 'absolute',
              top: -16,
              right: -16,
              borderRadius: '50%',
              zIndex: 1,
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                padding: 1.5,
              }}
            >
              <VscChromeClose />
            </IconButton>
          </StyledPaper>
          {projectData ? (
            <Stack
              sx={{ flex: 1, minHeight: 0, overflow: 'auto', paddingY: 4 }}
            >
              <ProjectDetailsWrap projectData={projectData} />
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

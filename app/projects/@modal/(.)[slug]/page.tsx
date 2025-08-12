'use client'

import React, { use } from 'react'
import { Box, Portal, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

import RouterBackButton from '@components/RouterBackButton'
import StyledModal from '@components/StyledModal'
import { PROJECTS } from '@lib/constants'
import StyledChip from '@/app/_components/StyledChip'

type ProjectsSlugModalProps = { params: Promise<{ slug: string }> }

const ProjectsSlugModal = ({ params }: ProjectsSlugModalProps) => {
  const { slug } = use(params)

  const projectData = PROJECTS.find(
    (item) => item.title.toLocaleLowerCase().replaceAll(' ', '') === slug,
  )

  const router = useRouter()
  const handleClose = () => {
    router.back()
  }

  // TODO: Format and Style. Also add loading

  return (
    <Portal>
      <StyledModal open onClose={handleClose}>
        <Box
          sx={{
            backgroundColor: 'white',
            padding: 4,
            maxWidth: 600,
            margin: '100px auto',
            borderRadius: 2,
          }}
        >
          <Typography variant="h4">{projectData?.title}</Typography>
          <Typography variant="h5">{projectData?.subtitle}</Typography>
          <Typography variant="h6">{projectData?.timeframe}</Typography>
          <Typography variant="h6">{projectData?.category}</Typography>
          <Typography variant="body1">{projectData?.description}</Typography>
          <Typography variant="body1" sx={{ marginBottom: 4 }}>
            This is a modal view of the project details.
          </Typography>
          {projectData && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {projectData.tools.map((tool, index) => {
                return (
                  <StyledChip
                    key={index}
                    size="small"
                    variant="outlined"
                    color="secondary"
                    label={tool}
                  />
                )
              })}
            </Box>
          )}
          <RouterBackButton />
        </Box>
      </StyledModal>
    </Portal>
  )
}

export default ProjectsSlugModal

'use client'

import React from 'react'
import { Box, Typography } from '@mui/material'

import { firaCode } from '@lib/fonts'

const SiteLogo = () => {
  return (
    <Box
      sx={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        gap: 0.5,
        whiteSpace: 'nowrap',
      }}
    >
      <Typography
        variant="h3"
        component={'span'}
        color="tertiary.main"
        fontFamily={firaCode.style.fontFamily}
        fontWeight={'bold'}
      >{`>`}</Typography>
      <Typography
        variant="h3"
        color="secondary.contrastText"
        fontFamily={firaCode.style.fontFamily}
        fontWeight={'bold'}
        sx={{ letterSpacing: '0.1rem' }}
      >
        KDLP
      </Typography>
      <Typography
        variant="h3"
        component={'span'}
        color="tertiary.main"
        fontFamily={firaCode.style.fontFamily}
        fontWeight={'bold'}
        sx={{ marginTop: '-5px' }}
      >{`_`}</Typography>
    </Box>
  )
}

export default SiteLogo

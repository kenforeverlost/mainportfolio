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
        sx={{ letterSpacing: '0.1rem', paddingLeft: 0.5 }}
      >
        KDLP
      </Typography>
      <Typography
        variant="h3"
        component={'span'}
        color="tertiary.main"
        fontFamily={firaCode.style.fontFamily}
        fontWeight={'bold'}
      >{`_`}</Typography>
    </Box>
  )
}

export default SiteLogo

'use client'

import React from 'react'
import { Paper, PaperProps, styled } from '@mui/material'

const StyledPaper = styled((props: PaperProps) => (
  <Paper elevation={2} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  borderRadius: '16px',
  overflow: 'hidden',
  display: 'inline-block',
  boxShadow: theme.shadows[3],
  backdropFilter: 'blur(6px)',
}))

export default StyledPaper

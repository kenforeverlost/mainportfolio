'use client'

import React from 'react'
import { Paper, PaperProps, styled } from '@mui/material'

const StyledPaper = styled((props: PaperProps) => (
  <Paper elevation={2} {...props} />
))(({ theme }) => ({
  borderRadius: '16px',
  overflow: 'hidden',
  display: 'inline-block',
  boxShadow: '0 5px 10px rgba(0,0,0,0.4)',
  backdropFilter: 'blur(8px)',
}))

export default StyledPaper

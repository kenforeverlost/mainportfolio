'use client'

import React from 'react'
import {
  styled,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
} from '@mui/material'

const StyledToggleButtonGroup = styled((props: ToggleButtonGroupProps) => (
  <ToggleButtonGroup {...props} />
))(({ theme }) => ({
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: theme.palette.primary.main,
  borderRadius: '14px',
  overflow: 'hidden',
  gap: 0,
  padding: '2px',
  '& .MuiToggleButton-root': {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: '12px',
    minWidth: '85px',
    padding: '4px 18px',
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
      textDecoration: 'underline',
    },
  },
  '& .MuiToggleButton-root.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: '2px 1px 3px rgba(0,0,0,0.4)',
    backdropFilter: 'blur(8px)',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
      textDecoration: 'none',
    },
  },
}))

export default StyledToggleButtonGroup

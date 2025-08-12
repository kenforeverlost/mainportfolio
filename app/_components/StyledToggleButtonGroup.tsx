'use client'

import React from 'react'
import {
  styled,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
} from '@mui/material'

const StyledButtonGroup = styled((props: ToggleButtonGroupProps) => (
  <ToggleButtonGroup {...props} />
))(({ theme }) => ({
  backgroundColor: 'primary',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'primary',
  borderRadius: '50px',
  overflow: 'hidden',
  gap: 2,
  '& .MuiToggleButton-root': {
    border: '1px solid transparent',
    paddingLeft: '32px',
    paddingRight: '32px',
    /*
      backgroundColor: 'white !important',
      border: '1px solid transparent !important',
      color: '#ffffff',
      borderRadius: '15px',
      fontWeight: 500,
      maxHeight: '36px',
      '&:hover': {
        // backgroundColor: `${theme.palette.primary.light} !important`,
        textDecoration: 'underline',
      },
      padding: '0px 12px',
      */
  },
  '& .Mui-selected': {
    /*
      backgroundColor: `${theme.vars.palette.primary.main} !important`,
      border: '1px solid rgba(0, 0, 0, 0.12) !important',
      color: 'white !important',
      borderRadius: '15px',
      '&:hover': {
        backgroundColor: `${theme.palette.primary.dark} !important`,
        textDecoration: 'underline',
      },
      */
  },
}))

export default StyledButtonGroup

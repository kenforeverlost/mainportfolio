'use client'

import React from 'react'
import { Button, ButtonProps, styled } from '@mui/material'

const NavigationButton = styled((props: ButtonProps) => (
  <Button disableElevation {...props} />
))(({ theme, variant, size }) => ({
  padding: '0px 24px',
  letterSpacing: '0.05em',
  borderWidth: '1px',
  borderRadius: '16px',
  borderStyle: 'solid',
  cursor: 'pointer',
  ...(variant === 'contained'
    ? {
        borderColor: theme.palette.text.secondary,
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.text.secondary,
        '&:hover': {},
      }
    : {
        borderColor: theme.palette.text.secondary,
        color: theme.palette.text.primary,
        backgroundColor: 'transparent',
        '&:hover': {},
      }),
}))

export default NavigationButton

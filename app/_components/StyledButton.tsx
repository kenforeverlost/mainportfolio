'use client'

import React from 'react'
import { Button, ButtonProps, styled } from '@mui/material'

import { hexToRgbStr } from '@lib/helpers'

const StyledButton = styled((props: ButtonProps) => (
  <Button disableElevation {...props} />
))(({ theme, variant }) => ({
  padding: '12px 24px',
  fontSize: '1rem', // 16px
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  borderWidth: '1px',
  borderRadius: '16px',
  borderStyle: 'solid',
  boxShadow: '0 5px 10px rgba(0,0,0,0.4)',
  backdropFilter: 'blur(8px)',
  transition: 'all 0.2s ease-in-out',
  ...(variant === 'contained'
    ? {
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
          borderColor: theme.palette.secondary.main,
          color: theme.palette.primary.contrastText,
          backgroundColor: theme.palette.secondary.main,
          boxShadow: '0 5px 10px rgba(0,0,0,0.4)',
          backdropFilter: 'blur(8px)',
        },
      }
    : {
        borderColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        backgroundColor: 'transparent',
        '&:hover': {
          borderColor: theme.palette.secondary.main,
          color: theme.palette.text.primary,
          backgroundColor: `rgba(${hexToRgbStr(
            theme.palette.secondary.main,
          )}, 0.2)`,
          boxShadow: '0 5px 10px rgba(0,0,0,0.4)',
          backdropFilter: 'blur(8px)',
        },
      }),
}))

export default StyledButton

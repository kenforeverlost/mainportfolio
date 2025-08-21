'use client'

import React from 'react'
import { Button, ButtonProps, styled } from '@mui/material'

import { hexToRgbStr } from '@lib/helpers'

const StyledButton = styled((props: ButtonProps) => (
  <Button disableElevation {...props} />
))(({ theme, variant, size }) => ({
  padding: size === 'small' ? '8px 20px' : '12px 24px',
  fontSize: size === 'small' ? '0.875rem' : '1rem', // 14px : 16px
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  borderWidth: '1px',
  borderRadius: '16px',
  borderStyle: 'solid',
  boxShadow: '0 5px 10px rgba(0,0,0,0.4)',
  backdropFilter: 'blur(8px)',
  transition: 'all 0.2s ease-in-out',
  '& .MuiButton-endIcon': { marginLeft: '12px' },
  ...(variant === 'contained'
    ? {
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
          borderColor: theme.palette.primary.dark,
          color: theme.palette.primary.contrastText,
          backgroundColor: theme.palette.primary.dark,
          boxShadow: '0 5px 10px rgba(0,0,0,0.4)',
          backdropFilter: 'blur(8px)',
        },
      }
    : {
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.contrastText,
        '&:hover': {
          borderColor: theme.palette.primary.dark,
          color: theme.palette.primary.dark,
          backgroundColor: `rgba(${hexToRgbStr(
            theme.palette.primary.main,
          )}, 0.1)`,
          boxShadow: '0 5px 10px rgba(0,0,0,0.4)',
          backdropFilter: 'blur(8px)',
        },
      }),
}))

export default StyledButton

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
  transition: 'all 0.2s ease-in-out',
  '& .MuiButton-endIcon': { marginLeft: '12px' },
  ...(variant === 'contained'
    ? {
        borderColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        boxShadow: theme.shadows[4],
        backdropFilter: 'blur(6px)',
        '&:hover': {
          borderColor: theme.palette.secondary.dark,
          color: theme.palette.secondary.contrastText,
          backgroundColor: theme.palette.secondary.dark,
          boxShadow: theme.shadows[3],
          backdropFilter: 'blur(6px)',
        },
      }
    : {
        borderColor: theme.palette.secondary.main,
        color: theme.palette.secondary.main,
        backgroundColor: 'transparent',
        '&:hover': {
          borderColor: theme.palette.secondary.dark,
          color: theme.palette.secondary.dark,
          backgroundColor: `rgba(${hexToRgbStr(
            theme.palette.secondary.main,
          )}, 0.1)`,
        },
      }),
}))

export default StyledButton

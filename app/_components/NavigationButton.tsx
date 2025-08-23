'use client'

import React from 'react'
import { Button, ButtonProps, styled } from '@mui/material'

import { hexToRgbStr } from '@lib/helpers'

type NavigationButtonProps = ButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>

const NavigationButton = styled((props: NavigationButtonProps) => (
  <Button disableElevation {...props} />
))(({ theme, variant, size }) => ({
  padding: '0px 24px',
  letterSpacing: '0.05em',
  borderWidth: '1px',
  borderRadius: '16px',
  borderStyle: 'solid',
  cursor: 'pointer',
  boxShadow: '0 5px 10px rgba(0,0,0,0.4)',
  backdropFilter: 'blur(8px)',
  ...(variant === 'contained'
    ? {
        borderColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
          borderColor: theme.palette.secondary.dark,
          color: theme.palette.secondary.contrastText,
          backgroundColor: theme.palette.secondary.dark,
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

export default NavigationButton

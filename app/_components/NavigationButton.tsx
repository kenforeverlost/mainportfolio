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
  ...(variant === 'contained'
    ? {
        borderColor: theme.palette.tertiary.main,
        color: theme.palette.tertiary.contrastText,
        backgroundColor: theme.palette.tertiary.main,
        '&:hover': {
          borderColor: theme.palette.tertiary.light,
          color: theme.palette.tertiary.contrastText,
          backgroundColor: theme.palette.tertiary.light,
        },
      }
    : {
        borderColor: theme.palette.tertiary.main,
        color: theme.palette.tertiary.main,
        backgroundColor: 'transparent',
        '&:hover': {
          borderColor: theme.palette.tertiary.light,
          color: theme.palette.tertiary.light,
          backgroundColor: `rgba(${hexToRgbStr(
            theme.palette.tertiary.main,
          )}, 0.1)`,
        },
      }),
}))

export default NavigationButton

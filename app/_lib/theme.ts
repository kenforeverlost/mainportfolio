'use client'
import { createTheme } from '@mui/material/styles'
import { grey } from '@mui/material/colors'

const defaultTheme = createTheme({
  palette: {
    background: {
      default: '#c9d0d6',
    },
    primary: {
      main: '#00386B',
    },
    secondary: {
      main: '#0058AB',
    },
    info: {
      main: '#1869C5',
    },
    success: {
      main: '#16A111',
    },
    warning: {
      main: '#F1BD00',
    },
    error: {
      main: '#B00007',
    },
    text: {
      primary: grey[900],
      secondary: grey[50],
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    subtitle1: { fontSize: '14px' },
    subtitle2: { fontSize: '12px' },
  },
})

export default defaultTheme

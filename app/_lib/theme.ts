'use client'

import { createTheme } from '@mui/material/styles'
import { grey } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Palette {
    accent: {
      main: string
      contrastText: string
    }
  }
  interface PaletteOptions {
    accent: {
      main: string
      contrastText: string
    }
  }
  interface TypeBackground {
    secondary?: string
    tertiary?: string
  }
}

const defaultTheme = createTheme({
  palette: {
    background: {
      default: '#e3e7ea',
      secondary: '#d6dde2',
      tertiary: '#c9d0d6',
    },
    primary: {
      main: '#00386B',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#0058AB',
      contrastText: '#FFFFFF',
    },
    accent: {
      main: '#2AB090',
      contrastText: '#000000',
    },
    info: {
      main: '#1869C5',
    },
    success: {
      main: '#16A111',
    },
    warning: {
      main: '#FFB300',
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
    // Page Title
    h1: {
      fontSize: '2.5rem', // 40px
      fontWeight: 700,
      lineHeight: 1.3,
    },
    // Section Title
    h2: {
      fontSize: '2rem', // 32px
      fontWeight: 600,
      lineHeight: 1.3,
    },
    // Subsection Title
    h3: {
      fontSize: '1.75rem', // 28px
      fontWeight: 400,
      lineHeight: 1.3,
    },
    // Medium Title
    h4: {
      fontSize: '1.5rem', // 24px
      fontWeight: 700,
      lineHeight: 1.4,
    },
    // Small Title
    h5: {
      fontSize: '1.125rem', // 18px
      fontWeight: 700,
      lineHeight: 1.4,
    },
    // Label
    h6: {
      fontSize: '1rem', // 16px
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem', // 16px
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem', // 14px
      lineHeight: 1.7,
    },
    caption: {
      fontSize: '0.75rem', // 12px
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: '1rem', // 16px
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: '0.875rem', // 14px
      lineHeight: 1.5,
    },
  },
})

export default defaultTheme

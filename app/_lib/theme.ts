'use client'

import { createTheme } from '@mui/material/styles'
import { grey } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface CustomPalette {
    tertiary: {
      main: string
      light: string
      dark: string
      contrastText: string
    }
    accent: {
      main: string
      light: string
      dark: string
      contrastText: string
    }
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}

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
      light: '#4C6E91', // '#151C27'
      main: '#00386B', // '#2B3446'
      dark: '#002446', // '#0A0F18'
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#0058AB',
      light: '#4D87C5',
      dark: '#003B73',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#00A5CC',
      light: '#4CC7E0',
      dark: '#007995',
      contrastText: '#FFFFFF',
    },
    accent: {
      main: '#2AB090',
      light: '#53C7B0',
      dark: '#1C7D65',
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
      fontSize: '2.75rem', // 44px
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

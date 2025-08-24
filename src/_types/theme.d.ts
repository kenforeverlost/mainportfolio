import { createTheme } from '@mui/material/styles'

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

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    tertiary: true
    accent: true
  }
}

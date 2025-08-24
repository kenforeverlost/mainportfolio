'use client'

import { Snackbar, SnackbarProps, styled, useTheme } from '@mui/material'

const StyledSnackbar = styled((props: SnackbarProps) => {
  const theme = useTheme()
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      {...props}
    />
  )
})(({ theme }) => ({}))

export default StyledSnackbar

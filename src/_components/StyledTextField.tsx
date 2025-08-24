'use client'

import { styled, TextField, TextFieldProps, useTheme } from '@mui/material'

const StyledTextField = styled((props: TextFieldProps) => {
  const theme = useTheme()
  return (
    <TextField
      variant="outlined"
      slotProps={{
        input: {
          style: {
            fontSize: 16,
          },
        },
        inputLabel: { style: { fontSize: 16 } },
      }}
      sx={{
        '& .MuiInputLabel-root': {
          color: 'secondary.main',
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: 'primary.main',
        },
        '& .MuiInputLabel-root.Mui-error': {
          color: 'error.main',
        },
      }}
      {...props}
    />
  )
})(({ theme }) => ({
  color: theme.palette.text.primary,
}))

export default StyledTextField

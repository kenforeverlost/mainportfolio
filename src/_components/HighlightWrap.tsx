import { Box, Stack, Typography } from '@mui/material'

interface Props {
  label: string
  icon: React.ReactNode
}

const HighlightWrap = ({ label, icon }: Props) => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: { xs: 0.5, sm: 1 },
        whiteSpace: 'nowrap',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'tertiary.main',
          fontSize: { xs: '1rem', sm: '1.25rem' },
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h6"
        sx={{
          color: 'primary.contrastText',
          fontSize: { xs: '.875rem', sm: '1.125rem' },
        }}
      >
        {label}
      </Typography>
    </Stack>
  )
}

export default HighlightWrap

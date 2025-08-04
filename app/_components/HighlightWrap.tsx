import { Box, Typography } from '@mui/material'

interface Props {
  label: string
  icon: React.ReactNode
}

const HighlightWrap = ({ label, icon }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1,
        padding: '12px 24px',
        backgroundColor: 'white',
        borderRadius: '32px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'primary.main',
        minWidth: '240px',
      }}
    >
      <Box sx={{ fontSize: '1.5rem', color: 'secondary.main' }}>{icon}</Box>
      <Typography
        variant="h6"
        sx={{
          color: 'secondary.main',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </Typography>
    </Box>
  )
}

export default HighlightWrap

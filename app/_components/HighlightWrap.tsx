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
        alignItems: 'center',
        gap: 1,
        padding: { xs: '8px', sm: '12px 18px' },
        backgroundColor: 'primary.main',
        borderRadius: '32px',
        minWidth: { xs: '155px', sm: '223px' },
        boxShadow: '0 5px 10px rgba(0,0,0,0.4)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Box
        sx={{
          color: 'tertiary.main',
          display: { xs: 'none', sm: 'flex' },
          fontSize: { xs: '1rem', sm: '1.25rem' },
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h6"
        sx={{
          color: 'tertiary.contrastText',
          fontSize: { xs: '0.875rem', sm: '1rem' },
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </Typography>
    </Box>
  )
}

export default HighlightWrap

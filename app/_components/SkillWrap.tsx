import { Box, Stack, Typography } from '@mui/material'

import StyledPaper from '@components/StyledPaper'

interface Props {
  skillName: string
  type: string
  icon: React.ReactNode
}

const SkillWrap = ({ skillName, type, icon }: Props) => {
  return (
    <StyledPaper
      sx={{
        paddingX: 1,
        paddingY: 2,
        width: 1,
        maxWidth: { xs: 120, sm: 160 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 1, sm: 2 },
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            fontSize: { xs: '2rem', sm: '3rem' },
            color: 'secondary.main',
          }}
        >
          {icon}
        </Box>
        <Stack sx={{ textAlign: 'center' }}>
          <Typography
            variant="body1"
            fontSize={{ xs: '14px', sm: '16px' }}
            color="primary.main"
            fontWeight="bold"
          >
            {skillName}
          </Typography>
          <Typography
            variant="body2"
            fontSize={{ xs: '12px', sm: '14px' }}
            color="primary.main"
            fontStyle="italic"
          >
            {type}
          </Typography>
        </Stack>
      </Box>
    </StyledPaper>
  )
}

export default SkillWrap

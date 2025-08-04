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
        maxWidth: 160,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ fontSize: '3rem', color: 'secondary.main' }}>{icon}</Box>
        <Stack sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="primary.main" fontWeight="bold">
            {skillName}
          </Typography>
          <Typography variant="body2" color="primary.main" fontStyle="italic">
            {type}
          </Typography>
        </Stack>
      </Box>
    </StyledPaper>
  )
}

export default SkillWrap

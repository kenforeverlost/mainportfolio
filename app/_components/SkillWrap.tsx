import { Box, Stack, Typography } from '@mui/material'

interface Props {
  skillName: string
  type: string
  icon: React.ReactNode
}

const SkillWrap = ({ skillName, type, icon }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {icon}
      <Stack sx={{ textAlign: 'center' }}>
        <Typography variant="body1" color="primary.main" fontWeight="bold">
          {skillName}
        </Typography>
        <Typography variant="body2" color="primary.main" fontStyle="italic">
          {type}
        </Typography>
      </Stack>
    </Box>
  )
}

export default SkillWrap

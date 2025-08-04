import { Box, Grid } from '@mui/material'

import ProfileSection from '@components/ProfileSection'
import SkillWrap from '@components/SkillWrap'
import { SKILLS } from '@lib/constants'

const Tools = () => {
  return (
    <ProfileSection
      id={'skills'}
      title={'Languages, Frameworks, and More!'}
      description={`Aside from dabbling with HTML during the early MySpace days, I got my real start in programming with C++ at my university. Since then, I've added more languages, frameworks, and tools to my stack through the years.`}
      backgroundColor="background.default"
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <Grid container spacing={4}>
          {SKILLS.map((item, index) => (
            <Grid size={{ xs: 6, sm: 4, lg: 3 }} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  width: 1,
                }}
              >
                <SkillWrap
                  skillName={item.name}
                  type={item.category}
                  icon={item.icon}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ProfileSection>
  )
}

export default Tools

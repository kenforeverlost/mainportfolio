import { Box, Grid } from '@mui/material'

import ProfileSection from '@components/ProfileSection'
import SkillWrap from '@components/SkillWrap'
import { SKILLS } from '@lib/constants'

const Tools = () => {
  return (
    <ProfileSection
      id={'skills'}
      title={'Languages, Frameworks, and More!'}
      description={`Aside from dabbling with HTML during the early MySpace days, I got my real start in programming with C++ at my university. Since then, I've expanded my skill set and seek to learn even more.`}
      backgroundColor="background.default"
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <Grid
          container
          spacing={{ xs: 2, sm: 4 }}
          sx={{
            maxWidth: { xs: '272px', sm: '544px', md: '736px', lg: '1120px' },
            margin: '0 auto',
          }}
        >
          {SKILLS.map((item, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={index}>
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

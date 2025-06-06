import { Box, Grid } from '@mui/material'

import ProfileSection from '@components/ProfileSection'
import SkillWrap from '@components/SkillWrap'
import { SKILLS } from '@lib/constants'

const Tools = () => {
  return (
    <ProfileSection
      id={'skills'}
      title={'Languages, Libraries, Frameworks, and more!'}
      caption={
        'The first language I learned, aside from HTML from the early MySpace days, was C++ through my university. Since then, I have picked up more languages and other helpful tools throughout my career.'
      }
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <Grid container spacing={4}>
          {SKILLS.map((item, index) => (
            <Grid size={{ xs: 4, sm: 3, lg: 2 }} key={index}>
              <SkillWrap
                skillName={item.name}
                type={item.category}
                icon={item.icon}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </ProfileSection>
  )
}

export default Tools

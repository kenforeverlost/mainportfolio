import { Box, Grid, Typography } from '@mui/material'

import ProfileSection from '@components/ProfileSection'
import StyledPaper from '@components/StyledPaper'
import { FACTS } from '@lib/constants'

const Introduction = () => {
  return (
    <ProfileSection
      id={'about'}
      title="So About Me..."
      backgroundColor="background.secondary"
    >
      <Grid container spacing={4}>
        <Grid
          size={{ xs: 12, md: 7 }}
          order={{ xs: 2, md: 1 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body1">
            I've lived in Nevada for most of my life and proudly call myself a
            Vegas local. While I've never flown into the city "for the weekend"
            like most visitors, I've had the privilege of watching the city
            evolve — from the ever-changing skyline to the growing tech scene.
          </Typography>
          <Typography variant="body1">
            Professionally, I've created software solutions for both internal
            teams and external clients. My work spans user interface
            development, API integration, legacy system migrations, and more. I
            take care not just to write clean code, but to build systems that
            are intuitive, efficient, and scalable.
          </Typography>
          <Typography variant="body1">
            Outside of coding, I enjoy traveling, live music, video games, and
            photography. I also take part in physical activities like
            pickleball, rock climbing, and escape rooms. These hobbies inspire
            creativity and sharpen the problem-solving skills I bring to my
            work.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }} order={{ xs: 1, md: 2 }}>
          <StyledPaper
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              padding: 4,
              width: 1,
            }}
          >
            {FACTS.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: 'primary.main',
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      color: 'secondary.main',
                      display: 'inline-block',
                      fontSize: '1.5rem',
                      marginRight: 1,
                      verticalAlign: 'middle',
                    }}
                  >
                    {item.icon}
                  </Box>
                  {item.label}
                  {': '}
                  <Typography
                    component={'span'}
                    sx={{
                      color: 'secondary.main',
                    }}
                  >
                    {item.description}
                  </Typography>
                </Typography>
              </Box>
            ))}
          </StyledPaper>
        </Grid>
      </Grid>
    </ProfileSection>
  )
}

export default Introduction

import { Box, Grid, Stack, Typography } from '@mui/material'

import AnimatedBox from '@components/AnimatedBox'
import StyledPaper from '@components/StyledPaper'
import Section from '@components/container/Section'
import { VisibleProvider } from '@contexts/VisibleContext'
import { FACTS } from '@lib/constants'

const Introduction = () => {
  const delayTime = {
    title: 0.0,
    bio: 0.0,
    facts: 0.3,
  }
  return (
    <VisibleProvider>
      <Section id={'about'} sx={{ backgroundColor: 'background.secondary' }}>
        <AnimatedBox duration={'text'} direction="up" delay={delayTime.title}>
          <Stack sx={{ direction: 'column', gap: 2 }}>
            <Typography variant="h2">So About Me...</Typography>
          </Stack>
        </AnimatedBox>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 7 }} order={{ xs: 1, md: 1 }}>
            <AnimatedBox
              duration={'text'}
              delay={delayTime['bio']}
              direction="up"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Typography variant="body1">
                I've lived in Nevada for most of my life and proudly call myself
                a Vegas local. While I've never flown in "for the weekend" like
                most visitors, I've had the privilege of watching the city
                evolve — from the ever-changing skyline to the growing tech
                scene.
              </Typography>
              <Typography variant="body1">
                Professionally, I've built a variety of digital systems for both
                internal teams and external clients. I focus not just on writing
                clean code, but on creating solutions that are intuitive,
                efficient, and scalable. My work includes modernizing legacy
                applications, integrating APIs, designing engaging user
                experiences, and more.
              </Typography>
              <Typography variant="body1">
                Outside of coding, my hobbies range from traveling and
                photography to video games and escape rooms. I also enjoy
                attending concerts, playing pickleball, and rock climbing. These
                activities inspire creativity and sharpen the problem-solving
                skills I bring to my work.
              </Typography>
            </AnimatedBox>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }} order={{ xs: 2, md: 2 }}>
            <AnimatedBox
              duration={'text'}
              delay={delayTime['facts']}
              direction="up"
            >
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
                        color: 'text.primary',
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          color: 'secondary.main',
                          display: 'inline-block',
                          fontSize: '1.5rem',
                          marginRight: 1,
                          verticalAlign: 'top',
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography component={'span'} fontWeight={'bold'}>
                        {item.label}
                      </Typography>
                      : {item.description}
                    </Typography>
                  </Box>
                ))}
              </StyledPaper>
            </AnimatedBox>
          </Grid>
        </Grid>
      </Section>
    </VisibleProvider>
  )
}

export default Introduction

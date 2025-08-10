import Image from 'next/image'
import { Box, Stack, Typography } from '@mui/material'

import ConnectButton from '@components/ConnectButton'
import HighlightWrap from '@components/HighlightWrap'
import StyledPaper from '@components/StyledPaper'
import Section from '@components/container/Section'
import { HIGHLIGHTS, IMAGES } from '@lib/constants'

const Hero = () => {
  return (
    <Section id={'home'}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          gap: 8,
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          <StyledPaper sx={{ borderRadius: '50%' }}>
            <Image
              src={IMAGES.profile}
              alt="Profile Picture"
              width={450}
              height={450}
            />
          </StyledPaper>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: { xs: 'wrap', md: 'nowrap' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: { xs: 2, md: 2 },
            }}
          >
            {HIGHLIGHTS.map((highlight, index) => (
              <HighlightWrap
                key={index}
                label={highlight.label}
                icon={highlight.icon}
              />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h1">
              Engineer. Developer. Adventurer.
            </Typography>
            <Typography variant="h3" color="secondary">
              Hello! I go by Kendrick
            </Typography>
          </Stack>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <StyledPaper sx={{ borderRadius: '50%' }}>
              <Image
                src={IMAGES.profile}
                alt="Profile Picture"
                width={450}
                height={450}
              />
            </StyledPaper>
          </Box>
          <Typography variant="body1">
            I am a software engineer based in{' '}
            <Typography component="span" color="secondary" fontWeight={700}>
              Las Vegas, Nevada (Ne-VA-duh)
            </Typography>
            . With over a decade of experience developing web applications, I
            thrive on solving complex problems with creative solutions and
            building efficient tools that{' '}
            <Typography component="span" color="secondary" fontWeight={700}>
              make an impact
            </Typography>
            .
          </Typography>
          <ConnectButton />
        </Box>
      </Box>
    </Section>
  )
}

export default Hero

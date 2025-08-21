import Image from 'next/image'
import Link from 'next/link'
import { Box, BoxProps, Stack, Typography } from '@mui/material'
import { HiOutlineMail } from 'react-icons/hi'
import { LuChevronRight } from 'react-icons/lu'

import ConnectButton from '@components/ConnectButton'
import HighlightWrap from '@components/HighlightWrap'
import StyledButton from '@components/StyledButton'
import StyledPaper from '@components/StyledPaper'
import Section from '@components/container/Section'
import { HIGHLIGHTS, IMAGES } from '@lib/constants'
import { firaCode } from '@lib/fonts'

const Hero = () => {
  const PictureWithHighlights = (props: BoxProps) => (
    <Box {...props}>
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
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 1, sm: 2 },
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
  )

  return (
    <Section id={'welcome'}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          gap: 8,
        }}
      >
        <PictureWithHighlights
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h1" fontFamily={firaCode.style.fontFamily}>
              Engineer. Developer. Adventurer.
            </Typography>
            <Typography variant="h3" color="secondary">
              Hello! I go by Kendrick
            </Typography>
          </Stack>
          <PictureWithHighlights
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
            }}
          />
          <Typography variant="body1">
            I am a software engineer based in{' '}
            <Typography component="span" color="secondary" fontWeight={700}>
              Las Vegas, Nevada (Ne-VA-duh)
            </Typography>
            . With over a decade of experience making digital systems, I thrive
            on solving complex problems with creativity and developing tools
            that{' '}
            <Typography component="span" color="secondary" fontWeight={700}>
              make an impact
            </Typography>{' '}
            .
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <StyledButton
              href="/projects"
              component={Link}
              variant="contained"
              endIcon={<LuChevronRight />}
              sx={{ width: { xs: 1, sm: 'fit-content' }, whiteSpace: 'nowrap' }}
            >
              See Projects
            </StyledButton>
            <ConnectButton
              variant="outlined"
              endIcon={<HiOutlineMail />}
              sx={{ width: { xs: 1, sm: 'fit-content' }, whiteSpace: 'nowrap' }}
            >
              Get in Touch
            </ConnectButton>
          </Box>
        </Box>
      </Box>
    </Section>
  )
}

export default Hero

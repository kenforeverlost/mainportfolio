import Image from 'next/image'
import Link from 'next/link'
import { Box, BoxProps, Stack, Typography } from '@mui/material'
import { HiOutlineMail } from 'react-icons/hi'
import { LuChevronRight } from 'react-icons/lu'

import AnimatedBox from '@components/AnimatedBox'
import ConnectButton from '@components/ConnectButton'
import HighlightWrap from '@components/HighlightWrap'
import StyledButton from '@components/StyledButton'
import StyledPaper from '@components/StyledPaper'
import Section from '@components/container/Section'
import { VisibleProvider } from '@contexts/VisibleContext'
import { HIGHLIGHTS, IMAGES } from '@lib/constants'
import { firaCode } from '@lib/fonts'

const Hero = () => {
  const PictureWithHighlights = (props: BoxProps) => (
    <Box {...props}>
      <StyledPaper
        sx={{
          borderRadius: '50%',
          minWidth: { xs: 'auto', md: '475px' },
          height: 'fit-content',
        }}
      >
        <Image
          src={IMAGES.profile}
          alt="Profile Picture"
          width={450}
          height={450}
          style={{ width: '100%', height: '100%' }}
        />
      </StyledPaper>
      <Box
        sx={{
          position: { xs: 'initial', md: 'absolute' },
          bottom: -80,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 1.5, sm: 4 },
          backgroundColor: 'primary.main',
          borderRadius: '32px',
          padding: { xs: '8px 14px', sm: '12px 24px' },
          boxShadow: '0 5px 10px rgba(0,0,0,0.4)',
          backdropFilter: 'blur(8px)',
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

  const delayTime = {
    title: 0.0,
    description: 0.0,
    pictureDesktop: 0.3,
    pictureMobile: 0.3,
    button: 0.6,
  }

  return (
    <Section
      id={'welcome'}
      sx={{
        background: 'linear-gradient(to bottom,#E6EBEF, #F5F7FA)',
      }}
    >
      <VisibleProvider>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: 'center',
            gap: 8,
            minHeight: '80dvh',
          }}
        >
          <AnimatedBox
            duration={'image'}
            delay={delayTime['pictureDesktop']}
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <PictureWithHighlights
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
              }}
            />
          </AnimatedBox>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 4,
            }}
          >
            <AnimatedBox
              duration={'text'}
              delay={delayTime['title']}
              direction="up"
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              <Typography
                variant="h1"
                fontFamily={firaCode.style.fontFamily}
                color="primary.main"
              >
                Engineer. Developer. Adventurer.
              </Typography>
              <Typography variant="h3" color="tertiary.main" fontSize={'2rem'}>
                Hello! I go by Kendrick
              </Typography>
            </AnimatedBox>
            <AnimatedBox
              duration={'image'}
              delay={delayTime['pictureMobile']}
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <PictureWithHighlights
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 4,
                  width: 1,
                }}
              />
            </AnimatedBox>
            <AnimatedBox
              duration={'text'}
              delay={delayTime['description']}
              direction="up"
            >
              <Typography variant="body1">
                I am a software engineer based in Las Vegas, Nevada (Ne-VA-duh).
                With over a decade of experience making digital systems, I
                thrive on solving complex problems with creativity and
                developing tools that{' '}
                <Typography component="span" color="primary" fontWeight={700}>
                  make an impact
                </Typography>{' '}
                .
              </Typography>
            </AnimatedBox>
            <AnimatedBox duration={'text'} delay={delayTime['button']}>
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
                  sx={{
                    width: { xs: 1, sm: 'fit-content' },
                    whiteSpace: 'nowrap',
                  }}
                >
                  See Projects
                </StyledButton>
                <ConnectButton
                  variant="outlined"
                  endIcon={<HiOutlineMail />}
                  sx={{
                    width: { xs: 1, sm: 'fit-content' },
                    whiteSpace: 'nowrap',
                  }}
                >
                  Get in Touch
                </ConnectButton>
              </Box>
            </AnimatedBox>
          </Box>
        </Box>
      </VisibleProvider>
    </Section>
  )
}

export default Hero

import Image from 'next/image'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'

import ProfileSection from '@components/ProfileSection'
import StyledPaper from '@components/StyledPaper'
import { IMAGES } from '@lib/constants'

const Introduction = () => {
  return (
    <ProfileSection
      id={'about'}
      title={'Engineer. Developer. Adventurer.'}
      backgroundColor="#e3e7ea"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 5,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: 1,
            md: { width: 1 / 3, flexShrink: 0 },
          }}
        >
          <StyledPaper sx={{ borderRadius: '50%' }}>
            <Image
              src={IMAGES.profile}
              alt="Profile Picture"
              width={350}
              height={350}
            />
          </StyledPaper>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 3,
          }}
        >
          <Typography variant="body1">
            I go by <b>Kendrick De La Pena</b> and currently reside in{' '}
            <b>Las Vegas, Nevada (Ne-VA-duh)</b>. Growing up in the battle born
            state, I am constantly progressing, both in and out of the tech
            world. Logical thinking and critical observation are my key skills.
          </Typography>
          <Typography variant="body1">
            I attained a{' '}
            <b>Bachelor of Science degree in Computer Engineering</b> from the{' '}
            <Link href="https://www.unlv.edu/" target="_blank">
              <b>University of Las Vegas, Nevada</b>
            </Link>
            , along with a{' '}
            <b>Minor in Computer Science and Technology Commercialization</b>.
            During my time at the university, I was also inducted into{' '}
            <Link
              href="https://www.tbp.org/recruit/recruitHome.cfm"
              target="_blank"
            >
              <b>Tau Beta Pi Engineering (ΤΒΠ) Honor Society</b>
            </Link>
            .
          </Typography>
          <Typography variant="body1">
            Outside of my tech interests, I enjoy traveling and live music as
            well as video gaming, photography, and rock climbing. These pursuits
            allow me to expand my perspective and exercise my creativity.
            Whether I am working a job or pursuing a hobby, my goal is to{' '}
            <b>be at my best</b>.
          </Typography>
        </Box>
      </Box>
    </ProfileSection>
  )
}

export default Introduction

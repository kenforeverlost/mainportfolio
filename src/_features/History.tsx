import { Box, Stack, Typography } from '@mui/material'

import AnimatedBox from '@components/AnimatedBox'
import HistoryWrap from '@components/HistoryWrap'
import Section from '@components/container/Section'
import { VisibleProvider } from '@contexts/VisibleContext'
import { WORK_EXPERIENCE } from '@lib/constants'

const History = () => {
  const delayTime = {
    title: 0.0,
    historyCardStart: 0.3,
    historyCardIncrement: 0.3,
  }

  return (
    <VisibleProvider>
      <Section
        id={'experience'}
        sx={{ backgroundColor: 'background.secondary' }}
      >
        <AnimatedBox duration={'text'} direction="up" delay={delayTime.title}>
          <Stack sx={{ direction: 'column', gap: 2 }}>
            <Typography variant="h2">Where I've Been</Typography>
            <Typography variant="body1">
              Building and refining software that solves real business problems
              has been key to my growth as a developer. Seeing these solutions
              in use and improving over time motivates me to keep creating.
            </Typography>
          </Stack>
        </AnimatedBox>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
          }}
        >
          {WORK_EXPERIENCE.map((item, index) => (
            <AnimatedBox
              key={index}
              duration={'card'}
              direction="up"
              delay={
                delayTime.historyCardStart +
                index * delayTime.historyCardIncrement
              }
            >
              <HistoryWrap
                company={{
                  name: item.company,
                  position: item.position,
                  years: `${item.start} to ${item.end}`,
                }}
                companyImage={{
                  src: item.logo.src,
                  alt: item.logo.alt,
                  link: item.website,
                  width: item.logo.width,
                  height: item.logo.height,
                }}
                highlights={item.highlights}
                mainTools={item.tools}
              />
            </AnimatedBox>
          ))}
        </Box>
      </Section>
    </VisibleProvider>
  )
}

export default History

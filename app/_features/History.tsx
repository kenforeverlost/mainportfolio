import { Box } from '@mui/material'

import AnimatedBox from '@components/AnimatedBox'
import HistoryWrap from '@components/HistoryWrap'
import ProfileSection from '@components/ProfileSection'
import { VisibleProvider } from '@contexts/VisibleContext'
import { WORK_EXPERIENCE } from '@lib/constants'

const History = () => {
  const delayTime = {
    historyCardStart: 0.3,
    historyCardIncrement: 0.3,
  }

  return (
    <VisibleProvider>
      <ProfileSection
        id={'experience'}
        title={`Where I've Been`}
        description={`I've had the opportunity to build software that solves real business problems and to go deep in refining those solutions over time. That hands-on experience has been key to my growth as a developer.`}
        backgroundColor="background.secondary"
      >
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
      </ProfileSection>
    </VisibleProvider>
  )
}

export default History

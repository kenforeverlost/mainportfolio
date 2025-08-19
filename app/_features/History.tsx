import { Box } from '@mui/material'

import HistoryWrap from '@components/HistoryWrap'
import ProfileSection from '@components/ProfileSection'
import { WORK_EXPERIENCE } from '@lib/constants'

const History = () => {
  return (
    <ProfileSection
      id={'experience'}
      title={`Where I've Been`}
      description={`Throughout my career, I've had the opportunity to solve real business problems and to go deep in refining those solutions over time. The hands-on experience has been key to my growth as a developer.`}
      backgroundColor="background.secondary"
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {WORK_EXPERIENCE.map((item, index) => (
          <HistoryWrap
            key={index}
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
        ))}
      </Box>
    </ProfileSection>
  )
}

export default History

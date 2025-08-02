import { Box } from '@mui/material'

import HistoryWrap from '@components/HistoryWrap'
import ProfileSection from '@components/ProfileSection'
import { IMAGES } from '@lib/constants'

const History = () => {
  return (
    <ProfileSection
      id={'experience'}
      title={'Work History'}
      backgroundColor="#e3e7ea"
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <HistoryWrap
          company={{
            name: 'Las Vegas REALTORS®',
            position: 'Web Developer',
            years: 'September 2020 to Current',
          }}
          companyImage={{
            src: IMAGES.lvr,
            alt: 'LVR',
            link: 'https://www.lasvegasrealtor.com/',
            width: 550,
            height: 274,
          }}
          hightlights={[
            'Refined and enhanced the LVR member web portal to increase membership engagement and accessibility of association news',
            'Integrated several web APIs including the DocuSign API for membership applications and the SendGrid API for automated email notices',
            'Managed the digitization of the member check-in process for verifying registration and tracking attendance at events to better efficiency',
            'Built administration tools to aid staff in helping members with daily tasks',
            'Migrated components from the legacy member web portal stack to modern solutions such as Next.js and Sanity',
            'Provided support to the development of the member portal mobile app',
          ]}
          mainTools={[
            'PHP',
            'SQL',
            'Javascript',
            'HTML',
            'CSS',
            'Next.js',
            'React',
            'Tailwind CSS',
            'Supabase',
          ]}
        />
        <HistoryWrap
          company={{
            name: 'FDM4 America, Inc.',
            position: 'Programmer Analyst',
            years: 'June 2015 to June 2020',
          }}
          companyImage={{
            src: IMAGES.fdm4,
            alt: 'FDM4',
            link: 'https://www.fdm4.com/',
            width: 550,
            height: 133,
          }}
          hightlights={[
            'Strengthened the quality of the ERP, WMS, and E-Commerce software solutions through custom modifications and bug fixes',
            'Collaborated directly with clients on-site in assisting with questions and addressing issues to build rapport and confidence with the company',
            "Led a live product upgrade to upkeep the client's software version",
            'Counseled new hires on knowing company procedures, learning programming tools, and understanding the software',
            'Produced code reviews on the work of other team members and assumed team lead duties when needed',
          ]}
          mainTools={['Progress 4GL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap']}
        />
      </Box>
    </ProfileSection>
  )
}

export default History

import { Link, Stack, Typography } from '@mui/material'

import ProfileSection from '@components/ProfileSection'
import ContactForm from '@components/ContactForm'
import { OTHER_LINKS } from '@lib/constants'

const Connect = () => {
  return (
    <ProfileSection
      id={'contact'}
      title={'Connect'}
      caption={
        'Shoot me a message if you are looking to collaborate on a project or to request my resume. Look forward to hearing from you!'
      }
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
          width: 1,
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            width: 1,
            maxWidth: 600,
          }}
        >
          <Typography variant="body1"></Typography>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: 2,
            }}
          >
            <Typography variant="body1">Check out my other links!</Typography>
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 5,
              }}
            >
              {OTHER_LINKS.map((item, key) => (
                <Link href={item.url} target="_blank" key={key}>
                  {item.icon}
                </Link>
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            width: 1,
            maxWidth: 600,
          }}
        >
          <ContactForm />
        </Stack>
      </Stack>
    </ProfileSection>
  )
}

export default Connect

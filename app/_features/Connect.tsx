import { Box } from '@mui/material'

import ProfileSection from '@components/ProfileSection'
import ContactForm from '@components/ContactForm'

const Connect = () => {
  return (
    <ProfileSection
      id={'contact'}
      title={`Let's Connect`}
      description={`Whether you're looking to collaborate, have a project in mind, or just want to say hello, shoot me a message. I'm always happy to connect.`}
      backgroundColor="background.default"
    >
      <Box
        sx={{
          margin: '0 auto',
          width: 1,
          maxWidth: 600,
        }}
      >
        <ContactForm />
      </Box>
    </ProfileSection>
  )
}

export default Connect

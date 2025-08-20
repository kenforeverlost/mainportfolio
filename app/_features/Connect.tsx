import { Box, Grid, Link, Stack, Typography } from '@mui/material'
import { HiOutlineMail } from 'react-icons/hi'

import ContactForm from '@components/ContactForm'
import Section from '@components/container/Section'
import { OTHER_LINKS } from '@lib/constants'

const Connect = () => {
  const connectLinks = [
    {
      name: 'kendrickdelapena@gmail.com',
      url: 'mailto:kendrickdelapena@gmail.com',
      icon: <HiOutlineMail />,
    },
    ...OTHER_LINKS,
  ]

  return (
    <Section id={'contact'} backgroundColor="background.default">
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <Stack spacing={2}>
              <Typography variant="h2">Let's Connect</Typography>
              <Typography variant="body1">
                Whether you're looking to collaborate, have a project in mind,
                or just want to say hello, shoot me a message. I'm always happy
                to connect.
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: 'flex',
                flexDirection: { xs: 'row', md: 'column' },
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' },
                gap: { xs: 4, md: 2 },
                paddingLeft: { xs: 0, md: 2 },
              }}
            >
              {connectLinks.map((item, index) => {
                return (
                  <Typography variant="h6" color="secondary" key={index}>
                    <Box
                      component="span"
                      sx={{
                        color: 'secondary.main',
                        display: 'inline-block',
                        fontSize: '1.5rem',
                        marginRight: 1,
                        verticalAlign: 'bottom',
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Link href={item.url} target="_blank" color="secondary">
                      {item.name}
                    </Link>
                  </Typography>
                )
              })}
            </Stack>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              margin: '0 auto',
              width: 1,
              maxWidth: 600,
            }}
          >
            <ContactForm />
          </Box>
        </Grid>
      </Grid>
    </Section>
  )
}

export default Connect

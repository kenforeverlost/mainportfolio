import { Box, Container, Stack, Typography } from '@mui/material'
import { PiCopyrightLight } from 'react-icons/pi'

import LinkIcon from '@components/LinkIcon'

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        marginTop: 8,
        width: 1,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          paddingX: 4,
          paddingY: 4,
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 2,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 0.5,
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                color: 'secondary.contrastText',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <PiCopyrightLight />
            </Box>
            <Typography
              component="span"
              variant="body2"
              sx={{
                color: 'secondary.contrastText',
                textAlign: { xs: 'left', md: 'center' },
                whiteSpace: 'nowrap',
              }}
            >
              2025 Kendrick De La Pena
            </Typography>
          </Box>

          <LinkIcon
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: { xs: 'flex-start', md: 'flex-end' },
              gap: { xs: 1, md: 2 },
            }}
          />
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer

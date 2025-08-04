import LinkIcon from './LinkIcon'
import { Box, Container, Stack, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.tertiary',
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
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'text.primary',
              textAlign: { xs: 'left', md: 'center' },
            }}
          >
            Copyright © 2025 - Kendrick De La Pena
          </Typography>

          <LinkIcon
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: { xs: 'flex-start', md: 'flex-end' },
              gap: { xs: 4, md: 2 },
            }}
            iconButtonSlots={{
              sx: { fontSize: '1.5rem', color: 'primary.main' },
            }}
          />
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer

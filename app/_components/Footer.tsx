import LinkIcon from './LinkIcon'
import { Box, Container, Stack, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.tertiary',
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
              whiteSpace: 'nowrap',
            }}
          >
            © 2025 Kendrick De La Pena
          </Typography>

          <LinkIcon
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: { xs: 'flex-start', md: 'flex-end' },
              gap: { xs: 1, md: 2 },
            }}
            iconButtonSlots={{
              sx: {
                fontSize: '1.5rem',
                color: 'secondary.main',
                '&:hover': {
                  color: 'secondary.dark',
                },
              },
            }}
          />
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer

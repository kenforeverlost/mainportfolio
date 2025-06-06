import { Link, List, ListItem, Stack, Typography } from '@mui/material'

const HistoryWrap = ({
  company,
  companyImage,
  hightlights,
  mainTools,
}: {
  company: { name: string; position: string; years: string }
  companyImage: { src: string; alt: string; link: string }
  hightlights: string[]
  mainTools: string[]
}) => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 5,
        alignItems: 'center',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 3,
          padding: 2,
          width: { xs: 1, md: 4 / 12 },
        }}
      >
        <Link href={companyImage.link} target="_blank">
          <img
            src={companyImage.src}
            alt={companyImage.alt}
            style={{ width: '100%', maxWidth: 220 }}
          />
        </Link>
        <Stack>
          <Typography variant="h5" fontWeight="bold">
            {company.position}
          </Typography>
          <Typography variant="h6" fontWeight={400}>
            {company.name}
          </Typography>
          <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
            {company.years}
          </Typography>
        </Stack>
      </Stack>

      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          width: { xs: 1, md: 8 / 12 },
        }}
      >
        <Stack>
          <Typography variant="body1" fontWeight="bold">
            Highlights
          </Typography>
          <List sx={{ listStyleType: 'disc', padding: 0, marginLeft: 0 }}>
            {hightlights.map((highlight, index) => (
              <ListItem
                key={index}
                disableGutters
                sx={{ display: 'list-item', listStylePosition: 'inside' }}
              >
                {highlight}
              </ListItem>
            ))}
          </List>
        </Stack>
        <Typography variant="body1">
          <b>Main Tools:</b> {mainTools.join(', ')}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default HistoryWrap

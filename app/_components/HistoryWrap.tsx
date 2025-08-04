import Image from 'next/image'
import {
  Box,
  Grid,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material'

import StyledChip from '@components/StyledChip'
import StyledPaper from '@components/StyledPaper'

const HistoryWrap = ({
  company,
  companyImage,
  highlights,
  mainTools,
}: {
  company: { name: string; position: string; years: string }
  companyImage: {
    src: string
    alt: string
    link: string
    width: number
    height: number
  }
  highlights: string[]
  mainTools: string[]
}) => {
  return (
    <StyledPaper
      sx={{
        paddingX: 4,
        paddingY: 4,
        width: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            gap: 4,
            padding: 2,
          }}
        >
          <Link href={companyImage.link} target="_blank">
            <Image
              src={companyImage.src || '/placeholder.svg'}
              alt={companyImage.alt}
              width={companyImage.width}
              height={companyImage.height}
              style={{ maxWidth: 220, height: 'auto' }}
            />
          </Link>
          <Stack>
            <Typography variant="h4" color="primary">
              {company.position}
            </Typography>
            <Typography variant="body1">{company.name}</Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
              {company.years}
            </Typography>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Stack>
            <List sx={{ listStyleType: 'disc', padding: 0, marginLeft: 0 }}>
              {highlights.map((highlight, index) => (
                <ListItem
                  key={index}
                  disableGutters
                  sx={{
                    color: 'secondary',
                    display: 'list-item',
                    listStylePosition: 'inside',
                  }}
                >
                  {highlight}
                </ListItem>
              ))}
            </List>
          </Stack>
        </Grid>
        <Grid
          size={12}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {mainTools.map((tool, index) => (
              <StyledChip
                key={index}
                variant="outlined"
                color="secondary"
                label={tool}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </StyledPaper>
  )
}

export default HistoryWrap

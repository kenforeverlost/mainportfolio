import Image from 'next/image'
import { Box, Grid, Link, ListItem, Stack, Typography } from '@mui/material'
import { VscTools } from 'react-icons/vsc'

import CardAccordion from '@components/CardAccordion'
import StyledChip from '@components/StyledChip'
import StyledList from '@components/StyledList'
import StyledPaper from '@components/StyledPaper'
import ToolsChipWrap from './ToolsChipWrap'

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
          order={1}
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
        <Grid
          order={{ xs: 2, md: 2 }}
          size={{ xs: 12, md: 8 }}
          marginBottom={{ xs: 2, md: 0 }}
        >
          <CardAccordion>
            <StyledList>
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
            </StyledList>
          </CardAccordion>
        </Grid>
        <Grid
          order={{ xs: 3, md: 3 }}
          size={{ xs: 12, md: 12 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <ToolsChipWrap
            sx={{
              color: 'primary.main',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 1,
            }}
          >
            {mainTools.map((tool, index) => (
              <StyledChip
                key={index}
                variant="outlined"
                color="secondary"
                label={tool}
              />
            ))}
          </ToolsChipWrap>
        </Grid>
      </Grid>
    </StyledPaper>
  )
}

export default HistoryWrap

import * as React from 'react'
import { Box, Breadcrumbs, Container, Link, Typography } from '@mui/material'
import { LuChevronsRight } from 'react-icons/lu'
import { VscHome } from 'react-icons/vsc'

const MainBreadcrumbs = ({
  crumbs,
}: {
  crumbs: { label: string; href?: string }[]
}) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 1,
      }}
    >
      <Container
        sx={{
          paddingY: 2,
          maxWidth: 'lg',
        }}
      >
        <Breadcrumbs
          separator={<LuChevronsRight />}
          aria-label="breadcrumb"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'primary.main',
            '& .MuiBreadcrumbs-separator': {
              marginX: 1,
              scale: 1,
              color: 'primary.main',
            },
          }}
        >
          <Link
            underline="hover"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'secondary.main',
              '&:hover': {
                color: 'secondary.light',
              },
            }}
            href="/"
          >
            <Box
              component={'span'}
              sx={{ marginRight: 0.5, color: 'primary.main' }}
            >
              <VscHome fontSize={'1.25rem'} style={{ verticalAlign: 'sub' }} />
            </Box>
            Home
          </Link>
          {crumbs.map((item, index) => {
            if (item.href) {
              return (
                <Link
                  key={index}
                  variant={'body1'}
                  underline="hover"
                  href={item.href}
                  sx={{
                    cursor: 'pointer',
                    color: 'secondary.main',
                    '&:hover': {
                      color: 'secondary.light',
                    },
                  }}
                >
                  {item.label}
                </Link>
              )
            } else {
              return (
                <Typography variant="body1" color="primary.main" key={index}>
                  {item.label}
                </Typography>
              )
            }
          })}
        </Breadcrumbs>
      </Container>
    </Box>
  )
}

export default MainBreadcrumbs

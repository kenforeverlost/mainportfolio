'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHome, FaFileAlt, FaProjectDiagram } from 'react-icons/fa'
import { LuChevronDown, LuChevronUp } from 'react-icons/lu'
import { RiMenu5Fill } from 'react-icons/ri'
import {
  Box,
  Button,
  Collapse,
  Container,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import LinkIcon from '@components/LinkIcon'
import NavigationButton from '@components/NavigationButton'
import SiteLogo from '@components/SiteLogo'
import { OTHER_LINKS, SCROLL_MENU } from '@lib/constants'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileScrollMenuOpen, setIsMobileScrollMenuOpen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const isScrollMenuOpen = Boolean(anchorEl)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const path = usePathname()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
      component="header"
      sx={{
        bgcolor: 'primary.main',
        boxShadow: 2,
        paddingY: 1,
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid
            size={isMobile ? 0 : 5}
            sx={{
              display: isMobile ? 'none' : 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <LinkIcon
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: { xs: 'flex-start', md: 'flex-end' },
                gap: { xs: 1, md: 2 },
              }}
            />
          </Grid>
          <Grid
            size={isMobile ? 7 : 2}
            sx={{
              display: 'flex',
              justifyContent: isMobile ? 'flex-start' : 'center',
              alignItems: 'center',
            }}
          >
            <Button
              variant="text"
              component={Link}
              href="/"
              sx={{ cursor: 'pointer' }}
            >
              <SiteLogo />
            </Button>
          </Grid>
          <Grid
            size={5}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            {isMobile ? (
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{
                  color: 'primary.contrastText',
                  marginRight: 2,
                }}
              >
                <RiMenu5Fill onClick={() => setIsMenuOpen(!isMenuOpen)} />
              </IconButton>
            ) : (
              <Stack spacing={4} display={'flex'} direction={'row'}>
                <Box sx={{ display: 'flex', gap: 4 }}>
                  <div>
                    <Button
                      id="scroll-menu-button"
                      variant="text"
                      aria-controls={
                        isScrollMenuOpen ? 'basic-menu' : undefined
                      }
                      aria-haspopup="true"
                      aria-expanded={isScrollMenuOpen ? 'true' : undefined}
                      endIcon={<LuChevronDown />}
                      onClick={handleMenu}
                      sx={{
                        cursor: 'pointer',
                        '& .MuiButton-endIcon': {
                          color: 'primary.contrastText',
                          marginLeft: 1,
                        },
                      }}
                    >
                      <Typography
                        color="primary.contrastText"
                        sx={{
                          textDecoration: path === '/' ? 'underline' : 'none',
                          textDecorationColor: theme.palette.tertiary.main,
                          textDecorationThickness: '1px',
                          textDecorationStyle: 'solid',
                          textUnderlineOffset: '6px',
                          '&:hover': {
                            textDecoration: 'underline',
                            textDecorationColor: theme.palette.tertiary.main,
                            textDecorationThickness: '1px',
                            textDecorationStyle: 'solid',
                            textUnderlineOffset: '6px',
                          },
                        }}
                      >
                        Home
                      </Typography>
                    </Button>
                    <Menu
                      id="scroll-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                      slotProps={{
                        list: {
                          'aria-labelledby': 'scroll-menu-button',
                        },
                      }}
                    >
                      {SCROLL_MENU.map((item, index) => (
                        <MenuItem
                          key={index}
                          component={Link}
                          href={`/#${item.section}`}
                          onClick={handleClose}
                        >
                          {item.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                  <Button
                    variant="text"
                    href="/projects"
                    sx={{
                      cursor: 'pointer',
                    }}
                  >
                    <Typography
                      color="primary.contrastText"
                      sx={{
                        textDecoration:
                          path === '/projects' ? 'underline' : 'none',
                        textDecorationColor: theme.palette.tertiary.main,
                        textDecorationThickness: '1px',
                        textDecorationStyle: 'solid',
                        textUnderlineOffset: '6px',
                        '&:hover': {
                          textDecoration: 'underline',
                          textDecorationColor: theme.palette.tertiary.main,
                          textDecorationThickness: '1px',
                          textDecorationStyle: 'solid',
                          textUnderlineOffset: '6px',
                        },
                      }}
                    >
                      Projects
                    </Typography>
                  </Button>
                  <NavigationButton
                    variant="contained"
                    component={Link}
                    href="/profile/Resume-KendrickDeLaPena.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography>Resume</Typography>
                  </NavigationButton>
                </Box>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Container>
      <Drawer
        anchor={'right'}
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <Box
          sx={{ minWidth: 250 }}
          role="presentation"
          onClick={() => setIsMenuOpen(false)}
        >
          <List>
            <ListItem
              onClick={(event) => {
                event.stopPropagation()
                setIsMobileScrollMenuOpen((prev) => !prev)
              }}
            >
              <ListItemButton sx={{ cursor: 'pointer' }}>
                <ListItemIcon>
                  <FaHome />
                </ListItemIcon>
                <ListItemText primary={'Home'} color="primary.contrastText" />
                <ListItemIcon
                  sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}
                >
                  {isMobileScrollMenuOpen ? (
                    <LuChevronUp fontSize="large" />
                  ) : (
                    <LuChevronDown fontSize="large" />
                  )}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <Collapse in={isMobileScrollMenuOpen} timeout="auto" unmountOnExit>
              {SCROLL_MENU.map((item, index) => (
                <ListItem
                  key={index}
                  component={Link}
                  href={`/#${item.section}`}
                >
                  <ListItemButton sx={{ cursor: 'pointer', paddingLeft: 4 }}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      color="primary.contrastText"
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </Collapse>
            <ListItem component={Link} href={'/projects'}>
              <ListItemButton sx={{ cursor: 'pointer' }}>
                <ListItemIcon>
                  <FaProjectDiagram />
                </ListItemIcon>
                <ListItemText
                  primary={'Projects'}
                  color="primary.contrastText"
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              component={Link}
              href="/profile/Resume-KendrickDeLaPena.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemButton sx={{ cursor: 'pointer' }}>
                <ListItemIcon>
                  <FaFileAlt />
                </ListItemIcon>
                <ListItemText primary={'Resume'} color="primary.contrastText" />
              </ListItemButton>
            </ListItem>
            {OTHER_LINKS.map((item) => {
              return (
                <ListItem
                  key={item.name}
                  component="a"
                  href={item.url}
                  target="_blank"
                >
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      color="primary.contrastText"
                    />
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}

export default Navigation

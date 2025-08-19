'use client'

import React, { useState } from 'react'
import { FaHome, FaProjectDiagram } from 'react-icons/fa'
import { LuChevronDown, LuChevronUp } from 'react-icons/lu'
import { RiMenu5Fill } from 'react-icons/ri'
import {
  Box,
  Button,
  Container,
  Divider,
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

import NavigationButton from '@components/NavigationButton'
import { OTHER_LINKS, SCROLL_MENU } from '@lib/constants'
import { scrollToSection } from '@lib/helpers'
import Link from 'next/link'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const isScrollMenuOpen = Boolean(anchorEl)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
      component="header"
      sx={{
        bgcolor: 'primary.main',
        boxShadow: 2,
        paddingY: 2,
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid
            size={5}
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex' }}>
              {OTHER_LINKS.map((item) => {
                return (
                  <IconButton
                    key={item.name}
                    component="a"
                    href={item.url}
                    target="_blank"
                    size="medium"
                    sx={{ color: 'text.secondary' }}
                  >
                    {item.icon}
                  </IconButton>
                )
              })}
            </Box>
          </Grid>
          <Grid
            size={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              variant="text"
              onClick={() => {
                scrollToSection('home', () => {
                  if (isMenuOpen) {
                    setIsMenuOpen(false)
                  }
                })
              }}
              sx={{ cursor: 'pointer' }}
            >
              <Typography variant="h3" color="text.secondary">
                KDLP
              </Typography>
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
                  color: 'text.secondary',
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
                          color: 'text.secondary',
                          marginLeft: 1,
                        },
                      }}
                    >
                      <Typography color="text.secondary">Home</Typography>
                    </Button>
                    <Menu
                      id="scroll-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      slotProps={{
                        list: {
                          'aria-labelledby': 'scroll-menu-button',
                        },
                      }}
                    >
                      {SCROLL_MENU.map((item, index) => (
                        <MenuItem
                          key={index}
                          onClick={() => {
                            scrollToSection(item.section, () => {
                              if (isMenuOpen) {
                                setIsMenuOpen(false)
                              }
                            })
                            handleClose()
                          }}
                        >
                          {item.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                  <Button
                    variant="text"
                    href="/projects"
                    sx={{ cursor: 'pointer' }}
                  >
                    <Typography color="text.secondary">Projects</Typography>
                  </Button>
                  <NavigationButton variant="contained">
                    <Typography>Resume</Typography>
                  </NavigationButton>
                </Box>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Container>
      <Drawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <Box sx={{ minWidth: 250 }}>
          <List>
            <ListItem component={Link} href={'/'}>
              <ListItemButton sx={{ cursor: 'pointer' }}>
                <ListItemIcon>
                  <FaHome />
                </ListItemIcon>
                <ListItemText primary={'Home'} color="text.secondary" />
              </ListItemButton>
            </ListItem>
            {SCROLL_MENU.map((item, index) => (
              <ListItem
                key={index}
                onClick={() => {
                  scrollToSection(item.section, () => {
                    if (isMenuOpen) {
                      setIsMenuOpen(false)
                    }
                  })
                }}
              >
                <ListItemButton sx={{ cursor: 'pointer' }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} color="text.secondary" />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem component={Link} href={'/projects'}>
              <ListItemButton sx={{ cursor: 'pointer' }}>
                <ListItemIcon>
                  <FaProjectDiagram />
                </ListItemIcon>
                <ListItemText primary={'Projects'} color="text.secondary" />
              </ListItemButton>
            </ListItem>
            <Divider />
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
                    <ListItemText primary={item.name} color="text.secondary" />
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

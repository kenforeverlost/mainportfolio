'use client'

import React, { useState } from 'react'
import { RiMenu5Fill } from 'react-icons/ri'
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import { NAVIGATION_MENU } from '@lib/constants'
import { scrollToSection } from '@lib/helpers'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {isMobile && <Typography>&nbsp;</Typography>}
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
            <Box sx={{ display: 'flex', gap: 3 }}>
              {NAVIGATION_MENU.map((item, key) => (
                <Button
                  key={key}
                  variant="text"
                  onClick={() => {
                    scrollToSection(item.section)
                  }}
                  sx={{ cursor: 'pointer' }}
                >
                  <Typography color="text.secondary">{item.label}</Typography>
                </Button>
              ))}
            </Box>
          )}
        </Box>
      </Container>
      <Drawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <Box sx={{ minWidth: 250 }}>
          <List>
            {NAVIGATION_MENU.map((item, index) => (
              <ListItem
                key={index}
                onClick={() => {
                  scrollToSection(item.section)
                }}
              >
                <ListItemButton sx={{ cursor: 'pointer' }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} color="text.secondary" />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}

export default Navigation

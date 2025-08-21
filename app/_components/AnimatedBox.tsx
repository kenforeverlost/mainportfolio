'use client'

import React, { useContext } from 'react'
import { Box, BoxProps } from '@mui/material'

import { VisibleContext } from '@contexts/VisibleContext'

interface AnimatedBoxProps extends BoxProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  delay?: number
  duration?: number | 'button' | 'card' | 'image' | 'text'
}

const AnimatedBox = ({
  children,
  direction = 'fade',
  delay = 0,
  duration = 0.35,
  sx = {},
  ...props
}: AnimatedBoxProps) => {
  const isVisible = useContext(VisibleContext)
  const getTransform = () => {
    switch (direction) {
      case 'up':
        return isVisible ? 'translateY(0)' : 'translateY(20px)'
      case 'down':
        return isVisible ? 'translateY(0)' : 'translateY(-20px)'
      case 'left':
        return isVisible ? 'translateX(0)' : 'translateX(-20px)'
      case 'right':
        return isVisible ? 'translateX(0)' : 'translateX(20px)'
      default:
        return 'none'
    }
  }

  let transitionDuration = 0.35

  if (typeof duration === 'number') {
    transitionDuration = duration
  } else if (typeof duration === 'string') {
    switch (duration) {
      case 'button':
        transitionDuration = 0.25
        break
      case 'card':
        transitionDuration = 0.35
        break
      case 'image':
        transitionDuration = 0.4
        break
      case 'text':
        transitionDuration = 0.3
        break
      default:
        transitionDuration = 0.35
        break
    }
  }

  return (
    <Box
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all ${transitionDuration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
        willChange: 'opacity, transform',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

export default AnimatedBox

'use client'

import React, { useCallback, useEffect } from 'react'
import {
  Button,
  Collapse,
  Stack,
  StackProps,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { LuChevronDown, LuChevronUp } from 'react-icons/lu'
import StyledButton from './StyledButton'

interface CardAccordionProps extends StackProps {}

const CardAccordion = (props: CardAccordionProps) => {
  const [expanded, setExpanded] = React.useState(false)

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const handleClick = () => {
    setExpanded((prev) => !prev)
  }

  const handleResize = useCallback(() => {
    if (isDesktop) {
      setExpanded(false)
    }
  }, [isDesktop])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return (
    <Stack spacing={2} {...props}>
      {!isDesktop && (
        <StyledButton
          variant="contained"
          size="small"
          onClick={handleClick}
          aria-expanded={expanded}
          aria-label="show more"
          endIcon={
            expanded ? (
              <LuChevronDown fontSize="large" />
            ) : (
              <LuChevronUp fontSize="large" />
            )
          }
        >
          {expanded ? `View Less` : `View More`}
        </StyledButton>
      )}
      {isDesktop ? (
        <>{props.children}</>
      ) : (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {props.children}
        </Collapse>
      )}
    </Stack>
  )
}

export default CardAccordion

'use client'

import React from 'react'
import { Box, Collapse, Stack, StackProps, useTheme } from '@mui/material'
import { LuChevronDown, LuChevronUp } from 'react-icons/lu'
import StyledButton from './StyledButton'

interface CardAccordionProps extends StackProps {}

const CardAccordion = (props: CardAccordionProps) => {
  const [expanded, setExpanded] = React.useState(false)

  const theme = useTheme()

  const handleClick = () => {
    setExpanded((prev) => !prev)
  }

  return (
    <Stack spacing={2} {...props}>
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
        sx={{ display: { xs: 'flex', md: 'none' } }}
      >
        {expanded ? `View Less` : `View More`}
      </StyledButton>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>{props.children}</Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {props.children}
        </Collapse>
      </Box>
    </Stack>
  )
}

export default CardAccordion

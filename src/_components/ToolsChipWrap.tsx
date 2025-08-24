'use client'

import React from 'react'
import { Box, BoxProps, styled } from '@mui/material'
import { VscTools } from 'react-icons/vsc'

const ToolsChipWrap = styled((props: BoxProps) => (
  <Box {...props}>
    <Box component={'span'} sx={{ marginRight: 0.5 }}>
      <VscTools fontSize={'1.625rem'} />
    </Box>
    {props.children}
  </Box>
))(({ theme }) => ({}))

export default ToolsChipWrap

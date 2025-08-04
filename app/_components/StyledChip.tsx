'use client'

import React from 'react'
import { Chip, ChipProps, styled } from '@mui/material'

const StyledChip = styled((props: ChipProps) => <Chip {...props} />)(
  ({ theme, variant }) => ({}),
)

export default StyledChip

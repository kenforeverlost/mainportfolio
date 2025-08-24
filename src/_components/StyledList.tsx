'use client'

import React from 'react'
import { List, ListProps, styled } from '@mui/material'

const StyledList = styled((props: ListProps) => (
  <List disablePadding {...props} />
))(({ theme }) => ({
  listStyleType: 'disc',
  padding: 0,
  marginLeft: 0,
  '& .MuiStack-root > :not(style) ~ :not(style)': {
    marginTop: '0 !important',
  },
}))

export default StyledList

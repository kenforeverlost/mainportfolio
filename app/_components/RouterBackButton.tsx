'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import StyledButton from '@components/StyledButton'

const RouterBackButton = () => {
  const router = useRouter()
  const handleClose = () => {
    router.back()
  }

  return (
    <StyledButton
      variant="contained"
      onClick={handleClose}
      sx={{ marginRight: 2 }}
    >
      Close
    </StyledButton>
  )
}

export default RouterBackButton

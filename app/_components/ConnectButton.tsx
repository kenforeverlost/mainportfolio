'use client'

import StyledButton from '@components/StyledButton'
import { scrollToSection } from '@lib/helpers'

const ConnectButton = () => {
  return (
    <StyledButton
      variant="contained"
      sx={{ width: 'fit-content' }}
      onClick={() => {
        scrollToSection('contact')
      }}
    >
      Get in Touch
    </StyledButton>
  )
}

export default ConnectButton

'use client'

import { ButtonProps } from '@mui/material'

import StyledButton from '@components/StyledButton'
import { scrollToSection } from '@lib/helpers'

const ConnectButton = (props: ButtonProps) => {
  return (
    <StyledButton
      {...props}
      onClick={() => {
        scrollToSection('contact')
      }}
    >
      {props.children}
    </StyledButton>
  )
}

export default ConnectButton

'use client'

import Link from 'next/link'
import { ButtonProps } from '@mui/material'

import StyledButton from '@components/StyledButton'

const ConnectButton = (props: ButtonProps) => {
  return (
    <StyledButton {...props} component={Link} href="/#contact">
      {props.children}
    </StyledButton>
  )
}

export default ConnectButton

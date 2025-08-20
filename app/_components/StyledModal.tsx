'use client'

import { Modal, ModalProps, styled, useTheme } from '@mui/material'

const StyledModal = styled((props: ModalProps) => {
  const theme = useTheme()
  return <Modal {...props} />
})(({ theme }) => ({}))

export default StyledModal

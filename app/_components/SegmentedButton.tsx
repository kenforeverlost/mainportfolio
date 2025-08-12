'use client'

import React, { useState } from 'react'
import { ToggleButtonGroup, ToggleButton } from '@mui/material'

import StyledToggleButtonGroup from '@components/StyledToggleButtonGroup'

interface SegmentedButtonProps {
  label: string[]
  onChange: (value: string) => void
}

const SegmentedButton = ({ label, onChange }: SegmentedButtonProps) => {
  const [choiceValue, setChoiceValue] = useState<string>(label[0])

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string,
  ) => {
    setChoiceValue(newValue)
    onChange(newValue)
  }

  return (
    <StyledToggleButtonGroup
      color="primary"
      value={choiceValue}
      exclusive
      onChange={handleChange}
      aria-label="SegmentedButton"
    >
      {label.map((item, index) => (
        <ToggleButton value={item}>{item}</ToggleButton>
      ))}
    </StyledToggleButtonGroup>
  )
}

export default SegmentedButton

'use client'

import React, { useState } from 'react'
import { Divider, ToggleButton } from '@mui/material'

import StyledToggleButtonGroup from '@components/StyledToggleButtonGroup'

interface SegmentedButtonProps {
  label: string[]
  onChange?: (value: string) => void
}

const SegmentedButton = ({ label, onChange }: SegmentedButtonProps) => {
  const [choiceValue, setChoiceValue] = useState<string>(label[0])

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string,
  ) => {
    if (newValue !== null) {
      setChoiceValue(newValue)

      if (onChange) {
        onChange(newValue)
      }
    }
  }

  const renderArray = label.flatMap((item, index) => {
    if (index !== 0) {
      return [
        <Divider
          key={`${index}-divider`}
          flexItem
          orientation="vertical"
          sx={{ marginX: 0, marginY: 1.0 }}
        />,
        <ToggleButton key={index} value={item}>
          {item}
        </ToggleButton>,
      ]
    } else {
      return (
        <ToggleButton key={index} value={item}>
          {item}
        </ToggleButton>
      )
    }
  })

  return (
    <StyledToggleButtonGroup
      color="primary"
      value={choiceValue}
      exclusive
      onChange={handleChange}
      aria-label="SegmentedButton"
    >
      {renderArray}
    </StyledToggleButtonGroup>
  )
}

export default SegmentedButton

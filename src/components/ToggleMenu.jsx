import { Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useState } from 'react'

export const ToggleMenu = () => {
  const [alignment, setAlignment] = useState('repos')

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment)
  }

  return (
    <Stack direction="row" justifyContent="center" spacing={2}>
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={alignment}
        onChange={handleChange}
      >
        <ToggleButton value="repos">Repos</ToggleButton>
        <ToggleButton value="social">Social</ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  )
}
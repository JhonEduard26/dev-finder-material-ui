import { Alert, AlertTitle } from '@mui/material'

export const ErrorNotFound = () => {
  return (
    <Alert severity="error" sx={{
      marginBottom: '24px',
    }}>
      <AlertTitle>User not found</AlertTitle>
      Please enter a valid github user
    </Alert>
  )
}
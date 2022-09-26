import { Avatar, Container, Stack, Typography } from '@mui/material'

export const Card = () => {
  return (
    <Container sx={{
      marginTop: '36px'
    }}>
      <Stack direction="column" alignItems="center">
        <Avatar src='https://mui.com/static/images/avatar/3.jpg' sx={{
          width: 120,
          height: 120,
          marginBottom: '14px',
        }} />
        <Typography variant="h5">
          Name
        </Typography>
        <Typography variant="subtitle1">
          Bio
        </Typography>
      </Stack>
    </Container>
  )
}
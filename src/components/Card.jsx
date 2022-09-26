import { Avatar, Container, Stack } from '@mui/material'

export const Card = () => {
  return (
    <Container sx={{
      display: 'grid',
      placeItems: 'center',
      marginTop: '48px'
    }}>
      <Stack direction="column">
        <Avatar src='https://mui.com/static/images/avatar/3.jpg' />
        <h3>Nombre</h3>
        <p>Bio</p>
      </Stack>
    </Container>
  )
}
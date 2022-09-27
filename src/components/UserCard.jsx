import { Avatar, Container, Stack, Typography } from '@mui/material'

export const UserCard = ({ name, bio, avatar }) => {
  return (
    <Container>
      <Stack direction="column" alignItems="center">
        <Avatar src={avatar} alt="github user" sx={{
          width: 120,
          height: 120,
          marginBottom: '14px',
        }} />
        <Typography variant="h5">
          {name}
        </Typography>
        <Typography variant="subtitle1">
          {bio}
        </Typography>
      </Stack>
    </Container>
  )
}
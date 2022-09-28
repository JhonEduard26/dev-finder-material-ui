import { styled } from '@mui/material/styles'
import { Grid, Paper, Typography } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place'
import ForkRightIcon from '@mui/icons-material/ForkRight'
import CodeIcon from '@mui/icons-material/Code'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import BadgeIcon from '@mui/icons-material/Badge'
import TodayIcon from '@mui/icons-material/Today'

const Item = styled(Paper)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  height: 140,
  padding: 4,
  backgroundColor: '#f0f0f0',
  color: 'black',
}));

export const CardItem = (props) => {

  const created_at = props.created_at && new Date(props.created_at).getFullYear()

  return (
    <>
      <Grid item xs={4}>
        <Item>
          <PlaceIcon color="primary" />
          <Typography variant="subtitle2">Location</Typography>
          <Typography variant="subtitle1">{props.location ?? 'No set'}</Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <ForkRightIcon color="primary" />
          <Typography variant="subtitle2">Repositories</Typography>
          <Typography variant="subtitle1">{props.public_repos}</Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <CodeIcon color="primary" />
          <Typography variant="subtitle2">Gists</Typography>
          <Typography variant="subtitle1">{props.public_gists}</Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <BadgeIcon color="primary" />
          <Typography variant="subtitle2">Type</Typography>
          <Typography variant="subtitle1">{props.type}</Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <AlternateEmailIcon color="primary" />
          <Typography variant="subtitle2">Email</Typography>
          <Typography variant="subtitle1">{props.email ?? 'No set'}</Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <TodayIcon color="primary" />
          <Typography variant="subtitle2">Created at</Typography>
          <Typography variant="subtitle1">{created_at}</Typography>
        </Item>
      </Grid>
    </>
  )
}
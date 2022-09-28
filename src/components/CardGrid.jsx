import { Box, Grid } from '@mui/material'
import { CardItem } from './'

export const CardGrid = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <CardItem {...props} />
      </Grid>
    </Box >
  )
}


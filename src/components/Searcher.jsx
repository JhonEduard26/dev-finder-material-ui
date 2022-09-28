import { IconButton, Stack, TextField } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

export const Searcher = ({ user, onChange, reset, onSubmit }) => {
  return (
    <Stack
      direction="row"
    >
      <TextField
        fullWidth
        color="primary"
        placeholder="octocat"
        autoComplete="off"
        value={user}
        name="user"
        onChange={onChange}
        sx={{
          marginBottom: '24px',
        }}
        InputProps={{
          startAdornment: (
            <IconButton onClick={() => onSubmit(user)}>
              <SearchIcon />
            </IconButton>
          ),
          endAdornment: (
            <IconButton onClick={reset}>
              <ClearIcon />
            </IconButton>
          )
        }}
      >
      </TextField>
    </Stack>
  )
}
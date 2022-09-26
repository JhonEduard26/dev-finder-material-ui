import { IconButton, Input, Stack, TextField } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

export const Searcher = ({ user, onChange, reset, onSubmit }) => {
  return (
    <Stack
      direction="row"
    >
      <TextField
        fullWidth
        color="warning"
        placeholder='octocat'
        value={user}
        name="user"
        onChange={onChange}
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
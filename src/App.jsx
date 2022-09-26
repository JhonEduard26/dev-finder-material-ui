import { Container } from '@mui/material'
import { useState } from 'react'
import { Card, ErrorNotFound, Loader, Searcher } from './components'
import { useFetch, useForm } from './hooks'

const BASE_URL = 'https://api.github.com/users/'

export const App = () => {
  const [userSubmit, setUserSubmit] = useState('octocat')

  const [inputValue, setInputValue, resetInputValue] = useForm({
    user: ''
  })
  const { user } = inputValue

  const onSubmit = (user) => {
    setUserSubmit(user)
  }

  const { isLoading, data } = useFetch(`${BASE_URL}${userSubmit}`)
  const { message } = !!data && data

  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: '24px',
        minHeight: '100vh'
      }}
    >
      {
        isLoading
          ? (<Loader />)
          : (<Searcher
            user={user}
            onChange={setInputValue}
            reset={resetInputValue}
            onSubmit={onSubmit}
          />)
      }
      {
        message
          ? <ErrorNotFound />
          : <Card />
      }
    </Container>
  )
}
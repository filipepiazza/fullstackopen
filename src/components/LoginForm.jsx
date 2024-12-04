import { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, TextField } from '@mui/material'

export default function LoginForm({ handleLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = (event) => {
    event.preventDefault()
    handleLogin(username, password)
    setUsername('')
    setPassword('')
  }

  LoginForm.propTypes = {
    handleLogin: PropTypes.func.isRequired,
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={login}>
        <div>
          username
          <TextField
            data-testid="username"
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <TextField
            data-testid="password"
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <Button color="inherit" type="submit">
          login
        </Button>
      </form>
    </>
  )
}

import { useState } from 'react'
import PropTypes from 'prop-types'

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
        handleSubmit: PropTypes.func.isRequired,
        handleUsernameChange: PropTypes.func.isRequired,
        handlePasswordChange: PropTypes.func.isRequired,
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
      }

    return (
        <>
        <h2>Login</h2>
        <form onSubmit={login}>
            <div>
                username
                <input
                    type="text"
                    value={username}
                    name="Username"
                    onChange={({ target }) => setUsername(target.value)}
                />
            </div>
            <div>
                password
                <input
                    type="password"
                    value={password}
                    name="Password"
                    onChange={({ target }) => setPassword(target.value)}
                />
            </div>
            <button type="submit">login</button>
        </form>
        </>
    )
}
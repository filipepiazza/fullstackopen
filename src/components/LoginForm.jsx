export default function LoginForm({ handleLogin, username, password, handleUsername, handlePassword }) {
    return (
        <>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <div>
                username
                <input
                    type="text"
                    value={username}
                    name="Username"
                    onChange={({ target }) => handleUsername(target.value)}
                />
            </div>
            <div>
                password
                <input
                    type="password"
                    value={password}
                    name="Password"
                    onChange={({ target }) => handlePassword(target.value)}
                />
            </div>
            <button type="submit">login</button>
        </form>
        </>
    )
}
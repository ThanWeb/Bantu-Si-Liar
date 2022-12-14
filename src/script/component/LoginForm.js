import React from 'react'
import useInput from '../hooks/useInput'
import PropTypes from 'prop-types'

const LoginForm = ({ login }) => {
    const [identifier, handleIdentifierChange] = useInput('')
    const [password, handlePasswordChange] = useInput('')

    const onSubmitHandler = (e) => {
        e.preventDefault()
        login({
            identifier,
            password
        })
    }

    return (
        <form className="login-form" onSubmit={onSubmitHandler}>
            <div className="input-field">
                <label htmlFor='identifier'>E-mail atau Nama Pengguna </label>
                <input
                    id='identifier'
                    className='identifier'
                    type="text"
                    value={identifier}
                    onChange={handleIdentifierChange}
                    required
                />

            </div>
            <div className="input-field">
                <label htmlFor='password'>Kata Sandi</label>
                <input
                    id='password'
                    className='password'
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
            </div>
            <div className='input-field'>
                <button type='submit' className='login-btn btn'>MASUK</button>
            </div>
        </form>
    )
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired
}

export default LoginForm

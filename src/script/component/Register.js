import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'

const Register = ({ register }) => {
    const [name, onNameChange] = useInput()
    const [email, onEmailChange] = useInput()
    const [password, onPasswordChange] = useInput()

    const onSubmit = (e) => {
        e.preventDefault()
        register({
            name,
            email,
            password
        })
    }

    return (
        <form onSubmit={onSubmit} className='inputRegister'>
            <input
                type='text'
                placeholder='Nama'
                value={name}
                onChange={onNameChange}
            />
            <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={onEmailChange}
            />
            <input
                type='password'
                placeholder='Password'
                autoComplete='current-password'
                value={password}
                onChange={onPasswordChange}
            />
            <button>REGISTER</button>
        </form>
    )
}

Register.propTypes = {
    register: PropTypes.func.isRequired
}

export default Register

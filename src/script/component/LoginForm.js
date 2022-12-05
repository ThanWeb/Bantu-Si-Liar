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
        <form className="form-input">
            <div className="wrap-input">
                <label>E-mail atau Nama Pengguna </label>
                <input
                    type="text"
                    value={identifier}
                    onChange={handleIdentifierChange}
                    required
                />

            </div>
            <div className="wrap-input">
                <label>Kata Sandi</label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
            </div>
            <div className='button-container'>
                <button type="submit" className="btn-auth" onClick={onSubmitHandler}>Masuk</button>
            </div>
        </form>
    )
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired
}

export default LoginForm

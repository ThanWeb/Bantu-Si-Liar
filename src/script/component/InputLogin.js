import React from 'react'
import useInput from '../hooks/useInput'
import PropTypes from 'prop-types'

function InputLogin ({ login }) {
    const [email, handleEmailChange] = useInput('')
    const [password, handlePasswordChange] = useInput('')

    const onSubmitHandler = (e) => {
        e.preventDefault()
        login({
            email,
            password
        })
    }

    return (
        <form onSubmit={onSubmitHandler} className="form-input">
            <div className="wrap-input">
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="email" required
                />
                <p className="text-error"></p>
            </div>
            <div className="wrap-input">
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="password" required
                />
                <p className="text-error">{password}</p>
            </div>
            <button className="btn-auth">Sign In</button>
        </form>
    )
}

InputLogin.propTypes = {
    login: PropTypes.func.isRequired
}

export default InputLogin

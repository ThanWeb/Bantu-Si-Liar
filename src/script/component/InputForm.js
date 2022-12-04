import React from 'react'
import useInput from '../hooks/useInput'
import PropTypes from 'prop-types'

const InputForm = ({ login }) => {
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
                <label>Email/Username </label>
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="email"
                    required
                />

            </div>
            <div className="wrap-input">
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="password"
                    required
                />
            </div>
            <div className='button-container'>
                <button type="submit" className="btn-auth">Masuk</button>
            </div>
        </form>
    )
}

InputForm.propTypes = {
    login: PropTypes.func.isRequired
}

export default InputForm

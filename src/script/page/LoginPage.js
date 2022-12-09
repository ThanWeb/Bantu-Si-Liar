import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginForm from '../component/LoginForm'
import { login, putLoggedId } from '../utils/network-data'
import NotificationAlert from '../component/NotificationAlert'
import showNotification from '../utils/show-notification'
import PropTypes from 'prop-types'
import setDisplayDrawer from '../utils/set-display-drawer'

const LoginPage = ({ loginSuccess, loginStatus, data }) => {
    setDisplayDrawer()
    const navigate = useNavigate()
    const [messageText, setMessage] = useState('')
    const [errorStatus, setError] = useState(false)

    const onLogin = async ({ identifier, password }) => {
        const { error, message, id } = await login({ identifier, password })

        if (error) {
            setMessage(message)
            setError(error)
            showNotification()
        } else {
            putLoggedId(id)
            loginSuccess(id)
        }
    }

    if (loginStatus !== '') {
        navigate('/')
    }

    return (
        <div className='login-page'>
            <div>
                <header>
                    <img src='public/animasi-login.png' alt='Login' />
                </header>
                <h2>MARI MASUK</h2>
                <LoginForm login={onLogin} />
                <p className='footer-form'>Belum punya akun?
                    <span className='highlight'><Link to='/register'> Daftar</Link></span>
                </p>
            </div>
            <NotificationAlert status={errorStatus} text={messageText}/>
        </div>
    )
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func,
    loginStatus: PropTypes.string,
    data: PropTypes.object
}

export default LoginPage

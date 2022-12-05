import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginForm from '../component/LoginForm'
import { login, putLoggedId } from '../utils/network-data'
import NotificationAlert from '../component/NotificationAlert'
import showNotification from '../utils/show-notification'
import PropTypes from 'prop-types'

function LoginPage ({ loginSuccess }) {
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
            navigate('/')
        }
    }

    return (
        <div className='row'>
            <section className='side'>
                <img src='animasi-login.png' alt='Login' />
            </section>
            <div className='login-page'>
                <header>
                    <img className='logo' src='logo-transparent.png' alt='Logo Bantu Si Liar'/>
                </header>
                <h2>SELAMAT DATANG KEMBALI !</h2>
                <LoginForm login={onLogin} />
                <hr></hr>
                <p className='footer-form'>Belum punya akun ?
                    <span>{' '}<Link to='/register'>Daftar</Link></span>
                </p>
            </div>
            <NotificationAlert status={errorStatus} text={messageText}/>
        </div>

    )
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func
}

export default LoginPage

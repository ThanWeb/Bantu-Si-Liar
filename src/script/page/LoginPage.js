import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../component/LoginForm'
import { login, putLoggedId } from '../utils/network-data'
import NotificationAlert from '../component/NotificationAlert'
import showNotification from '../utils/show-notification'
import PropTypes from 'prop-types'

function LoginPage ({ loginSuccess, loginStatus, data }) {
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
        return (
            <div className='login-page'>
                <h3>Selamat datang, {data.name}</h3>
                <h3>Anda telah berhasil login</h3>
                <Link to='/'>Kembali ke Beranda</Link>
            </div>
        )
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
    loginSuccess: PropTypes.func,
    loginStatus: PropTypes.string,
    data: PropTypes.object
}

export default LoginPage

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputForm from '../component/InputForm'
import { login, putLoggedId } from '../utils/network-data'
import NotificationAlert from '../component/NotificationAlert'
import showNotification from '../utils/show-notification'

function LoginPage () {
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
            navigate('/')
        }
    }

    return (
        <div className="row">
            <section className="side">
                <img src='animasi-login.png' alt="" width="50%" />
            </section>
            <div className="login-page">
                <header>
                    <img className="logo" src='logo-transparent.png' alt="" width="10%" />
                </header>
                <h2>SELAMAT DATANG KEMBALI !</h2>
                <InputForm login={onLogin} />
                <hr></hr>
                <p className='footer-form'>Belum punya akun ?
                    <span>{' '}<Link to='/register'>Daftar</Link></span>
                </p>
            </div>
            <NotificationAlert status={errorStatus} text={messageText}/>
        </div>

    )
}

export default LoginPage

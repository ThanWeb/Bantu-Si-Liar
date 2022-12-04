import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputForm from '../component/InputForm'
import { login } from '../utils/network-data'

function LoginPage () {
    const navigate = useNavigate()
    const onLogin = async ({ email, password }) => {
        const { error } = await login({ email, password })

        if (!error) {
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
        </div>

    )
}

export default LoginPage

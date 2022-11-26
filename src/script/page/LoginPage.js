/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputLogin from '../component/InputLogin'
import Logo from '../img/LogoBantu.png'
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
        <section>
            <div className="header-logo">
                <img className="logo" src={Logo} alt="" width="5%" />
            </div>
            <div className="container-form">
                <div className="form-parent">
                    <h2>SELAMAT DATANG KEMBALI !</h2>
                    <InputLogin login={onLogin} />
                    <p>Belum punya akun?
                        <span><Link to='/register'>Daftar</Link></span>
                    </p>
                </div>
            </div>
        </section>

    )
}

export default LoginPage

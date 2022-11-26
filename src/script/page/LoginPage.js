/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputLogin from '../component/InputLogin'
import Logo from '../img/LogoBantu.png'
import AnimasiLogin from '../img/animasi-login.png'
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
            <div className="side">
                <img src={AnimasiLogin} alt="" width="50%" />
            </div>
            <div className="container-form">
                <div className="form-parent">
                    <div className="header-logo">
                        <img className="logo" src={Logo} alt="" width="10%" />
                    </div>
                    <h2>SELAMAT DATANG KEMBALI !</h2>
                    <InputLogin login={onLogin} />
                    <hr></hr>
                    <p>Belum punya akun?
                        <span><Link to='/register'>Daftar</Link></span>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default LoginPage

import React from 'react'
import { useNavigate } from 'react-router-dom'
import Register from '../component/Register'
import logo from '../img/LogoBantu.png'

function RegisterPage () {
    const navigate = useNavigate()
    async function onRegisterHandler (user) {
        const { error } = await Register(user)
        if (!error) {
            navigate('/')
        }
    }
    return (
        <section className='register-page'>
            <div className='header'>
                <img src={logo} alt='Logo Bantu Si Liar'></img>
                <h1>SELAMAT DATANG</h1>
            </div>
            <Register Register={onRegisterHandler}/>
        </section>

    )
}

export default RegisterPage

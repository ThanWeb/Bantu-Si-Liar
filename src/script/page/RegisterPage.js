import React from 'react'
import { useNavigate } from 'react-router-dom'
import Register from '../component/Register'
import logo from '../../public/Logo.png'

function RegisterPage () {
    const navigate = useNavigate()
    async function onRegisterHandler (user) {
        const { error } = await Register(user)
        if (!error) {
            navigate('/')
        }
    }
    return (
        <section className='page-register'>
            <header>
                <img src={logo} alt='Logo Bantu Si Liar'></img>
                <h1>SELAMAT DATANG</h1>
            </header>
            <Register Register={onRegisterHandler}/>
        </section>

    )
}

export default RegisterPage

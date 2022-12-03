import React from 'react'
import { useNavigate } from 'react-router-dom'
import RegisterForm from '../component/RegisterForm'
import { register } from '../utils/network-data'

function RegisterPage () {
    const navigate = useNavigate()
    async function onRegisterHandler (user) {
        const { error } = await register(user)
        if (!error) {
            navigate('/login')
        }
    }

    return (
        <div className='register-page'>
            <div className='container'>
                <header>
                    <img src='logo.png' className='logo' alt='Logo Bantu Si Liar'></img>
                    <h1>WELCOME</h1>
                </header>
                <RegisterForm register={onRegisterHandler}/>
            </div>
        </div>

    )
}

export default RegisterPage

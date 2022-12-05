import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RegisterForm from '../component/RegisterForm'
import { register } from '../utils/network-data'
import NotificationAlert from '../component/NotificationAlert'
import showNotification from '../utils/show-notification'

const RegisterPage = () => {
    const navigate = useNavigate()
    const [messageText, setMessage] = useState('')
    const [errorStatus, setError] = useState(false)

    async function onRegisterHandler (user) {
        const { error, message } = await register(user)
        setMessage(message)
        setError(error)
        showNotification()
        if (!error) {
            setTimeout(() => {
                navigate('/login')
            }, 4000)
        }
    }

    return (
        <div className='register-page'>
            <div className='container'>
                <header>
                    <img src='logo-transparent.png' className='logo' alt='Logo Bantu Si Liar'/>
                </header>
                <RegisterForm register={onRegisterHandler}/>
                <NotificationAlert status={errorStatus} text={messageText}/>
            </div>
        </div>
    )
}

export default RegisterPage

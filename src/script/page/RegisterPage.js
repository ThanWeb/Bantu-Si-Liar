import React from 'react'
import { useNavigate } from 'react-router-dom'
import Register from '../component/Register'

function RegisterPage () {
    const navigate = useNavigate()
    async function onRegisterHandler (user) {
        const { error } = await Register(user)
        if (!error) {
            navigate('/')
        }
    }
    return (
        <section className='pageRegister'>
            <h1>SELAMAT DATANG</h1>
            <Register Register={onRegisterHandler}/>
        </section>

    )
}

export default RegisterPage

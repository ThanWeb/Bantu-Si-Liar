import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'
import { Link } from 'react-router-dom'

const Register = ({ register }) => {
    const [username, onUsernameChange] = useInput()
    const [email, onEmailChange] = useInput()
    const [password, onPasswordChange] = useInput()
    const [profile, onProfileChange] = useInput()
    const [name, onNameChange] = useInput()
    const [phone, onPhoneChange] = useInput()
    const [province, onProvinceChange] = useInput()
    const [city, onCityChange] = useInput()
    const [address, onAddressChange] = useInput()

    const onSubmit = (e) => {
        e.preventDefault()
        register({
            username,
            email,
            password,
            profile,
            name,
            phone,
            province,
            city,
            address
        })
    }

    return (
        <form onSubmit={onSubmit} className='input-register'>
            <section className='akun'>
                <label htmlFor="username">Username</label>
                <input
                    type='text'
                    value={username}
                    onChange={onUsernameChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    type='email'
                    value={email}
                    onChange={onEmailChange}
                />
                <label htmlFor="password">Password</label>
                <input
                    type='password'
                    autoComplete='current-password'
                    value={password}
                    onChange={onPasswordChange}
                />
                <label htmlFor="profile">Profile Picture</label>
                <select
                    type='url'
                    value={profile}
                    onChange={onProfileChange}
                />
            </section>
            <section className='data-diri'>
                <h2>Data Diri</h2>
                <label htmlFor="name">Nama</label>
                <input
                    type='text'
                    value={name}
                    onChange={onNameChange}
                />
                <label htmlFor="phone">No Handphone</label>
                <input
                    type='tel'
                    value={phone}
                    onChange={onPhoneChange}
                />
                <label htmlFor="province">Provinsi</label>
                <select
                    type='select'
                    value={province}
                    onChange={onProvinceChange}
                />
                <label htmlFor="city">Kabupaten/Kota</label>
                <select
                    type='select'
                    value={city}
                    onChange={onCityChange}
                />
                <label htmlFor="address">Alamat Lengkap</label>
                <input
                    type='text'
                    className='address'
                    value={address}
                    onChange={onAddressChange}
                />
            </section>
            <button className='btn-daftar'>
                <Link to='/login'>DAFTAR</Link>
            </button>
        </form>
    )
}

Register.propTypes = {
    register: PropTypes.func.isRequired
}

export default Register

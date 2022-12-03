import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'
import { useNavigate } from 'react-router-dom'
import paginationSlider from '../utils/pagination-slider'
import STATIC from '../globals/static-data'

const RegisterForm = ({ register }) => {
    const navigate = useNavigate()
    const [pagination, togglePagination] = useState('')

    const [username, onUsernameChange] = useInput()
    const [email, onEmailChange] = useInput()
    const [password, onPasswordChange] = useInput()
    const [profile, onProfileChange] = useInput()
    const [name, onNameChange] = useInput()
    const [phone, onPhoneChange] = useInput()
    const [province, onProvinceChange] = useInput()
    const [city, onCityChange] = useInput()
    const [address, onAddressChange] = useInput()

    useEffect(() => {
        getPagination()
    }, [])

    const onSubmitHandler = () => {
        register({ username, email, password, profile, name, phone, province, city, address })
        navigate('/')
    }

    const getPagination = () => {
        const currentPagination = sessionStorage.getItem('pagination') || 'prev'
        togglePagination(currentPagination)
        sessionStorage.setItem('pagination', currentPagination)
    }

    const setPagination = () => {
        const prevPagination = sessionStorage.getItem('pagination')
        const newPagination = prevPagination === 'next' ? 'prev' : 'next'
        togglePagination(newPagination)
        sessionStorage.setItem('pagination', newPagination)
        paginationSlider()
    }

    return (
        <form onSubmit={onSubmitHandler} className='register'>
            <div className='pagination'>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type='text' value={username} onChange={onUsernameChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type='email' value={email} onChange={onEmailChange} required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type='password' autoComplete='current-password' value={password} onChange={onPasswordChange} required />
                </div>
                <div>
                    <span onClick={setPagination}>
                        {pagination === 'next' ? 'PREV' : 'NEXT'}
                    </span>
                </div>
            </div>
            <div className='pagination hidden'>
                <div>
                    <label htmlFor="name">Nama</label>
                    <input type='text' value={name} onChange={onNameChange} required />
                </div>
                <div>
                    <label htmlFor="phone">No Handphone</label>
                    <input type='tel' value={phone} onChange={onPhoneChange} required />
                </div>
                <div>
                    <label htmlFor="province">Provinsi</label>
                    <select type='select' value={province} onChange={onProvinceChange} required>
                        {
                            STATIC.PROVINCE.map((province, index) =>
                                <option key={index}>{ province }</option>
                            )
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="city">Kabupaten/Kota</label>
                    <select type='select' value={city} onChange={onCityChange} required />
                </div>
                <div>
                    <label htmlFor="address">Alamat Lengkap</label>
                    <input type='text' className='address' value={address} onChange={onAddressChange} required />
                </div>
                <div>
                    <label htmlFor="profile">Profile Picture</label>
                    <select type='url' value={profile} onChange={onProfileChange} required />
                </div>
                <div>
                    <span onClick={setPagination}>{pagination === 'next' ? 'PREV' : 'NEXT'}</span>
                    <button type='submit' className='btn-daftar'>SIGN UP</button>
                </div>
            </div>
        </form>
    )
}

RegisterForm.propTypes = {
    register: PropTypes.func
}

export default RegisterForm

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'
import STATIC from '../globals/static-data'
import showPictureOption from '../utils/show-picture-option'

const RegisterForm = ({ register }) => {
    const [cityOption, setCityOption] = useState([])

    const [username, setUsername] = useInput()
    const [email, setEmail] = useInput()
    const [password, setPassword] = useInput()
    const [picture, setPicture] = useState('https://img.icons8.com/material-sharp/96/null/user.png')
    const [name, setName] = useInput()
    const [phone, setPhone] = useInput()
    const [province, setProvince] = useInput('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useInput()

    useEffect(() => {
        changeCityOption()
    }, [province])

    const onSubmitHandler = () => {
        register({ username, email, password, picture, name, phone, province, city, address })
    }

    const changeCityOption = () => {
        setCity('')
        if (province === '') {
            setCityOption([])
        } else {
            STATIC.places.forEach(place => {
                if (place.province === province) {
                    setCityOption(place.cities)
                }
            })
        }
    }

    const changeSelectedCity = () => {
        const city = document.querySelector('#city').value
        setCity(city)
    }

    const changePicture = (picture) => {
        setPicture(picture)
    }

    return (
        <form onSubmit={onSubmitHandler} className='register-form'>
            <div>
                <div className='input-field'>
                    <label htmlFor='username'>Nama Pengguna</label>
                    <input id='username' type='text' value={username} onChange={setUsername} required />
                </div>
                <div className='input-field'>
                    <label htmlFor='email'>Alamat E-mail</label>
                    <input id='email' type='email' value={email} onChange={setEmail} required />
                </div>
                <div className='input-field'>
                    <label htmlFor='password'>Kata Sandi</label>
                    <input id='password' type='password' minLength='8' autoComplete='current-password' value={password} onChange={setPassword} required />
                </div>
            </div>
            <div>
                <div className='input-field'>
                    <label htmlFor='name'>Nama Lengkap</label>
                    <input id='name' type='text' value={name} onChange={setName} required />
                </div>
                <div className='input-field'>
                    <label htmlFor='phone'>Nomor Telepon</label>
                    <input id='phone' type='tel' value={phone} onChange={setPhone} required />
                </div>
                <div className='input-field'>
                    <label>Provinsi</label>
                    <select type='select' value={province} onChange={setProvince} required>
                        <option></option>
                        {
                            STATIC.places.map((place, index) =>
                                <option key={index}>{ place.province }</option>
                            )
                        }
                    </select>
                </div>
                <div className='input-field'>
                    <label>Kabupaten/ Kota</label>
                    <select id='city' type='select' value={city} onChange={changeSelectedCity} required>
                        <option></option>
                        {
                            cityOption.map((city, index) =>
                                <option key={index}>{ city }</option>
                            )
                        }
                    </select>
                </div>
                <div className='input-field'>
                    <label htmlFor='address'>Alamat Lengkap</label>
                    <input id='address' type='text' className='address' value={address} onChange={setAddress} required />
                </div>
                <div className='input-field'>
                    <img src={picture} alt='Selected Picture'/>
                    <span onClick={showPictureOption}>Choose Picture</span>
                    <div className='hidden picture-list' id='picture-list'>
                        {
                            STATIC.profilePicture.map((picture, index) =>
                                <img key={index} className='picture-option' src={picture} alt={`Picture ${index + 1}`} onClick={() => changePicture(picture)} />
                            )
                        }
                    </div>
                </div>
                <div className='input-field'>
                    <button type='submit' className='register-btn'>DAFTAR</button>
                </div>
            </div>
        </form>
    )
}

RegisterForm.propTypes = {
    register: PropTypes.func
}

export default RegisterForm

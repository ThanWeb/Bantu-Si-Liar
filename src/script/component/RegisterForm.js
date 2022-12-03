import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'
import { useNavigate } from 'react-router-dom'
import STATIC from '../globals/static-data'
import showPictureOption from '../utils/show-picture-option'

const RegisterForm = ({ register }) => {
    const navigate = useNavigate()
    const [cityOption, setCityOption] = useState([])

    const [username, setUsername] = useInput()
    const [email, setEmail] = useInput()
    const [password, setPassword] = useInput()
    const [profile, setProfile] = useState('')
    const [name, setName] = useInput()
    const [phone, setPhone] = useInput()
    const [province, setProvince] = useInput('- Please Select -')
    const [city, setCity] = useState('- Please Select -')
    const [address, setAddress] = useInput()

    useEffect(() => {
        changeCityOption()
    }, [province])

    const onSubmitHandler = () => {
        register({ username, email, password, profile, name, phone, province, city, address })
        navigate('/')
    }

    const changeCityOption = () => {
        setCity('')
        if (province === '- Please Select -') {
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

    const setPicture = (picture) => {
        setProfile(picture)
    }

    return (
        <form onSubmit={onSubmitHandler} className='register'>
            <div>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' value={username} onChange={setUsername} required />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' value={email} onChange={setEmail} required />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='password' minLength='8' autoComplete='current-password' value={password} onChange={setPassword} required />
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor='name'>Nama</label>
                    <input id='name' type='text' value={name} onChange={setName} required />
                </div>
                <div>
                    <label htmlFor='phone'>No Handphone</label>
                    <input id='phone' type='tel' value={phone} onChange={setPhone} required />
                </div>
                <div>
                    <label>Provinsi</label>
                    <select type='select' value={province} onChange={setProvince} required>
                        <option>- Please Select -</option>
                        {
                            STATIC.places.map((place, index) =>
                                <option key={index}>{ place.province }</option>
                            )
                        }
                    </select>
                </div>
                <div>
                    <label>Kabupaten/ Kota</label>
                    <select id='city' type='select' value={city} onChange={changeSelectedCity} required>
                        <option>- Please Select -</option>
                        {
                            cityOption.map((city, index) =>
                                <option key={index}>{ city }</option>
                            )
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor='address'>Alamat Lengkap</label>
                    <input id='address' type='text' className='address' value={address} onChange={setAddress} required />
                </div>
                <div>
                    {
                        profile !== '' &&
                            <img src={profile} alt={'Selected Picture'} />
                    }
                    <span onClick={showPictureOption}>Choose Picture</span>
                    <div className='hidden picture-list' id='picture-list'>
                        {
                            STATIC.profilePicture.map((picture, index) =>
                                <img key={index} className='picture-option' src={picture} alt={`Picture ${index + 1}`} onClick={() => setPicture(picture)} />
                            )
                        }
                    </div>
                </div>
                <div>
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

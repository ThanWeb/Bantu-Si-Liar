import React, { useEffect, useState } from 'react'
import useInput from '../hooks/useInput'
import PropTypes from 'prop-types'
import STATIC from '../globals/static-data'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import NotificationAlert from '../component/NotificationAlert'
import showNotification from '../utils/show-notification'

const CreateReportForm = ({ createReport, profileData }) => {
    const navigate = useNavigate()
    const [cityOption, setCityOption] = useState([])
    const [messageText, setMessage] = useState('')
    const [errorStatus, setError] = useState(false)

    const [animal, onAnimalChange] = useInput()
    const [status, onStatusChange] = useInput()
    const [province, setProvince] = useInput('')
    const [city, onCityChange] = useState('')
    const [location, onLocationChange] = useInput()
    const [color, onColorChange] = useInput()
    const [characteristic, onCharacteristicChange] = useInput()
    const [reporter, onReporterChange] = useInput()
    const [phone, onPhoneChange] = useInput()
    const [picture, onPictureChange] = useState(null)

    const logTime = () => {
        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu']
        const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        const now = new Date()
        const date = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`
        return date
    }

    useEffect(() => {
        changeCityOption()
    }, [province])

    const onSubmitHandler = async () => {
        const date = logTime()
        const formData = new FormData()

        formData.append('animal', animal)
        formData.append('status', status)
        formData.append('province', province)
        formData.append('city', city)
        formData.append('location', location)
        formData.append('color', color)
        formData.append('characteristic', characteristic)
        formData.append('reporter', reporter)
        formData.append('phone', phone)
        formData.append('picture', picture)
        formData.append('date', date)

        axios({
            url: 'https://antekteknologi.my.id/api/rest-api-bantu-si-liar/api/create-report.php',
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        })

            .then((res) => {
                setMessage('Terima kasih, laporan anda akan segera diproses')
                setError(false)
                showNotification()
                setTimeout(() => {
                    navigate('/report-list')
                }, 4000)
            })
            .catch((err) => {
                setMessage(err)
                setError(true)
                showNotification()
            })
    }

    const fileOnchangeHandler = (event) => {
        onPictureChange(event.target.files[0])
    }

    const changeCityOption = () => {
        onCityChange('')
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
        onCityChange(city)
    }

    return (
        <form onSubmit={onSubmitHandler} className='create-report-form'>
            <div>
                <div className='input-field'>
                    <label htmlFor='animal'>Jenis Hewan</label>
                    <input id='animal' type='text' value={animal} onChange={onAnimalChange} required />
                </div>
                <div className='input-field'>
                    <label>Status</label>
                    <select id='status' type='select' value={status} onChange={onStatusChange} required>
                        <option></option>
                        <option>Hilang</option>
                        <option>Liar</option>
                    </select>
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
                    <label htmlFor='location'>Lokasi Terakhir Terlihat</label>
                    <input id='location' type='text' value={location} onChange={onLocationChange} required />
                </div>
                <div className='input-field'>
                    <label htmlFor='color'>Warna Bulu</label>
                    <input id='color' type='text' value={color} onChange={onColorChange} required />
                </div>
                <div className='input-field'>
                    <label htmlFor='characteristic'>Deskripsi Lengkap (Nama, Ciri Khas)</label>
                    <input id='characteristic' type='text' value={characteristic} onChange={onCharacteristicChange} required />
                </div>
                <div className='input-field'>
                    <label htmlFor='reporter'>Nama Lengkap Pelapor</label>
                    <input id='reporter' type='text' value={reporter} onChange={onReporterChange} required />
                </div>
                <div className='input-field'>
                    <label htmlFor='phone'>Nomor Telepon Pelapor</label>
                    <input id='phone' type='text' value={phone} onChange={onPhoneChange} required />
                </div>
                <div className='input-field'>
                    <label htmlFor='picture'>Foto Hewan</label>
                    <input id='picture' type='file' onChange={fileOnchangeHandler} required />
                </div>
                <div className='input-field'>
                    <button type='submit' className='send-btn'>KIRIM LAPORAN</button>
                </div>
            </div>
            <NotificationAlert status={errorStatus} text={messageText}/>
        </form>
    )
}

CreateReportForm.propTypes = {
    createReport: PropTypes.func,
    profileData: PropTypes.object
}

export default CreateReportForm

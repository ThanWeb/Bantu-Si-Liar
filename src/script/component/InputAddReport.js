import React, { useState } from 'react'
import useInput from '../hooks/useInput'
import { useNavigate } from 'react-router-dom'
import http from '../utils/http'

function InputAddReport () {
    const navigate = useNavigate()

    const [species, onSpeciesChange] = useInput()
    const [color, onColorChange] = useInput()
    const [specialFeatures, onFeaturesChange] = useInput()
    const [location, onLocationChange] = useInput()
    const [animalDescription, onDescriptionChange] = useInput()
    const [date, onDateChange] = useInput()
    // handle gambar
    const [file, setFile] = useInput([])
    const handleFile = (e) => {
        setFile({ animal_img: e.target.files[0] })
    }
    const [error, setError] = useState([])
    const [loading, setLoading] = useState(false)

    const onSubmitForm = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('animal_img', file.animal_img)
        formData.append('species', onSpeciesChange.species)
        formData.append('color', onColorChange.color)
        formData.append('special_features', onFeaturesChange.special_features)
        formData.append('location', onLocationChange.location)
        formData.append('animal_description', onDescriptionChange.animal_description)
        formData.append('date', onDateChange.date)

        setLoading(true)
        setError([])

        try {
            const req = await http.post('/user', formData)
            if (req.data.status) {
                alert('Data berhasil ditambahkan')
                navigate('/homepage')
            } else {
                alert('Opss data gagal ditambahkan')
            }
        } catch (error) {
            setError(error.response.data.errors)
        }
        setLoading(false)
    }

    return (
        <>
            <form onSubmit={onSubmitForm} className='input-add-report'>
                <table className='data'>
                    <thead>
                        {loading && <tr><td>loading...</td></tr>}
                        <tr>
                            <td><label>Species</label></td>
                            <input
                                type="text"
                                name="species"
                                className="wrap-input"
                                value={species}
                                onChange={onSpeciesChange}
                                placeholder="species"
                                required />
                        </tr>
                        <tr>
                            <td><label>Color</label></td>
                            <input
                                type="text"
                                name="color"
                                className="wrap-input"
                                value={color}
                                onChange={onColorChange}
                                placeholder="color"
                                required />
                        </tr>
                        <tr>
                            <td><label>Special Features</label></td>
                            <textarea
                                type="text"
                                name="special_features"
                                className="wrap-input"
                                value={specialFeatures}
                                onChange={onFeaturesChange}
                                placeholder="special features"
                                required />
                        </tr>
                        <tr>
                            <td><label>Location</label></td>
                            <textarea
                                type="text"
                                name="location"
                                className="wrap-input"
                                value={location}
                                onChange={onLocationChange}
                                placeholder="location"
                                required />
                        </tr>
                        <tr>
                            <td><label>Description</label></td>
                            <textarea
                                type="text"
                                name="animal_description"
                                className="wrap-input-desc"
                                value={animalDescription}
                                onChange={onDescriptionChange}
                                placeholder="animal description"
                                required />
                        </tr>
                    </thead>
                </table>
                <table className='data'>
                    <thead>
                        <tr>
                            <td><label>Date</label></td>
                            <input
                                type="text"
                                name="date"
                                className="wrap-input"
                                value={date}
                                onChange={onDateChange}
                                placeholder="date"
                                required />
                        </tr>
                        <tr>
                            <td><label>Animal Image</label></td>
                            <input
                                type="file"
                                name="animal_img"
                                className="wrap-input"
                                onChange={handleFile}
                                placeholder="File"
                                required />
                        </tr>
                    </thead>
                </table>

            </form><div className='button-container'>
                <button type="submit" className="btn-add">Add Report</button>
            </div>
        </>
    )
}

export default InputAddReport

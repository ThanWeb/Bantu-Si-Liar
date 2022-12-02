import React from 'react'
import useInput from '../hooks/useInput'
import { useNavigate } from 'react-router-dom'
import http from '../utils/http'
// import PropTypes from 'prop-types'

function InputAddReport() {
    const navigate = useNavigate()

    const [data, setData] = useInput({
        species: '',
        color: '',
        special_features: '',
        location: '',
        animal_description: '',
        date: '',
        animal_img: ''
    })

    // handle input
    const handleInput = (e) => {
        e.preventDefault()
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    // handle gambar
    const [file, setFile] = useInput([])
    const handleFile = (e) => {
        setFile({ apk_img: e.target.files[0] })
    }
    const onSubmitForm = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('animal_img', file.animal_img)
        formData.append('species', data.species)
        formData.append('color', data.color)
        formData.append('special_features', data.special_features)
        formData.append('location', data.location)
        formData.append('animal_description', data.animal_description)
        formData.append('date', data.date)
        console.log(formData)

        const req = await http.post('/user', formData)
        if (req.data.status) {
            alert('Data berhasil ditambahkan')
            navigate('/homepage')
            setData({
                ...data,
                species: '',
                color: '',
                special_features: '',
                location: '',
                animal_description: '',
                date: '',
                animal_img: ''
            })
        }
    }

    return (
        <form onSubmit={onSubmitForm} className='input-add-report'>
            <table >
                <thead>
                    <tr>
                        <td><label>Species</label></td>
                        <td><input
                            type="text"
                            name="species"
                            value={data.species}
                            onChange={handleInput}
                            placeholder="species"
                            required
                        /></td>
                    </tr>
                    <tr>
                        <td><label>Color</label></td>
                        <input
                            type="text"
                            name="color"
                            value={data.color}
                            onChange={handleInput}
                            placeholder="color"
                            required
                        />
                    </tr>
                    <tr>
                        <td><label>Special Features</label></td>
                        <textarea
                            type="text"
                            name="special_features"
                            value={data.special_features}
                            onChange={handleInput}
                            placeholder="special features"
                            required
                        />
                    </tr>
                    <tr>
                        <td><label>Location</label></td>
                        <textarea
                            type="text"
                            name="location"
                            value={data.location}
                            onChange={handleInput}
                            placeholder="location"
                            required
                        />
                    </tr>
                    <tr>
                        <td><label>Date</label></td>
                        <input
                            type="text"
                            name="date"
                            value={data.date}
                            onChange={handleInput}
                            placeholder="date"
                            required
                        />
                    </tr>
                    <tr>
                        <td><label>Animal Image</label></td>
                        <input
                            type="file"
                            name="animal_img"
                            onChange={handleFile}
                            placeholder="File"
                            required
                        />
                    </tr>
                    <tr>
                        <td><label>Description</label></td>
                        <textarea
                            type="text"
                            name="animal_description"
                            value={data.animal_description}
                            onChange={handleInput}
                            placeholder="animal description"
                            required
                        />
                    </tr>
                    <div className='button-container'>
                        <button type="submit" className="btn-add">Add Report</button>
                    </div>

                </thead>
            </table >
        </form >
    )
}

export default InputAddReport

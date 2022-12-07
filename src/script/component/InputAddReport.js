import React from 'react'
import useInput from '../hooks/useInput'
// import { useNavigate } from 'react-router-dom'

function InputAddReport () {
    // const navigate = useNavigate()

    const [species, onSpeciesChange] = useInput()
    const [color, onColorChange] = useInput()
    const [specialFeatures, onFeaturesChange] = useInput()
    const [location, onLocationChange] = useInput()
    const [animalDescription, onDescriptionChange] = useInput()
    const [date, onDateChange] = useInput()

    // const [file, setFile] = useInput([])
    // const handleFile = (e) => {
    //     setFile({ animal_img: e.target.files[0] })
    // }

    const onSubmitForm = async (e) => {
        // e.preventDefault()
        // const formData = new FormData()
        // formData.append('animal_img', file.animal_img)
        // formData.append('species', onSpeciesChange.species)
        // formData.append('color', onColorChange.color)
        // formData.append('special_features', onFeaturesChange.special_features)
        // formData.append('location', onLocationChange.location)
        // formData.append('animal_description', onDescriptionChange.animal_description)
        // formData.append('date', onDateChange.date)

        // setLoading(true)
        // setError([])

        // try {
        //     const req = await http.post('/user', formData)
        //     if (req.data.status) {
        //         alert('Data berhasil ditambahkan')
        //         navigate('/homepage')
        //     } else {
        //         alert('Opss data gagal ditambahkan')
        //     }
        // } catch (error) {
        //     setError(error.response.data.errors)
        // }
        // setLoading(false)
    }

    return (
        <>
            <form onSubmit={onSubmitForm} className='container-add-report'>
                <section className='data'>
                    <div className="input-row">
                        <div className="input-col" style={{ width: '150px' }}>Species</div>
                        <div className="input-prop">
                            <input className="input-wrapper"
                                type="text"
                                name="species"
                                value={species}
                                onChange={onSpeciesChange}
                                placeholder="species"
                                required />
                        </div>
                    </div>
                    <div className="input-row">
                        <div className="input-col" style={{ width: '150px' }}>Color</div>
                        <div className="input-prop">
                            <input className="input-wrapper"
                                type="text"
                                name="color"
                                value={color}
                                onChange={onColorChange}
                                placeholder="color"
                                required />
                        </div>
                    </div>
                    <div className="input-row">
                        <div className="input-col" style={{ width: '150px' }}>Special Features</div>
                        <div className="input-prop">
                            <textarea className="input-wrapper"
                                type="text"
                                name="special_features"
                                value={specialFeatures}
                                onChange={onFeaturesChange}
                                placeholder="special features"
                                required />
                        </div>
                    </div>
                    <div className="input-row">
                        <div className="input-col" style={{ width: '150px' }}>Location</div>
                        <div className="input-prop">
                            <textarea className="input-wrapper"
                                type="text"
                                name="location"
                                value={location}
                                onChange={onLocationChange}
                                placeholder="location"
                                required />
                        </div>
                    </div>
                    <div className="input-row">
                        <div className="input-col" style={{ width: '150px' }}>Description</div>
                        <div className="input-prop">
                            <textarea className="input-wrapper"
                                type="text"
                                name="animal_description"
                                value={animalDescription}
                                onChange={onDescriptionChange}
                                placeholder="animal description"
                                required />
                        </div>
                    </div>
                </section>

                <section className='data'>
                    <div className="input-row">
                        <div className="input-col" style={{ width: '150px' }}>Date</div>
                        <div className="input-prop">
                            <input className="input-wrapper"
                                type="text"
                                name="date"
                                value={date}
                                onChange={onDateChange}
                                placeholder="date"
                                required />
                        </div>
                    </div>
                    <div className="input-row">
                        <div className="input-col" style={{ width: '150px' }}>Animal Image</div>
                        <div className="input-prop">
                            <input className="input-wrapper"
                                type="file"
                                name="animal_img"
                                // onChange={handleFile}
                                placeholder="File"
                                required />
                        </div>
                    </div>
                </section>
                <div className='button-container'>
                    <button type="submit" className="btn-add">Add Report</button>
                </div>

            </form>
        </>
    )
}

export default InputAddReport

/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import InputAddReport from '../component/InputAddReport'
import { login } from '../utils/network-data'

function AddReportPage () {
    const navigate = useNavigate()
    const onLogin = async ({ email, password }) => {
        const { error } = await login({ email, password })

        if (!error) {
            navigate('/')
        }
    }

    return (
        <section className="add-report-page">
            <header>
                <h2>LAPORKAN</h2>
            </header>
            <InputAddReport login={onLogin} />
        </section>

    )
}
export default AddReportPage

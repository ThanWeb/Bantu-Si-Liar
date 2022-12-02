/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import InputAddReport from '../component/InputAddReport'

function AddReportPage () {
    const navigate = useNavigate()

    return (
        <section className="add-report-page">
            <header>
                <h2>LAPORKAN</h2>
            </header>
            <InputAddReport />
        </section>

    )
}
export default AddReportPage

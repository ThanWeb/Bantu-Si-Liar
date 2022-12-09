/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { Link } from 'react-router-dom'
import InputAddReport from '../component/InputAddReport'
import { HiArrowLeft } from 'react-icons/hi'

function AddReportPage () {
    return (
        <section className="report-page">
            <header>
                <h2>LAPORKAN</h2>
            </header>
            <h4>
                <Link to="/">
                    <HiArrowLeft />{'Back'}
                </Link>
            </h4>
            <InputAddReport />
        </section>

    )
}
export default AddReportPage

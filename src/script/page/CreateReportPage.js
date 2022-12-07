import React from 'react'
import { Link } from 'react-router-dom'
import CreateReportForm from '../component/CreateReportForm'
import { HiArrowLeft } from 'react-icons/hi'

function CreateReportPage () {
    return (
        <section className="add-report-page">
            <header>
                <h2>LAPORKAN</h2>
            </header>
            <h4>
                <Link to="/">
                    <HiArrowLeft />{'Back'}
                </Link>
            </h4>
            <CreateReportForm />
        </section>

    )
}
export default CreateReportPage

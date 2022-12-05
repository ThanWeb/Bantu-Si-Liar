import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ReportPage = ({ loginStatus }) => {
    if (loginStatus === '') {
        return (
            <div>
                <p>Silahkan Masuk untuk dapat membuat Laporan</p>
                <Link to='/login'>Login</Link>
            </div>
        )
    }

    return (
        <div>
            <h1>ReportPage</h1>
        </div>
    )
}

ReportPage.propTypes = {
    loginStatus: PropTypes.string
}

export default ReportPage

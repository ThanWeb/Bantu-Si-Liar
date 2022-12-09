import React from 'react'
import { Link } from 'react-router-dom'
import CreateReportForm from '../component/CreateReportForm'
import PropTypes from 'prop-types'
import setDisplayDrawer from '../utils/set-display-drawer'

const CreateReportPage = ({ loginStatus }) => {
    setDisplayDrawer()
    if (loginStatus === '') {
        return (
            <div className='create-report-page'>
                <p>Silahkan Masuk untuk dapat membuat Laporan</p>
                <Link to='/login' className='login-btn btn'>Masuk</Link>
            </div>
        )
    }

    return (
        <div className='create-report-page'>
            <CreateReportForm />
        </div>
    )
}

CreateReportPage.propTypes = {
    loginStatus: PropTypes.string
}

export default CreateReportPage

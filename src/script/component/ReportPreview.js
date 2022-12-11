import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import CONFIG from '../globals/config'

const ReportPreview = ({ reportData }) => {
    return (
        <div className='report-preview'>
            <img src={`${CONFIG.BASE_IMAGE_URL}${reportData.picture}`}/>
            <Link to={`/report-detail/${reportData.id}`}>
                <h3>Jenis hewan {reportData.animal}</h3>
            </Link>
            <span>Status: {reportData.status}</span>
            <p>Terakhir dilihat di lokasi {reportData.location}</p>
            <p>Nama pelapor {reportData.reporter}</p>
            <p>Laporan ditulis pada {reportData.date}</p>
            <Link to={`/report-detail/${reportData.id}`}>
                <p className='highlight'>Selengkapnya ...</p>
            </Link>
        </div>
    )
}

ReportPreview.propTypes = {
    reportData: PropTypes.object
}

export default ReportPreview

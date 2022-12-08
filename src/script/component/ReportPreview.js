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
            <p>Laporan dibuat oleh {reportData.reporter}, pada {reportData.date}</p>
            <p>Terakhir dilihat di {reportData.location}</p>
        </div>
    )
}

ReportPreview.propTypes = {
    reportData: PropTypes.object
}

export default ReportPreview

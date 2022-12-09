import React from 'react'
import PropTypes from 'prop-types'
import ReportPreview from './ReportPreview'
import { Link } from 'react-router-dom'

const ReportsSection = ({ reportList }) => {
    const getLatestReports = reports => {
        const length = reportList.length < 3 ? reportList.length : 3
        const selectedReports = []
        for (let i = 0; i < length; i++) {
            const report = reports[i]
            selectedReports.push(<ReportPreview key={i} reportData={report}/>)
        }
        return selectedReports
    }

    return (
        <div className='reports-section'>
            <h2>Laporan Terbaru</h2>
            {
                getLatestReports(reportList)
            }
            <div className='see-all-btn btn'>
                <Link to='/report-list'>Lihat Semua</Link>
            </div>
        </div>
    )
}

ReportsSection.propTypes = {
    reportList: PropTypes.arrayOf(PropTypes.object)
}

export default ReportsSection

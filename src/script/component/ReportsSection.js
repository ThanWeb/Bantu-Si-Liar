import React from 'react'
import PropTypes from 'prop-types'
import ReportPreview from './ReportPreview'
import { Link } from 'react-router-dom'

const ReportsSection = ({ reportList }) => {
    const getLatestReports = reports => {
        const expectedTotal = screen.width >= 992 && screen.width <= 1024 ? 4 : 3
        const length = reportList.length < expectedTotal ? reportList.length : expectedTotal
        const selectedReports = []
        for (let i = reports.length - 1; i > reports.length - length - 1; i--) {
            const report = reports[i]
            selectedReports.push(<ReportPreview key={i} reportData={report}/>)
        }
        return selectedReports
    }

    return (
        <div className='reports-section'>
            <h2>Laporan Terbaru</h2>
            <div className='report-list'>
                {
                    getLatestReports(reportList)
                }
            </div>
            <div className='see-all-btn btn'>
                <Link to='/report-list' className='full-width'>Lihat Semua</Link>
            </div>
        </div>
    )
}

ReportsSection.propTypes = {
    reportList: PropTypes.arrayOf(PropTypes.object)
}

export default ReportsSection

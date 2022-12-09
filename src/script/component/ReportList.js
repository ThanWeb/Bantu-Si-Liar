import React from 'react'
import ReportItem from './ReportItem'
import PropTypes from 'prop-types'

function ReportList ({ reports }) {
    return (
        <section className="report-list">
            <div>
                <h1 className="align-center">
                    Daftar Laporan
                </h1>
            </div>
            <div className="report-container">
                {reports.map(report =>
                    <ReportItem key={report.id} report={report} />
                )}
            </div>
        </section>
    )
}

ReportList.propTypes = {
    reports: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ReportList

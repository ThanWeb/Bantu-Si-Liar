import React, { useState, useEffect } from 'react'
import { getReports } from '../utils/network-data'
import ReportPreview from '../component/ReportPreview'

const ReportListPage = () => {
    const [reports, setReports] = useState([])

    useEffect(() => {
        retrieveReports()
    }, [])

    const retrieveReports = async () => {
        const { data } = await getReports()
        setReports(data)
    }

    return (
        <div className='report-list-page'>
            {
                reports.map((report, index) => <ReportPreview key={index} reportData={report}/>)
            }
        </div>
    )
}

export default ReportListPage

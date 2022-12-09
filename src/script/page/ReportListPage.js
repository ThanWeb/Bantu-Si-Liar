import React, { useState, useEffect } from 'react'
import { getReports } from '../utils/network-data'
import ReportPreview from '../component/ReportPreview'
import { Link } from 'react-router-dom'

const ReportListPage = () => {
    const [reports, setReports] = useState([])

    useEffect(() => {
        retrieveReports()
    }, [])

    const retrieveReports = async () => {
        const { data } = await getReports()
        setReports(data)
    }

    if (reports.length === 0) {
        return (
            <div className='report-list-page'>
                <h2>Maaf, belum ada laporan yang sudah dibuat untuk saat ini</h2>
                <Link to='/create-report'>Buat Laporan</Link>
            </div>
        )
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

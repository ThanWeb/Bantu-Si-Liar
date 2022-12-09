import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleReport } from '../utils/network-data'

const ReportDetailPage = () => {
    const { id } = useParams()
    const [report, setReport] = useState({})

    useEffect(() => {
        getReportData()
    }, [])

    const getReportData = async () => {
        const { data } = await getSingleReport(id)
        setReport(data)
    }

    return (
        <div className='report-detail-page'>
            <img src={report.picture} alt='Report Image'/>
            <p>Laporan dibuat pada {report.date}</p>
            <h3>Jenis Hewan {report.animal}</h3>
            <p>Warna Bulu {report.color}</p>
            <div>
                <p>Deskripsi Lengkap</p>
                <p>{report.characteristic}</p>
            </div>
            <p>Lokasi terakhir terlihat di {report.location}, {report.city}, {report.province}</p>
            <p>Laporan dibuat oleh {report.reporter}</p>
            <p>Nomor telepon pelapor {report.phone}</p>
        </div>
    )
}

export default ReportDetailPage

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleReport } from '../utils/network-data'
import CONFIG from '../globals/config'

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
            <div>
                <img src={`${CONFIG.BASE_IMAGE_URL}${report.picture}`} alt='Report Image'/>
            </div>
            <div>
                <p>Laporan dibuat pada <span className='highlight'>{report.date}</span></p>
                <h3>Jenis Hewan <span className='highlight'>{report.animal}</span></h3>
                <p>Warna Bulu <span className='highlight'>{report.color}</span></p>
                <div>
                    <p>Deskripsi Lengkap</p>
                    <p><span className='highlight'>{report.characteristic}</span></p>
                </div>
                <p>Lokasi terakhir terlihat di <span className='highlight'>{report.location}, {report.city}, {report.province}</span></p>
                <p>Laporan dibuat oleh <span className='highlight'>{report.reporter}</span></p>
                <p>Nomor telepon pelapor <span className='highlight'>{report.phone}</span></p>
            </div>
        </div>
    )
}

export default ReportDetailPage

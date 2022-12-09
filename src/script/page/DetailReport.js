import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton'
import { deleteNote, getReportData } from '../utils/network-data'
import { HiArrowLeft } from 'react-icons/hi'

const DetailReport = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [report, setReport] = useState({})
    const [loading, setLoading] = useState(true)

    const onDeleteHandler = async (id) => {
        await deleteNote(id)
        navigate('/')
    }

    useEffect(() => {
        const getDetailReport = async () => {
            setLoading(true)
            const { data } = await getReportData(id)
            setReport(data)
            setLoading(false)
        }

        getDetailReport()
    }, [id])

    return (
        <>
            {loading && <h2 style={{ textAlign: 'center', paddingTop: 40, color: 'var(--font-color)' }}>Loading...</h2>}
            <div className="container">
                <h4>
                    <Link to="/">
                        <HiArrowLeft />{'Back'}
                    </Link>
                </h4>
                <div className="title-detail">
                    <h1>{report.title}</h1>
                    <div>
                        <DeleteButton id={report.id} onDeleteHandler={onDeleteHandler} />
                    </div>
                </div>
                {
                    report.createdAt &&
                    <p>{new Date(report.createdAt).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                }
                <p className="content-detail">{report.body}</p>
            </div>
        </>
    )
}

export default DetailReport

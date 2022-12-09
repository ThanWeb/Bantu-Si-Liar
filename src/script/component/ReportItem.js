import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function ReportItem ({ report }) {
    return (
        <>
            <div className="card">
                <Link to={`/reports/${report.id}`}>

                    <div className="title">{'Status : '} {report.status}</div>
                    <div className="image">
                        <img src={`http://localhost:8000/${report.animal_img}`} width="80%" alt="animalimg" />
                    </div>
                    <div className="text">
                        <p>{'Jenis : '} {report.species}</p>
                        <p>{'Warna : '} {report.color}</p>
                        <p>{'Lokasi : '} {report.location}</p>
                    </div>

                    <button className="buy-button details">
                        Buy Now
                    </button>
                </Link>
            </div>
        </>
    )
}

ReportItem.propTypes = {
    report: PropTypes.oneOfType([PropTypes.object]).isRequired
}

export default ReportItem

import React from 'react'
import { Link } from 'react-router-dom'

const Jumbotron = () => {
    return (
        <header className='jumbotron'>
            <div className='header'>
                <img src='public/jumbotron-image.png' alt='Jumbotron Image' className='image'/>
                <Link to='create-report' className='report-btn btn'>Laporkan</Link>
            </div>
            <div className='description'>
                <h4>Kalian yang menemukan,</h4>
                <h4>kita bersama yang selamatkan</h4>
            </div>
        </header>
    )
}

export default Jumbotron

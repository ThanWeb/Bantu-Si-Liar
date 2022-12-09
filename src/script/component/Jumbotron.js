import React from 'react'
import { Link } from 'react-router-dom'

const Jumbotron = () => {
    return (
        <header className='jumbotron'>
            <div>
                <img src='public/jumbotron-image.png' alt='Jumbotron Image'/>
                <Link to='create-report'>Laporkan</Link>
            </div>
            <div>
                <h2>Bantu mereka hanya dengan beberapa klik</h2>
                <p>Kalian yang menemukan, kita bersama yang selamatkan</p>
                <p>Terima kasih atas kepedulian kalian</p>
            </div>
        </header>
    )
}

export default Jumbotron

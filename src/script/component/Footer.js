import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const findYear = () => {
        const now = new Date()
        const year = `${now.getFullYear()}`
        return year
    }

    return (
        <footer className='footer'>
            <div>
                <img src='public/jumbotron-image.png' alt='Jumbotron Image'/>
                <Link to='create-report'>Laporkan</Link>
            </div>
            <div>
                <p>&#169; {findYear()} Bantu Si Liar Organization. All Right Reserved</p>
            </div>
        </footer>
    )
}

export default Footer

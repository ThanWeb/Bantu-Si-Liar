import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FiAlignJustify } from 'react-icons/fi'

const Navigation = ({ loginStatus, profileData, logout }) => {
    const toggleDisplayDrawer = () => {
        if (document.querySelector('.drawer')) {
            document.querySelector('.drawer').classList.toggle('show')
        }
    }

    if (loginStatus === '') {
        return (
            <nav className='navigation'>
                <div>
                    <Link to='/' className='container-icon'><h1 className='app-title'>Bantu Si Liar</h1></Link>
                </div>
                <div className='container-icon' onClick={toggleDisplayDrawer}>
                    <FiAlignJustify className='icon'/>
                </div>
                <div className='drawer' id='drawer' onClick={toggleDisplayDrawer}>
                    <Link to='login'>Masuk</Link>
                    <Link to='create-report'>Buat Laporan</Link>
                    <Link to='report-list'>Daftar Laporan</Link>
                    <Link to='article-list'>Daftar Artikel</Link>
                    <div className='logo-section'>
                        <img className='logo' src='public/logo-transparent.png' alt='Logo Bantu Si Liar'/>
                    </div>
                    <p className='exit-drawer'>Tekan di mana saja untuk keluar</p>
                </div>
            </nav>
        )
    }

    return (
        <nav className='navigation'>
            <div>
                <Link to='/' className='container-icon'><h1 className='app-title'>Bantu Si Liar</h1></Link>
            </div>
            <div className='container-icon' onClick={toggleDisplayDrawer}>
                <FiAlignJustify className='icon'/>
            </div>
            <div className='drawer' id='drawer' onClick={toggleDisplayDrawer}>
                <Link to='profile'>
                    <div className='profile-icon'>
                        <img src={profileData.picture} alt={profileData.name} className='profile-image'/>
                        <span>{profileData.name}</span>
                    </div>
                </Link>
                <Link to='create-report'>Buat Laporan</Link>
                <Link to='report-list'>Daftar Laporan</Link>
                <Link to='article-list'>Daftar Artikel</Link>
                <Link to='/' onClick={(logout)}>Keluar</Link>
                <p className='exit-drawer'>Tekan di mana saja untuk keluar</p>
            </div>
        </nav>
    )
}

Navigation.propTypes = {
    loginStatus: PropTypes.string,
    profileData: PropTypes.object,
    logout: PropTypes.func
}

export default Navigation

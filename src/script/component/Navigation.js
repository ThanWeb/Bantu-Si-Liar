import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Navigation = ({ loginStatus, profileData, logout }) => {
    if (loginStatus === '') {
        return (
            <nav className='navigation'>
                <Link to='/'>Beranda</Link>
                <Link to='login'>Masuk</Link>
                <Link to='create-report'>Buat Laporan</Link>
                <Link to='report-list'>Daftar Laporan</Link>
                <Link to='article-list'>Daftar Artikel</Link>
            </nav>
        )
    }

    return (
        <nav className='navigation'>
            <Link to='/'>Home</Link>
            <Link to='profile'>
                <img src={profileData.picture} alt={profileData.name}/>
                <span>{profileData.name}</span>
            </Link>
            <Link to='create-report'>Buat Laporan</Link>
            <Link to='report-list'>Daftar Laporan</Link>
            <Link to='article-list'>Daftar Artikel</Link>
            <Link to='/' onClick={logout}>Keluar</Link>
        </nav>
    )
}

Navigation.propTypes = {
    loginStatus: PropTypes.string,
    profileData: PropTypes.object,
    logout: PropTypes.func
}

export default Navigation

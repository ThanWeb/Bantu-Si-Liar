import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Navigation = ({ loginStatus, profileData, logout }) => {
    if (loginStatus === '') {
        return (
            <nav>
                <Link to='/'>Home</Link>
                <Link to='login'>Login</Link>
                <Link to='report'>Report</Link>
            </nav>
        )
    }

    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='profile'>
                <img src={profileData.picture} alt={profileData.name}/>
                <span>{profileData.name}</span>
            </Link>
            <Link to='report'>Report</Link>
            <Link to='/' onClick={logout}>Log Out</Link>
        </nav>
    )
}

Navigation.propTypes = {
    loginStatus: PropTypes.string,
    profileData: PropTypes.object,
    logout: PropTypes.func
}

export default Navigation

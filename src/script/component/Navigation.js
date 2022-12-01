import React from 'react'
import { Link } from 'react-router-dom'

function Navigation () {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/add-report'>AddReport</Link>
        </nav>
    )
}

export default Navigation

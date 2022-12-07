import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from './component/Navigation'
import HomePage from './page/HomePage'
import ProfilePage from './page/ProfilePage'
import LoginPage from './page/LoginPage'
import RegisterPage from './page/RegisterPage'
import ReportPage from './page/ReportPage'
import { getLoggedId, getProfile, removeLoggedId } from './utils/network-data'

function App () {
    const [authedUser, setAuthedUser] = useState('')
    const [profile, setProfile] = useState({})

    useEffect(() => {
        intiateProfileData()
    }, [])

    const intiateProfileData = async () => {
        const id = getLoggedId()
        if (id) {
            setAuthedUser(id)
            const { data } = await getProfile(id)
            setProfile(data)
        }
    }

    const onLoginHandler = (id) => {
        setAuthedUser(id)
    }

    const onLogoutHandler = () => {
        removeLoggedId()
        setAuthedUser('')
    }

    return (
        <div>
            <header className='nav-container'>
                <Navigation loginStatus={authedUser} profileData={profile} logout={onLogoutHandler}/>
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='login' element={<LoginPage loginSuccess={onLoginHandler} loginStatus={authedUser} data={profile}/>} />
                    <Route path='register' element={<RegisterPage />} />
                    <Route path='profile' element={<ProfilePage data={profile}/>} />
                    <Route path='report' element={<ReportPage loginStatus={authedUser}/>} />
                </Routes>
            </main>
            <footer>
            </footer>
        </div>
    )
}

export default App

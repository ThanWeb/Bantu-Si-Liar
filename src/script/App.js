import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from './component/Navigation'
import HomePage from './page/HomePage'
import ProfilePage from './page/ProfilePage'
import LoginPage from './page/LoginPage'
import RegisterPage from './page/RegisterPage'
import ArticleListPage from './page/ArticleListPage'
import ArticleDetailPage from './page/ArticleDetailPage'
import CreateReportPage from './page/CreateReportPage'
import ReportListPage from './page/ReportListPage'
import ReportDetailPage from './page/ReportDetailPage'
import { getLoggedId, getProfile, removeLoggedId } from './utils/network-data'
import setDisplayDrawer from './utils/set-display-drawer'

const App = () => {
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
        location.reload()
    }

    const onLogoutHandler = () => {
        removeLoggedId()
        setAuthedUser('')
        setDisplayDrawer()
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
                    <Route path='article-list' element={<ArticleListPage />} />
                    <Route path='article-detail/:id' element={<ArticleDetailPage />} />
                    <Route path='profile' element={<ProfilePage data={profile}/>} />
                    <Route path='create-report' element={<CreateReportPage loginStatus={authedUser}/>} />
                    <Route path='report-list' element={<ReportListPage />} />
                    <Route path='report-detail/:id' element={<ReportDetailPage />} />
                </Routes>
            </main>
            <footer>
            </footer>
        </div>
    )
}

export default App

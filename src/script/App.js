import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from './component/Navigation'
import HomePage from './page/HomePage'
import ProfilePage from './page/ProfilePage'
import LoginPage from './page/LoginPage'
import RegisterPage from './page/RegisterPage'
import AddReportPage from './page/AddReportPage'
import DetailReport from './page/DetailReport'

function App () {
    return (
        <div>
            <header>
                <Navigation />
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='/add-report' element={<AddReportPage />} />
                    <Route path='/report/:id' element={<DetailReport />} />
                </Routes>
            </main>
            <footer>
            </footer>
        </div>
    )
}

export default App

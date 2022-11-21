import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'

function App () {
    return (
        <div>
            <header>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </main>
            <footer>
            </footer>
        </div>
    )
}

export default App

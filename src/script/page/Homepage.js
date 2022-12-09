import React, { useState, useEffect } from 'react'
import Jumbotron from '../component/Jumbotron'
import AboutSection from '../component/AboutSection'
import ReportsSection from '../component/ReportsSection'
import ArticlesSection from '../component/ArticlesSection'
import { getArticles, getReports } from '../utils/network-data'

const HomePage = () => {
    const [articles, setArticles] = useState([])
    const [reports, setReports] = useState([])

    useEffect(() => {
        loadArticles()
        loadReports()
    }, [])

    const loadArticles = async () => {
        const { data } = await getArticles()
        setArticles(data)
    }

    const loadReports = async () => {
        const { data } = await getReports()
        setReports(data)
    }

    return (
        <div className='home-page'>
            <Jumbotron/>
            <AboutSection/>
            <ReportsSection reportList={reports}/>
            <ArticlesSection articleList={articles}/>
        </div>
    )
}

export default HomePage

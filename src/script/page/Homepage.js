import React, { useState, useEffect } from 'react'
import Jumbotron from '../component/Jumbotron'
import AboutSection from '../component/AboutSection'
import ReportsSection from '../component/ReportsSection'
import ArticlesSection from '../component/ArticlesSection'
import { getArticles } from '../utils/network-data'

const HomePage = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        loadArticles()
    }, [])

    const loadArticles = async () => {
        const { data } = await getArticles()
        setArticles(data)
    }

    return (
        <div className='home-page'>
            <Jumbotron/>
            <AboutSection/>
            <ReportsSection/>
            <ArticlesSection articleList={articles}/>
        </div>
    )
}

export default HomePage

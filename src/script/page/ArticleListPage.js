import React, { useState, useEffect } from 'react'
import { getArticles } from '../utils/network-data'
import ArticlePreview from '../component/ArticlePreview'
import setDisplayDrawer from '../utils/set-display-drawer'

const ArticleListPage = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        retrieveArticle()
        setDisplayDrawer()
    }, [])

    const retrieveArticle = async () => {
        const { data } = await getArticles()
        setArticles(data)
    }

    return (
        <div className="article-list-page">
            <h1>Rekomendasi Artikel</h1>
            <div className='list-container'>
                {
                    articles.map((article, index) => <ArticlePreview key={index} articleData={article}/>)
                }
            </div>
        </div>
    )
}

export default ArticleListPage

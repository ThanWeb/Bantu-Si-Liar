import React, { useState, useEffect } from 'react'
import { getArticles } from '../utils/network-data'
import ArticlePreview from '../component/ArticlePreview'

const ArticleListPage = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        retrieveArticle()
    }, [])

    const retrieveArticle = async () => {
        const { data } = await getArticles()
        setArticles(data)
    }

    return (
        <div className="article-list-page">
            {
                articles.map((article, index) => <ArticlePreview key={index} articleData={article}/>)
            }
        </div>
    )
}

export default ArticleListPage

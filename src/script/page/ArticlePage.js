import React, { useEffect, useState } from 'react'
import getListArticle from '../utils/api-article'
import ArticleList from '../component/ArticleList'

function ArticlePage () {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        getListArticle().then(({ data }) => {
            setArticles(data)
        })
    }, [])
    return (
        <section>
            <h1>Article Recommendations</h1>
            <ArticleList articles={articles} />
        </section>
    )
}

export default ArticlePage

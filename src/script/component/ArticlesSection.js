import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ArticlePreview from './ArticlePreview'

const ArticlesSection = ({ articleList }) => {
    const [randomArticles, setRandomArticles] = useState([])

    useEffect(() => {
        getRandomArticles()
    }, [articleList])

    const getRandomArticles = () => {
        if (articleList.length > 0) {
            let article
            const temp = []

            for (let i = 0; i < 3; i++) {
                article = articleList[Math.floor(Math.random() * articleList.length)]
                temp.push(article)
            }
            setRandomArticles(temp)
        }
    }

    return (
        <div className='articles-section'>
            {randomArticles.map((article, index) => <ArticlePreview key={index} articleData={article}/>)}
        </div>
    )
}

ArticlesSection.propTypes = {
    articleList: PropTypes.arrayOf(PropTypes.object)
}

export default ArticlesSection

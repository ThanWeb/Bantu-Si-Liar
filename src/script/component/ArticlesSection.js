import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ArticlePreview from './ArticlePreview'

const ArticlesSection = ({ articleList }) => {
    const [randomArticles, setRandomArticles] = useState([])
    const tempArticleList = articleList

    useEffect(() => {
        getRandomArticles()
    }, [articleList])

    const getRandomArticles = () => {
        const arrayOfNumbers = []

        if (tempArticleList.length > 0) {
            let article
            const temp = []

            for (let i = 0; arrayOfNumbers.length < 3; i++) {
                article = tempArticleList[Math.floor(Math.random() * tempArticleList.length)]

                if (!arrayOfNumbers.includes(article.id)) {
                    arrayOfNumbers.push(article.id)
                    temp.push(article)
                }
            }
            setRandomArticles(temp)
        }
    }

    return (
        <div className='articles-section'>
            {
                randomArticles.map((article, index) => <ArticlePreview key={index} articleData={article}/>)
            }
        </div>
    )
}

ArticlesSection.propTypes = {
    articleList: PropTypes.arrayOf(PropTypes.object)
}

export default ArticlesSection

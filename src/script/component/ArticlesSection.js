import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ArticlePreview from './ArticlePreview'
import { Link } from 'react-router-dom'

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
            const expectedTotal = screen.width >= 992 && screen.width <= 1024 ? 4 : 3

            for (let i = 0; arrayOfNumbers.length < expectedTotal; i++) {
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
            <h2>Artikel Terkait</h2>
            <div className='article-list'>
                {
                    randomArticles.map((article, index) => <ArticlePreview key={index} articleData={article}/>)
                }
            </div>
            <div className='see-all-btn btn'>
                <Link to='/article-list'>Lihat Semua</Link>
            </div>
        </div>
    )
}

ArticlesSection.propTypes = {
    articleList: PropTypes.arrayOf(PropTypes.object)
}

export default ArticlesSection

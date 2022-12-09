import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ArticlePreview = ({ articleData }) => {
    return (
        <div className='article-preview'>
            <div className='article-item'>
                <img src={articleData.picture}/>
                <Link to={`/article-detail/${articleData.id}`}>
                    <h3>{articleData.title}</h3>
                </Link>
                <p className='article-info'>{articleData.writer}, {articleData.created}</p>
                <p>{articleData.thumbnail}</p>
            </div>
        </div>
    )
}

ArticlePreview.propTypes = {
    articleData: PropTypes.object
}

export default ArticlePreview

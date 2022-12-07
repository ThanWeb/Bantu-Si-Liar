import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ArticlesSection = ({ articleData }) => {
    return (
        <div className='article-preview'>
            <img src={articleData.picture}/>
            <Link to={`/article-detail/${articleData.id}`}>
                <h3>{articleData.title}</h3>
            </Link>
            <p>{articleData.writer}, {articleData.created}</p>
            <p>{articleData.thumbnail}</p>
        </div>
    )
}

ArticlesSection.propTypes = {
    articleData: PropTypes.object
}

export default ArticlesSection

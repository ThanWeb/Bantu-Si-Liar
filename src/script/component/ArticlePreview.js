import React from 'react'
import PropTypes from 'prop-types'

const ArticlesSection = ({ articleData }) => {
    return (
        <div className='article-preview'>
            <img src={articleData.picture}/>
            <h3>{articleData.title}</h3>
            <p>{articleData.writer}, {articleData.created}</p>
            <p>{articleData.thumbnail}</p>
        </div>
    )
}

ArticlesSection.propTypes = {
    articleData: PropTypes.object
}

export default ArticlesSection

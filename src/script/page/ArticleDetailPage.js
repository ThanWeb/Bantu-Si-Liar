import React from 'react'
import getArticleBody from '../utils/getArticleBody'

const ArticleDetailPage = () => {
    const arrayOfText = getArticleBody(body)
    return (
        <div>
            {
                arrayOfText.contents.map((text, index) => {
                    return arrayOfText.tags[index - 1] === 'h' ? <h3>{text}</h3> : <p>{text}</p>
                })
            }
        </div>
    )
}

export default ArticleDetailPage

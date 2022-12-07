import React from 'react'
import PropType from 'prop-types'
import ArticleItem from './ArticleItem'

function ArticleList (articles) {
    console.log(articles)
    return (
        <section>
            <div className='article-list'> {
                articles.map((article) => (
                    <ArticleItem
                        key={article.id}
                        id={article.id}
                        {...article}
                    />
                ))
            }
            </div>
        </section>
    )
}
ArticleList.propType = {
    articles: PropType.arrayOf(PropType.object).isRequired
}
export default ArticleList

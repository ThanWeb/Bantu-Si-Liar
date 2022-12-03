import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ArticlePage () {
    const [articles, setArticles] = useState([10])
    useEffect(() => {
        retrieveArticle()
    }, [])

    const retrieveArticle = async () => {
        try {
            const { data } = await axios.get('https://antekteknologi.my.id/api/rest-api-bantu-si-liar/api/list-article.php')
            // console.log(data.data, '<== response article')
            setArticles(data.data)
        } catch (error) {
            console.log(error, '<== error retrieve article')
        }
    }

    return (
        <section>
            <h1>Article Recommendations</h1>
            {articles && articles.map((artikel) => {
                return (
                    <div className="article-item" key={artikel.id}>
                        <img className="picture" src={artikel.picture} />
                        <h2 className="title">{artikel.title}</h2>
                        <p className="writer">{artikel.writer}</p>
                        <p className="date">{artikel.created}</p>
                        <p className="date">{artikel.updated}</p>
                        <p className="thumbnail">{artikel.thumbnail}</p>
                        <p className="body">{artikel.body}</p>
                    </div>
                )
            })}
            {/* {JSON.stringify(articles)} */}
            {/* <p>{articles}</p> */}
            {/* <ArticleList articles={articles} /> */}
        </section>
    )
}

export default ArticlePage

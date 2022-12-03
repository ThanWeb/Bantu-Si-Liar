import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../style/section/article.scss'

function ArticlePage () {
    const [articles, setArticles] = useState([])
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
        <section id="article">
            <h1>Article Recommendations</h1>
            <div className="article-list">
                {articles && articles.map((artikel) => {
                    return (
                        <div className="article-item" key={artikel.id}>
                            <img className="picture" src={artikel.picture} alt={artikel.title}/>
                            <div className="article-item-detail">
                                <a href='/#/detail/{id}' className="title">{artikel.title}</a>
                                <p className="writer">Penulis : {artikel.writer}</p>
                                <p className="date">Diterbitkan : {artikel.created}</p>
                                <p className="date">Diperbarui : {artikel.updated}</p>
                                <p className="thumbnail">{artikel.thumbnail}</p>
                                <p className="body">{artikel.body}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ArticlePage

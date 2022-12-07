import React, { useEffect, useState } from 'react'
import getArticleBody from '../utils/get-article-body'
import { useParams } from 'react-router-dom'
import { getSingleArticle } from '../utils/network-data'

const ArticleDetailPage = () => {
    const { id } = useParams()
    const [article, setArticle] = useState({})

    useEffect(() => {
        getArticleData()
    }, [])

    const getArticleData = async () => {
        const { data } = await getSingleArticle(id)
        setArticle(data)
    }

    return (
        <div>
            <h2>{article.title}</h2>
            <img src={article.picture} alt='Article Image'/>
            <p className='italic-text'>Ditulis oleh ({article.writer}) pada {article.created}</p>
            <p className='italic-text'>Artikel terakhir kali diubah pada {article.updated}</p>
            {
                article.body
                    ? getArticleBody(article.body).contents.map((text, index) => {
                        return getArticleBody(article.body).tags[index - 1] === 'h' ? <h3 key={index}>{text}</h3> : <p key={index}>{text}</p>
                    })
                    : <p>None</p>
            }
            <p>Sumber Artikel: <a href={article.reference} target='_blank' rel="noreferrer">{article.title}</a></p>
        </div>
    )
}

export default ArticleDetailPage

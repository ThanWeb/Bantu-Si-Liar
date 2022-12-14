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
        <div className='article-detail-page'>
            <h2>{article.title}</h2>
            <img src={article.picture} alt='Article Image'/>
            <span className='label-text'>Ditulis oleh ({article.writer}) pada {article.created}</span>
            <span className='label-text'>Artikel terakhir kali diubah pada {article.updated}</span>
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

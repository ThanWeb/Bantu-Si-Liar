import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import getArticleBody from '../utils/getArticleBody'

function ArticleDetailPage () {
    const [detail, setDetail] = useState([])
    const { id } = useParams()
    useEffect(() => {
        retrieveArticle()
    }, [])

    const retrieveArticle = async () => {
        try {
            const { data } = await axios.get('https://antekteknologi.my.id/api/rest-api-bantu-si-liar/api/single-article.php?id=5')
            console.log(data.data, '<== response article')
            setDetail(data.data)
        } catch (error) {
            console.log(error, '<== error retrieve article')
        }
    }

    const arrayOfText = getArticleBody()
    return (
        <div>
            {
                arrayOfText.contents.map((text, index) => {
                    return arrayOfText.tags[index - 1] === 'h' ? <h3>{text}</h3> : <p>{text}</p>
                })
            }
        </div>
    )

    // return (
    // //  {JSON.stringify(detail)}
    //     <p>{detail}</p>
    // )
}

export default ArticleDetailPage

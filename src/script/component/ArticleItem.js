/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import PropType from 'prop-types'

function ArticleItem ({
    id,
    title,
    writer,
    created,
    updated,
    thumbnail,
    body,
    picture
}) {
    return (
        <div className="article-item">
            <img className="picture" src={picture} />
            <h2 className="title">
                <Link to={`${id}`}>{title}</Link>
            </h2>
            <p className="writer">{writer}</p>
            <p className="date">{created}</p>
            <p className="date">{updated}</p>
            <p className="thumbnail">{thumbnail}</p>
            <p className="body">{body}</p>
        </div>
    )
}
ArticleItem.propType = {
    title: PropType.string.isRequired,
    writer: PropType.string.isRequired,
    created: PropType.string.isRequired,
    updated: PropType.string.isRequired,
    thumbnail: PropType.string.isRequired,
    body: PropType.string.isRequired,
    picture: PropType.string.isRequired
}
export default ArticleItem

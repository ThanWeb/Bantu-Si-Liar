const getArticleBody = (body) => {
    let temp = ''
    const arrayOfText = {
        tags: [],
        contents: []
    }

    for (let i = 0; i < body.length; i++) {
        if (body[i] === '|') {
            arrayOfText.tags.push(body[i + 1])
            arrayOfText.contents.push(temp)
            temp = ''
            i++
            continue
        } else {
            temp = temp + body[i]
        }
    }

    return arrayOfText
}

export default getArticleBody

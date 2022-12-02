const BASE_URL_ARTICLE_LIST = 'https://antekteknologi.my.id/api/rest-api-bantu-si-liar/api/list-article.php'

async function getListArticle () {
    const response = await fetch(`${BASE_URL_ARTICLE_LIST}`)
    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        alert(responseJson.message)
        return { error: true, data: [] }
    }
    return { error: false, data: responseJson.data }
}

export default getListArticle

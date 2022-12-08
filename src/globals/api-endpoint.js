import CONFIG from './config'

const API_ENDPOINT = {
    LIST_ARTICLE: `${CONFIG.BASE_URL}list-article.php`,
    DETAIL_ARTICLE: (id) => `${CONFIG.BASE_URL}single-article.php?/${id}`
}

export default API_ENDPOINT

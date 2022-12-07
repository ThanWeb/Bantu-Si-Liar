import CONFIG from './config'

const API_ENDPOINT = {
    REGISTER: `${CONFIG.BASE_URL}register.php`,
    LOGIN: `${CONFIG.BASE_URL}login.php`,
    PROFILE: `${CONFIG.BASE_URL}profile.php?id=`,
    ARTICLE_LIST: `${CONFIG.BASE_URL}list-article.php`
}

export default API_ENDPOINT

import CONFIG from './config'

const API_ENDPOINT = {
    REGISTER: `${CONFIG.BASE_URL}register.php`,
    LOGIN: `${CONFIG.BASE_URL}login.php`,
    PROFILE: `${CONFIG.BASE_URL}profile.php?id=`,
    ARTICLE_LIST: `${CONFIG.BASE_URL}list-article.php`,
    SINGLE_ARTICLE: `${CONFIG.BASE_URL}single-article.php?id=`,
    REPORT_LIST: `${CONFIG.BASE_URL}list-report.php`,
    SINGLE_REPORT: `${CONFIG.BASE_URL}single-report.php?id=`
}

export default API_ENDPOINT

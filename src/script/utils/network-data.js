import API_ENDPOINT from '../globals/api-endpoint'

const register = async ({ username, email, password, name, province, city, address, phone, picture }) => {
    const response = await fetch(API_ENDPOINT.REGISTER, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            email,
            password,
            name,
            province,
            city,
            address,
            phone,
            picture
        })
    })

    const responseJson = await response.json()
    return { error: responseJson.error, message: responseJson.message }
}

const login = async ({ identifier, password }) => {
    const response = await fetch(API_ENDPOINT.LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            identifier,
            password
        })
    })

    const responseJson = await response.json()
    return { error: responseJson.error, message: responseJson.message, id: responseJson.id }
}

const getLoggedId = () => {
    return sessionStorage.getItem('id')
}

const putLoggedId = (id) => {
    return sessionStorage.setItem('id', id)
}

const removeLoggedId = () => {
    return sessionStorage.removeItem('id')
}

const getProfile = async (id) => {
    const response = await fetch(`${API_ENDPOINT.PROFILE}${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const responseJson = await response.json()
    return { error: responseJson.error, message: responseJson.message, data: responseJson.data }
}

const getArticles = async () => {
    const response = await fetch(API_ENDPOINT.ARTICLE_LIST, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const responseJson = await response.json()
    return { error: responseJson.error, message: responseJson.message, data: responseJson.data }
}

const getSingleArticle = async (id) => {
    const response = await fetch(`${API_ENDPOINT.SINGLE_ARTICLE}${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const responseJson = await response.json()
    return { error: responseJson.error, message: responseJson.message, data: responseJson.data }
}

const getReports = async () => {
    const response = await fetch(`${API_ENDPOINT.REPORT_LIST}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const responseJson = await response.json()
    return { error: responseJson.error, message: responseJson.message, data: responseJson.data }
}

export { register, login, getLoggedId, putLoggedId, removeLoggedId, getProfile, getArticles, getSingleArticle, getReports }

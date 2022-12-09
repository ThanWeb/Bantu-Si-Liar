const BASE_URL = 'http://localhost:8080/'

function getAccessToken () {
    return localStorage.getItem('accessToken')
}

function putAccessToken (accessToken) {
    return localStorage.setItem('accessToken', accessToken)
}

async function fetchWithToken (url, options = {}) {
    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${getAccessToken()}`
        }
    })
}

async function login ({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })

    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        return { error: true, data: null, message: responseJson.message }
    }

    return { error: false, data: responseJson.data }
}

async function register ({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })

    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        return { error: true, message: responseJson.message }
    }

    return { error: false }
}

async function getUserLogged () {
    const response = await fetchWithToken(`${BASE_URL}/users/me`)
    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        return { error: true, data: null }
    }

    return { error: false, data: responseJson.data }
}

async function addReport ({ species, color, specialFeatures, location, animalDescription }) {
    const response = await fetchWithToken(`${BASE_URL}/notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ species, color, specialFeatures, location, animalDescription })
    })

    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        return { error: true, data: null }
    }

    return { error: false, data: responseJson.data }
}

async function getReportData (id) {
    const response = await fetchWithToken(`${BASE_URL}/reports/${id}`)
    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        return { error: true, data: null }
    }

    return { error: false, data: responseJson.data }
}

async function deleteReportData (id) {
    const response = await fetchWithToken(`${BASE_URL}/reports/${id}`, {
        method: 'DELETE'
    })

    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        return { error: true, data: null }
    }

    return { error: false, data: responseJson.data }
}

export {
    getAccessToken,
    putAccessToken,
    login,
    register,
    getUserLogged,
    addReport,
    getReportData,
    deleteReportData
}

import API_ENDPOINT from '../globals/api-endpoint'

const register = async ({ username, email, password, picture, name, phone, province, city, address }) => {
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

export { register, login, getLoggedId, putLoggedId }

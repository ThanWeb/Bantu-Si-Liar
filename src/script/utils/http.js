import axios from 'axios'
import constant from './constant'

const http = axios.create({
    baseURL: constant.baseUrl
})

http.interceptors.request.use(async (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default http

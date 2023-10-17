
// === Utils === //
import axios from 'axios'

export const getRecordList = (params) => {
    return axios.get('https://natata-api.vercel.app/api/record', { params })
}

export const recordPost = (body) => {
    return axios.post('https://natata-api.vercel.app/api/record', body)
}
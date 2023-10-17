
// === Utils === //
import axios from 'axios'

export const getRecordList = () => {
    return axios.get('https://natata-api.vercel.app/api/record')
}

export const recordPost = (body) => {
    return axios.post('https://natata-api.vercel.app/api/record', body)
}
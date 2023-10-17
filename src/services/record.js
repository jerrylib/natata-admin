
// === Utils === //
import axios from 'axios'

export const recordPost = (body) => {
    return axios.post('https://natata-api.vercel.app/api/record', body)
}
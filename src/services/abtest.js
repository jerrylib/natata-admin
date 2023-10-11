
// === Utils === //
import axios from 'axios'

export const fetchAbtestConfig = () => {
    return axios.get('https://natata-api.vercel.app/api/abtest')
}
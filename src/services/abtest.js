
// === Utils === //
import axios from 'axios'

export const fetchAbtestConfig = () => {
    return axios.get('http://natata-api.vercel.app/api/abtest')
}
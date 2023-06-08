import axios from 'axios'

let baseURL = 'http://127.0.0.1:8000/api'

if (import.meta.env.VITE_BACKEND !== undefined) { baseURL = import.meta.env.VITE_BACKEND }

const api = axios.create({
  baseURL,
  withCredentials: true
})

export default api

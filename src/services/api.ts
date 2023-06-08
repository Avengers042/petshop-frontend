import axios from 'axios'
import { parseCookies } from 'nookies'

const { petshop_token: token } = parseCookies()

let baseURL = 'http://127.0.0.1:8000/api'

if (import.meta.env.VITE_BACKEND !== undefined) { baseURL = import.meta.env.VITE_BACKEND }

export const api = axios.create({
  baseURL,
  withCredentials: true
})

if (token !== undefined) {
  api.defaults.headers.Authorization = `Bearer ${token}`
}

api.interceptors.request.use(config => {
  console.log(config)

  return config
})

export default api

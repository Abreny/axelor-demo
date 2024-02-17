import axios from 'axios'

const axiosWrapper = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

export default axiosWrapper

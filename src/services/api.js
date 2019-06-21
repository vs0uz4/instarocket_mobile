import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.1.136:4000'
})

export default api

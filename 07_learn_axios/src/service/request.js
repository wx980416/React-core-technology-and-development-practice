import axios from 'axios'

import { BASE_URL, TIME_OUT } from './config'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    console.log('请求拦截')

    return config
  },
  (err) => {
    console.log(err)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err) => {
    console.log(err)
  }
)

export default instance

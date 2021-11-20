const devBaseUrl = 'https://httpbin.org'
const proBaseUrl = 'https://production.org'

export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseUrl : proBaseUrl

export const TIME_OUT = 5000

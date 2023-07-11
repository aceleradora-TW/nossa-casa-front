import axios from 'axios'
import env from 'react-dotenv'

export const client = axios.create({
  baseURL: env.URL_BACKEND
})

export const cms = axios.create({
  baseURL: env.URL_CMS
})

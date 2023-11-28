import axios from 'axios'

export const cms = axios.create({
  baseURL: process.env.REACT_APP_URL_CMS
})

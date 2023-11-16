import axios from 'axios'


export const client = axios.create({
  baseURL: process.env.REACT_APP_URL_BACKEND
})

export const cms = axios.create({
  baseURL: process.env.REACT_APP_URL_CMS
})

import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://oauth2.googleapis.com',
})

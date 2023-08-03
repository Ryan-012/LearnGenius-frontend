import axios from 'axios'

export const apiGoogle = axios.create({
  baseURL: 'https://oauth2.googleapis.com',
})

export const api = axios.create({
  baseURL: 'http://192.168.2.98:3333',
})

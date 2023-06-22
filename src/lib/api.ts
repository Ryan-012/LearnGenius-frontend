import axios from 'axios'

export const apiGoogle = axios.create({
  baseURL: 'https://oauth2.googleapis.com',
})

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})

// login google url?  https://accounts.google.com/o/oauth2/v2/auth?{client_id, redirect_uri, response_type, scope = email profile}

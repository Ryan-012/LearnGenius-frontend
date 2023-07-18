import jwtDecode from 'jwt-decode'
import { User } from '@/interfaces/User'
import Cookie from 'js-cookie'

export function getUser(): User {
  const token = Cookie.get('access_token')
  if (!token) {
    throw new Error('Unauthenticated.')
  }

  const user: User = jwtDecode(token)

  return user
}

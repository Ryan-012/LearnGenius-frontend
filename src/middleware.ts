import { NextRequest, NextResponse } from 'next/server'
import { api } from '@/lib/api'
// import { setCookie } from 'cookies-next'

export async function middleware(req: NextRequest) {
  const refresh_token = req.cookies.get('refresh_token')?.value
  const access_token = req.cookies.get('access_token')?.value

  if (req.nextUrl.pathname === '/' && !access_token) {
    if (refresh_token) {
      console.log(refresh_token)
      const response = await api.get(`/auth/refresh-token/${refresh_token}`)
      console.log(response.data)
    }
    return NextResponse.next()
  }
}

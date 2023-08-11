import { api, apiGoogle } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'
import jwtDecode from 'jwt-decode'
interface DecodedToken {
  email: string
  email_verified: boolean
  name: string
  picture: string
}
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const response = await apiGoogle.post('/token', {
    code,
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    grant_type: 'authorization_code',
    redirect_uri: `${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/sign-in/callback`,
  })

  const googleToken = response.data.id_token
  const { email, picture } = jwtDecode<DecodedToken>(googleToken)
  console.log(picture)
  const checkRegisteredEmail = await api.post('/auth/sign-in-google', {
    email,
  })
  const { access_token, refresh_token } = checkRegisteredEmail.data

  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_DOMAIN}`, {
    headers: {
      'Set-Cookie': `access_token=${access_token}; Path=/; max-age=60, refresh_token=${refresh_token}; Path=/; max-age=3600`,
    },
  })
}

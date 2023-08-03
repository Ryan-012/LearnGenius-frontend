import { api, apiGoogle } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'
import jwtDecode from 'jwt-decode'
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
  const { email } = jwtDecode(googleToken)

  const checkRegisteredEmail = await api.get('/auth/sign-in-google', {
    email,
  })

  console.log(checkRegisteredEmail.data)

  return NextResponse.redirect(`http://localhost:3000/user/sign-up`, {
    headers: {
      'Set-Cookie': `googleInfo=${googleToken}; Path=/; max-age=1800`,
    },
  })
}

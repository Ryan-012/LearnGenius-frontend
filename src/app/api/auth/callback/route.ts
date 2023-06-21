import { api } from '@/lib/api'
import jwtDecode from 'jwt-decode'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  // const scope = searchParams.get('scope')

  const response = await api.post('/token', {
    code,
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    client_secret: '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',
    grant_type: 'authorization_code',
    redirect_uri: 'http://localhost:3000/api/auth/callback',
  })
  const info = jwtDecode(response.data.id_token)
  console.log(info)
}

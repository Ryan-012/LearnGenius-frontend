import { api } from '@/lib/api'

import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const refreshToken = searchParams.get('refresh-token')

  const response = await api.get(`/auth/refresh-token/${refreshToken}`)

  const { newAccessToken } = response.data

  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_DOMAIN}/`, {
    headers: {
      'Set-Cookie': `access_token=${newAccessToken}; Path=/; max-age=60`,
    },
  })
}

import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  return NextResponse.redirect('http://localhost:3000', {
    headers: {
      'Set-Cookie':
        'access_token=; Path=/; max-Age=0, refresh_token=; Path=/; max-Age=0',
    },
  })
}

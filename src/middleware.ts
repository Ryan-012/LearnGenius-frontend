import { NextRequest, NextResponse } from 'next/server'
// import { setCookie } from 'cookies-next'

export async function middleware(req: NextRequest) {
  const refresh_token = req.cookies.get('refresh_token')?.value
  const access_token = req.cookies.get('access_token')?.value

  if (req.nextUrl.pathname === '/' && !access_token) {
    if (refresh_token) {
      return NextResponse.redirect(
        `http://localhost:3000/api/auth/refresh-token?refresh-token=${refresh_token}`,
      )
    }
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_DOMAIN}/user/sign-in`,
    )
  }
  return NextResponse.next()
}
export const config = {
  matcher: ['/'],
}

'use client'
import Cookie from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { useEffect, useState } from 'react'

type googleInfo = {
  email: string
  name: string
  email_verified: boolean
}
export default function Home() {
  const token = Cookie.get('googleInfo')
  const [googleInfo, setGoogleInfo] = useState<undefined | googleInfo>(
    undefined,
  )

  useEffect(() => {
    if (token) {
      setGoogleInfo(jwtDecode(token))
    }
  }, [token])

  return (
    <form>
      <input
        className=" bg-slate-600 caret-orange-950"
        type="text"
        defaultValue={googleInfo && googleInfo.name}
      />
    </form>
  )
}

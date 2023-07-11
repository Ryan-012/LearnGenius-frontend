'use client'
import Cookie from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { useEffect, useState } from 'react'

type googleInfo = {
  email: string
  name: string
  email_verified: boolean
}
export default function SignUp() {
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
    <div className=" flex min-h-screen font-sans  text-gray-100">
      <form className=" mx-auto my-auto flex min-h-[600px] w-9/12 flex-col  rounded shadow-lg shadow-gray-300/50">
        <h2 className=" text-center text-4xl">Create Your Account</h2>
        <input
          className=""
          type="text"
          placeholder="name"
          defaultValue={googleInfo && googleInfo.name}
        />
        <input className="" placeholder="address@example.com" type="email" />

        <input type="password" placeholder="password" />
        <button className="mx-auto mb-2 mt-auto w-1/4 bg-purple-700 p-2 text-gray-200 hover:bg-purple-500 hover:text-gray-50">
          Sign Up
        </button>
      </form>
    </div>
  )
}

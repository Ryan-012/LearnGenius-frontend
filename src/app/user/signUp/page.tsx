'use client'
import Cookie from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import btnGoogle from '@/assets/btn_google_light_normal_ios.svg'
import btnGoogleHover from '@/assets/btn_google_light_pressed_ios.svg'
import InputForm from '@/components/InputForm'

type googleInfo = {
  email: string
  name: string
  email_verified: boolean
}
export default function SignUp() {
  const token = Cookie.get('googleInfo')
  const [isHovered, setIsHovered] = useState(false)
  const [googleInfo, setGoogleInfo] = useState<undefined | googleInfo>(
    undefined,
  )

  useEffect(() => {
    if (token) {
      setGoogleInfo(jwtDecode(token))
    }
  }, [token])

  console.log(googleInfo)

  return (
    <div className="  flex items-center font-sans  text-gray-800">
      <form className=" mx-auto my-auto flex min-h-[600px] w-9/12 flex-col justify-around space-y-3 rounded p-3   ">
        <h2 className="text-5xl">Crie sua conta</h2>

        <div className=" flex flex-col justify-center space-y-3">
          <InputForm
            type="text"
            placeholder="nome"
            defaultValue={googleInfo?.name}
          />
          <InputForm
            type="email"
            placeholder="email"
            defaultValue={googleInfo?.email}
          />
          <InputForm type="password" placeholder="senha" />
          <input
            className="hidden"
            type="checkbox"
            name="emailVerified"
            id=""
            value="true"
          />
        </div>

        <div className="flex flex-col items-center space-y-2">
          <a
            href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=http://localhost:3000/api/auth/callback&response_type=code&scope=email profile`}
            className="flex  min-w-[250px] items-center justify-center pr-2  hover:bg-gray-50"
          >
            <Image
              className=" h-10 w-10"
              src={isHovered ? btnGoogleHover : btnGoogle}
              width={4}
              height={4}
              alt=""
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
            />
            <span className=" font-alt">Faça login com o Google</span>
          </a>

          <button className="mx-auto mb-2 mt-auto  min-w-[250px] bg-yellow-300 p-2  hover:bg-yellow-400 ">
            cadastrar-se
          </button>
          <span className=" text-center">
            Já possui uma conta?{' '}
            <a href="/" className=" hover:text-gray-200">
              Acessar
            </a>
          </span>
        </div>
      </form>
    </div>
  )
}

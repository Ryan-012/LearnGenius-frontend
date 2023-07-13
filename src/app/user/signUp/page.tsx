'use client'
import Cookie from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import btnGoogle from '@/assets/btn_google_light_normal_ios.svg'
import btnGoogleHover from '@/assets/btn_google_light_pressed_ios.svg'
import InputForm from '@/components/InputForm'
import waves from '@/assets/wave.svg'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'

type googleInfo = {
  email: string
  name: string
  email_verified: boolean
}
export default function SignUp() {
  const router = useRouter()
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

  async function createUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    await api
      .post('/auth/signUp', {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        emailVerified: googleInfo?.email_verified || false,
      })
      .then((response) => {
        const { access_token, refresh_token } = response.data
        Cookie.set('access_token', access_token, { expires: 60000 })
        Cookie.set('refresh_token', refresh_token, { expires: 60000 })
        router.push('/')
      })
  }

  return (
    <div className="flex min-h-screen flex-col items-center font-sans  text-gray-800">
      <form
        onSubmit={createUser}
        className=" mx-auto my-auto flex min-h-[600px] w-9/12 flex-col justify-around space-y-3 rounded p-3   "
      >
        <h2 className="text-5xl">Crie sua conta</h2>

        <div className=" flex flex-col justify-center space-y-3">
          <InputForm
            type="text"
            placeholder="nome"
            name="name"
            defaultValue={googleInfo?.name}
          />
          <InputForm
            type="email"
            name="email"
            placeholder="email"
            defaultValue={googleInfo?.email}
          />
          <InputForm type="password" name="password" placeholder="senha" />
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

          <button
            type="submit"
            className="mx-auto mb-2 mt-auto  min-w-[250px] bg-yellow-300 p-2  hover:bg-yellow-400 "
          >
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

      <Image className=" fixed bottom-0 max-w-max" src={waves} alt="waves" />
    </div>
  )
}

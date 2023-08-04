'use client'
import Cookie from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import btnGoogle from '@/assets/btn_google_light_normal_ios.svg'
import InputForm from '@/components/input-form'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next'
import { Button } from '@/components/ui/button'
type googleInfo = {
  email: string
  name: string
  email_verified: boolean
}
export default function SignUp() {
  const router = useRouter()
  const token = Cookie.get('googleInfo')
  // const [isHovered, setIsHovered] = useState(false)
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
        const { accessToken, refreshToken } = response.data
        setCookie('access_token', accessToken, { maxAge: 60 })
        setCookie('refresh_token', refreshToken, { maxAge: 3600 })
        router.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className=" relative flex min-h-screen flex-col items-center justify-center bg-white font-sans  text-gray-800">
      <form
        onSubmit={createUser}
        className=" absolute  flex min-h-screen w-full  max-w-lg  flex-col items-center  justify-center  space-y-3 rounded   "
      >
        <div className=" flex w-full flex-col items-center  justify-center space-y-3 max-sm:w-fit">
          <h2 className=" self-start font-alt text-5xl text-rose-500 max-sm:text-4xl sm:mb-7">
            Crie sua conta
          </h2>

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

        <div className=" flex flex-col items-center space-y-4">
          <a
            href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/sign-in/callback&response_type=code&scope=email profile`}
            className="flex  min-w-[250px] items-center justify-center pr-2  "
          >
            <Image
              className=" h-10 w-10"
              src={btnGoogle}
              width={4}
              height={4}
              alt=""
            />
            <span className="">Faça login com o Google</span>
          </a>

          <Button
            type="submit"
            className="min-w-[250px] rounded-none border border-rose-500 bg-rose-500 font-alt text-gray-900   hover:border hover:border-rose-500 hover:bg-transparent hover:text-rose-500"
          >
            cadastrar-se
          </Button>

          <span className=" text-center">
            Já possui uma conta?{' '}
            <a
              href="/"
              className=" transition duration-200 hover:text-rose-500"
            >
              Acessar
            </a>
          </span>
        </div>
      </form>
      {/* <Image className=" mt-auto  w-full  self-end" src={waves} alt="waves" /> */}
    </div>
  )
}

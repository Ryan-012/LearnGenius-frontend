'use client'
import { setCookie } from 'cookies-next'
import { Form } from '@/components/Form/index'
import { Input } from '@/components/ui/input'
import btnGoogle from '@/assets/icons8-google.svg'
import 'aos/dist/aos.css'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { FormEvent, useRef } from 'react'
import { CategoryLink } from '@/components/CategoryLink'
import { UserPlus } from 'lucide-react'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'
import { Toast } from 'primereact/toast'

export default function SignIn() {
  const toast = useRef<Toast>(null)
  const router = useRouter()

  const showError = (message: string, content: string) => {
    toast.current?.show({
      severity: 'error',
      summary: message,
      detail: content,
      life: 2000,
    })
  }

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    await api
      .post('/auth/sign-in', {
        email: formData.get('email'),
        password: formData.get('password'),
      })
      .then((res) => {
        const { access_token, refresh_token } = res.data

        setCookie('access_token', access_token, { maxAge: 60 })
        setCookie('refresh_token', refresh_token, { maxAge: 3600 })
        router.push('/')
      })
      .catch((err) => {
        showError(err.response.data.error, err.response.data.message)
      })
  }
  return (
    <>
      <Form.Root
        // data-aos="fade-right"
        onSubmit={signIn}
        className="relative mx-auto  h-[460px]  w-[480px] space-y-5   self-center max-sm:w-[90%]"
      >
        <Form.Title text="Faça seu login" />
        <Form.Content>
          <Input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="mx-auto w-3/4 border-transparent bg-gray-800  focus:bg-gray-700"
          />

          <div className="mx-auto flex w-3/4 flex-col space-y-2">
            <Input
              type="password"
              name="password"
              required
              minLength={8}
              placeholder="Senha"
              className="   border-transparent bg-gray-800 focus:bg-gray-700"
            />
            <Link href={'/'} className=" duration-200 hover:text-rose-500">
              Esqueci minha senha
            </Link>
          </div>
        </Form.Content>
        <Form.Actions>
          <a
            href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/sign-in/callback&response_type=code&scope=email profile`}
            className="flex  h-min w-3/4 items-center justify-center space-x-1   pr-2   "
          >
            <Image
              className=" h-8 w-8"
              src={btnGoogle}
              width={4}
              height={4}
              alt=""
            />
            <span className="">Faça login com o Google</span>
          </a>
          <Button type="submit" className=" w-[230px] " variant="primary">
            Entrar
          </Button>
          <CategoryLink.Root href="/user/sign-up" className=" text-gray-50">
            <CategoryLink.Icon icon={UserPlus} />
            <CategoryLink.Content text="Ainda não tem uma conta? Crie agora!" />
          </CategoryLink.Root>
        </Form.Actions>
      </Form.Root>
      <Toast ref={toast} />
    </>
  )
}

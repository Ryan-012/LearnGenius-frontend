'use client'

import { Form } from '@/components/Form/index'
import { FormEvent, useRef } from 'react'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CategoryLink } from '@/components/CategoryLink'
import { LogIn } from 'lucide-react'
import { Toast } from 'primereact/toast'

export default function SignUp() {
  const router = useRouter()

  const toast = useRef<Toast>(null)

  const showError = (message: string, content: string) => {
    toast.current?.show({
      severity: 'error',
      summary: message,
      detail: content,
      life: 2000,
    })
  }

  async function createUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    if (formData.get('password') !== formData.get('confirmPassword')) {
      return showError('Conflict', "Passwords don't match")
    }
    await api
      .post('/auth/sign-up', {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
      })
      .then((response) => {
        const { access_token, refresh_token } = response.data
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
        data-aos="fade-right"
        onSubmit={createUser}
        autoComplete="off"
        className="mx-auto  h-[460px]  w-[480px] space-y-5   self-center max-sm:w-[90%]"
      >
        <Form.Title text="Crie sua conta" />
        <Form.Content>
          <Input
            type="text"
            placeholder="Seu nome"
            name="name"
            required
            className="mx-auto w-3/4 border-transparent bg-gray-800 focus:bg-gray-700"
          />
          <Input
            type="email"
            placeholder="Seu Email"
            name="email"
            required
            className="mx-auto w-3/4 border-transparent bg-gray-800 focus:bg-gray-700"
          />
          <Input
            className="mx-auto w-3/4 border-transparent bg-gray-800 focus:bg-gray-700"
            type="password"
            placeholder="Sua senha"
            name="password"
            required
            minLength={8}
          />
          <Input
            type="password"
            placeholder="Confirme sua senha"
            name="confirmPassword"
            className="mx-auto w-3/4 border-transparent bg-gray-800 focus:bg-gray-700"
            required
            minLength={8}
          />
        </Form.Content>
        <Form.Actions>
          <Button type="submit" className=" w-[230px] " variant="primary">
            Cadastrar
          </Button>
          <CategoryLink.Root href="/user/sign-in" className="text-gray-50">
            <CategoryLink.Icon icon={LogIn} />
            <CategoryLink.Content text="Já possui uma conta? Faça login agora!" />
          </CategoryLink.Root>
        </Form.Actions>
      </Form.Root>
      <Toast ref={toast} />
    </>
  )
}

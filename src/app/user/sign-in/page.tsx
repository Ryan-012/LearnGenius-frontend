'use client'
import { Form } from '@/components/Form/index'
import { Input } from '@/components/ui/input'
import 'aos/dist/aos.css'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export default function SignIn() {
  // useEffect(() => {
  //   Aos.init({ duration: 1000 })
  // }, [])

  return (
    <Form.Root className="mx-auto h-[70%] w-[70%]  self-center ">
      <Form.Content>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          className="mx-auto w-3/4 border-transparent bg-gray-800  focus:bg-gray-700"
        />

        <div className="mx-auto flex w-3/4 flex-col space-y-2">
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            className="   border-transparent bg-gray-800 focus:bg-gray-700"
          />
          <Link href={'/'} className=" duration-200 hover:text-rose-500">
            Esqueci minha senha
          </Link>
        </div>
      </Form.Content>
      <Form.Actions>
        <Button
          className=" w-2/4 rounded-none border border-rose-500 bg-rose-500 font-alt text-gray-900   hover:border hover:border-rose-500 hover:bg-transparent hover:text-rose-500 "
          asChild
        >
          <Link href="/user/sign-up">Entrar</Link>
        </Button>
      </Form.Actions>
    </Form.Root>
  )
}

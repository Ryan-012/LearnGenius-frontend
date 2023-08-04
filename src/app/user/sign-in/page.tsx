'use client'
import { Form } from '@/components/Form/index'
import { Input } from '@/components/ui/input'
import btnGoogle from '@/assets/icons8-google.svg'
import 'aos/dist/aos.css'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { CategoryLink } from '@/components/CategoryLink'
import { UserPlus } from 'lucide-react'
export default function SignIn() {
  // useEffect(() => {
  //   Aos.init({ duration: 1000 })
  // }, [])

  return (
    <Form.Root className="mx-auto  h-[460px]   w-[480px] space-y-5   self-center ">
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
          className="flex  h-min w-2/4 items-center justify-center space-x-1   pr-2   "
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
        <Button className=" w-2/4 rounded-none border border-rose-500 bg-rose-500 font-alt text-gray-900   hover:border hover:border-rose-500 hover:bg-transparent hover:text-rose-500 ">
          Entrar
        </Button>
        <CategoryLink.Root href="/user/sign-up">
          <CategoryLink.Icon icon={UserPlus} />
          <CategoryLink.Content text="Ainda não tem uma conta? Crie agora!" />
        </CategoryLink.Root>
      </Form.Actions>
    </Form.Root>
  )
}

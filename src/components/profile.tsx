// import { getUser } from '@/lib/auth'

import { Server } from 'lucide-react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { Button } from './ui/button'
import Link from 'next/link'
import { Avatar, AvatarFallback } from './ui/avatar'

export default function Profile() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Avatar className=" cursor-default ">
          <AvatarFallback className="border-2 border-gray-600 bg-gray-900 text-gray-200 duration-200 hover:text-gray-50">
            RA
          </AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className="mr-6 mt-6 flex max-w-[200px] flex-col  rounded border border-gray-600 bg-gray-900 p-0 shadow">
        <p className=" w-full p-3 text-base text-gray-50 hover:bg-gray-800">
          Perfil
        </p>
        <p className=" inline-block w-full p-3 text-base text-gray-50 hover:bg-gray-800">
          <Server className="" />
          Meus Cursos
        </p>
        <p className=" w-full p-3 text-base text-gray-50 hover:bg-gray-800">
          Carrinho
        </p>
        <Button
          className=" mx-auto my-4 w-[80%] rounded-none border border-rose-500 bg-rose-500 font-alt text-gray-900   hover:border hover:border-rose-500 hover:bg-transparent hover:text-rose-500 max-md:hidden"
          asChild
        >
          <Link href="/user/sign-up">Sair</Link>
        </Button>
      </HoverCardContent>
    </HoverCard>
  )
}

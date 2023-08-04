// import { getUser } from '@/lib/auth'
'use client'

import { Book, LogOut, Server, ShoppingCart } from 'lucide-react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'

import { Avatar, AvatarFallback } from './ui/avatar'
import { CategoryLink } from './CategoryLink'

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
      <HoverCardContent className="mr-6 mt-6 flex max-w-[200px] flex-col overflow-hidden  rounded border border-gray-600 bg-gray-900 p-0 shadow">
        <div className="space-y-3 p-4">
          <CategoryLink.Root href="/">
            <CategoryLink.Icon icon={Server} />
            <CategoryLink.Content text="Perfil" />
          </CategoryLink.Root>
          <CategoryLink.Root href="/">
            <CategoryLink.Icon icon={Book} />
            <CategoryLink.Content text="Meus Cursos" />
          </CategoryLink.Root>
          <CategoryLink.Root href="/">
            <CategoryLink.Icon icon={ShoppingCart} />
            <CategoryLink.Content text="Carrinho" />
          </CategoryLink.Root>
          <CategoryLink.Root
            href="/api/auth/sign-in/logout"
            onClick={() => console.log('test')}
          >
            <CategoryLink.Icon icon={LogOut} />
            <CategoryLink.Content text="Sair" />
          </CategoryLink.Root>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

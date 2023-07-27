import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card'
import courseImg from '@/assets/AI_IMAGE.png'
import Link from 'next/link'
import Profile from './profile'
import SearchBar from './search-bar'
import { Button } from './ui/button'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { ModalContext } from '@/contexts/modal'
import { getCookie } from 'cookies-next'
import { Sidebar } from 'primereact/sidebar'
import CategoryLink from './category-link'

export default function SideBar() {
  const token = getCookie('access_token')
  const { openModal } = useContext(ModalContext)
  const [VisibleLeft, setVisibleLeft] = useState(false)

  const categories = [
    { href: '/user/topic/front-end', text: 'Front-End' },
    { href: '/user/topic/back-end', text: 'Back-End' },
    { href: '/user/topic/mobile', text: 'Mobile' },
    { href: '/user/topic/ui&design', text: 'UI & Design' },
    { href: '/user/topic/data-science', text: 'Data Science' },
    {
      href: '/user/topic/inteligencia-artificial',
      text: 'Inteligência Artificial',
    },
  ]
  return (
    <aside className="grid grid-cols-[max-content_30%_max-content] items-center justify-between  gap-2 bg-[#09090a]  px-5 py-10  font-sans shadow-lg">
      <div className=" flex items-center justify-center text-center  text-gray-50 md:space-x-3  lg:space-x-3">
        <Link href="/" className=" font-alt text-3xl font-semibold  ">
          Tech<span className="text-rose-500 ">Up</span>
        </Link>
        <HoverCard>
          <HoverCardTrigger>
            <span className=" cursor-pointer hover:text-rose-500 max-md:hidden">
              categorias
            </span>
          </HoverCardTrigger>
          <HoverCardContent className=" space-y-2 border-gray-600 bg-gray-900 p-4 ">
            {categories.map((category, index) => {
              return (
                <div key={index} className="mx-auto w-[90%] text-start">
                  <CategoryLink
                    key={index}
                    text={category.text}
                    href={category.href}
                  />
                </div>
              )
            })}
          </HoverCardContent>
        </HoverCard>
      </div>
      <SearchBar />

      <div className="  space-x-3">
        <Button
          onClick={() => openModal()}
          className="pi pi-search md:hidden lg:hidden"
          size={'icon'}
          variant={'icon'}
        />
        <HoverCard>
          <HoverCardTrigger>
            <Button
              className="pi pi-shopping-cart text-gray-50 duration-200  hover:text-[#FF4365]"
              size={'icon'}
              variant={'icon'}
            >
              <span className=" absolute  mb-8 font-sans text-sm  font-semibold">
                2
              </span>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className=" mt-6 flex flex-col space-y-4 rounded border border-gray-600 bg-gray-900 shadow">
            <ul className=" flex max-h-max w-full cursor-pointer flex-col  space-y-1 overflow-y-auto">
              <li className=" grid  w-full grid-cols-[64px_max-content] space-x-2 border-b border-gray-600  p-3 hover:bg-gray-800">
                <Image alt="" src={courseImg} className=" h-16 w-16 " />
                <div>
                  <p className=" max-w-max break-words font-bold text-gray-50">
                    Entendendo TypeScript
                  </p>
                  <p className=" text-xs text-gray-200">Leonardo Leitão</p>
                  <span className="font-bold text-gray-50">R$25.90</span>
                </div>
              </li>
              <li className=" grid  w-full grid-cols-[64px_max-content] space-x-2 border-b border-gray-600  p-3 hover:bg-gray-800">
                <Image alt="" src={courseImg} className=" h-16 w-16 " />
                <div>
                  <p className=" max-w-max break-words font-bold text-gray-50">
                    Entendendo TypeScript
                  </p>
                  <p className=" text-xs text-gray-200">Leonardo Leitão</p>
                  <span className="font-bold text-gray-50">R$25.90</span>
                </div>
              </li>
              <li className=" grid  w-full grid-cols-[64px_max-content] space-x-2 border-b border-gray-600  p-3 hover:bg-gray-800">
                <Image alt="" src={courseImg} className=" h-16 w-16 " />
                <div>
                  <p className=" max-w-max break-words font-bold text-gray-50">
                    Entendendo TypeScript
                  </p>
                  <p className=" text-xs text-gray-200">Leonardo Leitão</p>
                  <span className="font-bold text-gray-50">R$25.90</span>
                </div>
              </li>
            </ul>
            <Button
              className="w-3/4 self-center rounded-none bg-rose-500 font-semibold text-gray-950 hover:border hover:border-rose-500 hover:bg-transparent hover:text-rose-500"
              asChild
            >
              <Link href="/shopping-cart">ver meu carrinho</Link>
            </Button>
          </HoverCardContent>
        </HoverCard>

        {token ? (
          <Profile />
        ) : (
          <>
            <Button className=" hover:text-rose-500 max-md:hidden" asChild>
              <Link href="/user/sign-in">Fazer login</Link>
            </Button>
            <Button
              className=" rounded-none border border-rose-500 bg-rose-500 font-alt text-gray-900   hover:border hover:border-rose-500 hover:bg-transparent hover:text-rose-500 max-md:hidden"
              asChild
            >
              <Link href="/user/sign-up">Cadastrar-se</Link>
            </Button>
          </>
        )}
      </div>
      <Button
        className="pi pi-bars order-first   md:hidden lg:hidden"
        size={'icon'}
        variant={'icon'}
        onClick={() => setVisibleLeft(true)}
      />
      <Sidebar
        className="bg-gray-900"
        visible={VisibleLeft}
        onHide={() => setVisibleLeft(false)}
      >
        <div className="mb-4 flex w-full flex-col space-y-1 border-b border-gray-600 pb-2  text-gray-200">
          <Link href="/user/sign-in" className=" hover:text-rose-500">
            Fazer Login
          </Link>
          <Link href="/user/sign-up" className="hover:text-rose-500">
            Cadastrar-se
          </Link>
        </div>

        <div className="flex flex-col space-y-1">
          <span className="mb-2 text-sm font-semibold text-gray-50">
            Categorias
          </span>
          {categories.map((category, index) => (
            <CategoryLink
              key={index}
              href={category.href}
              text={category.text}
            />
          ))}
        </div>
      </Sidebar>
    </aside>
  )
}

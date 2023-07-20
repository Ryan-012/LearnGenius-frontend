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
    <aside className="grid  grid-cols-[max-content_30%_max-content] items-center justify-between gap-2 bg-white px-2 py-3 shadow-lg">
      <div className=" flex items-center justify-center  text-center md:space-x-4  lg:space-x-4">
        <span className=" text-3xl font-bold">
          Estuda<span className=" text-indigo-700">+</span>
        </span>
        <HoverCard>
          <HoverCardTrigger>
            <span className=" cursor-pointer font-medium  hover:text-indigo-700 max-md:hidden">
              Categorias
            </span>
          </HoverCardTrigger>
          <HoverCardContent className="mt-6 rounded bg-white">
            <ul className="grid grid-cols-2 gap-2">
              <li className="cursor-pointer hover:text-indigo-700">
                <Link href="/user/topic/front-end">Front-End</Link>
              </li>
              <li className="cursor-pointer hover:text-indigo-700">
                <Link href="/user/topic/back-end">Back-End</Link>
              </li>
              <li className="cursor-pointer hover:text-indigo-700">
                <Link href="/user/topic/mobile">Mobile</Link>
              </li>
              <li className="cursor-pointer hover:text-indigo-700">
                <Link href="/user/topic/ui-design">UI & Design</Link>
              </li>
              <li className="cursor-pointer hover:text-indigo-700">
                <Link href="/user/topic/data-science">Data Science</Link>
              </li>
              <li className="cursor-pointer hover:text-indigo-700">
                <Link href="/user/topic/inteligencia-artificial">
                  Inteligência Artificial
                </Link>
              </li>
            </ul>
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
              className="pi pi-shopping-cart"
              size={'icon'}
              variant={'icon'}
            >
              <span className="absolute mb-6 ml-5  text-red-600">2</span>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className=" mt-6 flex flex-col space-y-4 rounded bg-white">
            <ul className=" flex max-h-max w-full cursor-pointer flex-col  space-y-1 overflow-y-auto  ">
              <li className=" grid  w-full grid-cols-[64px_max-content] space-x-2 border-b border-gray-200  p-3 hover:bg-gray-200">
                <Image alt="" src={courseImg} className=" h-16 w-16 " />
                <div>
                  <p className=" max-w-max break-words font-bold text-gray-900">
                    Entendendo TypeScript
                  </p>
                  <p className=" text-xs text-gray-400">Leonardo Leitão</p>
                  <span className="font-bold text-gray-900">R$25.90</span>
                </div>
              </li>
              <li className=" grid  w-full grid-cols-[64px_max-content] space-x-2 border-b border-gray-200  p-3 hover:bg-gray-200">
                <Image alt="" src={courseImg} className=" h-16 w-16 " />
                <div>
                  <p className=" max-w-max break-words font-bold text-gray-900">
                    Entendendo TypeScript
                  </p>
                  <p className=" text-xs text-gray-400">Leonardo Leitão</p>
                  <span className="font-bold text-gray-900">R$25.90</span>
                </div>
              </li>
              <li className=" grid  w-full grid-cols-[64px_max-content] space-x-2 border-b border-gray-200  p-3 hover:bg-gray-200">
                <Image alt="" src={courseImg} className=" h-16 w-16 " />
                <div>
                  <p className=" max-w-max break-words font-bold text-gray-900">
                    Entendendo TypeScript
                  </p>
                  <p className=" text-xs text-gray-400">Leonardo Leitão</p>
                  <span className="font-bold text-gray-900">R$25.90</span>
                </div>
              </li>
              <li className=" grid  w-full grid-cols-[64px_max-content] space-x-2 border-b border-gray-200  p-3 hover:bg-gray-200">
                <Image alt="" src={courseImg} className=" h-16 w-16 " />
                <div>
                  <p className=" max-w-max break-words font-bold text-gray-900">
                    Entendendo TypeScript
                  </p>
                  <p className=" text-xs text-gray-400">Leonardo Leitão</p>
                  <span className="font-bold text-gray-900">R$25.90</span>
                </div>
              </li>
              <li className=" grid  w-full grid-cols-[64px_max-content] space-x-2 border-b border-gray-200  p-3 hover:bg-gray-200">
                <Image alt="" src={courseImg} className=" h-16 w-16 " />
                <div>
                  <p className=" max-w-max break-words font-bold text-gray-900">
                    Entendendo TypeScript
                  </p>
                  <p className=" text-xs text-gray-400">Leonardo Leitão</p>
                  <span className="font-bold text-gray-900">R$25.90</span>
                </div>
              </li>
            </ul>
            <Button className="w-3/4 self-center" asChild>
              <Link href="/shopping-cart">ver meu carrinho</Link>
            </Button>
          </HoverCardContent>
        </HoverCard>

        {token ? (
          <Profile />
        ) : (
          <>
            <Button className=" max-md:hidden " asChild>
              <Link href="/user/sign-in">Fazer login</Link>
            </Button>
            <Button className=" max-md:hidden" asChild>
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
        className=""
        visible={VisibleLeft}
        onHide={() => setVisibleLeft(false)}
      >
        <div className="mb-4 flex w-full flex-col space-y-1 border-b border-gray-200 pb-2  ">
          <Link href="/user/sign-in" className=" hover:text-indigo-700">
            Fazer Login
          </Link>
          <Link href="/user/sign-up" className="hover:text-indigo-700">
            Cadastrar-se
          </Link>
        </div>

        <div className="flex flex-col space-y-1">
          <span className="mb-2 text-sm font-semibold">Categorias</span>
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

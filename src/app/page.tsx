'use client'
import { Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import learnImg from '@/assets/learn.jpg'
import courseImg from '@/assets/AI_IMAGE.png'

import { Sidebar } from 'primereact/sidebar'

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { getCookie } from 'cookies-next'
import Profile from '@/components/profile'
import SearchBar from '@/components/search-bar'
import { useContext, useState } from 'react'
import { ModalContext } from '@/contexts/modal'
export default function Home() {
  const token = getCookie('access_token')
  const [VisibleLeft, setVisibleLeft] = useState(false)
  const { openModal } = useContext(ModalContext)
  return (
    <div className=" relative min-h-screen font-sans text-gray-900">
      <aside className="grid grid-cols-[max-content_50%_max-content] items-center justify-between gap-2 bg-white p-3 shadow-lg">
        <span className="  text-center text-3xl font-bold">
          Estuda<span className=" text-indigo-700">+</span>
        </span>

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
              />
            </HoverCardTrigger>
            <HoverCardContent className=" mt-6 flex flex-col space-y-4 rounded bg-white">
              <ul className=" flex max-h-max w-full cursor-pointer flex-col  space-y-1 overflow-y-auto  border-t border-gray-200">
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
              <Button className=" max-md:hidden" asChild>
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
          <div className="flex flex-col border-b border-gray-200 pb-2">
            <Link href="" className=" hover:text-indigo-700">
              Fazer Login
            </Link>
            <Link href="/user/sign-up" className="hover:text-indigo-700">
              Cadastrar-se
            </Link>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Sidebar>
      </aside>

      <main className=" flex">
        <div className=" mt-10 flex min-w-full flex-col items-center p-3  md:flex-row ">
          <div className="">
            <h1 className=" text-4xl font-bold max-md:text-3xl">
              Bem-vindo ao Estuda<span className=" text-indigo-700">+</span> -
              Sua plataforma de estudos aprimorada!
            </h1>
            <p className="text-2xl text-gray-500 max-md:text-lg">
              Prepare-se para o futuro da tecnologia e conquiste sua carreira na
              área de TI com nossos cursos de alta qualidade!
            </p>
          </div>
          <Image
            alt="learnImg"
            src={learnImg}
            className=" w-[40%] max-md:w-3/4"
          />
        </div>
      </main>
      <footer className=" absolute bottom-0 h-24 w-full bg-gray-900  text-lg text-white">
        {/* <Image className="  max-w-max" src={waves} alt="waves" /> */}
      </footer>
      {/* Image by <a href="https://www.freepik.com/free-vector/online-certification-illustration_8703118.htm#page=2&query=learning%20platform&position=46&from_view=search&track=ais">Freepik</a> */}
    </div>
  )
}

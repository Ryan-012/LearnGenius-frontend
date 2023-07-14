'use client'
import { ShoppingCart, Search } from 'lucide-react'
import Image from 'next/image'
import learnImg from '@/assets/learn.jpg'
import { InputText } from 'primereact/inputtext'

export default function Home() {
  return (
    <div className=" relative min-h-screen justify-between  font-sans text-gray-800">
      <aside className="flex items-center justify-between bg-white p-3 shadow-lg">
        <span className="ml-3 text-3xl ">
          Estuda<span className=" text-indigo-700">+</span>
        </span>
        <span className="p-input-icon-left w-1/5 min-w-[250px]">
          <Search className=" h-4 w-4 cursor-not-allowed  hover:text-indigo-700" />

          <InputText
            placeholder="O que você quer aprender?"
            className="w-full p-2"
          />
        </span>
        <div className=" flex items-center space-x-3 max-sm:hidden">
          <a href="">
            <ShoppingCart className="h-5 w-5 transition duration-200 hover:text-indigo-700 " />
          </a>
          <a
            href="/user/signUp"
            className=" rounded bg-indigo-700 p-2 text-white transition duration-200 hover:shadow-md hover:shadow-indigo-700"
          >
            Fazer login
          </a>
          <a
            href=""
            className=" rounded bg-indigo-700 p-2 text-white transition duration-200 hover:shadow-md hover:shadow-indigo-700"
          >
            Cadastrar-se
          </a>
        </div>
      </aside>
      <main className=" flex">
        <div className=" mt-10 flex min-w-full flex-col items-center p-3  md:flex-row ">
          <div className="">
            <h1 className=" text-4xl max-md:text-3xl">
              Bem-vindo ao Estuda<span className=" text-indigo-700">+</span> -
              Sua plataforma de estudos aprimorada!
            </h1>
            <p className="text-2xl text-gray-300 max-md:text-lg">
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

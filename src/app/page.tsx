'use client'
import Image from 'next/image'
import learnImg from '@/assets/learn.jpg'
import SideBar from '@/components/sidebar'
import Main from '@/components/main'

export default function Home() {
  return (
    <>
      <SideBar />
      <Main>
        <section className=" mt-10  flex  min-w-full flex-col items-center p-3  md:flex-row ">
          <div className="space-y-7">
            <h1 className="  text-7xl font-extrabold max-md:text-4xl md:text-5xl">
              Bem-vindo ao Estuda<span className=" text-indigo-700">+</span> -
              Sua plataforma de estudos aprimorada!
            </h1>
            <p className="text-xl text-gray-500 max-md:text-lg">
              Prepare-se para o{' '}
              <span className=" font-semibold text-indigo-700">
                futuro da tecnologia
              </span>{' '}
              e conquiste sua carreira na área de TI com nossos cursos de alta
              qualidade!
            </p>
          </div>
          <Image
            alt="learnImg"
            src={learnImg}
            className=" w-[60%] min-w-[400px]  max-md:w-3/4"
          />
        </section>
        <div className="h-[700px] bg-indigo-950">
          <h2 className=" mt-10 text-center text-7xl font-bold text-white">
            Teste
          </h2>
        </div>
      </Main>
      <footer className=" absolute bottom-0 h-24 w-full bg-gray-900  text-lg text-white"></footer>
      {/* Image by <a href="https://www.freepik.com/free-vector/online-certification-illustration_8703118.htm#page=2&query=learning%20platform&position=46&from_view=search&track=ais">Freepik</a> */}
    </>
  )
}

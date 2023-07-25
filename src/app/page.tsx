'use client'
import Image from 'next/image'
import futureImg from '@/assets/cyborg-hand-finger-background-technology-artificial-intelligence-removebg.png'

import SideBar from '@/components/sidebar'
import Main from '@/components/main'
import TabView from '@/components/tab-view'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Carousel from '@/components/carousel'
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500 })
  }, [])
  return (
    <>
      <SideBar />
      <Main>
        <section className="">
          <div
            data-aos="fade-up"
            className="mt-3 flex min-w-full  flex-col items-center  bg-gray-950  p-5  text-rose-500 xl:flex-row"
          >
            <div className="space-y-7">
              <h1 className="font-alt font-extrabold max-xl:text-5xl max-md:text-4xl xl:text-8xl ">
                Bem-vindo a <span className=" text-gray-50 ">Tech</span>Up - Sua
                plataforma de estudos aprimorada!
              </h1>
              <p className=" text-xl text-gray-200 max-md:text-lg">
                Prepare-se para o futuro da tecnologia e conquiste sua carreira
                na área de TI com nossos cursos de alta qualidade!
              </p>
            </div>
            <Image src={futureImg} alt="" className=" w-[600px] self-end " />
          </div>
        </section>

        <TabView />
        <Carousel />
      </Main>
      {/* <footer className=" absolute bottom-0 h-24 w-full bg-gray-900  text-lg text-white"></footer> */}
      {/* Image by <a href="https://www.freepik.com/free-vector/online-certification-illustration_8703118.htm#page=2&query=learning%20platform&position=46&from_view=search&track=ais">Freepik</a> */}
    </>
  )
}

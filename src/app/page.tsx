'use client'

import SideBar from '@/components/sidebar'
import Main from '@/components/main'
import TabView from '@/components/tab-view'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Carousel from '@/components/carousel'
import WelcomeSession from '@/components/sessions/welcome'
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500 })
  }, [])
  return (
    <>
      <SideBar />
      <Main>
        <WelcomeSession />

        <TabView />
        <Carousel />
      </Main>
      {/* <footer className=" absolute bottom-0 h-24 w-full bg-gray-900  text-lg text-white"></footer> */}
      {/* Image by <a href="https://www.freepik.com/free-vector/online-certification-illustration_8703118.htm#page=2&query=learning%20platform&position=46&from_view=search&track=ais">Freepik</a> */}
      {/* <a href="https://www.flaticon.com/free-icons/high-quality" title="high quality icons">High quality icons created by Uniconlabs - Flaticon</a> */}
    </>
  )
}

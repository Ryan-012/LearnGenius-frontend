'use client'

import Main from '@/components/main'
import CategoriesSection from '@/components/sections/categories'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import WelcomeSection from '@/components/sections/welcome'
import ResourceSection from '@/components/sections/resource'
import FeedbackSection from '@/components/sections/feedback'
import Footer from '@/components/footer'
import SideBar from '@/components/sidebar'
export default function Home() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
    AOS.init({ duration: 1000 })
  }, [])
  if (isClient)
    return (
      <>
        <SideBar />
        <Main>
          <WelcomeSection />
          <FeedbackSection />
          <CategoriesSection />
          <ResourceSection />
        </Main>
        <Footer />
        {/* Image by <a href="https://www.freepik.com/free-vector/online-certification-illustration_8703118.htm#page=2&query=learning%20platform&position=46&from_view=search&track=ais">Freepik</a> */}
        {/* <a href="https://www.flaticon.com/free-icons/high-quality" title="high quality icons">High quality icons created by Uniconlabs - Flaticon</a> */}
      </>
    )
}

'use client'
import Main from '@/components/main'
import CategoryHeader from '@/components/sections/categoryHeader'
import SideBar from '@/components/sidebar'
import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function TopicPage(params: { categoryName: string }) {
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
          <CategoryHeader />
        </Main>
      </>
    )
}

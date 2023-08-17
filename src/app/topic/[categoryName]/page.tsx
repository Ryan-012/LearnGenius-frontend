'use client'
import Main from '@/components/main'
import TopicHeader from '@/components/sections/topicHeader'
import SideBar from '@/components/sidebar'
import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ExplorationSection from '@/components/sections/exploration'
import SearchFiltersSection from '@/components/sections/searchFilters'

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
          <TopicHeader />
          <ExplorationSection />
          {/* <DestaqueSection /> */}
          <SearchFiltersSection />
        </Main>
      </>
    )
}

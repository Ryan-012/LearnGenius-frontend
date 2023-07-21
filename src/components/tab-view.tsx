import { TabView as TabViewComponent, TabPanel } from 'primereact/tabview'
import { useEffect, useState } from 'react'

import { Carousel } from 'primereact/carousel'
import { Atom, Brain, Code, Eye, Smartphone, Terminal } from 'lucide-react'
import { Button } from './ui/button'

const mostViewedCourses = [
  { id: 1, title: 'Curso 1', views: 200 },
  { id: 2, title: 'Curso 2', views: 180 },
  { id: 3, title: 'Curso 3', views: 150 },
]

export default function TabView() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="grid h-[700px]  bg-gray-950 p-2   py-10 text-white shadow-red-600">
      <ul className=" m-4 grid h-full grid-cols-3 gap-3 rounded-br-3xl rounded-tl-3xl    p-5 text-center text-lg">
        <Button
          variant={'icon'}
          className=" block h-full cursor-pointer    text-xl transition-transform duration-700 hover:-translate-y-3 hover:translate-x-2     hover:text-indigo-700"
        >
          <Code className="mx-auto h-[40%] w-[40%]" />
          Front-End
        </Button>
        <Button
          variant={'icon'}
          className=" block h-full  cursor-pointer text-xl transition-transform duration-700 hover:-translate-y-3 hover:translate-x-2    hover:text-indigo-700"
        >
          <Terminal className="mx-auto h-[40%] w-[40%]" />
          Back-End
        </Button>
        <Button
          variant={'icon'}
          className=" block h-full  cursor-pointer text-xl transition-transform duration-700 hover:-translate-y-3 hover:translate-x-2    hover:text-indigo-700"
        >
          <Smartphone className="mx-auto h-[40%] w-[40%]" />
          Mobile
        </Button>
        <Button
          variant={'icon'}
          className=" block h-full  cursor-pointer text-xl transition-transform duration-700 hover:-translate-y-3 hover:translate-x-2    hover:text-indigo-700"
        >
          <Atom className="mx-auto h-[40%] w-[40%]" />
          Data Science
        </Button>
        <Button
          variant={'icon'}
          className=" block h-full  cursor-pointer text-xl transition-transform duration-700 hover:-translate-y-3 hover:translate-x-2    hover:text-indigo-700"
        >
          <Brain className="mx-auto h-[40%] w-[40%]" />
          IA
        </Button>
        <Button
          variant={'icon'}
          className=" block h-full  cursor-pointer text-xl transition-transform duration-700 hover:-translate-y-3 hover:translate-x-2    hover:text-indigo-700"
        >
          <Eye className="mx-auto h-[40%] w-[40%]" />
          UI & Design
        </Button>
      </ul>
    </section>
  )
}

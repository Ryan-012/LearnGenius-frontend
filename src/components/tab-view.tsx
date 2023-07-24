import { Atom, Brain, Code, Eye, Smartphone, Terminal } from 'lucide-react'
import { Button } from './ui/button'

export default function TabView() {
  //  09090a
  return (
    <section
      data-aos="fade-right"
      className="grid h-[700px] min-w-full bg-gray-950  p-2 py-10    text-white shadow-red-600"
    >
      <ul className=" m-4 grid h-full grid-cols-3 gap-3 rounded-br-3xl rounded-tl-3xl p-5    text-center text-lg text-gray-50">
        <Button
          variant={'icon'}
          className=" block h-full cursor-pointer bg-red-300 text-xl    transition-transform duration-700 hover:-translate-y-3 hover:translate-x-2     hover:text-rose-500"
        >
          <Code className="mx-auto h-[40%] w-[40%]  hover:text-rose-500" />
          {'Front-End'}
        </Button>
        <Button
          variant={'icon'}
          className=" block h-full  cursor-pointer text-xl transition-transform duration-700 hover:-translate-y-3 hover:translate-x-2    hover:text-rose-500"
        >
          <Terminal className="mx-auto h-[40%] w-[40%]" />
          Back-End
        </Button>
        <Button
          variant={'icon'}
          className=" block h-full  cursor-pointer text-xl transition-transform duration-700 hover:-translate-y-3 hover:translate-x-2    hover:text-rose-500"
        >
          <Smartphone className="mx-auto h-[40%] w-[40%]" />
          Mobile
        </Button>
        <Button
          variant={'icon'}
          className=" block h-full  cursor-pointer text-xl transition-transform duration-700 hover:-translate-y-3 hover:translate-x-2    hover:text-rose-500"
        >
          <Atom className="mx-auto h-[40%] w-[40%]" />
          Data Science
        </Button>
        <Button
          variant={'icon'}
          className=" block h-full  cursor-pointer text-xl transition-transform duration-700 hover:-translate-y-3 hover:translate-x-2    hover:text-rose-500"
        >
          <Brain className="mx-auto h-[40%] w-[40%]" />
          IA
        </Button>
        <Button
          variant={'icon'}
          className=" block h-full  cursor-pointer text-xl transition-transform duration-700 hover:-translate-y-3 hover:translate-x-2    hover:text-rose-500"
        >
          <Eye className="mx-auto h-[40%] w-[40%]" />
          UI & Design
        </Button>
      </ul>
    </section>
  )
}

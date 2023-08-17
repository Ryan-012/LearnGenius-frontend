// import { ChevronsDown } from 'lucide-react'

export default function TopicHeaderSection() {
  return (
    <section
      data-aos="fade-in"
      className="  h-[400px]  w-full space-y-7  px-5 text-gray-50"
    >
      <div className="  mt-20 w-full space-y-4 ">
        <h1 className="text-center font-alt  text-rose-500 max-xl:text-5xl max-md:text-4xl xl:text-7xl ">
          Front-End
        </h1>
        <p className="text-center text-2xl text-gray-200 max-md:text-xl">
          Explore as maravilhas da interface do usuário e crie experiências
          incríveis para os usuários.
        </p>
      </div>
      <div className="text-rose mx-auto flex w-min space-x-4 p-3 font-alt text-xl max-md:text-lg">
        <a href="#diferenciais">
          Diferenciais
          <div className="line-underline "></div>
        </a>
        <a href="#diferenciais">
          Destaques
          <div className="line-underline "></div>
        </a>
        <a href="#search">
          Busca
          <div className="line-underline "></div>
        </a>
      </div>

      {/* <ChevronsDown className=" mx-auto h-10 w-10 animate-bounce text-rose-500" /> */}
    </section>
  )
}

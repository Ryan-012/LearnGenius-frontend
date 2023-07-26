import Image from 'next/image'
import futureImg from '@/assets/cyborg-hand-finger-background-technology-artificial-intelligence-removebg.png'
import notebookImg from '@/assets/new-laptop-balancing-with-geometric-shapes.jpg'
import { ChevronsDown } from 'lucide-react'

export default function WelcomeSection() {
  return (
    <section className="  space-y-7 ">
      <div
        // data-aos="fade-up"
        className=" mt-3 flex  min-w-full flex-col items-center  bg-gray-950 p-5    text-rose-500 xl:flex-row"
      >
        <div className="space-y-7">
          <h1 className="font-alt font-extrabold max-xl:text-5xl max-md:text-4xl xl:text-7xl ">
            Bem-vindo a <span className=" text-gray-50 ">Tech</span>Up - Sua
            plataforma de estudos aprimorada!
          </h1>
          <p className=" text-xl text-gray-200 max-md:text-lg">
            Prepare-se para o futuro da tecnologia e conquiste sua carreira na
            área de TI com nossos cursos de alta qualidade!
          </p>
        </div>
        <Image src={futureImg} alt="" className=" w-[600px] self-end " />
      </div>

      <ChevronsDown
        data-aos="fade-up"
        className=" mx-auto h-10 w-10 animate-bounce text-rose-500"
      />

      <div className="grid grid-cols-2 space-x-4 space-y-5 p-5 text-gray-200   max-md:grid-cols-1">
        <div className="" data-aos="zoom-in-down">
          <Image src={notebookImg} className=" rounded-lg" alt="" />
        </div>
        <div className="space-y-7" data-aos="fade-down">
          <h2 className="font-alt text-5xl text-rose-500 max-xl:text-3xl max-md:text-2xl ">
            Uma Abordagem <span className="text-gray-50">Inovadora</span>
          </h2>
          <p className=" text-lg">
            {' '}
            Na TechUp, acreditamos que aprender tecnologia pode ser uma
            experiência empolgante e prática. Nossa abordagem inovadora combina
            aulas ao vivo e dinâmicas com projetos colaborativos, vídeos
            interativos, jogos e muito mais. Aqui, você pode aprender de forma
            criativa e divertida, adquirindo habilidades práticas para o mercado
            de trabalho.
          </p>
        </div>
      </div>
    </section>
  )
}

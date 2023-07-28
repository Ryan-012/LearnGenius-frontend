import { CardTitle, CardContent, Card, CardHeader } from '../ui/card'
import testImg from '@/assets/AI_IMAGE.png'
import testImg2 from '@/assets/images.jpg'
import Image from 'next/image'

export default function FeedbackSection() {
  return (
    <section className=" grid grid-cols-2  px-5 max-lg:grid-cols-1 max-lg:space-y-3">
      <h2
        data-aos="fade-right"
        className="self-center text-center font-alt text-5xl text-rose-500 max-xl:text-3xl max-md:text-2xl"
      >
        Descubra por que nossos alunos estão apaixonados pela{' '}
        <span className="text-gray-50">Tech</span>Up!
      </h2>
      <div
        data-aos="fade-left"
        className=" mx-auto grid grid-cols-2 gap-3  max-sm:grid-cols-1 max-sm:space-y-3"
      >
        <Card className=" max-w-[300px] cursor-default space-y-6 border-none bg-transparent p-4 text-start text-gray-700 shadow-none   duration-300  hover:bg-gray-800">
          <CardHeader className="flex flex-row space-x-2 bg-transparent p-0 shadow-none">
            <Image
              width={200}
              height={200}
              src={testImg2}
              alt=""
              className="h-10 w-10 "
            />
            <CardTitle className="text-lg font-bold text-gray-50">
              João Pedro
            </CardTitle>
          </CardHeader>
          <CardContent className=" max-h-[230px] overflow-y-auto p-0 text-base text-gray-200">
            {`"Nunca imaginei que aprender sobre programação poderia ser tão
            divertido! Os instrutores da TechUp são incríveis, as aulas são
            envolventes e os projetos práticos me ajudaram a consolidar meus
            conhecimentos. Sinto-me mais confiante do que nunca na minha
            carreira!"`}
          </CardContent>
        </Card>
        <Card className="  max-w-[300px] cursor-default space-y-6 border-none bg-transparent p-4 text-start text-gray-700 shadow-none  duration-300 hover:bg-gray-800">
          <CardHeader className=" flex flex-row space-x-2 bg-transparent p-0 shadow-none">
            <Image
              width={200}
              height={200}
              src={testImg}
              alt=""
              className="h-10 w-10"
            />
            <CardTitle className="text-lg font-bold text-gray-50">
              Ryan Aragão
            </CardTitle>
          </CardHeader>
          <CardContent className=" max-h-[230px] overflow-y-auto p-0 text-base text-gray-200">
            {`"Os cursos da TechUp mudaram completamente a minha trajetória profissional! Aprendi habilidades essenciais para o mercado de trabalho atual e consegui uma nova oportunidade em uma grande empresa. Recomendo a todos!"`}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

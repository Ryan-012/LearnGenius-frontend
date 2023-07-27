import { CardTitle, CardContent, Card, CardHeader } from '../ui/card'
import testImg from '@/assets/AI_IMAGE.png'
import testImg2 from '@/assets/images.jpg'
import Image from 'next/image'

export default function FeedbackSection() {
  return (
    <section className=" grid grid-cols-2  py-7 max-lg:grid-cols-1 max-lg:space-y-3">
      <h2
        data-aos="fade-right"
        className="text-center font-alt text-5xl text-[#DB3051] max-xl:text-3xl max-md:text-2xl"
      >
        O que nossos alunos dizem sobre a{' '}
        <span className="text-gray-900">Tech</span>Up
      </h2>
      <div
        data-aos="zoom-in-up"
        className=" mx-auto grid grid-cols-2 gap-3  max-sm:grid-cols-1 max-sm:space-y-3"
      >
        <Card className=" max-w-[300px] cursor-default space-y-6 border-none bg-transparent p-4 text-start text-gray-700 shadow-none   duration-300  hover:bg-gray-100">
          <CardHeader className="flex flex-row space-x-2 bg-transparent p-0 shadow-none">
            <Image
              width={200}
              height={200}
              src={testImg2}
              alt=""
              className="h-10 w-10 "
            />
            <CardTitle className="text-lg font-bold text-gray-950">
              João Pedro
            </CardTitle>
          </CardHeader>
          <CardContent className=" p-0 text-base text-gray-500">
            {`"Nunca imaginei que aprender sobre programação poderia ser tão
            divertido! Os instrutores da TechUp são incríveis, as aulas são
            envolventes e os projetos práticos me ajudaram a consolidar meus
            conhecimentos. Sinto-me mais confiante do que nunca na minha
            carreira!"`}
          </CardContent>
        </Card>
        <Card className=" max-w-[300px] cursor-default space-y-6 border-none bg-transparent p-4 text-start text-gray-700 shadow-none  duration-300 hover:bg-gray-100">
          <CardHeader className=" flex flex-row space-x-2 bg-transparent p-0 shadow-none">
            <Image
              width={200}
              height={200}
              src={testImg}
              alt=""
              className="h-10 w-10"
            />
            <CardTitle className="text-lg font-bold text-gray-950">
              Ryan Aragão
            </CardTitle>
          </CardHeader>
          <CardContent className=" p-0 text-base text-gray-500">
            {`"Nunca imaginei que aprender sobre programação poderia ser tão
            divertido! Os instrutores da TechUp são incríveis, as aulas são
            envolventes e os projetos práticos me ajudaram a consolidar meus
            conhecimentos. Sinto-me mais confiante do que nunca na minha
            carreira!"`}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

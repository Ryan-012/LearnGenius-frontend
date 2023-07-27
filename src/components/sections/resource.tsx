import Image from 'next/image'
import { CardTitle, Card, CardHeader, CardContent } from '../ui/card'

import flexIgm from '@/assets/flexible.png'

import highImg from '@/assets/high-quality.png'
import teacherIgm from '@/assets/teacher.png'
import networkingImg from '@/assets/teamwork.png'
const reasons = [
  {
    title: 'Cursos de alta qualidade',
    description:
      'Nossos cursos são cuidadosamente elaborados por especialistas e abrangem as tecnologias mais relevantes do mercado.',
    icon: highImg,
  },
  {
    title: 'Instrutores experientes',
    description:
      'Contamos com uma equipe de instrutores altamente qualificados, com vasta experiência na indústria de TI.',
    icon: teacherIgm,
  },
  {
    title: 'Flexibilidade de aprendizado',
    description:
      'Nossa plataforma permite que você estude no seu próprio ritmo e em qualquer lugar, tornando o aprendizado mais acessível.',
    icon: flexIgm,
  },
  {
    title: 'Comunidade de alunos',
    description:
      'Ao se juntar à TechUp, você fará parte de uma comunidade de alunos e profissionais de TI, possibilitando networking e colaboração.',
    icon: networkingImg,
  },
]
export default function ResourceSection() {
  return (
    <section
      data-aos="fade-up"
      className="  space-y-6 px-5   text-center  text-gray-50"
    >
      <h2 className="font-alt text-5xl text-rose-500 max-xl:text-3xl max-md:text-2xl">
        Por que escolher a <span className="text-gray-50">Tech</span>Up?
      </h2>
      <div className="grid grid-cols-4 gap-3 p-4 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
        {reasons.map((reason, index) => {
          return (
            <Card
              className=" cursor-default space-y-6 border-none bg-transparent p-4 text-start text-gray-50 shadow-none  duration-300 hover:bg-gray-800"
              key={index}
            >
              <CardHeader className=" space-y-4 bg-transparent p-0 shadow-none">
                <Image
                  width={200}
                  height={200}
                  src={reason.icon}
                  alt=""
                  className="h-10 w-10"
                />
                <CardTitle className="text-2xl max-md:text-xl">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent className=" p-0 text-base text-gray-200">
                {reason.description}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

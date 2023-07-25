import Image from 'next/image'
import futureImg from '@/assets/cyborg-hand-finger-background-technology-artificial-intelligence-removebg.png'
import { Card, CardContent, CardTitle } from '../ui/card'
import { CardHeader } from '@material-tailwind/react'

const reasons = [
  {
    title: 'Cursos de alta qualidade',
    description:
      'Nossos cursos são cuidadosamente elaborados por especialistas e abrangem as tecnologias mais relevantes do mercado.',
    icon: '@/assets/high-quality.png',
  },
  {
    title: 'Instrutores experientes',
    description:
      'Contamos com uma equipe de instrutores altamente qualificados, com vasta experiência na indústria de TI.',
    icon: '@/assets/teacher.png', // Substitua pelo caminho da imagem do ícone
  },
  {
    title: 'Flexibilidade de aprendizado',
    description:
      'Nossa plataforma permite que você estude no seu próprio ritmo e em qualquer lugar, tornando o aprendizado mais acessível.',
    icon: '@/assets/flexible.png', // Substitua pelo caminho da imagem do ícone
  },
  {
    title: 'Comunidade de alunos',
    description:
      'Ao se juntar à TechUp, você fará parte de uma comunidade de alunos e profissionais de TI, possibilitando networking e colaboração.',
    icon: '@/assets/teamwork.png', // Substitua pelo caminho da imagem do ícone
  },
]

export default function WelcomeSession() {
  return (
    <section className="space-y-7">
      <div
        data-aos="fade-up"
        className="mt-3 flex min-w-full  flex-col items-center  bg-gray-950  p-5  text-rose-500 xl:flex-row"
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
      <div className=" p-5 text-center font-alt text-4xl text-gray-50">
        <h2 className="font">Por que escolher a TechUp?</h2>
        <div className="grid grid-cols-4 gap-2 p-4 ">
          {reasons.map((reason, index) => {
            return (
              <Card className=" border-none text-gray-50" key={index}>
                <CardHeader className=" bg-transparent">
                  {/* <Image
                    width={200}
                    height={200}
                    src={reason.icon}
                    alt=""
                    className="h-10 w-10"
                  /> */}
                  <CardTitle className="">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent></CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Atom, Brain, Code, Eye, Smartphone, Terminal } from 'lucide-react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card'

export default function CategoriesSection() {
  return (
    <section className="py-7" data-aos="fade-right">
      <h2 className="text-center font-alt text-5xl text-rose-500">
        Escolha a sua jornada
      </h2>
      <div className="mx-auto mt-10 grid grid-cols-3 justify-items-center  gap-4 p-5 max-md:grid-cols-2  max-sm:grid-cols-1   xl:w-[70%] ">
        <Card className=" max-w-[300px] cursor-pointer border-2 border-gray-600 bg-gray-900 duration-300 hover:border-cyan-400 hover:bg-gray-800">
          <CardHeader className=" space-y-3 font-alt text-gray-200">
            <CardTitle className=" text-cyan-400">
              <Code className="mb-3" />
              Front-End
            </CardTitle>
          </CardHeader>
          <CardContent className="font-semibold text-cyan-500">
            Crie interfaces incríveis com HTML, CSS e JavaScript.
          </CardContent>
        </Card>
        <Card className=" max-w-[300px] cursor-pointer border-2 border-gray-600 bg-gray-900 duration-300 hover:border-purple-400 hover:bg-gray-800">
          <CardHeader className=" space-y-3 font-alt text-gray-200">
            <CardTitle className=" text-purple-400">
              <Terminal className="mb-3" />
              Back-End
            </CardTitle>
          </CardHeader>
          <CardContent className="font-semibold text-purple-500">
            Desenvolva o lado do servidor para tornar suas aplicações completas.
          </CardContent>
        </Card>

        <Card className="  max-w-[300px] cursor-pointer border-2 border-gray-600 bg-gray-900 duration-300 hover:border-green-400 hover:bg-gray-800">
          <CardHeader className=" space-y-3 font-alt text-gray-200">
            <CardTitle className=" text-green-400">
              <Smartphone className="mb-3" />
              Mobile
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="font-semibold text-green-500">
            Desenvolva aplicativos para dispositivos móveis usando as mais
            recentes tecnologias.
          </CardContent>
        </Card>
        <Card className="max-w-[300px] cursor-pointer border-2 border-gray-600 bg-gray-900 duration-300 hover:border-orange-400 hover:bg-gray-800">
          <CardHeader className=" space-y-3 font-alt text-gray-200">
            <CardTitle className=" text-orange-400">
              <Brain className="mb-3" />
              Inteligência Artificial
            </CardTitle>
          </CardHeader>
          <CardContent className="font-semibold text-orange-500">
            Descubra o fascinante mundo da Inteligência Artificial e Machine
            Learning.
          </CardContent>
        </Card>
        <Card className=" max-w-[300px] cursor-pointer border-2 border-gray-600 bg-gray-900 duration-300 hover:border-pink-400 hover:bg-gray-800">
          <CardHeader className=" space-y-3 font-alt text-gray-200">
            <CardTitle className=" text-pink-400">
              <Eye className="mb-3" />
              UI & Design
            </CardTitle>
          </CardHeader>
          <CardContent className="font-semibold text-pink-500">
            Explore o mundo do design de interfaces e experiência do usuário.
          </CardContent>
        </Card>

        <Card className="  max-w-[300px] cursor-pointer border-2 border-gray-600 bg-gray-900 duration-300 hover:border-yellow-400 hover:bg-gray-800">
          <CardHeader className=" space-y-3 font-alt text-gray-200">
            <CardTitle className=" text-yellow-400">
              <Atom className="mb-3" />
              Data Science
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="font-semibold text-yellow-500">
            Analise e interprete dados para tomar decisões estratégicas.
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

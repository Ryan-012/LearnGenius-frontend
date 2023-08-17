import { Menu } from 'lucide-react'
import { Button } from '../ui/button'
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from '../ui/select'
import Image from 'next/image'
import courseImg from '@/assets/tsImg.png'

export default function SearchFiltersSection() {
  return (
    <section className=" space-y-6 px-5  text-gray-50" id="search">
      <div className="flex w-full p-3">
        <div className="flex space-x-3  p-3">
          <Button className=" rounded border border-gray-600 text-gray-300 shadow hover:border-gray-50  hover:text-gray-50">
            <Menu className="mr-1" />
            Filtros
          </Button>
          <Select>
            <SelectTrigger className="border-gray-600 text-gray-300 duration-300  hover:border-gray-50 hover:text-gray-50">
              <SelectValue placeholder="Classificar por..." />
            </SelectTrigger>
            <SelectContent className=" border-gray-600 bg-gray-900 p-2 text-gray-50">
              <SelectItem
                value="mais_vendidos"
                className="mb-2 border-b border-gray-600 duration-300 hover:bg-gray-800"
              >
                Mais vendidos
              </SelectItem>
              <SelectItem
                value="mais_visualizacoes"
                className="mb-2 border-b border-gray-600 duration-300 hover:bg-gray-800"
              >
                Visualizações mais altas
              </SelectItem>
              <SelectItem
                value="mais_novos"
                className="border-b border-gray-600 duration-300 hover:bg-gray-800"
              >
                Mais Novos
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <p className="ml-auto self-center font-alt text-gray-200">
          458 resultados
        </p>
      </div>

      <div className="grid grid-cols-[200px_1fr] gap-3 p-3  text-gray-50 max-lg:grid-cols-1">
        <div className="h-[800px] bg-gray-900 p-3 max-lg:hidden">
          Local dos filtros
        </div>
        <ul className=" h-[1000px] space-y-3 overflow-y-auto p-3">
          <li className="flex w-full space-x-4 p-3 duration-300 hover:cursor-pointer hover:bg-gray-800">
            <Image
              src={courseImg}
              alt=""
              className="h-[150px] w-[250px] max-sm:h-16 max-sm:w-16"
            />
            <div className="space-y-1 text-gray-50">
              <p className="break-words text-lg font-bold">
                Entendendo TypeScript
              </p>
              <p className="text-gray-200">
                Neste curso abrangente, você explorará os conceitos fundamentais
                do TypeScript, desde a sintaxe básica até recursos avançados
                como tipos personalizados...
              </p>
              <p className="text-sm text-gray-400">Leonardo Leitão</p>
              <p className="text-sm text-gray-400">
                Avançado - 60 horas - 30 aulas
              </p>
              <p className="font-bold">R$25.90</p>
            </div>
          </li>
          <li className="flex w-full space-x-4 p-3 duration-300 hover:cursor-pointer hover:bg-gray-800">
            <Image
              src={courseImg}
              alt=""
              className="h-[150px] w-[250px] max-sm:h-16 max-sm:w-16"
            />
            <div className="space-y-1 text-gray-50">
              <p className="break-words text-lg font-bold">
                Entendendo TypeScript
              </p>
              <p className="text-gray-200">
                Neste curso abrangente, você explorará os conceitos fundamentais
                do TypeScript, desde a sintaxe básica até recursos avançados
                como tipos personalizados...
              </p>
              <p className="text-sm text-gray-400">Leonardo Leitão</p>
              <p className="font-bold">R$25.90</p>
            </div>
          </li>
          <li className="flex w-full space-x-4 p-3 duration-300 hover:cursor-pointer hover:bg-gray-800">
            <Image
              src={courseImg}
              alt=""
              className="h-[150px] w-[250px] max-sm:h-16 max-sm:w-16"
            />
            <div className="space-y-1 text-gray-50">
              <p className="break-words text-lg font-bold">
                Entendendo TypeScript
              </p>
              <p className="text-gray-200">
                Neste curso abrangente, você explorará os conceitos fundamentais
                do TypeScript, desde a sintaxe básica até recursos avançados
                como tipos personalizados...
              </p>
              <p className="text-sm text-gray-400">Leonardo Leitão</p>
              <p className="font-bold">R$25.90</p>
            </div>
          </li>
          <li className="flex w-full space-x-4 p-3 duration-300 hover:cursor-pointer hover:bg-gray-800">
            <Image
              src={courseImg}
              alt=""
              className="h-[150px] w-[250px] max-sm:h-16 max-sm:w-16"
            />
            <div className="space-y-1 text-gray-50">
              <p className="break-words text-lg font-bold">
                Entendendo TypeScript
              </p>
              <p className="text-gray-200">
                Neste curso abrangente, você explorará os conceitos fundamentais
                do TypeScript, desde a sintaxe básica até recursos avançados
                como tipos personalizados...
              </p>
              <p className="text-sm text-gray-400">Leonardo Leitão</p>
              <p className="font-bold">R$25.90</p>
            </div>
          </li>
          <li className="flex w-full space-x-4 p-3 duration-300 hover:cursor-pointer hover:bg-gray-800">
            <Image
              src={courseImg}
              alt=""
              className="h-[150px] w-[250px] max-sm:h-16 max-sm:w-16"
            />
            <div className="space-y-1 text-gray-50">
              <p className="break-words text-lg font-bold">
                Entendendo TypeScript
              </p>
              <p className="text-gray-200">
                Neste curso abrangente, você explorará os conceitos fundamentais
                do TypeScript, desde a sintaxe básica até recursos avançados
                como tipos personalizados...
              </p>
              <p className="text-sm text-gray-400">Leonardo Leitão</p>
              <p className="font-bold">R$25.90</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

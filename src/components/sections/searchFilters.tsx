import {
  Banknote,
  Clock3,
  Gauge,
  Menu,
  MessageSquare,
  PlusCircle,
} from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'
import courseImg from '@/assets/tsImg.png'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import ClassificationMenu from '../classification-menu'
import { useState } from 'react'

export default function SearchFiltersSection() {
  const [amountRadioValue, setAmountRadioValue] = useState('gratuito')
  return (
    <section className=" space-y-6 px-5  text-gray-50" id="search">
      <div className="flex w-full p-3">
        <div className="flex space-x-3  p-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className=" rounded border border-gray-600 text-gray-300 shadow hover:border-gray-50  hover:text-gray-50">
                <Menu className="mr-1" />
                Filtros
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-gray-600 bg-gray-900 px-2 py-1.5  text-gray-50">
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="rounded hover:bg-gray-700 ">
                  <Banknote className="mr-2 h-4 w-4" />
                  Preços
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="border-gray-600 bg-gray-900 px-2 py-1.5 text-gray-50">
                    <DropdownMenuRadioGroup
                      value={amountRadioValue}
                      onValueChange={(value) => setAmountRadioValue(value)}
                    >
                      <DropdownMenuRadioItem
                        value="gratuito"
                        className="cursor-pointer rounded hover:bg-gray-700"
                      >
                        <span>Gratuito</span>
                      </DropdownMenuRadioItem>
                      {/* <DropdownMenuSeparator /> */}
                      <DropdownMenuRadioItem
                        value="pago"
                        className="cursor-pointer rounded hover:bg-gray-700"
                      >
                        <span>Pago</span>
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="rounded hover:bg-gray-700 ">
                  <Gauge className="mr-2 h-4 w-4" />
                  Nível
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="border-gray-600 bg-gray-900 text-gray-50">
                    <DropdownMenuItem>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>Iniciante</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>Intermediário</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>Avançado</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="rounded hover:bg-gray-700 ">
                  <Clock3 className="mr-2 h-4 w-4" />
                  Duração
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="border-gray-600 bg-gray-900 text-gray-50">
                    <DropdownMenuItem>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>1 - 10 horas</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>11 - 30 horas</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>31+ horas</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
          <ClassificationMenu />
        </div>
        <p className="ml-auto self-center font-alt text-gray-200 max-md:hidden">
          458 resultados
        </p>
      </div>

      <div className="grid  grid-cols-1  p-3 text-gray-50">
        <ul className=" h-[1000px] space-y-3 overflow-y-auto p-3">
          <li className="flex w-full space-x-4 rounded p-3 duration-300 hover:cursor-pointer hover:bg-gray-700">
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
          <li className="flex w-full space-x-4 rounded p-3 duration-300 hover:cursor-pointer hover:bg-gray-700">
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
          <li className="flex w-full space-x-4 rounded p-3 duration-300 hover:cursor-pointer hover:bg-gray-700">
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
          <li className="flex w-full space-x-4 rounded p-3 duration-300 hover:cursor-pointer hover:bg-gray-700">
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
          <li className="flex w-full space-x-4 rounded p-3 duration-300 hover:cursor-pointer hover:bg-gray-700">
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
        </ul>
      </div>
    </section>
  )
}

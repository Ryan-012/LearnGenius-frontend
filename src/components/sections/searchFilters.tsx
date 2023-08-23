import { Banknote, Clock3, Gauge, Menu } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'
import courseImg from '@/assets/tsImg.png'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import ClassificationMenu from '../classification-menu'
import { useEffect, useState, Dispatch, SetStateAction } from 'react'

export default function SearchFiltersSection() {
  const [amountArray, setAmountArray] = useState<String[]>([])
  const [levelsArray, setLevelsArray] = useState<String[]>([])
  const [durationArray, setDurationArray] = useState<String[]>([])
  const [filterOn, setFilterOn] = useState(false)
  useEffect(() => {
    if (
      (amountArray.length || levelsArray.length || durationArray.length) > 0
    ) {
      setFilterOn(true)
    } else {
      setFilterOn(false)
    }
  }, [amountArray, levelsArray, durationArray])

  const toggleArray = (
    value: string,
    array: String[],
    setArray: Dispatch<SetStateAction<String[]>>,
  ) => {
    if (array.includes(value)) {
      return setArray(array.filter((item) => item !== value))
    }
    setArray([...array, value])
  }

  function cleanFilters() {
    setAmountArray([])
    setDurationArray([])
    setLevelsArray([])
  }

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
                    <DropdownMenuCheckboxItem
                      className="cursor-pointer rounded hover:bg-gray-700"
                      checked={amountArray.includes('gratuito')}
                      onCheckedChange={() =>
                        toggleArray('gratuito', amountArray, setAmountArray)
                      }
                    >
                      Gratuito
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      className="cursor-pointer rounded hover:bg-gray-700"
                      checked={amountArray.includes('pago')}
                      onCheckedChange={() =>
                        toggleArray('pago', amountArray, setAmountArray)
                      }
                    >
                      Pago
                    </DropdownMenuCheckboxItem>
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
                    <DropdownMenuCheckboxItem
                      className="cursor-pointer rounded hover:bg-gray-700"
                      checked={levelsArray.includes('iniciante')}
                      onCheckedChange={() =>
                        toggleArray('iniciante', levelsArray, setLevelsArray)
                      }
                    >
                      Iniciante
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      className="cursor-pointer rounded hover:bg-gray-700"
                      checked={levelsArray.includes('intermediario')}
                      onCheckedChange={() =>
                        toggleArray(
                          'intermediario',
                          levelsArray,
                          setLevelsArray,
                        )
                      }
                    >
                      Intermediário
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      className="cursor-pointer rounded hover:bg-gray-700"
                      checked={levelsArray.includes('avancado')}
                      onCheckedChange={() =>
                        toggleArray('avancado', levelsArray, setLevelsArray)
                      }
                    >
                      Avançado
                    </DropdownMenuCheckboxItem>
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
                    <DropdownMenuCheckboxItem
                      className="cursor-pointer rounded hover:bg-gray-700"
                      checked={durationArray.includes('curto')}
                      onCheckedChange={() =>
                        toggleArray('curto', durationArray, setDurationArray)
                      }
                    >
                      1 - 10 horas
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      className="cursor-pointer rounded hover:bg-gray-700"
                      checked={durationArray.includes('medio')}
                      onCheckedChange={() =>
                        toggleArray('medio', durationArray, setDurationArray)
                      }
                    >
                      11 - 30 horas
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      className="cursor-pointer rounded hover:bg-gray-700"
                      checked={durationArray.includes('longo')}
                      onCheckedChange={() =>
                        toggleArray('longo', durationArray, setDurationArray)
                      }
                    >
                      31+ horas
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
          <ClassificationMenu />

          {filterOn && (
            <Button
              onClick={cleanFilters}
              className=" text-gray-300 underline underline-offset-4 hover:text-gray-50"
            >
              Limpar filtros
            </Button>
          )}
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

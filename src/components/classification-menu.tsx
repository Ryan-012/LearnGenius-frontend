import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { useState } from 'react'

export default function ClassificationMenu() {
  const [radioValue, setRadioValue] = useState('visualizacoes')
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className=" rounded border border-gray-600 text-gray-300 shadow hover:border-gray-50  hover:text-gray-50">
          <Menu className="mr-1" />
          Classificar por...
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-gray-600 bg-gray-900 px-2 py-1.5">
        <DropdownMenuRadioGroup
          className=" text-gray-50"
          value={radioValue}
          onValueChange={(value) => setRadioValue(value)}
        >
          <DropdownMenuRadioItem
            className="cursor-pointer  rounded hover:bg-gray-700"
            value="mais_vendidos"
          >
            Mais vendidos
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="visualizacoes"
            className="cursor-pointer rounded hover:bg-gray-700"
          >
            Visualizações mais altas
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="novos"
            className="cursor-pointer rounded hover:bg-gray-700"
          >
            Mais novos
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

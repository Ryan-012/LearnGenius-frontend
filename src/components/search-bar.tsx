'use client'

import { useContext } from 'react'
import { Button } from './ui/button'

import { Search } from 'lucide-react'
import { ModalContext } from '@/contexts/modal'
import SearchModal from './search-modal'
export default function SearchBar() {
  // const [value, setValue] = useState<null | string>(null)
  const { openModal, modalState } = useContext(ModalContext)

  return (
    <>
      <div
        className=" mx-auto w-[250px] max-md:hidden"
        onClick={() => openModal()}
      >
        <Button className="w-full rounded border border-gray-600 bg-transparent p-2 text-gray-300 shadow hover:border-gray-50  hover:text-gray-50">
          <Search className="mr-2 h-4 w-4 cursor-pointer" />O que você quer
          aprender?
        </Button>
      </div>
      {modalState && <SearchModal />}
    </>
  )
}

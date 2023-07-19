'use client'

import { useContext, useState } from 'react'
import { Button } from './ui/button'

import { Search } from 'lucide-react'
import { ModalContext } from '@/contexts/modal'
import SearchModal from './search-modal'
export default function SearchBar() {
  const [value, setValue] = useState<null | string>(null)
  const { openModal, modalState } = useContext(ModalContext)

  return (
    <>
      <div
        className=" mx-auto w-[270px] max-md:hidden"
        onClick={() => openModal()}
      >
        <Button className="w-full rounded border border-gray-200 bg-transparent p-2 text-gray-400 shadow hover:bg-gray-50 hover:text-gray-500">
          <Search className="mr-2 h-4 w-4 cursor-pointer" />O que você quer
          aprender?
        </Button>
      </div>
      {modalState && <SearchModal />}
    </>
  )
}

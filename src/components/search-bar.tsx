'use client'

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'

import { InputText } from 'primereact/inputtext'
import { useEffect, useState } from 'react'
import Image from 'next/image'
// import learnImg from '@/assets/learn.jpg'
import courseImg from '@/assets/AI_IMAGE.png'
import { Button } from './ui/button'
import { Input } from './ui/input'
export default function SearchBar() {
  const [value, setValue] = useState<null | string>(null)
  const [modalState, setModalState] = useState(false)
  useEffect(() => {
    console.log(value?.length)
  }, [value])
  return (
    <>
      <div className=" p-input-icon-left  min-w-[250px] ">
        <i className="pi pi-search " />
        <Button
          onClick={() => setModalState(true)}
          className="  w-full rounded border border-gray-200 bg-transparent p-2 text-gray-400 shadow hover:bg-gray-50  hover:text-gray-500"
        >
          O que você quer aprender?
        </Button>
      </div>
      {modalState && (
        <div className="fixed left-0 top-0 flex h-full  w-full items-center justify-center backdrop-blur ">
          <div
            className={` fixed grid max-h-[400px] min-h-[250px] w-[500px] grid-rows-[min-content_1fr] shadow-lg shadow-gray-400 max-sm:w-[400px] ${
              modalState
                ? 'animate-in fade-in-0 zoom-in-95  slide-in-from-top-[48%] duration-300'
                : 'slide-out-from-top-[48%] animate-out fade-out-0 zoom-out-95 duration-300'
            }    rounded  border border-gray-200  bg-gray-50 duration-200`}
          >
            <div className=" flex w-full  items-center px-3 text-gray-400">
              <i className="pi pi-search cursor-not-allowed " />
              <Input
                placeholder="Type a course or search..."
                className="border-none "
              />
              <i
                className="pi pi-times cursor-pointer"
                onClick={() => setModalState(false)}
              ></i>
            </div>
            <ul className=" flex max-h-max w-full flex-col  space-y-1 overflow-y-auto  border-t border-gray-200  ">
              <li className=" flex space-x-2 border-b border-gray-200 p-3">
                <Image alt="" src={courseImg} className=" h-16 w-16 " />
                <div className=" ">
                  <p className=" max-w-max break-words font-bold text-gray-900">
                    Entendendo TypeScript
                  </p>
                  <p className=" text-xs text-gray-400">Leonardo Leitão</p>
                  <span className="font-bold text-gray-900">R$25.90</span>
                </div>
              </li>
              <li className=" flex space-x-2 border-b border-gray-200 p-3">
                <Image alt="" src={courseImg} className=" h-16 w-16 " />
                <div className=" ">
                  <p className=" max-w-max break-words font-bold text-gray-900">
                    Entendendo TypeScript
                  </p>
                  <p className=" text-xs text-gray-500">Leonardo Leitão</p>
                  <span className="font-bold text-gray-900">R$25.90</span>
                </div>
              </li>
              <li className=" flex space-x-2 border-b border-gray-200 p-3">
                <Image alt="" src={courseImg} className=" h-16 w-16 " />
                <div className=" ">
                  <p className=" max-w-max break-words font-bold text-gray-900">
                    Entendendo TypeScript
                  </p>
                  <p className=" text-xs text-gray-500">Leonardo Leitão</p>
                  <span className="font-bold text-gray-900">R$25.90</span>
                </div>
              </li>
              <li className=" flex space-x-2 border-b border-gray-200 p-3">
                <Image alt="" src={courseImg} className=" h-16 w-16 " />
                <div className=" ">
                  <p className=" max-w-max break-words font-bold text-gray-900">
                    Entendendo TypeScript
                  </p>
                  <p className=" text-xs text-gray-500">Leonardo Leitão</p>
                  <span className="font-bold text-gray-900">R$25.90</span>
                </div>
              </li>
              <li className=" flex space-x-2 border-b border-gray-200 p-3">
                <Image alt="" src={courseImg} className=" h-16 w-16 " />
                <div className=" ">
                  <p className=" max-w-max break-words font-bold text-gray-900">
                    Entendendo TypeScript
                  </p>
                  <p className=" text-xs text-gray-500">Leonardo Leitão</p>
                  <span className="font-bold text-gray-900">R$25.90</span>
                </div>
              </li>
              <li className=" flex space-x-2 border-b border-gray-200 p-3">
                <Image alt="" src={courseImg} className=" h-16 w-16 " />
                <div className=" ">
                  <p className=" max-w-max break-words font-bold text-gray-900">
                    Entendendo TypeScript
                  </p>
                  <p className=" text-xs text-gray-500">Leonardo Leitão</p>
                  <span className="font-bold text-gray-900">R$25.90</span>
                </div>
              </li>
              {/* <span className=" my-auto self-center p-3"> */}
              {/* Nenhum curso encontrado. */}
              {/* </span> */}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

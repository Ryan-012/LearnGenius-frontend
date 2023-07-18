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
export default function SearchBar() {
  const [value, setValue] = useState<null | string>(null)
  useEffect(() => {
    console.log(value?.length)
  }, [value])
  return (
    <>
      <div className="  p-input-icon-left w-1/5 min-w-[250px] ">
        <i className="pi pi-search cursor-not-allowed" />
        <InputText
          onChange={(e) => setValue(e.target.value)}
          placeholder="O que você quer aprender?"
          className="w-full p-2"
        />
      </div>
      {/* <div className=" rounded-m p-3  text-center shadow-md transition duration-200">
        {value ? (
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem className="  space-x-1 hover:bg-yellow-300 ">
                  <Image
                    src={courseImg}
                    alt=""
                    className="h-10 w-10 flex-none bg-yellow-400"
                  />
                  <div className="flex flex-col text-start">
                    <span className=" font-bold">Calendar</span>
                    <span className=" text-gray-500">Leonardo Leitão</span>
                  </div>
                </CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>Profile</CommandItem>
                <CommandItem>Billing</CommandItem>
                <CommandItem>Settings</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        ) : (
          <span className="text-center text-gray-500">
            Nenhum curso encontrado.
          </span>
        )}
      </div> */}
    </>
  )
}

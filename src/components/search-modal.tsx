import { useContext } from 'react'
import { Input } from './ui/input'
import { ModalContext } from '@/contexts/modal'
import Image from 'next/image'
import courseImg from '@/assets/tsImg.png'

export default function SearchModal() {
  const { modalState, closeModal } = useContext(ModalContext)
  return (
    <div className="fixed inset-0  z-50  flex h-full  w-full items-center justify-center backdrop-blur ">
      <div
        className={` fixed grid max-h-[400px] min-h-[250px] w-[500px] grid-rows-[min-content_1fr] shadow shadow-gray-400 max-sm:w-[400px] ${
          modalState
            ? 'animate-in fade-in-0 zoom-in-95  slide-in-from-top-[48%] duration-300'
            : 'slide-out-from-top-[48%] animate-out fade-out-0 zoom-out-95 duration-300'
        }      rounded border  border-gray-600 bg-gray-900 duration-200`}
      >
        <div className=" flex w-full  items-center px-3 text-gray-50">
          <i className="pi pi-search cursor-not-allowed " />
          <Input
            placeholder="Digite um curso ou procure..."
            className="border-none bg-transparent"
          />
          <i
            className="pi pi-times cursor-pointer"
            onClick={() => closeModal()}
          ></i>
        </div>

        <ul className=" flex max-h-max w-full cursor-pointer flex-col  space-y-1 overflow-y-auto  border-t border-gray-600  ">
          <li className=" grid  w-full grid-cols-[64px_max-content] space-x-2 border-b border-gray-600  p-3 hover:bg-gray-800">
            <Image alt="" src={courseImg} className=" h-16 w-16 " />
            <div>
              <p className=" max-w-max break-words font-bold text-gray-50">
                Entendendo TypeScript
              </p>
              <p className=" text-xs text-gray-200">Leonardo Leitão</p>
              <span className="font-bold text-gray-50">R$25.90</span>
            </div>
          </li>

          <li className=" grid  w-full grid-cols-[64px_max-content] space-x-2 border-b border-gray-600  p-3 hover:bg-gray-800">
            <Image alt="" src={courseImg} className=" h-16 w-16 " />
            <div>
              <p className=" max-w-max break-words font-bold text-gray-50">
                Entendendo TypeScript
              </p>
              <p className=" text-xs text-gray-200">Leonardo Leitão</p>
              <span className="font-bold text-gray-50">R$25.90</span>
            </div>
          </li>
          <li className=" grid  w-full grid-cols-[64px_max-content] space-x-2 border-b border-gray-600  p-3 hover:bg-gray-800">
            <Image alt="" src={courseImg} className=" h-16 w-16 " />
            <div>
              <p className=" max-w-max break-words font-bold text-gray-50">
                Entendendo TypeScript
              </p>
              <p className=" text-xs text-gray-200">Leonardo Leitão</p>
              <span className="font-bold text-gray-50">R$25.90</span>
            </div>
          </li>
          <li className=" grid  w-full grid-cols-[64px_max-content] space-x-2 border-b border-gray-600  p-3 hover:bg-gray-800">
            <Image alt="" src={courseImg} className=" h-16 w-16 " />
            <div>
              <p className=" max-w-max break-words font-bold text-gray-50">
                Entendendo TypeScript
              </p>
              <p className=" text-xs text-gray-200">Leonardo Leitão</p>
              <span className="font-bold text-gray-50">R$25.90</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

'use client'
import { ReactNode, createContext, useState } from 'react'
export const ModalContext = createContext<{
  modalState: boolean
  openModal: () => void
  closeModal: () => void
}>({
  modalState: false,
  openModal: () => {},
  closeModal: () => {},
})

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [modalState, setModalState] = useState<boolean>(false)

  function closeModal() {
    setModalState(false)
  }

  function openModal() {
    setModalState(true)
  }

  return (
    <ModalContext.Provider value={{ modalState, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

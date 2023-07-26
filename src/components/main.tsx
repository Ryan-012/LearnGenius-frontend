import { ReactNode } from 'react'

export default function Main({ children }: { children: ReactNode }) {
  return <main className="  flex flex-col bg-[#09090a] px-5">{children}</main>
}

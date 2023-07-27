import { ReactNode } from 'react'

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className="  flex flex-col space-y-14 bg-[#09090a] ">{children}</main>
  )
}

import { ReactNode } from 'react'

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className="  flex flex-col space-y-14 overflow-hidden bg-gray-950">
      {children}
    </main>
  )
}

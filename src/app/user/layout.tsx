import { CategoryLink } from '@/components/CategoryLink'
import { ArrowLeft } from 'lucide-react'
import { ReactNode } from 'react'

export const metadata = {
  title: 'TechUp',
  description: '',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="grid min-h-screen p-10  font-sans text-gray-50  lg:grid-cols-2">
      {children}
      <div className=" grid items-center font-alt text-gray-50  max-lg:hidden">
        <div className="h-3/5 space-y-5  p-3">
          <h2 className=" font-alt  text-4xl text-rose-500">
            Tech
            <span className=" text-gray-50 transition hover:translate-y-6">
              Up
            </span>
          </h2>

          <p className="text-4xl">
            A plataforma definitiva para cursos de tecnologia.
          </p>
          <CategoryLink.Root href="/" className="space-x-2">
            <CategoryLink.Icon icon={ArrowLeft} />
            <CategoryLink.Content text="Retornar ao login" />
          </CategoryLink.Root>
        </div>
      </div>
    </main>
  )
}

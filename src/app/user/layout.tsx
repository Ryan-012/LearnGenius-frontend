'use client'
// import { CategoryLink } from '@/components/CategoryLink'
// import { UserPlus } from 'lucide-react'
import { ReactNode, useEffect } from 'react'
import AOS from 'aos'

export const metadata = {
  title: 'TechUp',
  description: '',
}

export default function SignLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <main className="grid min-h-screen gap-2    p-10  font-sans text-gray-50  lg:grid-cols-2">
      {children}
      <div
        // data-aos="fade-left"
        className=" mb-14 grid items-center space-y-5 font-alt text-gray-50 max-lg:-order-1 "
      >
        <div className="h-3/5 space-y-7  p-3">
          <h2 className=" font-alt  text-4xl ">
            Tech
            <span className=" text-rose-500 transition hover:translate-y-6">
              Up
            </span>
          </h2>

          <p className="text-3xl text-rose-500 lg:text-4xl ">
            Prepare-se para dominar a tecnologia e impulsionar sua carreira na
            área de TI.
          </p>
          <p className="text-lg text-gray-200">
            {' '}
            Cursos de alta qualidade • Instrutores experientes • Aprendizado
            interativo
          </p>
          {/* <CategoryLink.Root href="/user/sign-up">
            <CategoryLink.Icon icon={UserPlus} />
            <CategoryLink.Content text="Ainda não tem uma conta? Crie agora!" />
          </CategoryLink.Root> */}
        </div>
      </div>
      <span
        // data-aos="fade-left"
        data-aos-duration="2000"
        className="absolute bottom-36 right-5 h-[3px] w-[100px] bg-rose-500 transition-all   duration-300  hover:bg-gray-50"
      ></span>
    </main>
  )
}

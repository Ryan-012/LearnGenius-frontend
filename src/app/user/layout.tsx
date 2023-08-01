import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'
import { ReactNode } from 'react'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})
export const metadata = {
  title: 'TechUp',
  description: '',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans`}>
        <main className="grid min-h-screen w-full  font-sans text-gray-50  lg:grid-cols-2">
          <div className="  relative grid   bg-gray-950  font-alt text-rose-500  max-lg:hidden   ">
            <h2 className="p-5 text-2xl">
              Tech
              <span className=" text-gray-50 transition hover:translate-y-6">
                Up
              </span>
            </h2>
            <div className=" ml-8  space-y-4">
              <p className="text-3xl">
                Construa seu futuro com o{' '}
                <span className=" text-gray-50">poder</span> do conhecimento!
              </p>
            </div>
          </div>
          {children}
        </main>
      </body>
    </html>
  )
}

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
        <main className="grid min-h-screen w-full font-sans text-gray-50 lg:grid-cols-2">
          {children}

          <div className="  hidden items-center bg-gray-950 lg:flex ">
            <div className="ml-8 space-y-1">
              <p className=" text-7xl">
                Tech
                <span className=" text-rose-500 transition hover:translate-y-6">
                  Up
                </span>
              </p>
              <span className="text-3xl">
                Construa seu futuro com o{' '}
                <span className=" text-rose-500">poder</span> do conhecimento!
              </span>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}

import { Roboto_Flex as Roboto, Work_Sans as Work } from 'next/font/google'
import { ReactNode } from 'react'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const work = Work({ subsets: ['latin'], variable: '--font-work' })
export const metadata = {
  title: 'Learn Genius',
  description: '',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${work.variable} font-sans`}>
        <main className="grid min-h-screen w-full font-sans text-gray-50 lg:grid-cols-2">
          {children}

          <div className="  hidden items-center bg-gradient-to-r  from-gray-700 via-gray-900 to-black lg:flex ">
            <div className="ml-8 space-y-1">
              <p className=" text-7xl">
                Estuda
                <span className=" text-indigo-700 transition hover:translate-y-6">
                  +
                </span>
              </p>
              <span className="text-3xl">
                Construa seu futuro com o{' '}
                <span className=" text-indigo-700">poder</span> do conhecimento!
              </span>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}

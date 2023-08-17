import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'
import ModalProvider from '@/contexts/modal'

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
    <html lang="en" className=" scroll-smooth">
      <body
        className={`${roboto.variable} bg-gray-950 ${baiJamjuree.variable} relative min-h-screen  font-sans`}
      >
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  )
}

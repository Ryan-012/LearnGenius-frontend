import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Work_Sans as Work,
  Inter_Tight as Inter,
} from 'next/font/google'
import ModalProvider from '@/contexts/modal'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const work = Work({ subsets: ['latin'], variable: '--font-work' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
export const metadata = {
  title: 'Estuda+',
  description: '',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${work.variable} ${inter.variable} relative min-h-screen font-sans  text-gray-900`}
      >
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  )
}

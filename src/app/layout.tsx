import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex as Roboto, Work_Sans as Work } from 'next/font/google'
import ModalProvider from '@/contexts/modal'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const work = Work({ subsets: ['latin'], variable: '--font-work' })
export const metadata = {
  title: 'Estuda+',
  description: '',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${work.variable}  font-sans`}>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  )
}

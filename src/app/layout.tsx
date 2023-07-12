import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex as Roboto, Work_Sans as Work } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const work = Work({ subsets: ['latin'], variable: '--font-work' })
export const metadata = {
  title: 'Learn Genius',
  description: '',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${work.variable}`}>{children}</body>
    </html>
  )
}

import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Learn Genius',
  description: '',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

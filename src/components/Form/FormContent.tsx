import { ReactNode } from 'react'

interface FormContentProps {
  children: ReactNode
}

export default function FormContent({ children }: FormContentProps) {
  return <div className="">{children}</div>
}

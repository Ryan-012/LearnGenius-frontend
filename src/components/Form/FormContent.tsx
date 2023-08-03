import { ReactNode } from 'react'

interface FormContentProps {
  children: ReactNode
}

export default function FormContent({ children }: FormContentProps) {
  return <div className=" space-y-3 p-3">{children}</div>
}

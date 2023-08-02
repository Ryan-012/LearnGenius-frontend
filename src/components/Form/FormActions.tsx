import { ReactNode } from 'react'
interface FormActionsProps {
  children: ReactNode
}
export default function FormActions({ children }: FormActionsProps) {
  return <div>{children}</div>
}

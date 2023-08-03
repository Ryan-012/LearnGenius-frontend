import { ReactNode } from 'react'
interface FormActionsProps {
  children: ReactNode
}
export default function FormActions({ children }: FormActionsProps) {
  return <div className=" flex justify-center space-y-3 p-3">{children}</div>
}

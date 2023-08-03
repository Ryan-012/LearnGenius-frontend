import { FormHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
interface FormRootProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
}
export default function FormRoot({ children, ...rest }: FormRootProps) {
  return (
    <form
      {...rest}
      className={twMerge(' grid grid-rows-3 bg-gray-900', rest.className)}
    >
      {children}
    </form>
  )
}

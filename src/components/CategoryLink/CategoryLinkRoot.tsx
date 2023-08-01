import Link from 'next/link'
import { ReactNode, LinkHTMLAttributes } from 'react'

interface CategoryLinkRootProps extends LinkHTMLAttributes<HTMLLinkElement> {
  children: ReactNode
  href: string
  key: number
}
export default function CategoryLinkRoot({
  children,
  href,
  key,
  ...rest
}: CategoryLinkRootProps) {
  return (
    <Link
      {...rest}
      key={key}
      href={href}
      className=" flex   text-base text-gray-200 hover:text-rose-500"
    >
      {children}
    </Link>
  )
}

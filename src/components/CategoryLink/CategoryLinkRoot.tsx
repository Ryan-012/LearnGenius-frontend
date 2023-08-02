import Link from 'next/link'
import { ReactNode, AnchorHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface CategoryLinkRootProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  href: string
}
export default function CategoryLinkRoot({
  children,
  href,

  ...rest
}: CategoryLinkRootProps) {
  return (
    <Link
      {...rest}
      href={href}
      className={twMerge(
        ' flex space-x-2 text-base  text-gray-200 duration-200 hover:text-rose-500',
        rest.className,
      )}
    >
      {children}
    </Link>
  )
}

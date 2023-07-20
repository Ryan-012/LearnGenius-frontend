import React from 'react'
import Link from 'next/link'
export default function CategoryLink({
  href,
  text,
  key,
}: {
  href: string
  text: string
  key: number
}) {
  return (
    <Link href={href} className="hover:text-indigo-700">
      {text}
    </Link>
  )
}

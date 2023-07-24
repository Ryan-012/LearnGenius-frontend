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
    <Link href={href} className="  text-gray-200 hover:text-[#FF4365]">
      {text}
    </Link>
  )
}

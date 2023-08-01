import { ElementType } from 'react'

interface IconProps {
  icon: ElementType
}
export default function CategoryLinkIcon({ icon: Icon }: IconProps) {
  return <Icon className="mr-2" />
}

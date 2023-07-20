// import { Link } from 'lucide-react'
// import { Button } from './ui/button'
import { getUser } from '@/lib/auth'
export default function Profile() {
  const { name } = getUser()

  return <p>{name}</p>
}

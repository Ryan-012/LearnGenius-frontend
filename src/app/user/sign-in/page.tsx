import { Form } from '@/components/Form/index'
import { Input } from '@/components/ui/input'
export default function SignIn() {
  return (
    <Form.Root className="h-full ">
      <Form.Content>
        <Input className="w-3/4 border-transparent bg-gray-800" />
      </Form.Content>
    </Form.Root>
  )
}

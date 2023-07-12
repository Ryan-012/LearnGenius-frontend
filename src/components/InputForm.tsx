type InputProps = {
  type: string
  placeholder: string
  defaultValue?: string
}
export default function InputForm(InputProps: InputProps) {
  return (
    <input
      type={InputProps.type}
      placeholder={InputProps.placeholder}
      defaultValue={InputProps.defaultValue}
      className="p-2 outline-none hover:bg-gray-50"
    />
  )
}

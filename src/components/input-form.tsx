type InputProps = {
  type: string
  placeholder: string
  defaultValue?: string
  name: string
}
export default function InputForm(InputProps: InputProps) {
  return (
    <input
      type={InputProps.type}
      name={InputProps.name}
      required={true}
      placeholder={InputProps.placeholder}
      defaultValue={InputProps.defaultValue}
      className="w-full rounded border p-2 outline-none transition duration-200 hover:border-rose-500 hover:shadow hover:shadow-rose-500  "
    />
  )
}

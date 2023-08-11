interface FormTitleProps {
  text: string
}
export default function FormTitle({ text }: FormTitleProps) {
  return <h2 className=" mt-5 p-3 text-center font-alt text-3xl">{text}</h2>
}

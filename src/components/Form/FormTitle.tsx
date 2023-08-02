interface FormTitleProps {
  text: string
}
export default function FormTitle({ text }: FormTitleProps) {
  return <h2 className="">{text}</h2>
}

interface CategoryLinkContentProps {
  text: string
}
export default function CategoryLinkContent({
  text,
}: CategoryLinkContentProps) {
  return <p className="text-base">{text}</p>
}

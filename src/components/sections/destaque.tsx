import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function DestaqueSection() {
  const [curr, setCurr] = useState(0)
  const slides = [
    'https://www.palpitedigital.com/y/5327/imagens-google-e1604596848141-599.webp',
    'https://www.palpitedigital.com/y/5327/imagens-google-e1604596848141-599.webp',
    'https://www.palpitedigital.com/y/5327/imagens-google-e1604596848141-599.webp',
  ]

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    const slideInterval = setInterval(next, 3000)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className="relative h-[700px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((img, index) => (
          <Image
            src={img}
            alt=""
            key={index}
            width={200}
            className="h-full w-full"
            height={200}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="rounded-full bg-white/80 p-1 text-gray-100 shadow hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="rounded-full bg-white/80 p-1 text-gray-100 shadow hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  )
}

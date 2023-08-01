import Link from 'next/link'
import { CategoryLink } from './CategoryLink/index'

const categories = [
  { href: '/user/topic/front-end', text: 'Front-End' },
  { href: '/user/topic/back-end', text: 'Back-End' },
  { href: '/user/topic/mobile', text: 'Mobile' },
  { href: '/user/topic/ui&design', text: 'UI & Design' },
  { href: '/user/topic/data-science', text: 'Data Science' },
  {
    href: '/user/topic/inteligencia-artificial',
    text: 'Inteligência Artificial',
  },
]

export default function Footer() {
  return (
    <footer className="mt-8  grid  w-full grid-cols-2 space-y-4 bg-gray-900 px-10 py-7 text-lg  text-white max-lg:grid-cols-1">
      <div className="grid h-[80%] space-y-2">
        <div>
          <Link href="/" className=" block font-alt text-2xl text-rose-500">
            <span className=" text-gray-50">Tech</span>Up
          </Link>
          <span className="text-base">
            © 2023 TechUp. Todos os direitos reservados.
          </span>
        </div>
        <div id="social_networks" className=" space-x-3 self-end">
          <Link
            href="https://github.com/Ryan-012"
            className="pi pi-github transition-all duration-300 hover:text-rose-500"
          />
          <Link
            href=""
            className="pi pi-instagram transition-all duration-300 hover:text-rose-500"
          />
          <Link
            href="https://www.linkedin.com/in/ryanaragao012/"
            className="pi pi-linkedin transition-all duration-300 hover:text-rose-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2  max-sm:grid-cols-2">
        <div className="flex flex-col space-y-2">
          <h2>Institucional</h2>
          <Link href="" className="text-base text-gray-200 hover:text-rose-500">
            Sobre nós
          </Link>
          <Link href="" className="text-base text-gray-200 hover:text-rose-500">
            Trabalhe conosco
          </Link>
          <Link href="" className="text-base text-gray-200 hover:text-rose-500">
            Política de privacidade
          </Link>
          <Link href="" className="text-base text-gray-200 hover:text-rose-500">
            Termos de uso
          </Link>
        </div>
        <div className="flex flex-col space-y-2 ">
          <h2>Cursos</h2>

          {categories.map((category, index) => {
            return (
              <CategoryLink.Root href={category.href} key={index}>
                <CategoryLink.Content text={category.text} />
              </CategoryLink.Root>
            )
          })}
        </div>
        <div className="flex flex-col space-y-2 ">
          <h2>Fale conosco</h2>
          <Link
            className="text-base text-gray-200 hover:text-rose-500"
            href="/contact"
          >
            Email e telefone
          </Link>
          <Link
            className="text-base text-gray-200 hover:text-rose-500"
            href="/"
          >
            Perguntas frequentes
          </Link>
        </div>
      </div>
    </footer>
  )
}

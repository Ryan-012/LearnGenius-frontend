import Image from 'next/image'
import cyborgImg from '@/assets/medium-shot-female-astronaut-wearing-spacesuit.jpg'
import { ChevronsDown } from 'lucide-react'

export default function CategoryHeader() {
  return (
    <section className=" h-[600px] px-5 text-gray-50">
      <div data-aos="fade-up" className=" h-[70%] w-full space-y-4 ">
        <h1 className="mt-32 text-center  font-alt text-8xl text-rose-500">
          Front-End
        </h1>
        <p className="text-center text-2xl text-gray-200">
          Explore as maravilhas da interface do usuário e crie experiências
          incríveis para os usuários.
        </p>
      </div>
      {/* <div className="m-auto  h-[85%] w-[50%] rounded-md  p-4">
        <Image
          src={cyborgImg}
          alt=""
          className=" mx-auto h-full w-full rounded-md shadow"
        />
         Image by <a href="https://pixabay.com/users/hansuan_fabregas-2902307/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8066835">HANSUAN FABREGAS</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8066835">Pixabay</a> 
      </div> */}
      <ChevronsDown className=" mx-auto h-10 w-10 animate-bounce text-rose-500" />
    </section>
  )
}

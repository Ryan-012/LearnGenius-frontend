import Image from 'next/image'
import courseImg from '@/assets/tsImg.png'
import Filters from '../filters'
import { api } from '@/lib/api'

export default async function SearchFiltersSection() {
  const response = await (await api.get('/courses/get-all-courses')).data

  return (
    <section className=" space-y-6 px-5  text-gray-50" id="search">
      <Filters courseLenght={response.length} />
      <div className="grid  grid-cols-1  p-3 text-gray-50">
        <ul className=" h-[1000px] space-y-3 overflow-y-auto p-3">
          {response.map((course, index) => {
            return (
              <li
                key={index}
                className="flex w-full space-x-4 rounded p-3 duration-300 hover:cursor-pointer hover:bg-gray-700"
              >
                <Image
                  src={courseImg}
                  alt=""
                  width={10}
                  height={10}
                  className="h-[150px] w-[250px] max-sm:h-16 max-sm:w-16"
                />
                <div className="space-y-1 text-gray-50">
                  <p className="break-words text-lg font-bold">
                    {course.title}
                  </p>
                  <p className="text-gray-200">{course.description}</p>
                  <p className="text-sm text-gray-400">{course.author.name}</p>
                  <p className="text-sm text-gray-400">
                    {course.level} -{' '}
                    {course.lessons.reduce(
                      (total, lesson) =>
                        total + Math.round((lesson.duration / 60) * 10) / 10,
                      0,
                    )}{' '}
                    horas - {course.numberOfLessons} aulas
                  </p>
                  <p className="font-bold">
                    {course.price === 0 ? 'Gratuito' : `R$ ${course.price}`}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

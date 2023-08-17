import { Card, CardHeader, CardContent, CardTitle } from '../ui/card'
export default function ExplorationSection() {
  return (
    <section
      data-aos="fade-up"
      className="  justify-center space-y-6 px-5 text-gray-50"
    >
      <h1 className="  text-center font-alt text-5xl text-rose-500 max-xl:text-3xl max-md:text-2xl">
        Explore o Futuro com Tecnologia
      </h1>

      <div className="grid grid-cols-3 gap-3 p-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <Card className="cursor-default space-y-6 border-none bg-transparent p-4 text-start text-gray-50 shadow-none  duration-300">
          <CardHeader className=" bg-transparent p-0 shadow-none">
            <div className=" h-0.5 w-[25px] bg-rose-500"></div>
            <CardTitle className="text-2xl max-md:text-xl">
              Tendência em Alta
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-base text-gray-200">
            Descubra por que o Front-End é uma das áreas mais promissoras da
            indústria de tecnologia. Aprenda a criar interfaces incríveis e
            funcionais para os aplicativos e sites mais modernos.
          </CardContent>
        </Card>
        <Card className="cursor-default space-y-6 border-none bg-transparent p-4 text-start text-gray-50 shadow-none  duration-300">
          <CardHeader className=" bg-transparent p-0 shadow-none">
            <div className=" h-0.5 w-[25px] bg-rose-500"></div>
            <CardTitle className="text-2xl max-md:text-xl">
              Impacto Visual
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-base text-gray-200">
            Explore como suas habilidades de Front-End podem revolucionar a
            maneira como as pessoas interagem com a tecnologia. Torne a
            experiência do usuário mais envolvente e atraente através de designs
            responsivos e intuitivos.
          </CardContent>
        </Card>
        <Card className="cursor-default space-y-6 border-none bg-transparent p-4 text-start text-gray-50 shadow-none  duration-300">
          <CardHeader className=" bg-transparent p-0 shadow-none">
            <div className=" h-0.5 w-[25px] bg-rose-500"></div>
            <CardTitle className="text-2xl max-md:text-xl">
              O Poder da Primeira Impressão
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-base text-gray-200">
            Saiba como o trabalho no Front-End é fundamental para causar uma
            ótima primeira impressão. Aprenda a criar layouts atraentes que
            cativam os usuários desde o primeiro momento, garantindo que eles
            continuem explorando seu conteúdo.
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

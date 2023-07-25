import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export default function Carousel() {
  return (
    <Slider
      // autoplay={true}
      className="mx-auto mt-10 h-[700px] w-[90%]   text-gray-50"
      dots={true}
      infinite={true}
      speed={500}
      autoplaySpeed={5000}
      slidesToShow={1}
      slidesToScroll={1}
    >
      <div className="">
        <h3>1</h3>
      </div>

      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
  )
}

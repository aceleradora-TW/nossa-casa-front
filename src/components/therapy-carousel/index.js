import TherapyCarouselComponent from './styled.js'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import { useState } from 'react'
import { useEffect } from 'react'

const TherapyCarousel = () => {
  const[slides, setSlides] = useState([])

  useEffect(() => {
    
  })
  return (
    <TherapyCarouselComponent>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 30
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <section className="therapys">
          <div className="">
            <SwiperSlide>
              <div className="therapy">
                <img />
                <p className="date">22 Oct 2018</p>
                <h3 className="title">
                  Impact Of Extrinsic Motivation On Intrinsic Motivation
                </h3>
                <button className="button">Ver Mais</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="evento">
                <img />
                <p className="date">22 Oct 2018</p>
                <h3 className="title">
                  Impact Of Extrinsic Motivation On Intrinsic Motivation
                </h3>
                <button className="button">Ver Mais</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="evento">
                <img/>
                <p className="date">22 Oct 2018</p>
                <h3 className="title">
                  Impact Of Extrinsic Motivation On Intrinsic Motivation
                </h3>
                <button className="button">Ver Mais</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="evento">
                <img/>
                <p className="date">22 Oct 2018</p>
                <h3 className="title">
                  Impact Of Extrinsic Motivation On Intrinsic Motivation
                </h3>
                <button className="button">Ver Mais</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="evento">
                <img/>
                <p className="date">22 Oct 2018</p>
                <h3 className="title">
                  Impact Of Extrinsic Motivation On Intrinsic Motivation
                </h3>
                <button className="button">Ver Mais</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="evento">
                <img />
                <p className="date">22 Oct 2018</p>
                <h3 className="title">
                  Impact Of Extrinsic Motivation On Intrinsic Motivation
                </h3>
                <button className="button">Ver Mais</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="evento">
                <img/>
                <p className="date">22 Oct 2018</p>
                <h3 className="title">
                  Impact Of Extrinsic Motivation On Intrinsic Motivation
                </h3>
                <button className="button">Ver Mais</button>
              </div>
            </SwiperSlide>
          </div>
        </section>
      </Swiper>
    </TherapyCarouselComponent>
  )
}
export default TherapyCarousel

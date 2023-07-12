
import foto from "../parceires/fot.png"
import EventsComponent from "./styled.js"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper"

const Events = () => {
  return (
    <EventsComponent
      style={{
        background: "#FFFFFF",
  

      }}
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, ]}
        className="mySwiper"
      >
        <section className="events">
          <div className="swiper-slide">
            <SwiperSlide>
              <div className="evento">
                <img  src={foto} />
                <p className="date">22 Oct 2018</p>
                <h3 className="title">
                  Impact Of Extrinsic Motivation On Intrinsic Motivation
                </h3>
                <button className="button">Ver Mais</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="evento">
                <img src={foto} />
                <p className="date">22 Oct 2018</p>
                <h3 className="title">
                  Impact Of Extrinsic Motivation On Intrinsic Motivation
                </h3>
                <button className="button">Ver Mais</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="evento">
                <img src={foto} />
                <p className="date">22 Oct 2018</p>
                <h3 className="title">
                  Impact Of Extrinsic Motivation On Intrinsic Motivation
                </h3>
                <button className="button">Ver Mais</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="evento">
                <img src={foto} />
                <p className="date">22 Oct 2018</p>
                <h3 className="title">
                  Impact Of Extrinsic Motivation On Intrinsic Motivation
                </h3>
                <button className="button">Ver Mais</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="evento">
                <img src={foto} />
                <p className="date">22 Oct 2018</p>
                <h3 className="title">
                  Impact Of Extrinsic Motivation On Intrinsic Motivation
                </h3>
                <button className="button">Ver Mais</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="evento">
                <img src={foto} />
                <p className="date">22 Oct 2018</p>
                <h3 className="title">
                  Impact Of Extrinsic Motivation On Intrinsic Motivation
                </h3>
                <button className="button">Ver Mais</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="evento">
                <img src={foto} />
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
    </EventsComponent>
  )
}
export default Events

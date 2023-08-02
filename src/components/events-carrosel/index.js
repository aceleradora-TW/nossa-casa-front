import EventsComponent from './styled.js'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { cms } from '../../service/client'
import env from 'react-dotenv'

const Events = () => {
  const [attributes, setAttributes] = useState([])
  const urlCms = env.URL_CMS

  useEffect(() => {
    cms.get('api/events/?populate=foto_divulgacao').then((response) => {
      const { data } = response.data
      const events = data.map((data) => {
        return data.attributes
      })
      setAttributes(events)
    })
  }, [])
  return (
    <EventsComponent
      style={{
        background: '#FFFFFF'
      }}
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={-110}
        navigation={true}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 1
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 2
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 3
          }
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <section className="events">
          <div className="swiper-slide">
            <ul>
              {attributes.map((events) =>
                <li key={events.nome}>
                  <SwiperSlide key={events.nome}>
                    <div className="evento">
                      <div>
                        <img key={urlCms + events.foto_divulgacao.data.attributes.url} src={urlCms + events.foto_divulgacao.data.attributes.url} />
                      </div>
                      <p className="date">{events.nome}</p>
                      <h3 className="title">{events.descricao}</h3>
                      <button className="button">Ver Mais</button>
                    </div>
                  </SwiperSlide>
                </li>
              )}
            </ul>
          </div>
        </section>
      </Swiper>
    </EventsComponent >
  )
}
export default Events

import EventsComponent from './styled.js'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { cms } from '../../service/client'
import env from 'react-dotenv'
import ModalEvents from '../events-modal/index.js'

const Events = () => {
  const [attributesEvents, setAttributesEvents] = useState([])
  const urlCms = env.URL_CMS
  useEffect(() => {
    cms.get('api/events/?populate=foto_divulgacao').then((response) => {
      const { data } = response.data
      const events = data.map((data) => {
        if (data) {
          return {
            nome: data.attributes.nome,
            date: new Date(data.attributes.data),
            imagem_url: data.attributes.foto_divulgacao.data.attributes.url,
          }
        }
      })
      const eventsOrdered = events.sort((a, b) => a.date - b.date)
      setAttributesEvents(eventsOrdered)
    })
  }, [])
  return (
    <EventsComponent style={{ background: '#FFFFFF' }}>
      <div className="carrossel">
        <h1>EVENTOS</h1>
        <p>
          A Nossa Casa realiza diversos eventos culturais que vão de festivais,
          rodas de conversa, apresentações musicais, exposições de arte visual,
          entre outros. Confira aqui nossa programação e participe!
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={-110}
        navigation={true}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 3,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <section>
          <div className="swiper-slide">
            <ul>
              {attributesEvents.map((events, key) => (
                <li key={key}>
                  <SwiperSlide>
                    <div>
                      <div>
                        <img
                          className="img-foto"
                          src={urlCms + events.imagem_url}
                        />
                      </div>
                      <div>
                        <p className="date">
                          {events.date.toLocaleDateString('pt-BR')}
                        </p>
                        <h3 className="title">{events.nome}</h3>
                      </div>
                      <ModalEvents />
                    </div>
                  </SwiperSlide>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Swiper>
    </EventsComponent>
  )
}
export default Events

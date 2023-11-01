import EventsComponent from './styled.js'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { cmsApi } from '../../service/client'
import { NavLink } from 'react-router-dom'

const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(async () => {
    const events = await cmsApi.getEventsOrderedByDate()
    setEvents(events)
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
              {events.map((event, index) => (
                <li key={index}>
                  <SwiperSlide>
                    <div>
                      <div>
                        <img className="img-foto" src={event.imageUrl} />
                      </div>
                      <div>
                        <p className="date">
                          {event.date.toLocaleDateString('pt-BR', {
                            timeZone: 'America/Sao_Paulo',
                          })}
                        </p>
                        <h3 className="title">{event.name}</h3>
                      </div>
                      <div className="styled-button">
                        <NavLink to={`${event.id}`}>Saiba Mais</NavLink>
                      </div>
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

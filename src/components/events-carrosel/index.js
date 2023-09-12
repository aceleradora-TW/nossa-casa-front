import EventsComponent from './styled.js'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { cms } from '../../service/client'
import env from 'react-dotenv'
import { NavLink } from 'react-router-dom'

const Events = () => {
  const [attributesEvents, setAttributesEvents] = useState([])
  const urlCms = env.URL_CMS
  useEffect(() => {
    cms.get('api/events/?populate=foto_divulgacao').then((response) => {
      const { data } = response.data
      const events = data.map((data) => {
        if (data) {
          return {
            name: data.attributes.nome,
            date: new Date(data.attributes.data),
            image_url: data.attributes.foto_divulgacao.data.attributes.url,
            time_start: data.attributes.horario_inicio,
            time_end: data.attributes.horario_fim,
            type: data.attributes.tipo,
            location: data.attributes.local,
            price: data.attributes.preco,
            description: data.attributes.descricao
          }
        }
        return null
      })
      console.log(data)
      console.log(events)
      const eventsOrdered = events.filter(event => event !== null).sort((a, b) => a.date - b.date)
      setAttributesEvents(eventsOrdered)
    })
  }, [])
  return (

    <EventsComponent style={{ background: '#FFFFFF' }}>
      <div className='carrossel'>
        <h1>EVENTOS</h1>
        <p>A  Nossa Casa realiza diversos eventos culturais que vão de festivais, rodas de conversa, apresentações musicais, exposições de arte visual, entre outros.
          Confira aqui nossa programação e participe!.</p>
      </div>
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
        <section>
          <div className="swiper-slide">
            <ul>
              {attributesEvents.map((events, key) =>
                <li key={key}>
                  <SwiperSlide>
                    <div>
                      <div>
                        <img className="img-foto" src={urlCms + events.image_url} />
                      </div>
                      <div>
                        <p className="date">{events.date.toLocaleDateString('pt-BR')}</p>
                        <h3 className="title">{events.name}</h3>
                      </div>
                      <div className='styled-button'>
                      <NavLink to={'/events-details'} activeClassName="active" events={events} >Saiba Mais</NavLink>
                      </div>
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

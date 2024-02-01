import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper/modules'
import { cms } from '../../client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CssCarrosselGlobal } from '../global-styles'
import EventsComponent from './styled.js'

const Events = () => {
  const [attributesEvents, setAttributesEvents] = useState([])
  useEffect(() => {
    cms.get('api/events/?populate=foto_divulgacao').then((response) => {
      const { data } = response.data
      if (data) {
        const events = data.map((data) => {
          return {
            id: data.id,
            name: data.attributes.nome,
            date: new Date(`${data.attributes.data_inicio}T00:00:00-0300`),
            image_url: data.attributes.foto_divulgacao.data.attributes.url,
            time_start: data.attributes.horario_inicio,
            time_end: data.attributes.horario_fim,
            type: data.attributes.tipo,
            location: data.attributes.local,
            price: data.attributes.preco,
            description: data.attributes.descricao,
          }
        })
        const eventsOrdered = events.filter(event => event !== null).sort((a, b) => a.date - b.date)
        setAttributesEvents(eventsOrdered)
      }
    })
  }, [])
  
  return (

    <CssCarrosselGlobal style={{ background: '#FAFAFA' }}>
      <div className='carrossel'>
        <h1>Eventos</h1>
        <p>A  Nossa Casa realiza diversos eventos culturais que vão de festivais, rodas de conversa, apresentações musicais, exposições de arte visual, entre outros.
          Confira aqui nossa programação e participe!</p>
      </div>
      <Swiper
        slidesPerView={3}
        navigation={true}
        pagination={{clickable: true}}
        breakpoints={{
          320: {slidesPerView: 1, spaceBetween:1},
          660: {slidesPerView: 2},
          1280: {slidesPerView: 3, spaceBetween:1}
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <section>
          <div className="swiper-slide">
            <ul>
              {attributesEvents.map((events, index) =>
                <li key={index}>
                  <SwiperSlide>
                    <div>
                      <div>
                        <img className="img" src={events.image_url} />
                      </div>
                      <div>
                        <p className="date">{events.date.toLocaleDateString('pt-BR', { Timezone: 'UTC' })}</p>
                        <h3 className="title">{events.name}</h3>
                      </div>
                      <EventsComponent>
                      <div className='styled-button'>
                        <NavLink className="button-writing" to={`${events.id}`} >Ver mais</NavLink>
                      </div>
                      </ EventsComponent>
                    </div>
                  </SwiperSlide>
                </li>
              )}
            </ul>
          </div>
        </section>
      </Swiper>
    </CssCarrosselGlobal>
  )
}
export default Events
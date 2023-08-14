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
  const [attributes, setAttributes] = useState([])
  const urlCms = env.URL_CMS
  useEffect(() => {
    cms.get('api/events/?populate=foto_divulgacao').then((response) => {
      const { data } = response.data
      const events = data.map((data) => {
        const today = new Date(data.attributes.data)
        return {
          nome: data.attributes.nome,
          date: today.toLocaleDateString('pt-BR'),
          foto: data.attributes.foto_divulgacao.data.attributes.url
        }
      })
      const formatDate = events.date.sort((a, b) => b.getTime() - a.getTime())
      console.log(formatDate)
      setAttributes(events)
    })
  }, [])
  return (

    <EventsComponent style={{ background: '#FFFFFF' }}>
      <div className='carrossel'>
        <h1>EVENTOS</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been thes standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
              {attributes.map((events, key) =>
                <li key={key}>
                  <SwiperSlide>
                    <div>
                      <div>
                        <img className="img-foto" src={urlCms + events.foto} />
                      </div>
                      <div>
                        <p className="date">{events.date}</p>
                        <h3 className="title">{events.nome}</h3>
                      </div>
                      <ModalEvents />
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

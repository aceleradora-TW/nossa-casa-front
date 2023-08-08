import EventsComponent from './styled.js'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { cms } from '../../service/client'
import env from 'react-dotenv'
// import ModalButton from '../teste/index.js'
import ModalEvents from '../events-modal/index.js'

// const Modal = ({ children, opened = false, setOpened = () => { } }) => {
//   if (!opened) {
//     return null
//   }
//   return (
//     <div className='container'>
//       <div className='modal'>
//         <div>
//           <button onClick={() => setOpened(opened => !opened)} className='exit'>
//             X
//           </button>
//         </div>
//         <div>{children}</div>
//       </div>
//     </div>
//   )
// }

const Events = () => {
  // const [opened, setOpened] = useState(false)
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
        <section>
          <div className="swiper-slide">
            <ul>
              {attributes.map((events, key) =>
                <li key={key}>
                  <SwiperSlide>
                    <div>
                      <div>
                        <img className="img-foto" src={urlCms + events.foto_divulgacao.data.attributes.url} />
                      </div>
                      <div>
                        <p className="date">{events.data}</p>
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

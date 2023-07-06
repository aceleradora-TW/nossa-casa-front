import foto from '../parceires/fot.png'
import EventsComponent from './styled.js'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
const linkParceire = process.env.REACT_APP_LINK_PARCEIRO

const Events = () => {
  return (
    <EventsComponent style={{
      background: '#F5BC4A'
    }}>
      <h2>Parceires</h2>
      <p>
        A Nossa Casa é uma Associação sem fins lucrativos, composta por profissionais, artistas e ativistas do Município de Guarulhos.
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10
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
        <section className='events'>
          <div className="swiper-slide">
            <SwiperSlide>
            <div className='evento'>
            <img src={foto} />
            <p>22 Oct 2018</p>
            <h3>Impact Of Extrinsic Motivation On Intrinsic Motivation</h3>
            <button>VER MAIS</button>
          </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='evento'>
            <img src={foto} />
            <p>22 Oct 2018</p>
            <h3>Impact Of Extrinsic Motivation On Intrinsic Motivation</h3>
            <button>VER MAIS</button>
          </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='evento'>
            <img src={foto} />
            <p>22 Oct 2018</p>
            <h3>Impact Of Extrinsic Motivation On Intrinsic Motivation</h3>
            <button>VER MAIS</button>
          </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='evento'>
            <img src={foto} />
            <p>22 Oct 2018</p>
            <h3>Impact Of Extrinsic Motivation On Intrinsic Motivation</h3>
            <button>VER MAIS</button>
          </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='evento'>
            <img src={foto} />
            <p>22 Oct 2018</p>
            <h3>Impact Of Extrinsic Motivation On Intrinsic Motivation</h3>
            <button>VER MAIS</button>
          </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='evento'>
            <img src={foto} />
            <p>22 Oct 2018</p>
            <h3>Impact Of Extrinsic Motivation On Intrinsic Motivation</h3>
            <button>VER MAIS</button>
          </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='evento'>
            <img src={foto} />
            <p>22 Oct 2018</p>
            <h3>Impact Of Extrinsic Motivation On Intrinsic Motivation</h3>
            <button>VER MAIS</button>
          </div>
            </SwiperSlide>
          </div>
        </section>
      </Swiper>
      <div className='styled-button'>
        <div className='button-parceire'>
          <a target='_blank' href={linkParceire} rel="noreferrer">
            Ser parceire
          </a>
        </div>
      </div>
    </EventsComponent >
  )
}
export default Events

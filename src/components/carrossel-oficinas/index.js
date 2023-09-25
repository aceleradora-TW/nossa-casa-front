import CssCarrosselGlobal from '../css-carrossel/styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useState, useEffect } from 'react'
import env from 'react-dotenv'
import VerMais from './styled'
import { cms } from '../../service/client'
import { Link } from 'react-router-dom'

const WorkshopsCarrossel = () => {
  const [attributes, setAttributes] = useState([])
  const urlCms = env.URL_CMS

  useEffect(() => {
    cms
      .get('api/workshops/?populate=foto_divulgacao, parceires')
      .then((response) => {
        const { data } = response.data
        const workshops = data.map((data) => {
          if (data) {
            return {
              id: data.id,
              name: data.attributes.nome,
              image_url: data.attributes.foto_divulgacao.data[0].attributes.url,
            }
          }
          return null
        })
        
        const parceires = workshops.map((a) =>
          a.parceires?.data.map((b) => b.attributes.nome)
        )
        const workshopsSortedByName = workshops.sort((a, b) =>
          a.nome < b.nome ? -1 : 1
        )
        setAttributes(workshopsSortedByName, parceires)
      })
  }, [])

  return (
    <CssCarrosselGlobal style={{ background: '#F5BC4A' }}>
      <div className="carrossel">
        <h1>Oficinas</h1>
        <p>
          No eixo de Educação Popular, a Nossa Casa oferece uma série de
          Oficinas e Cursos livres, em diversas áreas como Autoconhecimento,
          Saúde, Artes, Cultura, entre outros. Confira nossas próximas oficinas
          e se inscreva!
        </p>
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
              {attributes.map((workshops, key) => (
                <li key={key}>
                  <SwiperSlide>
                    <div>
                      <div>
                      <img className="img" src={urlCms + workshops.image_url} />
                      </div>
                      <div>
                        <p className="title">{workshops.name}</p>
                      </div>
                      <VerMais>
                      <div className='styled-button'>
                        <Link className='escritaBotao' to={`${workshops.id}`} >Saiba Mais</Link>
                      </div>
                      </VerMais>
                    </div>
                  </SwiperSlide>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Swiper>
    </CssCarrosselGlobal>
  )
}

export default WorkshopsCarrossel


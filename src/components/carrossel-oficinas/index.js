import CssCarrosselGlobal from '../css-carrossel/styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useState, useEffect } from 'react'
import env from 'react-dotenv'
import { cms } from '../../service/client'
import { NavLink, useParams } from 'react-router-dom'

const WorkshopsCarrossel = () => {
  const [attributes, setAttributes] = useState([])
  const urlCms = env.URL_CMS
  const { id } = useParams()

  useEffect(() => {
    cms
      .get('api/workshops/?populate=foto_divulgacao, parceires, foto_oficina', `/workshops/${id}`)
      .then((response) => {
        const { data } = response.data
        const workshops = data.map((data) => {
          return data.attributes
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
                        {workshops.foto_divulgacao?.data?.map((foto, key) => (
                          <img
                            key={key}
                            className="img"
                            src={urlCms + foto.attributes?.url}
                          />
                        ))}
                      </div>
                      <div>
                        <p className="date">{workshops.data}</p>
                        <h3 className="title">{workshops.nome}</h3>
                      </div>
                      <div className='styled-button'>
                        <NavLink to={`/workshops/${workshops.nome}` } >Saiba Mais</NavLink>
                      </div>
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

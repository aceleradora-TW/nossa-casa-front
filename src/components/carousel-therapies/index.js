import { CssCarouselGlobal } from '../global-styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useState, useEffect } from 'react'

import { cms } from '../../client'
import SeeMore from './styled'
import { Link } from 'react-router-dom'

const CarouselTherapies = () => {
  const [attributes, setAttributes] = useState([])
  const urlCms = process.env.REACT_APP_URL_CMS

  useEffect(() => {
    cms.get('api/therapies/?populate=foto_divulgacao').then((response) => {
      const { data } = response.data
      const therapies = data.map((data) => {
        if (data) {
          return {
            id: data.id,
            name: data.attributes.nome,
            image_url: data.attributes.foto_divulgacao.data[0].attributes.url
          }
        }
        return data.attributes
      })
      const therapiesSortedByName = therapies.sort((a, b) =>
        a.nome < b.nome ? -1 : 1
      )
      setAttributes(therapiesSortedByName)
    })
  }, [])

  return (
    <CssCarouselGlobal style={{ background: '#F5BC4A' }}>
      <div className="carousel">
        <h1>Terapias</h1>
        <p>
          Ao longo da história, espaços de autocuidado e bem-estar foram
          associados às classes mais abastadas. Ainda hoje, a população negra,
          LGBTs, mulheres e moradores de periferias têm acesso limitado a esses
          locais, enfrentando rotinas maçantes e exclusão social. A Clínica
          Social da Nossa Casa visa democratizar o acesso a serviços como
          psicoterapia, massoterapia, yoga, reiki, entre outros. Com
          profissionais oferecendo preços acessíveis, busca proporcionar saúde e
          bem-estar para todes, promovendo qualidade de vida, autonomia e
          dignidade. Conheça mais sobre os serviços oferecidos e entre em
          contato.
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
        className="my-swiper"
      >
        <section>
          <div className="swiper-slide">
            <ul>
              {attributes.map((therapies, key) => (
                <li key={key}>
                  <SwiperSlide>
                    <div>
                      <div>
                        <img
                          className="img"
                          src={urlCms + therapies.image_url}
                        />
                      </div>
                      <div>
                        <h1 className="title">{therapies.name}</h1>
                      </div>
                      <SeeMore>
                        <div className="styled-button">
                          <Link className="button-writing" to={`${therapies.id}`}>
                            Ver mais
                          </Link>
                        </div>
                      </SeeMore>
                    </div>
                  </SwiperSlide>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Swiper>
    </CssCarouselGlobal>
  )
}
export default CarouselTherapies

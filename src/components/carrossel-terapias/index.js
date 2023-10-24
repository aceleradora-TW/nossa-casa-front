import CssCarrosselGlobal from '../css-carrossel/styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useState, useEffect } from 'react'
import env from 'react-dotenv'
import { cms } from '../../service/client'
import ModalTherapies from '../modal-terapias'

const TherapiesCarousel = () => {
  const [attributes, setAttributes] = useState([])
  const urlCms = env.URL_CMS

  useEffect(() => {
    cms.get('api/therapies/?populate=foto_divulgacao').then((response) => {
      const { data } = response.data
      const therapies = data.map((data) => {
        return data.attributes
      })
      const therapiesSortedByName = therapies.sort((a, b) =>
        a.nome < b.nome ? -1 : 1
      )
      setAttributes(therapiesSortedByName)
    })
  }, [])

  return (
    <CssCarrosselGlobal style={{ background: '#F5BC4A' }}>
      <div className="carrossel">
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
        className="mySwiper"
      >
        <section>
          <div className="swiper-slide">
            <ul>
              {attributes.map((therapies, key) => (
                <li key={key}>
                  <SwiperSlide>
                    <div>
                      <div>
                        {therapies.foto_divulgacao?.data?.map((foto, key) => (
                          <img
                            key={key}
                            className="img"
                            src={urlCms + foto.attributes?.url}
                          />
                        ))}
                      </div>
                      <div>
                        <p className="date">{therapies.data}</p>
                        <h3 className="title">{therapies.nome}</h3>
                      </div>
                      <ModalTherapies />
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
export default TherapiesCarousel

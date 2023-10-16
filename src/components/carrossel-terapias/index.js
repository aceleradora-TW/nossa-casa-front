import CssCarrosselGlobal from '../css-carrossel/styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useState, useEffect } from 'react'
import env from 'react-dotenv'
import { cms } from '../../service/client'
import VerMais from './styled'
import { Link } from 'react-router-dom'


const TherapiesCarrossel = () => {
  const [attributes, setAttributes] = useState([])
  const urlCms = env.URL_CMS

  useEffect(() => {
    cms.get('api/therapies/?populate=foto_divulgacao').then((response) => {
      const { data } = response.data
      const therapies = data.map((data) => {
        if (data) {
          return {
            id: data.id,
            name: data.attributes.nome,
            image_url: data.attributes.foto_divulgacao.data[0].attributes.url,
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
                      <VerMais>
                        <div className="styled-button">
                          <Link className="escritaBotao" to={`${therapies.id}`}>
                            Saiba Mais
                          </Link>
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
export default TherapiesCarrossel
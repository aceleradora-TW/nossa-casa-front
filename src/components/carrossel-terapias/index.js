import { CssCarrosselGlobal } from '../global-styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper/modules'
import { useState, useEffect } from 'react'
import { cms } from '../../client'
import VerMais from './styled'
import { Link } from 'react-router-dom'

const TherapiesCarrossel = () => {
  const [attributes, setAttributes] = useState([])

  useEffect(() => {
    cms.get('api/therapies/?populate=foto_divulgacao').then((response) => {
      const { data } = response.data
      const therapies = data.map((data) => {
        if (data) {
          return {
            id: data.id,
            date: new Date(data.attributes.data_inicio).toLocaleDateString(
              'pt-BR',
              { timeZone: 'UTC' }
            ),
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
    <CssCarrosselGlobal style={{ background: '#FAFAFA' }}>
      <div className="carrossel">
        <h1>Terapias</h1>
        <p>
          Entendendo a importância da Saúde Integrativa, a Nossa Casa fomenta e
          oferece serviços e produtos na área da saúde, com o objetivo de tornar
          a qualidade de vida acessível a todos. Assim, promovemos espaços e
          eventos dedicados à saúde mental, física e emocional, oferecendo
          atividades como massoterapia, rodas de conversa, reiki, yoga,
          acupuntura e outras práticas.
          <br />
          <br />
          Além disso, possuímos a Clínica Social na área de Psicologia, onde o
          atendimento psicoterapêutico é oferecido de maneira acessível,
          popular, crítica e humanizada.
        </p>
      </div>

      <Swiper
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 1 },
          660: { slidesPerView: 2 },
          1280: { slidesPerView: 3, spaceBetween: 1 }
        }}
        modules={[Navigation, Pagination]}
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
                        <img className="img" src={therapies.image_url} />
                      </div>
                      <div>
                        {console.log(therapies.date)}
                      { 
                      therapies.date === "01/01/1970" ? (
                        <p></p>                         
                        ) : (
                          <p className="date">
                          {therapies.date}
                        </p>
                        )}
                        <h3 className="title">{therapies.name}</h3>
                      </div>
                      <VerMais>
                        <div className="styled-button">
                          <Link
                            className="button-writing"
                            to={`${therapies.id}`}
                          >
                            Ver mais
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

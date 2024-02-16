import { CssCarrosselGlobal } from '../global-styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper/modules'
import { useState, useEffect } from 'react'

import { cms } from '../../client'
import ModalWorkshops from '../modal-oficinas'
import VerMais from './styled'
import { Link } from 'react-router-dom'

const WorkshopsCarrossel = () => {
  const [attributes, setAttributes] = useState([])
  const urlCms = process.env.REACT_APP_URL_CMS

  useEffect(() => {
    cms.get('api/workshops/?populate=foto_divulgacao').then((response) => {
      const { data } = response.data
      const workshops = data
        .filter((workshop) => workshop !== null && workshop !== undefined)
        .map((workshop) => ({
          id: workshop.id,
          name: workshop.attributes.nome,
          imageUrl: workshop.attributes.foto_divulgacao.data[0].attributes.url,
        }))

      const workshopsSortedByName = workshops.sort((a, b) =>
        a.nome < b.nome ? -1 : 1,
      )
      setAttributes(workshopsSortedByName)
    })
  }, [])

  return (
    <CssCarrosselGlobal style={{ background: '#FAFAFA' }}>
      <div className="carrossel">
        <h1>Oficinas</h1>
        <p>
          A Nossa Casa é reconhecida por sua ampla variedade de oficinas, que
          vão desde atividades de lambe-lambe, dança, ChatGPT, contação de
          histórias, caderno de artista e gastronomia vegana até o emocionante
          bike-teatro e o criativo Laboratório de Produção Cultural. Estamos
          totalmente comprometidos em articular e promover essas atividades,
          enriquecendo a comunidade e fortalecendo os laços de solidariedade e
          inclusão que nos definem. 
          <br/>
          <br/>
          Ao oferecer oficinas e workshops, a Nossa
          Casa também fomenta a Economia Solidária, tanto para educadores quanto
          para os participantes, que recebem capacitação, conhecimento e
          possibilidades de novos caminhos.
        </p>
      </div>

      <Swiper
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 1 },
          660: { slidesPerView: 2 },
          1280: { slidesPerView: 3, spaceBetween: 1 },
        }}
        modules={[Navigation, Pagination]}
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
                        <img className="img" src={workshops.imageUrl} />
                      </div>
                      <div>
                        <p className="date">{workshops.data}</p>
                        <h3 className="title">{workshops.name}</h3>
                      </div>
                      <VerMais>
                        <div className="styled-button">
                          <Link className="button-text" to={`${workshops.id}`}>
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
export default WorkshopsCarrossel

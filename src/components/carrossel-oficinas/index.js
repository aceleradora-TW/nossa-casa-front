import CssCarrosselGlobal from '../css-carrossel/styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useState, useEffect } from 'react'
import env from 'react-dotenv'
import { cms } from '../../service/client'
import ModalWorkshops from '../modal-oficinas'
import { descricaoOficina, titleOficina } from '../../constants/constants'

const WorkshopsCarrossel = () => {
  const [attributes, setAttributes] = useState([])
  const urlCms = env.URL_CMS

  useEffect(() => {
    cms.get('api/workshops/?populate=foto_divulgacao').then((response) => {
      const { data } = response.data
      const workshops = data.map((data) => {
        return data.attributes
      })
      const workshopsSortedByName = workshops.sort((a, b) => (a.nome < b.nome ? -1 : 1))
      setAttributes(workshopsSortedByName)
    })
  }, [])

  return (
    <CssCarrosselGlobal style={{ background: '#F5BC4A' }}>
      <div className='carrossel'>
        <h1>{titleOficina}</h1>
        <p>{descricaoOficina}</p>
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
                      <ModalWorkshops />
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

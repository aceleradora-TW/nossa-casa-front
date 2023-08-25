
import CssCarrosselGlobal from '../css-carrossel/styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useState, useEffect } from 'react'
import env from 'react-dotenv'
import { cms } from '../../service/client'
import ModalWorkshops from '../modal-oficinas'

const WorkshopsCarrossel = () => {
  const [attributes, setAttributes] = useState([])
  const urlCms = env.URL_CMS

  useEffect(() => {
    cms.get('api/workshops/?populate=foto_divulgacao, parceires').then((response) => {
      const { data } = response.data
      const workshops = data.map((data) => {
        return data.attributes
      })
      const parceires = workshops.map(a => a.parceires.data.map(b => b.attributes.nome))
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          accumsan accumsan elit vel ullamcorper. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Nullam eget
          ligula et libero volutpat tristique. Duis tincidunt dolor dolor, vel
          pulvinar tellus mattis id.
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
              {attributes.map((workshops, key, parceires) => (
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
                      <ModalWorkshops workshops={workshops}  parceires={parceires}/>
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

import { CssCarrosselGlobal } from '../global-styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useState, useEffect } from 'react'

import { cms } from '../../client'
import ModalWorkshops from '../modal-workshops'
import VerMais from './styled'
import { Link } from 'react-router-dom'

const CarouselWorkshop = () => {
  const [attributes, setAttributes] = useState([])
  const urlCms = process.env.REACT_APP_URL_CMS

  useEffect(() => {
    cms.get('api/workshops/?populate=foto_divulgacao').then((response) => {
      const { data } = response.data
      const workshops = data
        .filter(workshop => workshop !== null && workshop !== undefined)
        .map(workshop => ({
          id: workshop.id,
          name: workshop.attributes.nome,
          imageUrl: workshop.attributes.foto_divulgacao.data[0].attributes.url
        }))

      const workshopsSortedByName = workshops.sort((a, b) =>
        a.nome < b.nome ? -1 : 1
      )
      setAttributes(workshopsSortedByName)
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
              {attributes.map((workshops, key) => (
                <li key={key}>
                  <SwiperSlide>
                    <div>
                      <div>
                        <img
                          className="img"
                          src={urlCms + workshops.imageUrl}
                        />
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
export default CarouselWorkshop

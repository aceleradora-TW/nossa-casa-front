import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { cms } from '../../client'
import Facebook from '../partners/face-icon.png'
import Instagram from '../partners/instagram-icon.png'
import Twitter from '../partners/twitter-icon.png'
import Whatsapp from '../partners/whatsapp-icon.png'
import PartnerComponents from './styled.js'

const linkParceire = process.env.REACT_APP_LINK_PARCEIRO

const Partners = () => {
  const [attributes, setAttributes] = useState([])
  const urlCms = process.env.REACT_APP_URL_CMS

  useEffect(() => {
    cms.get('api/partners/?populate=foto').then((response) => {
      const { data } = response.data
      const partners = data.map((data) => {
        return data.attributes
      })
      setAttributes(partners)
    })
  }, [])

  return (
    <PartnerComponents style={{
      background: '#F5BC4A'
    }}>
      <h2>Parceires</h2>
      <p className='description-partners'>
        A Nossa Casa é uma Associação sem fins lucrativos, composta por profissionais, artistas e ativistas do Município de Guarulhos.
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}
        modules={[Navigation]}
        className="my-swiper"
      >
        <section className='partners'>
          <div className="swiper-slide">
            <ul>
              {attributes.map((partners) =>
                <li key={partners.nome}>
                  <SwiperSlide key={partners.nome}>
                    <div className='profile'>
                      <div>
                        {partners.foto?.data?.map(foto => (
                          <img className='img-profile' key={foto.attributes.url} src={urlCms + foto.attributes.url} />
                        ))
                        }
                      </div>
                      <h3>{partners.nome}</h3>
                      <p>{partners.especializacao}</p>
                      <p className='description-profile'>
                        {partners.descricao}
                      </p>
                      <div className='icons-social-media'>
                        <a href={partners.whatsapp}><img src={Whatsapp} /></a>
                        <a href={partners.twitter}><img src={Twitter} /></a>
                        <a href={partners.facebook}><img src={Facebook} /></a>
                        <a href={partners.instagram}><img src={Instagram} /></a>
                      </div>
                    </div>
                  </SwiperSlide>
                </li>
              )}
            </ul>
          </div>
        </section>
      </Swiper>
      <div className='styled-button'>
        <div className='button-partners'>
          <a target='_blank' href={linkParceire} rel="noreferrer">
            Ser parceire
          </a>
        </div>
      </div>
    </PartnerComponents >
  )
}
export default Partners

import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useState, useEffect } from 'react'
import env from 'react-dotenv'
import { cms } from '../../client'
import { ParceireComponents } from './styled'
import { Swiper, SwiperSlide } from 'swiper/react'

const linkParceire = process.env.REACT_APP_LINK_PARCEIRO

const Partners = () => {
  const [attributes, setAttributes] = useState([])
  const urlCms = env.URL_CMS

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
    <ParceireComponents style={{
      background: '#F5BC4A'
    }}>
      <h2>Parceires</h2>
      <p className='title'>
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
        className="mySwiper"
      >
        <section className='parceires'>
          <div className="swiper-slide">
            <ul>
              {attributes.map((partner) => {
                return <li key={partner.nome}>
                  <SwiperSlide key={partner.nome}>
                    <div className='perfil'>
                      <div>
                        {partner.foto?.data?.map(foto => (
                          <img className='profile-image' key={foto.attributes.url} src={urlCms + foto.attributes.url} />
                        ))}
                      </div>
                      <h3>{partner.nome}</h3>
                      <p>{partner.especializacao}</p>
                    </div>
                    <div className='cointainer-description'>
                      <p className='text-box'>
                        {partner.descricao}
                      </p>
                    </div>
                    <div className='social-media-link'>
                      <a href={partner.whatsapp}><img src={Whatsapp} /></a>
                      <a href={partner.twitter}><img src={Twitter} /></a>
                      <a href={partner.facebook}><img src={Facebook} /></a>
                      <a href={partner.instagram}><img src={Instagram} /></a>
                    </div>
                  </SwiperSlide>
                </li>
              }
              )}
            </ul>
          </div>
        </section>
      </Swiper>
      <div className='styled-button'>
        <div className='button-parceire'>
          <a target='_blank' href={linkParceire} rel="noreferrer">
            Ser parceire
          </a>
        </div>
      </div>
    </ParceireComponents >
  )
}
export default Partners

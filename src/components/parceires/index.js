import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { cms } from '../../client'
import Facebook from '../parceires/face-icon.png'
import Instagram from '../parceires/instagram-icon.png'
import Twitter from '../parceires/twitter-icon.png'
import Whatsapp from '../parceires/whatsapp-icon.png'
import ParceireComponents from './styled.js'

const linkParceire = process.env.REACT_APP_LINK_PARCEIRO

const Parceires = () => {
  const [attributes, setAttributes] = useState([])
  const urlCms = process.env.REACT_APP_URL_CMS

  useEffect(() => {
    cms.get('api/partners/?populate=foto').then((response) => {
      const { data } = response.data
      const partners = data
        .filter(partner => partner !== null && partner !== undefined)
        .map((data) => {
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
      <p>
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
              {attributes.map((partners) =>
                <li key={partners.nome}>
                  <SwiperSlide key={partners.nome}>
                    <div className='perfil'>
                      <div>
                        {partners.foto?.data?.map(foto => (
                          <img className='img-perfil' key={foto.attributes.url} src={urlCms + foto.attributes.url} />
                        ))
                        }
                      </div>
                      <h3>{partners.nome}</h3>
                      <p>{partners.especializacao}</p>
                      <p className='perfil-descricao'>
                        {partners.descricao}
                      </p>
                      <div className='icones-rede-sociais'>
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
        <div className='button-parceire'>
          <a target='_blank' href={linkParceire} rel="noreferrer">
            Ser parceire
          </a>
        </div>
      </div>
    </ParceireComponents >
  )
}
export default Parceires

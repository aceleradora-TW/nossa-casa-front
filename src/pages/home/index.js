import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Keyboard, Autoplay } from 'swiper/modules'
import { cms } from '../../service/client'
import Home from './styled'
import mural from './mural.png'
import NavBar from '../../components/navbar'
import ModalGallery from '../../components/galery-modal'
import fotoNossaCasa from './nossacasa.png'
import Parceires from '../../components/parceires'
import Footer from '../../components/footer'
import env from 'react-dotenv'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export function HomePage() {
  const [attributes, setAttributes] = useState([])
  const [galeria, setGaleria] = useState([])
  const [toggle, setToggle] = useState(false)
  const urlCms = env.URL_CMS

  useEffect(() => {
    cms.get('api/events/?populate=foto_divulgacao').then((response) => {
      const { data } = response.data
      const event = data.map((data) => {
        if (data.attributes.destaque) {
          setToggle(!toggle)
          return data.attributes
        }
        return false
      })
      setAttributes(event)
    })
    cms.get('api/gallery/?populate=fotos').then((response) => {
      const images = response.data.data.attributes.fotos.data.map((image, id) => {
        return {
          id,
          url: env.URL_CMS + image.attributes.url
        }
      })

      setGaleria(images)
    }).catch(error => {
      throw new Error(error)
    })
  }, [])

  const swiperStyle = {
    '--swiper-pagination-color': '#FFFFFF',
    '--swiper-navigation-color': '#FFFFFF',
    '--swiper-navigation-prev': {
      'margin- left': '50px'
    },
    width: '100%'
  }
  return (
    <Home background={mural}>
      <NavBar />
      <main>
        <div></div>
        {toggle &&
          <section className="carrossel">
            <Swiper
              modules={[Pagination, Navigation, Keyboard, Autoplay]}
              pagination={{
                type: 'bullets',
                clickable: 'true'
              }}
              navigation={true}
              className="hero-banner"
              style={swiperStyle}
              keyboard={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
            >
              <ul>
                {
                  attributes.map((attribute) =>
                    attribute &&
                    <li key={attribute.nome}>
                      <SwiperSlide className="swiperSliide " key={attribute.nome} >
                        <div className='slide-container'>
                          <h2 className="slidetitulo"> {attribute.nome} </h2>
                          <div className='event-container'>
                            <p className="descricao"> {attribute.descricao}</p>
                          </div>
                          <Link to='#' className='ver-mais'>ver mais sobre o evento</Link>
                          <img src={urlCms + attribute.foto_divulgacao.data.attributes.url} className="slideimage" />
                        </div>
                      </SwiperSlide>
                    </li>
                  )
                }
              </ul>
            </Swiper>
          </section>
        }
        <section className='about'>
          <div className='content'>
            <div className='text'>
              <h2>SOBRE O NOSSA CASA</h2>
              <p className='Textparagraph'>
                A Nossa Casa existe há 5 anos no Município de Guarulhos, a segunda maior cidade do Estado de São Paulo, com cerca de 1.379.182 habitantes, sendo destes 45% autodeclarados negros (soma de pretos e pardos), 51,3% mulheres e em sua maioria residentes de áreas periféricas da cidade e de alguma forma em situação de vulnerabilidade, seja financeira, social ou emocional. Guarulhos é gigante e tem muitas necessidades.
              </p>
              <ModalGallery type={'about'} />
            </div>
            <div className='foto'>
              <img src={fotoNossaCasa} />
            </div>
          </div >
        </section >
        <section className="galeria">
          <h2 className='titulo-galeria'>Galeria de fotos</h2>
          <div className='container-painel'>
            <ul className='painel'>
              {galeria.map((fotos) => (
                <li key={fotos.id}>
                  <p>{fotos.name}</p>
                  <img src={fotos.url} />
                </li>
              ))}
            </ul>
          </div>
          <ModalGallery type={'gallery'} />
        </section>
        <Parceires />
        <Footer />
      </main >
    </Home >
  )
}

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Keyboard, Autoplay } from 'swiper/modules'
import { cms } from '../../client'
import Home from './styled'
import mural from './mural.png'
import NavBar from '../../components/navbar'
import ModalGallery from '../../components/galery-modal'
import fotoNossaCasa from './nossacasa.png'
import Parceires from '../../components/parceires'
import Footer from '../../components/footer'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export function HomePage() {
  const [attributes, setAttributes] = useState([])
  const [galeria, setGaleria] = useState([])
  const [toggle, setToggle] = useState(false)
  const urlCms = process.env.REACT_APP_URL_CMS

  useEffect(() => {
    cms.get('api/events/?populate=foto_divulgacao').then((response) => {
      const { data } = response.data
      const event = data.map((data) => {
        if (data.attributes.destaque) {
          setToggle(!toggle)
          return {
            id: data?.id,
            data: data?.attributes
          }
        }
        return false
      })
      setAttributes(event)
    })
    cms.get('api/gallery/?populate=fotos').then((response) => {
      const images = response.data.data.attributes.fotos.data.map((image, id) => {
        return {
          id,
          url: image.attributes.url
        }
      })
      for (let i = images.length; i > 6; i--) {
        images.pop()
      }
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
    <Home $background={mural}>
      <NavBar />
      <main>
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
                    <SwiperSlide className="style-swiper-slide" key={attribute?.id}>
                      <div className='slide-container'>
                        <h2 className="slide-title"> {attribute.data?.nome} </h2>
                        <div className='event-container'>
                          <p className="descricao"> {attribute.data?.descricao}</p>
                        </div>
                        <Link to={`/events/${attribute?.id}`} className='ver-mais'>Ver mais sobre o evento</Link>
                        <img src={attribute.data?.foto_divulgacao?.data?.attributes?.url} className="slide-image" />
                      </div>
                    </SwiperSlide>
                  )
                }
              </ul>
            </Swiper>
          </section>
        }
        <section className='about'>
          <div className='content'>
            <div className='text'>
              <h2>Sobre o Nossa Casa</h2>
              <p className='Textparagraph'>
                A Nossa Casa existe há 5 anos no Município de Guarulhos, a segunda maior cidade do Estado de São Paulo, com cerca de 1.379.182 habitantes, sendo destes 45% autodeclarados negros (soma de pretos e pardos), 51,3% mulheres e em sua maioria residentes de áreas periféricas da cidade e de alguma forma em situação de vulnerabilidade, seja financeira, social ou emocional. Guarulhos é gigante e tem muitas necessidades.
              </p>
              <button className='styled-button'>
                <Link className="button-about" to={`/sobre`}> Ver mais </Link>
              </button>
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
          <Link className='button-galery' to={`/gallerydetails`}> Saber mais </Link>
        </section>
        <Parceires />
        <Footer />
      </main >
    </Home >
  )
}

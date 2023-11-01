import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Keyboard, Autoplay } from 'swiper/modules'
import { cmsApi } from '../../service/client'
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
  const [highlightedEvents, setHighlightedEvents] = useState([])
  const [galleryImages, setGalleryImages] = useState([])
  const [shouldShowHighlightedEvents, setShouldShowHighlightedEvents] =
    useState(false)

  useEffect(async () => {
    const highlightedEvents = await cmsApi.getHighlightedEvents()

    if (highlightedEvents.length > 0) {
      setShouldShowHighlightedEvents(true)
      setHighlightedEvents(highlightedEvents)
    }

    const galleryImages = await cmsApi.getHomeGaleryImages()
    setGalleryImages(galleryImages)
  }, [])

  const swiperStyle = {
    '--swiper-pagination-color': '#FFFFFF',
    '--swiper-navigation-color': '#FFFFFF',
    '--swiper-navigation-prev': {
      'margin- left': '50px',
    },
    width: '100%',
  }
  return (
    <Home $background={mural}>
      <NavBar />
      <main>
        {shouldShowHighlightedEvents && (
          <section className="carrossel">
            <Swiper
              modules={[Pagination, Navigation, Keyboard, Autoplay]}
              pagination={{
                type: 'bullets',
                clickable: 'true',
              }}
              navigation={true}
              className="hero-banner"
              style={swiperStyle}
              keyboard={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              <ul>
                {highlightedEvents.map((event) => (
                  <SwiperSlide className="style-swiper-slide" key={event.id}>
                    <div className="slide-container">
                      <h2 className="slide-title"> {event.name} </h2>
                      <div className="event-container">
                        <p className="descricao"> {event.description}</p>
                      </div>
                      <Link to="#" className="ver-mais">
                        ver mais sobre o evento
                      </Link>
                      <img src={event.imageUrl} className="slide-image" />
                    </div>
                  </SwiperSlide>
                ))}
              </ul>
            </Swiper>
          </section>
        )}
        <section className="about">
          <div className="content">
            <div className="text">
              <h2>SOBRE O NOSSA CASA</h2>
              <p className="Textparagraph">
                A Nossa Casa existe há 5 anos no Município de Guarulhos, a
                segunda maior cidade do Estado de São Paulo, com cerca de
                1.379.182 habitantes, sendo destes 45% autodeclarados negros
                (soma de pretos e pardos), 51,3% mulheres e em sua maioria
                residentes de áreas periféricas da cidade e de alguma forma em
                situação de vulnerabilidade, seja financeira, social ou
                emocional. Guarulhos é gigante e tem muitas necessidades.
              </p>
              <ModalGallery type={'about'} />
            </div>
            <div className="foto">
              <img src={fotoNossaCasa} />
            </div>
          </div>
        </section>
        <section className="galeria">
          <h2 className="titulo-galeria">Galeria de fotos</h2>
          <div className="container-painel">
            <ul className="painel">
              {galleryImages.map((image, index) => (
                <li key={index}>
                  <p>{image.name}</p>
                  <img src={image.url} />
                </li>
              ))}
            </ul>
          </div>
          <ModalGallery type={'gallery'} />
        </section>
        <Parceires />
        <Footer />
      </main>
    </Home>
  )
}

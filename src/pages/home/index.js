import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import foto from '../../components/parceires/fot.png'
import fotoNossaCasa from './nossacasa.png'
import NavBar from '../../components/navbar'
import Home from './styled'
import mural from './mural.png'
import { cms } from '../../service/client'
import Footer from '../../components/footer'
import ModalGallery from '../../components/galery-modal'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Keyboard, Autoplay } from 'swiper'
import { Link } from 'react-router-dom'

// import required modules
// import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'

export const HomePage = () => {
  const [attributes, setAttributes] = useState([])
  // const [images, setImages] = useState([])

  const dataAttributes = async (response) => {
    const attribute = await response.data.data.map((data) => {
      // console.log(data.attributes)
      if (data.attributes.destaque) {
        return data.attributes
      }
      return false
    })
    setAttributes(attribute)
    return attribute
  }

  useEffect(() => {
    cms.get('api/events/?populate=foto_divulgacao').then((response) => {
      const { data } = response.data
      const attribute = data.map((data) => {
        if (data.attributes.destaque) {
          return data.attributes
        }
        return false
      })
      setAttributes(attribute)
      // dataAttributes(response).then((attribute) => {
      //   if (attribute) {
      //     console.log(attributes)
      //   }
      // })
      // console.log(attributes)
      // if (dataAttributes(response)) {
      //   console.log(attributes)
      //   attributes.foto_divulgacao.map((data) => {
      //     console.log(data)
      //     return setImages(data.attributes.url)
      //   })
      // }
      // console.log('hahah')
      // return console.log('asdadasd')
    })
  }, [])
  console.log(attributes)
  const swiperStyle = {
    '--swiper-pagination-color': '#FFFFFF',
    '--swiper-navigation-color': '#FFFFFF',
    heigh: '100px',
    width: '100%'
  }
  return (
    <Home background={mural}>
      <NavBar />
      <main>
        <section className="carrossel">
          <Swiper
            modules={[Pagination, Navigation, Keyboard, Autoplay]}
            pagination={{
              type: 'bullets',
              clickable: 'true'
            }}
            navigation={true}
            className="mySwiper"
            style={swiperStyle}
            keyboard={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          //   pauseOnMouseEnter: true
          // }}
          >
            <ul>
              {attributes.map((attribute) =>
                <SwiperSlide key={attribute.id} >
                  <div className='slide-container'>
                    <h2 className="slidetitulo"> {'asdasdsasad'} </h2>
                    <div className='event-container'>
                      <p className="descricao">
                      </p>
                      <Link to='#' className='ver-mais'>ver mais sobre o evento</Link>
                    </div>
                    <img src={`http://localhost:1337${attributes.map((data) => data.foto_divulgacao.data.attributes.url)}`} className="slideimage" />
                  </div>
                </SwiperSlide>
              )}
            </ul>
            <SwiperSlide>
              <div>
                <h2 className="slidetitulo"> II Festa Preta </h2>
                <p className="descricao">
                  II Festa Preta A Nossa Casa a convite da Subsecretaria de
                  Igualdade Racial do Município de Guarulhos realizou a II FESTA
                  PRETA na cidade. Em comemoração ao dia 20 de Novembro -
                  Consciência Negra! O evento aconteceu no Parque Bosque Maia e
                  mexeu com as estruturas culturais, pretas, periféricas e
                  independentes da cidade.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h2 className="slidetitulo">II Festa Preta</h2>
                <p className="descricao">
                  II Festa Preta A Nossa Casa a convite da Subsecretaria de
                  Igualdade Racial do Município de Guarulhos realizou a II FESTA
                  PRETA na cidade. Em comemoração ao dia 20 de Novembro -
                  Consciência Negra! O evento aconteceu no Parque Bosque Maia e
                  mexeu com as estruturas culturais, pretas, periféricas e
                  independentes da cidade.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h2 className="slidetitulo"> II Festa Preta </h2>
                <p className="descricao">
                  II Festa Preta A Nossa Casa a convite da Subsecretaria de
                  Igualdade Racial do Município de Guarulhos realizou a II FESTA
                  PRETA na cidade. Em comemoração ao dia 20 de Novembro -
                  Consciência Negra! O evento aconteceu no Parque Bosque Maia e
                  mexeu com as estruturas culturais, pretas, periféricas e
                  independentes da cidade.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h2 className="slidetitulo"> II Festa Preta </h2>
                <p className="descricao">
                  II Festa Preta A Nossa Casa a convite da Subsecretaria de
                  Igualdade Racial do Município de Guarulhos realizou a II FESTA
                  PRETA na cidade. Em comemoração ao dia 20 de Novembro -
                  Consciência Negra! O evento aconteceu no Parque Bosque Maia e
                  mexeu com as estruturas culturais, pretas, periféricas e
                  independentes da cidade.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h2 className="slidetitulo"> II Festa Preta </h2>
                <p className="descricao">
                  II Festa Preta A Nossa Casa a convite da Subsecretaria de
                  Igualdade Racial do Município de Guarulhos realizou a II FESTA
                  PRETA na cidade. Em comemoração ao dia 20 de Novembro -
                  Consciência Negra! O evento aconteceu no Parque Bosque Maia e
                  mexeu com as estruturas culturais, pretas, periféricas e
                  independentes da cidade.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h2 className="slidetitulo"> II Festa Preta </h2>
                <p className="descricao">
                  II Festa Preta A Nossa Casa a convite da Subsecretaria de
                  Igualdade Racial do Município de Guarulhos realizou a II FESTA
                  PRETA na cidade. Em comemoração ao dia 20 de Novembro -
                  Consciência Negra! O evento aconteceu no Parque Bosque Maia e
                  mexeu com as estruturas culturais, pretas, periféricas e
                  independentes da cidade.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h2 className="slidetitulo"> II Festa Preta </h2>
                <p className="descricao">
                  II Festa Preta A Nossa Casa a convite da Subsecretaria de
                  Igualdade Racial do Município de Guarulhos realizou a II FESTA
                  PRETA na cidade. Em comemoração ao dia 20 de Novembro -
                  Consciência Negra! O evento aconteceu no Parque Bosque Maia e
                  mexeu com as estruturas culturais, pretas, periféricas e
                  independentes da cidade.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
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
          <h2>Galeria de fotos</h2>
          <div className="painel">
            <img src={foto} />
            <img src={foto} />
            <img src={foto} />
            <img src={foto} />
            <img src={foto} />
            <img src={foto} />
          </div>
          <ModalGallery type={'gallery'} />
        </section>
        <section className="parceires">
          <h2>Parceires</h2>
          <p>
            A Nossa Casa é uma Associação sem fins lucrativos, composta por
            profissionais, artistas e ativistas do Município de Guarulhos.
          </p>
          <div className="carrossel-perfis">
            <div className="perfil">
              <img />
              <h3>Fulano</h3>
              <p>CEO</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
            <div className="perfil">
              <img />
              <h3>Fulano</h3>
              <p>CEO</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
            <div className="perfil">
              <img />
              <h3>Fulano</h3>
              <p>CEO</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main >
    </Home >

  )
}

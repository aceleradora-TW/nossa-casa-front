import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Keyboard, Autoplay } from 'swiper/modules'
import { cms } from '../../service/client'
import Home from './styled'

import NavBar from '../../components/navbar'
import foto from '../../components/parceires/fot.png'
import ModalGallery from '../../components/galery-modal'
import fotoNossaCasa from './nossacasa.png'
import mural from './mural.png'
import Footer from '../../components/footer'
import posterNossaCasa from './image-0.png'
import espaçoTerapias from './image-1.png'
import quadroNossaCasa from './image-2.png'
import espacoNossaCasa from './image-3.png'
import pinturaNossaCasa from './image-4.png'
import pinturaNossaCasa2 from './image-5.png'

import env from 'react-dotenv'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export const HomePage = () => {
  const [attributes, setAttributes] = useState([])
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
        {toggle &&
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
                      <SwiperSlide key={attribute.nome} >
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
          <h2>Galeria de fotos</h2>
          <div className='painel'>
            <img src={posterNossaCasa} />
            <img src={espaçoTerapias} />
            <img src={quadroNossaCasa} />
            <img src={espacoNossaCasa} />
            <img src={pinturaNossaCasa} />
            <img src={pinturaNossaCasa2} />
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

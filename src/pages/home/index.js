// import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import NavBar from '../../components/navbar'
import Home from './styled'
import image from './Background.png'
import foto from './fot.png'
import mural from './mural.png'
import evento from './evento.png'
// import { cms } from '../../service/client'
import Footer from '../../components/footer'
import ModalGallery from '../../components/galery-modal'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Keyboard, Autoplay } from 'swiper'

// import required modules
// import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'

export const HomePage = () => {
  // const [images, setImages] = useState([])
  // const [index, setIndex] = useState(0)
  // useEffect(() => {
  //   cms.get('api/eventos').then(async (response) => {
  // const { data } = response.data
  // setImages(data.map((data) => data.attributes))
  //   })
  // }, [])
  // const handleSelect = (selectedIndex) => {
  //   console.log(index)
  //   setIndex(selectedIndex + 1)
  //   console.log(index)
  // }
  const swiperStyle = {
    '--swiper-pagination-color': '#FFFFFF',
    '--swiper-pagination-bullet-inactive-color': '#000000',
    '--swiper-navigation-color': '#FFFFFF',
    heigh: '100px',
    width: '100%'
  }
  return (
    <Home background={mural}>
      <NavBar />
      <main>
        <section className="carrossel">
          <h1>EVENTOS</h1>
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
            <SwiperSlide>
            <p>
                II Festa Preta A Nossa Casa a convite da Subsecretaria de Igualdade Racial do Município de Guarulhos realizou a II FESTA PRETA na cidade. Em comemoração ao dia 20 de Novembro - Consciência Negra! O evento aconteceu no Parque Bosque Maia e mexeu com as estruturas culturais, pretas, periféricas e independentes da cidade.

              </p>
              <img src={evento} className="slide" />
            </SwiperSlide>
            <SwiperSlide>
                  <p>
                II Festa Preta A Nossa Casa a convite da Subsecretaria de Igualdade Racial do Município de Guarulhos realizou a II FESTA PRETA na cidade. Em comemoração ao dia 20 de Novembro - Consciência Negra! O evento aconteceu no Parque Bosque Maia e mexeu com as estruturas culturais, pretas, periféricas e independentes da cidade.

              </p>
              <img src={evento} className="slide" />
            </SwiperSlide>
            <SwiperSlide>
                  <p>
                II Festa Preta A Nossa Casa a convite da Subsecretaria de Igualdade Racial do Município de Guarulhos realizou a II FESTA PRETA na cidade. Em comemoração ao dia 20 de Novembro - Consciência Negra! O evento aconteceu no Parque Bosque Maia e mexeu com as estruturas culturais, pretas, periféricas e independentes da cidade.

              </p>
              <img src={evento} className="slide" />
            </SwiperSlide>
            <SwiperSlide>
                  <p>
                II Festa Preta A Nossa Casa a convite da Subsecretaria de Igualdade Racial do Município de Guarulhos realizou a II FESTA PRETA na cidade. Em comemoração ao dia 20 de Novembro - Consciência Negra! O evento aconteceu no Parque Bosque Maia e mexeu com as estruturas culturais, pretas, periféricas e independentes da cidade.

              </p>
              <img src={evento} className="slide" />
            </SwiperSlide>
            <SwiperSlide>
                  <p>
                II Festa Preta A Nossa Casa a convite da Subsecretaria de Igualdade Racial do Município de Guarulhos realizou a II FESTA PRETA na cidade. Em comemoração ao dia 20 de Novembro - Consciência Negra! O evento aconteceu no Parque Bosque Maia e mexeu com as estruturas culturais, pretas, periféricas e independentes da cidade.

              </p>
              <img src={evento} className="slide" />
            </SwiperSlide>
            <SwiperSlide>
                  <p>
                II Festa Preta A Nossa Casa a convite da Subsecretaria de Igualdade Racial do Município de Guarulhos realizou a II FESTA PRETA na cidade. Em comemoração ao dia 20 de Novembro - Consciência Negra! O evento aconteceu no Parque Bosque Maia e mexeu com as estruturas culturais, pretas, periféricas e independentes da cidade.

              </p>
              <img src={evento} className="slide" />
            </SwiperSlide>
            <SwiperSlide>
                  <p>
                II Festa Preta A Nossa Casa a convite da Subsecretaria de Igualdade Racial do Município de Guarulhos realizou a II FESTA PRETA na cidade. Em comemoração ao dia 20 de Novembro - Consciência Negra! O evento aconteceu no Parque Bosque Maia e mexeu com as estruturas culturais, pretas, periféricas e independentes da cidade.

              </p>
              <img src={evento} className="slide" />
            </SwiperSlide>
            <SwiperSlide>
                  <p>
                II Festa Preta A Nossa Casa a convite da Subsecretaria de Igualdade Racial do Município de Guarulhos realizou a II FESTA PRETA na cidade. Em comemoração ao dia 20 de Novembro - Consciência Negra! O evento aconteceu no Parque Bosque Maia e mexeu com as estruturas culturais, pretas, periféricas e independentes da cidade.

              </p>
              <img src={evento} className="slide" />
            </SwiperSlide>
          </Swiper>
        </section>
        <section className="about">
          <div className="content">
            <div>
              <h2>SOBRE O NOSSA CASA</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                lobortis est eget mi condimentum, in dictum massa molestie.
                Vivamus mattis, mauris ac fringilla congue, massa nisi ultrices
                arcu, sit amet vestibulum turpis ipsum id enim. In sit amet nisi
                a tortor maximus egestas. Donec bibendum maximus leo. Aliquam
                volutpat ullamcorper mauris, sed vehicula leo vehicula ac.
                Aliquam erat volutpat. Quisque pulvinar diam ac velit imperdiet
                scelerisque in a eros.
              </p>
            </div>
            <img src={image} />
          </div>
          <button>SAIBA MAIS</button>
        </section>
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
          <ModalGallery />
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
      </main>
    </Home>
  )
}

import Workshops from './styled'
import NavBar from '../../components/navbar/index'
import Parceires from '../../components/parceires'
import Footer from '../../components/footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useState, useEffect } from 'react'
import env from 'react-dotenv'
import { cms } from '../../service/client'

export const WorkshopsPage = () => {
  const [attributes, setAttributes] = useState([])
  const urlCms = env.URL_CMS

  useEffect(() => {
    cms.get('api/partners/?populate=fotos').then((response) => {
      const { data } = response.data
      const workshops = data.map((data) => {
        return data.attributes
      })
      setAttributes(workshops)
    })
  }, [])

  return (
    <Workshops tyle={{
      background: '#F5BC4A'
    }}>
      <NavBar />
      <main>
        <section className='carrossel'>
          <h1>Oficinas</h1>
          <p>era uma vez uma oficinaa era uma vez uma oficinaa era uma vez uma oficinaa era uma vez uma oficinaa era uma vez uma oficinaa</p>
          <div className='search-box'>
              <input type='text' placeholder='Buscar Eventos' className='search-input'></input>
            </div>
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
        modules={Navigation}
        className="mySwiper"
      >
         <section className='oficinas'>
          <div className="swiper-slide">
            <ul>
              {attributes.map((workshops) =>
                <li key={workshops.nome}>
                  <SwiperSlide key={workshops.nome}>
                    <div className='imagem-oficina'>
                    <div>
                        {workshops.foto.data.map(foto => (
                          <img className='img-perfil' key={foto.attributes.url} src={urlCms + foto.attributes.url} />
                        ))
                        }
                      </div>
                      <div className='botao-ver-mais'>
                      <button type='text' placeholder='Ver mais' className='verMais-input'></button>
                      </div>
                    </div>
                  </SwiperSlide>
                </li>
              )}
            </ul>
          </div>
        </section>
         </Swiper>
        </section>

        <Parceires />
        <Footer />
        </main>
    </Workshops>
  )
}

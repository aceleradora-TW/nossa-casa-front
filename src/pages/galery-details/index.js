import { useEffect, useState } from "react"
import NavBar from "../../components/navbar"
import { GaleryStyled } from "./styled"
import { cms } from "../../client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export const GaleryDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [galeria, setGaleria] = useState([])

  useEffect(() => {
    cms
      .get('api/gallery/?populate=fotos')
      .then((response) => {
        const images = response.data.data.attributes.fotos.data.map(
          (image, id) => {
            return {
              id,
              url: process.env.REACT_APP_URL_CMS + image.attributes.url
            }
          }
        )

        setGaleria(images)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }, [])
  console.log(galeria)
  return(
    <>
      <NavBar/>
      <GaleryStyled>
        <div className="container">
              <div className="topo">
                <h2 className="h2-modal-galery">Fotos da Nossa Casa</h2>
              </div>
              <Swiper
                style={{
                  '--swiper-navigation-color': '#516B84',
                  '--swiper-pagination-color': '#FFF',
                  position: 'unset'
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="first-carousel"
              >
                  {galeria.map((fotos) =>
                  (
                    <SwiperSlide key={fotos.id}>
                      <img src={fotos.url} />
                    </SwiperSlide>
                  ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="second-carousel"
              >
                {galeria.map((image) => (
                  <SwiperSlide key={image.id}>
                    <img src={image.url} />
                  </SwiperSlide>
                ))}
              </Swiper>
        </div>
      </GaleryStyled>
    </>
  )
}
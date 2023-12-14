import { useEffect, useState } from "react"
import NavBar from "../../components/navbar"
import { GalleryStyled } from "./styled"
import { cms } from "../../client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export const GalleryDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [gallery, setGallery] = useState([])

  useEffect(() => {
    cms
      .get('api/gallery/?populate=fotos')
      .then((response) => {
        const images = response.data.data.attributes.fotos.data.map(
          (image, id) => {
            return {
              id,
              url: image.attributes.url
            }
          }
        )

        setGallery(images)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }, [])
  return(
    <>
      <NavBar/>
      <GalleryStyled>
        <div className="container">
              <div className="top">
                <h2 className="h2-modal-galery">Fotos da Nossa Casa</h2>
              </div>
              <Swiper
                style={{
                  '--swiper-navigation-color': '#516B84',
                  '--swiper-pagination-color': '#FFF',
                  '--swiper-navigation-sides-offset': '10%',
                  position: 'unset'
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="first-carousel"
              >
                  {gallery.map((fotos) =>
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
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="second-carousel"
                breakpoints={{
                  320: {slidesPerView: 3},
                  520: {slidesPerView: 4},
                  700: {slidesPerView: 5},
                  1100: {slidesPerView: 6}
                }}
              >
                {gallery.map((image) => (
                  <SwiperSlide key={image.id}>
                    <img src={image.url} />
                  </SwiperSlide>
                ))}
              </Swiper>
        </div>
      </GalleryStyled>
    </>
  )
}
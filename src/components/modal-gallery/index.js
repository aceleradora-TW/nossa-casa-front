import { ModalContainer } from './styled'
import { useState, useEffect } from 'react'
import closeIcon from './close-icon.svg'
import { buttonTextByTypes } from '../../types/constants'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { cms } from '../../client'

const ModalGallery = ({ type }) => {
  const [toggleGallery, setToggleGallery] = useState(false)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [galeria, setGaleria] = useState([])

  const toggleGalleryHandler = () => {
    setToggleGallery(!toggleGallery)
  }
  const closeAndRefresh = () => {
    toggleGalleryHandler()
    window.location.reload()
  }

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

  return (
    <>
      <button onClick={toggleGalleryHandler}>{buttonTextByTypes[type]}</button>

      {toggleGallery && (
        <ModalContainer theme={type}>
          <img className="exit" src={closeIcon} onClick={closeAndRefresh} />
          {type === 'gallery' && (
            <>
              <div className="top">
                <h2 className="h2-modal-galery">Fotos da Nossa Casa</h2>
              </div>
              <Swiper
                style={{
                  '--swiper-navigation-color': '#516B84',
                  '--swiper-pagination-color': '#FFF',
                  position: 'unset'
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="swiper-slide-view"
              >
                  {galeria.map((fotos) => (
                    <SwiperSlide key={fotos.id}>
                      <img src={fotos.url} />
                    </SwiperSlide>
                  ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={6}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="swiper-thumbnails"
              >
                {galeria.map((image) => (
                  <SwiperSlide key={image.id}>
                    <img src={image.url} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </ModalContainer>
      )}
    </>
  )
}

export default ModalGallery

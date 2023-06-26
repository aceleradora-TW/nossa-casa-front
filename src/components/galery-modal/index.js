import { ModalContainer } from './styled'
import { useState } from 'react'
import closeIcon from './close-icon.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import nossacasa from './nossacasa.png'
import casa from './casa.png'
import casadentro from './casadentro.png'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

const ModalGallery = () => {
  const [toggleGallery, setToggleGallery] = useState(false)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const toggleGalleryHandler = () => {
    setToggleGallery(!toggleGallery)
  }

  return <>
    <button onClick={toggleGalleryHandler}>Saber mais</button>
    {toggleGallery &&
      <ModalContainer>
        <div className='topo'>
          <h2 className='h2-modal-galery'>Fotos da Nossa Casa</h2>
          <img className='exit' src={closeIcon} onClick={toggleGalleryHandler}/>
        </div>
        <Swiper
        style={{
          '--swiper-navigation-color': '#FFF',
          '--swiper-pagination-color': '#FFF'
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='my-swiper-1'
        >
          <SwiperSlide>
            <img src={nossacasa}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={casa}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={casadentro}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={nossacasa}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={nossacasa}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={nossacasa}/>
          </SwiperSlide>
        </Swiper>
        <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='my-swiper-2'
      >
        <SwiperSlide>
          <img src={nossacasa}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={casa}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={casadentro}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={nossacasa}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={nossacasa}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={nossacasa}/>
        </SwiperSlide>
      </Swiper>
      </ModalContainer>}
  </>
}

export default ModalGallery

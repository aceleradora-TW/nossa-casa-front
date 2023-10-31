import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Caroulsel = (props, { children }) => {
  return (
    <SwiperSlide>
      <img className="img-foto" src={props.src} alt={props.alt} />
      {children}
    </SwiperSlide>
  )
}
